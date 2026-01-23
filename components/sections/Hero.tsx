import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n"

interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const t = getTranslations(locale)

  return (
    <section className="relative overflow-x-hidden bg-gradient-to-b from-daat-navy/5 via-daat-steel/5 to-background py-20 md:py-32" style={{
      background: 'linear-gradient(135deg, rgba(10, 22, 40, 0.03) 0%, rgba(44, 74, 110, 0.05) 50%, rgba(255, 255, 255, 1) 100%)'
    }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient blobs - Logo gradient colors */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 animate-pulse" style={{
          background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.1) 0%, rgba(200, 154, 61, 0.15) 100%)'
        }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl translate-y-1/2 animate-pulse" style={{
          background: 'linear-gradient(135deg, rgba(200, 154, 61, 0.1) 0%, rgba(44, 74, 110, 0.1) 100%)',
          animationDelay: '1s'
        }}></div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B1F3B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" style={{
            background: 'linear-gradient(135deg, #0B1F3B 0%, #0B1F3B 45%, #C89A3D 75%, #F2B84B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t.hero.headline}
          </h1>
          <p className="mt-6 text-lg text-daat-dark/70 sm:text-xl md:text-2xl">
            {t.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
            <Link href={`/${locale}/services`}>
              <Button variant="outline" size="lg" className="border-2 border-daat-steel/30 hover:border-daat-gold hover:text-daat-gold text-daat-dark">
                {t.hero.ctaSecondary}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
