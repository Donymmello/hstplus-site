import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { courseCatalog, totalCourses } from '../data/courses';

export default function Formacoes() {
  const [tab, setTab] = useState(0);
  const active = courseCatalog[tab];

  return (
    <Box id="formacoes" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#EFEDE6' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            02 — Nossas Formações
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 1.5 }}>
            Catálogo de {totalCourses}+ formações técnicas
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
            Formadores experientes e conteúdo adaptado à realidade de cada equipa, com cargas
            horárias definidas para formação básica e reciclagem.
          </Typography>
        </Box>

        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            mb: 4,
            minHeight: 0,
            '& .MuiTab-root': {
              fontSize: '0.72rem',
              fontFamily: '"IBM Plex Mono"',
              fontWeight: 600,
              letterSpacing: '0.03em',
              minHeight: 0,
              py: 1.4,
              px: 2,
              color: 'text.secondary',
            },
            '& .Mui-selected': { color: 'primary.main !important' },
            '& .MuiTabs-indicator': { bgcolor: 'secondary.main', height: 3 },
          }}
        >
          {courseCatalog.map((c) => (
            <Tab key={c.category} label={c.category} />
          ))}
        </Tabs>

        <Box sx={{ bgcolor: '#fff', p: { xs: 3, md: 5 } }}>
          <Grid container spacing={1.5}>
            {active.courses.map((c) => (
              <Grid item xs={12} sm={6} key={c.name}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  sx={{ py: 1.4, borderBottom: '1px solid', borderColor: 'divider' }}
                >
                  <Typography sx={{ fontSize: '0.88rem' }}>{c.name}</Typography>
                  <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.7rem', color: 'secondary.dark', whiteSpace: 'nowrap' }}>
                    {c.basico}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Stack alignItems="center" sx={{ mt: 4 }}>
          <Button href="#contacto" variant="outlined" color="primary" endIcon={<ArrowOutwardIcon />}>
            Pedir Calendário de Formações
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
