import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { sectors } from '../data/sectors';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Setores() {
  const [active, setActive] = useState(0);
  const sector = sectors[active];

  return (
    <Box id="setores" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionHeader index="02" eyebrow="Sectores" title="Cada indústria tem o seu próprio perfil de risco" introWidth={620}>
            Adaptamos consultoria, formação e inspecção à realidade concreta de cada sector — não
            um pacote genérico de segurança.
          </SectionHeader>

          {/* Selector — lista de sectores, não uma grelha de cartões.
              Nº grande em mono à esquerda, nome à direita; o activo ganha
              a barra maroon e o texto sobe de peso. */}
          <Box
            sx={{
              display: 'flex',
              overflowX: { xs: 'auto', md: 'visible' },
              borderTop: '1px solid',
              borderColor: 'divider',
              mb: { xs: 4, md: 6 },
            }}
          >
            {sectors.map((s, i) => (
              <Box
                key={s.slug}
                component="button"
                onClick={() => setActive(i)}
                sx={{
                  flex: { xs: '0 0 auto', md: 1 },
                  cursor: 'pointer',
                  bgcolor: i === active ? 'rgba(122,20,32,0.05)' : 'transparent',
                  border: 'none',
                  borderRight: { xs: 'none', md: i === sectors.length - 1 ? 'none' : '1px solid' },
                  borderBottom: '3px solid',
                  borderColor: i === active ? 'primary.main' : 'transparent',
                  borderRightColor: 'divider',
                  textAlign: 'left',
                  py: 2,
                  px: { xs: 2.5, md: 2 },
                  transition: 'background-color 0.2s ease, border-color 0.2s ease',
                  '&:hover': { borderColor: i === active ? 'primary.main' : 'divider' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"IBM Plex Mono"',
                    fontSize: '0.68rem',
                    color: i === active ? 'primary.main' : 'text.secondary',
                    mb: 0.5,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Big Shoulders Display"',
                    fontWeight: i === active ? 800 : 600,
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    color: i === active ? 'text.primary' : 'text.secondary',
                    whiteSpace: 'nowrap',
                    transition: 'font-weight 0.2s ease, color 0.2s ease',
                  }}
                >
                  {s.name}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Painel único — muda de conteúdo consoante o sector activo, em
              vez de mostrar os 5 sectores em paralelo numa grelha. */}
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start" key={sector.slug}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal>
                <Typography
                  sx={{
                    fontFamily: '"Big Shoulders Display"',
                    fontWeight: 800,
                    fontSize: { xs: '2.4rem', md: '3.2rem' },
                    lineHeight: 0.98,
                    mb: 2,
                  }}
                >
                  {sector.name}
                </Typography>
                <Typography sx={{ fontSize: '1rem', color: 'text.secondary', mb: 4, maxWidth: 420 }}>{sector.resumo}</Typography>
                <Button
                  component={RouterLink}
                  to={`/setores/${sector.slug}`}
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowOutwardIcon />}
                >
                  Ver riscos e soluções completas
                </Button>
              </Reveal>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal delay={0.08}>
                <Grid container spacing={{ xs: 3, md: 4 }}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography
                      sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', letterSpacing: '0.05em', color: 'primary.main', mb: 1.5 }}
                    >
                      PRINCIPAIS RISCOS
                    </Typography>
                    <Stack spacing={1.4}>
                      {sector.riscos.slice(0, 3).map((r, i) => (
                        <Stack direction="row" spacing={1.4} key={r} alignItems="flex-start">
                          <Stack
                            alignItems="center"
                            justifyContent="center"
                            sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0, mt: 0.1 }}
                          >
                            <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.62rem', color: '#fff' }}>{i + 1}</Typography>
                          </Stack>
                          <Typography sx={{ fontSize: '0.86rem', color: 'text.secondary' }}>{r}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography
                      sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', letterSpacing: '0.05em', color: 'secondary.dark', mb: 1.5 }}
                    >
                      SOLUÇÕES HST PLUS
                    </Typography>
                    <Stack spacing={1.4}>
                      {sector.solucoes.slice(0, 3).map((s, i) => (
                        <Stack direction="row" spacing={1.4} key={s} alignItems="flex-start">
                          <Stack
                            alignItems="center"
                            justifyContent="center"
                            sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: 'secondary.main', flexShrink: 0, mt: 0.1 }}
                          >
                            <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.62rem', color: '#fff' }}>{i + 1}</Typography>
                          </Stack>
                          <Typography sx={{ fontSize: '0.86rem', color: 'text.secondary' }}>{s}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>

                <Divider sx={{ mt: 4, mb: 2 }} />
                <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>
                  {String(active + 1).padStart(2, '0')} / {String(sectors.length).padStart(2, '0')} sectores —
                  clica noutro nome acima para comparar
                </Typography>
              </Reveal>
            </Grid>
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
}