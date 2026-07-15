import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { company, values } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import PhotoFrame from './PhotoFrame';
import aboutPhoto from '../assets/about1.jpg';

export default function QuemSomos() {
  return (
    <Box id="quem-somos" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <PhotoFrame
                src={aboutPhoto}
                alt="Equipa multidisciplinar da HST Plus"
                ratio={{ xs: '16/10', md: '4/5' }}
              />
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal delay={0.12}>
              <SectionHeader
                index="03"
                eyebrow="Quem Somos"
                title="Uma equipa moçambicana dedicada à sua segurança"
                align="left"
                introWidth={620}
                mb={3}
              >
                <strong style={{ color: '#14181A' }}>{company.fullName}</strong> é uma empresa
                moçambicana fundada em {company.founded}, dedicada à Consultoria, Gestão de Riscos,
                Formação Profissional e Inspeção de Qualidade. Trabalhamos com uma equipa
                multidisciplinar, nacional e internacional, para reduzir a exposição a riscos
                laborais e assegurar o cumprimento da legislação em vigor.
              </SectionHeader>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3.5 }}>
                {values.map((v) => (
                  <Chip key={v.title} label={v.title} size="small" sx={{ bgcolor: '#fff', border: '1px solid', borderColor: 'divider', fontWeight: 600, fontSize: '0.72rem' }} />
                ))}
              </Stack>
              <Button href="#certificacoes" variant="outlined" color="primary" endIcon={<ArrowOutwardIcon />}>
                Saber Mais
              </Button>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
