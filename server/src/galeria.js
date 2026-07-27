import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GALERIA_FILE = path.join(__dirname, '..', 'cache', 'galeria.json');
export const UPLOAD_DIR = path.join(__dirname, '..', 'uploads', 'galeria');

async function readRaw() {
  try {
    return JSON.parse(await fs.readFile(GALERIA_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

async function writeRaw(list) {
  await fs.mkdir(path.dirname(GALERIA_FILE), { recursive: true });
  await fs.writeFile(GALERIA_FILE, JSON.stringify(list, null, 2));
}

// Formato exposto ao frontend: nunca o caminho no disco, só o URL público
// servido em /uploads/galeria/<filename> (ver app.use('/uploads', ...) em
// index.js).
function toPublicShape(entry) {
  return {
    id: entry.id,
    url: `/uploads/galeria/${entry.filename}`,
    caption: entry.caption || '',
    order: entry.order,
  };
}

export async function readGaleria() {
  const list = await readRaw();
  return list.sort((a, b) => a.order - b.order).map(toPublicShape);
}

// Usado depois de o multer já ter gravado o ficheiro em disco — só regista os
// metadados (legenda, ordem) associados a esse ficheiro.
export async function addPhoto({ filename, caption }) {
  const list = await readRaw();
  const maxOrder = list.reduce((max, e) => Math.max(max, e.order ?? 0), -1);
  const entry = {
    id: `g${Date.now()}${Math.floor(Math.random() * 1000)}`,
    filename,
    caption: caption || '',
    order: maxOrder + 1,
  };
  list.push(entry);
  await writeRaw(list);
  return toPublicShape(entry);
}

// PUT — recebe [{ id, caption, order }]. IDs presentes na lista actual mas
// ausentes do payload são tratados como remoção: o ficheiro correspondente é
// apagado do disco também, para não acumular imagens órfãs.
export async function saveMeta(payload) {
  if (!Array.isArray(payload)) {
    throw Object.assign(new Error('Esperado um array [{ id, caption, order }]'), { status: 400 });
  }

  const current = await readRaw();
  const payloadIds = new Set(payload.map((p) => p.id));
  const toDelete = current.filter((e) => !payloadIds.has(e.id));

  const updated = payload.map((p) => {
    const original = current.find((e) => e.id === p.id);
    if (!original) {
      throw Object.assign(new Error(`Foto com id "${p.id}" não existe`), { status: 400 });
    }
    return { ...original, caption: String(p.caption ?? ''), order: Number(p.order) || 0 };
  });

  await writeRaw(updated);

  // Apaga os ficheiros das fotos removidas — falha ao apagar um ficheiro não
  // deve impedir a gravação dos metadados (já gravados na linha acima).
  await Promise.all(
    toDelete.map((e) =>
      fs.unlink(path.join(UPLOAD_DIR, e.filename)).catch((err) => console.error('[galeria] falha ao apagar ficheiro:', err.message))
    )
  );

  return readGaleria();
}
