# Conceitos fundamentais do NestJs - Parte 1

# Pipes
- São usados para transformar os dados que passam por ele ou para valida-los.
- São usados em classes que contem o decorator @Injectable.

# Interceptors
- São classes com o decorator @Injectable e implementam a interface NestInterceptor.
- Possibilita adicionar lógicas extras antes ou depois da execução de métodos.
- Para usar temos que usar em todas as rotas, na função bootstrap devemos usar o: app.useGlobalInterceptors(class instanciada do interceptor criado pelo desenvolvedor).

# Middlewares
- São funções chamadas antes do manipulador de rotas.
- Podemos também criar classe Injectable implementando a interface NestMiddleware.
- Essas funções tem acesso aos objetos request e response e a função Next()

# Guards
- São classes Injectable e são implementadas da interface CanActivate.
- Os guards determinam se uma request pode ser tratada pelo manipulador de rota ou não.
- Exemplo: podemos usar o guard para verificar se estamo recebendo um token, assim verificar este token se for um token válido podemos realizar a requisição se não irá dar um erro.

# Exceptions
- São capturadas automaticamente por uma camada da aplicação que é responsável por transformá-las em mensagens amigáveis.
- Retornam a mensagem em formato JSON om o status Code HTTP.
- Essa classe deve ser implementada da interface ExceptionFilter.

# Param Decorators
- Conjunto de decorators disponibilizados pelo nestJs
- Também podemos criar decorators (Custom Decorators)

# Introdução a Segurança em nestJs:

## JWT: 
 - Json Web Token padrão que fornece um método seguro para comunicar informações entre duas partes. Um token JWT é uma string composta por 3 partes separadas pelo caractere ponto. São elas: Header, Payload, Signature.
 - Header: Consiste em duas partes o tipo do token e o algoritmo de assinatura.
 - Payload: Contém as declarações/conteudo.
 - Signature: Verifica se a mensagem não foi alterada ao longo do caminho.
 - Para utilizarmos o JWT na nossa aplicação nestjs, podemos adicionar a dependência necessária usando:
 ` npm i @nestjs/jwt `

## Criando Uma segurança com JWT:
 - Devemos criar um módulo para autenticação:auth, na nossa aplicação
 - No módulo criado,no imports deve ter o import do JWTModule.
 - No service podemos no constructor utilizar o serviço da biblioteca do JWT, para criar e verificar os tokens de acesso do usuário.

# Autorização RBAC
- Role-based access control -> controle de acesso baseado em função, serve para liberarmos acesso de um recurso da API apenas se o usuário tem a função de obter essas informações. 
- Exemplo: Um usuário autenticado pode alterar sua informações porem não pode alterar as informações de outros usuários.

# CORS
- Usa headers do protocolo HTTP para validar se o acesso será permitido em outra origem.
