import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import { methodology, trainingApproach } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import PhotoFrame from './PhotoFrame';
import salaFormacao from '../assets/aula-teorica.jpg';
import montagemAndaime from '../assets/aula-pratica.jpg';

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
    <Box sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
        <SectionHeader index="05" eyebrow="Método Aplicado" title="Aulas teóricas e práticas, para cada participante" mb={0} />
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ mt: 2, mb: 5 }}>
          {trainingApproach.map((t) => (
            <Chip key={t.title} label={t.title} size="small" sx={{ bgcolor: '#fff', fontWeight: 600 }} />
          ))}
        </Stack>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ height: '100%', borderTop: '3px solid', borderTopColor: 'primary.main' }}>
              <PhotoFrame src={salaFormacao} alt="Formação teórica em sala — Uni-Span, Temane" ratio="16/9" />
              <Box sx={{ bgcolor: '#EFEDE6', p: { xs: 3, md: 4 } }}>
                <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 2.5 }}>
                  Nas aulas teóricas
                </Typography>
                <List items={methodology.teorica} color="#7A1420" />
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ height: '100%', borderTop: '3px solid', borderTopColor: 'secondary.main' }}>
              <PhotoFrame src={montagemAndaime} alt="Montagem e inspecção de andaime no terreno" ratio="16/9" />
              <Box sx={{ bgcolor: '#EFEDE6', p: { xs: 3, md: 4 } }}>
                <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 2.5 }}>
                  Nas aulas práticas
                </Typography>
                <List items={methodology.pratica} color="#1F7A3D" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
