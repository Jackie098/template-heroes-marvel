# STEPS
### STEP 01 - Criando a base do projeto e tela inicial
- [] - Instalar as dependências do projeto com `npm run dev`
  - [] - Criar pagina Home:
  - `pages/Home`,
  - `header`
  - `form` de busca
  - lista de cards
- [] - Instalar tailwind - `npm install -D tailwindcss postcss autoprefixer` e depois `npx tailwindcss init`
  - [] - Configurar `tailwind.config.js` e o `postcss.config.js`
  - [] - Importar tailwind no `ìndex.css`
- [] - Adicionar style na página `Home`
- [] - Consumir `Marvel API` e exibir os dados reais
  - [] - `services/BaseService` e `api/service...`
- [] - Começar a criação da página `HeroDetails` e montar `header`
- [] - Componentizar `Header, Content, Footer` e montar um `template`

### STEP 02 - Buscando um herói
- [] - Criar estado de loading
- [] - Preparar service pra receber parametros
- [] - onChange, stage e submit
- [] - Criar botão para limpar busca
  - [] - handleClear e state

### STEP 03 - Paginação
- [] - Explicar componente criado - `Pagination`
- [] - `offset` e `limit`
- [] - Criar `curentPage`, `totalPages` e `handlePageClick`

### STEP 04 - Detalhes de um herói
- [] - react-router-dom
- [] - interatividade no `Header`
  - [] - menu atual
  - [] - `BackButton`
  - [] - persistir ultimo heroi selecionado no `sessionStorage`