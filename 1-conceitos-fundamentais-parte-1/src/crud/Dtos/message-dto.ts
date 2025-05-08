import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'

export class CreateMessageDTO{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    message:string;
}

export class UpdateDataDTO{
    @IsString()
    @IsNotEmpty()
    id:string;

    @IsString()
    @IsNotEmpty()
    message:string;
}

export class UpdateAllDataDTO{

    @IsString()
    @IsNotEmpty()
    id:string;

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    message:string;
}