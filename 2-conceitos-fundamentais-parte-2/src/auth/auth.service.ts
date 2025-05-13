import 'dotenv/config'
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { users } from 'generated/prisma'
import { UsersService } from '../users/users.service';
import { writeFile } from 'fs/promises'
import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import 'dotenv/config'

@Injectable()
export class AuthService {
    constructor(private JWTService: JwtService, private UsersService:UsersService){}

    async createToken(user:users) {
        return this.JWTService.sign({
            ...user
        }, {
            expiresIn: process.env.JWT_EXPIRATION,
            subject: user.id
        })
    }

    checkToken(token:string){
        try {
            return this.JWTService.verify(token)
        } catch (error) {
            return error
        }
    }

    async login(email:string, password:string){
        try {
            const user = await this.UsersService.loginUser(email, password)  
            
            return this.createToken(user)
        } catch (error) {
            return error
        }
    }

    async register(email:string, password:string){
        try {
            const user = await this.UsersService.createUser(email, password)

            return this.createToken(user as users)
        } catch (error) {
            return{
                error: 'Não foi possível criar o usuário'
            }
        }
    }

    async upload(file: Express.Multer.File){
        try {
            
            // Verifica se já tem uma pasta
            if(!existsSync(`${process.env.FOLDER}`)){
                mkdirSync(`${process.env.FOLDER}`, { recursive:true })
            }
            
            // Salva o arquivo na pasta
            await writeFile(join(__dirname, '..', '..', 'arquivos', `${file.originalname}`), file.buffer)
            
            return { Status: 'Sucess' }
        } catch (error) {
            return error
        }
    }
}
