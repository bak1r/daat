import tr from "@/content/translations/tr"
import en from "@/content/translations/en"
import al from "@/content/translations/al"

export type Locale = "al" | "en" | "tr"

export const locales: Locale[] = ["al", "en", "tr"]
export const defaultLocale: Locale = "al"

// Translations are now TypeScript constants, so they're always available
const translations: Record<Locale, typeof al> = {
  al,
  en,
  tr,
}

export function getTranslations(locale: Locale = defaultLocale) {
  // Ensure locale is valid, fallback to defaultLocale if not
  const validLocale = locales.includes(locale) ? locale : defaultLocale
  const translation = translations[validLocale]
  
  // Safety check: if translation is undefined, return default locale translation
  if (!translation) {
    console.error(`Translation not found for locale: ${validLocale}, falling back to ${defaultLocale}`)
    return translations[defaultLocale] || translations.en || translations.tr
  }
  
  return translation
}

export function getNestedTranslation(
  locale: Locale,
  path: string
): string {
  const keys = path.split(".")
  let value: any = translations[locale]

  for (const key of keys) {
    value = value?.[key]
    if (value === undefined) {
      return path
    }
  }

  return typeof value === "string" ? value : path
}
