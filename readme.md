## Login App - Pixit

Um simples aplicativo utilizando NodeJs, ExpressJs, e MySql que possui autenticação via JWT, e permite criar, listar e apagar usuários.

## Antes da utilização

Como todo projeto em Node, antes de fazer qualquer setup ou iniciar a aplicação é necessário instalar os módulos utilizados. Para isso, basta executar o comando:
```bash
npm install
# ou
yarn
```


## Como utilizar

Por padrão, o programa utiliza o seguinte usuário para se conectar ao MySql:

```javascript
user = {
        host: 'localhost',
        user: 'root',
        database: 'lasserrepixit'
    }
```

Caso seu banco de dados já esteja configurado para esse HOST e esse USER sem senha, basta utilizar o comando:
```bash
npm run setup
# ou
yarn setup
```
E esse setup irá criar a DATABASE, a TABLE e um usuário admin.

Por padrão, o usuário admin é o seguinte:
```javascript
admin = {
        name: 'admin',
        email: 'admin@pixit.com.br',
        password: '12345'
    }
```
Para modificar o setup padrão, basta acessar o arquivo /utils/setup/sql-setup.js.

Caso a conexão com o seu banco possua:
```javascript
HOST = 'localhost'
DATABASE = 'lasserrepixit'
TABLE = 'users(id int AUTO_INCREMENT, name VARCHAR(45), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
```

 ou similar, pode seguir para o passo de iniciar a aplicação.

## Iniciando a aplicação

Para iniciar a aplicação, basta utilizar o comando:
```bash
npm start
# ou
yarn start
```
E ele iniciará automaticamente em localhost:3000.

## Rotas

Após iniciar a aplicação, você pode acessar o index '/', onde fica a página de login. Fazendo um login com sucesso, você terá acesso à aŕea do administrador, que fica em '/admin'. De inicío, basta utilizar o usuário admin padrão para chegar à área de criação de usuário e criar qualquer outro que lhe agrade.

## Área do administrador

É uma página única, onde tem possui um card cujo formulário permite a criação de um usuário.

Logo abaixo possui um card em que ficam listado todos os usuários e um botão abaixo para atualizar caso tenha algum modifcação no banco de dados que não foi feita pela aplicação.

Nessa lista aparece automaticamente os usuários criados através do card de criação, bem como apaga imediatamente os usuários ao clicar no 'X' vermelho ao lado direito de cada linha.

## Observação sobre JWT;

Por padrão, eu enviando o arquivo .env com um TOKEN de exemplo. Ele é o suficiente para o funcionamento da aplicação, mas caso queira, pode ficar à vontade para modificá-lo.

