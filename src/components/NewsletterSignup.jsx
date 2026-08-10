import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

/**
 * `variant="dark"` — usado sobre fundos escuros (ex: Footer).
 * `variant="light"` — usado sobre fundos claros (ex: fundo da página Insights).
 */
export default function NewsletterSignup({ variant = 'light', title = 'Recebe os próximos artigos', description }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const dark = variant === 'dark';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch(`${API_BASE}/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Falha ao subscrever');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <Stack direction="row" spacing={1} alignItems="center" sx={{ color: dark ? '#83D9A5' : 'secondary.dark' }}>
        <CheckCircleIcon sx={{ fontSize: 20 }} />
        <Typography sx={{ fontSize: '0.9rem' }}>Subscrito! Vais receber os próximos artigos por email.</Typography>
      </Stack>
    );
  }

  return (
    <Box>
      <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: dark ? '#fff' : 'text.primary', mb: description ? 0.5 : 1.2 }}>
        {title}
      </Typography>
      {description && (
        <Typography sx={{ fontSize: '0.82rem', color: dark ? 'rgba(255,255,255,0.65)' : 'text.secondary', mb: 1.5 }}>
          {description}
        </Typography>
      )}
      <Stack component="form" onSubmit={handleSubmit} direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <TextField
          type="email"
          label="Email"
          required
          size="small"
          placeholder="o-teu-email@empresa.co.mz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={
            dark
              ? {
                  bgcolor: 'rgba(255,255,255,0.06)',
                  input: { color: '#fff' },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.6)' },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#fff' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.2)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.4)' },
                }
              : {}
          }
          fullWidth
        />
        <Button type="submit" variant="contained" color="secondary" disabled={status === 'sending'} sx={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
          {status === 'sending' ? 'A subscrever…' : 'Subscrever'}
        </Button>
      </Stack>
      {status === 'error' && (
        <Typography sx={{ fontSize: '0.78rem', color: 'error.main', mt: 1 }}>
          Não foi possível subscrever agora. Tenta novamente.
        </Typography>
      )}
    </Box>
  );
}
