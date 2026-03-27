# Forja Fit Funnel — Estratégia + Implementação inicial

## Contexto usado
Este projeto foi construído com base no briefing enviado pelo usuário fileciteturn0file0, na oferta pública da Forja Fit — que destaca treinos em casa ou academia, fichas prontas, aulas práticas, materiais complementares, acesso imediato, bônus e garantia de 15 dias citeturn632531view0 — e na lógica de quiz/persona da referência BetterMe, que usa um quiz curto para personalização percebida antes da oferta citeturn700327search1turn700327search2.

---

# 1. Estratégia geral do funil

## Visão macro
Fluxo recomendado:

**Anúncio → Quiz → Resultado → Oferta → Checkout Bridge → Checkout oficial → Obrigado**

## Objetivo de cada etapa

### 1) Anúncio / anúncio-preview
**Objetivo:** gerar clique qualificado sem prometer milagre.

**Intenção psicológica:**
- “Talvez exista um plano mais simples para mim.”
- “Quero descobrir qual treino combina com meu perfil.”

**Gatilhos usados:**
- Curiosidade
- Autoidentificação
- Facilidade
- Baixo atrito
- Personalização percebida

**Transição:** CTA leva para o quiz com promessa de diagnóstico rápido.

---

### 2) Quiz
**Objetivo:** criar microcompromissos, aumentar envolvimento e preparar a oferta.

**Intenção psicológica:**
- “Já comecei, vou terminar.”
- “Estou recebendo algo pensado para mim.”

**Gatilhos usados:**
- Compromisso progressivo
- Diagnóstico
- Personalização
- Fluidez
- Rapidez

**Transição:** ao completar, o usuário sente que “ganhou” um perfil e quer ver a recomendação.

---

### 3) Resultado
**Objetivo:** transformar respostas em diagnóstico compreensível e conectá-lo ao produto.

**Intenção psicológica:**
- “Agora faz sentido por que eu travo.”
- “Essa oferta parece adequada ao meu momento.”

**Gatilhos usados:**
- Clareza
- Relevância pessoal
- Autoridade de estrutura
- Alívio do caos
- Próximo passo lógico

**Transição:** CTA conduz à oferta com linguagem de recomendação, não de empurrão.

---

### 4) Oferta
**Objetivo:** converter interesse em intenção de compra.

**Intenção psicológica:**
- “É acessível.”
- “Consigo usar isso na prática.”
- “Serve para minha rotina.”

**Gatilhos usados:**
- Benefício direto
- Simplicidade
- Prova social
- Baixo risco
- Acesso imediato
- Custo-benefício

**Transição:** CTA leva para a bridge de checkout como pré-fechamento.

---

### 5) Checkout bridge
**Objetivo:** reduzir abandono antes do checkout oficial.

**Intenção psicológica:**
- “Já entendi o que vou receber.”
- “Parece seguro seguir.”
- “Vou concluir agora.”

**Gatilhos usados:**
- Segurança
- Reforço de decisão
- Resumo claro
- Garantia
- Benefícios rápidos

**Transição:** redireciona ao checkout oficial com UTM preservada.

---

# 2. Avatar e ângulos de marketing

## Avatar principal
Pessoa de 24 a 44 anos, rotina corrida, sente culpa por não manter constância, quer emagrecer, definir ou ganhar condicionamento, já tentou treinar sozinha mas ficou sem direção. Busca algo simples, direto, pronto para executar, sem depender de uma rotina perfeita.

## Subavatares
1. **Iniciante travado** — quer começar, mas não sabe o que fazer.
2. **Rotina corrida** — até quer treinar, mas falta tempo e praticidade.
3. **Retorno pós-pausa** — já treinou antes, mas perdeu ritmo.
4. **Casa flexível** — quer treinar sem depender de academia.
5. **Academia sem direção** — vai para a academia, mas improvisa e não evolui.

## Ângulos de marketing
1. **Plano pronto para quem não sabe por onde começar**
2. **Treinos que cabem na rotina corrida**
3. **Estrutura para casa ou academia sem complicação**
4. **Pare de improvisar e siga algo claro**
5. **Acesso rápido a um protocolo simples e aplicável**

---

# 3. Estrutura detalhada de cada página

## /anuncio-preview
### Hierarquia visual
- Badge de contexto
- Headline de curiosidade + praticidade
- Subheadline curta
- Bullets rápidos
- CTA único
- Cards de reforço

### UX
- Hero muito direto
- 1 CTA dominante
- Leitura rápida em mobile
- Sem menu superior

---

## /quiz
### Hierarquia visual
- Badge “quiz de 1 minuto”
- Barra de progresso
- Pergunta grande
- Subtexto curto
- Botões grandes de resposta

### UX
- Uma pergunta por tela
- Tap targets amplos
- Avanço instantâneo
- Sem necessidade de formulário longo
- Sensação de velocidade

---

## /resultado
### Seções
- Headline personalizada
- Subheadline personalizada
- Card “Seu perfil”
- Card “Seu principal bloqueio”
- Card “Plano recomendado para você”
- CTA para oferta

### UX
- Resultado legível em menos de 20 segundos
- Personalização explícita
- Linguagem de diagnóstico, não de cobrança

---

## /oferta
### Seções
- Hero conectado ao diagnóstico
- Lista dos principais benefícios
- Box “o que você recebe”
- Blocos “para quem serve / diferenciais / baixo risco”
- Prova social
- Garantia + FAQ
- CTA para checkout bridge

### UX
- Página curta/média
- Ritmo visual com cards
- CTA repetido em pontos lógicos
- Pensada para tráfego pago e mobile

---

## /checkout-bridge
### Seções
- Headline final
- Resumo da decisão
- Reforços finais
- Depoimento curto
- CTA final
- Texto de segurança / ambiente oficial

### UX
- Remove dúvidas finais
- Foco total em conclusão
- Sem distrações

---

# 4. Copy completa de cada página

## 4.1 Anúncio — 5 headlines
1. Descubra o plano de treino mais fácil de seguir para sua rotina.
2. Responda 8 perguntas e veja qual treino combina com seu momento.
3. Pare de improvisar: descubra um plano prático para casa ou academia.
4. Seu objetivo é claro. O que falta é um plano simples para seguir.
5. Veja em 1 minuto qual protocolo faz mais sentido para você hoje.

## Texto principal do anúncio
Você não precisa de mais conteúdo aleatório.
Precisa de um plano que faça sentido para seu objetivo, seu tempo disponível e o lugar onde você quer treinar.

Responda um diagnóstico rápido e descubra qual caminho combina mais com seu perfil.

### CTA
**Começar diagnóstico gratuito**

---

## 4.2 Quiz — copy base
### Tela de abertura
**Descubra em 1 minuto o formato de treino mais indicado para seu perfil**
Responda algumas perguntas rápidas para ver uma recomendação pensada para sua rotina, seu nível e seu objetivo.

### Microcopy por pergunta
As perguntas já estão implementadas no projeto. Títulos e subtítulos foram escritos para gerar progresso, simplicidade e sensação de personalização.

---

## 4.3 Resultado — copy base
### Headline dinâmica
**Seu perfil indica o caminho mais simples para [objetivo] [local].**

### Subheadline dinâmica
Pelo que você respondeu, o melhor cenário para você é seguir um protocolo progressivo, fácil de executar e sem depender de tentativa e erro.

### Bloco “Seu principal bloqueio”
Hoje seu maior bloqueio não é falta de vontade. É falta de uma estrutura simples para transformar intenção em constância.

### Bloco “Plano recomendado para você”
Você não precisa de mais informação solta.
Precisa de um protocolo claro para parar de improvisar, treinar com mais confiança e transformar intenção em ação prática.

### CTA
**Ver meu plano recomendado agora**

---

## 4.4 Página de vendas — copy base
### Headline
Seu próximo passo é parar de improvisar e seguir um plano prático para treinar com mais constância.

### Subheadline
Com base no seu perfil, a melhor escolha agora é uma estrutura pronta para facilitar sua execução, encaixar na rotina e ajudar você a evoluir em casa ou na academia.

### Benefícios principais
- Treinos pensados para casa ou academia
- Fichas prontas para reduzir dúvida e perda de tempo
- Aulas práticas e materiais complementares
- Mais clareza para iniciantes e intermediários
- Melhor encaixe para rotina corrida
- Acesso rápido ao conteúdo

### O que a pessoa recebe
- Aulas e fichas de treino
- Estruturas por objetivo e nível
- Materiais complementares
- Bônus práticos
- Acesso digital imediato

### Quebra de objeções
**“Não sei por onde começar”** → a proposta é justamente reduzir improviso com um caminho mais claro.

**“Tenho pouco tempo”** → o funil reforça praticidade e adaptação à rotina.

**“Não sei se serve para mim”** → o quiz conecta a oferta ao perfil percebido.

**“Tenho medo de comprar e não usar”** → a comunicação trabalha baixo atrito, clareza e garantia.

### CTA
**Quero ver minha condição de acesso**

---

## 4.5 Checkout bridge — copy base
### Headline
Seu plano recomendado já está pronto para liberação.

### Subheadline
Pelo seu perfil, essa é uma forma mais simples de sair do improviso e começar com mais clareza.

### Bullets
- Compatível com seu momento atual
- Pode ser usado em casa ou academia
- Conteúdo digital com acesso rápido
- Garantia destacada na oferta

### CTA final
**Quero meu acesso imediato**

---

# 5. Wireframe textual de cada página

## anúncio-preview
[Badge]
[Headline]
[Subheadline]
[Bullets em pills]
[CTA principal]
[3 cards de reforço]

## quiz
[Badge]
[Barra de progresso]
[Etapa X de Y]
[Pergunta]
[Subtexto]
[Botões de resposta grandes]

## resultado
[Badge]
[Headline personalizada]
[Subheadline]
[Card seu perfil]
[Card principal bloqueio]
[Card plano recomendado]
[CTA]

## oferta
[Badge]
[Headline conectada ao diagnóstico]
[Subheadline]
[Bullets de benefício]
[CTA]
[Box o que recebe]
[3 cards: para quem serve / diferenciais / baixo risco]
[Depoimentos]
[Garantia + FAQ]

## checkout-bridge
[Badge]
[Headline]
[Subheadline]
[2 boxes de resumo]
[Depoimento curto]
[CTA final]
[Texto de segurança]

---

# 6. Lógica do quiz

## Perguntas implementadas
1. Objetivo principal
2. Onde pretende treinar
3. Nível atual
4. Frequência desejada
5. Tempo por dia
6. Principal dificuldade
7. Perfil corporal/meta
8. Motivação principal

## Por que essa ordem converte bem
- Começa com objetivo, que é emocional e fácil
- Move para contexto prático (local e nível)
- Faz a pessoa visualizar consistência (frequência e tempo)
- Explora dor principal
- Fecha em motivação, consolidando intenção

## Regra de progressão
- Cada resposta salva localmente
- Cada clique dispara `QuizStepComplete`
- Última resposta dispara `QuizComplete`
- Redireciona automaticamente para `/resultado`

---

# 7. Regras de personalização

## Variáveis usadas hoje
- `goal`
- `place`
- `level`
- `time`
- `difficulty`

## O que muda dinamicamente
- Headline do resultado
- Subheadline do resultado
- Texto do bloqueio principal
- Nome do plano recomendado
- Texto do CTA do resultado
- Headline da oferta
- Intro da oferta
- Algumas bullets principais

## Exemplo já contemplado
Se o usuário marcar **casa + iniciante + pouco tempo**, o sistema tende a montar um texto como:

> Seu perfil indica o caminho mais simples para retomar o treino em casa.
> Pelo que você respondeu, o melhor cenário para você é seguir um protocolo progressivo, fácil de executar e sem depender de tentativa e erro.

---

# 8. Arquitetura técnica

## Stack escolhida
**Next.js + Tailwind + TypeScript**

### Motivos
- Ótima performance para tráfego pago
- Fácil deploy na Vercel
- Rotas simples por etapa do funil
- Fácil manutenção
- Boa escalabilidade para testes A/B e futuras integrações

## Arquitetura
- `app/` para rotas
- `components/` para UI reutilizável
- `data/` para conteúdo editável e quiz
- `lib/` para storage, tracking, perfil e tipos

## Regras de navegação
- `/anuncio-preview` → `/quiz`
- `/quiz` → `/resultado`
- `/resultado` → `/oferta`
- `/oferta` → `/checkout-bridge`
- `/checkout-bridge` → checkout oficial
- `/obrigado` reservado para pós-compra

## UTM e persistência
- Captura via `URLSearchParams`
- Persistência em `localStorage`
- Repasse ao checkout com `appendStoredUtm()`

## Tracking implementado
- `PageView`
- `StartQuiz`
- `QuizStepComplete`
- `QuizComplete`
- `ViewResult`
- `CTAResultClick`
- `ViewSalesPage`
- `InitiateCheckout`
- `AddPaymentInfo`

## Purchase
O evento `Purchase` ficou documentado para implementação final via:
- página `/obrigado`
- callback do checkout
- GTM/server-side/evento de plataforma

## SEO mínimo
- `metadata` no layout
- Estrutura semântica com headings
- Rotas limpas

## Performance
- Sem bibliotecas pesadas
- Sem dependência de state managers externos
- Componentes simples
- Tailwind para styling enxuto

## Acessibilidade
- Botões grandes
- Contraste alto
- Estrutura de heading clara
- Sem microtexto excessivo no quiz

---

# 9. Estrutura de pastas

```txt
forjafit-funnel/
├─ app/
│  ├─ anuncio-preview/
│  ├─ quiz/
│  ├─ resultado/
│  ├─ oferta/
│  ├─ checkout-bridge/
│  ├─ obrigado/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ HeaderBadge.tsx
│  ├─ OptionButton.tsx
│  ├─ PrimaryLink.tsx
│  ├─ ProgressBar.tsx
│  ├─ Section.tsx
│  ├─ Tracker.tsx
│  └─ UtmCapture.tsx
├─ data/
│  ├─ content.ts
│  └─ quiz.ts
├─ lib/
│  ├─ profile.ts
│  ├─ storage.ts
│  ├─ tracking.ts
│  └─ types.ts
├─ package.json
├─ tailwind.config.ts
├─ tsconfig.json
└─ README.md
```

---

# 10. Código inicial funcional

O código entregue cobre:
- rotas do funil
- quiz com 8 etapas
- personalização dinâmica
- persistência local
- captura e repasse de UTM
- tracking base para Meta/GA4/GTM
- bridge para checkout oficial

> Para editar perguntas: `data/quiz.ts`
> Para editar copy/oferta: `data/content.ts`
> Para ajustar regras do diagnóstico: `lib/profile.ts`

---

# 11. Instruções de instalação e deploy

## Instalação local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Deploy na Vercel
1. Suba o projeto para GitHub
2. Importe o repositório na Vercel
3. Framework preset: Next.js
4. Deploy

## Próximos ajustes recomendados
- Inserir pixel real do Meta
- Inserir GA4/GTM real
- Trocar depoimentos por prova social autorizada
- Conectar `Purchase` ao pós-checkout real
- Refinar visual com assets próprios

---

# 12. Sugestões de testes A/B

## 3 testes prioritários
1. **CTA do anúncio**
   - A: “Começar diagnóstico gratuito”
   - B: “Descobrir meu plano ideal”

2. **Resultado com CTA imediato vs resultado com mini prova social**
   - A: CTA logo após diagnóstico
   - B: CTA depois de 1 depoimento curto

3. **Oferta com headline de dor vs headline de praticidade**
   - A: “Pare de improvisar...”
   - B: “Treine com um plano simples...”

## Outros testes sugeridos
- Página de oferta curta vs média
- Bridge com 1 depoimento vs 3 bullets de garantia
- Quiz com 8 perguntas vs 6 perguntas
- CTA verde vibrante vs CTA branco contornado no hero

---

# Extra

## 5 headlines de anúncio
1. Descubra o plano de treino ideal para sua rotina em 1 minuto.
2. Responda algumas perguntas e veja como treinar com mais clareza.
3. Seu objetivo pode ser simples de executar com o plano certo.
4. Pare de treinar no improviso e veja qual protocolo combina com você.
5. Casa ou academia: descubra agora o melhor caminho para seu perfil.

## 5 ganchos de criativo
1. “Você não precisa de mais motivação. Precisa de um plano mais simples.”
2. “O problema não é querer treinar. É não saber exatamente o que fazer.”
3. “Se sua rotina é corrida, seu treino precisa ser mais direto.”
4. “Casa ou academia? O melhor plano depende do seu perfil.”
5. “Quando o treino fica claro, continuar fica mais fácil.”

## 3 variações de quiz
1. **Quiz objetivo** — 6 perguntas, foco em velocidade
2. **Quiz diagnóstico** — 8 perguntas, foco em personalização percebida
3. **Quiz desafio de rotina** — 7 perguntas, foco em tempo, constância e praticidade

## 3 variações de headline da página de resultado
1. Seu perfil indica um caminho mais simples para voltar a treinar com constância.
2. Pelo seu diagnóstico, o melhor para você é um plano prático e fácil de seguir.
3. Seu resultado mostra que você precisa de menos improviso e mais estrutura.

## 3 variações de headline da página de vendas
1. Pare de improvisar e siga um plano mais simples para treinar de verdade.
2. Um protocolo prático para quem quer treinar em casa ou na academia com mais clareza.
3. O jeito mais direto de sair da dúvida e começar com um plano pronto.

## 3 testes A/B prioritários
1. Quiz com promessa “plano ideal” vs “diagnóstico rápido”
2. Resultado com headline focada em dor vs headline focada em praticidade
3. Checkout bridge com mais segurança visual vs bridge mais curta e agressiva

---

# Observações estratégicas finais
A página pública da Forja Fit hoje já comunica treinos para casa e academia, fichas prontas, aulas, materiais complementares, bônus, acesso imediato e garantia de 15 dias citeturn632531view0. A estrutura criada aqui reposiciona esses mesmos pilares em formato de funil com entrada por quiz, o que tende a elevar percepção de relevância e intenção de compra. A referência BetterMe reforça a utilidade dessa lógica de quiz curto para construir personalização percebida antes da oferta citeturn700327search1turn700327search2.
