import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const SUPPORTED_LOCALES = ['en', 'ru', 'lv', 'nl']
const DEFAULT_LOCALE = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Пропускаем статические файлы и API
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || PUBLIC_FILE.test(pathname)) {
    return
  }

  // Проверяем есть ли локаль в пути
  const pathnameLocale = pathname.split('/')[1]

  if (SUPPORTED_LOCALES.includes(pathnameLocale)) {
    return
  }

  // Получаем локаль из cookie или ставим дефолт
  const locale = request.cookies.get('NEXT_LOCALE')?.value || DEFAULT_LOCALE

  // Перенаправляем на путь с локалью
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}
