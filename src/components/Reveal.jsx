import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

/**
 * Envolve uma secção e aplica um fade-in + leve deslocamento vertical quando
 * entra no viewport — um efeito discreto de transição entre secções, sem
 * saltos de layout (anima opacity/transform, nunca display).
 * Respeita prefers-reduced-motion (ver regra global em index.css).
 */
export default function Reveal({ children, delay = 0, y = 18, sx, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
