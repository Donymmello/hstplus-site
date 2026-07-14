// Catálogo de formações extraído da planilha "Para_designer1.xlsx"
//
// ⚠️ ATENÇÃO: o ficheiro original só tinha "Básico" e "Reciclagem" por curso.
// Os valores de "medio" e "avancado" abaixo são temporários (calculados como
// básico +8h e +16h, só para o layout de 3 colunas não ficar vazio) — não são
// dados reais da HST Plus. Substituir pelos valores certos antes de publicar.
export const courseCatalog = [
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

export const totalCourses = courseCatalog.reduce((acc, c) => acc + c.courses.length, 0);
