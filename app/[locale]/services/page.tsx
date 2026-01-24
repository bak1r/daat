import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { type Locale, getTranslations } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = getTranslations(params.locale)
  return {
    title: t.services.metadata.title,
    description: t.services.metadata.description,
  }
}

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="pt-20">
      <ServicesGrid locale={params.locale} />
    </div>
  )
}
