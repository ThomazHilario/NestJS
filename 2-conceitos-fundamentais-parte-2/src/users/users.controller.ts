import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRegisterDto } from './Dto/user-register-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() credentials:UserRegisterDto){
    return await this.usersService.createUser(credentials.email, credentials.password)
  }

  @Post()
  async loginUser(@Body() credentials:UserRegisterDto){
    return await this.usersService.loginUser(credentials.email, credentials.password)
  }
}
