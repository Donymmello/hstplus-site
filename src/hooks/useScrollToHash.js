import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Quando se navega para "/#quem-somos" a partir de outra página (ex: da
 * Galeria de volta à Home), o React Router só troca de página — não faz
 * scroll até à âncora sozinho. Este hook trata disso.
 */
export default function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // pequeno atraso para garantir que a página já montou todo o conteúdo
    const id = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => clearTimeout(id);
  }, [hash]);
}
