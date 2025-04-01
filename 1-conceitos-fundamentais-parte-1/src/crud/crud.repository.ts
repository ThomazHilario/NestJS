import { Injectable } from "@nestjs/common"
import { CreateMessageDTO } from "./Dtos/message-dto";

@Injectable()
export class CrudRepository{
    constructor(private PrismaService){}

    async getMessages(){

    }

    async createMessages(message:CreateMessageDTO){
        
    }

    async updateMessage(id:string){

    }

    async deleteMessage(id:string){

    }
}