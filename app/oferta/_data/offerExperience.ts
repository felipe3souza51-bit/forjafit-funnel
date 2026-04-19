import type { ProfileContent } from './ofertaProfiles';

type HeroSystemSignal = {
  label: string;
  title: string;
  text: string;
};

type NarrativeStep = {
  step: string;
  phase: string;
  signal: string;
  title: string;
  summary: string;
  state: 'culpa' | 'diagnostico' | 'alinhamento' | 'comeco';
  description?: string;
  descriptionKey?: keyof Pick<ProfileContent, 'angle' | 'promise' | 'highlight'>;
};

type NarrativePhase = {
  label: string;
  text: string;
};

type MechanismRailItem = {
  label: string;
  title: string;
  text: string;
};

type MechanismItem = {
  label: string;
  title: string;
  text: string;
};

type MechanismOutput = {
  label: string;
  title: string;
  text: string;
};

export const heroContent = {
  eyebrow: 'SEU PRÓXIMO PASSO COM MAIS DIREÇÃO',
  diagnosticLabel: 'Tese central',
  diagnosticText: 'O erro estava no começo, não na sua disciplina.',
  contextLabel: 'Avatar principal',
  contextState: 'Recomeçador frustrado',
  contextSupport:
    'Treino genérico cobra intensidade cedo demais e ignora o seu momento real.',
  title:
    'Como parar de recomeçar do zero e seguir uma progressão mais inteligente para o seu objetivo, seu nível atual e a rotina que você realmente consegue manter',
  subtitle:
    'O problema não é falta de disciplina. Na maioria das vezes, é tentar seguir um treino genérico que não cabe no seu momento. O Forja Fit foi pensado para te colocar no trilho certo antes de cobrar intensidade.',
  mechanismLabel: 'MAPA DE PROGRESSÃO INICIAL FORJA FIT',
  mechanismText:
    'Uma entrada guiada para alinhar objetivo, nível atual e rotina possível antes de te empurrar para mais intensidade ou mais improviso.',
  primaryCta: 'QUERO VER O PLANO CERTO PARA MIM',
  ctaNote:
    'Avance com mais clareza, menos improviso e mais chance de constância.',
};

export const heroSystemSignals: HeroSystemSignal[] = [
  {
    label: 'Objetivo real',
    title: 'O que você quer agora',
    text: 'Secar, definir ou retomar o ritmo com mais coerência.',
  },
  {
    label: 'Nível atual',
    title: 'Onde seu corpo está hoje',
    text: 'Começo sem ego para não travar no meio do caminho.',
  },
  {
    label: 'Rotina possível',
    title: 'O que você consegue sustentar',
    text: 'Casa ou academia sem depender de cenário perfeito.',
  },
];

export const heroMicroProofs = [
  'Objetivo alinhado ao seu momento',
  'Estrutura para casa e academia',
  'Começo mais claro e sustentável',
];

export const axisFactors = [
  {
    label: 'OBJETIVO',
    title: 'Seu momento real',
    text: 'Secar, definir, retomar o ritmo ou sair da estagnação sem pular etapas.',
  },
  {
    label: 'NÍVEL',
    title: 'Começo sem ego',
    text: 'Entrar pelo ponto certo para o corpo que você tem hoje, não para o corpo ideal.',
  },
  {
    label: 'ROTINA',
    title: 'Plano que cabe na sua vida',
    text: 'Casa ou academia com uma estrutura que você realmente consegue sustentar.',
  },
];

export const narrativeContent = {
  eyebrow: 'JORNADA DE RETOMADA',
  title:
    'A retomada fica mais clara quando o erro deixa de parecer pessoal e vira diagnóstico',
  description:
    'Em vez de culpar disciplina, o Forja Fit mostra por que o recomeçador frustrado trava: entra no treino errado, no ritmo errado e com uma cobrança que não cabe na vida real.',
  boardLabel: 'Leitura da jornada',
  boardTitle: 'Quatro estados para sair da culpa e entrar no trilho certo.',
  boardText:
    'A página organiza a mudança em uma sequência simples: reconhecer a dor, diagnosticar o erro, alinhar as variáveis e abrir um começo coerente.',
  highlightLabel: 'Tese da oferta',
  highlightTitle: 'Direção antes de intensidade.',
  highlightSupport:
    'O plano começa organizando o eixo certo para você conseguir sustentar o início.',
};

export const narrativePhases: NarrativePhase[] = [
  {
    label: 'Desalinhamento',
    text: 'Muita tentativa, pouca leitura do momento atual.',
  },
  {
    label: 'Diagnóstico',
    text: 'O erro deixa de parecer falta de disciplina e ganha causa real.',
  },
  {
    label: 'Alinhamento',
    text: 'Objetivo, nível e rotina entram no mesmo eixo.',
  },
  {
    label: 'Começo certo',
    text: 'A constância fica mais provável porque o plano começa cabendo.',
  },
];

export const narrativeSteps: NarrativeStep[] = [
  {
    step: '01',
    phase: 'Culpa',
    signal: 'Peso emocional',
    title: 'Culpa e frustração',
    summary: 'Muita tentativa, pouco controle e sensação de voltar para a estaca zero.',
    state: 'culpa',
    description:
      'Você começa animado, trava no meio e sente que toda tentativa termina com a mesma sensação de recomeço.',
  },
  {
    step: '02',
    phase: 'Diagnóstico',
    signal: 'Virada de leitura',
    title: 'Diagnóstico do erro',
    summary: 'O problema para de parecer pessoal e passa a ter causa concreta.',
    state: 'diagnostico',
    descriptionKey: 'angle',
  },
  {
    step: '03',
    phase: 'Alinhamento',
    signal: 'Organização',
    title: 'O eixo entra no lugar',
    summary: 'Objetivo, nível e rotina deixam de competir e passam a trabalhar juntos.',
    state: 'alinhamento',
    description:
      'Objetivo, nível atual e rotina possível entram no eixo antes de qualquer cobrança por mais intensidade.',
  },
  {
    step: '04',
    phase: 'Começo certo',
    signal: 'Saída prática',
    title: 'Constância mais possível',
    summary: 'O plano cabe melhor na vida e o progresso deixa de depender de perfeição.',
    state: 'comeco',
    descriptionKey: 'promise',
  },
];

export const mechanismContent = {
  eyebrow: 'MECANISMO VISÍVEL DA OFERTA',
  title:
    'O Mapa de Progressão Inicial organiza o começo antes de cobrar intensidade',
  description:
    'Em vez de jogar um treino genérico na sua frente, o Forja Fit lê as variáveis certas, estabiliza o eixo e entrega um plano mais coerente para o seu momento.',
  systemLabel: 'Sistema Forja Progressiva',
  systemTitle: 'Fenômeno ECR# — Entrada Certa Responsiva',
  systemStatus:
    'Objetivo, nível e rotina entram no sistema antes do plano pedir mais intensidade.',
  convergenceLabel: 'Convergência',
  convergenceTitle: 'As variáveis deixam de competir e passam a apontar para o mesmo trilho.',
  convergenceText:
    'Quando o começo respeita o seu momento real, a progressão parece viável em vez de pesada.',
  rail: [
    {
      label: 'Entrada 01',
      title: 'Objetivo real',
      text: 'A meta atual define o rumo certo para começar.',
    },
    {
      label: 'Entrada 02',
      title: 'Nível atual',
      text: 'Seu ponto real de partida regula o ritmo da entrada.',
    },
    {
      label: 'Entrada 03',
      title: 'Rotina possível',
      text: 'O plano precisa caber na vida para conseguir durar.',
    },
  ] satisfies MechanismRailItem[],
  inputs: [
    {
      label: 'OBJETIVO',
      title: 'O que você quer agora',
      text: 'A meta atual importa mais do que qualquer treino “universal” da internet.',
    },
    {
      label: 'NÍVEL',
      title: 'Onde você está hoje',
      text: 'Seu ponto real de partida define o ritmo certo para não travar no meio.',
    },
    {
      label: 'ROTINA',
      title: 'O que você consegue manter',
      text: 'Sem rotina possível, até o treino perfeito vira mais uma tentativa interrompida.',
    },
  ] satisfies MechanismItem[],
  flow: [
    {
      label: 'Leitura',
      title: 'Diagnóstico do momento',
      text: 'O sistema entende o seu contexto antes de te pedir mais.',
    },
    {
      label: 'Eixo',
      title: 'Alinhamento das variáveis',
      text: 'Objetivo, nível e rotina deixam de competir entre si.',
    },
    {
      label: 'Plano',
      title: 'Começo sustentável',
      text: 'A entrada fica mais clara, mais possível e mais segura de manter.',
    },
  ] satisfies MechanismItem[],
  outputs: [
    {
      label: 'Saída 01',
      title: 'Clareza para começar',
      text: 'Menos improviso logo na primeira decisão.',
    },
    {
      label: 'Saída 02',
      title: 'Progressão mais coerente',
      text: 'Seu esforço passa a seguir um caminho que faz sentido para o agora.',
    },
    {
      label: 'Saída 03',
      title: 'Mais chance de constância',
      text: 'O plano deixa de depender de motivação perfeita para continuar.',
    },
    {
      label: 'Saída 04',
      title: 'Menos recomeços desnecessários',
      text: 'Você entra no trilho certo antes de cobrar intensidade.',
    },
  ] satisfies MechanismOutput[],
};

export const benefits = [
  {
    title: 'Treinos para casa e academia',
    text: 'Tenha uma estrutura flexível para treinar do jeito que sua rotina permitir, sem depender de um cenário perfeito.',
  },
  {
    title: 'Fichas prontas para seguir',
    text: 'Pare de improvisar e comece com um plano mais claro, objetivo e fácil de executar no dia a dia.',
  },
  {
    title: 'Vídeo-aulas e apoio visual',
    text: 'Entenda melhor a execução e reduza a insegurança na hora de colocar o treino em prática.',
  },
  {
    title: 'Mais direção e constância',
    text: 'Saia do esforço solto e entre em uma rotina mais inteligente, organizada e mais próxima de resultado.',
  },
];

export const deliverables = [
  'Acesso aos treinos organizados por objetivo',
  'Fichas prontas para facilitar sua rotina',
  'Opções para casa e academia',
  'Vídeo-aulas para acompanhar a execução',
  'Materiais extras e bônus complementares',
  'Garantia de 15 dias',
];
