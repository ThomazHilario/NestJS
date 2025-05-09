import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class LoginCredentialsDTO{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password:string
}

export class RegisterCredentialsDTO{

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password:string
}

export class ForgetCredentialsDTO{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string
}