import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';
import { gradients } from '../theme';

// Âncoras da página principal usam "/#id" (funcionam a partir de qualquer
// página); a Galeria é uma página própria, por isso usa um caminho normal.
const links = [
  { to: '/#quem-somos', label: 'Quem Somos' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/#solucoes', label: 'Soluções' },
  { to: '/#formacoes', label: 'Formações' },
  { to: '/#certificacoes', label: 'Certificações' },
  { to: '/#referencias', label: 'Referências' },
  { to: '/#blog', label: 'Blog' },
  { to: '/#contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={scrolled ? 4 : 0}
        sx={{ backgroundImage: gradients.primary, top: 0, transition: 'box-shadow 0.3s ease' }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: scrolled ? 58 : 72 },
            px: { xs: 2, md: 5 },
            transition: 'min-height 0.25s ease',
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ flexGrow: 1 }}
            component={RouterLink}
            to="/"
            style={{ textDecoration: 'none' }}
          >
            <Box
              component="img"
              src={logo}
              alt="HST Plus"
              sx={{
                height: { xs: 32, md: scrolled ? 28 : 36 },
                transition: 'height 0.25s ease',
              }}
            />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1 }}>
                HST PLUS
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.08em',
                  maxHeight: scrolled ? 0 : 14,
                  opacity: scrolled ? 0 : 1,
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                }}
              >
                CONSULTANCY &amp; TRAINING
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', lg: 'flex' } }}>
            {links.map((l) => (
              <Button key={l.to} component={RouterLink} to={l.to} sx={{ color: '#fff', fontSize: '0.72rem', px: 1.5 }}>
                {l.label}
              </Button>
            ))}
          </Stack>

          <Button
            component={RouterLink}
            to="/#contacto"
            variant="contained"
            color="secondary"
            sx={{ ml: 2, display: { xs: 'none', md: 'inline-flex' } }}
          >
            Pedir Proposta
          </Button>

          <IconButton
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            sx={{ color: '#fff', display: { xs: 'inline-flex', lg: 'none' }, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, backgroundImage: gradients.primary, height: '100%', color: '#fff', p: 3 }}>
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)} sx={{ color: '#fff' }} aria-label="Fechar menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={0.5} sx={{ mt: 2 }}>
            {links.map((l) => (
              <Button
                key={l.to}
                component={RouterLink}
                to={l.to}
                onClick={() => setOpen(false)}
                sx={{ color: '#fff', justifyContent: 'flex-start', fontSize: '0.8rem' }}
              >
                {l.label}
              </Button>
            ))}
            <Button
              component={RouterLink}
              to="/#contacto"
              onClick={() => setOpen(false)}
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
            >
              Pedir Proposta
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
