import { findPublishedBySlug } from './insights.js';

const SITE_URL = 'https://www.hstplus.co.mz';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// HTML mínimo mas completo — só para crawlers (WhatsApp, Facebook, LinkedIn,
// Google, etc.), nunca para visitantes reais (esses continuam a receber o
// SPA normal, servido pelo nginx). Não precisa de replicar a app toda: só
// precisa das meta tags certas + conteúdo visível suficiente para indexação.
function renderMetaHtml({ title, description, image, url, bodyHtml }) {
  return `<!doctype html>
<html lang="pt-MZ">
<head>
<meta charset="UTF-8" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="HST Plus" />
<meta property="og:locale" content="pt_MZ" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:image" content="${image}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${image}" />
<meta http-equiv="refresh" content="0; url=${url}" />
</head>
<body>
${bodyHtml}
<p><a href="${url}">Ver artigo completo em hstplus.co.mz</a></p>
</body>
</html>`;
}

export async function renderInsightPrerender(slug) {
  const artigo = await findPublishedBySlug(slug);
  if (!artigo) return null;

  const url = `${SITE_URL}/insights/${artigo.slug}`;
  const image = artigo.coverImage ? `${SITE_URL}${artigo.coverImage}` : DEFAULT_OG_IMAGE;
  const bodyHtml = `<h1>${escapeHtml(artigo.title)}</h1>
<p>${escapeHtml(artigo.excerpt)}</p>
${artigo.body
  .split(/\n{2,}/)
  .filter(Boolean)
  .map((p) => `<p>${escapeHtml(p)}</p>`)
  .join('\n')}`;

  return renderMetaHtml({
    title: `${artigo.title} — HST Plus`,
    description: artigo.excerpt || artigo.title,
    image,
    url,
    bodyHtml,
  });
}
