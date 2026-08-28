import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { totalCourses } from '../data/courses';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

// "spec" é a referência técnica de cada pilar (norma, quantidade) — não é
// decoração, é o mesmo espírito de uma ficha/directório técnico.
const pillars = [
  {
    title: 'HSEQ',
    text: 'Implementação e acompanhamento de Sistemas de Gestão da Qualidade, Ambiente e Segurança, alinhados às normas internacionais que operações exigentes precisam para trabalhar com os seus clientes.',
    spec: 'REFERENCIAL SGI',
    href: '#contacto',
  },
  {
    title: 'Formação',
    text: `Mais de ${totalCourses} formações técnicas e preventivas, com formadores experientes e conteúdo adaptado à realidade de cada equipa e sector de actividade.`,
    spec: `${totalCourses}+ MÓDULOS`,
    href: '#formacoes',
  },
  {
    title: 'Gestão de Risco',
    text: 'Identificação, avaliação e mitigação de riscos operacionais — matrizes de risco e planos de contingência e resposta a emergências, à medida de cada actividade.',
    spec: 'REFERENCIAL ISO 31000',
    href: '#contacto',
  },
  {
    title: 'Certificação',
    text: 'Mais de 100 certificações emitidas em equipamentos de elevação de cargas e trabalho em altura, com padrões elevados de segurança e conformidade.',
    spec: '100+ EMITIDAS',
    href: '#certificacoes',
  },
  {
    title: 'Consultoria',
    text: 'Auditorias técnicas e acompanhamento no terreno, do diagnóstico à implementação dos planos de acção correctiva.',
    spec: 'ON-SITE',
    href: '#contacto',
  },
];

function PillarRow({ p, index, isLast }) {
  return (
    <Reveal delay={index * 0.06}>
      <Box
        component="a"
        href={p.href}
        sx={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          borderBottom: isLast ? 'none' : '1px solid',
          borderColor: 'divider',
          borderLeft: '3px solid',
          borderLeftColor: 'rgba(122,20,32,0.18)',
          pl: { xs: 2, md: 3 },
          py: { xs: 3, md: 3.5 },
          transition: 'background-color 0.2s ease, border-left-color 0.2s ease',
          '&:hover': { bgcolor: 'rgba(122,20,32,0.03)', borderLeftColor: 'primary.main' },
          '&:hover .pillar-title': { color: 'primary.main' },
          '&:hover .pillar-arrow': { transform: 'translateX(4px)', opacity: 1 },
        }}
      >
        <Grid container spacing={{ xs: 1, md: 3 }} alignItems="center">
          <Grid size={{ xs: 3, sm: 2, md: 1 }}>
            <Typography
              sx={{
                fontFamily: '"Big Shoulders Display"',
                fontWeight: 800,
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                color: 'primary.main',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </Typography>
          </Grid>

          <Grid size={{ xs: 9, sm: 4, md: 2.5 }}>
            <Typography
              className="pillar-title"
              sx={{
                fontFamily: '"Big Shoulders Display"',
                fontWeight: 700,
                fontSize: { xs: '1.15rem', md: '1.3rem' },
                transition: 'color 0.2s ease',
              }}
            >
              {p.title}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 6.5 }} sx={{ order: { xs: 3, sm: 0 } }}>
            <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary', maxWidth: 520 }}>{p.text}</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }} sx={{ order: { xs: 2, md: 0 } }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
              spacing={1.2}
              sx={{ mt: { xs: 0.5, md: 0 } }}
            >
              <Box
                sx={{
                  bgcolor: 'primary.main',
                  color: '#fff',
                  px: 1,
                  py: 0.35,
                  fontFamily: '"IBM Plex Mono"',
                  fontSize: '0.62rem',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {p.spec}
              </Box>
              <ArrowOutwardIcon
                className="pillar-arrow"
                sx={{ fontSize: 15, color: 'secondary.dark', opacity: 0.5, transition: 'all 0.2s ease', flexShrink: 0 }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Reveal>
  );
}

export default function Solucoes() {
  return (
    <Box id="solucoes" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionHeader index="01" eyebrow="O Que Fazemos" title="Cinco frentes, uma só equipa de segurança" mb={{ xs: 5, md: 6 }}>
            HSEQ, formação, gestão de risco, certificação e consultoria — tratados pela mesma
            equipa, para que a tua operação não pare por causa de um acidente evitável.
          </SectionHeader>

          <Box sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            {pillars.map((p, i) => (
              <PillarRow key={p.title} p={p} index={i} isLast={i === pillars.length - 1} />
            ))}
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}