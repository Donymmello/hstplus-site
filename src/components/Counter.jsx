import { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';

/**
 * Anima um número de 0 até `to` quando entra no ecrã (uma vez só), com easing
 * suave. `suffix` é anexado sem ser animado (ex: "+"). Mantém o mesmo espaço
 * tipográfico do valor final durante toda a contagem para não saltar layout.
 */
export default function Counter({ to, suffix = '', duration = 1400, sx }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setValue(to);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            // easeOutCubic — arranca rápido, desacelera no fim
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <Typography ref={ref} sx={sx}>
      {value}
      {suffix}
    </Typography>
  );
}
