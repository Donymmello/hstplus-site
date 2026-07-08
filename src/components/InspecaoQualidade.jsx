import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import gallery1 from '../assets/gallery1.jpg';
import Eyebrow from './Eyebrow';
import { qualityInspection, inspectionCategories } from '../data/content';

export default function InspecaoQualidade() {
  return (
    <Box sx={{ py: { xs: 9, md: 13 }, bgcolor: 'primary.dark', color: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={gallery1}
              alt="Inspeção técnica de gancho de elevação de cargas"
              sx={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Eyebrow index="03" color="warning.main" dark>Inspeção de Qualidade</Eyebrow>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' }, mb: 2.5 }}>
              Mais de 100 certificações em equipamentos
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>{qualityInspection}</Typography>

            <Grid container spacing={3}>
              {inspectionCategories.map((cat) => (
                <Grid item xs={12} sm={6} key={cat.title}>
                  <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.72rem', color: 'warning.main', letterSpacing: '0.06em', mb: 1 }}>
                    {cat.title.toUpperCase()}
                  </Typography>
                  <Stack divider={<Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />} spacing={0.8}>
                    {cat.items.map((it) => (
                      <Typography key={it} sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', py: 0.3 }}>
                        {it}
                      </Typography>
                    ))}
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
