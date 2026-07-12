import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_FILE = path.join(__dirname, '..', 'cache', 'posts.json');

const {
  META_GRAPH_VERSION = 'v20.0',
  FB_PAGE_ID,
  FB_PAGE_ACCESS_TOKEN,
  IG_BUSINESS_ACCOUNT_ID,
  MAX_POSTS = '9',
} = process.env;

const GRAPH_BASE = `https://graph.facebook.com/${META_GRAPH_VERSION}`;

/**
 * Vai buscar as publicações mais recentes da Página de Facebook.
 * Docs: https://developers.facebook.com/docs/graph-api/reference/page/feed/
 */
async function fetchFacebookPosts() {
  if (!FB_PAGE_ID || !FB_PAGE_ACCESS_TOKEN) return [];

  const fields = 'message,full_picture,permalink_url,created_time';
  const url = `${GRAPH_BASE}/${FB_PAGE_ID}/posts?fields=${fields}&limit=${MAX_POSTS}&access_token=${FB_PAGE_ACCESS_TOKEN}`;

  const res = await fetch(url);
  const json = await res.json();
  if (json.error) {
    console.error('[facebook] erro da Graph API:', json.error.message);
    return [];
  }

  return (json.data || [])
    .filter((p) => p.full_picture) // ignora posts só de texto, sem imagem
    .map((p) => ({
      id: `fb_${p.id}`,
      source: 'facebook',
      excerpt: (p.message || '').slice(0, 180),
      image: p.full_picture,
      url: p.permalink_url,
      date: p.created_time,
    }));
}

/**
 * Vai buscar os media mais recentes da conta Instagram Business associada.
 * Docs: https://developers.facebook.com/docs/instagram-api/reference/ig-user/media
 */
async function fetchInstagramPosts() {
  if (!IG_BUSINESS_ACCOUNT_ID || !FB_PAGE_ACCESS_TOKEN) return [];

  const fields = 'caption,media_url,thumbnail_url,permalink,timestamp,media_type';
  const url = `${GRAPH_BASE}/${IG_BUSINESS_ACCOUNT_ID}/media?fields=${fields}&limit=${MAX_POSTS}&access_token=${FB_PAGE_ACCESS_TOKEN}`;

  const res = await fetch(url);
  const json = await res.json();
  if (json.error) {
    console.error('[instagram] erro da Graph API:', json.error.message);
    return [];
  }

  return (json.data || []).map((p) => ({
    id: `ig_${p.id}`,
    source: 'instagram',
    excerpt: (p.caption || '').slice(0, 180),
    // Vídeos não têm media_url utilizável directamente como imagem — usa a thumbnail
    image: p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url,
    url: p.permalink,
    date: p.timestamp,
  }));
}

export async function refreshCache() {
  const [fb, ig] = await Promise.all([
    fetchFacebookPosts().catch((e) => {
      console.error('[facebook] falha ao consultar:', e.message);
      return [];
    }),
    fetchInstagramPosts().catch((e) => {
      console.error('[instagram] falha ao consultar:', e.message);
      return [];
    }),
  ]);

  const merged = [...fb, ...ig]
    .filter((p) => p.image)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, Number(MAX_POSTS));

  const payload = { updatedAt: new Date().toISOString(), posts: merged };
  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await fs.writeFile(CACHE_FILE, JSON.stringify(payload, null, 2));
  console.log(`[cache] actualizada com ${merged.length} publicações em ${payload.updatedAt}`);
  return payload;
}

export async function readCache() {
  try {
    const raw = await fs.readFile(CACHE_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { updatedAt: null, posts: [] };
  }
}

// Permite correr manualmente: npm run fetch:now
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  refreshCache().then(() => process.exit(0));
}
