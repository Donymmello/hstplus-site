# HST Plus — Landing Page

Site institucional de página única para a **HST Plus, Consultancy & Training**,
construído a partir do conteúdo do portfólio (PDF) e do catálogo de formações (Excel).

## Stack

- **React 19 + Vite**
- **Material UI (MUI)** v5 — tema customizado em `src/theme.js`
- **Recharts** — gráfico de resultados na secção Referências
- Fontes: **Big Shoulders Display** (títulos, estilo sinalética industrial), **IBM Plex Sans** (corpo), **IBM Plex Mono** (dados técnicos/duração dos cursos)

## Como correr localmente

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera a pasta dist/
npm run preview   # pré-visualiza o build de produção
```

## Docker

### Produção (build estático servido por nginx, porta 8080)

```bash
docker compose up --build
# abre http://localhost:8080
```

Isto corre o `Dockerfile` (multi-stage): 1) `node:20-alpine` instala dependências com
`npm ci` e faz `npm run build`; 2) o resultado (`dist/`) é copiado para uma imagem
`nginx:1.27-alpine`, servido com `nginx.conf` (gzip + cache de assets com hash + fallback
para `index.html`).

### Desenvolvimento (hot-reload, porta 5173)

```bash
docker compose -f docker-compose.dev.yml up --build
# abre http://localhost:5173
```

Usa `Dockerfile.dev` com `npm run dev`, monta o código como volume (`.:/app`) para
reflectir alterações instantaneamente, e mantém `node_modules` num volume anónimo para
não sobrepor o que foi instalado dentro do container. `vite.config.js` já está preparado
com `host: true` e `watch.usePolling` para o hot-reload funcionar com bind mounts.

> Nota: não tenho Docker disponível neste ambiente para testar a build da imagem —
> os Dockerfiles seguem o padrão multi-stage standard (Node → nginx), mas vale a pena
> correr `docker compose up --build` e confirmar antes de dar como certo.

## Estrutura

```
src/
  theme.js              # paleta, tipografia e tokens MUI
  data/
    content.js           # textos institucionais (missão, valores, certificações, clientes...)
    courses.js            # catálogo de formações (extraído do Excel)
  components/
    Header.jsx             # navegação fixa + menu mobile
    Hero.jsx
    QuemSomos.jsx           # 01 — missão, visão, valores
    OQueFazemos.jsx          # 02 — soluções + análise quantitativa
    InspecaoQualidade.jsx     # 03
    Formacoes.jsx              # 04 — catálogo de cursos (acordeão)
    Metodologia.jsx             # 05 — método aplicado
    Consultoria.jsx               # 06 — consultores especializados
    Legalidade.jsx                 # 07 — legalidade e certificações
    Referencias.jsx                 # 08 — clientes + gráfico de resultados
    Contacto.jsx                     # 09 — fale connosco + rodapé
    HazardDivider.jsx                 # elemento assinatura (faixa de sinalização)
    Eyebrow.jsx                        # rótulo numerado de secção
  assets/                               # imagens extraídas e otimizadas do portfólio
```

## Próximos passos sugeridos

- Rever os textos e dados em `src/data/` (alguns pontos do PDF original ficaram resumidos).
- Ligar o botão "Pedir Proposta" a um formulário real (ex: endpoint Node/Express, ou Formspree).
- Adicionar Google Analytics / Meta Pixel, se aplicável.
- As referências de clientes (Uni-Span, Mota-Engil, TATA, etc.) foram propositadamente
  representadas em texto, e não com os logótipos originais extraídos do PDF, para evitar
  reprodução de marcas de terceiros — substitua por logótipos oficiais com autorização de
  cada cliente, se desejado.
