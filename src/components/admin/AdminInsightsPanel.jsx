import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const API_BASE = import.meta.env.VITE_API_URL || '/api';
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, '');

const CATEGORIAS = ['Segurança', 'Formação', 'Legislação', 'Casos de Sucesso', 'Estatísticas'];

const emptyArtigo = {
  id: '',
  slug: '',
  title: '',
  excerpt: '',
  body: '',
  category: '',
  coverImage: '',
  author: '',
  date: new Date().toISOString().slice(0, 10),
  status: 'draft',
};

function genId() {
  return `i${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

export default function AdminInsightsPanel({ adminKey, onUnauthorized }) {
  const [artigos, setArtigos] = useState([]);
  const [status, setStatus] = useState('loading');
  const [dialogArtigo, setDialogArtigo] = useState(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  const load = () => {
    setStatus('loading');
    fetch(`${API_BASE}/admin/insights`, { headers: { 'x-admin-key': adminKey } })
      .then(async (r) => {
        if (r.status === 401) return onUnauthorized();
        const data = await r.json();
        setArtigos(Array.isArray(data.artigos) ? data.artigos : []);
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  };

  useEffect(load, [adminKey]);

  const persist = async (nextArtigos) => {
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/insights`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
        body: JSON.stringify(nextArtigos),
      });
      if (res.status === 401) return onUnauthorized();
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Falha ao gravar');
      setArtigos(data.artigos);
      setToast({ severity: 'success', message: 'Artigo gravado.' });
      setDialogArtigo(null);
    } catch (e) {
      setToast({ severity: 'error', message: e.message });
    } finally {
      setSaving(false);
    }
  };

  const handleSalvar = (form) => {
    const isNew = !artigos.some((a) => a.id === form.id);
    const next = isNew ? [...artigos, form] : artigos.map((a) => (a.id === form.id ? form : a));
    persist(next);
  };

  const handleApagar = (id) => {
    if (!window.confirm('Apagar este artigo? Esta acção não pode ser desfeita.')) return;
    persist(artigos.filter((a) => a.id !== id));
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
          Artigos da página <code>/insights</code>. Rascunhos ficam invisíveis ao público até
          publicares.
        </Typography>
        <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={() => setDialogArtigo({ ...emptyArtigo, id: genId() })}>
          Novo artigo
        </Button>
      </Stack>

      {status === 'loading' && (
        <Stack spacing={1.5}>
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} variant="rounded" height={72} />
          ))}
        </Stack>
      )}

      {status === 'error' && <Typography sx={{ color: 'text.secondary' }}>Não foi possível carregar os artigos.</Typography>}

      {status === 'ok' && artigos.length === 0 && (
        <Paper variant="outlined" sx={{ p: 5, textAlign: 'center', borderColor: 'divider', borderStyle: 'dashed' }}>
          <Typography sx={{ color: 'text.secondary' }}>Ainda não há artigos. Cria o primeiro.</Typography>
        </Paper>
      )}

      {status === 'ok' && artigos.length > 0 && (
        <Stack spacing={1.5}>
          {artigos.map((a) => (
            <Paper key={a.id} variant="outlined" sx={{ p: 2, borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography sx={{ fontWeight: 600, fontSize: '0.92rem' }}>{a.title}</Typography>
                  <Chip
                    label={a.status === 'published' ? 'Publicado' : 'Rascunho'}
                    size="small"
                    color={a.status === 'published' ? 'secondary' : 'default'}
                    sx={{ height: 18, fontSize: '0.62rem' }}
                  />
                </Stack>
                <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>
                  {a.category || 'Sem categoria'} · {a.date} · /insights/{a.slug}
                </Typography>
              </Box>
              <IconButton size="small" onClick={() => setDialogArtigo(a)}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" onClick={() => handleApagar(a.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Paper>
          ))}
        </Stack>
      )}

      {dialogArtigo && (
        <ArtigoFormDialog
          artigo={dialogArtigo}
          adminKey={adminKey}
          saving={saving}
          onClose={() => setDialogArtigo(null)}
          onSave={handleSalvar}
        />
      )}

      <Snackbar open={!!toast} autoHideDuration={4000} onClose={() => setToast(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        {toast && <Alert severity={toast.severity} onClose={() => setToast(null)}>{toast.message}</Alert>}
      </Snackbar>
    </Box>
  );
}

function ArtigoFormDialog({ artigo, adminKey, saving, onClose, onSave }) {
  const [form, setForm] = useState(artigo);
  const [uploading, setUploading] = useState(false);
  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const isValid = form.title.trim() && form.body.trim();

  const handleCoverUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('capa', file);
    setUploading(true);
    try {
      const res = await fetch(`${API_BASE}/insights/upload-cover`, {
        method: 'POST',
        headers: { 'x-admin-key': adminKey },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Falha ao enviar imagem');
      setForm((f) => ({ ...f, coverImage: data.url }));
    } catch (err) {
      alert(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{artigo.title ? 'Editar artigo' : 'Novo artigo'}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          <Grid size={12}>
            <TextField fullWidth label="Título" value={form.title} onChange={set('title')} />
          </Grid>
          <Grid size={12}>
            <TextField fullWidth label="Resumo (excerpt, aparece na listagem)" value={form.excerpt} onChange={set('excerpt')} multiline minRows={2} />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Conteúdo"
              value={form.body}
              onChange={set('body')}
              multiline
              minRows={8}
              placeholder="Escreve o artigo aqui. Deixa uma linha em branco entre parágrafos."
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Autocomplete
              freeSolo
              options={CATEGORIAS}
              inputValue={form.category}
              onInputChange={(_, value) => setForm((f) => ({ ...f, category: value }))}
              renderInput={(params) => <TextField {...params} label="Categoria" />}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth label="Autor (opcional)" value={form.author} onChange={set('author')} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth type="date" label="Data" InputLabelProps={{ shrink: true }} value={form.date} onChange={set('date')} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControlLabel
              control={<Switch checked={form.status === 'published'} onChange={(e) => setForm((f) => ({ ...f, status: e.target.checked ? 'published' : 'draft' }))} />}
              label={form.status === 'published' ? 'Publicado' : 'Rascunho'}
            />
          </Grid>

          <Grid size={12}>
            <Stack direction="row" spacing={2} alignItems="center">
              {form.coverImage && (
                <Box component="img" src={`${API_ORIGIN}${form.coverImage}`} alt="" sx={{ width: 64, height: 64, objectFit: 'cover' }} />
              )}
              <Button variant="outlined" component="label" startIcon={<UploadFileIcon />} disabled={uploading}>
                {uploading ? 'A enviar…' : form.coverImage ? 'Trocar imagem de capa' : 'Adicionar imagem de capa'}
                <input type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={handleCoverUpload} />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={onClose} color="inherit" sx={{ color: 'text.secondary' }}>
          Cancelar
        </Button>
        <Button onClick={() => onSave(form)} variant="contained" color="secondary" disabled={!isValid || saving}>
          {saving ? 'A gravar…' : 'Guardar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
