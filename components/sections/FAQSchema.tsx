import { getTranslations, type Locale } from "@/lib/i18n"

interface FAQSchemaProps {
  locale: Locale
}

export function FAQSchema({ locale }: FAQSchemaProps) {
  const t = getTranslations(locale)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daat.com"

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t.faq.q1,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faq.a1,
        },
      },
      {
        "@type": "Question",
        name: t.faq.q2,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faq.a2,
        },
      },
      {
        "@type": "Question",
        name: t.faq.q3,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faq.a3,
        },
      },
      {
        "@type": "Question",
        name: t.faq.q4,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faq.a4,
        },
      },
      {
        "@type": "Question",
        name: t.faq.q5,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faq.a5,
        },
      },
      {
        "@type": "Question",
        name: t.faq.q6,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faq.a6,
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
