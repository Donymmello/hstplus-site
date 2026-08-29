import { useEffect } from 'react';
import { getConsent, onConsentChange } from '../lib/cookieConsent';

const GA_ID = import.meta.env.VITE_GA_ID;

function loadGA() {
  if (!GA_ID) {
    console.info('[analytics] VITE_GA_ID não definido Google Analytics desligado.');
    return;
  }
  // Evita carregar duas vezes (ex: em StrictMode/HMR)
  if (document.querySelector(`script[data-ga-id="${GA_ID}"]`)) return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  script.dataset.gaId = GA_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });
}

/**
 * Só carrega o Google Analytics se (a) VITE_GA_ID estiver definido E (b) a
 * pessoa tiver aceitado cookies de analítica no banner (ver CookieConsent.jsx
 * e lib/cookieConsent.js). Sem consentimento explícito, não injecta nada —
 * nem o próprio script do gtag.js chega a ser pedido ao browser.
 */
export default function Analytics() {
  useEffect(() => {
    if (getConsent() === 'accepted') loadGA();

    // Se a pessoa mudar de ideias mais tarde (via "Preferências de Cookies"
    // no rodapé) e aceitar, carrega o GA nesse momento, sem precisar de
    // recarregar a página.
    return onConsentChange((value) => {
      if (value === 'accepted') loadGA();
      // Nota: uma vez carregado o gtag.js, "recusar" depois não o remove
      // fisicamente da página numa SPA — mas deixa de haver novos eventos
      // reportados a partir do momento em que a pessoa recusar, porque
      // paramos de chamar gtag() daí para a frente nas próximas sessões.
    });
  }, []);

  return null;
}
