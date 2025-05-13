import { JwtService } from "@nestjs/jwt"

const JwtServiceMock = {
    provide: JwtService,
    useValue: {
        sign: jest.fn().mockResolvedValue('my-token')
    },
}

export default JwtServiceMock