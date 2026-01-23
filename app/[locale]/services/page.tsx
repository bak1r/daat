import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { type Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const isTR = params.locale === "tr"
  return {
    title: isTR ? "Hizmetler - DAAT" : "Services - DAAT",
    description: isTR
      ? "İş süreçlerinizi optimize eden kapsamlı çözümler"
      : "Comprehensive solutions that optimize your business processes",
  }
}

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="pt-20">
      <ServicesGrid locale={params.locale} />
    </div>
  )
}
