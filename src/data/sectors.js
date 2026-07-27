// Dados da área "Sectores" — ver Área "Indústrias" no documento de arquitectura
// do novo website. Cada sector segue a mesma estrutura pedida no documento:
// principais riscos, soluções HST-Plus, resultados esperados.
//
// ⚠️ "resultados" descreve objectivos/benefícios esperados de forma
// qualitativa — propositadamente NÃO inclui percentagens ou números
// específicos de clientes reais, para não fabricar estatísticas que a HST
// Plus não tenha validado. Se/quando houver dados reais de clientes por
// sector, substituir aqui.

export const sectors = [
  {
    slug: 'petroleo-e-gas',
    name: 'Petróleo & Gás',
    resumo: 'Operações de alto risco, onde a margem de erro é praticamente nula.',
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
    resumo: 'Da geração à distribuição, cada elo da cadeia tem o seu próprio perfil de risco.',
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
];

export function findSectorBySlug(slug) {
  return sectors.find((s) => s.slug === slug);
}
