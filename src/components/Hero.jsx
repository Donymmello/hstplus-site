import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import PlayCircleOutlined from '@mui/icons-material/PlayCircleOutlined';
import heroPhoto from '../assets/hero.jpg';
import { company } from '../data/content';
import { totalCourses } from '../data/courses';
import Reveal from './Reveal';

const metrics = [
  { value: `${new Date().getFullYear() - company.founded}+`, label: 'anos de operação' },
  { value: '100+', label: 'certificações técnicas' },
  { value: `${totalCourses}+`, label: 'formações disponíveis' },
];

export default function Hero() {
  return (
    <Box id="top" component="section" sx={{ position: 'relative', minHeight: { xs: 'auto', md: 'min(780px, calc(100dvh - 72px))' }, overflow: 'hidden', color: '#fff', display: 'flex', alignItems: 'center', py: { xs: 9, md: 7 } }}>
      <Box component="img" src={heroPhoto} alt="Formação de segurança da HST Plus no terreno" fetchPriority="high" sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', animation: 'hstHeroZoom 20s ease-in-out infinite alternate' }} />
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(13,21,20,.97) 0%, rgba(13,21,20,.86) 42%, rgba(13,21,20,.35) 100%), linear-gradient(0deg, rgba(13,21,20,.72), transparent 42%)' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', width: '100%' }}>
        <Box sx={{ maxWidth: 690 }}>
          <Reveal y={18}>
            <Typography variant="overline" sx={{ color: '#F6C859', display: 'block', mb: 2 }}>CONSULTORIA, FORMAÇÃO E INSPEÇÃO</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '3.4rem', sm: '4.5rem', md: '5.7rem' }, maxWidth: 670, textWrap: 'balance' }}>Segurança que sustenta operações de alto desempenho.</Typography>
            <Typography sx={{ mt: 3, maxWidth: 570, fontSize: { xs: '1rem', md: '1.12rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,.78)' }}>Capacitamos equipas, controlamos riscos e fortalecemos a conformidade das organizações que fazem Moçambique avançar.</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
              <Button href="#contacto" variant="contained" color="secondary" endIcon={<ArrowOutwardIcon />}>Falar com um especialista</Button>
              <Button href="#formacoes" variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.42)', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,.08)' } }} startIcon={<PlayCircleOutlined />}>Explorar formações</Button>
            </Stack>
          </Reveal>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 0 }} divider={<Box sx={{ display: { xs: 'none', sm: 'block' }, width: '1px', bgcolor: 'rgba(255,255,255,.22)' }} />} sx={{ mt: { xs: 7, md: 8 }, maxWidth: 660 }}>
          {metrics.map((metric) => <Box key={metric.label} sx={{ flex: 1, pr: { sm: 3 }, pl: { sm: 3 }, '&:first-of-type': { pl: 0 } }}><Typography sx={{ fontFamily: 'IBM Plex Mono', fontWeight: 600, fontSize: { xs: '1.6rem', md: '1.9rem' }, fontVariantNumeric: 'tabular-nums' }}>{metric.value}</Typography><Typography sx={{ mt: .35, color: 'rgba(255,255,255,.62)', fontSize: '.78rem' }}>{metric.label}</Typography></Box>)}
        </Stack>
      </Container>
    </Box>
  );
}
