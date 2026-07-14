import { useState } from 'react';
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
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { courseCatalog, totalCourses } from '../data/courses';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Formacoes() {
  const [expanded, setExpanded] = useState('panel0');

  return (
    <Box id="formacoes" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionHeader
            index="02"
            eyebrow="Nossas Formações"
            title={`Catálogo de ${totalCourses}+ formações técnicas`}
            align="left"
            introWidth={640}
          >
            Formadores experientes e conteúdo adaptado à realidade de cada equipa, com cargas
            horárias definidas por nível — Básico, Médio e Avançado — organizadas por área de
            actuação.
          </SectionHeader>

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
                  <Table size="small">
                    <TableHead>
                      <TableRow
                        sx={{
                          '& th': {
                            bgcolor: '#EFEDE6',
                            fontFamily: '"IBM Plex Mono"',
                            fontSize: '0.68rem',
                            letterSpacing: '0.04em',
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
                        <TableRow key={c.name} hover>
                          <TableCell sx={{ fontSize: '0.85rem' }}>{c.name}</TableCell>
                          <TableCell align="right" sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.8rem', color: 'secondary.dark' }}>
                            {c.basico}
                          </TableCell>
                          <TableCell align="right" sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.8rem', color: 'primary.main' }}>
                            {c.medio}
                          </TableCell>
                          <TableCell align="right" sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.8rem', color: 'text.secondary' }}>
                            {c.avancado}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Stack alignItems="center" sx={{ mt: 4 }}>
            <Button href="#contacto" variant="outlined" color="primary" endIcon={<ArrowOutwardIcon />}>
              Pedir Calendário de Formações
            </Button>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}
