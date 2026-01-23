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
    <section className="relative py-20 overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, rgba(247, 249, 252, 1) 0%, rgba(242, 184, 75, 0.05) 50%, rgba(247, 249, 252, 1) 100%)'
    }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full blur-3xl" style={{
          background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.12) 0%, rgba(200, 154, 61, 0.08) 100%)'
        }}></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full blur-3xl" style={{
          background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.12) 0%, rgba(11, 31, 59, 0.08) 100%)'
        }}></div>
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{
            background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 50%, #0B1F3B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t.howWeWork.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.howWeWork.subtitle}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const stepData = t.howWeWork[step.key as keyof typeof t.howWeWork] as { title: string; description: string }
            return (
              <Card key={step.key} className="relative border border-daat-steel/10">
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-2xl flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.15) 0%, rgba(200, 154, 61, 0.1) 100%)'
                  }}>
                    <Icon className="h-6 w-6" style={{ color: '#C89A3D' }} />
                  </div>
                  <div className="absolute top-4 right-4 text-4xl font-bold" style={{ color: 'rgba(200, 154, 61, 0.15)' }}>
                    {index + 1}
                  </div>
                  <CardTitle className="text-daat-dark">{stepData.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{stepData.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
