# Forja Fit — Oferta Experience Spec

## Objetivo
Transformar a página /oferta em uma experiência premium, imersiva e persuasiva, com narrativa visual por scroll, sem perder clareza comercial e conversão.

## Ideia central
A página deve fazer o usuário sentir que:
“o problema não era falta de disciplina; era ter recomeçado do jeito errado.”

## Conceito visual principal
A experiência gira em torno de um eixo central chamado:

Eixo de Retomada

Esse eixo representa o alinhamento entre:
- objetivo real
- nível atual
- rotina possível

No início da experiência, esses 3 elementos aparecem desalinhados, distantes ou em conflito.
Conforme o usuário scrolla, eles entram no eixo.
A sensação final deve ser:
- menos confusão
- mais clareza
- mais direção
- começo certo
- progresso possível

## Sensação desejada
- escuro
- sofisticado
- minimalista
- preciso
- profundo
- premium
- sem cara de template fitness
- sem poluição visual

## Regra principal
A experiência visual nunca pode ser só decorativa.
Toda animação precisa reforçar a mensagem da copy.

## Estrutura da página

### 1. Hero imersivo
Objetivo:
- conexão imediata
- tese forte
- CTA claro
- introdução do eixo de retomada

Elementos:
- eyebrow
- headline
- subheadline
- CTA principal
- visual central do eixo
- 3 elementos orbitando ou se aproximando do centro:
  - objetivo
  - nível
  - rotina

Sensação:
“esse site entende exatamente por que eu travo”

### 2. Narrativa por scroll
Objetivo:
criar uma mini jornada visual e emocional em 4 momentos

Etapas:
1. culpa / frustração
2. diagnóstico do erro
3. alinhamento das variáveis
4. começo certo gerando resultado

Essa seção deve usar animação guiada por scroll com narrativa clara.

### 3. Mecanismo visual da oferta
Objetivo:
mostrar o Mapa de Progressão Inicial Forja Fit como sistema e não como lista estática

Lógica visual:
- objetivo entra
- nível entra
- rotina entra
- os 3 se conectam
- o caminho fica claro

### 4. Bloco comercial
Depois da experiência visual, a página entra na parte de conversão:
- para quem é
- o que a pessoa leva
- benefícios
- transformação
- CTA
- preço
- garantia

## Regras de animação
- suaves
- profissionais
- premium
- sem exagero
- com propósito
- usar profundidade, blur, opacidade, deslocamento, scale e pinning com inteligência
- evitar animação gratuita
- evitar excesso de movimento no mobile

## Regras técnicas
- usar Next.js
- usar Tailwind
- usar Motion para animações mais leves e responsivas
- usar GSAP ScrollTrigger apenas onde pin e scrub realmente forem necessários
- fallback leve no mobile
- performance é prioridade
- código modular e reutilizável

## Arquitetura desejada
A página /oferta deve ser dividida em componentes.

Sugestão de componentes:
- OfferHeroImmersive
- RetomadaAxisScene
- OfferNarrativeScroll
- ProgressionMechanismReveal
- OfferConversionSection
- OfferDecisionBlock

## Regras de copy
- evitar texto institucional
- evitar exagero fitness
- evitar promessa mágica
- reforçar que o erro era o começo desalinhado
- mostrar que a solução é direção antes de intensidade
- manter tom humano, direto e específico

## Regra de implementação
Não refatorar tudo de uma vez.
Implementar em fases.

## Fases recomendadas
### Fase 1
Definir arquitetura da nova /oferta e separar a página em componentes.

### Fase 2
Construir o novo hero imersivo com eixo de retomada.

### Fase 3
Construir a seção narrativa por scroll.

### Fase 4
Construir o reveal visual do mecanismo.

### Fase 5
Reorganizar a parte comercial final com foco em conversão.

## Restrições
- não copiar o visual literal de nenhum site
- não usar efeitos sem função
- não transformar a página em peça artística sem venda
- não quebrar CTA, tracking ou responsividade