

## Objetivo
Transformar a seção "sente o chamado para VOAR?" em **duas caixinhas separadas e sobrepostas**, exatamente como na referência: imagem à esquerda e card bege à direita, ligeiramente desalinhados em altura, com a imagem invadindo o card.

## Mudanças (apenas em `src/pages/ConsultoriaVoo.tsx`, seção CTA Voar)

1. **Container externo**: trocar o grid colado por um wrapper `relative` que permita posicionamento sobreposto.
2. **Caixinha da imagem (esquerda)**:
   - Largura ~55%, altura própria com `aspect-[3/2]`.
   - Posicionada à esquerda, deslocada um pouco para baixo (`mt-12 md:mt-20`) para criar o degrau vertical visto na referência.
   - `z-10` para ficar por cima do card bege na área de sobreposição.
3. **Caixinha do card bege (direita)**:
   - Largura ~55%, alinhada à direita (`ml-auto`), com `-mt-X` no desktop para sobrepor verticalmente à imagem.
   - Padding interno generoso (`p-10 md:p-14`), conteúdo (título, parágrafo, botão "Quero VOAR") inalterado.
4. **Responsivo (mobile)**: abaixo de `md`, voltar ao empilhamento vertical natural — imagem em cima, card embaixo, sem sobreposição (mais legível em telas estreitas).
5. **Espaçamentos**: ajustar `py` da seção e margens internas para acomodar a sobreposição sem cortar conteúdo.

## Esquema visual
```text
desktop:
┌───────────────────────────┐
│      [card bege  ──────]  │ ← topo do card mais alto
│ [── imagem ──][card bege] │ ← imagem sobrepõe o card
│ [── imagem ──]            │ ← imagem termina mais embaixo
└───────────────────────────┘

mobile:
[── imagem ──]
[── card bege ──]
```

## Detalhes técnicos
- Substituir o `grid grid-cols-[55%_45%]` por:
  - `relative` no wrapper
  - Imagem: `md:absolute md:left-0 md:top-12 md:w-[55%]` + `aspect-[3/2] object-cover`
  - Card: `md:ml-auto md:w-[55%] relative z-0 bg-beige p-10 md:p-14`
  - Wrapper recebe `md:min-h-[480px]` para reservar a altura da composição sobreposta.
- Nada muda em conteúdo (texto, link do formulário, cores).

