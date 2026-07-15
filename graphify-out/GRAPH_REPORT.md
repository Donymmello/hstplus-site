# Graph Report - .  (2026-07-14)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 263 nodes · 393 edges · 29 communities (16 shown, 13 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 27 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `aa3eee1b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- theme.js
- react
- Frontend Build Config
- content.js
- package.json
- HST Plus Occupational Health and Safety Training Services
- MainLayout.jsx
- HST-Plus Sociedade Unipessoal Limitada (Sucursal)
- dependencies
- HomePage.jsx
- fetchPosts.js
- HST Plus Blog API Docker Service
- docker-compose.dev.yml (Development Compose)
- now.md
- CLAUDE.md
- LC Power (Client)
- Manica Moçambique Terminais Limitada (Client)
- Mota-Engil Engenharia (Client)
- Protecna Engineering Projects & Steelworks (Client)
- Tata (Client)
- TCP International (Client)
- archive.md
- recent.md
- today-2026-07-13.done.md
- today-2026-07-14.md
- Project README

## God Nodes (most connected - your core abstractions)
1. `gradients` - 15 edges
2. `HST-Plus Sociedade Unipessoal Limitada (Sucursal)` - 14 edges
3. `Reveal()` - 13 edges
4. `react` - 12 edges
5. `SectionHeader()` - 7 edges
6. `company` - 6 edges
7. `Uni-Span Formwork & Scaffolding (Client)` - 6 edges
8. `scripts` - 5 edges
9. `scripts` - 4 edges
10. `refreshCache()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Worker Climbing Scaffold with Safety Harness (Hero Image 1)` --references--> `index.html (Entry HTML)`  [INFERRED]
  src/assets/hero1.jpg → index.html
- `Workplace Safety Training Session (Hero Image)` --references--> `index.html (Entry HTML)`  [INFERRED]
  src/assets/hero.png → index.html
- `index.html (Entry HTML)` --references--> `src/main.jsx (React Entry Point)`  [EXTRACTED]
  index.html → src/main.jsx
- `HST Plus Blog API README` --references--> `HST Plus Blog API Docker Service`  [INFERRED]
  server/README.md → docker-compose.yml
- `HST-Plus Sociedade Unipessoal Limitada (Sucursal)` --references--> `Gabriel Couto (Client)`  [INFERRED]
  src/assets/gallery6.jpg → src/assets/clients/gabriel-couto.jpg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **HST Plus Training Engagement with Manica Mozambique** — src_assets_gallery_formacao_sala_manica, concept_manica_mozambique, concept_hst_plus_safety_training [EXTRACTED 0.93]
- **Hero Images Depicting HST Plus Core Services (Safety Training & Working at Height)** — src_assets_hero_png, src_assets_hero1_jpg, concept_workplace_safety_training, concept_working_at_height [INFERRED 0.88]
- **Full Docker Compose Stack (Site + API, Prod and Dev)** — docker_compose_yml, docker_compose_dev_yml, hstplus_site_service, hstplus_api_service, hstplus_site_service_dev, hstplus_api_service_dev [EXTRACTED 0.97]
- **HomePage Section Rendering Flow** — src_pages_homepage, src_components_hero, src_components_clientlogos, src_components_solucoes, src_components_formacoes, src_components_stats, src_components_quemssomos, src_components_galeriacta, src_components_inspecaoqualidade, src_components_metodologia, src_components_consultoria, src_components_legalidade, src_components_referencias, src_components_blog, src_components_contacto [EXTRACTED 1.00]
- **Shared Layout Shell Components** — src_layouts_mainlayout, src_components_topbar, src_components_header, src_components_footer, src_components_whatsappbutton, src_components_pagefade [EXTRACTED 1.00]
- **HST Plus Occupational Safety Training Photos** — src_assets_about_jpg, src_assets_cta_jpg, src_assets_gallery1_jpg, src_assets_gallery2_jpg, src_assets_gallery3_jpg, src_assets_gallery4_jpg, src_assets_gallery5_jpg, src_assets_gallery6_jpg [INFERRED 0.90]
- **HST-Plus Client Portfolio - All Client Organizations** — hst_plus_sociedade_unipessoal, client_gabriel_couto, client_lcpower, client_manica, client_mota_engil, client_protecna, client_tata, client_tcpi, client_terminais_do_norte, client_uni_span [INFERRED 0.90]
- **HST-Plus Training Sessions Delivered to Uni-Span** — hst_plus_sociedade_unipessoal, client_uni_span, src_assets_gallery_avaliacao_escrita_unispan, src_assets_gallery_encerramento_formacao_unispan, src_assets_gallery_equipa_unispan_1, src_assets_gallery_equipa_unispan_2 [EXTRACTED 0.95]
- **HST-Plus Identity and Credential Assets** — hst_plus_sociedade_unipessoal, src_assets_gallery6, src_assets_logo, oshacademy_authorized_provider, src_assets_gallery_equipamentos_medicao [EXTRACTED 0.95]
- **HST Plus Safety Training Campaign for Uni-span Workers** — src_assets_gallery_formacao_altura_unispan_1, src_assets_gallery_sala_formacao, src_assets_gallery_visita_terreno_unispan, concept_unispan, concept_hst_plus_safety_training [INFERRED 0.88]
- **Working at Height and Scaffolding Training Activities** — src_assets_gallery_montagem_andaime, src_assets_gallery_rigger_altura, src_assets_gallery_formacao_altura_unispan_1, concept_working_at_height, concept_scaffolding_training [EXTRACTED 0.92]

## Communities (29 total, 13 thin omitted)

### Community 0 - "theme.js"
Cohesion: 0.10
Nodes (25): Blog(), formatDate(), sourceIcon, ClientLogos(), logos, contactLines, Contacto(), Counter() (+17 more)

### Community 1 - "react"
Cohesion: 0.10
Nodes (17): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, oxc, react, warn (+9 more)

### Community 2 - "Frontend Build Config"
Cohesion: 0.10
Nodes (20): oxlint, devDependencies, oxlint, @types/react, @types/react-dom, vite, @vitejs/plugin-react, name (+12 more)

### Community 3 - "content.js"
Cohesion: 0.12
Nodes (16): Photo: Workers inspecting rigging hook on yellow lifting stand with chains, Certificate: OSHAcademy Authorized Training Provider 2025 for HST Plus Sociedade Unipessoal Lda, Mozambique, Eyebrow(), Legalidade(), icons, certifications, clients, consultants (+8 more)

### Community 4 - "package.json"
Cohesion: 0.10
Nodes (19): cors, dotenv, express, node-cron, dependencies, cors, dotenv, express (+11 more)

### Community 5 - "HST Plus Occupational Health and Safety Training Services"
Cohesion: 0.15
Nodes (19): HST Plus Occupational Health and Safety Training Services, Manica Moçambique Terminals – Client Organization, Rigging and Lifting Safety Training, Scaffolding Erection and Inspection Training, Uni-span – Client Organization, Working at Height / Fall Protection Training, Workplace Safety Training (HST), index.html (Entry HTML) (+11 more)

### Community 6 - "MainLayout.jsx"
Cohesion: 0.15
Nodes (12): Footer(), quickLinks, socialIcons, Header(), links, PageFade(), socialIcons, TopBar() (+4 more)

### Community 7 - "HST-Plus Sociedade Unipessoal Limitada (Sucursal)"
Cohesion: 0.15
Nodes (18): Gabriel Couto (Client), Terminais do Norte S.A. (Client), Uni-Span Formwork & Scaffolding (Client), HST-Plus Sociedade Unipessoal Limitada (Sucursal), OSHAcademy Authorized Training Provider - HST Plus, Client Logo - Gabriel Couto, Client Logo - Terminais do Norte S.A., Client Logo - Uni-Span Cofragem & Andaimes / Formwork & Scaffolding (+10 more)

### Community 8 - "dependencies"
Cohesion: 0.12
Nodes (17): @emotion/react, @emotion/styled, @mui/icons-material, @mui/material, dependencies, @emotion/react, @emotion/styled, @mui/icons-material (+9 more)

### Community 9 - "HomePage.jsx"
Cohesion: 0.20
Nodes (9): Photo: Scaffolding assembly training with workers on tall blue scaffolding structure, Consultoria(), Hero(), Metodologia(), PhotoFrame(), tints, QuemSomos(), useScrollToHash() (+1 more)

### Community 10 - "fetchPosts.js"
Cohesion: 0.33
Nodes (7): CACHE_FILE, __dirname, fetchFacebookPosts(), fetchInstagramPosts(), readCache(), refreshCache(), app

### Community 11 - "HST Plus Blog API Docker Service"
Cohesion: 0.67
Nodes (4): docker-compose.yml (Production Compose), HST Plus Blog API Docker Service, hstplus-site Docker Service, HST Plus Blog API README

### Community 12 - "docker-compose.dev.yml (Development Compose)"
Cohesion: 1.00
Nodes (3): docker-compose.dev.yml (Development Compose), HST Plus Blog API Docker Dev Service, hstplus-site Docker Dev Service

## Knowledge Gaps
- **94 isolated node(s):** `$schema`, `oxc`, `react/rules-of-hooks`, `warn`, `name` (+89 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `theme.js`, `HomePage.jsx`, `MainLayout.jsx`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `Frontend Build Config`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `HST-Plus Sociedade Unipessoal Limitada (Sucursal)` (e.g. with `Gabriel Couto (Client)` and `Gallery Photo - Written Assessment Session with Uni-Span Workers`) actually correct?**
  _`HST-Plus Sociedade Unipessoal Limitada (Sucursal)` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `HST Plus Occupational Health and Safety Training Services` (e.g. with `Rigging and Lifting Safety Training` and `Scaffolding Erection and Inspection Training`) actually correct?**
  _`HST Plus Occupational Health and Safety Training Services` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `oxc`, `react/rules-of-hooks` to the rest of the system?**
  _94 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `theme.js` be split into smaller, more focused modules?**
  _Cohesion score 0.10128205128205128 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.09666666666666666 - nodes in this community are weakly interconnected._