import { ContactForm } from "@/components/forms/ContactForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const isTR = params.locale === "tr"
  return {
    title: isTR ? "İletişim - DAAT" : "Contact - DAAT",
    description: isTR
      ? "Bizimle iletişime geçin"
      : "Get in touch with us",
  }
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const isTR = params.locale === "tr"
  const t = require("@/content/translations/" + params.locale + ".json")

  return (
    <div className="pt-20 pb-16 min-h-screen">
      <section className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-daat-dark" style={{
              background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {t.contact.title}
            </h1>
            <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
          </div>
          <Card className="border border-daat-steel/10">
            <CardHeader>
              <CardTitle className="text-daat-dark">{t.contact.title}</CardTitle>
              <CardDescription>{t.contact.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm locale={params.locale} />
            </CardContent>
          </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
