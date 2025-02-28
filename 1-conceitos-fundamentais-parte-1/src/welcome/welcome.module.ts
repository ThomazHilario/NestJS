import { Module } from '@nestjs/common';
import { WelcomeController } from './welcome.controller';

@Module({
  controllers: [WelcomeController],
  providers: [],
})
export class WelcomeModule {}
