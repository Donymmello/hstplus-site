import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { company } from '../data/content';
import { totalCourses } from '../data/courses';
import { gradients } from '../theme';
import Reveal from './Reveal';
import Counter from './Counter';

const API_URL = `${import.meta.env.VITE_API_URL || '/api'}/kpis`;

// Usado enquanto o fetch não responde, ou se o backend estiver indisponível —
// a secção nunca fica vazia/quebrada. A fonte de verdade passa a ser
// server/cache/kpis.json (editável via PUT /api/kpis).
const FALLBACK_KPIS = [
  { id: 'anos', value: new Date().getFullYear() - company.founded, suffix: '+', label: 'Anos no terreno' },
  { id: 'certificacoes', value: 100, suffix: '+', label: 'Certificações em equipamentos' },
  { id: 'formacoes', value: totalCourses, suffix: '+', label: 'Formações técnicas' },
  { id: 'clientes', value: 9, suffix: '+', label: 'Empresas clientes' },
];

export default function Stats() {
  const [stats, setStats] = useState(FALLBACK_KPIS);

  useEffect(() => {
    let cancelled = false;
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && Array.isArray(data.kpis) && data.kpis.length > 0) {
          setStats(data.kpis);
        }
      })
      .catch(() => {
        // Mantém FALLBACK_KPIS — falha silenciosa, não interrompe o utilizador.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {stats.map((s, i) => (
              <Grid size={{ xs: 6, md: 3 }} key={s.id || s.label}>
                <Reveal delay={i * 0.1}>
                  <Box
                    sx={{
                      bgcolor: 'background.paper',
                      p: { xs: 2.5, md: 4 },
                      borderRadius: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      height: '100%', // Garante que todos os cards tenham a mesma altura
                      boxShadow: '0 16px 38px rgba(21,32,30,.06)',
                      border: '1px solid rgba(21,32,30,.07)',
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
          <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', textAlign: 'center', mt: 3 }}>
            Números internos da HST Plus, actualizados periodicamente pela equipa de gestão.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}
