# DevStage

**DevStage** é uma aplicação desenvolvida com **Next.js**, **React**, **Node.js**, **Fastify** e **Zod**. Ela permite a criação de links de indicação. Ao compartilhar esses links, os usuários podem ganhar pontos baseados em acessos e cadastros realizados através de suas referências. A plataforma também mantém um ranking dos três melhores usuários com mais cadastros.

## Tecnologias Utilizadas

- **Frontend**: 
  - **Next.js** (Framework React com renderização do lado do servidor)
  - **React** (Biblioteca para construção da interface de usuário)
  - **Tailwind CSS** (Framework de CSS utilitário)
  - **Google Fonts** (Oxanium e Montserrat)

- **Backend**:
  - **Node.js** (JavaScript no servidor)
  - **Fastify** (Framework web rápido e eficiente para Node.js)
  - **Zod** (Biblioteca para validação de dados, utilizada para autenticação)
  - **Docker** (Para containerização do backend)
  - **Banco de Dados**: Pode ser configurado com PostgreSQL ou MongoDB

## Funcionalidades

- **Geração de Links de Indicação**: Cada usuário recebe um link único que pode ser compartilhado.
- **Contagem de Acessos**: Quando alguém acessa um link de indicação, o contador de acessos do usuário é incrementado.
- **Contagem de Cadastros**: Se um visitante se cadastrar através do link de indicação, o contador de cadastros do usuário é incrementado.
- **Ranking de Indicadores**: O sistema exibe um ranking com os três usuários que mais indicaram cadastros.
- **Autenticação com Zod**: A autenticação é realizada utilizando Zod para validação de dados de entrada, garantindo que os dados do usuário sejam válidos antes de proceder com o login ou registro.
- **Desempenho com Fastify**: O Fastify é utilizado para garantir que o backend da aplicação seja rápido e eficiente.
