import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/PrismaService';
import { UsersModule } from 'src/users/users.module';
import 'dotenv/config'

@Module({
  imports: [
    JwtModule.register({
      secret: String(process.env.JWT_SECRET)    
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
