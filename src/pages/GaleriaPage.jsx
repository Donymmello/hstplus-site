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

// Fotos fornecidas pela HST Plus (Julho 2026). Para trocar/adicionar: colocar o
// ficheiro em src/assets/gallery/, importar aqui, e adicionar/editar uma linha
// na lista `photos` abaixo.
import formacaoAltura1 from '../assets/gallery/formacao-altura-unispan-1.jpg';
import avaliacaoEscrita from '../assets/gallery/avaliacao-escrita-unispan.jpg';
import equipaUnispan1 from '../assets/gallery/equipa-unispan-1.jpg';
import equipaUnispan2 from '../assets/gallery/equipa-unispan-2.jpg';
import encerramentoFormacao from '../assets/gallery/encerramento-formacao-unispan.jpg';
import espacoConfinadoTerminais from '../assets/gallery/espaco-confinado-terminais.jpg';
import visitaTerreno from '../assets/gallery/visita-terreno-unispan.jpg';

const photos = [
  { src: formacaoAltura1, caption: 'Formação em segurança para trabalho em altura — equipa Uni-Span' },
  { src: avaliacaoEscrita, caption: 'Avaliação escrita durante a formação — Uni-Span' },
  { src: equipaUnispan1, caption: 'Equipa formada em Saúde e Segurança no Trabalho — Uni-Span' },
  { src: equipaUnispan2, caption: 'Formação técnica com a equipa Uni-Span' },
  { src: encerramentoFormacao, caption: 'Encerramento de formação com a equipa Uni-Span' },
  { src: espacoConfinadoTerminais, caption: 'Formação de Trabalho em Espaço Confinado — Terminais do Norte' },
  { src: visitaTerreno, caption: 'Visita técnica ao terreno — equipa Uni-Span' },
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
