import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import about from '../assets/about.jpg';
import Eyebrow from './Eyebrow';
import { company, values } from '../data/content';

export default function QuemSomos() {
  return (
    <Box id="quem-somos" sx={{ py: { xs: 9, md: 13 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Eyebrow index="01">Quem Somos</Eyebrow>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' }, mb: 2.5 }}>
              Apresentação institucional
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2 }}>
              <strong style={{ color: '#14181A' }}>{company.fullName}</strong> é uma empresa
              moçambicana fundada em {company.founded}, dedicada à Consultoria, Gestão de Riscos,
              Formação Profissional e Inspeção de Qualidade. Actuamos com foco na entrega de
              soluções práticas, eficazes e adaptadas à realidade dos nossos clientes, garantindo
              sempre a viabilidade económica e operacional.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              Trabalhamos com uma equipa multidisciplinar de especialistas, nacionais e
              internacionais, reconhecidos pela sua competência técnica e experiência no terreno.
              A nossa prioridade é apoiar organizações na implementação de práticas seguras e
              sustentáveis, reduzir a exposição a riscos laborais e assegurar o cumprimento da
              legislação em vigor.
            </Typography>

            <Box
              component="img"
              src={about}
              alt="Equipa em formação técnica no terreno"
              sx={{ width: '100%', display: { xs: 'block', md: 'none' }, aspectRatio: '4/3', objectFit: 'cover', mb: 4 }}
            />

            <Stack spacing={3}>
              <Box>
                <Typography variant="h4" sx={{ fontSize: '1.2rem', color: 'primary.main', mb: 0.5 }}>
                  Missão
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem' }}>
                  Desenvolvemos soluções integradas nas áreas de Saúde, Segurança no Trabalho,
                  Qualidade e Meio Ambiente, através de Consultoria Técnica especializada,
                  programas de Formação e apoio à Certificação.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontSize: '1.2rem', color: 'secondary.main', mb: 0.5 }}>
                  Visão
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem' }}>
                  Ser uma empresa de referência, reconhecida pela excelência, compromisso com a
                  qualidade e sustentabilidade ambiental, promovendo impacto positivo e duradouro
                  para os clientes e a sociedade.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              component="img"
              src={about}
              alt="Equipa em formação técnica no terreno"
              sx={{ width: '100%', display: { xs: 'none', md: 'block' }, aspectRatio: '16/10', objectFit: 'cover', mb: 4 }}
            />
            <Typography variant="h4" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 2, letterSpacing: '0.04em' }}>
              Nossos Valores
            </Typography>
            <Grid container spacing={2}>
              {values.map((v) => (
                <Grid item xs={6} key={v.title}>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2.5,
                      height: '100%',
                      borderColor: 'divider',
                      borderLeft: '4px solid',
                      borderLeftColor: 'secondary.main',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 0.5 }}>
                      {v.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>{v.text}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
