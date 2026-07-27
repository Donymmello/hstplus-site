import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { courseCatalog, totalCourses } from '../data/courses';
import { legal, certifications } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import formacoesPhoto from '../assets/nossas_formacoes1.jpg';

export default function Formacoes() {
  const [expanded, setExpanded] = useState('panel0');

  return (
    <Box id="formacoes" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionHeader
            index="03"
            eyebrow="Nossas Formações"
            title={`Catálogo de ${totalCourses}+ formações técnicas`}
            align="left"
            introWidth={640}
          >
            Formadores experientes e conteúdo adaptado à realidade de cada equipa, com cargas
            horárias definidas por nível — Básico, Médio e Avançado — organizadas por área de
            actuação.
          </SectionHeader>

          <Reveal delay={0.1}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: { xs: '4/3', md: '21/6' },
                mb: 5,
                '&:hover img': { transform: 'scale(1.04)' },
              }}
            >
              <Box
                component="img"
                src={formacoesPhoto}
                alt="Sessão de formação profissional em sala — HST Plus"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 30%', transition: 'transform 0.6s ease' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'linear-gradient(180deg, rgba(20,24,26,0) 35%, rgba(74,13,20,0.55) 78%, rgba(46,8,16,0.85) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </Box>
          </Reveal>

          <Box>
            {courseCatalog.map((cat, i) => (
              <Accordion
                key={cat.category}
                expanded={expanded === `panel${i}`}
                onChange={(_, isExp) => setExpanded(isExp ? `panel${i}` : false)}
                disableGutters
                elevation={0}
                square
                sx={{
                  bgcolor: '#fff',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderTop: i === 0 ? '1px solid' : 'none',
                  borderTopColor: 'divider',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: { xs: 2, md: 3 }, py: 1 }}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid size="auto">
                      <Typography
                        sx={{
                          fontFamily: '"Big Shoulders Display"',
                          fontWeight: 800,
                          fontSize: '1.6rem',
                          color: 'primary.main',
                          width: 44,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </Typography>
                    </Grid>
                    <Grid size="grow">
                      <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.92rem', md: '1.02rem' } }}>
                        {cat.category}
                      </Typography>
                    </Grid>
                    <Grid size="auto" sx={{ display: { xs: 'none', sm: 'block' } }}>
                      <Chip
                        label={`${cat.courses.length} cursos`}
                        size="small"
                        sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', bgcolor: '#EFEDE6' }}
                      />
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <TableContainer sx={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                    <Table size="small" sx={{ minWidth: { xs: 480, sm: 0 } }}>
                      <TableHead>
                        <TableRow
                          sx={{
                            '& th': {
                              bgcolor: '#EFEDE6',
                              fontFamily: '"IBM Plex Mono"',
                              fontSize: { xs: '0.6rem', sm: '0.68rem' },
                              letterSpacing: '0.04em',
                              px: { xs: 1, sm: 2 },
                              whiteSpace: 'nowrap',
                            },
                          }}
                        >
                          <TableCell>CURSO</TableCell>
                          <TableCell align="right">BÁSICO</TableCell>
                          <TableCell align="right">MÉDIO</TableCell>
                          <TableCell align="right">AVANÇADO</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cat.courses.map((c) => (
                          <TableRow
                            key={c.name}
                            hover
                            component={RouterLink}
                            to={`/formacoes/${c.slug}`}
                            sx={{
                              cursor: 'pointer',
                              textDecoration: 'none',
                              '& td': { borderBottom: '1px solid', borderColor: 'divider' },
                            }}
                          >
                            <TableCell sx={{ fontSize: { xs: '0.78rem', sm: '0.85rem' }, color: 'text.primary', px: { xs: 1, sm: 2 } }}>
                              <Stack direction="row" alignItems="center" spacing={0.5}>
                                <span>{c.name}</span>
                                <ChevronRightIcon sx={{ fontSize: 16, color: 'text.secondary', flexShrink: 0 }} />
                              </Stack>
                            </TableCell>
                            <TableCell align="right" sx={{ fontFamily: '"IBM Plex Mono"', fontSize: { xs: '0.72rem', sm: '0.8rem' }, color: 'secondary.dark', px: { xs: 1, sm: 2 }, whiteSpace: 'nowrap' }}>
                              {c.basico}
                            </TableCell>
                            <TableCell align="right" sx={{ fontFamily: '"IBM Plex Mono"', fontSize: { xs: '0.72rem', sm: '0.8rem' }, color: 'primary.main', px: { xs: 1, sm: 2 }, whiteSpace: 'nowrap' }}>
                              {c.medio}
                            </TableCell>
                            <TableCell align="right" sx={{ fontFamily: '"IBM Plex Mono"', fontSize: { xs: '0.72rem', sm: '0.8rem' }, color: 'text.secondary', px: { xs: 1, sm: 2 }, whiteSpace: 'nowrap' }}>
                              {c.avancado}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Stack alignItems="center" sx={{ mt: 4, mb: 9 }}>
            <Button component={RouterLink} to="/calendario" variant="outlined" color="primary" endIcon={<ArrowOutwardIcon />}>
              Pedir Calendário de Formações
            </Button>
          </Stack>

          <Divider sx={{ mb: 7 }} />

          <Box id="certificacoes">
            <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.72rem', color: 'primary.main', letterSpacing: '0.06em', mb: 1 }}>
              LEGALIDADE &amp; CERTIFICAÇÕES
            </Typography>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.4rem', md: '1.7rem' }, mb: 4 }}>
              Transparência, segurança e responsabilidade
            </Typography>

            <Grid container spacing={2} sx={{ mb: 5 }}>
              {certifications.map((c, i) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={c.title}>
                  <Reveal delay={i * 0.1}>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: 3,
                        height: '100%',
                        borderColor: 'divider',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <VerifiedUserIcon sx={{ color: 'secondary.main', fontSize: 30, mb: 1.5 }} />
                        <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>{c.title}</Typography>
                        <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', mb: 1 }}>{c.subtitle}</Typography>
                      </Box>
                      <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', color: 'primary.main', mt: 1.5 }}>
                        {c.code}
                      </Typography>
                    </Paper>
                  </Reveal>
                </Grid>
              ))}
            </Grid>

            <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', textAlign: 'center', maxWidth: 780, mx: 'auto', mb: 3 }}>
              {legal.text}
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {legal.registrations.map((r) => (
                <Grid size={{ xs: 12, sm: 'auto' }} key={r.label}>
                  <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', textAlign: 'center' }}>
                    {r.label}: <strong style={{ fontFamily: '"IBM Plex Mono"' }}>{r.value}</strong>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
