import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PageFade from '../components/PageFade';
import CookieConsent from '../components/CookieConsent';
import useScrollToHash from '../hooks/useScrollToHash';

export default function MainLayout() {
  useScrollToHash();
  return (
    <>
      <TopBar />
      <Header />
      <PageFade>
        <Outlet />
      </PageFade>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </>
  );
}
