# Forja Fit — CLAUDE.md

## Missão
Transformar a página `/oferta` do Forja Fit em uma experiência premium de convicção + decisão, com alta clareza comercial, forte percepção de valor e execução visual sofisticada, sem perder performance, responsividade ou foco em conversão.

## Verdades fixas do projeto
- Avatar central: recomeçador frustrado
- Tese central: o problema não é falta de disciplina; é começar desalinhado
- Mecanismo visível: Mapa de Progressão Inicial Forja Fit
- Variáveis centrais do mecanismo:
  - objetivo real
  - nível atual
  - rotina possível
- A página precisa vender, não virar arte vazia
- O visual existe para reforçar a mensagem
- CTA, clareza e hierarquia mandam na experiência

## Papel da página /oferta
A `/oferta` não é uma página institucional.
A `/oferta` não é uma VSL genérica.
A `/oferta` é uma página de convicção + decisão.

Ela precisa:
1. instalar a nova crença
2. mostrar o mecanismo
3. gerar percepção de direção e clareza
4. transformar isso em desejo
5. empurrar para checkout

## O que jamais esquecer
A sensação final do usuário deve ser:
“agora eu entendi por que sempre travei — e esse parece ser o jeito certo de recomeçar.”

## Prioridades absolutas
1. Clareza da proposta
2. Dominância da proposta única acima da dobra
3. Hierarquia visual forte
4. CTA visível cedo
5. Mecanismo explicado cedo
6. Layout alinhado
7. Narrativa visual guiada
8. Mobile limpo
9. Performance boa
10. Conversão acima de espetáculo

## Regra central de execução
Nunca melhorar “beleza” sacrificando:
- clareza
- proposta
- CTA
- leitura
- conversão
- performance

## Como trabalhar neste projeto
- Primeiro analisar, depois implementar
- Uma fase por vez
- Não expandir escopo sem ordem explícita
- Sempre propor a menor implementação segura primeiro
- Sempre preservar:
  - tracking
  - checkout
  - lógica de URLs
  - responsividade
- Antes de mexer em motion, garantir:
  - layout alinhado
  - grid consistente
  - composição premium
  - hierarquia clara

## Ordem obrigatória de execução
1. Layout e composição
2. Foundation visual
3. Hero
4. Narrativa estática
5. Mechanism reveal
6. Motion leve
7. GSAP apenas se necessário
8. Polish final
9. QA comercial e técnico

## Regras de copy
- Falar com o recomeçador frustrado
- Evitar linguagem genérica e institucional
- Evitar exagero fitness
- Evitar promessa mágica
- Reforçar:
  - o erro era o começo desalinhado
  - direção antes de intensidade
  - progresso possível
  - plano que cabe na vida
- Sempre que possível, tornar explícito:
  - o que é
  - para quem é
  - por que é diferente
  - qual é o próximo passo

## Regras de design
A interface deve parecer:
- escura
- sofisticada
- precisa
- profunda
- premium funcional
- levemente futurista
- limpa
- forte
- sem cara gamer
- sem cara de template fitness
- sem poluição visual

## Regras de composição
- A proposta única deve dominar a primeira dobra
- O visual nunca pode competir com a headline
- O CTA precisa ser identificado em menos de 1 segundo
- Os mocks nunca podem liderar a cena se estiverem enfraquecendo a proposta
- O hero precisa fechar como uma unidade
- A página precisa ter eixo, ritmo e respiro
- Não criar blocos soltos com estilos bonitos e hierarquia fraca

## Regras de motion
- Motion só entra para reforçar significado
- Nada de movimento decorativo
- Nada de movimento gamer
- Nada de exagero
- Mouse interaction só para profundidade e vida
- Scroll motion só para narrativa
- Mobile sempre com fallback leve
- Preferir transform e opacity
- Respeitar prefers-reduced-motion

## Ferramentas e uso correto
- Tailwind/CSS: layout, grid, spacing, tipografia, superfícies
- Motion: reveals, parallax leve, transições suaves, scroll progress simples
- GSAP: apenas quando houver necessidade real de pin/scrub narrativo
- Lottie: apenas para micro assets e pequenos detalhes
- Não usar Lottie como motor principal da narrativa
- Não usar WebGL global nesta fase

## O que evitar
- Visual bonito sem função
- Hero pesado que compete com a mensagem
- Cards demais
- Glow demais
- Blur demais
- Grid inconsistente
- Muito peso visual em todos os blocos
- Seções com a mesma hierarquia
- CTA perdido
- Mobile pesado
- Arte abstrata demais
- Alterações amplas sem necessidade

## Fontes de verdade do projeto
Sempre ler antes de mudanças estruturais:
- STRATEGY.md
- OFFER_EXPERIENCE.md
- SUPREME_INTERFACE_BLUEPRINT.md
- UI_SYSTEM_FORJA.md
- MOTION_SYSTEM_FORJA.md
- OFERTA_STORYBOARD.md

## Modo de trabalho esperado
### Modo arquiteto
Quando a tarefa não estiver clara:
1. analisar o estado atual
2. identificar o principal problema
3. propor a menor implementação segura
4. não alterar arquivos ainda

### Modo executor
Quando a tarefa estiver aprovada:
1. implementar apenas o escopo definido
2. não expandir escopo
3. preservar o que não foi autorizado mexer
4. validar integridade da rota

## Regras de resposta
Antes de implementar:
- dizer qual é o principal problema
- dizer qual é a menor mudança segura
- dizer quais arquivos pretende alterar

Depois de implementar:
- listar arquivos alterados
- resumir o que mudou
- dizer o que testar no navegador
- avisar qualquer risco ou limitação restante

## Critério de sucesso
A página está correta quando:
- parece premium sem parecer exagerada
- comunica a proposta em poucos segundos
- instala a nova crença com clareza
- mostra o mecanismo como sistema
- mantém CTA dominante
- flui com coerência visual
- continua leve e legível no mobile
- faz o usuário sentir:
  “esse é o jeito certo de recomeçar”