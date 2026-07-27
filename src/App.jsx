import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Analytics from './components/Analytics';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import GaleriaPage from './pages/GaleriaPage';
import CourseDetailPage from './pages/CourseDetailPage';
import SectorDetailPage from './pages/SectorDetailPage';
import CalendarioPage from './pages/CalendarioPage';
import AdminPage from './pages/AdminPage';

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
        </Route>
        {/* Fora do MainLayout de propósito — ferramenta interna, sem header/footer/WhatsApp do site público */}
        <Route path="/admin" element={<AdminPage />} />
        {/* Compatibilidade com os links antigos, caso alguém os tenha guardado */}
        <Route path="/admin/calendario" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/kpis" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
