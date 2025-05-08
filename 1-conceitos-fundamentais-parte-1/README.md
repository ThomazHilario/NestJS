# Conceitos fundamentais do NestJs - Parte 1

## Ciclo de vida do Request
-> Request -> Validação -> Modificação

-> Request: Solicita a requisição.
-> Validação: Valida se o agente que está fazendo a requisição tem permissão suficiente.
-> Modificação: Modificar o tipo de dado do valor de entrada, exemplo se eu quero buscar um usuário por id, mas o id que está sendo enviado na requisição é uma string, o modificamos, para um tipo number.

## Conceitos Fundamentais

### Bootstrap:
- Algo que vai iniciar o nestJs, pode se dizer que é o ponto de partida da aplicação nestJs.

### Decorators:
- Algo que modifica e monitora algo em tempo de execução. 
- Exemplo: eu tenho um decorator de rota get, que é responsável por ter uma rota passando um parâmetro, caso eu passe o parâmetro eu posso fazer alguma coisa com este parâmetro na função abaixo do decorator.

### Module:
- Divisões de seções da aplicação seja em modulos, controllers e providers, lá podemos importar tudo que se referente a cada seção.

### Controllers: 
- Classe onde será feita as rotas da aplicação.

### Service:
- Prepara os dados para serem devolvidos a quem solicitou, como exemplo: uma busca de dados em um banco de dados.

## RestAPI:
- Muito comum em nestJS desenvolvermos RestAPI, que é uma interface de programação de aplicações (API), que segue um conjunto de regras para criar uma API web. São utilizadas para troca de informação entre cliente (alguem que solicita uma informação) e servidor (alguem que prepara e envio os dados pedido pelo cliente).
- O Rest segue alguns padrões de desenvolvimento como as solicitações http que são: Get, Post, Put, Patch, Delete.

## DTOS:
- Muito utilizados para fazer validações de campos em solicitações http, permite verificar se uma solicitação recebe os dados certos para prosseguir com a requisição.
- É necessário instalar duas dependências: npm i class-validator class-transformer
- Também é necessário configurar no bootstrap o ValidationPipe para aceitar as validações dos DTOs: `app.useGlobalPipes(new ValidationPipe())`. OBS: é necessário importar o ValidationPipe!

## Banco de dados:
- O nest é independente de banco de dados, assim podemos integrar a ele qualquer tipo de armazenamento persistente seja SQL ou noSQL.
- PAra isso utilizamos o ORM no qual é um mapeamento de objeto relacional, no qual utiliza tabelas ou coleções de um banco de dados com classes e objetos. 
- Cada tabela ou coleção terá uma classe que descreve sua estrutura, e as instâncias dessa classe ou objetos são os registros.
- Os ORM mais utilizados são: typeORM e Prisma.

## Prisma
- Para utilizar o prisma devemos instalar as dependências necessárias:
` npm install prisma --save-dev `

- Invocar o CLI localmente:
` npx prisma ` 

- Agora podemos criar a configuração inicial usando o init:
` npx prisma init `

- Algumas situações que você pode fazer:
    1 - Criar uma tabela no banco de dados e puxar a tabela para o prisma.
    - Ápos criar a tabela no banco de dados basta usar os comandos: 
     ` npx prisma db pull `
     ` npx prisma generate `

    2 - Criar uma tabela no prisma e fazer um push para o banco de dados.
     - Ápos criar a tabela no prisma basta usar os comandos: 
     ` npx prisma migrate dev `
     ` npx prisma generate `