"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
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
    <section className="relative section-spacing overflow-x-hidden bg-background">
      {/* Premium decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(242,184,75,0.3) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-blob-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(44,74,110,0.3) 0%, transparent 70%)'
          }}
        />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 gradient-text-gold">
              {t.faq.title}
            </h2>
          </div>
          
          {/* Premium FAQ Cards */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={item.q} variant="premium" className="overflow-hidden">
                <Accordion className="w-full">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger 
                      className="px-6 py-5 text-left hover:text-daat-gold transition-colors font-semibold text-lg hover:no-underline"
                      onClick={() => toggleItem(index)}
                      aria-expanded={openIndex === index}
                    >
                      {t.faq[item.q as keyof typeof t.faq] as string}
                    </AccordionTrigger>
                    {openIndex === index && (
                      <AccordionContent className="px-6 pb-6 text-foreground/80 leading-relaxed animate-fade-in">
                        {t.faq[item.a as keyof typeof t.faq] as string}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                </Accordion>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
