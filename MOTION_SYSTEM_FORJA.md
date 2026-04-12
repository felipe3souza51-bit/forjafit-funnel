# Forja Fit — Motion System

## Objetivo
Definir como o movimento da /oferta deve funcionar para transmitir:
- desalinhamento
- diagnóstico
- alinhamento
- clareza
- direção
- decisão

## Regra central
Movimento nunca existe só para “ficar bonito”.
Todo motion precisa reforçar a mensagem:
“o problema não era falta de disciplina; era começar desalinhado.”

## Sensação desejada
O motion da página deve parecer:
- premium
- suave
- preciso
- profundo
- controlado
- intencional
- cinematográfico com moderação
- nunca chamativo demais

## O que o motion precisa comunicar
1. tensão inicial
2. confusão organizada
3. reorganização visual
4. estabilização
5. clareza
6. progresso possível

## Hierarquia de motion

### Nível 1 — Micro motion
Usado em:
- hover
- CTA
- cards
- ícones
- checkpoints
- micro feedbacks

Características:
- curto
- sutil
- leve
- sem roubar atenção

### Nível 2 — Motion estrutural
Usado em:
- entrada de seções
- reveal de headlines
- surgimento de superfícies
- troca de estados do eixo
- parallax leve

Características:
- define ritmo
- constrói percepção
- ainda não é storytelling completo

### Nível 3 — Motion narrativo
Usado em:
- seção por scroll
- mechanism reveal
- momentos de transformação
- sequência de culpa → diagnóstico → alinhamento → começo certo

Características:
- guiado por scroll
- controlado
- progressivo
- deve contar história

## Easing
Usar easing com sensação premium e controlada.

### Preferência
- ease-out suave para entradas
- ease-in-out para reorganização
- evitar movimentos secos ou elásticos
- evitar bounce exagerado

### Sensação
Nada deve parecer:
- saltando
- pulando
- vibrando
- “arcade”

## Duração

### Microinterações
- 160ms a 280ms

### Entradas simples
- 320ms a 520ms

### Transições estruturais
- 500ms a 900ms

### Narrativa por scroll
- progressiva pelo scroll
- sem pressa
- sem travar demais a navegação

## Motion primitives

### Fade
Usar para:
- entrada de textos
- revelação de superfícies
- transições de estado

### Translate
Usar para:
- elementos entrando em cena
- cards se aproximando do eixo
- shift de profundidade

### Scale
Usar com moderação para:
- foco
- ativação
- aproximação controlada

### Blur
Usar para:
- começo difuso
- clareza surgindo
- profundidade
- entrada/saída de camadas

### Opacity
Usar para:
- reforçar hierarquia
- indicar o que está “fora do eixo”
- revelar clareza progressiva

### Rotate
Usar apenas levemente para:
- sensação de desalinhamento
- resposta ao mouse
- micro rotação de profundidade

### Parallax
Usar para:
- dar profundidade
- sugerir câmera
- fazer o eixo parecer vivo
- nunca exagerar

## Mouse interaction

### Papel
O mouse não é brinquedo.
Ele só adiciona vida e profundidade.

### O que pode reagir
- eixo central
- camadas de fundo
- checkpoints
- glow leve
- silhueta/forma abstrata

### O que não pode acontecer
- rotação exagerada
- sensação de perda de controle
- movimento cansativo
- distração da copy

### Intensidade
- baixa a moderada
- desktop only quando fizer sentido
- desativar ou reduzir em mobile
- respeitar prefers-reduced-motion

## Scroll motion

## Objetivo
O scroll deve contar a transformação.

### Etapas obrigatórias
1. culpa
2. diagnóstico
3. alinhamento
4. começo certo

### Regra
A pessoa deve sentir que a cena vai ficando mais coerente conforme avança.

### O que acontece visualmente
- elementos dispersos se aproximam
- ruído visual reduz
- linha do eixo fica mais forte
- textos ganham clareza
- o centro estabiliza
- a direção aparece

## Hero motion

### Papel
O hero deve:
- parecer vivo
- reagir ao mouse
- introduzir profundidade
- sugerir desalinhamento indo para controle

### Permitido
- parallax leve
- micro rotação
- glow pulsando suavemente
- leve drift de camadas
- CTA com hover refinado

### Proibido
- looping agressivo
- efeito chamativo demais
- animação competindo com headline

## Narrative section motion

### Papel
Contar a história do avatar.

### Estrutura ideal
- seção com pin no desktop, se necessário
- texto e visual andando juntos
- estados muito claros

### Linguagem de transição
- culpa = mais difuso, menos alinhado
- diagnóstico = foco surgindo
- alinhamento = convergência
- começo certo = estabilidade + energia controlada

## Mechanism reveal motion

### Papel
Mostrar o Mapa de Progressão Inicial como sistema vivo.

### Coreografia base
- objetivo entra
- nível entra
- rotina entra
- os 3 orbitam
- os 3 se conectam
- a rota aparece

### Sensação
A pessoa precisa sentir:
“agora tudo faz sentido”

## CTA motion

### CTA principal
- hover com leve lift
- sombra levemente mais presente
- micro escala muito contida
- feedback rápido

### CTA final
- forte
- limpo
- sem efeito espalhafatoso

## Mobile motion

### Regra central
Mobile não é desktop reduzido.

### Ajustes
- menos camadas simultâneas
- menos blur
- menos parallax
- sem pin agressivo se comprometer usabilidade
- mais foco em clareza
- mais foco em performance

### Fallback
Se precisar escolher entre:
- motion bonito
- experiência rápida e clara

Escolher:
- experiência rápida e clara

## Performance rules
- preferir transform e opacity
- evitar reflows desnecessários
- evitar animações pesadas em tudo ao mesmo tempo
- usar requestAnimationFrame com suavização quando necessário
- ativar interações complexas só onde gera valor real
- respeitar prefers-reduced-motion
- mobile sempre com versão simplificada

## Ferramentas por tipo de motion

### Motion
Usar para:
- reveal
- parallax leve
- transições de componentes
- micro entradinhas
- scroll progress simples

### GSAP
Usar para:
- pin
- scrub
- timelines narrativas
- sequências mais controladas

### Lottie
Usar só para:
- micro assets
- pequenos loops
- detalhes de eixo/checkpoint
- não usar como motor principal da narrativa

## O que evitar
- bounce
- elasticidade exagerada
- neon pulsando sem motivo
- animação em tudo
- scroll travado o tempo todo
- loops que cansam
- sensação gamer
- sensação de “site tech vazio”

## Critério de qualidade
Se o motion parecer:
- decorativo demais, está errado
- agressivo demais, está errado
- confuso demais, está errado

Se parecer:
- parte da história
- parte do diagnóstico
- parte da clareza
- parte da decisão

então está certo.