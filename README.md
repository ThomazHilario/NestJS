# NestJS
 Reporitório sobre NestJS


## Preparando o ambiente

- Gerar um package.json: ` npm init -y `
- Adicionar dependências:
` npm i @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2 `

- Explicando o que é cada dependência acima:

1.@nestjs/common: Contem pacotes, funções do nestJS.
2.@nestjs/platform-express: Um adaptador entre o nest eo Express, fazendo com que os dois trabalhem juntos.
3.reflect-metadata: Biblioteca de decorators.
4. typescript: Adição do typescript ao projeto.

## Etapas de solicitação e resposta:
1. Validação dos dados do corpo da solicitação
2. Autenticar usuário
3. Encaminhar a solicitação para uma função específica para lidar com a solicitação.
4. Executar alguma lógica comercial específica.
5. Acessar ou armazenar dados.