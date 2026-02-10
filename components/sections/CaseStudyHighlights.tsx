import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { getTranslations, type Locale } from "@/lib/i18n"

interface CaseStudyHighlightsProps {
  locale: Locale
}

const caseStudies = [
  {
    slug: "telegram-automation-bot",
    title: "Telegram Automation Bot",
    description: "Custom Telegram bot for customer support and order tracking automation.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
  },
  {
    slug: "ai-chatbot-integration",
    title: "AI Chatbot Integration",
    description: "Intelligent AI chatbot implementation for e-commerce customer service.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    slug: "panel-integrations",
    title: "Unified Panel Integrations",
    description: "Integrating multiple systems into a single unified management panel.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation System",
    description: "Complete workflow automation solution for complex business processes.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
  },
  {
    slug: "ecommerce-automation",
    title: "E-commerce Automation Success",
    description: "Automated order processing and inventory management for a leading retailer.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
  },
  {
    slug: "finance-dashboard",
    title: "Real-time Finance Dashboard",
    description: "Comprehensive dashboard for financial operations and real-time reporting.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
  },
]

export function CaseStudyHighlights({ locale }: CaseStudyHighlightsProps) {
  const t = getTranslations(locale)

  return (
    <section className="relative section-spacing overflow-x-hidden bg-background">
      {/* Premium decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(44,74,110,0.3) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-blob-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(242,184,75,0.3) 0%, transparent 70%)'
          }}
        />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 gradient-text-gold">
            {t.nav.caseStudies}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/${locale}/case-studies/${study.slug}`}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-daat-gold focus-visible:ring-offset-2 rounded-xl"
            >
              <Card variant="glass" className="overflow-hidden group cursor-pointer h-full transition-shadow hover:shadow-lg">
                {/* Image with hover overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Premium overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-daat-dark/90 via-daat-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center rounded-lg bg-daat-gold px-6 py-3 text-sm font-semibold text-daat-dark shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Case Study
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-daat-gold transition-colors">{study.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="flex w-full items-center justify-between text-sm font-medium text-daat-gold group/btn">
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
