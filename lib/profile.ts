import { QuizAnswers } from './types';
import { UserProfile } from './types';

function getGoalText(goal?: string) {
  switch (goal) {
    case 'emagrecer':
      return 'enxugar medidas e criar ritmo';
    case 'definir':
      return 'definir o corpo com mais consistência';
    case 'condicionamento':
      return 'ganhar condicionamento e disposição';
    case 'retomar':
      return 'retomar o treino sem complicação';
    default:
      return 'voltar a treinar com direção';
  }
}

function getPlaceText(place?: string) {
  switch (place) {
    case 'casa':
      return 'em casa';
    case 'academia':
      return 'na academia';
    case 'hibrido':
      return 'entre casa e academia';
    default:
      return 'na sua rotina';
  }
}

function getBlocker(difficulty?: string) {
  switch (difficulty) {
    case 'nao-sei':
      return 'Hoje seu maior bloqueio é falta de direção. Sem um plano claro, cada treino vira improviso e isso atrapalha a consistência.';
    case 'constancia':
      return 'Hoje seu maior bloqueio é manter ritmo. Quando o treino parece complicado demais, fica mais fácil parar do que continuar.';
    case 'tempo':
      return 'Hoje seu maior bloqueio é encaixar o treino na rotina. Você precisa de algo direto, com começo fácil e execução objetiva.';
    case 'motivacao':
      return 'Hoje seu maior bloqueio é motivação instável. Um plano simples, visível e organizado reduz atrito e ajuda você a seguir.';
    default:
      return 'Seu maior bloqueio é a falta de uma estrutura simples para transformar intenção em constância.';
  }
}

export function buildUserProfile(answers: QuizAnswers): UserProfile {
  const goalText = getGoalText(answers.goal);
  const placeText = getPlaceText(answers.place);
  const beginner = answers.level === 'iniciante' || answers.level === 'retornando';
  const shortTime = answers.time === '15-20' || answers.time === '20-30';
  const title = `Seu perfil indica o caminho mais simples para ${goalText} ${placeText}.`;
  const subtitle = beginner
    ? `Pelo que você respondeu, o melhor cenário para você é seguir um protocolo progressivo, fácil de executar e sem depender de tentativa e erro.`
    : `Seu melhor caminho agora é usar uma estrutura pronta para ganhar consistência e evoluir sem perder tempo montando treino.`;

  const planName = shortTime
    ? 'Plano Direto e Consistente'
    : 'Plano Estruturado de Evolução';

  const cta = shortTime
    ? 'Ver meu plano recomendado agora'
    : 'Liberar minha recomendação completa';

  return {
    title,
    subtitle,
    blocker: getBlocker(answers.difficulty),
    planName,
    cta,
    bullets: [
      `Formato ideal para treinar ${placeText}`,
      beginner ? 'Progressão pensada para quem está começando ou voltando' : 'Estrutura pronta para evoluir com mais constância',
      shortTime ? 'Execução prática mesmo com rotina corrida' : 'Mais clareza para aproveitar melhor seu tempo de treino',
      `Foco principal: ${goalText}`
    ],
    salesHeadline: `Seu próximo passo é parar de improvisar e seguir um plano prático para ${goalText}.`,
    salesIntro: `Com base no seu perfil, a oferta faz mais sentido quando entrega clareza, facilidade e um caminho simples para manter constância ${placeText}.`
  };
}
