import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/PrismaService';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: "oUkTpKkE,z+=EgP:MV0}d}Zg?c7%8UXm"
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
