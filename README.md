# Kenzie Contact List


# Como preparar o ambiente para uso da aplicação:

A aplicação possui dois diretórios principais: server para o backend e client para o front end.

Na pasta `server`, começamos rodando o comando `npm install` para instalar as dependencias necessárias. Depois disso, precisamos configurar as variáveis de ambiente
para isso criamos uma pasta chamada `.env` com as variáveis idênticas a `.env.example` e povoamos ela com os dados específicos do nosso banco de dados e a porta que queremos utilizar.
Após isso, é necessário preparar e executar as migrações, para que nosso banco de dados esteja pronto para receber as requisições do frontend. Fazemos isso executando os comandos `npm run migration:generate` e `npm run migration:run`, nesta ordem.
Por fim, com o banco de dados devidamente preparado, executamos o comando `npm run dev` para executar o servidor.

Já na pasta `client`, começamos com o comando `yarn`, para instalar as dependencias e, após isso, já podemos executar a aplicação com o comando `yarn start`.

Com a aplicação sendo executada, temos a opção de nos registrar na rota `/register` ou entrar na rota '/login'. Qundo logado, o usuário pode acessar a rota `/profile` para listar contatos existentes e criar novos.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Documentação backend:

Url base: `http://localhost/<PORT>`

# Login :

rota de autenticação: POST na rota `<baseUrl>/login/`

 template de objeto:
```
 {
    "email": string,
    "password": string,
 }
```
------------------------------------------------------------

# Users :

 criação de usuário: POST na rota `<baseUrl>/users/`
--------------------------------------------------------
 
 template de objeto:
```
 {
    "email": string,
    "phone": string,
    "name": string,
    "password": string,
 }
```

listagem de usuário: GET na rota `<baseUrl>/users` (Autenticação necessária)
--------------------------------------------------------------------------------

filtragem de usuário único por id: GET na rota `<baseUrl>/users/<user_id>` (Autenticação necessária)
------------------------------------------------------------------------------------------------------

update de usuário: PATCH na rota `<baseUrl>/users/<user_id>` (Autenticação necessária) (é possível editar qualquer campo disponível na criação)
-------------------------------------------------------------------------------------------------------------------------------------------------

deleção de usuário: DELETE na rota `<baseUrl>/users/<user_id>` (Autenticação necessária)

-----------------------------------------------------------------------------------------

# Contacts:

criação de contato: POST na rota `<baseUrl>/users/<user_id>/contacts/`
-----------------------------------------------------------------------
 
 template de objeto:
```
 {
    "email": string,
    "phone": string,
    "name": string,
 }
```

listagem de contato: GET na rota `<baseUrl>/users/<user_id>/contacts` (Autenticação necessária)
--------------------------------------------------------------------------------------------------

update de contato: PATCH na rota `<baseUrl>/users/<user_id>/contacts` (Autenticação necessária) (é possível editar qualquer campo disponível na criação)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

deleção de contato: DELETE na rota `<baseUrl>/users/<user_id>/contacts` (Autenticação necessária)
--------------------------------------------------------------------------------------------------------
