import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n"

interface FinalCTAProps {
  locale: Locale
}

export function FinalCTA({ locale }: FinalCTAProps) {
  const t = getTranslations(locale)

  return (
    <section className="relative py-20 overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.08) 0%, rgba(200, 154, 61, 0.1) 45%, rgba(44, 74, 110, 0.05) 75%, rgba(10, 22, 40, 0.03) 100%)'
    }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{
            background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.15) 0%, rgba(200, 154, 61, 0.12) 100%)'
          }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{
            background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.15) 0%, rgba(11, 31, 59, 0.12) 100%)',
            animationDelay: '1s'
          }}></div>
        </div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230B1F3B' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4" style={{
            background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 50%, #0B1F3B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t.hero.headline}
          </h2>
          <p className="text-lg text-daat-dark/70 mb-8">
            {t.hero.subheadline}
          </p>
          <Link href={`/${locale}/contact`} className="group">
            <Button size="lg" className="group shadow-lg" style={{
              background: 'linear-gradient(135deg, #C89A3D 0%, #F2B84B 100%)',
              color: '#0B1F3B',
              fontWeight: '600'
            }}>
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
