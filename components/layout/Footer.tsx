import Link from "next/link"
import { getTranslations, type Locale } from "@/lib/i18n"
import { DAATLogo } from "@/components/ui/DAATLogo"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale)

  return (
    <footer className="border-t overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(10, 22, 40, 0.02) 100%)',
      borderColor: 'rgba(44, 74, 110, 0.1)'
    }}>
      <div className="container px-4 py-12 max-w-full">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <DAATLogo size="md" showTagline={false} />
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-daat-dark">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-muted-foreground transition-colors hover:text-daat-gold"
                  style={{ '--hover-color': '#C89A3D' } as React.CSSProperties}
                >
                  {t.footer.links.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/case-studies`}
                  className="text-muted-foreground transition-colors hover:text-daat-gold"
                >
                  {t.footer.links.caseStudies}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/insights`}
                  className="text-muted-foreground transition-colors hover:text-daat-gold"
                >
                  {t.footer.links.insights}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-muted-foreground transition-colors hover:text-daat-gold"
                >
                  {t.footer.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-muted-foreground transition-colors hover:text-daat-gold"
                >
                  {t.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-daat-dark">
              {locale === "tr" ? "Yasal" : locale === "al" ? "Ligjore" : "Legal"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-muted-foreground transition-colors hover:text-daat-gold"
                >
                  {t.footer.legal.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-muted-foreground transition-colors hover:text-daat-gold"
                >
                  {t.footer.legal.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cookies`}
                  className="text-muted-foreground transition-colors hover:text-daat-gold"
                >
                  {t.footer.legal.cookies}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/gdpr`}
                  className="text-muted-foreground transition-colors hover:text-daat-gold"
                >
                  {t.footer.legal.gdpr}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Rruga Artan Lenja 81HX+F94 Tiran, Arnavutluk</p>
              <p>info@daat.com</p>
              <p>+355693788480</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="text-center text-sm text-muted-foreground mb-3">
            <p>© {new Date().getFullYear()} DAAT. {t.footer.rights}</p>
          </div>
          <div className="text-center text-xs text-muted-foreground/80 max-w-3xl mx-auto">
            <p className="mb-2">{t.footer.compliance}</p>
            <p>
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
