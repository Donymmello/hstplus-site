import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import { methodology, trainingApproach } from '../data/content';

function List({ items, color }) {
  return (
    <Stack spacing={1.4}>
      {items.map((it) => (
        <Stack direction="row" spacing={1.2} key={it} alignItems="flex-start">
          <CheckIcon sx={{ fontSize: 18, color, mt: 0.3, flexShrink: 0 }} />
          <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary' }}>{it}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default function Metodologia() {
  return (
    <Box sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            05 — Método Aplicado
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 2 }}>
            Aulas teóricas e práticas, para cada participante
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap>
            {trainingApproach.map((t) => (
              <Chip key={t.title} label={t.title} size="small" sx={{ bgcolor: '#EFEDE6', fontWeight: 600 }} />
            ))}
          </Stack>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#EFEDE6', p: { xs: 3, md: 4 }, height: '100%', borderTop: '3px solid', borderTopColor: 'primary.main' }}>
              <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 2.5 }}>
                Nas aulas teóricas
              </Typography>
              <List items={methodology.teorica} color="#7A1420" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#EFEDE6', p: { xs: 3, md: 4 }, height: '100%', borderTop: '3px solid', borderTopColor: 'secondary.main' }}>
              <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 2.5 }}>
                Nas aulas práticas
              </Typography>
              <List items={methodology.pratica} color="#1F7A3D" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
