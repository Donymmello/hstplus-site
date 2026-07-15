import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const API_URL = `${import.meta.env.VITE_API_URL || '/api'}/leads`;

const emptyForm = {
  nome: '',
  email: '',
  telefone: '',
  organizacao: '',
  cargo: '',
  mensagem: '',
};

/**
 * Formulário partilhado por "Pedir Informações" e "Pedir Cotação". O `type`
 * ('informacoes' | 'cotacao') só muda os textos e é enviado ao backend, para
 * a HST Plus conseguir distinguir os dois tipos de pedido.
 */
export default function LeadFormDialog({ open, onClose, type = 'informacoes', courseName }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const isQuote = type === 'cotacao';
  const title = isQuote ? 'Pedir Cotação' : 'Pedir Informações';

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleClose = () => {
    onClose();
    // pequeno atraso para não "piscar" o formulário a limpar antes do fecho animar
    setTimeout(() => {
      setStatus('idle');
      setForm(emptyForm);
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, course: courseName || null, ...form }),
      });
      if (!res.ok) throw new Error('Falha no envio');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ pr: 6 }}>
        {title}
        {courseName && (
          <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', fontWeight: 400, mt: 0.3 }}>
            {courseName}
          </Typography>
        )}
        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 12, top: 12 }} aria-label="Fechar">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {status === 'sent' ? (
        <DialogContent>
          <Stack alignItems="center" spacing={1.5} sx={{ py: 4, textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 46, color: 'secondary.main' }} />
            <Typography sx={{ fontWeight: 600 }}>Pedido enviado com sucesso!</Typography>
            <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
              A nossa equipa entra em contacto brevemente.
            </Typography>
          </Stack>
          <DialogActions sx={{ px: 0 }}>
            <Button onClick={handleClose} fullWidth variant="contained" color="secondary">
              Fechar
            </Button>
          </DialogActions>
        </DialogContent>
      ) : (
        <Box component="form" onSubmit={handleSubmit}>
          <DialogContent>
            <Stack spacing={2}>
              <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                {isQuote
                  ? 'Preencha os seus dados para recebermos os detalhes e enviarmos uma cotação personalizada.'
                  : 'Preencha os seus dados e entraremos em contacto com mais informações sobre esta formação.'}
              </Typography>

              <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: 'primary.main', letterSpacing: '0.04em' }}>
                DADOS PESSOAIS
              </Typography>
              <TextField label="Nome completo" required size="small" value={form.nome} onChange={handleChange('nome')} />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField label="Email" type="email" required size="small" fullWidth value={form.email} onChange={handleChange('email')} />
                <TextField label="Telefone" required size="small" fullWidth value={form.telefone} onChange={handleChange('telefone')} />
              </Stack>

              <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: 'primary.main', letterSpacing: '0.04em', mt: 1 }}>
                DADOS DA ORGANIZAÇÃO
              </Typography>
              <TextField label="Empresa / Organização" required size="small" value={form.organizacao} onChange={handleChange('organizacao')} />
              <TextField label="Cargo (opcional)" size="small" value={form.cargo} onChange={handleChange('cargo')} />

              <TextField
                label={isQuote ? 'Detalhes do pedido (nº de formandos, datas, local...)' : 'Mensagem (opcional)'}
                required={isQuote}
                multiline
                minRows={3}
                size="small"
                value={form.mensagem}
                onChange={handleChange('mensagem')}
              />

              {status === 'error' && (
                <Typography sx={{ fontSize: '0.8rem', color: 'error.main' }}>
                  Não foi possível enviar o pedido. Tenta novamente ou usa o WhatsApp.
                </Typography>
              )}
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button type="submit" fullWidth variant="contained" color="secondary" disabled={status === 'sending'}>
              {status === 'sending' ? 'A enviar…' : 'Enviar Pedido'}
            </Button>
          </DialogActions>
        </Box>
      )}
    </Dialog>
  );
}
