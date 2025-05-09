# O que é NestJs ?
- Nest js é um framework usado para construir Back-End de forma simples e bem organizada. O NestJs Utiliza o superset TypeScript para desenvolver e quando gerado o build ele compila os arquivos para javascript, que por baixo dos panos utiliza o nodeJs para executar o javascript no lado do servidor.

# Requisitos para começar:
- Vs Code
- NodeJs
- NestJs Cli `` npm i -g @nestjs/cli ``

## Criar um projeto Utilizando o nestJs Cli:
` nest new <name project> `

## Run Project:
` npm run start:dev `

## Comandos do nest:
- Gerar um modulo: ` nest generate module <Name Module> `
- Gerar um controller: ` nest generate controller <Name Controller> `
- Gerar um controller em uma pasta: ` nest generate controller messages/messages --flat `
- Gerar um Crud completo: ` nest g resource `