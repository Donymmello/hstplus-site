import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import gallery1 from '../assets/gallery1.jpg';
import { qualityInspection, inspectionCategories } from '../data/content';

export default function InspecaoQualidade() {
  return (
    <Box sx={{ py: { xs: 8, md: 11 }, bgcolor: '#EFEDE6' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box component="img" src={gallery1} alt="Inspeção técnica de gancho de elevação de cargas" sx={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              04 — Inspeção de Qualidade
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 2 }}>
              Mais de 100 certificações em equipamentos
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 3 }}>{qualityInspection}</Typography>
            <Grid container spacing={1.5}>
              {inspectionCategories.map((cat) => (
                <Grid item xs={12} sm={6} key={cat.title}>
                  <Stack direction="row" spacing={1} alignItems="flex-start">
                    <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 18, mt: 0.3 }} />
                    <Typography sx={{ fontSize: '0.85rem' }}>{cat.title}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
