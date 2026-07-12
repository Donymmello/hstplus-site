import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { company, socials } from '../data/content';
import { gradients } from '../theme';

const socialIcons = [
  { key: 'facebook', Icon: FacebookIcon, label: 'Facebook' },
  { key: 'instagram', Icon: InstagramIcon, label: 'Instagram' },
  { key: 'linkedin', Icon: LinkedInIcon, label: 'LinkedIn' },
];

function IconBadge({ children }) {
  return (
    <Box
      sx={{
        width: 26,
        height: 26,
        borderRadius: '50%',
        bgcolor: 'rgba(255,255,255,0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {children}
    </Box>
  );
}

export default function TopBar() {
  return (
    <Box sx={{ backgroundImage: gradients.primary, display: { xs: 'none', md: 'block' } }}>
      <Container maxWidth="{false}">
        {/* Uma única linha flex, largura total, sem Stacks aninhadas — telefone/email
            fixos à esquerda (flex-start), redes sociais fixas à direita (flex-end). */}
        <Box
          sx={{
            width: '100%',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Grupo esquerdo: telefone + email */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Box
              component="a"
              href={`tel:${company.phone1.replace(/\s/g, '')}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <IconBadge>
                <PhoneIcon sx={{ fontSize: 14, color: '#fff', display: 'block' }} />
              </IconBadge>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1 }}>{company.phone1}</Typography>
            </Box>

            <Box
              component="a"
              href={`mailto:${company.email}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <IconBadge>
                <EmailIcon sx={{ fontSize: 14, color: '#fff', display: 'block' }} />
              </IconBadge>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1 }}>{company.email}</Typography>
            </Box>
          </Box>

          {/* Grupo direito: redes sociais */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            {socialIcons.map(({ key, Icon, label }) => (
              <IconButton
                key={key}
                component="a"
                href={socials[key] || '#'}
                target={socials[key] ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                size="small"
                disableRipple
                sx={{ color: '#fff', p: 0, '&:hover': { opacity: 0.8, bgcolor: 'transparent' } }}
              >
                <Icon sx={{ fontSize: 19, display: 'block' }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
