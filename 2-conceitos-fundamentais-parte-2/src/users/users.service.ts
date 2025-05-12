import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/PrismaService';

@Injectable()
export class UsersService {

    constructor(private PrismaService:PrismaService){}


    async createUser(email:string, password:string){
        try {
            const userCreated = await this.PrismaService.users.create({
                data:{
                    email,
                    password
                }
            })

            return userCreated
        } catch (error) {
            return{
                error: 'Não foi possivel criar o usuário!'
            }
        }
    }

    async loginUser(email:string, password:string){
        try {
            const user = await this.PrismaService.users.findFirst({
                where:{
                    email,
                    password
                }
            })  
            
            if(user) return user

            throw Error('Este usuário não existe!')
        } catch (error) {
            return error
        }
    }
}
