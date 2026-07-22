import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ICON_MAP } from '../DashboardPreview';

const API_URL = `${import.meta.env.VITE_API_URL || '/api'}/dashboard-preview`;
const ICON_OPTIONS = Object.keys(ICON_MAP);

function genId(prefix) {
  return `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

export default function AdminDashboardPanel({ adminKey, onUnauthorized }) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading');
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setStatus('loading');
    fetch(API_URL)
      .then((r) => r.json())
      .then((res) => {
        setData(res.dashboard || { cards: [], chart: [], activity: [] });
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  }, []);

  const updateCard = (id, field, value) => {
    setData((d) => ({ ...d, cards: d.cards.map((c) => (c.id === id ? { ...c, [field]: value } : c)) }));
  };
  const addCard = () => {
    setData((d) => ({ ...d, cards: [...d.cards, { id: genId('c'), label: '', value: '', icon: ICON_OPTIONS[0] }] }));
  };
  const removeCard = (id) => {
    setData((d) => ({ ...d, cards: d.cards.filter((c) => c.id !== id) }));
  };

  const updateChartValue = (index, value) => {
    setData((d) => {
      const chart = [...d.chart];
      chart[index] = Math.max(0, Math.min(100, Number(value) || 0));
      return { ...d, chart };
    });
  };
  const addBar = () => setData((d) => ({ ...d, chart: [...d.chart, 50] }));
  const removeBar = (index) => setData((d) => ({ ...d, chart: d.chart.filter((_, i) => i !== index) }));

  const updateActivity = (id, text) => {
    setData((d) => ({ ...d, activity: d.activity.map((a) => (a.id === id ? { ...a, text } : a)) }));
  };
  const addActivity = () => setData((d) => ({ ...d, activity: [{ id: genId('a'), text: '' }, ...d.activity] }));
  const removeActivity = (id) => setData((d) => ({ ...d, activity: d.activity.filter((a) => a.id !== id) }));

  const handleGuardar = async () => {
    const cardInvalido = data.cards.some((c) => !c.label.trim() || String(c.value).trim() === '');
    const activityInvalida = data.activity.some((a) => !a.text.trim());
    if (cardInvalido || activityInvalida || data.cards.length === 0 || data.chart.length === 0) {
      setToast({ severity: 'error', message: 'Preenche todos os campos (cards e actividade não podem ficar vazios).' });
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
        body: JSON.stringify(data),
      });
      if (res.status === 401) return onUnauthorized();
      const resData = await res.json();
      if (!res.ok || !resData.ok) throw new Error(resData.error || 'Falha ao gravar');
      setData(resData.dashboard);
      setToast({ severity: 'success', message: 'Prévia do dashboard actualizada — já reflecte no site.' });
    } catch (e) {
      setToast({ severity: 'error', message: e.message });
    } finally {
      setSaving(false);
    }
  };

  if (status === 'loading' || !data) {
    return (
      <Stack spacing={1.5}>
        {[0, 1, 2].map((i) => (
          <Skeleton key={i} variant="rounded" height={72} />
        ))}
      </Stack>
    );
  }

  if (status === 'error') {
    return <Typography sx={{ color: 'text.secondary' }}>Não foi possível carregar a prévia do dashboard.</Typography>;
  }

  return (
    <Box>
      <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 3 }}>
        Conteúdo da secção "Visibilidade Operacional" da homepage — é uma prévia ilustrativa, não
        dados reais em tempo real. Usa números plausíveis, não a operação exacta de hoje.
      </Typography>

      {/* Cards */}
      <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', mb: 1.5 }}>Cartões de resumo</Typography>
      <Stack spacing={1.5} sx={{ mb: 2 }}>
        {data.cards.map((c) => (
          <Paper key={c.id} variant="outlined" sx={{ p: 2, borderColor: 'divider' }}>
            <Grid container spacing={1.5} alignItems="center">
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextField fullWidth size="small" label="Label" value={c.label} onChange={(e) => updateCard(c.id, 'label', e.target.value)} placeholder="ex: Inspeções planeadas" />
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <TextField fullWidth size="small" label="Valor" value={c.value} onChange={(e) => updateCard(c.id, 'value', e.target.value)} placeholder="ex: 24 ou 94%" />
              </Grid>
              <Grid size={{ xs: 5, sm: 4 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>Ícone</InputLabel>
                  <Select label="Ícone" value={c.icon} onChange={(e) => updateCard(c.id, 'icon', e.target.value)}>
                    {ICON_OPTIONS.map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 1 }} sx={{ textAlign: 'right' }}>
                <IconButton size="small" onClick={() => removeCard(c.id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Stack>
      <Button size="small" startIcon={<AddIcon />} onClick={addCard} color="inherit" sx={{ color: 'text.secondary', mb: 4 }}>
        Adicionar cartão
      </Button>

      <Divider sx={{ mb: 3 }} />

      {/* Chart */}
      <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', mb: 1.5 }}>
        Indicador de conformidade (barras, 0–100)
      </Typography>
      <Grid container spacing={1.5} sx={{ mb: 2 }}>
        {data.chart.map((v, i) => (
          <Grid size={{ xs: 3, sm: 1.5 }} key={i}>
            <TextField
              fullWidth
              size="small"
              type="number"
              label={`Barra ${i + 1}`}
              value={v}
              onChange={(e) => updateChartValue(i, e.target.value)}
              InputProps={{
                endAdornment: data.chart.length > 1 && (
                  <IconButton size="small" onClick={() => removeBar(i)} sx={{ p: 0.3 }}>
                    <DeleteIcon sx={{ fontSize: 14 }} />
                  </IconButton>
                ),
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Button size="small" startIcon={<AddIcon />} onClick={addBar} color="inherit" sx={{ color: 'text.secondary', mb: 4 }}>
        Adicionar barra
      </Button>

      <Divider sx={{ mb: 3 }} />

      {/* Activity */}
      <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', mb: 1.5 }}>
        Actividade recente (a primeira linha é a que pisca)
      </Typography>
      <Stack spacing={1.5} sx={{ mb: 2 }}>
        {data.activity.map((a) => (
          <Stack key={a.id} direction="row" spacing={1} alignItems="center">
            <TextField fullWidth size="small" value={a.text} onChange={(e) => updateActivity(a.id, e.target.value)} placeholder="ex: Inspeção de equipamentos — relatório emitido" />
            <IconButton size="small" onClick={() => removeActivity(a.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Stack>
        ))}
      </Stack>
      <Button size="small" startIcon={<AddIcon />} onClick={addActivity} color="inherit" sx={{ color: 'text.secondary', mb: 4 }}>
        Adicionar item
      </Button>

      <Stack direction="row" justifyContent="flex-end">
        <Button variant="contained" color="secondary" onClick={handleGuardar} disabled={saving}>
          {saving ? 'A gravar…' : 'Guardar alterações'}
        </Button>
      </Stack>

      <Snackbar open={!!toast} autoHideDuration={4000} onClose={() => setToast(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        {toast && <Alert severity={toast.severity} onClose={() => setToast(null)}>{toast.message}</Alert>}
      </Snackbar>
    </Box>
  );
}
