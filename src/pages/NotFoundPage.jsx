import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import { gradients } from '../theme';
import Seo from '../components/Seo';

const suggestions = [
  { to: '/#formacoes', label: 'Ver Formações' },
  { to: '/#setores', label: 'Ver Sectores' },
  { to: '/insights', label: 'Ler Insights' },
  { to: '/#contacto', label: 'Contactar-nos' },
];

export default function NotFoundPage() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundImage: gradients.surfaceLight, minHeight: '70vh' }}>
      <Seo title="Página não encontrada" noindex />
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontFamily: '"Big Shoulders Display"',
            fontWeight: 800,
            fontSize: { xs: '5rem', md: '7rem' },
            lineHeight: 1,
            color: 'primary.main',
            opacity: 0.9,
          }}
        >
          404
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.9rem' }, mt: 1, mb: 2 }}>
          Esta página não existe
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 5, maxWidth: 440, mx: 'auto' }}>
          O link pode estar errado, ou a página pode ter sido movida. Volta à página inicial ou
          escolhe um dos atalhos abaixo.
        </Typography>

        <Button component={RouterLink} to="/" variant="contained" color="secondary" size="large" startIcon={<HomeIcon />} sx={{ mb: 5 }}>
          Voltar à página inicial
        </Button>

        <Stack direction="row" spacing={{ xs: 2, sm: 3 }} justifyContent="center" flexWrap="wrap" useFlexGap>
          {suggestions.map((s) => (
            <Link
              key={s.to}
              component={RouterLink}
              to={s.to}
              underline="hover"
              sx={{ fontSize: '0.85rem', color: 'secondary.dark' }}
            >
              {s.label}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
