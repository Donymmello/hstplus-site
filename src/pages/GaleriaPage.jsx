import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { gradients } from '../theme';
import Reveal from '../components/Reveal';

// NOTA: estas fotos são placeholders — a HST Plus vai enviar o conjunto
// definitivo para substituir. Basta trocar os ficheiros em
// src/assets/gallery/ e actualizar esta lista (mantém múltiplos de 3 para a
// grid ficar sempre alinhada em 3 colunas).
import riggerAltura from '../assets/gallery/rigger-altura.jpg';
import formacaoEquipa from '../assets/gallery/formacao-equipa.jpg';
import inspecaoGancho from '../assets/gallery/inspecao-gancho.jpg';
import salaFormacao from '../assets/gallery/sala-formacao.jpg';
import montagemAndaime from '../assets/gallery/montagem-andaime.jpg';
import conducaoDefensiva from '../assets/gallery/conducao-defensiva.jpg';
import combateIncendio from '../assets/gallery/combate-incendio.jpg';
import equipamentosMedicao from '../assets/gallery/equipamentos-medicao.jpg';
import formacaoSalaManica from '../assets/gallery/formacao-sala-manica.jpg';

const photos = [
  { src: riggerAltura, caption: 'Trabalho em altura com equipamento de protecção certificado' },
  { src: formacaoEquipa, caption: 'Formação prática de segurança em contentor de obra' },
  { src: salaFormacao, caption: 'Formação teórica em sala — Uni-Span, Temane' },
  { src: montagemAndaime, caption: 'Montagem e inspecção de andaime' },
  { src: conducaoDefensiva, caption: 'Formação de condução defensiva — Vale, Tete' },
  { src: combateIncendio, caption: 'Simulação de combate a incêndio' },
  { src: inspecaoGancho, caption: 'Inspecção técnica de gancho de elevação de cargas' },
  { src: equipamentosMedicao, caption: 'Instrumentos de medição e higiene ocupacional' },
  { src: formacaoSalaManica, caption: 'Formação em sala — Manica Moçambique Terminais' },
];

export default function GaleriaPage() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.title = 'Galeria — HST Plus';
  }, []);

  const close = () => setOpenIndex(null);
  const showNext = () => setOpenIndex((i) => (i + 1) % photos.length);
  const showPrev = () => setOpenIndex((i) => (i - 1 + photos.length) % photos.length);

  return (
    <>
      <Box sx={{ py: { xs: 7, md: 9 }, backgroundImage: gradients.dark, color: '#fff', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'warning.main' }}>
            No Terreno
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '2.8rem' }, mt: 1 }}>
            Galeria
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.78)', mt: 1.5, maxWidth: 560, mx: 'auto' }}>
            Fotos das nossas formações, consultorias e inspecções de qualidade no terreno.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 9 }, backgroundImage: gradients.surfaceLight }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 1.5, md: 2 }}>
            {photos.map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={p.src}>
                <Reveal delay={Math.min(i, 8) * 0.06}>
                  <Box
                    onClick={() => setOpenIndex(i)}
                    sx={{
                      position: 'relative',
                      aspectRatio: '1/1',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      '&:hover img': { transform: 'scale(1.06)' },
                      '&:hover .overlay': { opacity: 1 },
                    }}
                  >
                    <Box
                      component="img"
                      src={p.src}
                      alt={p.caption}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(20,24,26,0.55)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'flex-end',
                        p: 2,
                      }}
                    >
                      <ZoomInIcon sx={{ color: '#fff', position: 'absolute', top: 12, right: 12 }} />
                      <Typography sx={{ color: '#fff', fontSize: '0.8rem' }}>{p.caption}</Typography>
                    </Box>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Modal open={openIndex !== null} onClose={close} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'relative', width: '90vw', maxWidth: 900, outline: 'none' }}>
          {openIndex !== null && (
            <>
              <Box
                component="img"
                src={photos[openIndex].src}
                alt={photos[openIndex].caption}
                sx={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block', mx: 'auto' }}
              />
              <Typography sx={{ color: '#fff', textAlign: 'center', mt: 1.5, fontSize: '0.9rem' }}>
                {photos[openIndex].caption}
              </Typography>

              <IconButton onClick={close} aria-label="Fechar" sx={{ position: 'absolute', top: -44, right: -8, color: '#fff' }}>
                <CloseIcon />
              </IconButton>
              <IconButton
                onClick={showPrev}
                aria-label="Foto anterior"
                sx={{ position: 'absolute', left: -8, top: '40%', color: '#fff', bgcolor: 'rgba(0,0,0,0.35)' }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                onClick={showNext}
                aria-label="Foto seguinte"
                sx={{ position: 'absolute', right: -8, top: '40%', color: '#fff', bgcolor: 'rgba(0,0,0,0.35)' }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
