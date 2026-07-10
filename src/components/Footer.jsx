import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../assets/logo.png';
import { company } from '../data/content';

const quickLinks = [
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#formacoes', label: 'Formações' },
  { href: '#certificacoes', label: 'Certificações' },
  { href: '#referencias', label: 'Referências' },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0E1112', color: 'rgba(255,255,255,0.65)', py: { xs: 6, md: 7 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
              <Box component="img" src={logo} alt="HST Plus" sx={{ height: 30 }} />
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>HST PLUS</Typography>
            </Stack>
            <Typography sx={{ fontSize: '0.82rem', maxWidth: 280 }}>
              Consultoria, Gestão de Risco, Formação Profissional e Inspeção de Qualidade —
              Moçambique, desde {company.founded}.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <InstagramIcon fontSize="small" />
              <FacebookIcon fontSize="small" />
            </Stack>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', mb: 2, letterSpacing: '0.04em' }}>
              MENU
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((l) => (
                <Link key={l.href} href={l.href} underline="hover" sx={{ color: 'inherit', fontSize: '0.82rem' }}>
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', mb: 2, letterSpacing: '0.04em' }}>
              CONTACTO
            </Typography>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: '0.82rem' }}>{company.phone1}</Typography>
              <Typography sx={{ fontSize: '0.82rem' }}>{company.email}</Typography>
              <Typography sx={{ fontSize: '0.82rem' }}>{company.address}</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.72rem' }}
        >
          <Typography sx={{ fontSize: 'inherit' }}>
            © {new Date().getFullYear()} {company.fullName}. Todos os direitos reservados.
          </Typography>
          <Typography sx={{ fontSize: 'inherit' }}>
            NUEL {company.nuel} · NUIT {company.nuit}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
