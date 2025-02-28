import { Module } from '@nestjs/common';
import { CrudModule } from './crud/crud.module';
import { WelcomeModule } from './welcome/welcome.module';

@Module({
  imports: [CrudModule, WelcomeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
