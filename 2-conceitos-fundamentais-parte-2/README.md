# Conceitos fundamentais do NestJs - Parte 1

# Pipes
- São usados para transformar os dados que passam por ele ou para valida-los.
- São usados em classes que contem o decorator @Injectable.

# Interceptors
- São classes com o decorator @Injectable e implementam a interface NestInterceptor.
- Possibilita adicionar lógicas extras antes ou depois da execução de métodos.
- Para usar temos que usar em todas as rotas, na função bootstrap devemos usar o: app.useGlobalInterceptors(class instanciada do interceptor criado pelo desenvolvedor).
- Ao criar a classe de interceptor, é importante lembrar que esta classe é um implements do NestInterceptor.

# Middlewares
- São funções chamadas antes do manipulador de rotas.
- Podemos também criar classe Injectable implementando a interface NestMiddleware.
- Essas funções tem acesso aos objetos request e response e a função Next()

# Guards
- São classes Injectable e são implementadas da interface CanActivate.
- Os guards determinam se uma request pode ser tratada pelo manipulador de rota ou não.

# Exceptions
- São capturadas automaticamente por uma camada da aplicação que é responsável por transformá-las em mensagens amigáveis.
- Retornam a mensagem em formato JSON om o status Code HTTP.
- Essa classe deve ser implementada da interface ExceptionFilter.

# Param Decorators
- Conjunto de decorators disponibilizados pelo nestJs
- Também podemos criar decorators (Custom Decorators)