import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import cron from 'node-cron';
import multer from 'multer';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import 'dotenv/config';
import { refreshCache, readCache } from './fetchPosts.js';
import { saveLead, readLeads } from './leads.js';
import { readKpis, saveKpis } from './kpis.js';
import { readTurmas, readAllTurmas, saveTurmas } from './calendario.js';
import { readDashboard, saveDashboard } from './dashboardPreview.js';
import { readGaleria, addPhoto, saveMeta, UPLOAD_DIR } from './galeria.js';
import { readPublished, findPublishedBySlug, readAll as readAllInsights, save as saveInsights, CATEGORIES, INSIGHTS_UPLOAD_DIR } from './insights.js';
import { readSubscribers, subscribe } from './newsletter.js';
import { renderInsightPrerender } from './prerender.js';
import { backupCache } from './backup.js';
import { sendAlert } from './mailer.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Só o próprio site (e localhost em dev) pode chamar a API a partir do
// browser. Defenível via .env (CORS_ORIGIN, separado por vírgulas) para
// cobrir outros ambientes sem editar código.
const CORS_ORIGINS = (process.env.CORS_ORIGIN || 'https://www.hstplus.co.mz,https://hstplus.co.mz,http://localhost:5173')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);
app.use(cors({ origin: CORS_ORIGINS }));
app.use(express.json());

// Limite geral para toda a API — trava scraping/DoS básico sem incomodar uso
// normal (site público + painel admin). Endpoints de escrita pública têm um
// limite à parte, mais apertado (ver formLimiter abaixo).
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', apiLimiter);

// Só para os formulários públicos (leads + newsletter) — estes é que são o
// alvo real de spam/bots. Uma pessoa real não submete o mesmo formulário
// mais de 5x em 15 min.
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Demasiados pedidos tenta novamente daqui a alguns minutos.' },
});

// Serve as fotos da galeria carregadas via /admin (ver POST /api/galeria/upload
// mais abaixo). O nginx, em produção, faz proxy de /uploads/* para aqui —
// ver nginx.conf.
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

const PORT = process.env.PORT || 4000;
// Padrão: actualiza a cada 6 horas. Ajustável via .env (CRON_SCHEDULE).
const CRON_SCHEDULE = process.env.CRON_SCHEDULE || '0 */6 * * *';
// Chave simples para proteger a leitura dos pedidos (ver .env.example).
const ADMIN_KEY = process.env.ADMIN_KEY || '';

// Só por header — nunca por query string (?key=...), que fica gravada em
// logs de acesso do nginx/Caddy e no histórico do navegador.
function requireAdminKey(req, res, next) {
  const key = req.headers['x-admin-key'];
  if (!ADMIN_KEY || key !== ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: 'Não autorizado' });
  }
  next();
}

app.get('/api/posts', async (_req, res) => {
  const cache = await readCache();
  res.json(cache);
});

// Recebe os pedidos de "Pedir Informações" / "Pedir Cotação" (ver LeadFormDialog.jsx)
app.post('/api/leads', formLimiter, async (req, res) => {
  try {
    const lead = await saveLead(req.body || {});
    res.status(201).json({ ok: true, id: lead.id });
  } catch (e) {
    res.status(e.status || 500).json({ ok: false, error: e.message });
  }
});

// Leitura simples dos pedidos recebidos — protegida por chave (?key=...) até
// haver um painel de administração a sério.
app.get('/api/leads', requireAdminKey, async (_req, res) => {
  const leads = await readLeads();
  return res.json({ ok: true, leads });
});

// KPIs da secção Stats da homepage — leitura pública, escrita protegida por
// chave (mesma ADMIN_KEY já usada em GET /api/leads) até haver um painel a sério.
app.get('/api/kpis', async (_req, res) => {
  const kpis = await readKpis();
  res.json({ ok: true, kpis });
});

app.put('/api/kpis', requireAdminKey, async (req, res) => {
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
app.get('/api/calendario/all', requireAdminKey, async (_req, res) => {
  const turmas = await readAllTurmas();
  res.json({ ok: true, turmas });
});

app.put('/api/calendario', requireAdminKey, async (req, res) => {
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

app.put('/api/dashboard-preview', requireAdminKey, async (req, res) => {
  try {
    const dashboard = await saveDashboard(req.body);
    return res.json({ ok: true, dashboard });
  } catch (e) {
    return res.status(e.status || 500).json({ ok: false, error: e.message });
  }
});

// ── Galeria (upload real de fotos, geríveis pelo /admin) ──────────────────
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp']);

const galeriaStorage = multer.diskStorage({
  destination: async (_req, _file, cb) => {
    try {
      await fs.mkdir(UPLOAD_DIR, { recursive: true });
      cb(null, UPLOAD_DIR);
    } catch (e) {
      cb(e);
    }
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname) || '.jpg';
    const unique = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
    cb(null, unique);
  },
});

const uploadGaleria = multer({
  storage: galeriaStorage,
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED_MIME.has(file.mimetype)) {
      return cb(new Error('Formato não suportado usa JPG, PNG ou WEBP'));
    }
    cb(null, true);
  },
});

// Pública — usada pela página /galeria do site.
app.get('/api/galeria', async (_req, res) => {
  const fotos = await readGaleria();
  res.json({ ok: true, fotos });
});

// Upload de uma foto nova. multipart/form-data: campo "foto" (ficheiro) +
// campo opcional "caption" (texto).
app.post('/api/galeria/upload', requireAdminKey, (req, res) => {
  uploadGaleria.single('foto')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ ok: false, error: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ ok: false, error: 'Nenhum ficheiro enviado (campo "foto")' });
    }
    try {
      const foto = await addPhoto({ filename: req.file.filename, caption: req.body.caption });
      const fotos = await readGaleria();
      return res.status(201).json({ ok: true, foto, fotos });
    } catch (e) {
      return res.status(500).json({ ok: false, error: e.message });
    }
  });
});

// Substitui legendas/ordem — IDs omitidos são apagados (metadados + ficheiro).
app.put('/api/galeria', requireAdminKey, async (req, res) => {
  try {
    const fotos = await saveMeta(req.body);
    return res.json({ ok: true, fotos });
  } catch (e) {
    return res.status(e.status || 500).json({ ok: false, error: e.message });
  }
});

// ── Insights (artigos originais, geríveis pelo /admin) ─────────────────────
const insightsStorage = multer.diskStorage({
  destination: async (_req, _file, cb) => {
    try {
      await fs.mkdir(INSIGHTS_UPLOAD_DIR, { recursive: true });
      cb(null, INSIGHTS_UPLOAD_DIR);
    } catch (e) {
      cb(e);
    }
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`);
  },
});

const uploadInsightCover = multer({
  storage: insightsStorage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED_MIME.has(file.mimetype)) {
      return cb(new Error('Formato não suportado usa JPG, PNG ou WEBP'));
    }
    cb(null, true);
  },
});

app.get('/api/insights/categories', (_req, res) => res.json({ ok: true, categories: CATEGORIES }));

// Pública — só artigos publicados.
app.get('/api/insights', async (_req, res) => {
  const artigos = await readPublished();
  res.json({ ok: true, artigos });
});

// Pública — um artigo por slug (só se publicado).
app.get('/api/insights/:slug', async (req, res) => {
  const artigo = await findPublishedBySlug(req.params.slug);
  if (!artigo) return res.status(404).json({ ok: false, error: 'Artigo não encontrado' });
  res.json({ ok: true, artigo });
});

// Admin — inclui rascunhos.
app.get('/api/admin/insights', requireAdminKey, async (_req, res) => {
  const artigos = await readAllInsights();
  res.json({ ok: true, artigos });
});

app.put('/api/insights', requireAdminKey, async (req, res) => {
  try {
    const artigos = await saveInsights(req.body);
    return res.json({ ok: true, artigos });
  } catch (e) {
    return res.status(e.status || 500).json({ ok: false, error: e.message });
  }
});

app.post('/api/insights/upload-cover', requireAdminKey, (req, res) => {
  uploadInsightCover.single('capa')(req, res, (err) => {
    if (err) return res.status(400).json({ ok: false, error: err.message });
    if (!req.file) return res.status(400).json({ ok: false, error: 'Nenhum ficheiro enviado (campo "capa")' });
    return res.status(201).json({ ok: true, url: `/uploads/insights/${req.file.filename}` });
  });
});

// ── Newsletter ──────────────────────────────────────────────────────────
app.post('/api/newsletter/subscribe', formLimiter, async (req, res) => {
  try {
    const result = await subscribe(req.body?.email);
    return res.status(201).json({ ok: true, ...result });
  } catch (e) {
    return res.status(e.status || 500).json({ ok: false, error: e.message });
  }
});

app.get('/api/newsletter', requireAdminKey, async (_req, res) => {
  const subscribers = await readSubscribers();
  res.json({ ok: true, subscribers });
});

// ── Prerender (só para crawlers — ver nginx.conf) ──────────────────────────
// O nginx só encaminha aqui pedidos de bots (WhatsApp, Facebook, LinkedIn,
// Google...) a rotas de artigo. Visitantes humanos nunca chegam a este
// endpoint — continuam a receber o SPA normal directamente do nginx.
app.get('/prerender/insights/:slug', async (req, res) => {
  const html = await renderInsightPrerender(req.params.slug);
  if (!html) return res.status(404).send('Artigo não encontrado');
  res.set('Content-Type', 'text/html; charset=utf-8').send(html);
});

// Rede de segurança — só dispara se alguma rota futura esquecer o try/catch
// e deixar um erro passar por next(err) ou lançar de forma síncrona.
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('[express] erro não tratado numa rota:', err);
  sendAlert('Erro não tratado numa rota', String(err.stack || err)).catch(() => {});
  res.status(500).json({ ok: false, error: 'Erro interno' });
});

app.listen(PORT, () => {
  console.log(`[server] hstplus-blog-api a correr na porta ${PORT}`);
});

// Última linha de defesa — sem isto, uma excepção não apanhada ou uma
// promise rejeitada sem .catch mata o processo em silêncio (só visível em
// `docker logs`, que ninguém vê às 3h da manhã). O `restart: unless-stopped`
// no docker-compose já traz o container de volta sozinho; isto garante que
// também fica um aviso por email antes de sair.
// ponytail: sem cooldown entre alertas — se entrar em crash-loop, recebes um
// email por cada reinício. Aceitável para o volume de tráfego actual; se um
// dia isso incomodar, adicionar um cooldown simples (ex: ficheiro com
// timestamp do último alerta).
process.on('uncaughtException', (err) => {
  console.error('[process] uncaughtException:', err);
  sendAlert('Exceção não apanhada processo vai reiniciar', String(err.stack || err))
    .catch(() => {})
    .finally(() => process.exit(1));
});

process.on('unhandledRejection', (reason) => {
  console.error('[process] unhandledRejection:', reason);
  sendAlert('Promise rejeitada sem .catch', String(reason?.stack || reason)).catch(() => {});
});

// Actualiza a cache uma vez no arranque (não bloqueia o servidor se falhar)...
refreshCache().catch((e) => console.error('[startup] falha ao actualizar cache:', e.message));

// ...e depois no horário definido.
cron.schedule(CRON_SCHEDULE, () => {
  refreshCache().catch((e) => console.error('[cron] falha ao actualizar cache:', e.message));
});

// Backup diário dos ficheiros de dados (leads, subscritores, calendário,
// KPIs, insights) — mais uma vez no arranque, para nunca passar mais de um
// dia sem cópia mesmo que o container reinicie antes das 03:00.
backupCache().catch((e) => console.error('[startup] falha ao criar backup:', e.message));
cron.schedule('0 3 * * *', () => {
  backupCache().catch((e) => console.error('[cron] falha ao criar backup:', e.message));
});
