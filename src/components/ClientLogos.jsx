import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import uniSpan from '../assets/clients/uni-span.png';
import terminaisDoNorte from '../assets/clients/terminais-do-norte.png';
import motaEngil from '../assets/clients/mota-engil.png';
import tcpi from '../assets/clients/tcpi.png';
import manica from '../assets/clients/manica.jpg';
import lcpower from '../assets/clients/lcpower.png';
import gabrielCouto from '../assets/clients/gabriel-couto.jpg';
import protecna from '../assets/clients/protecna.jpg';
import tata from '../assets/clients/tata.png';
import Reveal from './Reveal';

const logos = [
  { src: uniSpan, alt: 'Uni-Span' },
  { src: terminaisDoNorte, alt: 'Terminais do Norte' },
  { src: motaEngil, alt: 'Mota-Engil Engenharia' },
  { src: tcpi, alt: 'TCPI International' },
  { src: manica, alt: 'Manica Moçambique Terminais' },
  { src: lcpower, alt: 'LC Power' },
  { src: gabrielCouto, alt: 'Gabriel Couto' },
  { src: protecna, alt: 'Protecna' },
  { src: tata, alt: 'Tata' },
];

export default function ClientLogos() {
  return (
    <Box sx={{ py: { xs: 5, md: 6 }, bgcolor: '#fff', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Reveal>
        <Typography sx={{ textAlign: 'center', fontSize: '0.72rem', color: 'text.secondary', letterSpacing: '0.06em', mb: 3 }}>
          Empresas que confiam na HST Plus
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" alignItems="center">
          {logos.map((l) => (
            <Grid size={{ xs: 4, sm: 3, md: 1.33 }} key={l.alt} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src={l.src}
                alt={l.alt}
                sx={{
                  maxHeight: { xs: 32, md: 38 },
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'grayscale(1)',
                  opacity: 0.7,
                  transition: 'all 0.2s ease',
                  '&:hover': { filter: 'grayscale(0)', opacity: 1 },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
