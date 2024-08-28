// Module
import { Module } from '@nestjs/common'

// Controller
import { AppController } from './app.controller'

// Module - inicializar o server
@Module({
    controllers:[AppController]
})
export class AppModule{}