import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.join(__dirname, '..', 'cache');
const BACKUP_DIR = path.join(CACHE_DIR, '_backups');

// Quantos dias de backups manter — evita crescimento infinito do disco.
const KEEP_DAYS = 14;

// ponytail: backup fica no mesmo volume Docker que os dados originais —
// protege contra escrita corrompida, ficheiro apagado por engano ou erro no
// painel admin, mas NÃO protege contra perda do volume/disco todo. Se/quando
// houver credenciais de armazenamento externo (S3, Backblaze, etc.), trocar
// a cópia local por `rclone sync` para lá.

/** Copia todos os *.json directamente em cache/ para cache/_backups/<data>/. */
export async function backupCache() {
  const stamp = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const dest = path.join(BACKUP_DIR, stamp);
  await fs.mkdir(dest, { recursive: true });

  const entries = await fs.readdir(CACHE_DIR, { withFileTypes: true });
  const jsonFiles = entries.filter((e) => e.isFile() && e.name.endsWith('.json'));

  await Promise.all(
    jsonFiles.map((e) => fs.copyFile(path.join(CACHE_DIR, e.name), path.join(dest, e.name)))
  );

  await pruneOldBackups();
  return { date: stamp, files: jsonFiles.length };
}

async function pruneOldBackups() {
  let dirs;
  try {
    dirs = await fs.readdir(BACKUP_DIR, { withFileTypes: true });
  } catch {
    return; // ainda não existe backup nenhum
  }

  const cutoff = Date.now() - KEEP_DAYS * 24 * 60 * 60 * 1000;
  await Promise.all(
    dirs
      .filter((d) => d.isDirectory() && !Number.isNaN(Date.parse(d.name)) && Date.parse(d.name) < cutoff)
      .map((d) => fs.rm(path.join(BACKUP_DIR, d.name), { recursive: true, force: true }))
  );
}
