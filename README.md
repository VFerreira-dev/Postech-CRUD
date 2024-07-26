O projeto envolveu o desenvolvimento de um CRUD utilizando Node.js e Express para criar uma API, e MongoDB como banco de dados NoSQL, hospedado na plataforma Atlas. O Atlas facilitou a criação, configuração e operação do banco de dados na nuvem.

Ferramentas Utilizadas
Visual Studio Code: Editor de código escolhido.
Node.js: Ambiente de execução JavaScript.
Express: Framework para Node.js.
MongoDB: Banco de dados NoSQL.
Atlas: Plataforma de banco de dados na nuvem.
dotenv: Gerenciamento de variáveis de ambiente.
Iniciar Projeto

1º Passo
Instale o Node.js, caso ainda não esteja instalado, utilizando os comandos:

# Instalar fnm (Fast Node Manager)
winget install Schniz.fnm

# Baixar e instalar Node.js
fnm use --install-if-missing 20

# Verificar a versão correta do Node.js
node -v # Deve imprimir v20.15.1

# Verificar a versão correta do NPM
npm -v # Deve imprimir 10.7.0

2º Passo
Crie um arquivo de configuração com o comando:
npm init

3º Passo
Instale a biblioteca do MongoDB:
npm install mongodb

4º Passo
Instale o Express:
npm install express

5º Passo
Instale o Mongoose para a conexão com o banco na nuvem:
npm install mongoose --save

6º Passo
Instale o dotenv:

npm install dotenv

No terminal do Visual Studio Code, inicie o servidor com o comando:
node run server.js

Com tudo instalado e as pastas do código-fonte organizadas, o CRUD pode ser realizado através das seguintes requisições no insomina:

GET: localhost:3000/livros
GET by ID: localhost:3000/livros/(adicione o ID do livro)
POST: localhost:3000/livros/
PUT: localhost:3000/livros/(adicione o ID do livro)
DELETE: localhost:3000/livros/(adicione o ID do livro)



