import { useEffect, useState } from 'react';
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
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../assets/logo.png';

const links = [
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#o-que-fazemos', label: 'O Que Fazemos' },
  { href: '#formacoes', label: 'Formações' },
  { href: '#consultoria', label: 'Consultoria' },
  { href: '#certificacoes', label: 'Legalidade' },
  { href: '#referencias', label: 'Referências' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(20,24,26,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(6px)' : 'none',
          transition: 'background-color 0.25s ease',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 76 }, px: { xs: 2, md: 5 } }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ flexGrow: 1 }} component="a" href="#top" style={{ textDecoration: 'none' }}>
            <Box component="img" src={logo} alt="HST Plus" sx={{ height: { xs: 34, md: 40 } }} />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1 }}>
                HST PLUS
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.62rem', letterSpacing: '0.08em' }}>
                CONSULTANCY &amp; TRAINING
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', lg: 'flex' } }}>
            {links.map((l) => (
              <Button key={l.href} href={l.href} sx={{ color: '#fff', fontSize: '0.72rem', px: 1.5 }}>
                {l.label}
              </Button>
            ))}
          </Stack>

          <Button
            href="tel:+258865564580"
            variant="contained"
            color="secondary"
            startIcon={<PhoneIcon />}
            sx={{ ml: 2, display: { xs: 'none', md: 'inline-flex' } }}
          >
            Fale Connosco
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
        <Box sx={{ width: 280, bgcolor: 'primary.dark', height: '100%', color: '#fff', p: 3 }}>
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)} sx={{ color: '#fff' }} aria-label="Fechar menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={0.5} sx={{ mt: 2 }}>
            {links.map((l) => (
              <Button
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                sx={{ color: '#fff', justifyContent: 'flex-start', fontSize: '0.8rem' }}
              >
                {l.label}
              </Button>
            ))}
            <Button
              href="tel:+258865564580"
              variant="contained"
              color="secondary"
              startIcon={<PhoneIcon />}
              sx={{ mt: 2 }}
            >
              Fale Connosco
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
