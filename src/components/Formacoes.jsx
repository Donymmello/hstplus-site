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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gallery2 from '../assets/gallery2.jpg';
import Eyebrow from './Eyebrow';
import { courseCatalog, totalCourses } from '../data/courses';

export default function Formacoes() {
  const [expanded, setExpanded] = useState('panel0');

  return (
    <Box id="formacoes" sx={{ py: { xs: 9, md: 13 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={7}>
            <Eyebrow index="04">Nossas Formações</Eyebrow>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' }, mb: 2 }}>
              Catálogo de {totalCourses}+ formações técnicas
            </Typography>
            <Typography sx={{ color: 'text.secondary', maxWidth: 640 }}>
              Formadores experientes, conteúdo personalizado às necessidades do cliente e cargas
              horárias definidas para formação básica e reciclagem, organizadas por área de
              actuação.
            </Typography>
          </Grid>
        </Grid>

        <Box
          component="img"
          src={gallery2}
          alt="Sessão de formação em sala com colaboradores"
          sx={{ width: '100%', aspectRatio: { xs: '16/10', md: '21/6' }, objectFit: 'cover', my: 5 }}
        />

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
                border: '1px solid',
                borderColor: 'divider',
                borderTop: i === 0 ? '1px solid' : 'none',
                borderTopColor: 'divider',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ px: { xs: 2, md: 3 }, py: 1 }}
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs="auto">
                    <Typography sx={{ fontFamily: '"Big Shoulders Display"', fontWeight: 800, fontSize: '1.6rem', color: 'primary.main', width: 44 }}>
                      {String(i + 1).padStart(2, '0')}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.92rem', md: '1.02rem' } }}>
                      {cat.category}
                    </Typography>
                  </Grid>
                  <Grid item xs="auto" sx={{ display: { xs: 'none', sm: 'block' } }}>
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
                    <TableRow sx={{ '& th': { bgcolor: '#EFEDE6', fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', letterSpacing: '0.04em' } }}>
                      <TableCell>CURSO</TableCell>
                      <TableCell align="right">BÁSICO</TableCell>
                      <TableCell align="right">RECICLAGEM</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cat.courses.map((c) => (
                      <TableRow key={c.name} hover>
                        <TableCell sx={{ fontSize: '0.85rem' }}>{c.name}</TableCell>
                        <TableCell align="right" sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.8rem', color: 'secondary.dark' }}>
                          {c.basico}
                        </TableCell>
                        <TableCell align="right" sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.8rem', color: 'text.secondary' }}>
                          {c.reciclagem}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
