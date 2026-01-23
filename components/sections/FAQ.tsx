"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getTranslations, type Locale } from "@/lib/i18n"

interface FAQProps {
  locale: Locale
}

const faqItems = [
  { q: "q1", a: "a1" },
  { q: "q2", a: "a2" },
  { q: "q3", a: "a3" },
  { q: "q4", a: "a4" },
  { q: "q5", a: "a5" },
  { q: "q6", a: "a6" },
]

export function FAQ({ locale }: FAQProps) {
  const t = getTranslations(locale)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(44, 74, 110, 0.02) 50%, rgba(255, 255, 255, 1) 100%)'
    }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{
          background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.08) 0%, rgba(200, 154, 61, 0.05) 100%)'
        }}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{
          background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.08) 0%, rgba(11, 31, 59, 0.05) 100%)'
        }}></div>
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{
              background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {t.faq.title}
            </h2>
          </div>
          <Accordion className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`}>
                <AccordionTrigger 
                  className="text-left"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openIndex === index}
                >
                  {t.faq[item.q as keyof typeof t.faq] as string}
                </AccordionTrigger>
                {openIndex === index && (
                  <AccordionContent>
                    {t.faq[item.a as keyof typeof t.faq] as string}
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
