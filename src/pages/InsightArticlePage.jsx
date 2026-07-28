import { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { gradients } from '../theme';
import Reveal from '../components/Reveal';
import NewsletterSignup from '../components/NewsletterSignup';

const API_BASE = import.meta.env.VITE_API_URL || '/api';
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, '');

function formatData(iso) {
  return new Date(iso).toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default function InsightArticlePage() {
  const { slug } = useParams();
  const [artigo, setArtigo] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ok | notfound | error

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setStatus('loading');
    fetch(`${API_BASE}/insights/${slug}`)
      .then(async (r) => {
        if (r.status === 404) return setStatus('notfound');
        const data = await r.json();
        setArtigo(data.artigo);
        document.title = `${data.artigo.title} — HST Plus`;
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  }, [slug]);

  if (status === 'loading') return null;

  if (status === 'notfound' || status === 'error') {
    return (
      <Container maxWidth="sm" sx={{ py: 14, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontSize: '1.8rem', mb: 2 }}>
          Artigo não encontrado
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 3 }}>
          Este artigo pode ter sido removido ou o link está incorrecto.
        </Typography>
        <Button component={RouterLink} to="/insights" variant="contained" color="secondary">
          Ver todos os Insights
        </Button>
      </Container>
    );
  }

  const paragraphs = artigo.body.split(/\n{2,}/).filter(Boolean);

  return (
    <>
      <Box sx={{ backgroundImage: gradients.dark, color: '#fff', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Reveal>
            <Link
              component={RouterLink}
              to="/insights"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6, color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', mb: 3, textDecoration: 'none' }}
            >
              <ArrowBackIcon sx={{ fontSize: 16 }} /> Voltar aos Insights
            </Link>
            {artigo.category && (
              <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.7rem', letterSpacing: '0.05em', color: 'warning.main', mb: 1.5 }}>
                {artigo.category.toUpperCase()}
              </Typography>
            )}
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, maxWidth: 720 }}>
              {artigo.title}
            </Typography>
            <Typography sx={{ mt: 2, color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
              {formatData(artigo.date)}
              {artigo.author ? ` · ${artigo.author}` : ''}
            </Typography>
          </Reveal>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 9 }, backgroundImage: gradients.surfaceLight }}>
        <Container maxWidth="md">
          {artigo.coverImage && (
            <Reveal>
              <Box
                component="img"
                src={`${API_ORIGIN}${artigo.coverImage}`}
                alt={artigo.title}
                sx={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', mb: 5 }}
              />
            </Reveal>
          )}

          <Reveal delay={0.06}>
            <Box sx={{ maxWidth: 680, mx: 'auto' }}>
              {paragraphs.map((p, i) => (
                <Typography key={i} sx={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'text.primary', mb: 3 }}>
                  {p}
                </Typography>
              ))}

              <Divider sx={{ my: 5 }} />

              <NewsletterSignup
                variant="light"
                title="Gostaste deste artigo?"
                description="Subscreve para receberes os próximos Insights por email."
              />
            </Box>
          </Reveal>
        </Container>
      </Box>
    </>
  );
}
