import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KPIS_FILE = path.join(__dirname, '..', 'cache', 'kpis.json');

// Valores usados apenas se ainda não existir server/cache/kpis.json (primeiro
// arranque). Depois disto, a fonte da verdade passa a ser o ficheiro.
const DEFAULT_KPIS = [
  { id: 'anos', value: new Date().getFullYear() - 2018, suffix: '+', label: 'Anos no terreno' },
  { id: 'certificacoes', value: 100, suffix: '+', label: 'Certificações em equipamentos' },
  // ponytail: valor fixo, não deriva de src/data/courses.js porque o build
  // Docker da api usa ./server como contexto isolado (não vê src/ do
  // frontend). Se o catálogo de cursos mudar, actualizar aqui também — ou
  // ajustar via Admin > KPIs, que é a fonte da verdade depois do 1º arranque.
  { id: 'formacoes', value: 40, suffix: '+', label: 'Formações técnicas' },
  { id: 'clientes', value: 9, suffix: '+', label: 'Empresas clientes' },
];

export async function readKpis() {
  try {
    return JSON.parse(await fs.readFile(KPIS_FILE, 'utf-8'));
  } catch {
    return DEFAULT_KPIS;
  }
}

const ALLOWED_FIELDS = ['id', 'value', 'suffix', 'label'];

export async function saveKpis(payload) {
  if (!Array.isArray(payload) || payload.length === 0) {
    const err = new Error('Esperado um array de KPIs, ex: [{ id, value, suffix, label }]');
    err.status = 400;
    throw err;
  }

  const clean = payload.map((item, i) => {
    if (!item.id || typeof item.label !== 'string' || Number.isNaN(Number(item.value))) {
      const err = new Error(`KPI inválido no índice ${i} — precisa de id, value (número) e label`);
      err.status = 400;
      throw err;
    }
    const out = {};
    for (const f of ALLOWED_FIELDS) out[f] = item[f] ?? (f === 'suffix' ? '' : undefined);
    out.value = Number(item.value);
    return out;
  });

  await fs.mkdir(path.dirname(KPIS_FILE), { recursive: true });
  await fs.writeFile(KPIS_FILE, JSON.stringify(clean, null, 2));

  return clean;
}
