import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DASHBOARD_FILE = path.join(__dirname, '..', 'cache', 'dashboard-preview.json');

// Ícones disponíveis no frontend (ver ICON_MAP em DashboardPreview.jsx e
// AdminDashboardPanel.jsx) — guardamos só o nome aqui, nunca o componente.
const ICON_OPTIONS = ['FactCheckOutlined', 'CheckCircleOutlined', 'TrendingUp', 'Groups', 'Schedule', 'WarningAmber'];

// Valores usados apenas se ainda não existir server/cache/dashboard-preview.json.
const DEFAULT_DASHBOARD = {
  cards: [
    { id: 'c1', label: 'Inspeções planeadas', value: '24', icon: 'FactCheckOutlined' },
    { id: 'c2', label: 'Conformidade média', value: '94%', icon: 'CheckCircleOutlined' },
    { id: 'c3', label: 'Ações concluídas', value: '18', icon: 'TrendingUp' },
  ],
  chart: [42, 58, 48, 70, 63, 88, 76, 94],
  activity: [
    { id: 'a1', text: 'Plano de emergência — revisão aprovada' },
    { id: 'a2', text: 'Formação em altura — equipa certificada' },
    { id: 'a3', text: 'Inspeção de equipamentos — relatório emitido' },
  ],
};

export async function readDashboard() {
  try {
    return JSON.parse(await fs.readFile(DASHBOARD_FILE, 'utf-8'));
  } catch {
    return DEFAULT_DASHBOARD;
  }
}

function validateCards(cards) {
  if (!Array.isArray(cards) || cards.length === 0) {
    throw Object.assign(new Error('Esperado um array "cards" com pelo menos 1 item'), { status: 400 });
  }
  return cards.map((c, i) => {
    if (!c.id || typeof c.label !== 'string' || typeof c.value === 'undefined') {
      throw Object.assign(new Error(`Card inválido no índice ${i} precisa de id, label e value`), { status: 400 });
    }
    return {
      id: c.id,
      label: c.label,
      value: String(c.value),
      icon: ICON_OPTIONS.includes(c.icon) ? c.icon : ICON_OPTIONS[0],
    };
  });
}

function validateActivity(activity) {
  if (!Array.isArray(activity)) {
    throw Object.assign(new Error('Esperado um array "activity"'), { status: 400 });
  }
  return activity.map((a, i) => {
    if (!a.id || typeof a.text !== 'string' || !a.text.trim()) {
      throw Object.assign(new Error(`Item de actividade inválido no índice ${i} precisa de id e text`), { status: 400 });
    }
    return { id: a.id, text: a.text.trim() };
  });
}

function validateChart(chart) {
  if (!Array.isArray(chart) || chart.length === 0) {
    throw Object.assign(new Error('Esperado um array "chart" com pelo menos 1 número'), { status: 400 });
  }
  return chart.map((n) => Math.max(0, Math.min(100, Number(n) || 0)));
}

export async function saveDashboard(payload) {
  if (!payload || typeof payload !== 'object') {
    throw Object.assign(new Error('Esperado um objecto { cards, chart, activity }'), { status: 400 });
  }
  const clean = {
    cards: validateCards(payload.cards),
    chart: validateChart(payload.chart),
    activity: validateActivity(payload.activity),
  };

  await fs.mkdir(path.dirname(DASHBOARD_FILE), { recursive: true });
  await fs.writeFile(DASHBOARD_FILE, JSON.stringify(clean, null, 2));

  return clean;
}

export { ICON_OPTIONS };
