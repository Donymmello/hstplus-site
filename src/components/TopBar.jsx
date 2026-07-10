import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { company } from '../data/content';

export default function TopBar() {
  return (
    <Box sx={{ bgcolor: 'primary.dark', display: { xs: 'none', md: 'block' } }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ height: 36 }}>
          <Stack direction="row" spacing={3}>
            <Stack direction="row" spacing={0.7} alignItems="center" component="a" href={`tel:${company.phone1.replace(/\s/g, '')}`} sx={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
              <PhoneIcon sx={{ fontSize: 14 }} />
              <Typography sx={{ fontSize: '0.72rem' }}>{company.phone1}</Typography>
            </Stack>
            <Stack direction="row" spacing={0.7} alignItems="center" component="a" href={`mailto:${company.email}`} sx={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
              <EmailIcon sx={{ fontSize: 14 }} />
              <Typography sx={{ fontSize: '0.72rem' }}>{company.email}</Typography>
            </Stack>
          </Stack>
          <Stack direction="" spacing={1.5}>
            <InstagramIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }} />
            <FacebookIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.75)' }} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
