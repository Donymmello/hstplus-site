import { Component } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';
import { company } from '../data/content';

/**
 * Apanha erros de JavaScript que aconteçam durante o render de qualquer
 * componente descendente (bugs, dados inesperados, etc.) e mostra uma
 * página amigável em vez do ecrã em branco que o React deixa por defeito
 * quando uma excepção não é apanhada. Não substitui testes nem corrige a
 * causa do erro — é uma rede de segurança para quem está a visitar o site.
 *
 * Nota técnica: Error Boundaries só existem como class components no React
 * — não há equivalente com hooks ainda.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Fica só no log do browser por agora — se um dia quiserem reportar
    // isto para um serviço externo (Sentry, etc.), é aqui que se liga.
    console.error('[ErrorBoundary] erro apanhado:', error, info);
  }

  handleReload = () => {
    window.location.href = '/';
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', bgcolor: '#F6F5F1' }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: '"Big Shoulders Display"',
              fontWeight: 800,
              fontSize: { xs: '3.5rem', md: '4.5rem' },
              color: '#7A1420',
              lineHeight: 1,
              mb: 2,
            }}
          >
            Algo correu mal
          </Typography>
          <Typography sx={{ color: 'rgba(20,24,26,0.68)', mb: 4, maxWidth: 440, mx: 'auto' }}>
            Encontrámos um erro inesperado. A nossa equipa já foi avisada — tenta voltar à página
            inicial, ou contacta-nos se o problema continuar.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
            <Button onClick={this.handleReload} variant="contained" color="secondary" startIcon={<HomeIcon />}>
              Voltar à página inicial
            </Button>
            <Button
              component="a"
              href={`mailto:${company.email}`}
              variant="outlined"
              color="primary"
              startIcon={<RefreshIcon />}
            >
              Reportar o problema
            </Button>
          </Stack>
        </Container>
      </Box>
    );
  }
}
