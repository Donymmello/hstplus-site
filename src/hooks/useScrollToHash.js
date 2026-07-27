import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Corre em TODA a mudança de rota (não só quando o hash muda) — sem isto,
 * navegar de "/galeria" (sem hash) para "/" (sem hash) não disparava nada,
 * porque o valor de `hash` ficava igual ('' -> ''). Agora depende também de
 * `pathname`, para cobrir esse caso.
 *
 * Com hash (ex: "/#quem-somos") -> scroll suave até à secção.
 * Sem hash -> scroll instantâneo para o topo (nova página começa do início).
 */
export default function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    // pequeno atraso para garantir que a página já montou todo o conteúdo
    const id = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => clearTimeout(id);
  }, [pathname, hash]);
}
