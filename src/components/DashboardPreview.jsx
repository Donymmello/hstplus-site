import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import ScheduleIcon from '@mui/icons-material/Schedule';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { gradients } from '../theme';
import Reveal from './Reveal';

const API_URL = `${import.meta.env.VITE_API_URL || '/api'}/dashboard-preview`;

// Mapa nome (string, vem da API) -> componente de ícone. Mantém-se em sincronia
// com ICON_OPTIONS em server/src/dashboardPreview.js e com o admin.
export const ICON_MAP = {
  FactCheckOutlined: FactCheckOutlinedIcon,
  CheckCircleOutlined: CheckCircleOutlined,
  TrendingUp: TrendingUpIcon,
  Groups: GroupsIcon,
  Schedule: ScheduleIcon,
  WarningAmber: WarningAmberIcon,
};

// Usado enquanto o fetch não responde, ou se o backend estiver indisponível
// — a secção nunca fica vazia/quebrada. A fonte de verdade passa a ser
// server/cache/dashboard-preview.json (editável via PUT /api/dashboard-preview).
const FALLBACK = {
  cards: [
    { id: 'c1', label: 'Inspeções planeadas', value: '24', icon: 'FactCheckOutlined' },
    { id: 'c2', label: 'Conformidade média', value: '94%', icon: 'CheckCircleOutlined' },
    { id: 'c3', label: 'Ações concluídas', value: '18', icon: 'TrendingUp' },
  ],
  chart: [42, 58, 48, 70, 63, 88, 76, 94],
  activity: [
    { id: 'a1', text: 'Plano de emergência — revisão aprovada' },
    { id: 'a2', text: 'Formação de trabalho em altura — equipa certificada' },
    { id: 'a3', text: 'Inspeção de equipamentos — relatório emitido' },
  ],
};

export default function DashboardPreview() {
  const [data, setData] = useState(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    fetch(API_URL)
      .then((r) => r.json())
      .then((res) => {
        if (!cancelled && res.dashboard) setData(res.dashboard);
      })
      .catch(() => {
        // Mantém FALLBACK — falha silenciosa, não interrompe o utilizador.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const { cards, chart, activity } = data;

  return (
    <Box component="section" sx={{ py: { xs: 9, md: 14 }, backgroundImage: gradients.dark, color: '#fff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Reveal>
              <Typography variant="overline" sx={{ color: '#F6C859' }}>
                VISIBILIDADE OPERACIONAL
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.7rem', md: '3.5rem' }, mt: 1.5 }}>
                Decisões melhores, apoiadas por evidência.
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.7, mt: 2.5 }}>
                Uma prévia da experiência digital que pode acompanhar o desempenho de segurança da
                sua operação.
              </Typography>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Reveal delay={0.12}>
              <Box
                sx={{
                  border: '1px solid rgba(255,255,255,.15)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: 'rgba(255,255,255,.07)',
                  boxShadow: '0 32px 80px rgba(0,0,0,.28)',
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ px: { xs: 2, md: 3 }, py: 2, borderBottom: '1px solid rgba(255,255,255,.12)' }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 650 }}>HST Control Center</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,.55)', fontSize: '.75rem', mt: 0.25 }}>
                      Resumo operacional
                    </Typography>
                  </Box>
                  <Box sx={{ px: 1.2, py: 0.5, borderRadius: 1, bgcolor: 'rgba(240,180,41,.16)', color: '#F0B429', fontSize: '.68rem', fontWeight: 700, letterSpacing: '0.03em' }}>
                    VERSÃO DEMONSTRATIVA
                  </Box>
                </Stack>

                <Box sx={{ px: { xs: 2, md: 3 }, py: 1, bgcolor: 'rgba(0,0,0,.15)' }}>
                  <Typography sx={{ fontSize: '.7rem', color: 'rgba(255,255,255,.6)' }}>
                    Conteúdos e indicadores ilustrativos, sujeitos a validação não representam
                    dados reais de nenhum cliente.
                  </Typography>
                </Box>

                <Box sx={{ p: { xs: 2, md: 3 } }}>
                  <Grid container spacing={1.5}>
                    {cards.map(({ id, label, value, icon }) => {
                      const Icon = ICON_MAP[icon] || FactCheckOutlinedIcon;
                      return (
                        <Grid size={{ xs: 12, sm: 4 }} key={id}>
                          <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(255,255,255,.08)' }}>
                            <Icon sx={{ fontSize: 19, color: '#F6C859' }} />
                            <Typography sx={{ mt: 1.5, fontSize: '1.55rem', fontWeight: 650, fontVariantNumeric: 'tabular-nums' }}>
                              {value}
                            </Typography>
                            <Typography sx={{ mt: 0.25, fontSize: '.72rem', color: 'rgba(255,255,255,.57)' }}>{label}</Typography>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>

                  <Grid container spacing={1.5} sx={{ mt: 1.5 }}>
                    <Grid size={{ xs: 12, sm: 7 }}>
                      <Box sx={{ p: 2, minHeight: 172, borderRadius: 2, bgcolor: 'rgba(255,255,255,.08)' }}>
                        <Typography sx={{ fontSize: '.76rem', color: 'rgba(255,255,255,.62)' }}>
                          Indicador de conformidade
                        </Typography>
                        <Stack direction="row" alignItems="end" spacing={1} sx={{ height: 110, pt: 3 }}>
                          {chart.map((height, index) => (
                            <Box
                              key={index}
                              sx={{
                                flex: 1,
                                height: `${height}%`,
                                borderRadius: '5px 5px 1px 1px',
                                bgcolor: index === chart.length - 1 ? '#F6C859' : 'rgba(132,210,166,.55)',
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5 }}>
                      <Box sx={{ p: 2, minHeight: 172, borderRadius: 2, bgcolor: 'rgba(255,255,255,.08)' }}>
                        <Typography sx={{ fontSize: '.76rem', color: 'rgba(255,255,255,.62)', mb: 1.2 }}>
                          Atividade recente
                        </Typography>
                        <Stack spacing={1.1}>
                          {activity.map((item, index) => (
                            <Stack key={item.id} direction="row" spacing={1} alignItems="flex-start">
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  mt: 0.65,
                                  borderRadius: '50%',
                                  bgcolor: index === 0 ? '#F6C859' : '#83D9A5',
                                  animation: index === 0 ? 'dashboardPulse 2s ease infinite' : 'none',
                                }}
                              />
                              <Typography sx={{ fontSize: '.7rem', lineHeight: 1.45, color: 'rgba(255,255,255,.77)' }}>
                                {item.text}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}