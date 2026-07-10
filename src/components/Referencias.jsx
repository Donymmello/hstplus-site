import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { resultsChart } from '../data/content';

function transformData() {
  return resultsChart.labels.map((label, i) => {
    const row = { label };
    resultsChart.series.forEach((s) => {
      row[s.key] = s.data[i];
    });
    return row;
  });
}

export default function Referencias() {
  const data = transformData();

  return (
    <Box id="referencias" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#EFEDE6' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            08 — Resultados
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 1.5 }}>
            Formação e Redução de Acidentes
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
            Percepção de risco, adesão à formação e evolução do índice de acidentes em algumas das
            operações onde actuámos.
          </Typography>
        </Box>

        <Box sx={{ bgcolor: '#fff', p: { xs: 2, md: 4 } }}>
          <Box sx={{ width: '100%', height: 360 }}>
            <ResponsiveContainer>
              <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0DED6" />
                <XAxis dataKey="label" tick={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} />
                <YAxis tick={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} />
                <Tooltip contentStyle={{ fontFamily: 'IBM Plex Sans', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontFamily: 'IBM Plex Sans', fontSize: 12 }} />
                {resultsChart.series.map((s) => (
                  <Bar key={s.key} dataKey={s.key} name={s.name} fill={s.color} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
