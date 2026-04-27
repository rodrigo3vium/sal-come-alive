## Adicionar padrão decorativo de símbolos manuscritos

A referência mostra um conjunto de símbolos desenhados à mão (curvas, círculos, ângulos, traços) em marrom, posicionados de forma esparsa no canto superior-esquerdo das seções, com opacidade reduzida — funcionando como uma assinatura visual sutil da marca.

### Onde aplicar

1. **Início (`src/components/QuoteSection.tsx`)** — seção da citação "em um mundo com 8 bilhões..."
2. **Sobre Nós (`src/pages/SobreNos.tsx`)** — seção "o olhar para uma dor comum"

### O que será feito

**1. Salvar o padrão como asset**
- Copiar `user-uploads://sugestao-padrao.png` para `src/assets/decorative-pattern.png`.

**2. Criar componente reutilizável `DecorativePattern`**
- Novo arquivo: `src/components/DecorativePattern.tsx`
- Componente leve que renderiza um `<img>` posicionado absolutamente no canto superior-esquerdo da seção pai.
- Props para customizar posição (top/left), tamanho e opacidade quando necessário.
- Estilo padrão: `absolute top-12 left-0 w-[280px] md:w-[420px] opacity-30 pointer-events-none select-none` (escala reduzida em mobile).
- A imagem ocupa apenas o canto esquerdo — o conteúdo da seção continua à frente sem sobreposição (z-index controlado).

**3. Integrar nas seções**

*QuoteSection* (Início):
- Adicionar `relative overflow-hidden` na `<section>` raiz.
- Inserir `<DecorativePattern />` como primeiro filho, antes do `container`.
- Garantir que o conteúdo (`container`) fique acima via `relative z-10`.

*SobreNos — "o olhar para uma dor comum"* (4ª seção):
- Adicionar `relative overflow-hidden` na `<section>`.
- Inserir `<DecorativePattern />` no topo da seção.
- Conteúdo com `relative z-10`.

### Detalhes visuais

- **Cor**: o PNG já é marrom escuro; aplicaremos `opacity-30` (≈ tom marrom claro como na referência). Ajustável se necessário.
- **Posição**: encostado no canto esquerdo (`left-0`), começando no topo da seção (`top-12 md:top-16`), sem invadir a área central de conteúdo.
- **Responsividade**: largura reduzida em mobile (`w-[280px]`), maior em desktop (`w-[420px]`) — apenas a parte esquerda do padrão fica visível, replicando o efeito da referência.
- **Não-clicável**: `pointer-events-none` para não interferir em interações.

### Resumo dos arquivos

- **Criado**: `src/assets/decorative-pattern.png`, `src/components/DecorativePattern.tsx`
- **Editado**: `src/components/QuoteSection.tsx`, `src/pages/SobreNos.tsx`
