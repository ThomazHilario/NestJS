import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudRepository } from './crud.repository';
import { CrudController } from './crud.controller';
import { PrismaService } from 'src/Prisma/prisma.module';

@Module({
  controllers: [CrudController],
  providers: [CrudService, PrismaService, CrudRepository],
})
export class CrudModule {}
