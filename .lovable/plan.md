

## Problema
Na implementação atual, a imagem está desproporcionalmente grande (`aspect-[3/2]` em 50% de largura, mas com `top-20` e altura natural enorme), enquanto o card bege fica espremido com padding-esquerdo exagerado (`pl-32 lg:pl-40`). O resultado não bate com a referência, onde as duas caixinhas têm peso visual semelhante e a sobreposição é sutil.

## Ajustes (apenas em `src/pages/ConsultoriaVoo.tsx`, seção CTA Voar — linhas 434-466)

### 1. Reequilibrar tamanhos das caixinhas
- **Card bege**: aumentar de `w-[58%]` para `w-[62%]`, mantendo alinhado à direita.
- **Imagem**: reduzir de `w-[50%]` para `w-[45%]`, ainda alinhada à esquerda.
- A sobreposição passa a ser de ~7%, mais sutil e fiel à referência.

### 2. Igualar alturas visualmente
- Trocar `aspect-[3/2]` da imagem por `aspect-[4/5]` (formato mais vertical, próximo ao retrato da referência onde a mulher aparece em pé).
- Remover `min-h-[520px]` do wrapper e deixar a altura ser ditada pela imagem.

### 3. Corrigir padding do card
- Reduzir o padding-esquerdo de `pl-32 lg:pl-40` para `pl-12 md:pl-16` — apenas o suficiente para o texto não colidir com a imagem na faixa de sobreposição (que agora é menor).
- Manter `p-10 md:p-14` como base.

### 4. Ajustar deslocamento vertical (degrau)
- Card bege: `md:top-0` (mantém topo).
- Imagem: trocar `md:top-20` por `md:top-16` para um degrau mais discreto, como na referência.

### 5. Reservar altura do wrapper
- Adicionar `md:min-h-[600px]` no wrapper para acomodar a imagem mais vertical sem cortes.

## Resultado esperado
```text
desktop:
┌──────────────────────────────────┐
│        ┌─────────────────────┐   │
│  ┌─────│  card bege  ────────│   │ ← card maior, à direita
│  │ img │  título             │   │
│  │     │  texto              │   │
│  │     │  [QUERO VOAR]       │   │
│  │     └─────────────────────┘   │
│  └─────┘                         │ ← imagem ultrapassa um pouco embaixo
└──────────────────────────────────┘
```

## Detalhes técnicos
- Linha 437: manter `relative flex flex-col gap-8 md:block`, adicionar `md:min-h-[600px]`.
- Linha 439: `md:w-[58%]` → `md:w-[62%]`; `md:pl-32 lg:pl-40` → `md:pl-12 lg:pl-16`.
- Linha 457: `md:w-[50%]` → `md:w-[45%]`; `md:top-20` → `md:top-16`.
- Linha 461: `aspect-[3/2]` → `aspect-[4/5]`.
- Mobile: comportamento empilhado preservado pelo `flex flex-col gap-8` + `order-1/order-2`.

