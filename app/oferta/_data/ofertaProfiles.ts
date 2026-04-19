export type ProfileKey = 'recomeco' | 'emagrecimento' | 'evolucao';

/* ── Image helpers ────────────────────────── */
const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ── Pain item ────────────────────────────── */
export type PainItem = { title: string; sub: string };

/* ── Transformation stat ─────────────────── */
export type TransformationStat = { label: string; before: string; after: string };

/* ── Transformation ──────────────────────── */
export type Transformation = {
  name: string;
  age: number;
  city: string;
  weeks: string;
  beforeQuote: string;
  afterQuote: string;
  stats: TransformationStat[];
};

/* ── FAQ ──────────────────────────────────── */
export type FaqItem = { q: string; a: string };

/* ── Profile images ──────────────────────── */
export type ProfileImages = {
  hero: string;
  before: string;
  after: string;
};

/* ── Full profile ────────────────────────── */
export type ProfileContent = {
  shortLabel: string;
  angle: string;
  promise: string;
  highlight: string;
  painTitle: string;
  pains: PainItem[];
  before: string;
  after: string;
  beforeMood: string;
  afterMood: string;
  transformation: Transformation;
  images: ProfileImages;
  audience: string[];
  audienceCount: number;
  slotsLeft: number;
  faqs: FaqItem[];
};

export const defaultProfileKey: ProfileKey = 'emagrecimento';

export const offerProfiles: Record<ProfileKey, ProfileContent> = {
  recomeco: {
    shortLabel: 'Recomeçador',
    angle: 'Seu perfil mostra que o problema não é falta de vontade. É falta de um caminho claro para continuar.',
    promise: 'Quando o plano cabe na sua realidade, treinar deixa de parecer obrigação e começa a ser possível de manter.',
    highlight: 'Menos culpa. Menos confusão. Mais clareza para voltar a agir de verdade.',
    painTitle: 'Você já viveu isso. Várias vezes.',
    pains: [
      { title: 'Começa na segunda.', sub: 'Trava na quarta. Some na sexta.' },
      { title: 'Guarda PDFs, salva vídeos.', sub: 'Nenhum vira rotina real.' },
      { title: 'Volta ao zero.', sub: 'Sempre no mesmo ponto, há anos.' },
    ],
    before: 'Começa animado. Trava no meio. Sente que está sempre voltando à estaca zero.',
    after: 'Treina com clareza. Encaixa na rotina. Constância vira algo real.',
    beforeMood: 'Semana 2. Mesma parede.',
    afterMood: 'Semana 6. Outro trilho.',
    transformation: {
      name: 'Lucas R.', age: 34, city: 'Curitiba · PR',
      weeks: '8 semanas',
      beforeQuote: 'Achava que era falta de disciplina. Em 2 anos recomecei umas 11 vezes.',
      afterQuote: 'Pela primeira vez não travei na semana 2. O plano se ajusta quando a semana aperta.',
      stats: [
        { label: 'treinos/mês', before: '3', after: '14' },
        { label: 'semanas sem travar', before: '1,5', after: '7+' },
      ],
    },
    images: {
      hero: '/images/DEPOIS.png',
      before: '/images/ANTES.png',
      after: '/images/DEPOIS.png',
    },
    audience: [
      'Recomeçando depois de meses (ou anos) parado',
      'Precisa de estrutura, não de motivação',
      'Encaixa treino na rotina real — não na ideal',
    ],
    audienceCount: 847,
    slotsLeft: 34,
    faqs: [
      { q: 'Serve pra quem está totalmente fora do ritmo?', a: 'Sim. É o perfil que mais se beneficia: menos dúvida, menos atrito, mais chance de continuar.' },
      { q: 'Preciso de academia ou equipamento?', a: 'Não. O plano se ajusta à sua realidade — casa, academia, ou um híbrido.' },
      { q: 'E se eu travar de novo?', a: 'O sistema prevê travas. O ponto não é não travar — é ter um caminho pra voltar sem recomeçar do zero.' },
    ],
  },

  emagrecimento: {
    shortLabel: 'Emagrecimento',
    angle: 'Seu perfil mostra que você evolui melhor quando para de tentar no escuro e passa a seguir uma estrutura.',
    promise: 'Quando você sabe o que fazer, o resultado deixa de parecer distante e começa a ficar possível.',
    highlight: 'Mais organização, mais constância e mais chance real de ver resultado.',
    painTitle: 'Esforço sem direção não vira resultado.',
    pains: [
      { title: 'Tenta de tudo.', sub: 'Dieta, treino, app novo a cada mês.' },
      { title: 'Se cobra pesado.', sub: 'E mesmo assim sente que não sai do lugar.' },
      { title: 'A balança não responde.', sub: 'Porque o esforço não tem direção.' },
    ],
    before: 'Muita tentativa, muita informação, pouco direcionamento. Esforço sem progresso claro.',
    after: 'Mais estrutura, mais clareza no treino e uma rotina mais consistente pra ver o corpo evoluir.',
    beforeMood: '6 semanas. Mesma balança.',
    afterMood: 'Mesmo esforço. Resultado diferente.',
    transformation: {
      name: 'Diego M.', age: 32, city: 'São Paulo · SP',
      weeks: '10 semanas',
      beforeQuote: 'Tentei de tudo. Dieta, app, personal online. Nada encaixava na minha semana real.',
      afterQuote: 'A diferença é o plano entender que eu tenho família, trabalho, imprevisto. Não fui eu que mudei — foi o método.',
      stats: [
        { label: 'aderência semanal', before: '40%', after: '88%' },
        { label: 'medidas reduzidas', before: '—', after: '−7cm' },
      ],
    },
    images: {
      hero: '/images/DEPOIS.png',
      before: '/images/ANTES.png',
      after: '/images/DEPOIS.png',
    },
    audience: [
      'Quer emagrecer com uma estrutura clara',
      'Não quer mais perder tempo montando tudo sozinho',
      'Precisa de um plano que se ajuste à rotina real',
    ],
    audienceCount: 1204,
    slotsLeft: 28,
    faqs: [
      { q: 'Isso é pra quem quer emagrecer e definir?', a: 'Sim. O perfil atende quem precisa de clareza, constância e organização pra evoluir.' },
      { q: 'Preciso treinar todos os dias?', a: 'Não. A lógica é facilitar consistência, não criar uma meta impossível de manter.' },
      { q: 'E se eu me esforço mas não sei se estou fazendo certo?', a: 'É exatamente isso que o sistema resolve: troca esforço solto por um caminho orientado.' },
    ],
  },

  evolucao: {
    shortLabel: 'Evolução',
    angle: 'Seu perfil mostra que o próximo nível depende menos de motivação e mais de um sistema claro.',
    promise: 'O Forja Fit transforma esforço solto em rotina inteligente, organizada e consistente.',
    highlight: 'Seu treino ganha direção, seu esforço rende mais e sua evolução deixa de depender da sorte.',
    painTitle: 'Treino constante não é treino com direção.',
    pains: [
      { title: 'Treina, mas improvisa.', sub: 'Segue sentimento, não método.' },
      { title: 'Se esforça, mas estagna.', sub: 'Sem forma clara de medir progresso.' },
      { title: 'Falta progressão real.', sub: 'Não porque treina pouco — treina errado.' },
    ],
    before: 'Treina, mas improvisa. Se esforça, mas nem sempre mede progresso com clareza.',
    after: 'Ganha direção, progressão e uma rotina muito mais consistente pra evoluir de verdade.',
    beforeMood: '12 meses. Mesmo peso na barra.',
    afterMood: 'Mesma semana. Progresso medido.',
    transformation: {
      name: 'Rafael M.', age: 31, city: 'Belo Horizonte · MG',
      weeks: '12 semanas',
      beforeQuote: 'Treinava 5x por semana e sentia que andava em círculo. Sem forma de medir progresso.',
      afterQuote: 'Em 3 semanas já tava treinando com mais método do que nos últimos 4 meses.',
      stats: [
        { label: 'carga agachamento', before: '80kg', after: '110kg' },
        { label: 'progresso medido', before: 'nenhum', after: 'semanal' },
      ],
    },
    images: {
      hero: '/images/DEPOIS.png',
      before: '/images/ANTES.png',
      after: '/images/DEPOIS.png',
    },
    audience: [
      'Quer evoluir com mais método e menos improviso',
      'Já tenta treinar, mas sente falta de direção',
      'Quer um plano estruturado pra crescer com consistência',
    ],
    audienceCount: 612,
    slotsLeft: 19,
    faqs: [
      { q: 'É bom pra quem quer ganhar massa muscular?', a: 'Sim. O perfil foi pensado pra quem responde melhor a uma estrutura progressiva.' },
      { q: 'Treino e sinto que estou estagnado. Faz sentido?', a: 'Faz. Muitas vezes o problema não é esforço — é falta de direção.' },
      { q: 'Preciso ser avançado?', a: 'Não. Você só precisa querer um caminho mais claro e fácil de seguir.' },
    ],
  },
};

/* ── Testimonial avatars ─────────────────── */
export const TESTIMONIAL_AVATARS: Record<string, string> = {
  lucas: '/images/Lucas.jpeg',
  camila: '/images/Camila.jpeg',
  diego: '/images/Lucas.jpeg',
  rafael: '/images/Rafael.jpeg',
  marina: '/images/Marina.jpeg',
};

/* ── Testimonials ────────────────────────── */
export const TESTIMONIALS = [
  { name: 'Lucas R.', time: '14:32', text: 'Pela primeira vez não travei na semana 2.', day: 'hoje' },
  { name: 'Camila S.', time: '09:17', text: 'Achei que era falta de disciplina. Era falta de plano.', day: 'hoje' },
  { name: 'Rafael M.', time: '20:45', text: 'Em 3 semanas já tô treinando mais do que nos últimos 4 meses.', day: 'ontem' },
  { name: 'Marina B.', time: '07:02', text: 'A diferença é que desta vez eu sei o próximo passo.', day: 'ontem' },
];

/* ── Mechanism (ECR) ─────────────────────── */
export const MECHANISM = {
  short: 'Método ECR',
  full: 'Entrada Certa Responsiva',
  line: 'O único sistema que começa pelo seu ponto real — não pelo ponto ideal do manual.',
  steps: [
    { code: 'E', label: 'Entrada', desc: 'Lê onde você está hoje. Sem romance, sem culpa.' },
    { code: 'C', label: 'Certa', desc: 'Ajusta carga, volume e frequência ao seu momento real.' },
    { code: 'R', label: 'Responsiva', desc: 'Recalibra semana a semana — o plano responde a você.' },
  ],
};

/* ── Normalize helper ────────────────────── */
export function normalizeProfileKey(
  value: string | null | undefined
): ProfileKey {
  if (value === 'recomeco' || value === 'emagrecimento' || value === 'evolucao') {
    return value;
  }
  return defaultProfileKey;
}
