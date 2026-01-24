import { notFound } from "next/navigation"
import Image from "next/image"
import { type Locale } from "@/lib/i18n"
import type { Metadata } from "next"
import { caseStudies } from "@/content/case-studies"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string }
}): Promise<Metadata> {
  const study = caseStudies[params.slug]?.[params.locale]
  if (!study) return {}

  return {
    title: `${study.title} - DAAT`,
    description: study.description,
  }
}

export default function CaseStudyPage({
  params,
}: {
  params: { locale: Locale; slug: string }
}) {
  const study = caseStudies[params.slug]?.[params.locale]

  if (!study) {
    notFound()
  }

  return (
    <div className="pt-20 pb-16">
      <article className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-daat-dark" style={{
            background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {study.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{study.description}</p>
          <div className="relative h-64 md:h-96 w-full mb-12 rounded-2xl overflow-hidden">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-none space-y-6 prose prose-lg max-w-none">
            {study.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                const text = paragraph.replace(/\*\*/g, '')
                return <h3 key={index} className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-daat-dark">{text}</h3>
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '))
                return (
                  <ul key={index} className="list-disc list-outside mb-6 space-y-2 text-muted-foreground pl-6">
                    {items.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={index} className="mb-6 text-muted-foreground leading-relaxed">{paragraph}</p>
            })}
          </div>
        </div>
      </article>
    </div>
  )
}
