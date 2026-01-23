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
    <section className="relative py-20 overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(242, 184, 75, 0.03) 50%, rgba(255, 255, 255, 1) 100%)'
    }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl" style={{
          background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.08) 0%, rgba(200, 154, 61, 0.05) 100%)'
        }}></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl" style={{
          background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.08) 0%, rgba(11, 31, 59, 0.05) 100%)'
        }}></div>
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{
            background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            const serviceData = t.services[service.key as keyof typeof t.services] as { title: string; description: string }
            return (
              <Card key={service.key} className="hover:shadow-soft-lg transition-shadow border border-daat-steel/10">
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-2xl flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.15) 0%, rgba(200, 154, 61, 0.1) 100%)'
                  }}>
                    <Icon className="h-6 w-6" style={{ color: '#C89A3D' }} />
                  </div>
                  <CardTitle className="text-daat-dark">{serviceData.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{serviceData.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
