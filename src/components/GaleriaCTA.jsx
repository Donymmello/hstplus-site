import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { Link as RouterLink } from 'react-router-dom';
import { gradients } from '../theme';
import Reveal from './Reveal';

/**
 * Antes esta secção mostrava um carrossel de fotos directamente na página
 * principal. Agora é só um convite — as fotos vivem na página /galeria.
 */
export default function GaleriaCTA() {
  return (
    <Box id="galeria" sx={{ py: { xs: 7, md: 9 }, backgroundImage: gradients.dark, color: '#fff' }}>
      <Container maxWidth="sm">
        <Reveal>
          <Box sx={{ textAlign: 'center' }}>
            <PhotoLibraryIcon sx={{ fontSize: 34, color: 'warning.main', mb: 1.5 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: '1.7rem', md: '2rem' }, mb: 1.5 }}>
              Veja a HST Plus em acção
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.78)', mb: 3.5 }}>
              Fotos das nossas formações e inspecções no terreno, numa galeria dedicada.
            </Typography>
            <Button
              component={RouterLink}
              to="/galeria"
              variant="contained"
              color="secondary"
              size="large"
            >
              Ver Galeria
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
