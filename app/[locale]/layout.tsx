"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { type Locale, defaultLocale } from "@/lib/i18n"

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const [locale, setLocale] = useState<Locale>(params.locale || defaultLocale)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setLocale(params.locale || defaultLocale)
  }, [params.locale])

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    const newPath = pathname.replace(/^\/(al|en|tr)/, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden max-w-full">
      <Header locale={locale} onLocaleChange={handleLocaleChange} />
      <main className="flex-1 overflow-x-hidden max-w-full">{children}</main>
      <Footer locale={locale} />
    </div>
  )
}
