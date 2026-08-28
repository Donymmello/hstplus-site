// Dados da área "Sectores" — ver Área "Indústrias" no documento de arquitectura
// do novo website. Cada sector segue a mesma estrutura pedida no documento:
// principais riscos, soluções HST-Plus, resultados esperados.
//
// ⚠️ "resultados" descreve objectivos/benefícios esperados de forma
// qualitativa — propositadamente NÃO inclui percentagens ou números
// específicos de clientes reais, para não fabricar estatísticas que a HST
// Plus não tenha validado. Se/quando houver dados reais de clientes por
// sector, substituir aqui.
//
// "ambito", "perfilTecnico" e "normas" (opcionais) — ficha técnica por
// sector, recebida directamente do cliente. "perfilTecnico" descreve o
// PERFIL de competência relevante para o sector (não uma alegação de que
// esse profissional específico está sempre alocado); "normas" são
// referenciais aplicáveis ao sector, não certificações que a HST Plus
// possua — mesmo cuidado de linguagem já usado nas restantes secções do
// site. Sectores sem estes campos (ex: Telecomunicações) simplesmente não
// mostram o bloco de ficha técnica na página.

export const sectors = [
  {
    slug: 'petroleo-e-gas',
    name: 'Petróleo & Gás',
    resumo: 'Operações de alto risco, onde a margem de erro é praticamente nula.',
    ambito: 'Áreas classificadas (explosivas), confinamento de gases, sistemas de emergência e espaços confinados.',
    perfilTecnico: 'Engenheiro de Segurança de Processo certificado (ex.: NEBOSH Oil & Gas).',
    normas: ['Regulamentos do INP', 'Normas API', 'Directiva ATEX'],
    riscos: [
      'Trabalho em espaços confinados e atmosferas potencialmente explosivas',
      'Trabalho em altura em plataformas e estruturas offshore/onshore',
      'Exposição a substâncias perigosas e gestão de derrames',
      'Gestão de contratistas múltiplos no mesmo local de trabalho',
    ],
    solucoes: [
      'Formação técnica em segurança de processo e espaços confinados',
      'Auditorias e inspecção de equipamentos de elevação e protecção individual',
      'Implementação de Sistemas de Gestão HSEQ alinhados a normas internacionais',
      'Planos de resposta a emergência específicos para a operação',
    ],
    resultados: [
      'Equipas tecnicamente preparadas para procedimentos de alto risco',
      'Conformidade documentada perante auditorias de clientes e reguladores',
      'Redução de paragens não planeadas por incidentes evitáveis',
    ],
  },
  {
    slug: 'mineracao',
    name: 'Mineração',
    resumo: 'Ambientes exigentes, onde a segurança e a produtividade andam juntas.',
    ambito: 'Frentes de lavra, estabilidade de taludes, bacias de rejeitos e explosivos.',
    perfilTecnico: 'Engenheiro de Minas ou Geólogo com especialização em geotecnia.',
    normas: ['Regulamento de Segurança Mineira', 'Directrizes do ICMM'],
    riscos: [
      'Movimentação de cargas pesadas e operação de equipamento de elevação',
      'Trabalho em altura em estruturas e taludes',
      'Exposição a poeiras, ruído e vibração prolongada',
      'Gestão de risco em operações 24/7 com múltiplos turnos',
    ],
    solucoes: [
      'Certificação de equipamentos de elevação de cargas',
      'Formação em trabalho em altura e condução defensiva de máquinas pesadas',
      'Matrizes de risco e planos de contingência por área operacional',
      'Auditorias técnicas periódicas com plano de acção correctiva',
    ],
    resultados: [
      'Equipamentos e operadores com certificação actualizada',
      'Menor exposição legal em caso de fiscalização',
      'Continuidade operacional com menos interrupções por incidentes',
    ],
  },
  {
    slug: 'construcao',
    name: 'Construção',
    resumo: 'Estaleiros em constante mudança exigem segurança que acompanha o ritmo da obra.',
    ambito: 'Estaleiros de obra, andaimes, escavações e redes eléctricas temporárias.',
    perfilTecnico: 'Engenheiro Civil/HSE especialista em trabalho em altura e riscos de obra.',
    normas: ['Decreto n.º 61/2006 (Moçambique)', 'OSHA 1926'],
    riscos: [
      'Trabalho em altura em andaimes e estruturas em construção',
      'Quedas de materiais e objectos em zonas de circulação',
      'Rotatividade elevada de mão-de-obra e subcontratados',
      'Uso de equipamento de elevação de cargas em espaço reduzido',
    ],
    solucoes: [
      'Formação em trabalho em altura, andaimes e uso de EPI',
      'Inspecção e certificação de equipamentos de elevação',
      'Consultoria em planos de segurança e emergência por estaleiro',
      'Acompanhamento técnico no terreno durante fases críticas da obra',
    ],
    resultados: [
      'Estaleiros com procedimentos de segurança documentados e aplicados',
      'Equipas novas rapidamente integradas nos protocolos de segurança',
      'Menor risco de embargo por incumprimento de normas HSE',
    ],
  },
  {
    slug: 'telecomunicacoes',
    name: 'Telecomunicações',
    resumo: 'Torres, postes e tecto — a maior parte do risco está literalmente no ar.',
    riscos: [
      'Trabalho em altura em torres e postes de telecomunicações',
      'Trabalhos com risco eléctrico em proximidade de instalações activas',
      'Gestão de frota para equipas em deslocação constante',
      'Trabalho isolado, muitas vezes sem supervisão directa próxima',
    ],
    solucoes: [
      'Formação especializada em trabalho em altura para torres e postes',
      'Formação em segurança eléctrica e trabalhos próximos de tensão',
      'Gestão de frota e condução defensiva para equipas móveis',
      'Procedimentos para trabalho isolado e comunicação de emergência',
    ],
    resultados: [
      'Técnicos certificados para trabalho em altura especializado',
      'Menos incidentes em deslocações e trabalhos de campo',
      'Conformidade documentada para contratos com operadoras',
    ],
  },
  {
    slug: 'energia',
    name: 'Energia',
    resumo: 'Cada etapa da cadeia energética — geração, transmissão, distribuição — tem o seu próprio perfil de risco.',
    ambito: 'Subestações, linhas de transmissão, centrais e procedimentos de bloqueio (LOTO).',
    perfilTecnico: 'Engenheiro Electrotécnico com certificação em risco eléctrico e arco voltaico.',
    normas: ['NFPA 70E', 'IEC 60364'],
    riscos: [
      'Trabalhos com risco eléctrico de alta e baixa tensão',
      'Trabalho em altura em subestações e infra-estruturas de distribuição',
      'Espaços confinados em centrais e instalações técnicas',
      'Gestão de risco em operações críticas sem tolerância a falhas',
    ],
    solucoes: [
      'Formação em segurança eléctrica e procedimentos de bloqueio/etiquetagem',
      'Certificação de equipamentos de elevação e protecção contra quedas',
      'Implementação de Sistemas de Gestão Integrada (Qualidade, Ambiente, Segurança)',
      'Auditorias técnicas e planos de acção correctiva',
    ],
    resultados: [
      'Equipas preparadas para operações críticas com risco eléctrico',
      'Sistemas de gestão auditáveis perante clientes e reguladores',
      'Redução da exposição a incidentes em operações de manutenção',
    ],
  },
  {
    slug: 'portos-e-logistica',
    name: 'Portos e Logística',
    resumo: 'Cais e terminais onde carga suspensa e movimentação constante exigem coordenação total.',
    ambito: 'Cais, movimentação de contentores, guindastes e carga perigosa (IMDG).',
    perfilTecnico: 'Inspector Técnico de Cargas e Elevação (certificado LEEA).',
    normas: ['Código ISPS', 'Código IMDG', 'Convenções da IMO'],
    riscos: [
      'Movimentação de carga suspensa em zonas de circulação de pessoas e viaturas',
      'Operação de guindastes de cais e equipamentos de elevação de grande porte',
      'Transporte e manuseamento de carga perigosa classificada (Código IMDG)',
      'Coordenação entre múltiplos operadores, transportadoras e agências no mesmo cais',
    ],
    solucoes: [
      'Inspecção e certificação de guindastes e equipamentos de elevação portuária',
      'Formação em sinalização, amarração de cargas e zonas de exclusão',
      'Procedimentos de manuseamento de carga perigosa alinhados ao Código IMDG',
      'Planos de comunicação e coordenação entre operador, sinaleiro e autoridade portuária',
    ],
    resultados: [
      'Equipamentos de elevação com inspecção e certificação actualizadas',
      'Operações de carga e descarga com menor exposição a incidentes',
      'Conformidade documentada perante auditorias portuárias e de clientes',
    ],
  },
  {
    slug: 'industria-geral',
    name: 'Indústria Geral e Manufactura',
    resumo: 'Linhas de produção onde o risco está no detalhe repetido todos os dias.',
    ambito: 'Linhas de montagem, protecção de máquinas, ruído e ergonomia.',
    perfilTecnico: 'Técnico de Higiene e Segurança especialista em ergonomia industrial.',
    normas: ['Diploma Legislativo n.º 48/73', 'ISO 45001'],
    riscos: [
      'Partes móveis e pontos de esmagamento em máquinas e linhas de montagem',
      'Exposição prolongada a ruído, vibração e posturas repetitivas',
      'Movimentação manual de cargas e lesões músculo-esqueléticas',
      'Rotatividade de pessoal em linhas de produção com pouco tempo de indução',
    ],
    solucoes: [
      'Avaliação de protecção de máquinas e pontos de risco mecânico',
      'Medição de ruído, vibração e conforto térmico no posto de trabalho',
      'Formação em ergonomia e prevenção de lesões músculo-esqueléticas',
      'Apoio à implementação de Sistemas de Gestão da Qualidade e Segurança (ISO 45001)',
    ],
    resultados: [
      'Postos de trabalho com risco mecânico e ergonómico identificado e mitigado',
      'Equipas novas integradas rapidamente nos procedimentos de segurança',
      'Sistemas de gestão auditáveis perante clientes e certificadoras',
    ],
  },
];

export function findSectorBySlug(slug) {
  return sectors.find((s) => s.slug === slug);
}
