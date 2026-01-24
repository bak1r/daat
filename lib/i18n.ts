import tr from "@/content/translations/tr.json"
import en from "@/content/translations/en.json"
import al from "@/content/translations/al.json"

export type Locale = "al" | "en" | "tr"

export const locales: Locale[] = ["al", "en", "tr"]
export const defaultLocale: Locale = "al"

// Ensure translations are loaded correctly - check if imports worked
const translations: Record<Locale, typeof al> = {
  al: al && typeof al === "object" && Object.keys(al).length > 0 ? al : ({} as typeof al),
  en: en && typeof en === "object" && Object.keys(en).length > 0 ? en : ({} as typeof en),
  tr: tr && typeof tr === "object" && Object.keys(tr).length > 0 ? tr : ({} as typeof tr),
}

// Fallback: try require if imports failed (server-side only)
if (typeof window === "undefined" && (!translations.al || Object.keys(translations.al).length === 0)) {
  try {
    const path = require("path")
    const fs = require("fs")
    const alPath = path.join(process.cwd(), "content", "translations", "al.json")
    const enPath = path.join(process.cwd(), "content", "translations", "en.json")
    const trPath = path.join(process.cwd(), "content", "translations", "tr.json")
    
    if (fs.existsSync(alPath)) {
      const alContent = JSON.parse(fs.readFileSync(alPath, "utf8"))
      if (alContent && Object.keys(alContent).length > 0) translations.al = alContent
    }
    if (fs.existsSync(enPath)) {
      const enContent = JSON.parse(fs.readFileSync(enPath, "utf8"))
      if (enContent && Object.keys(enContent).length > 0) translations.en = enContent
    }
    if (fs.existsSync(trPath)) {
      const trContent = JSON.parse(fs.readFileSync(trPath, "utf8"))
      if (trContent && Object.keys(trContent).length > 0) translations.tr = trContent
    }
  } catch (error) {
    console.error("Failed to load translations via require:", error)
  }
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
