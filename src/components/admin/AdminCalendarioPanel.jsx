import { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { courseCatalog, allCourses } from '../../data/courses';

const API_URL = `${import.meta.env.VITE_API_URL || '/api'}/calendario`;

const NIVEIS = ['Básico', 'Médio', 'Avançado'];
const MODALIDADES = ['Presencial', 'Híbrido', 'Online'];
const CATEGORIAS = courseCatalog.map((c) => c.category);

const emptyTurma = {
  id: '',
  curso: '',
  slug: '',
  categoria: '',
  modalidade: '',
  data: '',
  local: '',
  nivel: '',
  vagas: '',
  preco: '',
};

function genId() {
  return `t${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

export default function AdminCalendarioPanel({ adminKey, onUnauthorized }) {
  const [turmas, setTurmas] = useState([]);
  const [status, setStatus] = useState('loading');
  const [dialogTurma, setDialogTurma] = useState(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setStatus('loading');
    fetch(`${API_URL}/all`, { headers: { 'x-admin-key': adminKey } })
      .then(async (r) => {
        if (r.status === 401) return onUnauthorized();
        const data = await r.json();
        setTurmas(Array.isArray(data.turmas) ? data.turmas : []);
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  }, [adminKey]);

  const persist = async (nextTurmas) => {
    setSaving(true);
    try {
      const res = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
        body: JSON.stringify(nextTurmas),
      });
      if (res.status === 401) return onUnauthorized();
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Falha ao gravar');
      setTurmas(nextTurmas.sort((a, b) => a.data.localeCompare(b.data)));
      setToast({ severity: 'success', message: 'Calendário actualizado.' });
      setDialogTurma(null);
    } catch (e) {
      setToast({ severity: 'error', message: e.message });
    } finally {
      setSaving(false);
    }
  };

  const handleSalvarTurma = (form) => {
    const isNew = !turmas.some((t) => t.id === form.id);
    const next = isNew ? [...turmas, form] : turmas.map((t) => (t.id === form.id ? form : t));
    persist(next);
  };

  const handleApagar = (id) => {
    if (!window.confirm('Apagar esta turma? Esta acção não pode ser desfeita.')) return;
    persist(turmas.filter((t) => t.id !== id));
  };

  const todayISO = new Date().toISOString().slice(0, 10);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
          Turmas mostradas no calendário público (`/calendario`), incluindo as já passadas.
        </Typography>
        <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={() => setDialogTurma({ ...emptyTurma, id: genId() })}>
          Nova turma
        </Button>
      </Stack>

      {status === 'loading' && (
        <Stack spacing={1.5}>
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} variant="rounded" height={64} />
          ))}
        </Stack>
      )}

      {status === 'error' && <Typography sx={{ color: 'text.secondary' }}>Não foi possível carregar as turmas.</Typography>}

      {status === 'ok' && turmas.length === 0 && (
        <Paper variant="outlined" sx={{ p: 5, textAlign: 'center', borderColor: 'divider', borderStyle: 'dashed' }}>
          <Typography sx={{ color: 'text.secondary' }}>Ainda não há turmas. Cria a primeira.</Typography>
        </Paper>
      )}

      {status === 'ok' && turmas.length > 0 && (
        <Stack spacing={1.5}>
          {turmas.map((t) => {
            const passada = t.data < todayISO;
            return (
              <Paper
                key={t.id}
                variant="outlined"
                sx={{ p: 2, borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', opacity: passada ? 0.55 : 1 }}
              >
                <Box sx={{ flex: 1, minWidth: 200 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography sx={{ fontWeight: 600, fontSize: '0.92rem' }}>{t.curso}</Typography>
                    {passada && <Chip label="passada" size="small" sx={{ height: 18, fontSize: '0.62rem' }} />}
                  </Stack>
                  <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>
                    {t.data} {t.local && `· ${t.local}`} {t.modalidade && `· ${t.modalidade}`} {t.nivel && `· ${t.nivel}`}
                  </Typography>
                </Box>
                <IconButton size="small" onClick={() => setDialogTurma(t)}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={() => handleApagar(t.id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Paper>
            );
          })}
        </Stack>
      )}

      {dialogTurma && (
        <TurmaFormDialog turma={dialogTurma} saving={saving} onClose={() => setDialogTurma(null)} onSave={handleSalvarTurma} />
      )}

      <Snackbar open={!!toast} autoHideDuration={4000} onClose={() => setToast(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        {toast && <Alert severity={toast.severity} onClose={() => setToast(null)}>{toast.message}</Alert>}
      </Snackbar>
    </Box>
  );
}

function TurmaFormDialog({ turma, saving, onClose, onSave }) {
  const [form, setForm] = useState(turma);
  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const cursoOptions = useMemo(() => allCourses.map((c) => ({ label: c.name, slug: c.slug, categoria: c.category })), []);

  const isValid = form.curso.trim() && /^\d{4}-\d{2}-\d{2}$/.test(form.data);

  const handleSave = () => {
    if (!isValid) return;
    onSave({
      ...form,
      vagas: form.vagas === '' ? null : Number(form.vagas),
      preco: form.preco === '' ? null : Number(form.preco),
    });
  };

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{turma.curso ? 'Editar turma' : 'Nova turma'}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          <Grid size={12}>
            <Autocomplete
              freeSolo
              options={cursoOptions}
              getOptionLabel={(o) => (typeof o === 'string' ? o : o.label)}
              inputValue={form.curso}
              onInputChange={(_, value) => setForm((f) => ({ ...f, curso: value }))}
              onChange={(_, value) => {
                if (value && typeof value !== 'string') {
                  setForm((f) => ({ ...f, curso: value.label, slug: value.slug, categoria: value.categoria }));
                }
              }}
              renderInput={(params) => <TextField {...params} label="Curso" placeholder="Nome da formação" />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Autocomplete
              freeSolo
              options={CATEGORIAS}
              inputValue={form.categoria}
              onInputChange={(_, value) => setForm((f) => ({ ...f, categoria: value }))}
              renderInput={(params) => <TextField {...params} label="Categoria" />}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Autocomplete
              freeSolo
              options={MODALIDADES}
              inputValue={form.modalidade}
              onInputChange={(_, value) => setForm((f) => ({ ...f, modalidade: value }))}
              renderInput={(params) => <TextField {...params} label="Modalidade" />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth type="date" label="Data" InputLabelProps={{ shrink: true }} value={form.data} onChange={set('data')} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Autocomplete
              freeSolo
              options={NIVEIS}
              inputValue={form.nivel}
              onInputChange={(_, value) => setForm((f) => ({ ...f, nivel: value }))}
              renderInput={(params) => <TextField {...params} label="Nível" />}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth label="Local" placeholder="ex: Maputo" value={form.local} onChange={set('local')} />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <TextField fullWidth type="number" label="Vagas" value={form.vagas} onChange={set('vagas')} />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <TextField fullWidth type="number" label="Preço (MT)" value={form.preco} onChange={set('preco')} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={onClose} color="inherit" sx={{ color: 'text.secondary' }}>
          Cancelar
        </Button>
        <Button onClick={handleSave} variant="contained" color="secondary" disabled={!isValid || saving}>
          {saving ? 'A gravar…' : 'Guardar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
