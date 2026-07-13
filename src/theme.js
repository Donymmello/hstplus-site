import { createTheme } from '@mui/material/styles';

// Paleta ancorada na identidade HST Plus: vermelho-terra (marca), verde-segurança
// (aprovação/conformidade), preto-industrial e branco técnico. Amarelo-perigo usado
// como acento raro, no espírito da sinalética de segurança do sector.
export const colors = {
  maroon: '#7A1420',
  maroonDark: '#4A0D14',
  safetyRed: '#C81D2C',
  safetyGreen: '#1F7A3D',
  safetyGreenDark: '#14522A',
  hazardYellow: '#F0B429',
  ink: '#14181A',
  paper: '#F6F5F1',
  paperAlt: '#EFEDE6',
  line: 'rgba(20,24,26,0.12)',
};

// Gradientes usados em botões, cabeçalhos e secções escuras — mantêm a identidade
// maroon/verde da marca com um pouco mais de profundidade do que uma cor lisa.
export const gradients = {
  primary: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.maroonDark} 100%)`,
  secondary: `linear-gradient(135deg, #2E9350 0%, ${colors.safetyGreenDark} 100%)`,
  dark: `linear-gradient(160deg, ${colors.maroonDark} 0%, #2E0810 55%, ${colors.ink} 130%)`,
  // Gradientes muito subtis para as secções "claras" — dão profundidade sem
  // comprometer a legibilidade do texto.
  surfaceLight: `linear-gradient(180deg, #FFFFFF 0%, ${colors.paper} 100%)`,
  surfaceAlt: `linear-gradient(180deg, ${colors.paper} 0%, ${colors.paperAlt} 100%)`,
  footer: `linear-gradient(160deg, #171B1C 0%, #0A0C0D 100%)`,
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: colors.maroon, dark: colors.maroonDark, contrastText: '#fff' },
    secondary: { main: colors.safetyGreen, dark: colors.safetyGreenDark, contrastText: '#fff' },
    warning: { main: colors.hazardYellow },
    background: { default: colors.paper, paper: '#FFFFFF' },
    text: { primary: colors.ink, secondary: 'rgba(20,24,26,0.68)' },
    divider: colors.line,
  },
  shape: { borderRadius: 2 },
  typography: {
    fontFamily: '"IBM Plex Sans", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Big Shoulders Display", sans-serif',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 0.95,
    },
    h2: {
      fontFamily: '"Big Shoulders Display", sans-serif',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 1,
    },
    h3: {
      fontFamily: '"Big Shoulders Display", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: '"Big Shoulders Display", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    subtitle1: { fontWeight: 600 },
    button: {
      fontFamily: '"IBM Plex Mono", monospace',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    },
    overline: {
      fontFamily: '"IBM Plex Mono", monospace',
      letterSpacing: '0.18em',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 2, paddingInline: '1.4em', paddingBlock: '0.8em' },
        contained: {
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '35%',
            height: '100%',
            background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)',
            transform: 'translateX(-120%) skewX(-15deg)',
            pointerEvents: 'none',
          },
          '&:hover::after': {
            animation: 'hstButtonShine 0.85s ease',
          },
        },
        containedPrimary: {
          backgroundImage: gradients.primary,
          '&:hover': { backgroundImage: gradients.primary, filter: 'brightness(1.08)' },
        },
        containedSecondary: {
          backgroundImage: gradients.secondary,
          '&:hover': { backgroundImage: gradients.secondary, filter: 'brightness(1.08)' },
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
  },
});

export default theme;
