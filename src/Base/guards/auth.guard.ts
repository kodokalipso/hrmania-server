import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    console.log(request.session);
    if (!request.session.user) {
      throw new UnauthorizedException('Not authenticated');
    }
    return true;
  }
}
