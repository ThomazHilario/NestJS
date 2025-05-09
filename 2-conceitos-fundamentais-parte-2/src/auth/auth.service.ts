import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { users } from 'generated/prisma'
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private JWTService: JwtService, private UsersService:UsersService){}

    async createToken(user:users) {
        return this.JWTService.sign({
            ...user
        }, {
            expiresIn:'15 days',
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

    async forget(){

    }
}
