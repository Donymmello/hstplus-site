import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sendLeadNotification } from './mailer.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LEADS_FILE = path.join(__dirname, '..', 'cache', 'leads.json');

const REQUIRED_FIELDS = ['nome', 'email', 'telefone', 'organizacao'];

export async function saveLead(payload) {
  const missing = REQUIRED_FIELDS.filter((f) => !payload[f] || !String(payload[f]).trim());
  if (missing.length) {
    const err = new Error(`Campos obrigatórios em falta: ${missing.join(', ')}`);
    err.status = 400;
    throw err;
  }

  const lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    type: payload.type === 'cotacao' ? 'cotacao' : 'informacoes',
    course: payload.course || null,
    nome: String(payload.nome).trim(),
    email: String(payload.email).trim(),
    telefone: String(payload.telefone).trim(),
    organizacao: String(payload.organizacao).trim(),
    cargo: payload.cargo ? String(payload.cargo).trim() : null,
    mensagem: payload.mensagem ? String(payload.mensagem).trim() : null,
    createdAt: new Date().toISOString(),
  };

  await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });

  let existing = [];
  try {
    existing = JSON.parse(await fs.readFile(LEADS_FILE, 'utf-8'));
  } catch {
    existing = [];
  }

  existing.push(lead);
  await fs.writeFile(LEADS_FILE, JSON.stringify(existing, null, 2));

  // O lead já está gravado nesta linha — o email é só uma notificação por
  // cima. Se falhar (SMTP em baixo, credenciais erradas), o pedido nunca se
  // perde, fica sempre disponível em GET /api/leads.
  sendLeadNotification(lead).catch((e) => console.error('[leads] erro inesperado ao notificar:', e.message));

  return lead;
}

export async function readLeads() {
  try {
    return JSON.parse(await fs.readFile(LEADS_FILE, 'utf-8'));
  } catch {
    return [];
  }
}
