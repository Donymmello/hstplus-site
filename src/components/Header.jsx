import { useEffect, useState, useRef } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import logo from '../assets/logo.png';
import { colors, gradients } from '../theme';

// Importamos os cursos para listar no Mega Menu
import { courseCatalog } from '../data/courses';

// Retirámos "Formações" desta lista para tratá-lo separadamente
const links = [
  { to: '/', label: 'Inicio' },
  { to: '/#quem-somos', label: 'Quem Somos' },
  { to: '/#solucoes', label: 'Soluções' },
  { to: '/#setores', label: 'Sectores' },
  { to: '/#blog', label: 'Blog' },
  { to: '/#contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Controlo do Mega Menu por Hover (Desktop)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lógica para clicar no botão de Formações e rolar até à secção
  const handleFormacoesClick = (e) => {
    e.preventDefault();
    setMegaMenuOpen(false); // Fecha o menu ao clicar

    if (location.pathname === '/') {
      const element = document.getElementById('formacoes');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#formacoes');
    }
  };

  // Clicar no logo estando já na Home é um clique para o MESMO url — o
  // React Router não navega, não re-renderiza nada, e por isso nenhum
  // scroll é accionado sozinho. Se já estamos na home sem hash, tratamos
  // isto à mão.
  const handleLogoClick = (e) => {
    if (location.pathname === '/' && !location.hash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ backgroundColor: 'rgba(255,255,255,.94)', backdropFilter: 'blur(18px)', color: colors.ink, top: 0, borderBottom: '1px solid', borderColor: scrolled ? 'divider' : 'rgba(21,32,30,.08)', boxShadow: scrolled ? '0 8px 30px rgba(21,32,30,.07)' : 'none', transition: 'border-color .25s ease, box-shadow .25s ease' }}
      >
        <Toolbar
          sx={{
            position: 'relative',
            minHeight: { xs: 64, md: scrolled ? 58 : 72 },
            maxWidth: 1240, width: '100%', mx: 'auto', px: { xs: 2, md: 3 },
            transition: 'min-height 0.25s ease',
          }}
        >
          <Stack
            component={RouterLink}
            to="/"
            onClick={handleLogoClick}
            spacing={1.5}
            sx={{
              display: 'flex',       // Garante o flexbox
              flexDirection: 'row',  // Substitui a prop direction="row"
              alignItems: 'center',  // Substitui a prop solta alignItems="center"
              textDecoration: 'none' // Pode mover o style para aqui também!
            }}
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
              <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1 }}>
                HST PLUS
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
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

          {/* Espaço vazio entre o logo e o menu — de propósito SEM link nenhum,
              para não repetir o bug de "a barra toda é clicável" */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Menu Desktop */}
          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
            {/* Quem Somos e Soluções */}
            {links.slice(0, 2).map((l) => (
              <Button key={l.to} component={RouterLink} to={l.to} sx={{ color: 'text.primary', fontSize: '0.78rem', px: 1.2 }}>
                {l.label}
              </Button>
            ))}

            {/* BOTÃO FORMAÇÕES COM HOVER ATIVO (MEGA MENU) */}
            <Box
              ref={containerRef}
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <Button
                onClick={handleFormacoesClick}
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: megaMenuOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                      fontSize: '0.9rem !important'
                    }}
                  />
                }
                sx={{ color: 'text.primary', fontSize: '0.78rem', px: 1.2 }}
              >
                Formações
              </Button>

              {/* MEGA MENU: Abre suavemente ao passar o rato */}
              <Fade in={megaMenuOpen} timeout={250}>
                <Paper
                  elevation={8}
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80vw', // Ocupa 80% da largura do ecrã
                    maxWidth: 900,
                    bgcolor: '#101725', // Fundo escuro premium
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 3,
                    p: 4,
                    mt: 1,
                    zIndex: 1300,
                  }}
                >
                  {/* Grid de Cursos dividida pelas Categorias */}
                  <Grid container spacing={3}>
                    {courseCatalog.map((cat) => (
                      <Grid size={{ xs: 12, sm: 4 }} key={cat.category}>
                        {/* Título da Categoria sutil no topo de cada coluna */}
                        <Typography
                          sx={{
                            fontSize: '0.78rem',
                            color: 'secondary.main',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            mb: 1.5,
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            pb: 0.8
                          }}
                        >
                          {cat.category}
                        </Typography>
                        {/* Lista dos Cursos de forma direta */}
                        <Stack spacing={1.2}>
                          {cat.courses.slice(0, 4).map((c) => ( // Mostra até 4 cursos em cada coluna
                            <Typography
                              key={c.name}
                              component={RouterLink}
                              to="/#formacoes"
                              onClick={() => setMegaMenuOpen(false)}
                              sx={{
                                fontSize: '0.92rem',
                                color: 'rgba(255,255,255,0.92)',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                transition: '0.2s',
                                '&:hover': {
                                  color: '#fff',
                                  transform: 'translateX(4px)'
                                }
                              }}
                            >
                              <ArrowRightIcon sx={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)' }} />
                              {c.name}
                            </Typography>
                          ))}
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Linha Divisória e Botão Ver Todas */}
                  <Box
                    sx={{
                      mt: 3,
                      pt: 2,
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <Button
                      component={RouterLink}
                      to="/#formacoes"
                      onClick={() => setMegaMenuOpen(false)}
                      variant="contained"
                      color="secondary"
                      size="small"
                      sx={{ fontSize: '0.7rem', px: 3, py: 0.8 }}
                    >
                      Ver Todas as Formações
                    </Button>
                  </Box>
                </Paper>
              </Fade>
            </Box>

            {/* Restantes links (Blog e Contacto) */}
            {links.slice(2).map((l) => (
              <Button key={l.to} component={RouterLink} to={l.to} sx={{ color: 'text.primary', fontSize: '0.78rem', px: 1.2 }}>
                {l.label}
              </Button>
            ))}
          </Stack>

          <IconButton
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            sx={{ color: 'text.primary', display: { xs: 'inline-flex', lg: 'none' }, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MENU DRAWER (MOBILE) */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, backgroundImage: gradients.primary, height: '100%', color: '#fff', p: 3 }}>
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)} sx={{ color: '#fff' }} aria-label="Fechar menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={0.5} sx={{ mt: 2 }}>
            {/* Quem Somos & Soluções */}
            {links.slice(0, 2).map((l) => (
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

            {/* No Mobile o comportamento de passar o rato não existe, então mantemos um botão clássico que scrolla direto */}
            <Button
              component={RouterLink}
              to="/#formacoes"
              onClick={() => setOpen(false)}
              sx={{ color: '#fff', justifyContent: 'flex-start', fontSize: '0.8rem' }}
            >
              Formações
            </Button>

            {/* Restantes links */}
            {links.slice(2).map((l) => (
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