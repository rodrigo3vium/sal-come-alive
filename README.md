# Studio SAL — Personal Branding Boutique

Site institucional do **Studio SAL**, boutique de personal branding. SPA construída com
Vite + React, roteamento client-side via React Router e UI com shadcn/ui + Tailwind CSS.

## Stack

- **Vite** (build/dev) + **@vitejs/plugin-react-swc**
- **React 18** + **TypeScript**
- **React Router** (`react-router-dom`) — SPA, sem SSR
- **Tailwind CSS** + **shadcn/ui** (Radix UI)
- **TanStack Query** (`@tanstack/react-query`)
- **Vitest** + Testing Library (testes)

Rotas atuais: `/`, `/sobre-nos`, `/consultoria-voo`, `/mentoria-salto` e catch-all 404
(ver [src/App.tsx](src/App.tsx)).

## Pré-requisitos

- **Node.js 20+** e **npm**

## Clonar

```sh
git clone https://github.com/rodrigo3vium/sal-come-alive.git studio-sal-site
cd studio-sal-site
```

## Instalar

```sh
npm install
```

## Variáveis de ambiente

O projeto **não exige variáveis de ambiente** no estado atual. Caso integrações sejam
adicionadas (ex.: Supabase), use variáveis com prefixo `VITE_` — só elas são expostas ao
client pelo Vite. Crie um `.env.local` na raiz (já ignorado pelo git via `*.local`):

```sh
# .env.local  (exemplo — preencher apenas se/quando a integração existir)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

> Nunca versionar `.env*`. Nunca colocar chaves `service_role` ou secrets server-side
> em variáveis `VITE_` — elas vão para o bundle público.

## Desenvolvimento

```sh
npm run dev
```

Sobe o dev server com HMR em `http://localhost:8080`.

## Typecheck

```sh
npm run typecheck   # tsc --noEmit
```

## Build

```sh
npm run build       # gera /dist
npm run preview     # serve o build localmente para conferência
```

## Testes & Lint

```sh
npm run test        # vitest run
npm run lint        # eslint
```

## Identidade visual & assets

- **Logo (wordmark):** [src/assets/logo-studio-sal.png](src/assets/logo-studio-sal.png) —
  usada no header ([src/components/Navbar.tsx](src/components/Navbar.tsx)) e no rodapé.
- **Favicon:** [public/favicon.ico](public/favicon.ico) (multi-resolução 16→256px) e
  [public/apple-touch-icon.png](public/apple-touch-icon.png) (180px, iOS/Safari), ambos
  linkados no [index.html](index.html). Gerados a partir de um crop quadrado central da foto
  da marca `SAL_-161.jpg`.
  > ⚠️ A foto não traz um símbolo legível em ~20px (fica um quadrado verde na aba). Quando
  > houver um **símbolo/ícone isolado da SAL** (quadrado, fundo transparente), regerar o
  > `favicon.ico` e o `apple-touch-icon.png` a partir dele.
- **Legado do template:** o projeto nasceu de um template Lovable. Os resquícios foram
  removidos — favicon do Lovable, `public/placeholder.svg` não utilizado e o nome default
  `vite_react_shadcn_ts` no `package.json` (renomeado para `studio-sal-site`). Não há mais
  referências ao Lovable (`gpteng`/`og:image` do template) no código.

> **Pendência conhecida:** o [index.html](index.html) ainda não define uma `og:image` —
> compartilhamentos em WhatsApp/redes saem sem imagem de preview.

## Deploy (Vercel)

Deploy contínuo **por push**: conecte o repositório na Vercel e cada push para a branch de
produção dispara um build automático.

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Vite

O [vercel.json](vercel.json) faz o rewrite de todas as rotas para `index.html`, necessário
para o roteamento client-side da SPA (evita 404 em refresh/deep-links como `/sobre-nos`).
