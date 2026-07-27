import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LockIcon from '@mui/icons-material/Lock';
import { gradients } from '../theme';
import AdminCalendarioPanel from '../components/admin/AdminCalendarioPanel';
import AdminKpisPanel from '../components/admin/AdminKpisPanel';
import AdminLeadsPanel from '../components/admin/AdminLeadsPanel';
import AdminDashboardPanel from '../components/admin/AdminDashboardPanel';
import AdminGaleriaPanel from '../components/admin/AdminGaleriaPanel';

const STORAGE_KEY = 'hstAdminKey';
const TABS = ['calendario', 'kpis', 'leads', 'dashboard', 'galeria'];

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState(() => sessionStorage.getItem(STORAGE_KEY) || '');
  const [keyInput, setKeyInput] = useState('');
  const [unauthorized, setUnauthorized] = useState(false);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    document.title = 'Admin — HST Plus';
  }, []);

  const handleEntrar = (e) => {
    e.preventDefault();
    if (!keyInput.trim()) return;
    sessionStorage.setItem(STORAGE_KEY, keyInput.trim());
    setAdminKey(keyInput.trim());
    setUnauthorized(false);
  };

  const handleSair = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setAdminKey('');
  };

  // Passado aos painéis: se qualquer chamada dev devolver 401 (ex: a key foi
  // alterada no servidor entretanto), volta ao ecrã de login com um aviso,
  // em vez de ficar preso num painel a falhar silenciosamente.
  const handleUnauthorized = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setAdminKey('');
    setUnauthorized(true);
  };

  if (!adminKey) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundImage: gradients.surfaceLight }}>
        <Container maxWidth="xs">
          <Paper variant="outlined" component="form" onSubmit={handleEntrar} sx={{ p: 4, borderColor: 'divider' }}>
            <Stack alignItems="center" spacing={1} sx={{ mb: 3 }}>
              <LockIcon sx={{ color: 'primary.main', fontSize: 28 }} />
              <Typography variant="h4" sx={{ fontSize: '1.2rem' }}>
                Admin HST Plus
              </Typography>
            </Stack>
            <TextField
              fullWidth
              type="password"
              label="Admin key"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              autoFocus
              sx={{ mb: 2 }}
            />
            <Button type="submit" fullWidth variant="contained" color="secondary">
              Entrar
            </Button>
            {unauthorized && (
              <Typography sx={{ color: 'error.main', fontSize: '0.8rem', mt: 2, textAlign: 'center' }}>
                Chave incorrecta ou expirada.
              </Typography>
            )}
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, minHeight: '100vh', backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="md">
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontSize: '1.4rem' }}>
            Admin HST Plus
          </Typography>
          <Button variant="text" color="inherit" onClick={handleSair} sx={{ color: 'text.secondary' }}>
            Sair
          </Button>
        </Stack>

        <Paper variant="outlined" sx={{ borderColor: 'divider', mb: 3 }}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Calendário" />
            <Tab label="KPIs" />
            <Tab label="Leads" />
            <Tab label="Dashboard" />
            <Tab label="Galeria" />
          </Tabs>
        </Paper>

        {TABS[tab] === 'calendario' && <AdminCalendarioPanel adminKey={adminKey} onUnauthorized={handleUnauthorized} />}
        {TABS[tab] === 'kpis' && <AdminKpisPanel adminKey={adminKey} onUnauthorized={handleUnauthorized} />}
        {TABS[tab] === 'leads' && <AdminLeadsPanel adminKey={adminKey} onUnauthorized={handleUnauthorized} />}
        {TABS[tab] === 'dashboard' && <AdminDashboardPanel adminKey={adminKey} onUnauthorized={handleUnauthorized} />}
        {TABS[tab] === 'galeria' && <AdminGaleriaPanel adminKey={adminKey} onUnauthorized={handleUnauthorized} />}
      </Container>
    </Box>
  );
}
