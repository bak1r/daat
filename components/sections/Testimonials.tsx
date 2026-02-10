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
    <section className="relative section-spacing overflow-x-hidden bg-gradient-to-b from-background via-daat-steel/3 to-background">
      {/* Premium decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-blob -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(242,184,75,0.4) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 animate-blob-delayed -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(44,74,110,0.4) 0%, transparent 70%)'
          }}
        />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 gradient-text-gold">
            {t.testimonials.title}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70">
            {t.testimonials.subtitle}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {localeTestimonials.map((testimonial, index) => (
            <Card key={index} variant="premium" className="relative group">
              {/* Decorative quote mark */}
              <div className="absolute -top-4 -left-4 text-8xl text-daat-gold/20 font-serif leading-none select-none pointer-events-none">"</div>
              
              <CardContent className="pt-10 relative">
                {/* Premium star rating with glow */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-daat-gold text-daat-gold drop-shadow-[0_0_8px_rgba(200,154,61,0.6)] group-hover:scale-110 transition-transform" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                
                {/* Quote content */}
                <p className="mb-6 text-foreground/80 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author info with separator */}
                <div className="pt-4 border-t border-daat-gold/20">
                  <p className="font-bold text-lg mb-1">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
