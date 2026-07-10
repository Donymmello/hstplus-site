import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { consultants, specializedServices } from '../data/content';

export default function Consultoria() {
  return (
    <Box id="consultoria" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#EFEDE6' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            06 — Consultoria Especializada
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1 }}>
            Expertise comprovada, a nível nacional e internacional
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            {consultants.map((c) => (
              <Paper key={c.name} elevation={0} sx={{ p: 4, bgcolor: '#fff', borderLeft: '4px solid', borderLeftColor: 'primary.main' }}>
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
              consultores qualificados identifica ameaças ocultas e promove acções que garantem a
              segurança e o cumprimento legal da organização — apoiada por tecnologia moderna de
              avaliação ambiental e uma rede de expertise multidisciplinar.
            </Typography>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
