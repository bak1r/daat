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
    <section className="relative section-spacing overflow-x-hidden bg-gradient-to-b from-background via-daat-gold/5 to-background">
      {/* Premium decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(242,184,75,0.5) 0%, rgba(200,154,61,0.3) 50%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 animate-blob-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(44,74,110,0.4) 0%, rgba(11,31,59,0.2) 50%, transparent 70%)'
          }}
        />
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C89A3D' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl gradient-text-gold leading-tight mb-6">
            {t.hero.headline}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto" style={{
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            {t.hero.subheadline}
          </p>
          <Link href={`/${locale}/contact`} className="inline-block group">
            <Button 
              variant="premium" 
              size="lg"
              className="group"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
