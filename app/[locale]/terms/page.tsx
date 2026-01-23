import { getTranslations, type Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = getTranslations(params.locale)
  return {
    title: `${t.footer.legal.terms} - DAAT`,
  }
}

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale)

  return (
    <div className="pt-20 pb-16">
      <article className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-daat-dark" style={{
            background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t.footer.legal.terms}
          </h1>
        </div>
      </article>
    </div>
  )
}
