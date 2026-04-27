# Plano: Ajustar seção "Pronta para SALtar?" conforme referência

## O que muda visualmente

A seção deixa de ter o layout assimétrico (card bege + imagem ao lado) e passa a ser um **banner full-bleed** ocupando 100% da largura da tela, com a foto dos pés na água como fundo. Sobre a imagem:

- **Título "Pronta para SALtar?"** em branco, centralizado horizontalmente, posicionado aproximadamente no centro vertical.
- **Botão "Quero SALtar agora"** em branco (borda + texto brancos, fundo transparente), alinhado à **esquerda** e abaixo do título, com margem generosa do canto inferior esquerdo.
- Sem card bege, sem padding lateral — a imagem encosta nas bordas da viewport.

## Arquivo afetado

- `src/components/CTASection.tsx` — reescrita completa da estrutura.

```text
┌──────────────────────────────────────────────────┐
│                                                  │
│              Pronta para SALtar?  (branco)       │
│                                                  │
│                                                  │
│  ┌──────────────────┐                            │
│  │ Quero SALtar agora│ (branco, outline)         │
│  └──────────────────┘                            │
└──────────────────────────────────────────────────┘
        (foto cta-saltar.jpg como background)
```

## Detalhes técnicos

- `<section>` com `relative w-full` e altura fixa (`h-[80vh] md:h-[90vh]` ou similar) para garantir presença visual do banner.
- `<img>` posicionada `absolute inset-0 w-full h-full object-cover` como camada de fundo.
- Container interno `relative z-10 h-full` com layout flex em coluna para posicionar título no centro e botão na base-esquerda.
- Título usa `text-warm-white` (token existente) em vez de `text-foreground`.
- Botão troca `border-foreground text-foreground` por `border-warm-white text-warm-white`, com hover invertendo para `bg-warm-white text-foreground`.
- Manter a imagem `cta-saltar.jpg` já importada.
- Mobile: mesma estrutura, apenas reduzir tamanhos tipográficos e ajustar paddings.

## Observação

A versão mobile mantém o mesmo conceito (foto de fundo full-bleed + título centralizado + botão à esquerda na base), apenas com tamanhos proporcionais ao viewport menor.
