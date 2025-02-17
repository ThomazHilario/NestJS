import { Body, Controller, Get, Post } from '@nestjs/common';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Get()
  async getListUsers(){
    return {
      message:'Hello World'
    }
  }

  @Post()
  async createNewUser(@Body() values:{email:string, password:string | number}){
    return {
      email:values.email,
      password:values.password
    }
  }
}
