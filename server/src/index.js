import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import 'dotenv/config';
import { refreshCache, readCache } from './fetchPosts.js';
import { saveLead, readLeads } from './leads.js';
import { readKpis, saveKpis } from './kpis.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
// Padrão: actualiza a cada 6 horas. Ajustável via .env (CRON_SCHEDULE).
const CRON_SCHEDULE = process.env.CRON_SCHEDULE || '0 */6 * * *';
// Chave simples para proteger a leitura dos pedidos (ver .env.example).
const ADMIN_KEY = process.env.ADMIN_KEY || '';

app.get('/api/posts', async (_req, res) => {
  const cache = await readCache();
  res.json(cache);
});

// Recebe os pedidos de "Pedir Informações" / "Pedir Cotação" (ver LeadFormDialog.jsx)
app.post('/api/leads', async (req, res) => {
  try {
    const lead = await saveLead(req.body || {});
    res.status(201).json({ ok: true, id: lead.id });
  } catch (e) {
    res.status(e.status || 500).json({ ok: false, error: e.message });
  }
});

// Leitura simples dos pedidos recebidos — protegida por chave (?key=...) até
// haver um painel de administração a sério.
app.get('/api/leads', async (req, res) => {
  if (!ADMIN_KEY || req.query.key !== ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: 'Não autorizado' });
  }
  const leads = await readLeads();
  return res.json({ ok: true, leads });
});

// KPIs da secção Stats da homepage — leitura pública, escrita protegida por
// chave (mesma ADMIN_KEY já usada em GET /api/leads) até haver um painel a sério.
app.get('/api/kpis', async (_req, res) => {
  const kpis = await readKpis();
  res.json({ ok: true, kpis });
});

app.put('/api/kpis', async (req, res) => {
  const key = req.query.key || req.headers['x-admin-key'];
  if (!ADMIN_KEY || key !== ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: 'Não autorizado' });
  }
  try {
    const kpis = await saveKpis(req.body);
    return res.json({ ok: true, kpis });
  } catch (e) {
    return res.status(e.status || 500).json({ ok: false, error: e.message });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`[server] hstplus-blog-api a correr na porta ${PORT}`);
});

// Actualiza a cache uma vez no arranque (não bloqueia o servidor se falhar)...
refreshCache().catch((e) => console.error('[startup] falha ao actualizar cache:', e.message));

// ...e depois no horário definido.
cron.schedule(CRON_SCHEDULE, () => {
  refreshCache().catch((e) => console.error('[cron] falha ao actualizar cache:', e.message));
});
