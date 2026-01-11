import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Locale } from '@workspace/types'

import { RequestWithLocale } from '../middleware/locale.middleware'

export const LocaleParam = createParamDecorator((data: unknown, ctx: ExecutionContext): Locale => {
  const request = ctx.switchToHttp().getRequest<RequestWithLocale>()
  const locale = request.locale

  if (!locale) {
    throw new BadRequestException('Locale was not resolved by middleware')
  }

  return locale
})
