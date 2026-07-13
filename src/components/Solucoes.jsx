import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PolicyIcon from '@mui/icons-material/Policy';
import SchoolIcon from '@mui/icons-material/School';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { gradients } from '../theme';
import Reveal from './Reveal';

const pillars = [
  {
    icon: PolicyIcon,
    title: 'Consultoria',
    text: 'Levantamento e análise de riscos, planos de segurança e emergência, políticas de SST e implementação de Sistemas de Gestão Integrada (ISO 9001, 14001 e 45001).',
    href: '#quem-somos',
  },
  {
    icon: SchoolIcon,
    title: 'Formação',
    text: 'Mais de 30 formações técnicas e preventivas, com formadores experientes e conteúdo adaptado à realidade de cada equipa e sector de actividade.',
    href: '#formacoes',
  },
  {
    icon: FactCheckIcon,
    title: 'Inspeção de Qualidade',
    text: 'Mais de 100 certificações em equipamentos de elevação de cargas e trabalho em altura, com padrões elevados de segurança e conformidade.',
    href: '#certificacoes',
  },
];

export default function Solucoes() {
  return (
    <Box id="solucoes" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            01 — O Que Fazemos
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1 }}>
            Três pilares, uma só missão de segurança
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Grid item xs={12} md={4} key={p.title}>
                <Reveal delay={i * 0.12}>
                  <Box
                    component="a"
                    href={p.href}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'inherit',
                      height: '100%',
                      p: 4,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'border-color 0.2s ease, transform 0.2s ease',
                      '&:hover': { borderColor: 'secondary.main', transform: 'translateY(-3px)' },
                    }}
                  >
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{ width: 56, height: 56, backgroundImage: gradients.primary, mb: 3 }}
                    >
                      <Icon sx={{ color: 'warning.main', fontSize: 28 }} />
                    </Stack>
                    <Typography variant="h4" sx={{ fontSize: '1.3rem', mb: 1.2 }}>
                      {p.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>{p.text}</Typography>
                  </Box>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
