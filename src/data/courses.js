// Catálogo de formações extraído da planilha "Para_designer1.xlsx"
//
// ⚠️ ATENÇÃO — dois avisos sobre dados provisórios:
// 1. O ficheiro original só tinha "Básico" e "Reciclagem" por curso. Os
//    valores de "medio" e "avancado" abaixo são temporários (básico +8h e
//    +16h, só para a tabela de 3 colunas não ficar vazia) — não são dados
//    reais da HST Plus.
// 2. Os campos "intro" e "objectives" (usados na página de detalhe de cada
//    curso) são texto genérico gerado por categoria, não texto redigido pela
//    HST Plus especificamente para cada curso. Servem para o layout da
//    página de detalhe não ficar vazio — revejam e substituam antes de
//    publicar.

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const categoryIntros = {
  'Gestão Estratégica e Metodologias (Qualidade & Processos)': (name) =>
    `O curso de ${name} prepara os participantes para aplicar esta metodologia no dia-a-dia da organização, com foco na melhoria contínua dos processos e no cumprimento dos padrões de qualidade exigidos pelo sector.`,
  'Prevenção, Diagnóstico e Resposta a Emergências': (name) =>
    `Este curso capacita os participantes a reconhecer riscos, agir com rapidez e reduzir o impacto de situações de emergência relacionadas com ${name.toLowerCase()}, seguindo procedimentos reconhecidos internacionalmente.`,
  'Segurança Técnica em Trabalhos de Alto Risco': (name) =>
    `Formação técnica especializada em ${name}, orientada para colaboradores que operam em ambientes de alto risco, com forte componente prática e foco absoluto em segurança.`,
  'Operação de Equipamentos e Máquinas Pesadas': (name) =>
    `Curso prático de ${name}, que garante que o operador fica apto a manusear o equipamento com segurança, eficiência e em conformidade com as normas aplicáveis.`,
  'Estruturas, Elevação e Montagem': (name) =>
    `Formação técnica sobre ${name}, essencial para garantir a integridade estrutural e a segurança de todos os envolvidos em operações de elevação e montagem.`,
};

const categoryObjectives = {
  'Gestão Estratégica e Metodologias (Qualidade & Processos)': [
    'Compreender os fundamentos e a importância da metodologia para a organização',
    'Aplicar as ferramentas e etapas do processo no contexto de trabalho real',
    'Identificar oportunidades de melhoria contínua',
    'Envolver a equipa na implementação e sustentação da metodologia',
  ],
  'Prevenção, Diagnóstico e Resposta a Emergências': [
    'Identificar os principais riscos e sinais de alerta',
    'Conhecer os procedimentos correctos de resposta a emergências',
    'Aplicar técnicas de primeira intervenção com segurança',
    'Reduzir o tempo de resposta e o impacto de incidentes',
  ],
  'Segurança Técnica em Trabalhos de Alto Risco': [
    'Conhecer a legislação e as normas de segurança aplicáveis',
    'Identificar e mitigar riscos específicos da actividade',
    'Utilizar correctamente os equipamentos de protecção exigidos',
    'Actuar em conformidade com os procedimentos de segurança da HST Plus',
  ],
  'Operação de Equipamentos e Máquinas Pesadas': [
    'Operar o equipamento com segurança e eficiência',
    'Realizar verificações e inspecções pré-operacionais',
    'Reconhecer os limites operacionais e situações de risco',
    'Cumprir os procedimentos de manutenção básica e reporte de avarias',
  ],
  'Estruturas, Elevação e Montagem': [
    'Aplicar as técnicas correctas de montagem e inspecção',
    'Verificar a estabilidade e integridade da estrutura',
    'Seguir os procedimentos de segurança para trabalho em altura',
    'Identificar não conformidades antes da utilização da estrutura',
  ],
};

const rawCatalog = [
  {
    category: 'Gestão Estratégica e Metodologias (Qualidade & Processos)',
    courses: [
      { name: 'Metodologia 5S', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Metodologia PDCA', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'SST – Saúde e Segurança no Trabalho (Geral/Consciencialização)', basico: '16h', medio: '24h', avancado: '32h' },
      { name: 'Gestão de Risco', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Gestão de Fadiga e Stress', basico: '08h', medio: '16h', avancado: '24h' },
    ],
  },
  {
    category: 'Prevenção, Diagnóstico e Resposta a Emergências',
    courses: [
      { name: 'Primeiros Socorros', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Prevenção e Combate a Incêndios', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Procedimentos de Evacuação de Emergência', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Investigação de Acidentes de Trabalho (Análise pós-evento)', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'HIRA – Hazard Identification and Risk Analysis', basico: '16h', medio: '24h', avancado: '32h' },
      { name: 'Condições Inseguras + CheckList', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Análise e Causa Raiz', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'HST – Higiene e Segurança no Trabalho', basico: '16h', medio: '24h', avancado: '32h' },
      { name: 'Gestão de PPE (Equipamentos de Proteção Individual)', basico: '08h', medio: '16h', avancado: '24h' },
    ],
  },
  {
    category: 'Segurança Técnica em Trabalhos de Alto Risco',
    courses: [
      { name: 'Segurança em Trabalhos em Altura', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Trabalhos em Espaços Confinados', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Resgate em Altura e em Espaços Confinados', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Procedimento em Lockout and Tagout (LOTO)', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Uso de GasMeter + ATEX (Atmosferas Explosivas)', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Dangerous Goods (Cargas Perigosas)', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Rigger (Sinaleiro/Amarrador de Cargas)', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Uso de Ferramentas Manuais Eléctricas', basico: '08h', medio: '16h', avancado: '24h' },
    ],
  },
  {
    category: 'Operação de Equipamentos e Máquinas Pesadas',
    courses: [
      { name: 'Manuseio de Empilhadeira', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Manuseio de Camião Munck', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Manuseio de Guindaste', basico: '16h', medio: '24h', avancado: '32h' },
      { name: 'Manuseio de Ponte Rolante', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Manuseio de Plataforma Elevatória', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Direção Defensiva e Preventiva', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Manuseio de Empilhadeira / Mini-Empilhadeira', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Manuseio de Guindaste / Mini-Guindaste', basico: '08h', medio: '16h', avancado: '24h' },
    ],
  },
  {
    category: 'Estruturas, Elevação e Montagem',
    courses: [
      { name: 'Flag Man (Sinalizador de Trânsito/Manobras)', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Montagem e Inspeção de Andaime', basico: '16h', medio: '24h', avancado: '32h' },
      { name: 'Supervisão de Andaime', basico: '08h', medio: '16h', avancado: '24h' },
      { name: 'Içamento de Cargas', basico: '08h', medio: '16h', avancado: '24h' },
    ],
  },
];

export const courseCatalog = rawCatalog.map((cat) => ({
  ...cat,
  courses: cat.courses.map((c) => ({
    ...c,
    slug: slugify(c.name),
    category: cat.category,
    intro: categoryIntros[cat.category](c.name),
    objectives: categoryObjectives[cat.category],
  })),
}));

export const totalCourses = courseCatalog.reduce((acc, c) => acc + c.courses.length, 0);

/** Lista plana de todos os cursos, cada um já com a sua categoria. */
export const allCourses = courseCatalog.flatMap((cat) => cat.courses);

/** Procura um curso pelo slug (usado na página de detalhe /formacoes/:slug). */
export function findCourseBySlug(slug) {
  return allCourses.find((c) => c.slug === slug) || null;
}
