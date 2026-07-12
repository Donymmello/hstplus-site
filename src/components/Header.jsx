import { useState } from 'react';
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

const links = [
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#formacoes', label: 'Formações' },
  { href: '#certificacoes', label: 'Certificações' },
  { href: '#referencias', label: 'Referências' },
  { href: '#blog', label: 'Blog' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ backgroundImage: gradients.primary, top: 0 }}>
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 }, px: { xs: 2, md: 5 } }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ flexGrow: 1 }}
            component="a"
            href="#top"
            style={{ textDecoration: 'none' }}
          >
            <Box component="img" src={logo} alt="HST Plus" sx={{ height: { xs: 32, md: 36 } }} />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1 }}>
                HST PLUS
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.58rem', letterSpacing: '0.08em' }}>
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
            href="#contacto"
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
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                sx={{ color: '#fff', justifyContent: 'flex-start', fontSize: '0.8rem' }}
              >
                {l.label}
              </Button>
            ))}
            <Button href="#contacto" onClick={() => setOpen(false)} variant="contained" color="secondary" sx={{ mt: 2 }}>
              Pedir Proposta
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
