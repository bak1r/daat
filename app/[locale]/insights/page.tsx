import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getTranslations, type Locale } from "@/lib/i18n"
import type { Metadata } from "next"
import { format } from "date-fns"
import Image from "next/image"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = getTranslations(params.locale)
  return {
    title: t.insights.metadata.title,
    description: t.insights.metadata.description,
  }
}

const posts = [
  {
    slug: "automation-trends-2024",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
  },
  {
    slug: "finance-ops-best-practices",
    date: "2024-02-01",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
  {
    slug: "telegram-bots-business-automation",
    date: "2024-02-20",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
  },
  {
    slug: "ai-chatbots-customer-experience",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
  },
  {
    slug: "system-integrations-data-flow",
    date: "2024-03-18",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
  },
]

export default function InsightsPage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale)
  
  const postTitles: Record<string, Record<Locale, { title: string; excerpt: string }>> = {
    "automation-trends-2024": {
      tr: {
        title: "2024'te İş Otomasyonu Trendleri",
        excerpt: "2024 yılında iş otomasyonu alanındaki en güncel trendleri keşfedin ve organizasyonunuzun nasıl faydalanabileceğini öğrenin.",
      },
      en: {
        title: "Automation Trends in 2024",
        excerpt: "Discover the latest trends in business automation and how they can benefit your organization.",
      },
      al: {
        title: "Tendencat e Automatizimit në 2024",
        excerpt: "Zbuloni tendencat më të fundit në automatizimin e biznesit dhe si mund të përfitojnë organizatat tuaja.",
      },
    },
    "finance-ops-best-practices": {
      tr: {
        title: "Finans Operasyonları En İyi Uygulamaları",
        excerpt: "Dijital çağda finans operasyonlarını yönetmek için en iyi uygulamaları öğrenin ve verimliliğinizi artırın.",
      },
      en: {
        title: "Finance Operations Best Practices",
        excerpt: "Learn about best practices for managing finance operations in the digital age.",
      },
      al: {
        title: "Praktikat Më të Mira për Operacionet Financiare",
        excerpt: "Mësoni praktikat më të mira për menaxhimin e operacioneve financiare në epokën dixhitale.",
      },
    },
    "telegram-bots-business-automation": {
      tr: {
        title: "Telegram Botları ile İş Otomasyonu: Rehber",
        excerpt: "Telegram botlarının iş süreçlerinizi nasıl dönüştürebileceğini keşfedin ve müşteri deneyimini iyileştirin.",
      },
      en: {
        title: "Telegram Bots for Business Automation: A Complete Guide",
        excerpt: "Discover how Telegram bots can transform your business processes and improve customer experience.",
      },
      al: {
        title: "Bot-et e Telegram për Automatizimin e Biznesit: Një Udhëzues i Plotë",
        excerpt: "Zbuloni se si bot-et e Telegram mund të transformojnë proceset tuaja të biznesit dhe të përmirësojnë përvojën e klientit.",
      },
    },
    "ai-chatbots-customer-experience": {
      tr: {
        title: "AI Chatbot'lar ve Müşteri Deneyimi Dönüşümü",
        excerpt: "Yapay zeka destekli chatbot'ların müşteri hizmetlerinizi nasıl dönüştürebileceğini öğrenin.",
      },
      en: {
        title: "AI Chatbots and Customer Experience Transformation",
        excerpt: "Learn how AI-powered chatbots can transform your customer service operations.",
      },
      al: {
        title: "Chatbot-et AI dhe Transformimi i Përvojës së Klientit",
        excerpt: "Mësoni se si chatbot-et e fuqizuar nga AI mund të transformojnë operacionet tuaja të shërbimit ndaj klientit.",
      },
    },
    "system-integrations-data-flow": {
      tr: {
        title: "Sistem Entegrasyonları: Veri Akışını Optimize Etmek",
        excerpt: "Farklı sistemlerinizi birbirine bağlayarak veri akışını optimize edin ve verimliliği artırın.",
      },
      en: {
        title: "System Integrations: Optimizing Data Flow",
        excerpt: "Optimize data flow by connecting your different systems and increase efficiency.",
      },
      al: {
        title: "Integrimet e Sistemeve: Optimizimi i Rrjedhës së të Dhënave",
        excerpt: "Optimizoni rrjedhën e të dhënave duke lidhur sistemet tuaja të ndryshme dhe rritni efikasitetin.",
      },
    },
  }

  return (
    <div className="pt-20 pb-16 min-h-screen">
      <section className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-4 text-center text-daat-dark" style={{
            background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t.nav.insights}
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            {t.insights.subtitle}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => {
              const postData = postTitles[post.slug][params.locale]
              return (
                <Card key={post.slug} className="hover:shadow-soft-lg transition-shadow border border-daat-steel/10 overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={postData.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-daat-dark">{postData.title}</CardTitle>
                    <CardDescription>
                      {format(new Date(post.date), params.locale === "tr" ? "d MMMM yyyy" : params.locale === "al" ? "d MMMM yyyy" : "MMMM d, yyyy")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{postData.excerpt}</p>
                    <Link
                      href={`/${params.locale}/insights/${post.slug}`}
                      className="font-medium transition-colors hover:underline"
                      style={{ color: '#C89A3D' }}
                    >
                      {t.insights.readMore} →
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}
