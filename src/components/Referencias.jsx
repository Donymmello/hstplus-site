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
import { gradients } from '../theme';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

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
    <Box id="referencias" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
        <SectionHeader index="08" eyebrow="Resultados" title="Formação e Redução de Acidentes">
          Percepção de risco, adesão à formação e evolução do índice de acidentes em algumas das
          operações onde actuámos.
        </SectionHeader>

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
          <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
            Nota metodológica: valores ilustrativos de avaliações internas realizadas em projectos
            seleccionados, sujeitos a validação e actualização. Não representam uma medição
            estatística formal nem foram auditados por terceiros independentes.
          </Typography>
        </Box>
      </Reveal>
      </Container>
    </Box>
  );
}
