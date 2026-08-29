import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Skeleton from '@mui/material/Skeleton';

const API_URL = `${import.meta.env.VITE_API_URL || '/api'}/leads`;

const TIPO_LABEL = { informacoes: 'Informações', cotacao: 'Cotação', proposta: 'Proposta' };
const TIPO_COLOR = { informacoes: 'default', cotacao: 'secondary', proposta: 'primary' };

function formatDataHora(iso) {
  return new Date(iso).toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export default function AdminLeadsPanel({ adminKey, onUnauthorized }) {
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState('loading');
  const [filtro, setFiltro] = useState('todos');

  useEffect(() => {
    setStatus('loading');
    fetch(API_URL, { headers: { 'x-admin-key': adminKey } })
      .then(async (r) => {
        if (r.status === 401) return onUnauthorized();
        const data = await r.json();
        const ordenados = (Array.isArray(data.leads) ? data.leads : []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setLeads(ordenados);
        setStatus('ok');
      })
      .catch(() => setStatus('error'));
  }, [adminKey]);

  const visiveis = filtro === 'todos' ? leads : leads.filter((l) => l.type === filtro);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
          Pedidos de Informações/Cotação/Proposta recebidos pelo site. Só leitura se o email
          estiver configurado, também chegam por email; isto fica sempre como registo de apoio.
        </Typography>
        <ToggleButtonGroup size="small" value={filtro} exclusive onChange={(_, v) => v && setFiltro(v)}>
          <ToggleButton value="todos">Todos</ToggleButton>
          <ToggleButton value="informacoes">Informações</ToggleButton>
          <ToggleButton value="cotacao">Cotação</ToggleButton>
          <ToggleButton value="proposta">Proposta</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {status === 'loading' && (
        <Stack spacing={1.5}>
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} variant="rounded" height={92} />
          ))}
        </Stack>
      )}

      {status === 'error' && <Typography sx={{ color: 'text.secondary' }}>Não foi possível carregar os leads.</Typography>}

      {status === 'ok' && visiveis.length === 0 && (
        <Paper variant="outlined" sx={{ p: 5, textAlign: 'center', borderColor: 'divider', borderStyle: 'dashed' }}>
          <Typography sx={{ color: 'text.secondary' }}>
            {leads.length === 0 ? 'Ainda não chegou nenhum pedido.' : 'Nenhum pedido deste tipo.'}
          </Typography>
        </Paper>
      )}

      {status === 'ok' && visiveis.length > 0 && (
        <Stack spacing={1.5}>
          {visiveis.map((l) => (
            <Paper key={l.id} variant="outlined" sx={{ p: 2.5, borderColor: 'divider' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }} flexWrap="wrap" gap={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography sx={{ fontWeight: 600, fontSize: '0.92rem' }}>{l.nome}</Typography>
                  <Chip label={TIPO_LABEL[l.type] || l.type} size="small" color={TIPO_COLOR[l.type]} sx={{ height: 20, fontSize: '0.65rem' }} />
                </Stack>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{formatDataHora(l.createdAt)}</Typography>
              </Stack>

              {l.course && (
                <Typography sx={{ fontSize: '0.82rem', color: 'primary.main', mb: 1 }}>Referência: {l.course}</Typography>
              )}

              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
                  <Link href={`mailto:${l.email}`} color="inherit">{l.email}</Link>
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
                  <Link href={`tel:${l.telefone}`} color="inherit">{l.telefone}</Link>
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
                  {l.organizacao}{l.cargo ? ` · ${l.cargo}` : ''}
                </Typography>
              </Stack>

              {l.mensagem && (
                <Typography sx={{ fontSize: '0.85rem', color: 'text.primary', bgcolor: '#F6F5F1', p: 1.5, borderRadius: 0.5 }}>
                  {l.mensagem}
                </Typography>
              )}
            </Paper>
          ))}
        </Stack>
      )}
    </Box>
  );
}
