import { Hero } from "@/components/sections/Hero"
import { WhyAlbania } from "@/components/sections/WhyAlbania"
import { LogoStrip } from "@/components/sections/LogoStrip"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { HowWeWork } from "@/components/sections/HowWeWork"
import { CaseStudyHighlights } from "@/components/sections/CaseStudyHighlights"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { FAQSchema } from "@/components/sections/FAQSchema"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { type Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daat.com"
  let title = "DAAT - Business Automation & Finance Ops Tech"
  let description = "Take your business to the next level with modern automation solutions and finance operations technology."
  
  if (params.locale === "tr") {
    title = "DAAT - İş Otomasyonu ve Finans Operasyonları Teknolojisi"
    description = "Modern iş otomasyon çözümleri ve finans operasyonları teknolojisi ile işinizi bir sonraki seviyeye taşıyın."
  } else if (params.locale === "al") {
    title = "DAAT - Automatizimi i Biznesit dhe Teknologjia e Operacioneve Financiare"
    description = "Çoni biznesin tuaj në nivelin tjetër me zgjidhje moderne të automatizimit dhe teknologjinë e operacioneve financiare."
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${params.locale}`,
      locale: params.locale === "tr" ? "tr_TR" : params.locale === "al" ? "sq_AL" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  return (
    <>
      <FAQSchema locale={params.locale} />
      <Hero locale={params.locale} />
      <WhyAlbania locale={params.locale} />
      <LogoStrip locale={params.locale} />
      <ServicesGrid locale={params.locale} />
      <HowWeWork locale={params.locale} />
      <CaseStudyHighlights locale={params.locale} />
      <Testimonials locale={params.locale} />
      <FAQ locale={params.locale} />
      <FinalCTA locale={params.locale} />
    </>
  )
}
