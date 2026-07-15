import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { company } from '../data/content';
import Reveal from './Reveal';
import heroPhoto from '../assets/hero.jpg';

export default function Hero() {
  return (
    <Box
      id="top"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        minHeight: { xs: '84dvh', md: '90dvh' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Foto de fundo full-bleed com zoom lento perpétuo (Ken Burns) */}
      <Box
        component="img"
        src={heroPhoto}
        alt="Formação de segurança da HST Plus no terreno"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transformOrigin: 'center',
          animation: 'hstHeroZoom 24s ease-in-out infinite alternate',
        }}
      />

      {/* Degradê da marca sobre a foto — legibilidade + acabamento premium.
          Efeito de transparência: maroon/ink translúcidos, mais escuro na base
          para o texto assentar e a secção esbater no conteúdo seguinte. */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(180deg, rgba(20,24,26,0.55) 0%, rgba(46,8,16,0.58) 42%, rgba(20,24,26,0.88) 100%), radial-gradient(circle at 82% 78%, rgba(31,122,61,0.22), transparent 46%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center', py: { xs: 10, md: 12 } }}>
        <Reveal>
          <Typography variant="overline" sx={{ color: 'warning.main' }}>
            Consultoria · Formação · Inspeção — Moçambique, desde {company.founded}
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.4rem', sm: '3.4rem', md: '4.4rem' }, mt: 1.5, mb: 2.5 }}
          >
            Transformamos riscos em resultados
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: 620, mx: 'auto', mb: 4 }}>
            Soluções integradas de Saúde, Segurança no Trabalho, Qualidade e Meio Ambiente —
            consultoria técnica, formação profissional e inspeção de equipamentos, para operações
            mais seguras e em conformidade.
          </Typography>
          <Button href="#formacoes" variant="contained" color="secondary" size="large" endIcon={<ArrowOutwardIcon />}>
            Ver Formações
          </Button>
        </Reveal>
      </Container>
    </Box>
  );
}
