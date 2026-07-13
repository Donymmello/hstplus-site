import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Analytics from './components/Analytics';
import ScrollProgress from './components/ScrollProgress';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import GaleriaPage from './pages/GaleriaPage';

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <ScrollProgress />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
