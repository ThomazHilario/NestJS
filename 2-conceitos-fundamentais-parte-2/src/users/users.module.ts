import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/PrismaService';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports:[UsersService]
})
export class UsersModule {}
