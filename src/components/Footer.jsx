import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../assets/logo.png';
import { company, socials } from '../data/content';
import { gradients } from '../theme';

const quickLinks = [
  { to: '/#quem-somos', label: 'Quem Somos' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/#solucoes', label: 'Soluções' },
  { to: '/#formacoes', label: 'Formações' },
  { to: '/#certificacoes', label: 'Certificações' },
  { to: '/#referencias', label: 'Referências' },
  { to: '/#blog', label: 'Blog' },
];

const socialIcons = [
  { key: 'facebook', Icon: FacebookIcon, label: 'Facebook' },
  { key: 'instagram', Icon: InstagramIcon, label: 'Instagram' },
  { key: 'linkedin', Icon: LinkedInIcon, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <Box sx={{ backgroundImage: gradients.footer, color: 'rgba(255,255,255,0.65)', py: { xs: 6, md: 7 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
              <Box component="img" src={logo} alt="HST Plus" sx={{ height: 30 }} />
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>HST PLUS</Typography>
            </Stack>
            <Typography sx={{ fontSize: '0.82rem', maxWidth: 280 }}>
              Consultoria, Gestão de Risco, Formação Profissional e Inspeção de Qualidade —
              Moçambique, desde {company.founded}.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              {socialIcons.map(({ key, Icon, label }) => (
                <IconButton
                  key={key}
                  component="a"
                  href={socials[key] || '#'}
                  target={socials[key] ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  sx={{
                    color: 'rgba(255,255,255,0.75)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    '&:hover': { color: '#fff', borderColor: 'rgba(255,255,255,0.4)' },
                  }}
                >
                  <Icon fontSize="medium" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', mb: 2, letterSpacing: '0.04em' }}>
              MENU
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((l) => (
                <Link key={l.to} component={RouterLink} to={l.to} underline="hover" sx={{ color: 'inherit', fontSize: '0.82rem' }}>
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', mb: 2, letterSpacing: '0.04em' }}>
              CONTACTO
            </Typography>
            <Stack spacing={1}>
              <Link href={`tel:${company.phone1.replace(/\s/g, '')}`} underline="hover" sx={{ color: 'inherit', fontSize: '0.82rem' }}>
                {company.phone1}
              </Link>
              <Link href={`mailto:${company.email}`} underline="hover" sx={{ color: 'inherit', fontSize: '0.82rem' }}>
                {company.email}
              </Link>
              <Link
                href={company.mapUrl}
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{ color: 'inherit', fontSize: '0.82rem' }}
              >
                {company.address}
              </Link>
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
