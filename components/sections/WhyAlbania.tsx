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
    <section className="relative py-20 overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.03) 0%, rgba(200, 154, 61, 0.05) 45%, rgba(44, 74, 110, 0.03) 75%, rgba(10, 22, 40, 0.02) 100%)'
    }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" style={{
          background: 'linear-gradient(135deg, rgba(200, 154, 61, 0.08) 0%, rgba(44, 74, 110, 0.05) 100%)'
        }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" style={{
          background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.1) 0%, rgba(200, 154, 61, 0.08) 100%)'
        }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {data.subtitle}
          </p>
        </div>

        {/* Why Albania Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <Card className="relative overflow-hidden border-2 border-daat-steel/20 hover:border-daat-gold/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16" style={{
              background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.1) 0%, rgba(11, 31, 59, 0.05) 100%)'
            }}></div>
            <CardHeader>
              <div className="text-5xl font-bold mb-2" style={{ color: '#0B1F3B' }}>{data.why.stat1}</div>
              <CardTitle className="text-lg text-daat-dark">{data.why.stat1Label}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{data.why.stat1Desc}</CardDescription>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-2 border-daat-gold/20 hover:border-daat-gold/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16" style={{
              background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.15) 0%, rgba(200, 154, 61, 0.1) 100%)'
            }}></div>
            <CardHeader>
              <div className="text-5xl font-bold mb-2" style={{ color: '#C89A3D' }}>{data.why.stat2}</div>
              <CardTitle className="text-lg text-daat-dark">{data.why.stat2Label}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{data.why.stat2Desc}</CardDescription>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-2 border-daat-steel/20 hover:border-daat-gold/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16" style={{
              background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.1) 0%, rgba(11, 31, 59, 0.05) 100%)'
            }}></div>
            <CardHeader>
              <div className="text-5xl font-bold mb-2" style={{ color: '#0B1F3B' }}>{data.why.stat3}</div>
              <CardTitle className="text-lg text-daat-dark">{data.why.stat3Label}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{data.why.stat3Desc}</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Main Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Innovation Opportunities */}
          <Card className="hover:shadow-soft-lg transition-shadow border-2" style={{ borderColor: 'rgba(200, 154, 61, 0.2)' }}>
            <CardHeader>
              <div className="mb-4 h-12 w-12 rounded-2xl flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.15) 0%, rgba(200, 154, 61, 0.1) 100%)'
              }}>
                <Lightbulb className="h-6 w-6" style={{ color: '#C89A3D' }} />
              </div>
              <CardTitle className="text-2xl text-daat-dark">{data.innovation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{data.innovation.desc}</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                  <span className="text-sm">{data.innovation.point1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                  <span className="text-sm">{data.innovation.point2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                  <span className="text-sm">{data.innovation.point3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                  <span className="text-sm">{data.innovation.point4}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Value We Add */}
          <Card className="hover:shadow-soft-lg transition-shadow border-2" style={{ borderColor: 'rgba(44, 74, 110, 0.2)' }}>
            <CardHeader>
              <div className="mb-4 h-12 w-12 rounded-2xl flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.15) 0%, rgba(11, 31, 59, 0.1) 100%)'
              }}>
                <TrendingUp className="h-6 w-6" style={{ color: '#2C4A6E' }} />
              </div>
              <CardTitle className="text-2xl text-daat-dark">{data.value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{data.value.desc}</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#2C4A6E' }} />
                  <span className="text-sm">{data.value.point1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#2C4A6E' }} />
                  <span className="text-sm">{data.value.point2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#2C4A6E' }} />
                  <span className="text-sm">{data.value.point3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#2C4A6E' }} />
                  <span className="text-sm">{data.value.point4}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Real Results */}
        <div className="mt-12">
          <Card className="border-2" style={{
            background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.08) 0%, rgba(200, 154, 61, 0.1) 45%, rgba(44, 74, 110, 0.05) 75%, rgba(10, 22, 40, 0.03) 100%)',
            borderColor: 'rgba(200, 154, 61, 0.3)'
          }}>
            <CardHeader>
              <div className="mb-4 h-12 w-12 rounded-2xl flex items-center justify-center mx-auto" style={{
                background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.2) 0%, rgba(200, 154, 61, 0.15) 100%)'
              }}>
                <Target className="h-6 w-6" style={{ color: '#C89A3D' }} />
              </div>
              <CardTitle className="text-2xl text-daat-dark text-center">{data.results.title}</CardTitle>
              <CardDescription className="text-base mt-2 text-center">{data.results.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/70">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                  <span className="text-sm font-medium">{data.results.example1}</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/70">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                  <span className="text-sm font-medium">{data.results.example2}</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/70">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                  <span className="text-sm font-medium">{data.results.example3}</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/70">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                  <span className="text-sm font-medium">{data.results.example4}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
