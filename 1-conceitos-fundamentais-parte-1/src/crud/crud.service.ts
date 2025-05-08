import { Injectable } from '@nestjs/common';
import { CreateMessageDTO, UpdateDataDTO } from './Dtos/message-dto';
import { CrudRepository } from './crud.repository';

@Injectable()
export class CrudService {
    constructor(private CrudRepository:CrudRepository){}

    async getMessages(){
        return await this.CrudRepository.getMessages()
    }

    async getOneMessage(id:string){
        return await this.CrudRepository.getOneMessage(id)
    }

    async createMessages(message:CreateMessageDTO){
        return await this.CrudRepository.createMessages(message)
    }

    async updateMessage(bodyValues:UpdateDataDTO){
        return await this.CrudRepository.updateMessage(bodyValues)
    }

    async deleteMessage(id:string){
        return await this.CrudRepository.deleteMessage(id)
    }
}
