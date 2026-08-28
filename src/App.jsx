import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Analytics from './components/Analytics';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import GaleriaPage from './pages/GaleriaPage';
import CourseDetailPage from './pages/CourseDetailPage';
import SectorDetailPage from './pages/SectorDetailPage';
import CalendarioPage from './pages/CalendarioPage';
import InsightsPage from './pages/InsightsPage';
import InsightArticlePage from './pages/InsightArticlePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

// Code-split: o painel de admin (uploads, dashboards, formulários de gestão)
// só é descarregado por quem de facto visita /admin — deixa de fazer parte
// do bundle que todos os visitantes do site público recebem.
const AdminPage = lazy(() => import('./pages/AdminPage'));

function AdminFallback() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <CircularProgress color="primary" />
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <ScrollProgress />
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/formacoes/:slug" element={<CourseDetailPage />} />
          <Route path="/setores/:slug" element={<SectorDetailPage />} />
          <Route path="/calendario" element={<CalendarioPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightArticlePage />} />
          <Route path="/privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        {/* Fora do MainLayout de propósito — ferramenta interna, sem header/footer/WhatsApp do site público */}
        <Route
          path="/admin"
          element={
            <Suspense fallback={<AdminFallback />}>
              <AdminPage />
            </Suspense>
          }
        />
        {/* Compatibilidade com os links antigos, caso alguém os tenha guardado */}
        <Route path="/admin/calendario" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/kpis" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
