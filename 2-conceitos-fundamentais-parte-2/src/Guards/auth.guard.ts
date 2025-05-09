import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthToken implements CanActivate {
    constructor(private AuthService:AuthService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
      
        const authorizationToken = request.headers.authorization.split(' ')[1]

        const isExistUser = this.AuthService.checkToken(authorizationToken)  

        if(request.cookies?.token){
            return true
        }

        if (isExistUser) {
            return true
        }

        return false
  }
}