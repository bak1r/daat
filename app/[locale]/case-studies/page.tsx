import { CaseStudyHighlights } from "@/components/sections/CaseStudyHighlights"
import { type Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const isTR = params.locale === "tr"
  return {
    title: isTR ? "Vaka Çalışmaları - DAAT" : "Case Studies - DAAT",
    description: isTR
      ? "Başarı hikayelerimiz ve müşteri projelerimiz"
      : "Our success stories and client projects",
  }
}

export default function CaseStudiesPage({
  params,
}: {
  params: { locale: Locale }
}) {
  return (
    <div className="pt-20">
      <CaseStudyHighlights locale={params.locale} />
    </div>
  )
}
