import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import about from '../assets/about.jpg';
import { company, values } from '../data/content';

export default function QuemSomos() {
  return (
    <Box id="quem-somos" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box component="img" src={about} alt="Equipa em formação técnica no terreno" sx={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              03 — Quem Somos
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 2.5 }}>
              Uma equipa moçambicana dedicada à sua segurança
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 3 }}>
              <strong style={{ color: '#14181A' }}>{company.fullName}</strong> é uma empresa
              moçambicana fundada em {company.founded}, dedicada à Consultoria, Gestão de Riscos,
              Formação Profissional e Inspeção de Qualidade. Trabalhamos com uma equipa
              multidisciplinar, nacional e internacional, para reduzir a exposição a riscos
              laborais e assegurar o cumprimento da legislação em vigor.
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3.5 }}>
              {values.map((v) => (
                <Chip key={v.title} label={v.title} size="small" sx={{ bgcolor: '#EFEDE6', fontWeight: 600, fontSize: '0.72rem' }} />
              ))}
            </Stack>
            <Button href="#certificacoes" variant="outlined" color="primary" endIcon={<ArrowOutwardIcon />}>
              Saber Mais
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
