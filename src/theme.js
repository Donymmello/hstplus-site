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
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
  },
});

export default theme;
