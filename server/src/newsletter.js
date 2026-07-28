import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NEWSLETTER_FILE = path.join(__dirname, '..', 'cache', 'newsletter.json');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function readRaw() {
  try {
    return JSON.parse(await fs.readFile(NEWSLETTER_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

export async function readSubscribers() {
  const list = await readRaw();
  return list.sort((a, b) => new Date(b.subscribedAt) - new Date(a.subscribedAt));
}

export async function subscribe(email) {
  const clean = String(email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(clean)) {
    throw Object.assign(new Error('Email inválido'), { status: 400 });
  }

  const list = await readRaw();
  if (list.some((s) => s.email === clean)) {
    // Já subscrito — não é erro, só não duplica. A pessoa não precisa de saber.
    return { email: clean, alreadySubscribed: true };
  }

  const entry = { id: `n${Date.now()}${Math.floor(Math.random() * 1000)}`, email: clean, subscribedAt: new Date().toISOString() };
  list.push(entry);
  await fs.mkdir(path.dirname(NEWSLETTER_FILE), { recursive: true });
  await fs.writeFile(NEWSLETTER_FILE, JSON.stringify(list, null, 2));
  return { email: clean, alreadySubscribed: false };
}
