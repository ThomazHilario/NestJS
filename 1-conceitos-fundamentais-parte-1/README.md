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
- 