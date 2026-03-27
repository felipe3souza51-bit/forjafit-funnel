export type QuizOption = {
  value: string;
  label: string;
  hint?: string;
};

export type QuizQuestion = {
  id: string;
  title: string;
  subtitle: string;
  options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'goal',
    title: 'Qual é o seu objetivo principal agora?',
    subtitle: 'Escolha o foco que mais combina com a fase em que você está.',
    options: [
      { value: 'emagrecer', label: 'Emagrecer', hint: 'Perder gordura e ganhar ritmo' },
      { value: 'definir', label: 'Definir o corpo', hint: 'Treino com mais constância e forma' },
      { value: 'condicionamento', label: 'Ganhar condicionamento', hint: 'Mais energia e resistência' },
      { value: 'retomar', label: 'Voltar a treinar', hint: 'Recomeçar do jeito certo' }
    ]
  },
  {
    id: 'place',
    title: 'Onde você pretende treinar na maior parte do tempo?',
    subtitle: 'Isso ajuda a indicar o formato mais prático para sua rotina.',
    options: [
      { value: 'casa', label: 'Em casa', hint: 'Sem depender de academia' },
      { value: 'academia', label: 'Na academia', hint: 'Com fichas prontas para seguir' },
      { value: 'hibrido', label: 'Casa e academia', hint: 'Mais flexibilidade na semana' }
    ]
  },
  {
    id: 'level',
    title: 'Como você avalia seu nível atual?',
    subtitle: 'Sem pressão: o plano ideal começa do seu ponto real.',
    options: [
      { value: 'iniciante', label: 'Iniciante', hint: 'Não sei bem por onde começar' },
      { value: 'intermediario', label: 'Intermediário', hint: 'Já treino às vezes, mas sem padrão' },
      { value: 'retornando', label: 'Estou voltando', hint: 'Já treinei, mas perdi constância' }
    ]
  },
  {
    id: 'frequency',
    title: 'Quantos dias por semana você quer conseguir treinar?',
    subtitle: 'A ideia é montar algo possível de cumprir, não perfeito no papel.',
    options: [
      { value: '2-3', label: '2 a 3 dias', hint: 'Encaixe simples na rotina' },
      { value: '4-5', label: '4 a 5 dias', hint: 'Quero acelerar meu progresso' },
      { value: '6+', label: '6 dias ou mais', hint: 'Quero máxima disciplina' }
    ]
  },
  {
    id: 'time',
    title: 'Quanto tempo você consegue dedicar por dia?',
    subtitle: 'Treino bom precisa caber no seu dia de verdade.',
    options: [
      { value: '15-20', label: '15 a 20 minutos', hint: 'Sessões curtas e objetivas' },
      { value: '20-30', label: '20 a 30 minutos', hint: 'Equilíbrio ideal' },
      { value: '40+', label: '40 minutos ou mais', hint: 'Mais tempo para evoluir' }
    ]
  },
  {
    id: 'difficulty',
    title: 'Qual é sua principal dificuldade hoje?',
    subtitle: 'Essa resposta define o tipo de estrutura que mais ajuda você.',
    options: [
      { value: 'nao-sei', label: 'Não sei o que treinar', hint: 'Falta direção' },
      { value: 'constancia', label: 'Não consigo manter constância', hint: 'Começo e paro' },
      { value: 'tempo', label: 'Tenho pouco tempo', hint: 'Rotina apertada' },
      { value: 'motivacao', label: 'Perco a motivação rápido', hint: 'Preciso de um plano mais claro' }
    ]
  },
  {
    id: 'bodyProfile',
    title: 'Qual perfil combina mais com sua meta?',
    subtitle: 'Não é sobre padrão, e sim sobre o resultado que você quer buscar.',
    options: [
      { value: 'secar', label: 'Secar e ficar mais leve', hint: 'Mais definição e agilidade' },
      { value: 'tonificar', label: 'Tonificar e definir', hint: 'Shape mais firme' },
      { value: 'energia', label: 'Ter mais disposição', hint: 'Bem-estar e condicionamento' },
      { value: 'consistencia', label: 'Criar uma rotina consistente', hint: 'Hábito antes de tudo' }
    ]
  },
  {
    id: 'motivation',
    title: 'O que mais te motivaria a seguir um plano até o fim?',
    subtitle: 'Sua resposta ajuda a ajustar a forma de apresentação da oferta.',
    options: [
      { value: 'visual', label: 'Ver evolução no corpo', hint: 'Sentir diferença no espelho' },
      { value: 'energia', label: 'Ter mais energia no dia', hint: 'Menos cansaço na rotina' },
      { value: 'praticidade', label: 'Ter tudo pronto para seguir', hint: 'Sem pensar demais' },
      { value: 'confianca', label: 'Voltar a me sentir confiante', hint: 'Mais autoestima' }
    ]
  }
];
