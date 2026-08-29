import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Skeleton from '@mui/material/Skeleton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { gradients } from '../theme';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';

// Fotos originais fornecidas pela HST Plus (Julho 2026) — usadas só como
// rede de segurança, caso a API ainda não tenha nenhuma foto carregada via
// /admin. Uma vez que existam fotos geridas pelo admin, estas deixam de
// aparecer (ver lógica em baixo: só entram se a API devolver 0 fotos).
import formacaoAltura1 from '../assets/gallery/formacao-altura-unispan-1.jpg';
import avaliacaoEscrita from '../assets/gallery/avaliacao-escrita-unispan.jpg';
import equipaUnispan1 from '../assets/gallery/equipa-unispan-1.jpg';
import equipaUnispan2 from '../assets/gallery/equipa-unispan-2.jpg';
import encerramentoFormacao from '../assets/gallery/encerramento-formacao-unispan.jpg';
import espacoConfinadoTerminais from '../assets/gallery/espaco-confinado-terminais.jpg';
import visitaTerreno from '../assets/gallery/visita-terreno-unispan.jpg';

const FALLBACK_PHOTOS = [
  { url: formacaoAltura1, caption: 'Formação em segurança para trabalho em altura equipa Uni-Span' },
  { url: avaliacaoEscrita, caption: 'Avaliação escrita durante a formação Uni-Span' },
  { url: equipaUnispan1, caption: 'Equipa formada em Saúde e Segurança no Trabalho Uni-Span' },
  { url: equipaUnispan2, caption: 'Formação técnica com a equipa Uni-Span' },
  { url: encerramentoFormacao, caption: 'Encerramento de formação com a equipa Uni-Span' },
  { url: espacoConfinadoTerminais, caption: 'Formação de Trabalho em Espaço Confinado Terminais do Norte' },
  { url: visitaTerreno, caption: 'Visita técnica ao terreno equipa Uni-Span' },
];

// As fotos carregadas via admin vêm como caminhos relativos ("/uploads/galeria/xxx.jpg"),
// servidos pelo backend — não pelo mesmo servidor do frontend em dev. Em
// produção (mesmo domínio, nginx faz proxy) a origem fica vazia e o caminho
// relativo já funciona sozinho.
const API_BASE = import.meta.env.VITE_API_URL || '/api';
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, '');

export default function GaleriaPage() {
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ok | error
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}/galeria`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const fotos = Array.isArray(data.fotos) ? data.fotos : [];
        setPhotos(fotos.length > 0 ? fotos.map((f) => ({ url: `${API_ORIGIN}${f.url}`, caption: f.caption })) : FALLBACK_PHOTOS);
        setStatus('ok');
      })
      .catch(() => {
        // Falha na API — mostra as fotos de origem em vez de uma página vazia.
        setPhotos(FALLBACK_PHOTOS);
        setStatus('ok');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const close = () => setOpenIndex(null);
  const showNext = () => setOpenIndex((i) => (i + 1) % photos.length);
  const showPrev = () => setOpenIndex((i) => (i - 1 + photos.length) % photos.length);

  return (
    <>
      <Seo
        title="Galeria"
        description="Fotos da HST Plus no terreno formações, inspecções e trabalho em altura em Moçambique."
        path="/galeria"
      />
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

      <Box sx={{ py: { xs: 6, md: 9 }, backgroundImage: gradients.surfaceLight, minHeight: '40vh' }}>
        <Container maxWidth="lg">
          {status === 'loading' ? (
            <Grid container spacing={{ xs: 1.5, md: 2 }}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                  <Skeleton variant="rectangular" sx={{ aspectRatio: '1/1', width: '100%' }} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container spacing={{ xs: 1.5, md: 2 }}>
              {photos.map((p, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.url}>
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
                        src={p.url}
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
          )}
        </Container>
      </Box>

      <Modal open={openIndex !== null} onClose={close} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'relative', width: '90vw', maxWidth: 900, outline: 'none' }}>
          {openIndex !== null && (
            <>
              <Box
                component="img"
                src={photos[openIndex].url}
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
