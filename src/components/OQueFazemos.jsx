import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import ShieldIcon from '@mui/icons-material/Shield';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SignpostIcon from '@mui/icons-material/Signpost';
import PolicyIcon from '@mui/icons-material/Policy';
import CampaignIcon from '@mui/icons-material/Campaign';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import Eyebrow from './Eyebrow';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import { solutions, measuringInstruments } from '../data/content';

const icons = [
  HealthAndSafetyIcon, FactCheckIcon, TroubleshootIcon, ShieldIcon, ReportProblemIcon,
  SignpostIcon, PolicyIcon, CampaignIcon, VerifiedIcon, SchoolIcon,
];

export default function OQueFazemos() {
  return (
    <Box id="o-que-fazemos" sx={{ py: { xs: 9, md: 13 }, bgcolor: '#EFEDE6' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Eyebrow index="02">O Que Fazemos</Eyebrow>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' } }}>
              As nossas soluções
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: 'text.secondary' }}>
              Soluções práticas e personalizadas de acordo com as necessidades de cada cliente,
              cobrindo todo o ciclo de gestão de risco laboral.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 8 }}>
          {solutions.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Grid item xs={12} sm={6} md={4} key={s}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="flex-start"
                  sx={{ bgcolor: '#fff', p: 2.5, height: '100%', borderTop: '3px solid', borderTopColor: 'primary.main' }}
                >
                  <Icon sx={{ color: 'secondary.main', fontSize: 28, flexShrink: 0, mt: 0.3 }} />
                  <Typography sx={{ fontSize: '0.9rem' }}>{s}</Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontSize: '1.4rem', color: 'primary.main', mb: 1.5 }}>
              Análise Quantitativa
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 3 }}>
              As nossas análises técnico-quantitativas medem agentes físicos e químicos no
              ambiente de trabalho, usando equipamentos de última geração em conformidade com a
              ISO. Os resultados ficam registados em relatórios descritivos com parâmetros para
              mitigar riscos laborais.
            </Typography>
            <Grid container spacing={1}>
              {measuringInstruments.map((m) => (
                <Grid item xs={6} key={m}>
                  <Typography sx={{ fontSize: '0.82rem', fontFamily: '"IBM Plex Mono"', color: 'text.secondary' }}>
                    · {m}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box component="img" src={gallery5} alt="Kit de instrumentos de medição ambiental" sx={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }} />
              </Grid>
              <Grid item xs={6}>
                <Box component="img" src={gallery6} alt="Instrumentos de inspeção técnica" sx={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', mt: 4 }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
