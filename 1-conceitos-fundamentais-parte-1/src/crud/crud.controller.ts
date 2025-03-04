import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CrudService } from './crud.service';

import { CreateMessageDTO, DeleteMessageDTO, UpdateDataDTO } from './Dtos/message-dto';
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
  async createNewUser(@Body() values:CreateMessageDTO){
    return {
      id:values.id,
      name:values.name,
      message:values.message
    }
  }

  @Put()
  async updateDataMessage(@Body() values:CreateMessageDTO){
    return values
  }

  @Patch()
  async updateDataParcialMessage(@Body() values:UpdateDataDTO){
    return values
  }

  @Delete('/:id')
  async deleteMessage(@Param() value: DeleteMessageDTO){
    return value
  }
}
