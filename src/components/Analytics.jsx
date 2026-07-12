import { useEffect } from 'react';

const GA_ID = import.meta.env.VITE_GA_ID;

/**
 * Carrega o Google Analytics (gtag.js) apenas se VITE_GA_ID estiver definido
 * (ver .env.example na raiz do projecto). Sem esta variável, não injecta nada —
 * assim o site funciona normalmente em desenvolvimento sem "sujar" as métricas.
 * Não renderiza nada visualmente.
 */
export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) {
      console.info('[analytics] VITE_GA_ID não definido — Google Analytics desligado.');
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
  }, []);

  return null;
}
