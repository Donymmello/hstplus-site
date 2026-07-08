import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import hero from '../assets/hero.jpg';
import HazardDivider from './HazardDivider';
import { company } from '../data/content';
import { totalCourses } from '../data/courses';

const stats = [
  { value: `${new Date().getFullYear() - company.founded}+`, label: 'Anos no terreno' },
  { value: '100+', label: 'Certificações em equipamentos' },
  { value: `${totalCourses}+`, label: 'Formações técnicas' },
];

export default function Hero() {
  return (
    <Box id="top" sx={{ bgcolor: 'primary.dark', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 14, md: 20 }, pb: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="overline" sx={{ color: 'warning.main' }}>
              Consultoria · Formação · Inspeção — Moçambique, desde {company.founded}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.6rem' },
                mt: 1.5,
                mb: 3,
              }}
            >
              Preparamos a sua equipa antes que o risco apareça
            </Typography>
            <Typography sx={{ maxWidth: 560, color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', mb: 4 }}>
              A {company.fullName} desenvolve soluções integradas de Saúde, Segurança no Trabalho,
              Qualidade e Meio Ambiente — consultoria técnica especializada, formação profissional e
              inspeção de equipamentos, para operações mais seguras e em conformidade.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                href="#contacto"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowOutwardIcon />}
              >
                Falar Connosco
              </Button>
              <Button
                href="#formacoes"
                variant="outlined"
                size="large"
                sx={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff', '&:hover': { borderColor: '#fff' } }}
              >
                Ver Formações
              </Button>
            </Stack>

            <Stack direction="row" spacing={{ xs: 3, sm: 5 }} sx={{ mt: 7 }}>
              {stats.map((s, i) => (
                <Box key={s.label}>
                  <Typography sx={{ fontFamily: '"Big Shoulders Display"', fontWeight: 800, fontSize: '2.4rem', lineHeight: 1, color: i === 1 ? 'warning.main' : '#fff' }}>
                    {s.value}
                  </Typography>
                  <Typography sx={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', maxWidth: 110 }}>
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                clipPath: { xs: 'none', md: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' },
              }}
            >
              <Box
                component="img"
                src={hero}
                alt="Técnico HST Plus a realizar trabalho em altura com equipamento de segurança"
                sx={{ width: '100%', display: 'block', aspectRatio: { xs: '4/3', md: '3/4' }, objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 12, md: '18%' },
                  bottom: 16,
                  bgcolor: 'warning.main',
                  color: 'primary.dark',
                  px: 2,
                  py: 1,
                  fontFamily: '"IBM Plex Mono"',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                }}
              >
                EPI CERTIFICADO · TRABALHO EM ALTURA
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      <HazardDivider tone="dark" height={8} />
    </Box>
  );
}
