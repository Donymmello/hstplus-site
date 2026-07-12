import TopBar from './components/TopBar';
import Header from './components/Header';
import Analytics from './components/Analytics';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Solucoes from './components/Solucoes';
import Formacoes from './components/Formacoes';
import Stats from './components/Stats';
import QuemSomos from './components/QuemSomos';
import Galeria from './components/Galeria';
import InspecaoQualidade from './components/InspecaoQualidade';
import Metodologia from './components/Metodologia';
import Consultoria from './components/Consultoria';
import Legalidade from './components/Legalidade';
import Referencias from './components/Referencias';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Analytics />
      <TopBar />
      <Header />
      <Hero />
      <ClientLogos />
      <Solucoes />
      <Formacoes />
      <Stats />
      <QuemSomos />
      <Galeria />
      <InspecaoQualidade />
      <Metodologia />
      <Consultoria />
      <Legalidade />
      <Referencias />
      <Blog />
      <Contacto />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
