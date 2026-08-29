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

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Seo
        title="Política de Privacidade"
        description="Como a HST Plus recolhe, usa e protege os dados pessoais de quem visita e contacta o site."
        path="/privacidade"
      />
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundImage: gradients.dark, color: '#fff', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'warning.main' }}>
            Legal
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1 }}>
            Política de Privacidade
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
            <strong>Nota:</strong> este documento descreve, de forma técnica e precisa, os dados que
            este site efectivamente recolhe através dos seus formulários e ferramentas — foi escrito
            a partir do código real do site, não de um modelo genérico. Ainda assim, recomenda-se
            revisão jurídica antes da publicação final, para garantir conformidade com a legislação
            moçambicana de protecção de dados aplicável.
          </Box>

          <Section title="1. Quem trata os seus dados">
            <Typography sx={{ mb: 1 }}>
              {company.fullName} (&quot;HST Plus&quot;), com sede em Moçambique, é responsável pelo
              tratamento dos dados pessoais recolhidos através do site {company.web}.
            </Typography>
            <Typography>
              Para qualquer questão sobre esta política ou sobre os seus dados, contacte-nos através
              de{' '}
              <Link href={`mailto:${company.email}`} color="secondary.dark">
                {company.email}
              </Link>
              .
            </Typography>
          </Section>

          <Section title="2. Que dados recolhemos, e para quê">
            <Typography sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
              Formulários de contacto (&quot;Pedir Informações&quot;, &quot;Pedir Cotação&quot;, &quot;Pedir Proposta&quot;)
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Recolhemos nome, email, telefone, organização, cargo (opcional) e a mensagem que
              escrever, incluindo o curso ou sector a que o pedido se refere, quando aplicável. Estes
              dados são usados exclusivamente para responder ao seu pedido não são vendidos nem
              partilhados com terceiros para fins de marketing.
            </Typography>

            <Typography sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
              Newsletter (subscrição de artigos)
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Se subscrever a newsletter, recolhemos apenas o seu endereço de email, usado para
              enviar novos artigos publicados em Insights. Pode cancelar a subscrição a qualquer
              momento contactando-nos directamente.
            </Typography>

            <Typography sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
              Google Analytics
            </Typography>
            <Typography>
              Quando activado, o site pode usar o Google Analytics para perceber, de forma agregada
              e anónima, como as páginas são visitadas (ex: quantas pessoas visitam, que páginas são
              mais lidas). Os endereços IP são anonimizados antes de qualquer processamento. Não
              usamos esta ferramenta para identificar visitantes individualmente.
            </Typography>
          </Section>

          <Section title="3. Onde ficam guardados os seus dados">
            <Typography>
              Os dados recolhidos pelos formulários ficam guardados nos nossos servidores, geridos
              directamente pela equipa técnica da HST Plus não usamos plataformas de terceiros
              (tipo CRMs externos ou serviços de marketing) para armazenar estes dados. Podemos usar
              um serviço de email (SMTP) apenas para nos notificar de novos pedidos esse serviço
              não guarda nem processa os seus dados para outros fins.
            </Typography>
          </Section>

          <Section title="4. Quanto tempo guardamos os seus dados">
            <Typography>
              Guardamos os pedidos de contacto pelo tempo necessário para lhes dar resposta e para
              fins de registo comercial legítimo. Se quiser que os seus dados sejam apagados antes
              disso, contacte-nos ver secção 6.
            </Typography>
          </Section>

          <Section title="5. Cookies">
            <Typography sx={{ mb: 2 }}>
              Ao visitar o site pela primeira vez, é-lhe pedido para aceitar ou recusar cookies de
              analítica. Enquanto não escolher, nenhum cookie de analítica é carregado. Pode mudar de
              ideias a qualquer momento através do link &quot;Cookies&quot; no rodapé do site.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Este site não usa cookies de rastreamento publicitário. Se aceitar, e quando o Google
              Analytics estiver activo, são usados cookies técnicos de analítica com o IP anonimizado
              (ver secção 2).
            </Typography>
            <Typography>
              O painel de administração interno (uso exclusivo da equipa HST Plus) usa armazenamento
              local do browser (sessionStorage) apenas para manter a sessão de login activa este
              dado nunca sai do seu próprio dispositivo e não depende do seu consentimento de cookies.
            </Typography>
          </Section>

          <Section title="6. Os seus direitos">
            <Typography>
              Tem o direito de aceder, corrigir, ou pedir a eliminação dos dados pessoais que nos
              forneceu. Para exercer qualquer um destes direitos, contacte-nos em{' '}
              <Link href={`mailto:${company.email}`} color="secondary.dark">
                {company.email}
              </Link>
              .
            </Typography>
          </Section>

          <Divider sx={{ my: 5 }} />

          <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', textAlign: 'center' }}>
            Consulte também os nossos{' '}
            <Link href="/termos" color="secondary.dark">
              Termos e Condições
            </Link>
            .
          </Typography>
        </Container>
      </Box>
    </>
  );
}
