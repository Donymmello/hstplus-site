import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import DownloadIcon from '@mui/icons-material/Download';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

function formatData(iso) {
  return new Date(iso).toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export default function AdminNewsletterPanel({ adminKey, onUnauthorized }) {
  const [subscribers, setSubscribers] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');
    fetch(`${API_BASE}/newsletter`, { headers: { 'x-admin-key': adminKey } })
      .then(async (r) => {
        if (r.status === 401) return onUnauthorized();
        const data = await r.json();
        setSubscribers(Array.isArray(data.subscribers) ? data.subscribers : []);
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  }, [adminKey]);

  const handleExport = () => {
    const csv = ['email,subscribedAt', ...subscribers.map((s) => `${s.email},${s.subscribedAt}`)].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-hstplus-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
          Emails subscritos via <code>/insights</code> ou o rodapé do site. Só leitura.
        </Typography>
        {subscribers.length > 0 && (
          <Button size="small" startIcon={<DownloadIcon />} onClick={handleExport} color="inherit" sx={{ color: 'text.secondary' }}>
            Exportar CSV
          </Button>
        )}
      </Stack>

      {status === 'loading' && (
        <Stack spacing={1}>
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} variant="rounded" height={44} />
          ))}
        </Stack>
      )}

      {status === 'error' && <Typography sx={{ color: 'text.secondary' }}>Não foi possível carregar os subscritores.</Typography>}

      {status === 'ok' && (
        <>
          <Typography sx={{ fontFamily: '"Big Shoulders Display"', fontWeight: 800, fontSize: '2rem', color: 'primary.main', mb: 2 }}>
            {subscribers.length} subscritor{subscribers.length === 1 ? '' : 'es'}
          </Typography>

          {subscribers.length === 0 ? (
            <Paper variant="outlined" sx={{ p: 4, textAlign: 'center', borderColor: 'divider', borderStyle: 'dashed' }}>
              <Typography sx={{ color: 'text.secondary' }}>Ainda ninguém subscreveu.</Typography>
            </Paper>
          ) : (
            <Stack spacing={1}>
              {subscribers.map((s) => (
                <Paper key={s.id} variant="outlined" sx={{ p: 1.5, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: '0.88rem' }}>{s.email}</Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>{formatData(s.subscribedAt)}</Typography>
                </Paper>
              ))}
            </Stack>
          )}
        </>
      )}
    </Box>
  );
}
