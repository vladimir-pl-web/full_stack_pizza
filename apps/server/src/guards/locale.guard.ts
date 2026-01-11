import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { RequestWithLocale } from 'src/middleware/locale.middleware'

@Injectable()
export class LocaleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<RequestWithLocale>()
    if (!req.locale) {
      throw new BadRequestException('Invalid locale')
    }
    return true
  }
}
