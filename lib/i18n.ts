import tr from "@/content/translations/tr.json"
import en from "@/content/translations/en.json"
import al from "@/content/translations/al.json"

export type Locale = "al" | "en" | "tr"

export const locales: Locale[] = ["al", "en", "tr"]
export const defaultLocale: Locale = "al"

const translations = {
  al,
  en,
  tr,
}

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale]
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
