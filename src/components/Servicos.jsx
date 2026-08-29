import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { specializedServices } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Servicos() {
  return (
    <Box id="servicos" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionHeader index="02b" eyebrow="Serviços Especializados" title="Cobertura técnica, ponta a ponta" introWidth={680}>
            Ensaios técnicos, higiene ocupacional, EPI e planos de emergência serviços que
            apoiam a conformidade e a segurança da tua operação.
          </SectionHeader>
          <Grid container spacing={2} sx={{ maxWidth: 900, mx: 'auto' }}>
            {specializedServices.map((s) => (
              <Grid size={{ xs: 12, sm: 6 }} key={s}>
                <Stack
                  direction="row"
                  spacing={1.2}
                  alignItems="flex-start"
                  sx={{ bgcolor: '#fff', p: 2, height: '100%' }}
                >
                  <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 20, flexShrink: 0, mt: 0.2 }} />
                  <Typography sx={{ fontSize: '0.88rem' }}>{s}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
}
