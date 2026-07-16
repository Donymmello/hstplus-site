import { createTheme } from '@mui/material/styles';

export const colors = {
  maroon: '#8C1D2C', maroonDark: '#57101B', safetyGreen: '#24754A',
  safetyGreenDark: '#165334', hazardYellow: '#D89B1D', ink: '#15201E',
  paper: '#F7F8F5', paperAlt: '#EEF1EC', line: 'rgba(21,32,30,0.12)',
};

export const gradients = {
  primary: 'linear-gradient(135deg, #8C1D2C 0%, #57101B 100%)',
  secondary: 'linear-gradient(135deg, #2E8A5A 0%, #165334 100%)',
  dark: 'linear-gradient(135deg, #16211F 0%, #0D1514 72%, #57101B 150%)',
  surfaceLight: 'linear-gradient(180deg, #FFFFFF 0%, #F7F8F5 100%)',
  surfaceAlt: 'linear-gradient(180deg, #F1F4EF 0%, #F7F8F5 100%)',
  footer: 'linear-gradient(150deg, #15201E 0%, #0A1110 100%)',
};

const theme = createTheme({
  palette: {
    mode: 'light', primary: { main: colors.maroon, dark: colors.maroonDark, contrastText: '#fff' },
    secondary: { main: colors.safetyGreen, dark: colors.safetyGreenDark, contrastText: '#fff' },
    warning: { main: colors.hazardYellow }, background: { default: colors.paper, paper: '#fff' },
    text: { primary: colors.ink, secondary: 'rgba(21,32,30,0.68)' }, divider: colors.line,
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: '"IBM Plex Sans", "Segoe UI", sans-serif',
    h1: { fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.92 },
    h2: { fontFamily: '"Big Shoulders Display", sans-serif', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 0.98 },
    h3: { fontFamily: '"IBM Plex Sans", sans-serif', fontWeight: 650, letterSpacing: '-0.02em' },
    h4: { fontFamily: '"IBM Plex Sans", sans-serif', fontWeight: 650, letterSpacing: '-0.015em' },
    button: { fontFamily: '"IBM Plex Sans", sans-serif', fontWeight: 650, letterSpacing: '0.01em', textTransform: 'none' },
    overline: { fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.68rem', letterSpacing: '0.11em', fontWeight: 600, lineHeight: 1.5 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 10, minHeight: 44, paddingInline: '1.2rem', paddingBlock: '0.58rem', transition: 'transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease', '&:hover': { transform: 'translateY(-2px)' }, '&:active': { transform: 'translateY(0)' } }, contained: { boxShadow: '0 12px 28px rgba(87,16,27,0.18)' }, outlined: { borderWidth: 1.5 } } },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiCssBaseline: { styleOverrides: { body: { backgroundColor: colors.paper, color: colors.ink } } },
  },
});

export default theme;
