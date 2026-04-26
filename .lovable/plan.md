## Ajuste do CTA "sente o chamado para VOAR?" (Consultoria Voo)

Vou alinhar a seção final da página `/consultoria-voo` à imagem de referência: imagem em formato paisagem (landscape), full-bleed à esquerda, sobreposta ao card bege que se estende full-bleed à direita.

### Diferenças entre o atual e a referência

| Aspecto | Atual | Referência |
|---|---|---|
| Formato da imagem | Retrato `aspect-[4/5]` | Paisagem `aspect-[16/10]` |
| Largura da imagem | `45%` dentro de `max-w-6xl` | Sangra até a borda esquerda da viewport |
| Card bege | Confinado em `max-w-6xl` | Sangra até a borda direita da viewport |
| Posição vertical da imagem | `top-16` | Centralizada verticalmente, sobrepondo o card |
| Cantos do card | Sem arredondamento | Sutilmente arredondados (`rounded-sm`) |

### Alterações em `src/pages/ConsultoriaVoo.tsx` (linhas 432–464)

**Reestruturação do bloco CTA Voar:**

- Substituir o `max-w-6xl mx-auto px-6` por um container full-width (`w-full`) para permitir o sangramento lateral.
- **Card bege:** ocupar `~70%` da largura, alinhado à direita (`ml-auto`), `rounded-l-sm`, com padding interno generoso (`py-16 md:py-20 pl-[20%] md:pl-[28%] pr-8 md:pr-16`) para deixar espaço para a imagem sobreposta à esquerda.
- **Imagem:** posicionada de forma absoluta, alinhada à esquerda da viewport (`left-0`), centralizada verticalmente (`top-1/2 -translate-y-1/2`), com largura `~45%` e proporção `aspect-[16/10]` (paisagem). Mantém `object-cover` e `z-10` para sobrepor o card.
- **Mobile:** layout empilha em coluna — imagem em cima (full width, paisagem) e card bege embaixo, ambos com `rounded-sm` e respeitando padding lateral padrão.

### Esboço da estrutura final

```tsx
<section className="bg-warm-white py-20 md:py-28 overflow-hidden">
  {/* Mobile: empilhado */}
  <div className="md:hidden px-6 space-y-0">
    <img src={ctaVoar} className="w-full aspect-[16/10] object-cover" />
    <div className="bg-beige p-8">…título, parágrafo, botão…</div>
  </div>

  {/* Desktop: imagem full-bleed à esquerda sobrepondo card full-bleed à direita */}
  <div className="hidden md:block relative">
    <div className="w-[72%] ml-auto bg-beige rounded-l-sm py-16 md:py-20 pl-[24%] pr-12 lg:pr-20">
      …título, parágrafo, botão…
    </div>
    <img
      src={ctaVoar}
      className="absolute left-0 top-1/2 -translate-y-1/2 w-[44%] aspect-[16/10] object-cover z-10"
    />
  </div>
</section>
```

### Observações
- A página `/mentoria-salto` possui um CTA semelhante ("Sente o chamado para SALtar?") que **não será alterado** nesta tarefa, pois o pedido se refere especificamente a `/consultoria-voo`. Caso queira aplicar o mesmo padrão lá, posso fazer em seguida.
- O `overflow-hidden` na `<section>` evita scroll horizontal causado pela sangria lateral.
