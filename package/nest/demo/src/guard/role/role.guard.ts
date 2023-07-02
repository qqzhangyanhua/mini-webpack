import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const r =this.reflector.get<string[]>('role', context.getHandler());
    const request:Request = context.switchToHttp().getRequest();
    console.log('手RoleGuard',r,request.query);
    if (r.includes(request.query.role as string)) {
      return true;
    }
    return false;
  }
}
