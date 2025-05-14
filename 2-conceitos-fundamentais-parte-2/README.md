# Conceitos fundamentais do NestJs - Parte 2

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

# Uploads de arquivos com Multer
- Podemos Subir arquivos em request utilizando o Multer, que já vem integrado junto com o nestJs.
- Para usar, temos que configurar os decorators em uma rota no controlador.
    - @UseInterceptors(FileInterceptor('file'))
    - A estrutura acima Deve ser colocada acima de uma decorator de request.
    - O FileInterceptor vai dizer em qual campo podemos enviar o arquivo.
    - Para buscar o arquivo ao inves de usarmos o decorator @Body() utilizamos o @UploadedFile() que é especificamente para buscar o arquivo e alocar no parametros da função.


# TypeORM
- Como o prisma typeORM é um mapiador relacional de objeto, no qual facilita a interação entre o app com bancos de dados.    
- Para adicionar o typeOrm ao projeto devemos adicionar a dependência necessária: 
`npm i @nestjs/typeorm`
- Após a instalação pode se ver o passo a passo de como usar aqui neste link: https://docs.nestjs.com/recipes/sql-typeorm.
    ## Configurando o typeORM:
    - Primeiro devemos configurar o typeOrm no modulo global a conexão com o banco de dados.
    - Podemos Utilizar o próprio modulo do nestJs para typeORM.
        - OBS: Podemos criar um módulo específico que faz a conexão e depois importa-lo no modulo global ou inserir diretamente no modulo global.
    - Por questões de desenvolvimento podemos criar as nossas entidades em uma pasta Entity, e dentro da pasta criar arquivos que espelham a tabela do banco de dados usando o typeORM.
    - No serviço devemos importar as entidades que iremos usar, e adiciona-las ao constructor para o seu consumo.

# Testes em NestJs utilizando SuperTest
- SuperTest é uma biblioteca Node.js que ajuda a testar APIs. Ele estende outra biblioteca chamada superagent, um cliente HTTP JavaScript para Node.js e o navegador. No qual podemos usar o SuperTest como uma biblioteca autônoma ou com estruturas de teste JavaScript como o Jest.
- A dependência já vem instalada junto com o nestJS.
- É essencial criar um banco de dados próprio para testes, para não modificar o original.


# Geração de Documentação automática com Swagger
- Podemos Criar uma documenação específica da nossa API em nest utilizando o swagger.
- Para crair essa documentação devemos instalar a dependência: 
` npm install --save @nestjs/swagger `
- Pós adicionada a dependência devemos configurar a swagger no arquivo main.ts, dentro da função bootstrap, antes do app.listen:
` const config = new DocumentBuilder() `
` .setTitle('Api documentation') `
` .setDescription('Api routes for request and response') `
` .setVersion('1.0')`
` .addTag('auth')`
` .build();`
` const documentFactory = () => SwaggerModule.createDocument(app, config); `
` SwaggerModule.setup('api', app, documentFactory); `

- Com todas as configurações feitas, por padrão a documentação está acessível na rota /api.
- Para configurar automaticamente as configs devemos adicionar uma tag no arquivo de configuração, e adicionar a mesma tag em um controller (@ApiTags('name')), assim acontecerá o mapeamento de rotas na documentação.
- Podemos fornecer dados de exemplos para a documentação e deixar mais declarativo para o usuário usando um decorator para cada campo da class do dto (@ApiProperty({example:"", description:""})) que irá fornecer um example: valor do dados e uma description: para que server esse valor.