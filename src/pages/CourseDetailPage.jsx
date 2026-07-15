import { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import InfoIcon from '@mui/icons-material/Info';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { findCourseBySlug } from '../data/courses';
import { company } from '../data/content';
import { gradients } from '../theme';
import Reveal from '../components/Reveal';
import LeadFormDialog from '../components/LeadFormDialog';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = findCourseBySlug(slug);
  const [dialog, setDialog] = useState(null); // null | 'informacoes' | 'cotacao'

  useEffect(() => {
    document.title = course ? `${course.name} — HST Plus` : 'Curso não encontrado — HST Plus';
    window.scrollTo({ top: 0 });
  }, [course]);

  if (!course) {
    return (
      <Container maxWidth="sm" sx={{ py: 14, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontSize: '1.8rem', mb: 2 }}>
          Curso não encontrado
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 3 }}>
          O curso que procuras pode ter mudado de nome ou já não está disponível.
        </Typography>
        <Button component={RouterLink} to="/#formacoes" variant="contained" color="secondary">
          Ver todas as formações
        </Button>
      </Container>
    );
  }

  const durations = [
    { label: 'Básico', value: course.basico },
    { label: 'Médio', value: course.medio },
    { label: 'Avançado', value: course.avancado },
  ];

  return (
    <>
      <Box sx={{ backgroundImage: gradients.dark, color: '#fff', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Reveal>
            <Link
              component={RouterLink}
              to="/#formacoes"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6, color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', mb: 3, textDecoration: 'none' }}
            >
              <ArrowBackIcon sx={{ fontSize: 16 }} /> Voltar às formações
            </Link>
            <Chip
              label={course.category}
              size="small"
              sx={{ bgcolor: 'rgba(255,255,255,0.12)', color: '#fff', mb: 2, fontSize: '0.7rem' }}
            />
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 780 }}>
              {course.name}
            </Typography>
          </Reveal>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 9 }, backgroundImage: gradients.surfaceLight }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 6 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal>
                <Typography variant="h4" sx={{ fontSize: '1.1rem', mb: 1.5 }}>
                  Introdução
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 4 }}>{course.intro}</Typography>

                <Typography variant="h4" sx={{ fontSize: '1.1rem', mb: 1.5 }}>
                  Objectivos
                </Typography>
                <Stack spacing={1.2} sx={{ mb: 4 }}>
                  {course.objectives.map((o) => (
                    <Stack direction="row" spacing={1.2} key={o} alignItems="flex-start">
                      <CheckCircleIcon sx={{ fontSize: 18, color: 'secondary.main', mt: 0.3, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '0.92rem', color: 'text.secondary' }}>{o}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Typography variant="h4" sx={{ fontSize: '1.1rem', mb: 1.5 }}>
                  Carga Horária
                </Typography>
                <Grid container spacing={1.5} sx={{ maxWidth: 480 }}>
                  {durations.map((d) => (
                    <Grid size={{ xs: 4 }} key={d.label}>
                      <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', borderColor: 'divider' }}>
                        <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', color: 'text.secondary', mb: 0.5 }}>
                          {d.label.toUpperCase()}
                        </Typography>
                        <Typography sx={{ fontFamily: '"Big Shoulders Display"', fontWeight: 800, fontSize: '1.6rem', color: 'primary.main' }}>
                          {d.value}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Reveal>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal delay={0.1}>
                <Paper elevation={0} sx={{ p: 4, border: '1px solid', borderColor: 'divider', position: { md: 'sticky' }, top: { md: 96 } }}>
                  <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 1 }}>
                    Interessado nesta formação?
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', mb: 3 }}>
                    Pede mais informações ou uma cotação personalizada para a tua equipa.
                  </Typography>
                  <Stack spacing={1.5}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      startIcon={<InfoIcon />}
                      onClick={() => setDialog('informacoes')}
                    >
                      Pedir Informações
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      startIcon={<RequestQuoteIcon />}
                      onClick={() => setDialog('cotacao')}
                    >
                      Pedir Cotação
                    </Button>
                    <Button
                      component="a"
                      href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o curso "${course.name}".`)}`}
                      target="_blank"
                      rel="noreferrer"
                      variant="text"
                      color="secondary"
                      startIcon={<WhatsAppIcon />}
                      sx={{ mt: 0.5 }}
                    >
                      Falar directamente no WhatsApp
                    </Button>
                  </Stack>
                </Paper>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <LeadFormDialog open={dialog !== null} onClose={() => setDialog(null)} type={dialog || 'informacoes'} courseName={course.name} />
    </>
  );
}
