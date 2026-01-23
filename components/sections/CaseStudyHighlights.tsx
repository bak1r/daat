import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
    <section className="relative py-20 overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(242, 184, 75, 0.03) 50%, rgba(255, 255, 255, 1) 100%)'
    }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full blur-3xl" style={{
          background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.08) 0%, rgba(11, 31, 59, 0.05) 100%)'
        }}></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full blur-3xl" style={{
          background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.08) 0%, rgba(200, 154, 61, 0.05) 100%)'
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
            {t.nav.caseStudies}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.slug} className="overflow-hidden hover:shadow-soft-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/${locale}/case-studies/${study.slug}`}>
                  <Button variant="outline">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
