import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n"

interface WhyAlbaniaProps {
  locale: Locale
}

export function WhyAlbania({ locale }: WhyAlbaniaProps) {
  const t = getTranslations(locale)
  const data = t.whyAlbania

  return (
    <section className="relative section-spacing overflow-x-hidden bg-gradient-to-br from-background via-daat-gold/3 to-background">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(200,154,61,0.3) 0%, rgba(44,74,110,0.2) 50%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 animate-blob-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(242,184,75,0.4) 0%, rgba(200,154,61,0.2) 50%, transparent 70%)'
          }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 gradient-text-gold">
            {data.title}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70">
            {data.subtitle}
          </p>
        </div>

        {/* Premium Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <Card variant="premium" className="relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" style={{
              background: 'radial-gradient(circle, rgba(44,74,110,0.4) 0%, transparent 70%)'
            }}/>
            <CardHeader>
              <div className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-br from-daat-dark via-daat-dark to-daat-steel bg-clip-text text-transparent">
                {data.why.stat1}
              </div>
              <CardTitle className="text-lg font-semibold">{data.why.stat1Label}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">{data.why.stat1Desc}</CardDescription>
            </CardContent>
          </Card>

          <Card variant="premium" className="relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" style={{
              background: 'radial-gradient(circle, rgba(242,184,75,0.6) 0%, transparent 70%)'
            }}/>
            <CardHeader>
              <div className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-br from-daat-gold via-daat-gold to-daat-goldLight bg-clip-text text-transparent">
                {data.why.stat2}
              </div>
              <CardTitle className="text-lg font-semibold">{data.why.stat2Label}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">{data.why.stat2Desc}</CardDescription>
            </CardContent>
          </Card>

          <Card variant="premium" className="relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" style={{
              background: 'radial-gradient(circle, rgba(44,74,110,0.4) 0%, transparent 70%)'
            }}/>
            <CardHeader>
              <div className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-br from-daat-dark via-daat-dark to-daat-steel bg-clip-text text-transparent">
                {data.why.stat3}
              </div>
              <CardTitle className="text-lg font-semibold">{data.why.stat3Label}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">{data.why.stat3Desc}</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Main Feature Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Innovation Opportunities */}
          <Card variant="premium" className="group">
            <CardHeader>
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-daat-gold/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"/>
                <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-daat-gold/10 to-daat-goldLight/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-7 w-7 text-daat-gold" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold mb-3">{data.innovation.title}</CardTitle>
              <p className="text-foreground/70 leading-relaxed">{data.innovation.desc}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-gold group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">{data.innovation.point1}</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-gold group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">{data.innovation.point2}</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-gold group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">{data.innovation.point3}</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-gold group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">{data.innovation.point4}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Value We Add */}
          <Card variant="premium" className="group">
            <CardHeader>
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-daat-steel/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"/>
                <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-daat-steel/10 to-daat-navy/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-7 w-7 text-daat-steel" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold mb-3">{data.value.title}</CardTitle>
              <p className="text-foreground/70 leading-relaxed">{data.value.desc}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-steel group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">{data.value.point1}</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-steel group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">{data.value.point2}</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-steel group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">{data.value.point3}</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-steel group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">{data.value.point4}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Real Results - Premium Highlight Card */}
        <div className="mt-16">
          <Card variant="premium" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-daat-gold/5 via-transparent to-daat-steel/5"/>
            <CardHeader className="text-center relative z-10">
              <div className="mb-6 relative inline-block mx-auto">
                <div className="absolute inset-0 bg-daat-gold/20 rounded-2xl blur-xl"/>
                <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-daat-gold/20 to-daat-goldLight/10 backdrop-blur-sm flex items-center justify-center">
                  <Target className="h-8 w-8 text-daat-gold" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold mb-4">{data.results.title}</CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">{data.results.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-background/80 backdrop-blur-sm border border-daat-gold/10 hover:border-daat-gold/30 hover:shadow-glow-gold transition-all group">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium leading-relaxed">{data.results.example1}</span>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-background/80 backdrop-blur-sm border border-daat-gold/10 hover:border-daat-gold/30 hover:shadow-glow-gold transition-all group">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium leading-relaxed">{data.results.example2}</span>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-background/80 backdrop-blur-sm border border-daat-gold/10 hover:border-daat-gold/30 hover:shadow-glow-gold transition-all group">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium leading-relaxed">{data.results.example3}</span>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-background/80 backdrop-blur-sm border border-daat-gold/10 hover:border-daat-gold/30 hover:shadow-glow-gold transition-all group">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-daat-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium leading-relaxed">{data.results.example4}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
