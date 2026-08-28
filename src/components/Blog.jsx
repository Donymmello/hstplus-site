import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { socials } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const API_URL = `${import.meta.env.VITE_API_URL || '/api'}/posts`;

const sourceIcon = { facebook: FacebookIcon, instagram: InstagramIcon };

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('pt-MZ', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

export default function Blog() {
  const [state, setState] = useState({ loading: true, posts: [], error: false });

  useEffect(() => {
    let cancelled = false;
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setState({ loading: false, posts: data.posts || [], error: false });
      })
      .catch(() => {
        if (!cancelled) setState({ loading: false, posts: [], error: true });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Sem publicações configuradas ainda (ou serviço indisponível) — não mostra a
  // secção vazia/quebrada, mostra um convite para seguir as redes sociais.
  const showFallback = !state.loading && (state.error || state.posts.length === 0);

  return (
    <Box id="blog" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
        <SectionHeader index="09" eyebrow="Blog &amp; Actualidade" title="Últimas publicações" />

        {state.loading && (
          <Grid container spacing={3}>
            {[0, 1, 2].map((i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <Skeleton variant="rectangular" height={180} />
                <Skeleton variant="text" sx={{ mt: 1 }} />
                <Skeleton variant="text" width="60%" />
              </Grid>
            ))}
          </Grid>
        )}

        {showFallback && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography sx={{ color: 'text.secondary', mb: 2 }}>
              Ainda sem publicações ligadas por aqui segue-nos directamente nas redes sociais.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {socials.facebook && (
                <Chip
                  component="a"
                  href={socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  clickable
                  icon={<FacebookIcon />}
                  label="Facebook"
                />
              )}
              {socials.instagram && (
                <Chip
                  component="a"
                  href={socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  clickable
                  icon={<InstagramIcon />}
                  label="Instagram"
                />
              )}
            </Box>
          </Box>
        )}

        {!state.loading && state.posts.length > 0 && (
          <Grid container spacing={3}>
            {state.posts.map((p) => {
              const Icon = sourceIcon[p.source] || FacebookIcon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.id}>
                  <Box
                    component="a"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}
                  >
                    <Box
                      component="img"
                      src={p.image}
                      alt=""
                      loading="lazy"
                      sx={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', mb: 1.5 }}
                    />
                    <Chip
                      size="small"
                      icon={<Icon sx={{ fontSize: '14px !important' }} />}
                      label={formatDate(p.date)}
                      sx={{ fontSize: '0.68rem', mb: 1 }}
                    />
                    <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary' }}>
                      {p.excerpt || 'Ver publicação'}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Reveal>
      </Container>
    </Box>
  );
}
