import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { company } from '../data/content';
import { totalCourses } from '../data/courses';

const stats = [
  { value: `${new Date().getFullYear() - company.founded}+`, label: 'Anos no terreno' },
  { value: '100+', label: 'Certificações em equipamentos' },
  { value: `${totalCourses}+`, label: 'Formações técnicas' },
  { value: '9+', label: 'Empresas clientes' },
];

export default function Stats() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {stats.map((s) => (
            <Grid item xs={6} md={3} key={s.label} sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontFamily: '"Big Shoulders Display"',
                  fontWeight: 800,
                  fontSize: { xs: '2.4rem', md: '3rem' },
                  color: 'primary.main',
                  lineHeight: 1,
                }}
              >
                {s.value}
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mt: 0.5 }}>{s.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
