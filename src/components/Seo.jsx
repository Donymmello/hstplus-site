import { useEffect } from 'react';

const SITE_URL = 'https://www.hstplus.co.mz';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_DESCRIPTION =
  'HST Plus, Consultancy & Training — Consultoria, Gestão de Risco, Formação Profissional e Inspeção de Qualidade em Moçambique.';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Actualiza título, descrição, canonical, Open Graph e Twitter Card da rota
 * actual. O index.html só tem os valores por omissão (para a homepage e
 * como rede de segurança antes do React montar) — numa SPA, cada página tem
 * de os substituir em tempo de execução para o Google (que executa JS) ver
 * metadados correctos por rota.
 *
 * Para partilha em redes sociais (WhatsApp, Facebook, LinkedIn — que NÃO
 * executam JS), ver server/src/prerender.js: o nginx desvia pedidos de bots
 * a /insights/:slug para lá, que já devolve HTML estático com as mesmas
 * meta tags. Este componente cobre o caso geral (Google, utilizadores) para
 * todas as outras rotas.
 *
 * `structuredData` (opcional) é injectado como <script type="application/ld+json">
 * e removido ao desmontar, para não empilhar entre navegações client-side.
 */
export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  structuredData,
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} — HST Plus` : 'HST Plus | Consultancy & Training';

  useEffect(() => {
    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    upsertCanonical(url);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
  }, [fullTitle, description, url, image, type, noindex]);

  useEffect(() => {
    if (!structuredData) return undefined;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => script.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(structuredData)]);

  return null;
}

export { SITE_URL };
