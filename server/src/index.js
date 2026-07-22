import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import 'dotenv/config';
import { refreshCache, readCache } from './fetchPosts.js';
import { saveLead, readLeads } from './leads.js';
import { readKpis, saveKpis } from './kpis.js';
import { readTurmas, readAllTurmas, saveTurmas } from './calendario.js';
import { readDashboard, saveDashboard } from './dashboardPreview.js';

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
  const key = req.query.key || req.headers['x-admin-key'];
  if (!ADMIN_KEY || key !== ADMIN_KEY) {
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

// Calendário de próximas turmas — leitura pública, escrita protegida pela
// mesma ADMIN_KEY. Turmas com data já passada são filtradas automaticamente
// em readTurmas(). Enquanto o ficheiro não existir, devolve lista vazia (a
// página mostra um estado "a confirmar", nunca datas inventadas).
app.get('/api/calendario', async (_req, res) => {
  const turmas = await readTurmas();
  res.json({ ok: true, turmas });
});

// Só para o painel de administração — inclui turmas passadas, para poderem
// ser editadas/apagadas em vez de ficarem invisíveis para sempre.
app.get('/api/calendario/all', async (req, res) => {
  const key = req.query.key || req.headers['x-admin-key'];
  if (!ADMIN_KEY || key !== ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: 'Não autorizado' });
  }
  const turmas = await readAllTurmas();
  res.json({ ok: true, turmas });
});

app.put('/api/calendario', async (req, res) => {
  const key = req.query.key || req.headers['x-admin-key'];
  if (!ADMIN_KEY || key !== ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: 'Não autorizado' });
  }
  try {
    const turmas = await saveTurmas(req.body);
    return res.json({ ok: true, turmas });
  } catch (e) {
    return res.status(e.status || 500).json({ ok: false, error: e.message });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Conteúdo do DashboardPreview.jsx (secção "Visibilidade Operacional" da
// homepage) — leitura pública, escrita protegida pela mesma ADMIN_KEY.
app.get('/api/dashboard-preview', async (_req, res) => {
  const dashboard = await readDashboard();
  res.json({ ok: true, dashboard });
});

app.put('/api/dashboard-preview', async (req, res) => {
  const key = req.query.key || req.headers['x-admin-key'];
  if (!ADMIN_KEY || key !== ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: 'Não autorizado' });
  }
  try {
    const dashboard = await saveDashboard(req.body);
    return res.json({ ok: true, dashboard });
  } catch (e) {
    return res.status(e.status || 500).json({ ok: false, error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`[server] hstplus-blog-api a correr na porta ${PORT}`);
});

// Actualiza a cache uma vez no arranque (não bloqueia o servidor se falhar)...
refreshCache().catch((e) => console.error('[startup] falha ao actualizar cache:', e.message));

// ...e depois no horário definido.
cron.schedule(CRON_SCHEDULE, () => {
  refreshCache().catch((e) => console.error('[cron] falha ao actualizar cache:', e.message));
});
