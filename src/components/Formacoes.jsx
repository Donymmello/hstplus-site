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
import Divider from '@mui/material/Divider';
import { courseCatalog, totalCourses, allCourses } from '../data/courses';
import { resolveAcademias } from '../data/academias';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import formacoesPhoto from '../assets/nossas_formacoes1.jpg';

export default function Formacoes() {
  const [expanded, setExpanded] = useState('panel0');
  const academias = resolveAcademias(allCourses);

  const scrollToCatalogo = () => {
    document.getElementById('catalogo-completo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
            horárias definidas por pacote — Standard, Plus e Premium — organizadas por área de
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

          {/* Academias — percursos de desenvolvimento que agrupam os cursos
              reais por objectivo, em vez de só por categoria administrativa.
              Ver "Arquitetura do novo website", secção 5. */}
          <Reveal delay={0.15}>
            <Typography
              sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.7rem', letterSpacing: '0.06em', color: 'primary.main', mb: 2.5 }}
            >
              PERCURSOS DE DESENVOLVIMENTO
            </Typography>
            <Grid container spacing={0.5} sx={{ mb: 6 }}>
              {academias.map((a) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={a.id}>
                  <Box
                    component="button"
                    onClick={scrollToCatalogo}
                    sx={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      bgcolor: 'transparent',
                      border: 'none',
                      borderTop: '3px solid',
                      borderTopColor: 'secondary.main',
                      cursor: 'pointer',
                      p: 2.5,
                      transition: 'background-color 0.2s ease',
                      '&:hover': { bgcolor: 'rgba(31,122,61,0.04)' },
                      '&:hover .academia-arrow': { transform: 'translateX(4px)' },
                    }}
                  >
                    <Typography sx={{ fontFamily: '"Big Shoulders Display"', fontWeight: 700, fontSize: '1.1rem', mb: 0.6 }}>
                      {a.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', mb: 1.5, minHeight: { md: 40 } }}>
                      {a.description}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Box
                        sx={{
                          bgcolor: 'secondary.main',
                          color: '#fff',
                          px: 1,
                          py: 0.3,
                          fontFamily: '"IBM Plex Mono"',
                          fontSize: '0.62rem',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {a.courses.length} FORMAÇÕES
                      </Box>
                      <ArrowOutwardIcon className="academia-arrow" sx={{ fontSize: 14, color: 'secondary.dark', transition: 'transform 0.2s ease' }} />
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Reveal>

          <Divider sx={{ mb: 5 }} />

          <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.7rem', letterSpacing: '0.06em', color: 'text.secondary', mb: 2.5 }}>
            CATÁLOGO COMPLETO POR CATEGORIA
          </Typography>

          <Box id="catalogo-completo">
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
                          <TableCell align="right">STANDARD</TableCell>
                          <TableCell align="right">PLUS</TableCell>
                          <TableCell align="right">PREMIUM</TableCell>
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

          <Stack alignItems="center" sx={{ mt: 4, mb: 1 }}>
            <Button component={RouterLink} to="/calendario" variant="outlined" color="primary" endIcon={<ArrowOutwardIcon />}>
              Pedir Calendário de Formações
            </Button>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}