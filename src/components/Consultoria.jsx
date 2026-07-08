import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MemoryIcon from '@mui/icons-material/Memory';
import GroupsIcon from '@mui/icons-material/Groups';
import Eyebrow from './Eyebrow';
import { consultants, differentiators, specializedServices } from '../data/content';

const diffIcons = [MemoryIcon, GroupsIcon];

export default function Consultoria() {
  return (
    <Box id="consultoria" sx={{ py: { xs: 9, md: 13 } }}>
      <Container maxWidth="lg">
        <Eyebrow index="06">Consultoria Especializada</Eyebrow>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' }, mb: 6, maxWidth: 760 }}>
          Expertise comprovada, a nível nacional e internacional
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={5}>
            {consultants.map((c) => (
              <Paper key={c.name} variant="outlined" sx={{ p: 4, borderColor: 'divider', borderLeft: '4px solid', borderLeftColor: 'primary.main' }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2.5 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 52, height: 52 }}>
                    <EngineeringIcon />
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>{c.name}</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                      Especialista em Saúde e Segurança no Trabalho
                    </Typography>
                  </Box>
                </Stack>
                <Stack spacing={1}>
                  {c.facts.map((f) => (
                    <Typography key={f} sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                      · {f}
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            ))}
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography sx={{ color: 'text.secondary', mb: 3 }}>
              Nem todos os riscos no ambiente de trabalho são visíveis. A nossa equipa de
              consultores qualificados identifica ameaças ocultas, orienta sobre agentes físicos e
              químicos e promove acções que garantem a segurança e o cumprimento legal da
              organização.
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {differentiators.map((d, i) => {
                const Icon = diffIcons[i % diffIcons.length];
                return (
                  <Grid item xs={12} sm={6} key={d.title}>
                    <Stack direction="row" spacing={2} sx={{ bgcolor: '#EFEDE6', p: 2.5, height: '100%' }}>
                      <Icon sx={{ color: 'secondary.main' }} />
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', mb: 0.3 }}>{d.title}</Typography>
                        <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary' }}>{d.text}</Typography>
                      </Box>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
            <Paper variant="outlined" sx={{ p: 3, borderColor: 'divider' }}>
              <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.7rem', color: 'primary.main', letterSpacing: '0.06em', mb: 1.5 }}>
                SERVIÇOS ESPECIALIZADOS
              </Typography>
              <Grid container spacing={1}>
                {specializedServices.map((s) => (
                  <Grid item xs={12} key={s}>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>· {s}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
