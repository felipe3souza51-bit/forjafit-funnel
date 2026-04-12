export type ProfileKey = 'recomeco' | 'emagrecimento' | 'evolucao';

export type ProfileContent = {
  shortLabel: string;
  angle: string;
  promise: string;
  highlight: string;
  audience: string[];
  transformationTitle: string;
  transformationText: string;
  beforeLabel: string;
  beforeText: string;
  afterLabel: string;
  afterText: string;
  faqs: { q: string; a: string }[];
};

export const defaultProfileKey: ProfileKey = 'emagrecimento';

export const offerProfiles: Record<ProfileKey, ProfileContent> = {
  recomeco: {
    shortLabel: 'Recomeço com constância',
    angle:
      'Seu perfil mostra que o problema não é falta de vontade. É falta de um caminho claro para continuar.',
    promise:
      'Quando o plano cabe na sua realidade, treinar deixa de parecer uma obrigação pesada e começa a se tornar algo possível de manter.',
    highlight:
      'Menos culpa. Menos confusão. Mais clareza para voltar a agir de verdade.',
    audience: [
      'Para quem está recomeçando e precisa de um plano mais simples de seguir',
      'Para quem quer sair da estagnação sem depender de motivação perfeita',
      'Para quem precisa encaixar o treino na vida real com mais leveza',
    ],
    transformationTitle:
      'O Forja Fit transforma o recomeço em uma rotina possível de seguir.',
    transformationText:
      'A proposta não é te pressionar com promessas irreais. É te dar estrutura para recuperar consistência, reduzir atrito e sentir evolução com mais clareza.',
    beforeLabel: 'ANTES',
    beforeText:
      'Começa animado, trava no meio, perde ritmo e sente que está sempre voltando à estaca zero.',
    afterLabel: 'DEPOIS',
    afterText:
      'Treina com mais clareza, encaixa melhor na rotina e começa a sentir constância como algo real.',
    faqs: [
      {
        q: 'Isso serve para quem está recomeçando do zero?',
        a: 'Sim. Esse é justamente um dos perfis que mais se beneficiam de uma estrutura pronta: menos dúvida, menos atrito e mais chance de continuar.',
      },
      {
        q: 'Preciso ter academia ou equipamentos?',
        a: 'Não obrigatoriamente. A proposta é ter praticidade e flexibilidade, inclusive com opções mais compatíveis com a sua realidade.',
      },
      {
        q: 'E se eu estiver sem constância há muito tempo?',
        a: 'Esse é exatamente o ponto da recomendação: sair do improviso e ter um plano mais simples de seguir pode facilitar muito a retomada.',
      },
    ],
  },
  emagrecimento: {
    shortLabel: 'Emagrecimento com direção',
    angle:
      'Seu perfil mostra que você tende a evoluir melhor quando para de tentar no escuro e começa a seguir uma estrutura.',
    promise:
      'Quando você sabe exatamente o que fazer, o resultado deixa de parecer distante e começa a ficar muito mais possível.',
    highlight:
      'Mais organização, mais constância e mais chance real de ver resultado sem viver pulando de estratégia em estratégia.',
    audience: [
      'Para quem quer emagrecer com uma estrutura mais clara e prática',
      'Para quem quer treinar sem perder tempo montando tudo sozinho',
      'Para quem precisa de um plano mais ajustável à rotina real',
    ],
    transformationTitle:
      'O Forja Fit transforma intenção em direção — e direção em resultado possível.',
    transformationText:
      'A ideia não é te entregar mais conteúdo solto. É te colocar em movimento com um plano que organiza seu esforço, melhora sua consistência e aproxima seu corpo do resultado que você quer ver.',
    beforeLabel: 'ANTES',
    beforeText:
      'Muita tentativa, muita informação, pouco direcionamento e sensação de esforço sem progresso claro.',
    afterLabel: 'DEPOIS',
    afterText:
      'Mais estrutura, mais clareza no treino e uma rotina mais consistente para ver o corpo evoluir.',
    faqs: [
      {
        q: 'Isso é indicado para quem quer emagrecer e definir?',
        a: 'Sim. Esse perfil atende justamente quem precisa de mais clareza, constância e organização para evoluir melhor.',
      },
      {
        q: 'Preciso treinar todos os dias para fazer sentido?',
        a: 'Não. A lógica aqui é facilitar consistência e execução dentro da sua rotina, não criar uma meta impossível de manter.',
      },
      {
        q: 'Isso ajuda quem sente que se esforça, mas não sabe se está fazendo o certo?',
        a: 'Sim. Um dos principais ganhos é trocar esforço solto por um caminho mais claro e orientado.',
      },
    ],
  },
  evolucao: {
    shortLabel: 'Evolução com estrutura',
    angle:
      'Seu perfil mostra que o seu próximo nível depende menos de motivação e mais de um sistema claro para evoluir.',
    promise:
      'O Forja Fit transforma esforço solto em uma rotina mais inteligente, organizada e muito mais consistente.',
    highlight:
      'Com o Forja Fit, seu treino ganha direção, seu esforço rende mais e sua evolução deixa de depender da sorte.',
    audience: [
      'Para quem quer evoluir com mais método e menos improviso',
      'Para quem já tenta treinar, mas sente que falta direção',
      'Para quem quer um plano mais estruturado para crescer com mais consistência',
    ],
    transformationTitle:
      'O Forja Fit transforma treino solto em evolução visível com mais método.',
    transformationText:
      'Você não precisa de mais caos, mais vídeos aleatórios ou mais tentativa desorganizada. Precisa de estrutura para fazer seu esforço render mais e sua rotina evoluir melhor.',
    beforeLabel: 'ANTES',
    beforeText:
      'Treina, mas improvisa. Se esforça, mas nem sempre consegue medir progresso com clareza.',
    afterLabel: 'DEPOIS',
    afterText:
      'Ganha direção, progressão e uma rotina muito mais consistente para evoluir de forma real.',
    faqs: [
      {
        q: 'Isso é bom para quem quer ganhar massa muscular?',
        a: 'Sim. Esse perfil foi pensado justamente para quem responde melhor a uma estrutura mais progressiva e organizada.',
      },
      {
        q: 'Já treino, mas sinto que estou estagnado. Ainda faz sentido?',
        a: 'Faz. Muitas vezes o problema não é esforço, e sim falta de direção. É isso que essa proposta tenta resolver.',
      },
      {
        q: 'Preciso ser avançado para aproveitar?',
        a: 'Não. Você só precisa querer um caminho mais claro, estruturado e fácil de seguir com mais consistência.',
      },
    ],
  },
};

export function normalizeProfileKey(
  value: string | null | undefined
): ProfileKey {
  if (value === 'recomeco' || value === 'emagrecimento' || value === 'evolucao') {
    return value;
  }

  return defaultProfileKey;
}
