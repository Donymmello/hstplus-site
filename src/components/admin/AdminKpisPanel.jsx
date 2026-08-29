import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const API_URL = `${import.meta.env.VITE_API_URL || '/api'}/kpis`;

function genId() {
  return `kpi${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

export default function AdminKpisPanel({ adminKey, onUnauthorized }) {
  const [kpis, setKpis] = useState([]);
  const [status, setStatus] = useState('loading');
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setStatus('loading');
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        setKpis(Array.isArray(data.kpis) ? data.kpis : []);
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  }, []);

  const updateField = (id, field, value) => {
    setKpis((prev) => prev.map((k) => (k.id === id ? { ...k, [field]: value } : k)));
  };

  const handleAdicionar = () => {
    setKpis((prev) => [...prev, { id: genId(), value: 0, suffix: '+', label: '' }]);
  };

  const handleRemover = (id) => {
    setKpis((prev) => prev.filter((k) => k.id !== id));
  };

  const handleGuardar = async () => {
    const invalido = kpis.some((k) => !k.label.trim() || Number.isNaN(Number(k.value)));
    if (invalido) {
      setToast({ severity: 'error', message: 'Cada KPI precisa de um valor numérico e um label preenchido.' });
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
        body: JSON.stringify(kpis.map((k) => ({ ...k, value: Number(k.value) }))),
      });
      if (res.status === 401) return onUnauthorized();
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Falha ao gravar');
      setKpis(data.kpis);
      setToast({ severity: 'success', message: 'KPIs actualizados já reflectem no site.' });
    } catch (e) {
      setToast({ severity: 'error', message: e.message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box>
      <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 3 }}>
        Os 4 números animados na secção de estatísticas da página inicial (ex: "9+ Empresas clientes").
      </Typography>

      {status === 'loading' && (
        <Stack spacing={1.5}>
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} variant="rounded" height={72} />
          ))}
        </Stack>
      )}

      {status === 'error' && <Typography sx={{ color: 'text.secondary' }}>Não foi possível carregar os KPIs.</Typography>}

      {status === 'ok' && (
        <>
          <Stack spacing={1.5}>
            {kpis.map((k) => (
              <Paper key={k.id} variant="outlined" sx={{ p: 2, borderColor: 'divider' }}>
                <Grid container spacing={1.5} alignItems="center">
                  <Grid size={{ xs: 4, sm: 3 }}>
                    <TextField fullWidth size="small" type="number" label="Valor" value={k.value} onChange={(e) => updateField(k.id, 'value', e.target.value)} />
                  </Grid>
                  <Grid size={{ xs: 3, sm: 2 }}>
                    <TextField fullWidth size="small" label="Sufixo" value={k.suffix || ''} onChange={(e) => updateField(k.id, 'suffix', e.target.value)} placeholder="+" />
                  </Grid>
                  <Grid size={{ xs: 5, sm: 6 }}>
                    <TextField fullWidth size="small" label="Label" value={k.label} onChange={(e) => updateField(k.id, 'label', e.target.value)} placeholder="ex: Empresas clientes" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 1 }} sx={{ textAlign: { xs: 'right', sm: 'center' } }}>
                    <IconButton size="small" onClick={() => handleRemover(k.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Stack>

          <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
            <Button startIcon={<AddIcon />} onClick={handleAdicionar} color="inherit" sx={{ color: 'text.secondary' }}>
              Adicionar KPI
            </Button>
            <Button variant="contained" color="secondary" onClick={handleGuardar} disabled={saving}>
              {saving ? 'A gravar…' : 'Guardar alterações'}
            </Button>
          </Stack>
        </>
      )}

      <Snackbar open={!!toast} autoHideDuration={4000} onClose={() => setToast(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        {toast && <Alert severity={toast.severity} onClose={() => setToast(null)}>{toast.message}</Alert>}
      </Snackbar>
    </Box>
  );
}
