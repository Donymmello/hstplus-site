import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { company, values } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

export default function QuemSomos() {
  return (
    <Box id="quem-somos" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="md">
        <Reveal>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              03 — Quem Somos
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 2.5 }}>
              Uma equipa moçambicana dedicada à sua segurança
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 680, mx: 'auto' }}>
              <strong style={{ color: '#14181A' }}>{company.fullName}</strong> é uma empresa
              moçambicana fundada em {company.founded}, dedicada à Consultoria, Gestão de Riscos,
              Formação Profissional e Inspeção de Qualidade. Trabalhamos com uma equipa
              multidisciplinar, nacional e internacional, para reduzir a exposição a riscos
              laborais e assegurar o cumprimento da legislação em vigor.
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ mb: 3.5 }}>
              {values.map((v) => (
                <Chip key={v.title} label={v.title} size="small" sx={{ bgcolor: '#fff', border: '1px solid', borderColor: 'divider', fontWeight: 600, fontSize: '0.72rem' }} />
              ))}
            </Stack>
            <Button href="#certificacoes" variant="outlined" color="primary" endIcon={<ArrowOutwardIcon />}>
              Saber Mais
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
