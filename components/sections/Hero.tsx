import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n"

interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const t = getTranslations(locale)

  return (
    <section className="group relative overflow-x-hidden section-spacing bg-gradient-to-b from-background via-daat-steel/5 to-background bg-grain">
      {/* Premium Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative tech overlay image */}
        {/* Light mode: subtle, avoid washing out center */}
        <div
          className="absolute inset-0 opacity-[0.12] dark:hidden"
          style={{
            mixBlendMode: "multiply",
            maskImage:
              "radial-gradient(circle at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,1) 78%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,1) 78%)",
          }}
        >
          <Image src="/images/hero/tech-nodes.png" alt="" fill className="object-cover" priority={false} />
        </div>
        {/* Dark mode: use screen so it actually shows */}
        <div
          className="absolute inset-0 hidden dark:block opacity-[0.20]"
          style={{
            mixBlendMode: "screen",
            maskImage:
              "radial-gradient(circle at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.78) 55%, rgba(0,0,0,1) 78%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.78) 55%, rgba(0,0,0,1) 78%)",
          }}
        >
          <Image src="/images/hero/tech-nodes.png" alt="" fill className="object-cover" priority={false} />
        </div>

        {/* Aurora mesh */}
        <div
          className="absolute inset-0 opacity-65 dark:hidden"
          style={{
            background:
              "radial-gradient(at 20% 15%, rgba(242,184,75,0.28) 0px, transparent 56%)," +
              "radial-gradient(at 85% 10%, rgba(44,74,110,0.22) 0px, transparent 56%)," +
              "radial-gradient(at 10% 70%, rgba(200,154,61,0.18) 0px, transparent 56%)," +
              "radial-gradient(at 80% 75%, rgba(11,31,59,0.12) 0px, transparent 62%)",
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block opacity-80"
          style={{
            background:
              "radial-gradient(at 20% 15%, rgba(242,184,75,0.22) 0px, transparent 58%)," +
              "radial-gradient(at 85% 12%, rgba(44,74,110,0.32) 0px, transparent 58%)," +
              "radial-gradient(at 12% 72%, rgba(200,154,61,0.20) 0px, transparent 58%)," +
              "radial-gradient(at 78% 78%, rgba(242,184,75,0.10) 0px, transparent 62%)",
          }}
        />

        {/* Tech grid (masked) */}
        <div className="absolute inset-0 bg-tech-grid opacity-60" />

        {/* Spotlight behind headline */}
        <div
          className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[900px] max-w-[130vw] h-[420px] blur-3xl opacity-55 dark:hidden"
          style={{
            background:
              "radial-gradient(closest-side, rgba(242,184,75,0.30), rgba(200,154,61,0.12), transparent 72%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[900px] max-w-[130vw] h-[420px] blur-3xl hidden dark:block opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, rgba(242,184,75,0.22), rgba(44,74,110,0.16), transparent 72%)",
          }}
        />

        {/* Animated gradient blobs */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(242,184,75,0.4) 0%, rgba(200,154,61,0.2) 50%, transparent 70%)'
          }}
        />
        <div 
          className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-blob-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(44,74,110,0.4) 0%, rgba(11,31,59,0.2) 50%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-25 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(200,154,61,0.3) 0%, transparent 70%)',
            animationDelay: '3s'
          }}
        />
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C89A3D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-text-gold dark:gradient-text-gold-dark leading-tight mb-6">
            {t.hero.headline}
          </h1>
          <p className="mt-6 text-lg text-foreground/70 sm:text-xl md:text-2xl max-w-2xl mx-auto" style={{
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            {t.hero.subheadline}
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href={`/${locale}/contact`} className="group">
              <Button 
                variant="premium" 
                size="lg"
                className="group"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href={`/${locale}/services`}>
              <Button 
                variant="outline" 
                size="lg"
              >
                {t.hero.ctaSecondary}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
