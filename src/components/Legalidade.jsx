import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GavelIcon from '@mui/icons-material/Gavel';
import Eyebrow from './Eyebrow';
import HazardDivider from './HazardDivider';
import { legal, certifications } from '../data/content';

export default function Legalidade() {
  return (
    <Box id="certificacoes">
      <HazardDivider tone="light" height={8} />
      <Box sx={{ py: { xs: 9, md: 13 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Eyebrow index="07">Legalidade &amp; Certificações</Eyebrow>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' }, mb: 5, maxWidth: 760 }}>
            Transparência, segurança e responsabilidade
          </Typography>

          <Grid container spacing={5}>
            <Grid item xs={12} md={5}>
              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <GavelIcon sx={{ color: 'primary.main' }} />
                <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem' }}>{legal.text}</Typography>
              </Stack>
              <Stack spacing={0} divider={<Box sx={{ borderBottom: '1px solid', borderColor: 'divider' }} />}>
                {legal.registrations.map((r) => (
                  <Stack key={r.label} direction="row" justifyContent="space-between" spacing={2} sx={{ py: 1.5 }}>
                    <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', maxWidth: 260 }}>{r.label}</Typography>
                    <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.82rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {r.value}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                {certifications.map((c) => (
                  <Grid item xs={12} sm={6} key={c.title}>
                    <Paper
                      variant="outlined"
                      sx={{ p: 3, height: '100%', borderColor: 'divider', display: 'flex', gap: 2 }}
                    >
                      <VerifiedUserIcon sx={{ color: 'secondary.main', fontSize: 30, flexShrink: 0 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>{c.title}</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mb: 1 }}>{c.subtitle}</Typography>
                        <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.7rem', color: 'primary.main' }}>
                          {c.code}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
