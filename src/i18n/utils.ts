export type Locale = 'it' | 'en';
export const defaultLocale: Locale = 'it';
export const locales: Locale[] = ['it', 'en'];

/**
 * Get the equivalent path in the target locale.
 * getLocalizedPath('/works/icaro/', 'en') -> '/en/works/icaro/'
 * getLocalizedPath('/en/about/', 'it') -> '/about/'
 */
export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const seg = pathname.split('/').filter(Boolean)[0];
  const currentLocale = (locales.includes(seg as Locale) && seg !== defaultLocale)
    ? seg as Locale
    : defaultLocale;

  let stripped = pathname;
  if (currentLocale !== defaultLocale) {
    stripped = pathname.replace(`/${currentLocale}`, '') || '/';
  }
  if (targetLocale === defaultLocale) return stripped;
  return `/${targetLocale}${stripped}`;
}

/**
 * Prefix a path with the locale (no prefix for default locale).
 * localePath('/works/', 'en') -> '/en/works/'
 * localePath('/works/', 'it') -> '/works/'
 */
export function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}
