import { useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Reveal from './Reveal';

import riggerAltura from '../assets/gallery/rigger-altura.jpg';
import formacaoEquipa from '../assets/gallery/formacao-equipa.jpg';
import inspecaoGancho from '../assets/gallery/inspecao-gancho.jpg';
import salaFormacao from '../assets/gallery/sala-formacao.jpg';
import montagemAndaime from '../assets/gallery/montagem-andaime.jpg';
import conducaoDefensiva from '../assets/gallery/conducao-defensiva.jpg';
import combateIncendio from '../assets/gallery/combate-incendio.jpg';
import equipamentosMedicao from '../assets/gallery/equipamentos-medicao.jpg';

const slides = [
  { src: riggerAltura, caption: 'Trabalho em altura com equipamento de protecção certificado' },
  { src: formacaoEquipa, caption: 'Formação prática de segurança em contentor de obra' },
  { src: salaFormacao, caption: 'Formação teórica em sala — Uni-Span, Temane' },
  { src: montagemAndaime, caption: 'Montagem e inspecção de andaime' },
  { src: conducaoDefensiva, caption: 'Formação de condução defensiva — Vale, Tete' },
  { src: combateIncendio, caption: 'Simulação de combate a incêndio' },
  { src: inspecaoGancho, caption: 'Inspecção técnica de gancho de elevação de cargas' },
  { src: equipamentosMedicao, caption: 'Instrumentos de medição e higiene ocupacional' },
];

const AUTOPLAY_MS = 5000;

export default function Galeria() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    pause();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
  };

  return (
    <Box id="galeria" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#0E1112' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'warning.main' }}>
              No Terreno
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, color: '#fff' }}>
              A HST Plus em acção
            </Typography>
          </Box>

          <Box
            onMouseEnter={pause}
            onMouseLeave={resume}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: { xs: '4/5', sm: '16/9' },
              bgcolor: '#000',
            }}
          >
            {slides.map((s, i) => (
              <Box
                key={`${s.src}-${i === index}`}
                component="img"
                src={s.src}
                alt={s.caption}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: i === index ? 1 : 0,
                  transition: 'opacity 0.9s ease',
                  transformOrigin: 'center',
                  animation: i === index ? `hstKenBurns ${AUTOPLAY_MS + 900}ms ease-out forwards` : 'none',
                }}
              />
            ))}

            {/* legenda */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                p: { xs: 2, md: 3 },
                background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)',
              }}
            >
              <Typography sx={{ color: '#fff', fontSize: { xs: '0.82rem', md: '0.9rem' } }}>
                {slides[index].caption}
              </Typography>
            </Box>

            {/* setas */}
            <IconButton
              onClick={prev}
              aria-label="Foto anterior"
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.35)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.55)' },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
            </IconButton>
            <IconButton
              onClick={next}
              aria-label="Foto seguinte"
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.35)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.55)' },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>

          {/* indicadores */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2.5 }}>
            {slides.map((s, i) => (
              <Box
                key={s.src}
                component="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para a foto ${i + 1}`}
                sx={{
                  width: i === index ? 22 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: 'none',
                  cursor: 'pointer',
                  bgcolor: i === index ? 'warning.main' : 'rgba(255,255,255,0.25)',
                  transition: 'all 0.3s ease',
                  p: 0,
                }}
              />
            ))}
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
