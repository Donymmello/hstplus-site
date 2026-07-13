# HST Plus — Landing Page

Site institucional de página única para a **HST Plus, Consultancy & Training**.
Estrutura inspirada na Above Academy (above.co.mz), mais arejada e com menos blocos de
imagem/texto, com o conteúdo e identidade visual da HST Plus.

## Stack

- **React 19 + Vite**
- **Material UI (MUI)** v5 — tema customizado em `src/theme.js`
- **Recharts** — gráfico de resultados na secção Referências
- Fontes: **Big Shoulders Display** (títulos), **IBM Plex Sans** (corpo), **IBM Plex Mono** (dados técnicos)

## Como correr localmente

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera a pasta dist/
npm run preview   # pré-visualiza o build de produção
```

## Docker

```bash
docker compose up --build                             # produção, porta 8080 + API do blog
docker compose -f docker-compose.dev.yml up --build    # dev com hot-reload, portas 5173 + 4000
```

O `docker-compose.yml` sobe dois serviços: `hstplus-site` (nginx, frontend) e `api`
(Node/Express — busca publicações do Facebook/Instagram, ver `server/README.md` para
configurar as credenciais da Meta). O nginx encaminha `/api/*` para o serviço `api`.

## Estrutura de rotas e páginas

O site deixou de ser uma única página — agora usa `react-router-dom`:

- **`/`** (`src/pages/HomePage.jsx`) — todas as secções institucionais, na mesma ordem de sempre
- **`/galeria`** (`src/pages/GaleriaPage.jsx`) — página própria com grid 3x3 de fotos e lightbox
  (clicar numa foto amplia, com setas para navegar e tecla/botão fechar)

Ambas as páginas partilham o `src/layouts/MainLayout.jsx` (TopBar, Header, Footer,
WhatsAppButton) e são envolvidas por `src/components/PageFade.jsx`, que aplica um fade
leve sempre que se muda de página (Home ↔ Galeria). Navegar para uma âncora de outra
página (ex: clicar "Certificações" estando em `/galeria`) leva de volta a `/` e faz
scroll suave até à secção, via `src/hooks/useScrollToHash.js`.

### Secções da Home (ordem em `HomePage.jsx`)

1. `Hero` — título + CTA único
2. `ClientLogos` — logótipos reais dos clientes
3. `Solucoes` — 3 pilares (Consultoria / Formação / Inspeção)
4. `Formacoes` — catálogo de cursos por categoria, em separadores (tabs)
5. `Stats` — números-chave (com contagem animada)
6. `QuemSomos` — missão institucional resumida + valores
7. `GaleriaCTA` — convite para a página `/galeria` (já não mostra fotos aqui)
8. `InspecaoQualidade`
9. `Metodologia` — aulas teóricas vs práticas
10. `Consultoria` — consultor especializado + serviços
11. `Legalidade` — certificações e registos legais
12. `Referencias` — gráfico de resultados
13. `Blog` — publicações do Facebook/Instagram, via `server/` (ver `server/README.md`)
14. `Contacto`

## Nota sobre as fotos da Galeria

As fotos em `src/assets/gallery/` (usadas em `GaleriaPage.jsx`) são **placeholders** —
a HST Plus vai enviar o conjunto definitivo. Para trocar: substituir os ficheiros nessa
pasta e actualizar a lista `photos` no topo de `src/pages/GaleriaPage.jsx` (mantém
múltiplos de 3 para a grid ficar sempre alinhada).

## Nota sobre logótipos de clientes

Os logótipos em `src/assets/clients/` foram extraídos e recortados directamente do
portfólio em PDF fornecido pela HST Plus (que já os incluía como referências autorizadas
pelos próprios clientes). Foram identificados por OCR e corte automático — vale a pena
confirmar com a equipa da HST Plus se algum logótipo precisa de ser substituído por uma
versão em maior resolução ou mais recente.

## Próximos passos sugeridos

- Rever textos/dados em `src/data/`.
- Ligar "Pedir Proposta" a um formulário real.
- Confirmar resolução/qualidade final dos logótipos de clientes com a HST Plus.
- Substituir as fotos placeholder da Galeria pelas definitivas (ver nota acima).
- **Newsletter**: a HST Plus quer um formulário de subscrição, mas ainda não decidiu como
  deve funcionar. Opções a discutir quando houver clareza:
  - Mais simples: embed dum serviço externo (Mailchimp, Brevo/Sendinblue) — sem código
    adicional no `server/`, mas a lista de subscritores fica gerida fora do site.
  - Mais integrado: endpoint novo em `server/` (`POST /api/newsletter`) que grava o email
    (ficheiro/CSV ou tabela simples) e opcionalmente sincroniza com um serviço de email
    marketing depois — dá mais controlo mas exige mais manutenção.
  - Ficar apenas com os contactos directos (WhatsApp/telefone/email) que já existem, sem
    newsletter, se não for prioridade agora.
- Outras mudanças de design que a HST Plus está a desenhar (aguardar especificação).
