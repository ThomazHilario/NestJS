import { Controller, Get } from '@nestjs/common';

@Controller()
export class WelcomeController {
  constructor() {}

  @Get()
  async welcomeToUser(){
    return {
      message:'Hello!, access crud route in API for to do request'
    }
  }
}
