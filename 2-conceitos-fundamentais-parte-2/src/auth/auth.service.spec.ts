import { TestingModule, Test } from "@nestjs/testing"
import { AuthService } from "./auth.service"
import { PrismaService } from "../prisma/PrismaService"
import { UsersService } from "../users/users.service"
import JwtServiceMock from "./Mocks/jwtService-mock"
import 'dotenv/config'

describe('Testing auth services methods', () =>{
    let authService: AuthService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers:[
                AuthService, 
                PrismaService, 
                UsersService,
                JwtServiceMock, 
                
            ]
        }).compile()

        authService = module.get(AuthService)
    })

    it('Should be Create Token in register', async () => {

        const result = await authService.register('ana@email.com', '12345678')

        expect(result).toBe('my-token')
    })

    it('Should be test verifyToken and return hello world', async () => {

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ2YjlkYTc1LTk1MjgtNDJhOS04OTg3LTAyZmRkOTI3YTExMiIsImNyZWF0ZWRfYXQiOiIyMDI1LTA1LTEzVDEyOjQyOjU4Ljc3NFoiLCJ1cGRhdGVkX2F0IjoiMjAyNS0wNS0xM1QxMjo0Mjo1OC43NzRaIiwiZW1haWwiOiJ0aG9tYXpoaWxhcmlvNUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaWF0IjoxNzQ3MTQwMTc5LCJleHAiOjE3NDcxNDM3NzksInN1YiI6ImQ2YjlkYTc1LTk1MjgtNDJhOS04OTg3LTAyZmRkOTI3YTExMiJ9.Y4bPQuVCCARhuICNwOpkXBCVTzI5ZaxcdP0sScLp3yA'

        jest.spyOn(authService, 'checkToken').mockResolvedValue({ token })

        const result = await authService.checkToken(token)

        expect(result.token).toBe(token)
    })
})