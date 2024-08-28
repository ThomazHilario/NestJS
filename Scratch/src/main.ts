// Nest core
import { NestFactory } from '@nestjs/core'

// AppModule
import { AppModule } from './app.module'

async function init(){
    try{
        // Criar instancia do nestJS
        const app = await NestFactory.create(AppModule)

        // Iniciando server na porta 3000
        await app.listen(3000)
    }catch(e){
        console.log(e)
    }
}

init()