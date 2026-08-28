import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { legal, certifications } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Legalidade() {
  return (
    <Box id="certificacoes" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
        <SectionHeader index="03" eyebrow="Legalidade &amp; Acreditações" title="A HST Plus enquanto organização" introWidth={680} mb={6}>
          Acreditações, associações profissionais e registos legais da própria HST Plus distintos
          dos certificados de participação/aproveitamento emitidos aos formandos, que estão
          detalhados em cada página de formação.
        </SectionHeader>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {certifications.map((c, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={c.title}>
              <Reveal delay={i * 0.1}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3,
                    height: '100%',
                    borderColor: 'divider',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <VerifiedUserIcon sx={{ color: 'secondary.main', fontSize: 30, mb: 1.5 }} />
                    <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>{c.title}</Typography>
                    <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', mb: 1 }}>{c.subtitle}</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', color: 'primary.main', mt: 1.5 }}>
                    {c.code}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          spacing={{ xs: 1, sm: 4 }}
          sx={{ fontSize: '0.78rem', color: 'text.secondary', textAlign: 'center' }}
        >
          <Typography sx={{ fontSize: 'inherit' }}>{legal.text}</Typography>
        </Stack>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          {legal.registrations.map((r) => (
            <Grid size={{ xs: 12, sm: "auto" }} key={r.label}>
              <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', textAlign: 'center' }}>
                {r.label}: <strong style={{ fontFamily: '"IBM Plex Mono"' }}>{r.value}</strong>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
