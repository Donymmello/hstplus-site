import { useState } from 'react';
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
import SectionHeader from './SectionHeader';
import LeadFormDialog from './LeadFormDialog';

const contactLines = [
  { icon: PhoneIcon, label: `${company.phone1}  ${company.phone2}`, href: `tel:${company.phone1.replace(/\s/g, '')}` },
  { icon: WhatsAppIcon, label: company.whatsapp, href: `https://wa.me/${company.whatsapp.replace(/\D/g, '')}` },
  { icon: EmailIcon, label: company.email, href: `mailto:${company.email}` },
  { icon: LanguageIcon, label: company.web, href: `https://${company.web}` },
  { icon: PlaceIcon, label: company.address, href: company.mapUrl },
];

export default function Contacto() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box id="contacto" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.dark, color: '#fff' }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionHeader
            index="10"
            eyebrow="Fale Connosco"
            title="Contacto directo com a equipa técnica"
            dark
            introWidth={520}
            mb={6}
          >
            Desde {company.founded} que respondemos por telefone, WhatsApp ou email sem
            formulários que ninguém responde.
          </SectionHeader>

          <Grid container justifyContent="center">
            <Grid size={{ xs: 12, sm: 8, md: 6 }}>
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
                <Button
                  onClick={() => setDialogOpen(true)}
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mt: 1, alignSelf: { xs: 'stretch', sm: 'center' } }}
                >
                  Pedir Proposta
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Reveal>
      </Container>

      <LeadFormDialog open={dialogOpen} onClose={() => setDialogOpen(false)} type="proposta" />
    </Box>
  );
}