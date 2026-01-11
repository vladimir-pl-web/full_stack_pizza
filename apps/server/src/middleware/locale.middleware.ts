import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common'
import { Locale } from '@workspace/types'
import { NextFunction, Request, Response } from 'express'

const ALLOWED_LOCALES: Locale[] = ['en', 'lv', 'ru', 'nl']

export interface RequestWithLocale extends Request {
  locale?: Locale
}

@Injectable()
export class LocaleMiddleware implements NestMiddleware {
  use(req: RequestWithLocale, res: Response, next: NextFunction) {
    const parts = req.originalUrl.split('/').filter(Boolean)
    const localeFromPath = parts[1] as Locale | undefined

    if (!localeFromPath || !ALLOWED_LOCALES.includes(localeFromPath)) {
      // If locale is missing or not supported, may be default locale == en?
      throw new BadRequestException(`Unsupported locale: ${localeFromPath ?? ''}`)
    }

    req.locale = localeFromPath
    next()
  }
}
