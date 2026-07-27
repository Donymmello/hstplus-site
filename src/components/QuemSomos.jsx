import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { company, values } from '../data/content';
import { colors, gradients } from '../theme'; // Importando as tuas cores oficiais
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import PhotoFrame from './PhotoFrame';
import aboutPhoto from '../assets/about1.jpg';

export default function QuemSomos() {
  return (
    <Box
      id="quem-somos"
      sx={{
        py: { xs: 10, md: 15 }, // Respiro premium (espaço generoso)
        backgroundImage: gradients.surfaceLight, // Teu gradiente suave oficial
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">

          {/* Coluna da Imagem com Badge Flutuante */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <Box sx={{ position: 'relative' }}>
                <PhotoFrame
                  src={aboutPhoto}
                  alt="Equipa multidisciplinar da HST Plus"
                  ratio={{ xs: '16/10', md: '4/5' }}
                  sx={{
                    borderRadius: 2, // Respeita o shape.borderRadius: 2 do teu tema
                    boxShadow: '0 20px 45px rgba(20, 24, 26, 0.08)',
                  }}
                />

                {/* Badge Industrial Minimalista (Foco Técnico e Limpo) */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -16,
                    right: { xs: 16, md: -16 },
                    bgcolor: colors.ink, // Teu preto-industrial oficial
                    color: '#FFF',
                    p: 2.5,
                    px: 3,
                    borderRadius: '2px', // Cantos vivos
                    borderLeft: `3px solid ${colors.safetyRed}`, // Detalhe técnico de segurança
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: '"IBM Plex Mono", monospace', // Teu padrão técnico
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.65rem'
                    }}
                  >
                    Desde
                  </Typography>
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1,
                      color: '#FFF'
                    }}
                  >
                    {company.founded}
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          </Grid>

          {/* Coluna de Conteúdo */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal delay={0.12}>

              {/* Header Editorial Técnico */}
              <SectionHeader
                index="04"
                eyebrow="Quem Somos"
                title="Uma equipa moçambicana dedicada à sua segurança"
                align="left"
                introWidth={620}
                mb={4}
                sx={{
                  '& .MuiTypography-overline': {
                    fontFamily: '"IBM Plex Mono", monospace',
                    letterSpacing: '0.18em',
                    fontWeight: 600,
                    color: colors.safetyRed // Vermelho oficial de sinalização
                  },
                  '& .MuiTypography-h2': {
                    // Herda automaticamente o "Big Shoulders Display" do teu tema
                    textTransform: 'uppercase',
                  }
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: '1.05rem',
                    lineHeight: 1.75,
                    color: 'text.secondary', // Teu cinza oficial de leitura
                    display: 'block',
                    mt: 2
                  }}
                >
                  <strong style={{ color: colors.ink, fontWeight: 700 }}>{company.fullName}</strong> é uma empresa
                  moçambicana fundada em {company.founded}, dedicada à Consultoria, Gestão de Riscos,
                  Formação Profissional e Inspeção de Qualidade. Trabalhamos com uma equipa
                  multidisciplinar, nacional e internacional, para reduzir a exposição a riscos
                  laborais e assegurar o cumprimento integral da legislação em vigor.
                </Typography>
              </SectionHeader>

              {/* Título de Secção de Apoio */}
              <Typography
                variant="overline"
                component="h4"
                sx={{
                  display: 'block',
                  color: 'text.secondary',
                  fontSize: '0.75rem',
                  mb: 2
                }}
              >
                Nossos Pilares de Atuação
              </Typography>

              {/* Grid de Valores com visual de Placas Técnicas */}
              <Stack
                direction="row"
                spacing={1.5}
                flexWrap="wrap"
                useFlexGap
                sx={{
                  mb: 5,
                  pb: 3,
                  borderBottom: '1px solid',
                  borderColor: colors.line // Linha de separação oficial
                }}
              >
                {values.map((v) => (
                  <Box
                    key={v.title}
                    sx={{
                      px: 2,
                      py: 0.8,
                      bgcolor: colors.paper, // Fundo cinza-técnico oficial[cite: 2]
                      border: `1px solid ${colors.line}`, // Linha discreta[cite: 2]
                      borderRadius: 1, // Raio padrão do teu tema[cite: 2]
                      fontFamily: '"IBM Plex Mono", monospace', // Tua fonte técnica[cite: 2]
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: colors.ink, // Teu preto-industrial[cite: 2]
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)', // Transição mais suave (Premium)
                      cursor: 'default',
                      '&:hover': {
                        bgcolor: colors.maroon, // Transiciona para o Maroon oficial[cite: 2]
                        color: '#FFF', // Texto branco para alto contraste[cite: 2]
                        borderColor: colors.maroon, // Borda acompanha a cor[cite: 2]
                        transform: 'translateY(-2px)', // Micro-elevação premium
                        boxShadow: '0 4px 12px rgba(122, 20, 32, 0.15)' // Sombra suave na cor da marca
                      }
                    }}
                  >
                    {v.title}
                  </Box>
                ))}
              </Stack>

              {/* Botão Oficial Contained com o teu Efeito de Brilho (Shine) */}
              <Button
                href="#certificacoes"
                variant="contained"
                color="secondary" // Usa automaticamente o teu gradiente maroon e o efeito shine no hover!
                endIcon={<ArrowOutwardIcon sx={{ fontSize: '1.1rem' }} />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '0.8rem', // Escala perfeita para IBM Plex Mono
                  boxShadow: '0 4px 20px rgba(122, 20, 32, 0.25)',
                }}
              >
                Conheça a nossa história
              </Button>

            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}