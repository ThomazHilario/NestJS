import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CrudService } from './crud.service';

import { CreateMessageDTO, UpdateDataDTO } from './Dtos/message-dto';
@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Get()
  async getMessages(){
    const messagesOrNo = await this.crudService.getMessages()

    return messagesOrNo
  }

  @Get('/:id')
  async getOnlyOneMessage(@Param() { id }:{id:string}){
    return await this.crudService.getOneMessage(id)
  }

  @Post()
  async createNewUser(@Body() values:CreateMessageDTO){
    return await this.crudService.createMessages(values)
  }

  @Put()
  async updateDataMessage(@Body() values:CreateMessageDTO){
    return values
  }

  @Patch()
  async updateDataParcialMessage(@Body() values:UpdateDataDTO){
    return await this.crudService.updateMessage(values)
  }

  @Delete('/:id')
  async deleteMessage(@Param('id') id: string){
    return await this.crudService.deleteMessage(id)
  }
}
