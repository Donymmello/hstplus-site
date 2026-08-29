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
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import InfoIcon from '@mui/icons-material/Info';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { findCourseBySlug } from '../data/courses';
import { company } from '../data/content';
import { gradients } from '../theme';
import Reveal from '../components/Reveal';
import LeadFormDialog from '../components/LeadFormDialog';
import Seo, { SITE_URL } from '../components/Seo';
import coverImage from '../assets/nossas_formacoes1.jpg';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = findCourseBySlug(slug);
  const [dialog, setDialog] = useState(null); // null | 'informacoes' | 'cotacao'

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [course]);

  if (!course) {
    return (
      <Container maxWidth="sm" sx={{ py: 14, textAlign: 'center' }}>
        <Seo title="Curso não encontrado" noindex />
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

  const courseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.intro,
    provider: {
      '@type': 'Organization',
      name: 'HST Plus, Consultancy & Training',
      sameAs: SITE_URL,
    },
  };

  const packages = [
    { label: 'Standard', value: course.basico },
    { label: 'Plus', value: course.medio },
    { label: 'Premium', value: course.avancado },
  ];

  return (
    <>
      <Seo
        title={course.name}
        description={course.intro}
        path={`/formacoes/${course.slug}`}
        structuredData={courseStructuredData}
      />
      <Box sx={{ position: 'relative', color: '#fff', py: { xs: 6, md: 8 }, overflow: 'hidden' }}>
        <Box
          component="img"
          src={coverImage}
          alt=""
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(160deg, rgba(74,13,20,0.93) 0%, rgba(46,8,16,0.90) 55%, rgba(20,24,26,0.88) 130%)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
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
                <Grid container spacing={1.5} sx={{ maxWidth: 480, mb: 4 }}>
                  {packages.map((p) => (
                    <Grid size={{ xs: 4 }} key={p.label}>
                      <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', borderColor: 'divider' }}>
                        <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', color: 'text.secondary', mb: 0.5 }}>
                          {p.label.toUpperCase()}
                        </Typography>
                        <Typography sx={{ fontFamily: '"Big Shoulders Display"', fontWeight: 800, fontSize: '1.6rem', color: 'primary.main' }}>
                          {p.value}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="h4" sx={{ fontSize: '1.1rem', mb: 1.5 }}>
                  Certificação
                </Typography>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ p: 2.5, mb: 2, bgcolor: '#EEF1EC', border: '1px solid', borderColor: 'divider' }}
                >
                  <WorkspacePremiumIcon sx={{ color: 'primary.main', fontSize: 20, flexShrink: 0, mt: 0.2 }} />
                  <Typography sx={{ fontSize: '0.82rem', color: 'text.primary', lineHeight: 1.6 }}>
                    No final da formação, os participantes realizam uma avaliação (teórica e/ou
                    prática) para medir o aproveitamento. Com base nesse resultado, a HST Plus emite
                    um <strong>Certificado de Aproveitamento</strong> este documento atesta a
                    participação e o desempenho na formação, não sendo um certificado ou diploma
                    académico mas sim qualificação profissional.
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ p: 2.5, bgcolor: '#FFF8E1', border: '1px solid #F0B429' }}
                >
                  <WarningAmberIcon sx={{ color: '#B8860B', fontSize: 20, flexShrink: 0, mt: 0.2 }} />
                  <Typography sx={{ fontSize: '0.82rem', color: 'text.primary', lineHeight: 1.6 }}>
                    Esta formação é um dos requisitos para a execução segura desta actividade, mas
                    não substitui, por si só, a aptidão médica, a avaliação prática individual, a
                    autorização da entidade empregadora, nem os requisitos legais específicos
                    aplicáveis ao local de trabalho.
                  </Typography>
                </Stack>
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
