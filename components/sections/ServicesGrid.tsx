import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, BarChart3, Plug, Bot, GitBranch, Lightbulb } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n"

interface ServicesGridProps {
  locale: Locale
}

const services = [
  {
    icon: Settings,
    key: "automation",
  },
  {
    icon: BarChart3,
    key: "reporting",
  },
  {
    icon: Plug,
    key: "integrations",
  },
  {
    icon: Bot,
    key: "bots",
  },
  {
    icon: GitBranch,
    key: "workflows",
  },
  {
    icon: Lightbulb,
    key: "consulting",
  },
]

export function ServicesGrid({ locale }: ServicesGridProps) {
  const t = getTranslations(locale)

  return (
    <section className="relative section-spacing overflow-x-hidden bg-background">
      {/* Premium decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(242,184,75,0.3) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 animate-blob-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(44,74,110,0.3) 0%, transparent 70%)'
          }}
        />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 gradient-text-gold">
            {t.services.title}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70">
            {t.services.subtitle}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            const serviceData = t.services[service.key as keyof typeof t.services] as { title: string; description: string }
            return (
              <div key={service.key} className="relative group">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-daat-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl"/>
                
                <Card variant="premium" className="relative h-full">
                  <CardHeader>
                    {/* Premium icon with glassmorphism ring */}
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-daat-gold/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"/>
                      <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-daat-gold/10 to-daat-goldLight/5 backdrop-blur-sm border border-daat-gold/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="h-7 w-7 text-daat-gold group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold mb-3">{serviceData.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{serviceData.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
