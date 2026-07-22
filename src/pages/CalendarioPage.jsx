import { useEffect, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InfoIcon from '@mui/icons-material/Info';
import { gradients } from '../theme';
import { company } from '../data/content';
import Reveal from '../components/Reveal';
import LeadFormDialog from '../components/LeadFormDialog';

const API_URL = `${import.meta.env.VITE_API_URL || '/api'}/calendario`;

const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

function formatData(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return { dia: d, mes: MESES[m - 1], mesAbrev: MESES[m - 1].slice(0, 3).toUpperCase(), ano: y, mesIndex: m };
}

function formatDataLonga(iso) {
  const { dia, mes, ano } = formatData(iso);
  return `${String(dia).padStart(2, '0')} de ${mes} de ${ano}`;
}

function formatPreco(valor) {
  if (valor == null || valor === '') return null;
  return `${Number(valor).toLocaleString('pt-MZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MT`;
}

function groupByMonth(turmas) {
  const groups = [];
  for (const t of turmas) {
    const { mes, ano } = formatData(t.data);
    const key = `${mes} ${ano}`;
    let g = groups.find((g) => g.key === key);
    if (!g) {
      g = { key, label: key, turmas: [] };
      groups.push(g);
    }
    g.turmas.push(t);
  }
  return groups;
}

const emptyFilters = { busca: '', categoria: '', modalidade: '', ano: '', mes: '' };

export default function CalendarioPage() {
  const [turmas, setTurmas] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ok' | 'error'
  const [dialog, setDialog] = useState(null);
  const [selectedCurso, setSelectedCurso] = useState('');
  const [filters, setFilters] = useState(emptyFilters);

  useEffect(() => {
    document.title = 'Calendário de Formações — HST Plus';
    let cancelled = false;
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        setTurmas(Array.isArray(data.turmas) ? data.turmas : []);
        setStatus('ok');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const openDialog = (type, curso) => {
    setSelectedCurso(curso);
    setDialog(type);
  };

  // Opções de filtro derivadas dos dados reais — nunca uma lista fixa que
  // possa desalinhar do que está de facto no calendário.
  const options = useMemo(() => {
    const categorias = new Set();
    const modalidades = new Set();
    const anos = new Set();
    turmas.forEach((t) => {
      if (t.categoria) categorias.add(t.categoria);
      if (t.modalidade) modalidades.add(t.modalidade);
      anos.add(formatData(t.data).ano);
    });
    return {
      categorias: [...categorias].sort(),
      modalidades: [...modalidades].sort(),
      anos: [...anos].sort(),
    };
  }, [turmas]);

  const filtered = useMemo(() => {
    const busca = filters.busca.trim().toLowerCase();
    return turmas.filter((t) => {
      if (busca && !t.curso.toLowerCase().includes(busca)) return false;
      if (filters.categoria && t.categoria !== filters.categoria) return false;
      if (filters.modalidade && t.modalidade !== filters.modalidade) return false;
      if (filters.ano && String(formatData(t.data).ano) !== filters.ano) return false;
      if (filters.mes && String(formatData(t.data).mesIndex) !== filters.mes) return false;
      return true;
    });
  }, [turmas, filters]);

  const hasActiveFilters = Object.values(filters).some(Boolean);
  const groups = groupByMonth(filtered);

  return (
    <>
      <Box sx={{ py: { xs: 7, md: 9 }, backgroundImage: gradients.dark, color: '#fff', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'warning.main' }}>
            Planeamento
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '2.8rem' }, mt: 1 }}>
            Calendário de Formações
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.78)', mt: 1.5, maxWidth: 560, mx: 'auto' }}>
            Próximas turmas abertas — consulta as datas e garante o lugar da tua equipa com antecedência.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 9 }, backgroundImage: gradients.surfaceLight, minHeight: '50vh' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 5 }}>
            {/* Sidebar de filtros */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Reveal>
                <Paper
                  variant="outlined"
                  sx={{ p: 2.5, borderColor: 'divider', position: { md: 'sticky' }, top: { md: 96 } }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Procurar curso"
                    value={filters.busca}
                    onChange={(e) => setFilters((f) => ({ ...f, busca: e.target.value }))}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ fontSize: 19, color: 'text.secondary' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ mb: 2.5 }}
                  />

                  <Stack spacing={2}>
                    <FormControl size="small" fullWidth disabled={options.categorias.length === 0}>
                      <InputLabel>Categoria</InputLabel>
                      <Select
                        label="Categoria"
                        value={filters.categoria}
                        onChange={(e) => setFilters((f) => ({ ...f, categoria: e.target.value }))}
                      >
                        <MenuItem value="">Todas</MenuItem>
                        {options.categorias.map((c) => (
                          <MenuItem key={c} value={c} sx={{ whiteSpace: 'normal' }}>
                            {c}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl size="small" fullWidth disabled={options.modalidades.length === 0}>
                      <InputLabel>Modalidade</InputLabel>
                      <Select
                        label="Modalidade"
                        value={filters.modalidade}
                        onChange={(e) => setFilters((f) => ({ ...f, modalidade: e.target.value }))}
                      >
                        <MenuItem value="">Todas</MenuItem>
                        {options.modalidades.map((m) => (
                          <MenuItem key={m} value={m}>
                            {m}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl size="small" fullWidth disabled={options.anos.length === 0}>
                      <InputLabel>Ano</InputLabel>
                      <Select
                        label="Ano"
                        value={filters.ano}
                        onChange={(e) => setFilters((f) => ({ ...f, ano: e.target.value }))}
                      >
                        <MenuItem value="">Todos</MenuItem>
                        {options.anos.map((a) => (
                          <MenuItem key={a} value={String(a)}>
                            {a}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl size="small" fullWidth disabled={turmas.length === 0}>
                      <InputLabel>Mês</InputLabel>
                      <Select
                        label="Mês"
                        value={filters.mes}
                        onChange={(e) => setFilters((f) => ({ ...f, mes: e.target.value }))}
                      >
                        <MenuItem value="">Todos</MenuItem>
                        {MESES.map((m, i) => (
                          <MenuItem key={m} value={String(i + 1)}>
                            {m}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Stack>

                  <Button
                    fullWidth
                    disabled={!hasActiveFilters}
                    onClick={() => setFilters(emptyFilters)}
                    sx={{ mt: 3, color: 'text.secondary' }}
                  >
                    Limpar filtros
                  </Button>
                </Paper>
              </Reveal>
            </Grid>

            {/* Lista de turmas */}
            <Grid size={{ xs: 12, md: 9 }}>
              {status === 'loading' && (
                <Stack spacing={2}>
                  {[0, 1, 2].map((i) => (
                    <Skeleton key={i} variant="rounded" height={92} />
                  ))}
                </Stack>
              )}

              {status === 'error' && (
                <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  Não foi possível carregar o calendário agora. Tenta novamente mais tarde.
                </Typography>
              )}

              {status === 'ok' && turmas.length === 0 && (
                <Reveal>
                  <Paper
                    variant="outlined"
                    sx={{ p: { xs: 4, md: 6 }, textAlign: 'center', borderColor: 'divider', borderStyle: 'dashed' }}
                  >
                    <EventIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="h4" sx={{ fontSize: '1.2rem', mb: 1.5 }}>
                      Turmas a confirmar
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', maxWidth: 460, mx: 'auto', mb: 3 }}>
                      Ainda não temos datas fechadas para publicar aqui. Fala connosco para saberes
                      as próximas turmas disponíveis ou para agendar uma formação à medida da tua
                      equipa.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<InfoIcon />}
                        onClick={() => openDialog('informacoes', '')}
                      >
                        Pedir Informações
                      </Button>
                      <Button
                        component="a"
                        href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de saber as próximas datas de formações.')}`}
                        target="_blank"
                        rel="noreferrer"
                        variant="outlined"
                        color="primary"
                        startIcon={<WhatsAppIcon />}
                      >
                        Falar no WhatsApp
                      </Button>
                    </Stack>
                  </Paper>
                </Reveal>
              )}

              {status === 'ok' && turmas.length > 0 && (
                <>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                    <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
                      Mostrando {filtered.length} de {turmas.length} turma{turmas.length === 1 ? '' : 's'}
                    </Typography>
                  </Stack>

                  {filtered.length === 0 && (
                    <Paper variant="outlined" sx={{ p: 4, textAlign: 'center', borderColor: 'divider' }}>
                      <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        Nenhuma turma corresponde a estes filtros.
                      </Typography>
                      <Button onClick={() => setFilters(emptyFilters)} color="secondary">
                        Limpar filtros
                      </Button>
                    </Paper>
                  )}

                  {groups.map((group, gi) => (
                    <Box key={group.key} sx={{ mb: 5 }}>
                      <Reveal delay={Math.min(gi, 6) * 0.05}>
                        <Typography
                          sx={{
                            fontFamily: '"Big Shoulders Display"',
                            fontWeight: 700,
                            fontSize: '1.3rem',
                            color: 'primary.main',
                            mb: 1,
                          }}
                        >
                          {group.label}
                        </Typography>
                        <Box sx={{ height: 3, bgcolor: 'secondary.main', mb: 2.5, opacity: 0.85 }} />

                        <Stack spacing={1.5}>
                          {group.turmas.map((t) => {
                            const preco = formatPreco(t.preco);
                            return (
                              <Paper
                                key={t.id}
                                variant="outlined"
                                sx={{
                                  position: 'relative',
                                  pl: { xs: 2.5, sm: 3 },
                                  pr: { xs: 2, sm: 3 },
                                  py: { xs: 2, sm: 2.2 },
                                  borderColor: 'divider',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: { xs: 1.5, sm: 3 },
                                  flexWrap: 'wrap',
                                  overflow: 'hidden',
                                  '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 4,
                                    bgcolor: 'secondary.main',
                                  },
                                }}
                              >
                                <Box sx={{ flex: 1, minWidth: 200 }}>
                                  <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                                    {t.slug ? (
                                      <Link component={RouterLink} to={`/formacoes/${t.slug}`} color="inherit" underline="hover">
                                        {t.curso}
                                      </Link>
                                    ) : (
                                      t.curso
                                    )}
                                  </Typography>
                                  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mt: 0.5 }}>
                                    {t.local && (
                                      <Stack direction="row" spacing={0.5} alignItems="center">
                                        <PlaceIcon sx={{ fontSize: 15, color: 'text.secondary' }} />
                                        <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>{t.local}</Typography>
                                      </Stack>
                                    )}
                                    {t.vagas != null && (
                                      <Stack direction="row" spacing={0.5} alignItems="center">
                                        <PeopleAltIcon sx={{ fontSize: 15, color: 'text.secondary' }} />
                                        <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>{t.vagas} vagas</Typography>
                                      </Stack>
                                    )}
                                    {t.nivel && (
                                      <Chip label={t.nivel} size="small" sx={{ fontSize: '0.65rem', height: 20, bgcolor: '#EFEDE6' }} />
                                    )}
                                  </Stack>
                                </Box>

                                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />

                                <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', width: { sm: 160 }, flexShrink: 0 }}>
                                  {formatDataLonga(t.data)}
                                </Typography>

                                {t.modalidade && (
                                  <>
                                    <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
                                    <Chip
                                      label={t.modalidade}
                                      size="small"
                                      sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', bgcolor: '#EFEDE6', flexShrink: 0 }}
                                    />
                                  </>
                                )}

                                {preco && (
                                  <>
                                    <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
                                    <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.85rem', fontWeight: 600, color: 'primary.main', width: 130, textAlign: 'right', flexShrink: 0 }}>
                                      {preco}
                                    </Typography>
                                  </>
                                )}

                                <Button
                                  variant="outlined"
                                  color="secondary"
                                  size="small"
                                  onClick={() => openDialog('informacoes', t.curso)}
                                  sx={{ flexShrink: 0 }}
                                >
                                  Inscrever
                                </Button>
                              </Paper>
                            );
                          })}
                        </Stack>
                      </Reveal>
                    </Box>
                  ))}
                </>
              )}

              {status === 'ok' && turmas.length > 0 && (
                <>
                  <Divider sx={{ my: 5 }} />
                  <Typography sx={{ textAlign: 'center', color: 'text.secondary', fontSize: '0.85rem' }}>
                    Não encontraste a formação que precisas nestas datas?{' '}
                    <Link component={RouterLink} to="/#formacoes" color="secondary.dark">
                      Vê o catálogo completo
                    </Link>{' '}
                    e pede uma turma à medida.
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <LeadFormDialog open={dialog !== null} onClose={() => setDialog(null)} type={dialog || 'informacoes'} courseName={selectedCurso} />
    </>
  );
}