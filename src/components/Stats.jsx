import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { company } from '../data/content';
import { totalCourses } from '../data/courses';
import { gradients } from '../theme';
import Reveal from './Reveal';
import Counter from './Counter';

const stats = [
  { value: new Date().getFullYear() - company.founded, suffix: '+', label: 'Anos no terreno' },
  { value: 100, suffix: '+', label: 'Certificações em equipamentos' },
  { value: totalCourses, suffix: '+', label: 'Formações técnicas' },
  { value: 9, suffix: '+', label: 'Empresas clientes' },
];

export default function Stats() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
          {/* CORREÇÃO: Adicionado justifyContent="center" para centralizar a fileira de cards inteira */}
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {stats.map((s, i) => (
              <Grid item xs={6} md={3} key={s.label}>
                <Reveal delay={i * 0.1}>
                  <Box
                    sx={{
                      bgcolor: 'background.paper',
                      p: { xs: 2.5, md: 4 },
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      height: '100%', // Garante que todos os cards tenham a mesma altura
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Counter
                      to={s.value}
                      suffix={s.suffix}
                      sx={{
                        fontFamily: '"Big Shoulders Display"',
                        fontWeight: 800,
                        fontSize: { xs: '2.4rem', md: '3rem' },
                        color: 'primary.main',
                        lineHeight: 1,
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    />
                    <Typography 
                      sx={{ 
                        fontSize: '0.85rem', 
                        color: 'text.secondary', 
                        mt: 1,
                        fontWeight: 500,
                        lineHeight: 1.3
                      }}
                    >
                      {s.label}
                    </Typography>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
}