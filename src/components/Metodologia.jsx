import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import Eyebrow from './Eyebrow';
import { methodology, trainingApproach } from '../data/content';

function List({ items, color }) {
  return (
    <Stack spacing={1.4}>
      {items.map((it) => (
        <Stack direction="row" spacing={1.2} key={it} alignItems="flex-start">
          <CheckIcon sx={{ fontSize: 18, color, mt: 0.3, flexShrink: 0 }} />
          <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary' }}>{it}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default function Metodologia() {
  return (
    <Box sx={{ py: { xs: 9, md: 13 }, bgcolor: '#EFEDE6' }}>
      <Container maxWidth="lg">
        <Eyebrow index="05">Método Aplicado</Eyebrow>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' }, mb: 6, maxWidth: 700 }}>
          Aulas teóricas e práticas, adaptadas a cada participante
        </Typography>

        <Grid container spacing={4} sx={{ mb: 7 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#fff', p: { xs: 3, md: 4 }, height: '100%', borderTop: '3px solid', borderTopColor: 'primary.main' }}>
              <Typography variant="h4" sx={{ fontSize: '1.2rem', mb: 2.5 }}>
                Nas aulas teóricas
              </Typography>
              <List items={methodology.teorica} color="#7A1420" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#fff', p: { xs: 3, md: 4 }, height: '100%', borderTop: '3px solid', borderTopColor: 'secondary.main' }}>
              <Typography variant="h4" sx={{ fontSize: '1.2rem', mb: 2.5 }}>
                Nas aulas práticas
              </Typography>
              <List items={methodology.pratica} color="#1F7A3D" />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
              <Grid item xs={6}>
                <Box component="img" src={gallery4} alt="Formação de condução defensiva" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Grid>
              <Grid item xs={6}>
                <Box component="img" src={gallery3} alt="Simulação de combate a incêndio" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.72rem', color: 'primary.main', letterSpacing: '0.06em', mb: 2 }}>
              SOLUÇÕES DE TREINAMENTO INOVADORAS
            </Typography>
            <Stack spacing={2.5}>
              {trainingApproach.map((t) => (
                <Box key={t.title}>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 0.3 }}>{t.title}</Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>{t.text}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
