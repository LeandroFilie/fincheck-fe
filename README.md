# Fincheck
<i>🚧Este projeto ainda está em construção!🚧</i>
- App web que faz o controle de contas e finanças. Nele você pode gerenciar os seus gastos, contas bancárias e transações. Este projeto é o Front-End que faz o consumo de uma API REST
- O projeto conta com uma autenticação e um CRUD utilizando as tecnologias mais recentes tanto para desenvolvimento quanto para integração.

## Layout
O layout do projeto foi desenvolvido através da plataforma [Figma](figma.com). [Clique aqui](https://www.figma.com/file/7dydDfqmpnvY3HkXvdXoaL/Fincheck?type=design&node-id=229%3A8335&mode=design&t=QhTrUpPZkLTbIGQn-1) e acesse o protótipo.
<p>
  <img src="https://gist.githubusercontent.com/LeandroFilie/2cdbfaa1e7ed32e78a30698510b28095/raw/1047fbce1c79cf9c1ca67fb793d68b37fe3c09e1/fincheck.png" />
</p>

## Stack Utilizada
- React.js
- TypeScript
- React Router Dom
- React Hook Form
- Zod
- Axios
- React Query
- TailwindCSS
- HeadlessUi
- ESlint

## Rodando Localmente
### Requisitos

- É necessário que tenha instalado [Node](https://nodejs.org/en) para rodar o projeto.
- É necessário que a [API](https://github.com/LeandroFilie/fincheck-backend) esteja rodando (para o funcionamento completo).

Clone o projeto, acesse a pasta e instale as dependências

```bash
$ git clone https://github.com/LeandroFilie/fincheck-frontend.git

$ cd fincheck-frontend

$ npm install
```

Renomeie o arquivo `.env.example` para `.env` e preencha com o endereço da API
```env
VITE_API_URL=http://localhost:3003
```

Inicie o servidor da aplicação

```bash

$ npm run dev

```
Acesse o App pelo seu navegador pelo endereço: `http://localhost:5173/`

