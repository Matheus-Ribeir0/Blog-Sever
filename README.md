# Documentação do Back-End

Este repositório contém o back-end de uma aplicação fullstack desenvolvida para consolidar conhecimentos em tecnologias modernas e boas práticas no desenvolvimento de software. O projeto foca em funcionalidades como autenticação segura, criptografia de dados e manipulação eficiente de banco de dados.

---

### Você pode conferir o projeto e adicionar posts e comentários sobre porgramação a vontade através da url:
([Programing Blog](https://blog-client-olive.vercel.app/))

---
## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para o servidor.
- **Express**: Framework minimalista para criar APIs.
- **Sequelize**: ORM para modelagem e manipulação de dados.
- **PostgreSQL**: Banco de dados relacional utilizado para persistência de dados.
- **Neon**: Plataforma para hospedagem do banco de dados PostgreSQL.
- **Cors**: Middleware para habilitar o compartilhamento de recursos entre origens diferentes.
- **Dotenv**: Gerenciamento seguro de variáveis de ambiente.
- **JsonWebToken (JWT)**: Autenticação baseada em tokens.
- **Bcrypt**: Biblioteca para criptografia de dados sensíveis, como senhas.

---

## Funcionalidades Principais

- **Autenticação Segura**: Autenticação com tokens JWT gerenciados no back-end.
- **Criptografia de Dados**: Senhas criptografadas com Bcrypt para maior segurança.
- **Banco de Dados**: Estruturação de tabelas e relações com Sequelize e PostgreSQL.
- **Integração com Front-End**: APIs bem definidas para consumo pelo front-end.

A aplicação foi construída para oferecer uma experiência prática e didática, permitindo a exploração de conceitos fundamentais no desenvolvimento back-end. Feedbacks e sugestões são bem-vindos!

---

## Guia para Configuração e Execução

### Pré-requisitos
- **Node.js** (versão 14 ou superior).
- Gerenciador de pacotes **npm** ou **yarn**.

### Configuração do Back-End

1. Clone o repositório:
   ```bash
   git clone https://github.com/Matheus-Ribeir0/Blog-Sever
   ```

2. Acesse o diretório do back-end:
   ```bash
   cd nome-do-repositorio/backend
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   DATABASE_URL=seu_banco_de_dados_neon
   JWT_SECRET=seu_segredo_jwt
   PORT=porta_do_servidor
   ```

5. Inicialize o banco de dados:
   ```bash
   npx sequelize db:migrate
   ```

6. Inicie o servidor:
   ```bash
   npm start
   # ou
   yarn start
   ```

7. O servidor estará disponível em: [http://localhost:porta](http://localhost:porta)

---

## Estrutura do Projeto

A organização foi projetada para garantir clareza, escalabilidade e facilidade de manutenção.

```
backend/
├── src/
│   ├── controllers/       # Lógica para manipulação das requisições
│   ├── middlewares/       # Validações e autenticações
│   ├── models/            # Modelos Sequelize
│   ├── routes/            # Definição de rotas
│   ├── services/          # Regras de negócios
│   └── app.js             # Configuração principal do servidor
├── migrations/            # Controle de versão do banco de dados
├── .env                   # Variáveis de ambiente
├── package.json           # Dependências e scripts
```


