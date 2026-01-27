"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DAATLogo } from "@/components/ui/DAATLogo"
import { getTranslations, type Locale } from "@/lib/i18n"

interface HeaderProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function Header({ locale, onLocaleChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = getTranslations(locale)

  const getNextLocale = (current: Locale): Locale => {
    if (current === "al") return "en"
    if (current === "en") return "tr"
    return "al"
  }

  const getLocaleDisplay = (loc: Locale) => {
    if (loc === "al") {
      return (
        <img
          src="/images/Flag_of_Albania.svg"
          alt="Albania Flag"
          className="w-5 h-4 object-cover rounded-sm"
        />
      )
    }
    return null
  }

  const toggleLocale = () => {
    onLocaleChange(getNextLocale(locale))
  }

  const navItems = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/case-studies`, label: t.nav.caseStudies },
    { href: `/${locale}/insights`, label: t.nav.insights },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-x-hidden">
      <div className="container flex h-20 md:h-28 items-center justify-between px-4 max-w-full">
        <Link href={`/${locale}`} className="flex items-center flex-shrink-0 py-2">
          <DAATLogo size="lg" showTagline={false} />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href ? "text-daat-gold" : "text-daat-dark/60"
              }`}
              style={{
                color: pathname === item.href ? '#C89A3D' : undefined
              }}
              onMouseEnter={(e) => {
                if (pathname !== item.href) {
                  e.currentTarget.style.color = '#C89A3D'
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== item.href) {
                  e.currentTarget.style.color = ''
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <a
            href="https://wa.me/355693788480"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-300 px-3 py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            className="h-9"
            aria-label="Change language"
          >
            {getLocaleDisplay(locale) && (
              <span className="mr-2 flex items-center">{getLocaleDisplay(locale)}</span>
            )}
            <span className="text-xs font-medium">{locale.toUpperCase()}</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container flex flex-col space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-medium transition-colors ${
                  pathname === item.href ? "text-daat-gold" : "text-daat-dark/60"
                }`}
                style={{
                  color: pathname === item.href ? '#C89A3D' : undefined
                }}
                onMouseEnter={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.color = '#C89A3D'
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.color = ''
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
