import { Injectable } from "@nestjs/common"
import { CreateMessageDTO, UpdateDataDTO } from "./Dtos/message-dto";
import { PrismaService } from "src/Prisma/prisma.module";

@Injectable()
export class CrudRepository{
    constructor(private PrismaService:PrismaService){}

    async getMessages(){
        try {
            const messages = await this.PrismaService.messages.findMany()

            if(messages.length > 0){
                return messages
            }

            return {
                Messages: 'Messages is empty!'
            }

        } catch (error) {
            return {
                message: 'Not possible get users!'
            }
        }
    }

    async getOneMessage(id:string){
        try {
            const message = await this.PrismaService.messages.findUnique({
                where: {
                    id
                }
            })

            return message ? message : { message: 'Message not exist!' }
        } catch (error) {
            return {
                message: " Message not found!"
            }
        }
    }

    async createMessages(message:CreateMessageDTO){
        try {
            await this.PrismaService.messages.create({
                data: {
                    name: message.name,
                    message: message.message
                }
            })

            return {
                Message: 'Created message for user.'
            }
        } catch (error) {
            return {
                Message: 'Not is possible user create'
            }
        }
    }

    async updateMessage(bodyValues: UpdateDataDTO){
        try {
            await this.PrismaService.messages.update({
                where: {
                    id: bodyValues.id
                },
                data: {
                    message: bodyValues.message
                }
            })
    
            return {
                message: 'Updated message!'
            }
        } catch (error) {
            return {
                message: 'Not is possible message update!'
            }
        }
    }

    async deleteMessage(id:string){
        try {
            await this.PrismaService.messages.delete({
                where:{
                    id
                }
            })

            return {
                message: 'Deleted message!'
            }
        } catch (error) {
            return {
                message: 'Not is possible deleted message'
            }
        }
    }
}