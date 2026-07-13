import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Solucoes from '../components/Solucoes';
import Formacoes from '../components/Formacoes';
import Stats from '../components/Stats';
import QuemSomos from '../components/QuemSomos';
import GaleriaCTA from '../components/GaleriaCTA';
import InspecaoQualidade from '../components/InspecaoQualidade';
import Metodologia from '../components/Metodologia';
import Consultoria from '../components/Consultoria';
import Legalidade from '../components/Legalidade';
import Referencias from '../components/Referencias';
import Blog from '../components/Blog';
import Contacto from '../components/Contacto';
import useScrollToHash from '../hooks/useScrollToHash';

export default function HomePage() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <ClientLogos />
      <Solucoes />
      <Formacoes />
      <Stats />
      <QuemSomos />
      <GaleriaCTA />
      <InspecaoQualidade />
      <Metodologia />
      <Consultoria />
      <Legalidade />
      <Referencias />
      <Blog />
      <Contacto />
    </>
  );
}
