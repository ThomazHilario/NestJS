import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'

export class CreateMessageDTO{
    @IsString()
    @IsUUID()
    @IsOptional()
    id:string;

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

export class DeleteMessageDTO{
    @IsString()
    @IsNotEmpty()
    id:string;
}