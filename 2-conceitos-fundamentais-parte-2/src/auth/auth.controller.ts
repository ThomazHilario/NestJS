import { Body, Controller, Get, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginCredentialsDTO, RegisterCredentialsDTO } from './Dto/auth-dto';
import { AuthToken } from 'src/Guards/auth.guard';
import { Response, Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthToken)
  @Get()
  async verifyToken(){
    return {
      message: 'Hello world!'
    }
  }

  @UseGuards(AuthToken)
  @Post('login')
  async login(@Body() loginCredentials: LoginCredentialsDTO, @Res() response: Response, @Req() request: Request){
    // Create new token case not have token in cookies
    if(!request.cookies['token']){
      // SingIn User and get token
      const token = await this.authService.login(loginCredentials.email, loginCredentials.password)
      // Save in cookie token
      response.cookie('token', token)

      // return for user token
      return response.send(token)
    }

    // Return cookies in request
    return response.send(request.cookies['token'])
    
  }

  @Post('register')
  async register(@Body() registerCredentials: RegisterCredentialsDTO, @Res() response:Response){
    const token = await this.authService.register(registerCredentials.email, registerCredentials.password)

    response.cookie('token', token)

    return response.send(token)
  }

  @UseGuards(AuthToken)
  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  async upload(@UploadedFile() file: Express.Multer.File){
    const result = await this.authService.upload(file)
    return result
  }

}
