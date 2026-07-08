// Catálogo de formações extraído da planilha "Para_designer1.xlsx"
export const courseCatalog = [
  {
    category: 'Gestão Estratégica e Metodologias (Qualidade & Processos)',
    courses: [
      { name: 'Metodologia 5S', basico: '08h', reciclagem: '06h' },
      { name: 'Metodologia PDCA', basico: '08h', reciclagem: '06h' },
      { name: 'SST – Saúde e Segurança no Trabalho (Geral/Consciencialização)', basico: '16h', reciclagem: '08h' },
      { name: 'Gestão de Risco', basico: '08h', reciclagem: '06h' },
      { name: 'Gestão de Fadiga e Stress', basico: '08h', reciclagem: '06h' },
    ],
  },
  {
    category: 'Prevenção, Diagnóstico e Resposta a Emergências',
    courses: [
      { name: 'Primeiros Socorros', basico: '08h', reciclagem: '06h' },
      { name: 'Prevenção e Combate a Incêndios', basico: '08h', reciclagem: '06h' },
      { name: 'Procedimentos de Evacuação de Emergência', basico: '08h', reciclagem: '06h' },
      { name: 'Investigação de Acidentes de Trabalho (Análise pós-evento)', basico: '08h', reciclagem: '06h' },
      { name: 'HIRA – Hazard Identification and Risk Analysis', basico: '16h', reciclagem: '08h' },
      { name: 'Condições Inseguras + CheckList', basico: '08h', reciclagem: '06h' },
      { name: 'Análise e Causa Raiz', basico: '08h', reciclagem: '06h' },
      { name: 'HST – Higiene e Segurança no Trabalho', basico: '16h', reciclagem: '08h' },
      { name: 'Gestão de PPE (Equipamentos de Proteção Individual)', basico: '08h', reciclagem: '06h' },
    ],
  },
  {
    category: 'Segurança Técnica em Trabalhos de Alto Risco',
    courses: [
      { name: 'Segurança em Trabalhos em Altura', basico: '08h', reciclagem: '06h' },
      { name: 'Trabalhos em Espaços Confinados', basico: '08h', reciclagem: '06h' },
      { name: 'Resgate em Altura e em Espaços Confinados', basico: '08h', reciclagem: '06h' },
      { name: 'Procedimento em Lockout and Tagout (LOTO)', basico: '08h', reciclagem: '06h' },
      { name: 'Uso de GasMeter + ATEX (Atmosferas Explosivas)', basico: '08h', reciclagem: '06h' },
      { name: 'Dangerous Goods (Cargas Perigosas)', basico: '08h', reciclagem: '06h' },
      { name: 'Rigger (Sinaleiro/Amarrador de Cargas)', basico: '08h', reciclagem: '06h' },
      { name: 'Uso de Ferramentas Manuais Eléctricas', basico: '08h', reciclagem: '06h' },
    ],
  },
  {
    category: 'Operação de Equipamentos e Máquinas Pesadas',
    courses: [
      { name: 'Manuseio de Empilhadeira', basico: '08h', reciclagem: '06h' },
      { name: 'Manuseio de Camião Munck', basico: '08h', reciclagem: '06h' },
      { name: 'Manuseio de Guindaste', basico: '16h', reciclagem: '08h' },
      { name: 'Manuseio de Ponte Rolante', basico: '08h', reciclagem: '06h' },
      { name: 'Manuseio de Plataforma Elevatória', basico: '08h', reciclagem: '06h' },
      { name: 'Direção Defensiva e Preventiva', basico: '08h', reciclagem: '06h' },
      { name: 'Manuseio de Empilhadeira / Mini-Empilhadeira', basico: '08h', reciclagem: '06h' },
      { name: 'Manuseio de Guindaste / Mini-Guindaste', basico: '08h', reciclagem: '06h' },
    ],
  },
  {
    category: 'Estruturas, Elevação e Montagem',
    courses: [
      { name: 'Flag Man (Sinalizador de Trânsito/Manobras)', basico: '08h', reciclagem: '06h' },
      { name: 'Montagem e Inspeção de Andaime', basico: '16h', reciclagem: '08h' },
      { name: 'Supervisão de Andaime', basico: '08h', reciclagem: '06h' },
      { name: 'Içamento de Cargas', basico: '08h', reciclagem: '06h' },
    ],
  },
];

export const totalCourses = courseCatalog.reduce((acc, c) => acc + c.courses.length, 0);
