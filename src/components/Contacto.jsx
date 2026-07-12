import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import PlaceIcon from '@mui/icons-material/Place';
import { company } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

const contactLines = [
  { icon: PhoneIcon, label: `${company.phone1} / ${company.phone2}`, href: `tel:${company.phone1.replace(/\s/g, '')}` },
  { icon: WhatsAppIcon, label: company.whatsapp, href: `https://wa.me/${company.whatsapp.replace(/\D/g, '')}` },
  { icon: EmailIcon, label: company.email, href: `mailto:${company.email}` },
  { icon: LanguageIcon, label: company.web, href: `https://${company.web}` },
  { icon: PlaceIcon, label: company.address, href: company.mapUrl },
];

export default function Contacto() {
  return (
    <Box id="contacto" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.dark, color: '#fff' }}>
      <Container maxWidth="lg">
        <Reveal>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: 'warning.main' }}>
              09 — Fale Connosco
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' }, mt: 1, mb: 2 }}>
              Fazemos diferente
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 460 }}>
              Somos gratos pela confiança depositada em nossa experiência desde {company.founded}
              para cuidar da vossa empresa e do vosso activo mais valioso — a vossa equipa.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              {contactLines.map((c) => {
                const Icon = c.icon;
                const content = (
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Icon sx={{ fontSize: 20, color: 'warning.main', mt: 0.2 }} />
                    <Typography sx={{ fontSize: '0.9rem' }}>{c.label}</Typography>
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
              <Button href={`mailto:${company.email}`} variant="contained" color="secondary" size="large" sx={{ mt: 1, alignSelf: 'flex-start' }}>
                Pedir Proposta
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
