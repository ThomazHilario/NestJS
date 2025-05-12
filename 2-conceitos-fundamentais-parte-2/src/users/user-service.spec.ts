import { Test, TestingModule } from "@nestjs/testing"
import { UsersController } from "./users.controller"
import { UsersService } from "./users.service"
import { PrismaService } from "../prisma/PrismaService"

describe('Testing functions in UsersService', () => {

    let usersService:UsersService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                PrismaService
            ]
        }).compile() 

        usersService = module.get(UsersService)
    })

    it('Should be create user', async () => {
        const result = await usersService.createUser('Thomaz5@email.com', '12345678')

        expect(result).toMatchObject({...result})
    })
})