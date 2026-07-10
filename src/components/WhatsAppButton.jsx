import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { company } from '../data/content';

export default function WhatsAppButton() {
  return (
    <Box
      component="a"
      href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 28 },
        bottom: { xs: 16, md: 28 },
        width: 56,
        height: 56,
        borderRadius: '50%',
        bgcolor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
        zIndex: 1200,
        transition: 'transform 0.2s ease',
        '&:hover': { transform: 'scale(1.06)' },
      }}
    >
      <WhatsAppIcon sx={{ color: '#fff', fontSize: 30 }} />
    </Box>
  );
}
