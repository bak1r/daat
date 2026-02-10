import Link from "next/link"
import { getTranslations, type Locale } from "@/lib/i18n"
import { DAATLogo } from "@/components/ui/DAATLogo"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale)

  return (
    <footer className="border-t border-border overflow-x-hidden bg-gradient-to-br from-daat-navy/5 via-background to-daat-steel/5 dark:from-daat-navy/20 dark:via-background dark:to-daat-steel/10">
      <div className="container px-4 sm:px-6 lg:px-8 py-16 md:py-20 max-w-full">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <DAATLogo size="md" showTagline={false} />
            <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-bold tracking-wide uppercase text-foreground">Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-foreground/60 hover:text-daat-gold transition-all hover:translate-x-1 inline-block"
                >
                  {t.footer.links.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/case-studies`}
                  className="text-foreground/60 hover:text-daat-gold transition-all hover:translate-x-1 inline-block"
                >
                  {t.footer.links.caseStudies}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/insights`}
                  className="text-foreground/60 hover:text-daat-gold transition-all hover:translate-x-1 inline-block"
                >
                  {t.footer.links.insights}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-foreground/60 hover:text-daat-gold transition-all hover:translate-x-1 inline-block"
                >
                  {t.footer.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-foreground/60 hover:text-daat-gold transition-all hover:translate-x-1 inline-block"
                >
                  {t.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-bold tracking-wide uppercase text-foreground">
              {locale === "tr" ? "Yasal" : locale === "al" ? "Ligjore" : "Legal"}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-foreground/60 hover:text-daat-gold transition-all hover:translate-x-1 inline-block"
                >
                  {t.footer.legal.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-foreground/60 hover:text-daat-gold transition-all hover:translate-x-1 inline-block"
                >
                  {t.footer.legal.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cookies`}
                  className="text-foreground/60 hover:text-daat-gold transition-all hover:translate-x-1 inline-block"
                >
                  {t.footer.legal.cookies}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/gdpr`}
                  className="text-foreground/60 hover:text-daat-gold transition-all hover:translate-x-1 inline-block"
                >
                  {t.footer.legal.gdpr}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-bold tracking-wide uppercase text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-foreground/60 leading-relaxed">
              <p>Rruga Artan Lenja<br />81HX+F94 Tiran<br />Arnavutluk</p>
              <p className="hover:text-daat-gold transition-colors cursor-pointer">info@daat.com</p>
              <p className="hover:text-daat-gold transition-colors cursor-pointer">+355693788480</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-daat-gold/20">
          <div className="text-center text-sm text-foreground/60 mb-4">
            <p className="font-medium">© {new Date().getFullYear()} DAAT. {t.footer.rights}</p>
          </div>
          <div className="text-center text-xs text-foreground/50 max-w-3xl mx-auto space-y-2">
            <p>{t.footer.compliance}</p>
            <p className="leading-relaxed">
              {locale === "tr" 
                ? "Kişisel verileriniz Arnavutluk Veri Koruma Yasası (Ligji Nr. 9887) ve GDPR uyarınca korunmaktadır."
                : locale === "al"
                ? "Të dhënat tuaja personale mbrohen sipas Ligjit të Mbrojtjes së të Dhënave të Shqipërisë (Ligji Nr. 9887) dhe GDPR."
                : "Your personal data is protected in accordance with Albanian Data Protection Law (Law No. 9887) and GDPR."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
