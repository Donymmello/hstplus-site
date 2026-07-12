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

## Estrutura da página (ordem no `App.jsx`)

1. `TopBar` — telefone, email, redes sociais
2. `Header` — navegação fixa
3. `Hero` — título + CTA único
4. `ClientLogos` — logótipos reais dos clientes (Uni-Span, Terminais do Norte, Mota-Engil,
   TCPI, Manica, LC Power, Gabriel Couto, Protecna, TATA), extraídos do portfólio original
5. `Solucoes` — 3 pilares (Consultoria / Formação / Inspeção)
6. `Formacoes` — catálogo de cursos por categoria, em separadores (tabs)
7. `Stats` — números-chave
8. `QuemSomos` — missão institucional resumida + valores
9. `InspecaoQualidade`
10. `Metodologia` — aulas teóricas vs práticas
11. `Consultoria` — consultor especializado + serviços
12. `Legalidade` — certificações e registos legais
13. `Referencias` — gráfico de resultados
14. `Blog` — publicações do Facebook/Instagram, via `server/` (ver `server/README.md`)
15. `Contacto`
16. `Footer`
17. `WhatsAppButton` — botão flutuante

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
- **Depois de testarem as mudanças actuais** (topbar, gradientes, blog/API):
  - Transições/efeitos de animação entre secções (a definir com a HST Plus).
  - **Carrossel de imagens**: consolidar as fotos hoje espalhadas pelas secções
    (`QuemSomos`, `InspecaoQualidade`, etc.) num único carrossel, em vez de dispersas
    pelo site — reduz ainda mais a sensação de "poluição visual" já resolvida na
    reestruturação anterior.
  - Outras mudanças de design que a HST Plus está a desenhar (aguardar especificação).
