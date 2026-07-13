import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { gradients } from '../theme';

/**
 * Linha fina fixa no topo do ecrã que mostra o progresso de leitura da página.
 * Fica acima de tudo (inclusive da TopBar/Header), sem interferir no layout.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 3,
        width: `${progress}%`,
        backgroundImage: gradients.secondary,
        zIndex: (theme) => theme.zIndex.appBar + 10,
        transition: 'width 0.1s linear',
      }}
    />
  );
}
