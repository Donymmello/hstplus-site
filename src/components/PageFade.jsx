import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

/**
 * Aplica um fade leve sempre que a rota muda (mudança de página, ex:
 * "/" -> "/galeria"). Sem depender de bibliotecas de animação: ao mudar de
 * `pathname`, o conteúdo começa invisível e transiciona para opaco.
 */
export default function PageFade({ children }) {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const raf = requestAnimationFrame(() => {
      // pequeníssimo atraso para garantir que o browser regista o estado
      // "invisível" antes de animar para visível (senão não há transição)
      requestAnimationFrame(() => setVisible(true));
    });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <Box
      sx={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.45s ease',
      }}
    >
      {children}
    </Box>
  );
}
