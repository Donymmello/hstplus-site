import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import PlaceIcon from '@mui/icons-material/Place';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import cta from '../assets/cta.jpg';
import Eyebrow from './Eyebrow';
import HazardDivider from './HazardDivider';
import logo from '../assets/logo.png';
import { company } from '../data/content';

const contactLines = [
  { icon: PhoneIcon, label: `${company.phone1} / ${company.phone2}`, href: `tel:${company.phone1.replace(/\s/g, '')}` },
  { icon: WhatsAppIcon, label: company.whatsapp, href: `https://wa.me/${company.whatsapp.replace(/\D/g, '')}` },
  { icon: EmailIcon, label: company.email, href: `mailto:${company.email}` },
  { icon: LanguageIcon, label: company.web, href: `https://${company.web}` },
  { icon: PlaceIcon, label: company.address, href: null },
];

export default function Contacto() {
  return (
    <Box id="contacto">
      <Box
        sx={{
          position: 'relative',
          py: { xs: 10, md: 14 },
          color: '#fff',
          backgroundImage: `linear-gradient(rgba(20,24,26,0.86), rgba(122,20,32,0.9)), url(${cta})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Eyebrow index="09" dark color="warning.main">Fale Connosco</Eyebrow>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, mb: 2 }}>
                Fazemos diferente
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520 }}>
                Somos gratos pela confiança depositada em nossa experiência desde {company.founded}
                para cuidar da vossa empresa e do vosso activo mais valioso — a vossa equipa.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Stack spacing={2} sx={{ bgcolor: 'rgba(20,24,26,0.55)', p: 3, border: '1px solid rgba(255,255,255,0.15)' }}>
                {contactLines.map((c) => {
                  const Icon = c.icon;
                  const content = (
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <Icon sx={{ fontSize: 20, color: 'warning.main', mt: 0.2 }} />
                      <Typography sx={{ fontSize: '0.88rem' }}>{c.label}</Typography>
                    </Stack>
                  );
                  return c.href ? (
                    <Box
                      key={c.label}
                      component="a"
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      sx={{ textDecoration: 'none', color: '#fff' }}
                    >
                      {content}
                    </Box>
                  ) : (
                    <Box key={c.label}>{content}</Box>
                  );
                })}
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)' }} />
                <Stack direction="row" justifyContent="space-between" sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                  <span>NUEL {company.nuel}</span>
                  <span>NUIT {company.nuit}</span>
                </Stack>
                <Button
                  href={`mailto:${company.email}`}
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                >
                  Pedir Proposta
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <HazardDivider tone="dark" height={8} />

      <Box sx={{ bgcolor: 'primary.dark', color: 'rgba(255,255,255,0.7)', py: 4 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box component="img" src={logo} alt="HST Plus" sx={{ height: 28 }} />
              <Typography sx={{ fontSize: '0.75rem' }}>
                © {new Date().getFullYear()} {company.fullName}. Todos os direitos reservados.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <InstagramIcon fontSize="small" />
              <FacebookIcon fontSize="small" />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
