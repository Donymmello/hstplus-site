import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
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
import Eyebrow from './Eyebrow';
import { clients, resultsChart } from '../data/content';

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
    <Box id="referencias" sx={{ py: { xs: 9, md: 13 }, bgcolor: '#EFEDE6' }}>
      <Container maxWidth="lg">
        <Eyebrow index="08">Nossas Referências</Eyebrow>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' }, mb: 6, maxWidth: 760 }}>
          Empresas que confiam na HST Plus
        </Typography>

        <Grid container spacing={1.5} sx={{ mb: 8 }}>
          {clients.map((c) => (
            <Grid item xs={6} sm={4} md={3} key={c}>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  bgcolor: '#fff',
                  border: '1px solid',
                  borderColor: 'divider',
                  height: 96,
                  px: 2,
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Big Shoulders Display"',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '1rem',
                    color: 'text.primary',
                    letterSpacing: '0.02em',
                  }}
                >
                  {c}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ bgcolor: '#fff', p: { xs: 2, md: 4 } }}>
          <Typography variant="h4" sx={{ fontSize: '1.1rem', mb: 3 }}>
            Formação e Redução de Acidentes
          </Typography>
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
