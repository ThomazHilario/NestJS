// Controller
import { Controller, Get } from '@nestjs/common'

// Controller - config das rotas
@Controller()
export class AppController{

    @Get()
    getRoute(){
        return JSON.stringify({name:'thomaz', password:'1234567890'})
    }
}