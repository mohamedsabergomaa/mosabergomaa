import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isValidLocale } from "./lib/i18n-config";

const COOKIE_NAME = "NEXT_LOCALE";

function getLocale(request: NextRequest): string {
  // 1. Check cookie
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().toLowerCase())
      .map((lang) => lang.split("-")[0]);
    for (const lang of preferred) {
      if (isValidLocale(lang)) return lang;
    }
  }

  // 3. Default
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if path already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  const response = NextResponse.redirect(newUrl);

  // Persist locale preference
  response.cookies.set(COOKIE_NAME, locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/"
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"]
};
