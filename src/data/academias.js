// Percursos de desenvolvimento ("Academias") — agrupam os cursos reais já
// existentes em courses.js por tema/objectivo, em vez de listá-los apenas
// por categoria administrativa. Ver "Arquitetura do novo website", secção 5.
//
// Cada academia referencia cursos pelo NOME exacto em courses.js — a lista
// de slugs é resolvida em tempo de execução (resolveAcademias), nunca
// duplicamos dados de curso aqui.

export const academiasRaw = [
    {
      id: 'trabalho-em-altura',
      title: 'Academia de Trabalho em Altura',
      description: 'Segurança, resgate e montagem de andaime, para quem trabalha acima do solo.',
      courseNames: [
        'Segurança em Trabalhos em Altura',
        'Resgate em Altura e em Espaços Confinados',
        'Montagem e Inspeção de Andaime',
        'Supervisão de Andaime',
        'Içamento de Cargas',
      ],
    },
    {
      id: 'lifting',
      title: 'Academia de Lifting',
      description: 'Formação para sinaleiros, operadores de guindaste e de ponte rolante.',
      courseNames: [
        'Içamento de Cargas',
        'Rigger (Sinaleiro/Amarrador de Cargas)',
        'Manuseio de Guindaste',
        'Manuseio de Ponte Rolante',
        'Manuseio de Camião Munck',
        'Manuseio de Plataforma Elevatória',
      ],
    },
    {
      id: 'operacoes-criticas',
      title: 'Academia de Operações Críticas',
      description: 'Espaços confinados, atmosferas perigosas e procedimentos de alto risco.',
      courseNames: [
        'Trabalhos em Espaços Confinados',
        'Procedimento em Lockout and Tagout (LOTO)',
        'Uso de GasMeter + ATEX (Atmosferas Explosivas)',
        'Dangerous Goods (Cargas Perigosas)',
        'Uso de Ferramentas Manuais Eléctricas',
      ],
    },
    {
      id: 'emergencia',
      title: 'Academia de Emergência',
      description: 'Reconhecer, responder e investigar preparação para quando algo corre mal.',
      courseNames: [
        'Primeiros Socorros',
        'Prevenção e Combate a Incêndios',
        'Procedimentos de Evacuação de Emergência',
        'Investigação de Acidentes de Trabalho (Análise pós-evento)',
        'HIRA – Hazard Identification and Risk Analysis',
      ],
    },
    {
      id: 'conducao-defensiva',
      title: 'Academia de Condução Defensiva',
      description: 'Condução e manobra segura de veículos e equipamento motorizado.',
      courseNames: [
        'Direção Defensiva e Preventiva',
        'Manuseio de Empilhadeira',
        'Manuseio de Empilhadeira / Mini-Empilhadeira',
        'Manuseio de Guindaste / Mini-Guindaste',
        'Flag Man (Sinalizador de Trânsito/Manobras)',
      ],
    },
    {
      id: 'lideranca-hseq',
      title: 'Academia de Liderança HSEQ',
      description: 'Metodologias de gestão, análise de risco e cultura de segurança para quem lidera equipas.',
      courseNames: [
        'Metodologia 5S',
        'Metodologia PDCA',
        'SST – Saúde e Segurança no Trabalho (Geral/Consciencialização)',
        'Gestão de Risco',
        'Análise e Causa Raiz',
        'Gestão de PPE (Equipamentos de Proteção Individual)',
        'Gestão de Fadiga e Stress',
        'HST – Higiene e Segurança no Trabalho',
        'Condições Inseguras + CheckList',
      ],
    },
  ];
  
  /**
   * Resolve os nomes de curso de cada academia contra o catálogo real
   * (allCourses de courses.js), devolvendo só os que de facto existem —
   * silenciosamente ignora nomes que não batam certo, em vez de rebentar a
   * build. Assim, se um curso for renomeado em courses.js, a academia
   * correspondente encolhe em vez de referenciar um curso fantasma.
   */
  export function resolveAcademias(allCourses) {
    return academiasRaw
      .map((a) => ({
        ...a,
        courses: a.courseNames.map((name) => allCourses.find((c) => c.name === name)).filter(Boolean),
      }))
      .filter((a) => a.courses.length > 0);
  }