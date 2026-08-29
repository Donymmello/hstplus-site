import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { consultants } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Consultoria() {
  return (
    <Box id="consultoria" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
        <SectionHeader index="07" eyebrow="Consultoria Especializada" title="Expertise comprovada, a nível nacional e internacional" mb={6} />

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {consultants.map((c) => (
            <Grid size={{ xs: 12, md: 6 }} key={c.name}>
              <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: '#fff', borderLeft: '4px solid', borderLeftColor: 'primary.main' }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2.5 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 52, height: 52 }}>
                    <EngineeringIcon />
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>{c.name}</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                      {c.role}
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
            </Grid>
          ))}
        </Grid>

        <Typography sx={{ color: 'text.secondary', maxWidth: 780 }}>
          Nem todos os riscos no ambiente de trabalho são visíveis a olho nu. A nossa equipa
          identifica-os no terreno, com equipamento de medição ambiental, e acompanha a
          organização até o plano de acção correctiva estar implementado não só entregue num
          relatório.
        </Typography>
      </Reveal>
      </Container>
    </Box>
  );
}