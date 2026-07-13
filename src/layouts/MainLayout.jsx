import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PageFade from '../components/PageFade';

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Header />
      <PageFade>
        <Outlet />
      </PageFade>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
