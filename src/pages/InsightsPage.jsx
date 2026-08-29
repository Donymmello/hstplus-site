import { useEffect, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import { gradients } from '../theme';
import Reveal from '../components/Reveal';
import NewsletterSignup from '../components/NewsletterSignup';
import Seo from '../components/Seo';

const API_BASE = import.meta.env.VITE_API_URL || '/api';
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, '');

function formatData(iso) {
  return new Date(iso).toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default function InsightsPage() {
  const [artigos, setArtigos] = useState([]);
  const [status, setStatus] = useState('loading');
  const [categoria, setCategoria] = useState('todas');

  useEffect(() => {
    fetch(`${API_BASE}/insights`)
      .then((r) => r.json())
      .then((data) => {
        setArtigos(Array.isArray(data.artigos) ? data.artigos : []);
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  }, []);

  const categorias = useMemo(() => {
    const set = new Set(artigos.map((a) => a.category).filter(Boolean));
    return ['todas', ...set];
  }, [artigos]);

  const visiveis = categoria === 'todas' ? artigos : artigos.filter((a) => a.category === categoria);

  return (
    <>
      <Seo
        title="Insights"
        description="Artigos técnicos de HSEQ da HST Plus — consultoria, gestão de risco, formação e inspecção de qualidade em Moçambique."
        path="/insights"
      />
      <Box sx={{ py: { xs: 7, md: 9 }, backgroundImage: gradients.dark, color: '#fff', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'warning.main' }}>
            Conhecimento Técnico
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '2.8rem' }, mt: 1 }}>
            Insights
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.78)', mt: 1.5, maxWidth: 560, mx: 'auto' }}>
            Artigos técnicos, tendências e boas práticas de HSEQ, escritos pela equipa da HST Plus.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 9 }, backgroundImage: gradients.surfaceLight, minHeight: '50vh' }}>
        <Container maxWidth="lg">
          {status === 'loading' && (
            <Grid container spacing={3}>
              {[0, 1, 2].map((i) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                  <Skeleton variant="rectangular" height={200} />
                  <Skeleton width="80%" sx={{ mt: 1 }} />
                  <Skeleton width="60%" />
                </Grid>
              ))}
            </Grid>
          )}

          {status === 'error' && (
            <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
              Não foi possível carregar os artigos agora.
            </Typography>
          )}

          {status === 'ok' && artigos.length === 0 && (
            <Reveal>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h4" sx={{ fontSize: '1.2rem', mb: 1.5 }}>
                  Os primeiros artigos estão a caminho
                </Typography>
                <Typography sx={{ color: 'text.secondary', maxWidth: 460, mx: 'auto' }}>
                  Ainda não publicámos nenhum Insight. Subscreve para seres avisado assim que
                  sair o primeiro.
                </Typography>
              </Box>
            </Reveal>
          )}

          {status === 'ok' && artigos.length > 0 && (
            <>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
                {categorias.map((c) => (
                  <Chip
                    key={c}
                    label={c === 'todas' ? 'Todas' : c}
                    onClick={() => setCategoria(c)}
                    color={categoria === c ? 'secondary' : 'default'}
                    sx={{ fontWeight: categoria === c ? 700 : 400, bgcolor: categoria === c ? undefined : '#EFEDE6' }}
                  />
                ))}
              </Stack>

              <Grid container spacing={3}>
                {visiveis.map((a, i) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={a.id}>
                    <Reveal delay={Math.min(i, 6) * 0.06}>
                      <Box
                        component={RouterLink}
                        to={`/insights/${a.slug}`}
                        sx={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                      >
                        <Box sx={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', mb: 1.5, bgcolor: '#EFEDE6' }}>
                          {a.coverImage && (
                            <Box
                              component="img"
                              src={`${API_ORIGIN}${a.coverImage}`}
                              alt={a.title}
                              loading="lazy"
                              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          )}
                        </Box>
                        {a.category && (
                          <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.66rem', letterSpacing: '0.04em', color: 'primary.main', mb: 0.8 }}>
                            {a.category.toUpperCase()}
                          </Typography>
                        )}
                        <Typography sx={{ fontFamily: '"Big Shoulders Display"', fontWeight: 700, fontSize: '1.15rem', mb: 0.8 }}>
                          {a.title}
                        </Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', mb: 1 }}>{a.excerpt}</Typography>
                        <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                          {formatData(a.date)}{a.author ? ` · ${a.author}` : ''}
                        </Typography>
                      </Box>
                    </Reveal>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          <Divider sx={{ my: 7 }} />

          <Box sx={{ maxWidth: 480, mx: 'auto', textAlign: 'center' }}>
            <NewsletterSignup
              variant="light"
              title="Recebe os próximos artigos por email"
              description="Sem spam só um aviso quando publicarmos conteúdo novo."
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
