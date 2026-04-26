## Plano: Redesign da seção CTA Final em /mentoria-salto

**Arquivo**: `src/pages/MentoriaSalto.tsx` (linhas 391–417)

### Mudanças
1. **Fundo externo**: trocar `bg-beige` por `bg-warm-white` na `<section>`.
2. **Caixa interna escura**: envolver o grid em um container com:
   - `bg-beige` (bege escuro/esverdeado da paleta)
   - `p-8 md:p-16` para respiro interno
   - `rounded-sm` para cantos sutilmente arredondados
   - `max-w-6xl mx-auto`
3. **Imagem dentro da caixa**: manter `mentoriaPraia` mas:
   - Mudar de `aspect-[4/5]` (retrato) para `aspect-[4/3]` (paisagem), seguindo a referência
   - Manter `object-cover w-full`
4. **Texto e botão**: permanecem inalterados (título, parágrafo e CTA "Quero SALtar").
5. **Grid**: manter 2 colunas no desktop, 1 no mobile.

### Resultado esperado
Seção com fundo branco quente externo e uma "caixa" bege escura central contendo a foto à esquerda e o texto + CTA à direita — replicando a referência enviada.