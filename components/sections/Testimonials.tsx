import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { getTranslations, type Locale } from "@/lib/i18n"

interface TestimonialsProps {
  locale: Locale
}

const testimonials = {
  al: [
    {
      name: "Ahmet Yılmaz",
      role: "Menaxher Operacionesh, TeknoRetail",
      content: "Falë botit Telegram që zhvilloi DAAT, koha jonë e mbështetjes së klientit u ul me 70%. Tani ofrojmë shërbim të automatizuar 24/7 dhe kënaqësia e klientëve tanë u rrit ndjeshëm. Ekipi ynë tani mund të përqendrohet në çështje më komplekse.",
      rating: 5,
    },
    {
      name: "Maria Petrova",
      role: "Drejtore E-Tregtie, BalkanShop",
      content: "Falë automatizimit të përpunimit të porosive dhe menaxhimit të inventarit, ne përpunojmë pa probleme mbi 1000 porosi në ditë. Integrimet e sistemit funksionojnë në mënyrë perfekte dhe gabimet manuale janë pothuajse zero. Unë me siguri i rekomandoj.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Menaxher Financiar, Innovation Group",
      content: "Falë dashboard-eve të tyre financiare, ne mund të ndjekim të gjitha të dhënat tona financiare nga një vend. Koha jonë e raportimit u ul me 70% dhe proceset tona të vendimmarrjes u përshpejtuan ndjeshëm. Të punosh me të dhëna në kohë reale është një përvojë e shkëlqyer.",
      rating: 5,
    },
  ],
  tr: [
    {
      name: "Ahmet Yılmaz",
      role: "Operasyon Müdürü, TeknoRetail",
      content: "DAAT'ın geliştirdiği Telegram botu sayesinde müşteri destek süremiz %70 azaldı. Artık 7/24 otomatik hizmet veriyoruz ve müşteri memnuniyetimiz çok arttı. Ekibimiz artık daha karmaşık sorunlara odaklanabiliyor.",
      rating: 5,
    },
    {
      name: "Maria Petrova",
      role: "E-Ticaret Direktörü, BalkanShop",
      content: "Sipariş işleme ve stok yönetimi otomasyonu sayesinde günlük 1000+ siparişi sorunsuz işliyoruz. Sistem entegrasyonları mükemmel çalışıyor ve manuel hatalar neredeyse sıfıra indi. Kesinlikle tavsiye ederim.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Finans Müdürü, İnovasyon Grup",
      content: "Finansal dashboard'ları sayesinde tüm finansal verilerimizi tek bir yerden takip edebiliyoruz. Raporlama süremiz %70 azaldı ve karar verme süreçlerimiz çok hızlandı. Gerçek zamanlı verilerle çalışmak harika bir deneyim.",
      rating: 5,
    },
  ],
  en: [
    {
      name: "Ahmet Yılmaz",
      role: "Operations Manager, TeknoRetail",
      content: "Thanks to DAAT's Telegram bot, our customer support time decreased by 70%. We now provide 24/7 automated service and our customer satisfaction has increased significantly. Our team can now focus on more complex issues.",
      rating: 5,
    },
    {
      name: "Maria Petrova",
      role: "E-Commerce Director, BalkanShop",
      content: "With order processing and inventory management automation, we seamlessly handle 1000+ orders daily. System integrations work perfectly and manual errors are almost zero. I definitely recommend them.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Finance Manager, Innovation Group",
      content: "Thanks to their financial dashboards, we can track all our financial data from one place. Our reporting time decreased by 70% and our decision-making processes accelerated significantly. Working with real-time data is a great experience.",
      rating: 5,
    },
  ],
}

export function Testimonials({ locale }: TestimonialsProps) {
  const t = getTranslations(locale)
  const localeTestimonials = testimonials[locale]

  return (
    <section className="relative py-20 overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, rgba(247, 249, 252, 1) 0%, rgba(242, 184, 75, 0.03) 50%, rgba(247, 249, 252, 1) 100%)'
    }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full blur-3xl -translate-y-1/2" style={{
          background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.12) 0%, rgba(200, 154, 61, 0.08) 100%)'
        }}></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl -translate-y-1/2" style={{
          background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.12) 0%, rgba(11, 31, 59, 0.08) 100%)'
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
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {localeTestimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-soft-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4" style={{ fill: '#C89A3D', color: '#C89A3D' }} />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
