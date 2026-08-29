import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INSIGHTS_FILE = path.join(__dirname, '..', 'cache', 'insights.json');
export const INSIGHTS_UPLOAD_DIR = path.join(__dirname, '..', 'uploads', 'insights');

export const CATEGORIES = ['Segurança', 'Formação', 'Legislação', 'Casos de Sucesso', 'Estatísticas'];

async function readRaw() {
  try {
    return JSON.parse(await fs.readFile(INSIGHTS_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

async function writeRaw(list) {
  await fs.mkdir(path.dirname(INSIGHTS_FILE), { recursive: true });
  await fs.writeFile(INSIGHTS_FILE, JSON.stringify(list, null, 2));
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Público — só artigos publicados, mais recentes primeiro.
export async function readPublished() {
  const list = await readRaw();
  return list
    .filter((a) => a.status === 'published')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function findPublishedBySlug(slug) {
  const list = await readPublished();
  return list.find((a) => a.slug === slug) || null;
}

// Admin — inclui rascunhos.
export async function readAll() {
  const list = await readRaw();
  return list.sort((a, b) => new Date(b.date) - new Date(a.date));
}

const ALLOWED_FIELDS = ['id', 'slug', 'title', 'excerpt', 'body', 'category', 'coverImage', 'author', 'date', 'status'];

export async function save(payload) {
  if (!Array.isArray(payload)) {
    throw Object.assign(new Error('Esperado um array de artigos'), { status: 400 });
  }

  const usedSlugs = new Set();
  const clean = payload.map((item, i) => {
    if (!item.title || typeof item.title !== 'string' || !item.title.trim()) {
      throw Object.assign(new Error(`Artigo inválido no índice ${i} falta o título`), { status: 400 });
    }
    if (!item.body || typeof item.body !== 'string' || !item.body.trim()) {
      throw Object.assign(new Error(`Artigo "${item.title}" precisa de conteúdo (body)`), { status: 400 });
    }
    let slug = item.slug && String(item.slug).trim() ? slugify(item.slug) : slugify(item.title);
    let uniqueSlug = slug;
    let n = 2;
    while (usedSlugs.has(uniqueSlug)) {
      uniqueSlug = `${slug}-${n}`;
      n += 1;
    }
    usedSlugs.add(uniqueSlug);

    const out = {};
    for (const f of ALLOWED_FIELDS) out[f] = item[f] ?? '';
    out.id = item.id || `i${Date.now()}${Math.floor(Math.random() * 1000)}`;
    out.slug = uniqueSlug;
    out.date = item.date || new Date().toISOString().slice(0, 10);
    out.status = item.status === 'published' ? 'published' : 'draft';
    return out;
  });

  await writeRaw(clean);
  return readAll();
}
