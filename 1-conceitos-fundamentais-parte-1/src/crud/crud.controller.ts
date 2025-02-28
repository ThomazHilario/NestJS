import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Get()
  async getMessages(){
    return [
      { message:'Hello World' }
    ]
  }

  @Get('/:id')
  async getOnlyOneMessage(@Param() param:{id:string}){
    return {
      message:param.id
    }
  }

  @Post()
  async createNewUser(@Body() values:{id:string, name:string, message:string}){
    return {
      id:values.id,
      name:values.name,
      message:values.message
    }
  }
}
