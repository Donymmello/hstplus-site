import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { qualityInspection, inspectionCategories } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

export default function InspecaoQualidade() {
  return (
    <Box sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              04 — Inspeção de Qualidade
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 2 }}>
              Mais de 100 certificações em equipamentos
            </Typography>
            <Typography sx={{ color: 'text.secondary', maxWidth: 680, mx: 'auto' }}>
              {qualityInspection}
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ maxWidth: 900, mx: 'auto' }}>
            {inspectionCategories.map((cat) => (
              <Grid item xs={12} sm={6} key={cat.title}>
                <Stack
                  direction="row"
                  spacing={1.2}
                  alignItems="center"
                  sx={{ bgcolor: '#fff', p: 2, height: '100%' }}
                >
                  <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 20, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.88rem' }}>{cat.title}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
}
