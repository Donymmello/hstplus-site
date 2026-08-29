import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import LinearProgress from '@mui/material/LinearProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const API_BASE = import.meta.env.VITE_API_URL || '/api';
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, '');

export default function AdminGaleriaPanel({ adminKey, onUnauthorized }) {
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState('loading');
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [caption, setCaption] = useState('');
  const [toast, setToast] = useState(null);
  const fileInputRef = useRef(null);

  const load = () => {
    setStatus('loading');
    fetch(`${API_BASE}/galeria`)
      .then((r) => r.json())
      .then((data) => {
        setPhotos(Array.isArray(data.fotos) ? data.fotos : []);
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  };

  useEffect(load, []);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('foto', file);
    formData.append('caption', caption);

    setUploading(true);
    try {
      const res = await fetch(`${API_BASE}/galeria/upload`, {
        method: 'POST',
        headers: { 'x-admin-key': adminKey },
        body: formData,
      });
      if (res.status === 401) return onUnauthorized();
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Falha ao enviar');
      setPhotos(data.fotos);
      setCaption('');
      setToast({ severity: 'success', message: 'Foto adicionada à galeria.' });
    } catch (err) {
      setToast({ severity: 'error', message: err.message });
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const updateCaption = (id, value) => {
    setPhotos((prev) => prev.map((p) => (p.id === id ? { ...p, caption: value } : p)));
  };

  const move = (index, direction) => {
    setPhotos((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next.map((p, i) => ({ ...p, order: i }));
    });
  };

  const remove = (id) => {
    if (!window.confirm('Apagar esta foto da galeria? Esta acção não pode ser desfeita.')) return;
    setPhotos((prev) => prev.filter((p) => p.id !== id).map((p, i) => ({ ...p, order: i })));
  };

  const handleGuardar = async () => {
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/galeria`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
        body: JSON.stringify(photos.map((p) => ({ id: p.id, caption: p.caption, order: p.order }))),
      });
      if (res.status === 401) return onUnauthorized();
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Falha ao gravar');
      setPhotos(data.fotos);
      setToast({ severity: 'success', message: 'Galeria actualizada.' });
    } catch (err) {
      setToast({ severity: 'error', message: err.message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box>
      <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 3 }}>
        Fotos da página <code>/galeria</code>. Enviadas aqui, ficam disponíveis no site na hora sem precisar de deploy. Formatos aceites: JPG, PNG, WEBP (até 8MB).
      </Typography>

      <Paper variant="outlined" sx={{ p: 3, borderColor: 'divider', mb: 4 }}>
        <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', mb: 1.5 }}>Adicionar foto</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <TextField
            fullWidth
            size="small"
            label="Legenda (opcional)"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="ex: Formação em espaço confinado Terminais do Norte"
          />
          <Button
            variant="contained"
            color="secondary"
            component="label"
            startIcon={<UploadFileIcon />}
            disabled={uploading}
            sx={{ flexShrink: 0, whiteSpace: 'nowrap' }}
          >
            {uploading ? 'A enviar…' : 'Escolher foto'}
            <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={handleFileChange} />
          </Button>
        </Stack>
        {uploading && <LinearProgress sx={{ mt: 2 }} />}
      </Paper>

      {status === 'loading' && (
        <Stack spacing={1.5}>
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} variant="rounded" height={72} />
          ))}
        </Stack>
      )}

      {status === 'error' && <Typography sx={{ color: 'text.secondary' }}>Não foi possível carregar a galeria.</Typography>}

      {status === 'ok' && photos.length === 0 && (
        <Paper variant="outlined" sx={{ p: 5, textAlign: 'center', borderColor: 'divider', borderStyle: 'dashed' }}>
          <Typography sx={{ color: 'text.secondary' }}>
            Ainda não há fotos carregadas o site está a mostrar as fotos originais como reserva.
          </Typography>
        </Paper>
      )}

      {status === 'ok' && photos.length > 0 && (
        <>
          <Stack spacing={1.5}>
            {photos.map((p, i) => (
              <Paper key={p.id} variant="outlined" sx={{ p: 1.5, borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  component="img"
                  src={`${API_ORIGIN}${p.url}`}
                  alt={p.caption}
                  sx={{ width: 64, height: 64, objectFit: 'cover', flexShrink: 0 }}
                />
                <TextField
                  fullWidth
                  size="small"
                  value={p.caption}
                  onChange={(e) => updateCaption(p.id, e.target.value)}
                  placeholder="Legenda"
                />
                <Stack direction="row" spacing={0.5} sx={{ flexShrink: 0 }}>
                  <IconButton size="small" onClick={() => move(i, -1)} disabled={i === 0}>
                    <ArrowUpwardIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" onClick={() => move(i, 1)} disabled={i === photos.length - 1}>
                    <ArrowDownwardIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" onClick={() => remove(p.id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Paper>
            ))}
          </Stack>

          <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
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
