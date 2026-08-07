import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Slide from '@mui/material/Slide';
import { colors } from '../theme';
import { getConsent, setConsent } from '../lib/cookieConsent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Sem escolha guardada ainda -> mostra o banner. Se já escolheu antes
    // (aceitar ou recusar), não volta a incomodar.
    if (getConsent() === null) setOpen(true);

    // Link "Preferências de Cookies" no rodapé chama isto para reabrir o
    // banner, sem precisar de recarregar a página nem de Context/Redux só
    // para uma ligação.
    window.openCookiePreferences = () => setOpen(true);
    return () => {
      delete window.openCookiePreferences;
    };
  }, []);

  const handle = (value) => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Box
        role="dialog"
        aria-label="Preferências de cookies"
        sx={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1400,
          bgcolor: colors.ink,
          color: '#fff',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 -12px 30px rgba(0,0,0,0.25)',
        }}
      >
        <Container maxWidth="lg" sx={{ py: 2.5 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }} justifyContent="space-between">
            <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', maxWidth: 620 }}>
              Usamos cookies apenas para perceber, de forma anónima, como o site é utilizado (Google
              Analytics, quando activo). Não usamos cookies de publicidade nem partilhamos dados com
              terceiros para marketing. Podes ler mais na{' '}
              <Link component={RouterLink} to="/privacidade" sx={{ color: '#fff', textDecorationColor: 'rgba(255,255,255,0.5)' }}>
                Política de Privacidade
              </Link>
              .
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ flexShrink: 0 }}>
              <Button
                onClick={() => handle('declined')}
                variant="outlined"
                sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)', '&:hover': { borderColor: '#fff' } }}
              >
                Recusar
              </Button>
              <Button onClick={() => handle('accepted')} variant="contained" color="secondary">
                Aceitar
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Slide>
  );
}
