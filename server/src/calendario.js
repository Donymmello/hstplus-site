import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CALENDARIO_FILE = path.join(__dirname, '..', 'cache', 'calendario.json');

// Enquanto não houver turmas confirmadas, devolve uma lista vazia — a página
// mostra um estado "a confirmar" em vez de inventar datas. A fonte da verdade
// passa a ser server/cache/calendario.json assim que o primeiro PUT acontecer.
const DEFAULT_TURMAS = [];

async function readRaw() {
  try {
    return JSON.parse(await fs.readFile(CALENDARIO_FILE, 'utf-8'));
  } catch {
    return DEFAULT_TURMAS;
  }
}

export async function readTurmas() {
  const turmas = await readRaw();
  // Esconde automaticamente turmas cuja data já passou, para não ter de
  // limpar o ficheiro manualmente a cada turma que acontece.
  const today = new Date().toISOString().slice(0, 10);
  return turmas
    .filter((t) => t.data >= today)
    .sort((a, b) => a.data.localeCompare(b.data));
}

// Usado só pelo painel de administração — inclui turmas passadas, para
// poderem ser editadas/apagadas em vez de ficarem invisíveis para sempre.
export async function readAllTurmas() {
  const turmas = await readRaw();
  return turmas.sort((a, b) => a.data.localeCompare(b.data));
}

const ALLOWED_FIELDS = ['id', 'curso', 'slug', 'categoria', 'data', 'local', 'nivel', 'vagas', 'modalidade', 'preco'];
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function saveTurmas(payload) {
  if (!Array.isArray(payload)) {
    const err = new Error('Esperado um array de turmas, ex: [{ id, curso, data (AAAA-MM-DD), local, nivel, vagas, modalidade, preco }]');
    err.status = 400;
    throw err;
  }

  const clean = payload.map((item, i) => {
    if (!item.id || typeof item.curso !== 'string' || !DATE_RE.test(item.data)) {
      const err = new Error(`Turma inválida no índice ${i} — precisa de id, curso e data no formato AAAA-MM-DD`);
      err.status = 400;
      throw err;
    }
    const out = {};
    for (const f of ALLOWED_FIELDS) out[f] = item[f] ?? '';
    out.vagas = item.vagas === '' || item.vagas === undefined ? null : Number(item.vagas);
    out.preco = item.preco === '' || item.preco === undefined ? null : Number(item.preco);
    return out;
  });

  await fs.mkdir(path.dirname(CALENDARIO_FILE), { recursive: true });
  await fs.writeFile(CALENDARIO_FILE, JSON.stringify(clean, null, 2));

  return clean;
}
