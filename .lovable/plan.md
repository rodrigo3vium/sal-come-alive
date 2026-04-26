## Atualização do número de WhatsApp

Vou substituir o número antigo (`+55 11 97540-4650`) pelo novo (`+55 11 99949-4500`) em todos os pontos de direcionamento ao WhatsApp do projeto.

### Arquivos a serem alterados

**1. `src/components/WhatsAppButton.tsx`** (botão flutuante presente em todas as páginas)
- `href="https://wa.me/5511975404650"` → `href="https://wa.me/5511999494500"`

**2. `src/components/FAQSection.tsx`**
- Linha 19 (texto da resposta da FAQ): `+55 11 97540-4650` → `+55 11 99949-4500`
- Linha 50 (botão "RESTOU ALGUMA DÚVIDA?"): `href="https://wa.me/5511975404650"` → `href="https://wa.me/5511999494500"`

**3. `src/pages/SobreNos.tsx`**
- Linha 252: `href="https://wa.me/5500000000000"` (placeholder) → `href="https://wa.me/5511999494500"`

### Observação
Após a alteração, o número antigo deixará de aparecer em qualquer lugar do site, e todos os links/botões de WhatsApp passarão a apontar para o novo contato.