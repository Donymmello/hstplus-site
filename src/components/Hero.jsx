import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { company } from '../data/content';

export default function Hero() {
  return (
    <Box
      id="top"
      sx={{
        bgcolor: 'primary.dark',
        color: '#fff',
        py: { xs: 9, md: 12 },
        textAlign: 'center',
        backgroundImage:
          'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.05), transparent 40%), radial-gradient(circle at 85% 80%, rgba(31,122,61,0.18), transparent 45%)',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="overline" sx={{ color: 'warning.main' }}>
          Consultoria · Formação · Inspeção — Moçambique, desde {company.founded}
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' }, mt: 1.5, mb: 2.5 }}
        >
          Preparamos a sua equipa antes que o risco apareça
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', maxWidth: 620, mx: 'auto', mb: 4 }}>
          Soluções integradas de Saúde, Segurança no Trabalho, Qualidade e Meio Ambiente —
          consultoria técnica, formação profissional e inspeção de equipamentos, para operações
          mais seguras e em conformidade.
        </Typography>
        <Button href="#formacoes" variant="contained" color="secondary" size="large" endIcon={<ArrowOutwardIcon />}>
          Ver Formações
        </Button>
      </Container>
    </Box>
  );
}
