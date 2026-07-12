# HST Plus — Blog API (Facebook + Instagram)

Serviço Node/Express que consulta a Graph API da Meta de tempo a tempo (cron), guarda o
resultado numa cache local (`cache/posts.json`) e expõe `GET /api/posts` para o frontend
consumir. O frontend nunca fala directamente com a Meta — só com este serviço.

## Como correr

```bash
cd server
cp .env.example .env    # depois preenche o .env com as tuas credenciais (ver abaixo)
npm install
npm run dev              # http://localhost:4000/api/posts
```

Ou via Docker, a partir da raiz do projecto:

```bash
docker compose up --build     # sobe o site (8080) + esta API (interna, via proxy /api)
```

## Onde arranjar as credenciais (o único bloqueio real)

Como só vamos **ler** as publicações da própria Página/Instagram da HST Plus (não dados de
terceiros), isto corre em modo de desenvolvimento da app Meta — **não precisa de App Review**.
Precisas de:

### 1. Ligar o Instagram à Página de Facebook
No Instagram: Definições → Contas ligadas → Facebook → liga à Página da HST Plus.
(Se ainda não for conta Business/Creator, o Instagram pede para mudares — é gratuito.)

### 2. Criar uma app em developers.facebook.com
1. [developers.facebook.com](https://developers.facebook.com) → **Minhas Apps** → **Criar App**
2. Tipo: **Negócios**
3. Adiciona o produto **Graph API Explorer** (já vem disponível por omissão)

### 3. Gerar um token de acesso de longa duração da Página
1. Vai a **Graph API Explorer** (developers.facebook.com/tools/explorer)
2. Selecciona a tua app, depois "User or Page" → escolhe a Página da HST Plus
3. Em permissões, adiciona: `pages_show_list`, `pages_read_engagement`, `instagram_basic`
4. Gera o token — isto dá-te um **token de curta duração** (dura ~1h a 2 meses conforme o tipo)
5. Troca-o por um de longa duração (~60 dias, renovável) usando este pedido no próprio
   Graph API Explorer ou via `curl`:

```
GET https://graph.facebook.com/v20.0/oauth/access_token
  ?grant_type=fb_exchange_token
  &client_id={ID da tua app}
  &client_secret={Segredo da tua app}
  &fb_exchange_token={token de curta duração do passo 4}
```

> Dica: se a HST Plus tiver acesso ao **Business Manager** (business.facebook.com), dá para
> gerar um token de **Utilizador de Sistema** que não expira — poupa-vos de repetir este
> passo a cada ~60 dias. Se quiserem, faço essa configuração depois.

### 4. Obter os IDs
- **`FB_PAGE_ID`**: na própria Página → Configurações → Sobre → "ID da Página"
- **`IG_BUSINESS_ACCOUNT_ID`**: no Graph API Explorer, com o token do passo 3, faz um
  pedido a `GET /{FB_PAGE_ID}?fields=instagram_business_account` — o campo devolvido é o ID.

### 5. Preencher o `.env`
```
FB_PAGE_ID=xxxxxxxxxxxxxxx
FB_PAGE_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
IG_BUSINESS_ACCOUNT_ID=xxxxxxxxxxxxxxx
```

Depois corre `npm run fetch:now` (ou reinicia o container) para testar — se tudo estiver
certo, `cache/posts.json` aparece com as publicações mais recentes.

## Notas

- Sem credenciais preenchidas, `/api/posts` devolve uma lista vazia — o site mostra
  automaticamente um convite para seguir as redes sociais em vez de uma secção quebrada.
- A cache actualiza sozinha de 6 em 6 horas (`CRON_SCHEDULE` no `.env`, formato cron).
- Publicações do Facebook só de texto (sem imagem) são ignoradas — o layout do blog é
  todo baseado em cartões com imagem.
