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
import SectionHeader from './SectionHeader';

export default function QuemSomos() {
  return (
    <Box id="quem-somos" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="md">
        <Reveal>
          <SectionHeader index="03" eyebrow="Quem Somos" title="Uma equipa moçambicana dedicada à sua segurança" introWidth={680} mb={3}>
            <strong style={{ color: '#14181A' }}>{company.fullName}</strong> é uma empresa
            moçambicana fundada em {company.founded}, dedicada à Consultoria, Gestão de Riscos,
            Formação Profissional e Inspeção de Qualidade. Trabalhamos com uma equipa
            multidisciplinar, nacional e internacional, para reduzir a exposição a riscos
            laborais e assegurar o cumprimento da legislação em vigor.
          </SectionHeader>
          <Box sx={{ textAlign: 'center' }}>
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
