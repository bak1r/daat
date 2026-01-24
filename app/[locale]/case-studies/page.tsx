import { CaseStudyHighlights } from "@/components/sections/CaseStudyHighlights"
import { type Locale, getTranslations } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = getTranslations(params.locale)
  return {
    title: t.caseStudies.metadata.title,
    description: t.caseStudies.metadata.description,
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
