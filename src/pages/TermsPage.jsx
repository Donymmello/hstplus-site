import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { gradients } from '../theme';
import { company } from '../data/content';
import Seo from '../components/Seo';

function Section({ title, children }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 1.5 }}>
        {title}
      </Typography>
      <Box sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'text.secondary' }}>{children}</Box>
    </Box>
  );
}

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Seo
        title="Termos e Condições"
        description="Termos e condições de utilização do site e dos serviços da HST Plus."
        path="/termos"
      />
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundImage: gradients.dark, color: '#fff', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'warning.main' }}>
            Legal
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1 }}>
            Termos e Condições
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.7)', mt: 1, fontSize: '0.85rem' }}>
            Última actualização: {new Date().toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' })}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 9 }, backgroundImage: gradients.surfaceLight }}>
        <Container maxWidth="md">
          <Box
            sx={{
              bgcolor: '#FFF8E1',
              border: '1px solid #F0B429',
              p: 2.5,
              mb: 6,
              fontSize: '0.85rem',
              color: 'text.primary',
            }}
          >
            <strong>Nota:</strong> versão inicial destes termos, escrita para cobrir o funcionamento
            real do site. Recomenda-se revisão jurídica antes da publicação final.
          </Box>

          <Section title="1. Âmbito">
            <Typography>
              Estes termos aplicam-se à utilização do site {company.web}, gerido por {company.fullName}
              . Ao usar este site, aceita os termos aqui descritos.
            </Typography>
          </Section>

          <Section title="2. Natureza do conteúdo informativo">
            <Typography sx={{ mb: 2 }}>
              O conteúdo publicado neste site — incluindo descrições de formações, sectores, artigos
              de Insights e indicadores apresentados — tem carácter informativo e promocional. Não
              substitui avaliação técnica presencial, aptidão médica, autorização da entidade
              empregadora, nem os requisitos legais específicos aplicáveis a cada actividade ou
              sector.
            </Typography>
            <Typography>
              A frequência de uma formação não constitui, por si só, autorização para executar
              trabalhos de risco — essa autorização depende sempre de avaliação de risco, supervisão
              e aptidão específicas de cada local de trabalho.
            </Typography>
          </Section>

          <Section title="3. Propriedade intelectual">
            <Typography>
              Os textos, imagens, logótipos e demais conteúdos deste site são propriedade da HST
              Plus ou usados com autorização, e não podem ser reproduzidos sem consentimento prévio
              por escrito, excepto para uso pessoal e não comercial.
            </Typography>
          </Section>

          <Section title="4. Responsabilidades">
            <Typography sx={{ mb: 2 }}>
              Fazemos um esforço razoável para manter a informação deste site actualizada e precisa,
              mas não garantimos que esteja isenta de erros a todo o momento. Antes de tomar decisões
              operacionais ou de segurança com base neste site, confirme sempre os detalhes
              directamente connosco.
            </Typography>
            <Typography>
              Os indicadores e números apresentados no site — incluindo secções ilustrativas de
              demonstração — não devem ser interpretados como garantia de resultado para a sua
              própria organização.
            </Typography>
          </Section>

          <Section title="5. Contacto">
            <Typography>
              Para questões sobre estes termos, contacte-nos em{' '}
              <Link href={`mailto:${company.email}`} color="secondary.dark">
                {company.email}
              </Link>
              .
            </Typography>
          </Section>

          <Divider sx={{ my: 5 }} />

          <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', textAlign: 'center' }}>
            Consulte também a nossa{' '}
            <Link href="/privacidade" color="secondary.dark">
              Política de Privacidade
            </Link>
            .
          </Typography>
        </Container>
      </Box>
    </>
  );
}
