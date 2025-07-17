import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'de', 'ru'];
const defaultLocale = 'de';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

function getLocale(request: NextRequest): string {
  // Check if locale is specified in the URL
  const pathname = request.nextUrl.pathname;
  const locale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (locale) return locale;

  // Use Accept-Language header to determine locale
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map((lang) => lang.trim().split(';')[0])
      .find((lang) => locales.includes(lang.split('-')[0]));
    
    if (preferredLocale) {
      return locales.find(locale => preferredLocale.startsWith(locale)) || defaultLocale;
    }
  }

  return defaultLocale;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}; 