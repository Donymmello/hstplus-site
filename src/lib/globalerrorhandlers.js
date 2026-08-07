const RELOAD_FLAG = 'hstReloadedForChunkError';

// Mensagens típicas quando um ficheiro JS com hash já não existe no
// servidor (normalmente porque saiu um deploy novo enquanto a pessoa tinha
// a aba aberta). Cobrimos Vite/ESM e o padrão mais antigo de webpack, para
// não depender de sabermos ao certo qual bundler está por trás no futuro.
const CHUNK_ERROR_PATTERNS = [
  /failed to fetch dynamically imported module/i,
  /loading chunk .* failed/i,
  /importing a module script failed/i,
];

function isChunkLoadError(message = '') {
  return CHUNK_ERROR_PATTERNS.some((re) => re.test(message));
}

function handleChunkError() {
  // Só recarrega uma vez — se continuar a falhar depois de recarregar, não
  // é um deploy a meio, é outra coisa qualquer, e entrar em loop de reload
  // infinito seria pior do que o problema original.
  if (sessionStorage.getItem(RELOAD_FLAG)) return false;
  sessionStorage.setItem(RELOAD_FLAG, '1');
  window.location.reload();
  return true;
}

/**
 * Cobre os dois tipos de erro que um Error Boundary do React NUNCA apanha,
 * por definição do próprio React:
 *  - erros dentro de event handlers (onClick, onChange, etc.)
 *  - promessas rejeitadas sem catch (async/await em useEffect, por exemplo)
 * Por agora só regista no log; se um dia ligarem um serviço de
 * monitorização (Sentry ou um endpoint próprio), é aqui que se manda.
 */
export function installGlobalErrorHandlers() {
  window.addEventListener('error', (event) => {
    const message = event?.message || '';
    if (isChunkLoadError(message) && handleChunkError()) return;
    console.error('[global error]', event.error || message);
  });

  window.addEventListener('unhandledrejection', (event) => {
    const message = event?.reason?.message || String(event?.reason || '');
    if (isChunkLoadError(message) && handleChunkError()) return;
    console.error('[unhandled rejection]', event.reason);
  });
}