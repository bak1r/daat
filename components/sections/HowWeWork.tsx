import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Code, Rocket, HeadphonesIcon } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n"

interface HowWeWorkProps {
  locale: Locale
}

const steps = [
  {
    icon: Search,
    key: "discovery",
  },
  {
    icon: Code,
    key: "build",
  },
  {
    icon: Rocket,
    key: "deploy",
  },
  {
    icon: HeadphonesIcon,
    key: "support",
  },
]

export function HowWeWork({ locale }: HowWeWorkProps) {
  const t = getTranslations(locale)

  return (
    <section className="relative section-spacing overflow-x-hidden bg-gradient-to-b from-background via-daat-gold/2 to-background">
      {/* Premium decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(242,184,75,0.4) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-15 animate-blob-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(44,74,110,0.4) 0%, transparent 70%)'
          }}
        />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 gradient-text-gold">
            {t.howWeWork.title}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70">
            {t.howWeWork.subtitle}
          </p>
        </div>
        {/* Premium Process Steps with Connecting Line */}
        <div className="relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-daat-gold/30 to-transparent z-0" />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              const stepData = t.howWeWork[step.key as keyof typeof t.howWeWork] as { title: string; description: string }
              return (
                <div key={step.key} className="group">
                  {/* Premium Step Badge */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-daat-gold to-daat-goldLight opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                    
                    {/* Badge with gradient border */}
                    <div className="relative w-full h-full rounded-full bg-background border-2 border-daat-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow-gold">
                      {/* Step number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold bg-gradient-to-br from-daat-gold to-daat-goldLight bg-clip-text text-transparent">
                          {index + 1}
                        </span>
                      </div>
                      
                      {/* Icon badge (bottom right) */}
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-daat-gold to-daat-goldLight border-2 border-background flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-4 w-4 text-daat-dark" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <Card variant="flat" className="text-center group-hover:shadow-premium transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold mb-2">{stepData.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{stepData.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
