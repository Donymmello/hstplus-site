const STORAGE_KEY = 'hstCookieConsent';

/**
 * Modelo simples de opt-in: enquanto não houver escolha guardada, nada de
 * cookies de analítica é carregado — a escolha por defeito é "não". Isto é
 * mais seguro do ponto de vista de conformidade do que um banner meramente
 * informativo com tudo já ligado por trás.
 */
export function getConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY); // 'accepted' | 'declined' | null
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // localStorage indisponível (modo privado/restrições do browser) — a
    // pessoa só vai ver o banner outra vez na próxima visita, sem drama.
  }
  window.dispatchEvent(new CustomEvent('hst:consent-change', { detail: value }));
}

export function onConsentChange(callback) {
  const handler = (e) => callback(e.detail);
  window.addEventListener('hst:consent-change', handler);
  return () => window.removeEventListener('hst:consent-change', handler);
}
