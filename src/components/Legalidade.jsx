import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { legal, certifications } from '../data/content';

export default function Legalidade() {
  return (
    <Box id="certificacoes" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            07 — Legalidade &amp; Certificações
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1 }}>
            Transparência, segurança e responsabilidade
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {certifications.map((c) => (
            <Grid item xs={12} sm={6} md={3} key={c.title}>
              <Paper variant="outlined" sx={{ p: 3, height: '100%', borderColor: 'divider' }}>
                <VerifiedUserIcon sx={{ color: 'secondary.main', fontSize: 26, mb: 1.5 }} />
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>{c.title}</Typography>
                <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', mb: 1 }}>{c.subtitle}</Typography>
                <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', color: 'primary.main' }}>{c.code}</Typography>
              </Paper>
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
            <Grid item xs={12} sm="auto" key={r.label}>
              <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', textAlign: 'center' }}>
                {r.label}: <strong style={{ fontFamily: '"IBM Plex Mono"' }}>{r.value}</strong>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
