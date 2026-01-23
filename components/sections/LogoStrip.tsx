import { getTranslations, type Locale } from "@/lib/i18n"

interface LogoStripProps {
  locale: Locale
}

export function LogoStrip({ locale }: LogoStripProps) {
  const t = getTranslations(locale)
  
  const clients = [
    {
      id: 1,
      name: "TechFlux Solutions",
      logo: "/images/Techflov.png",
    },
    {
      id: 2,
      name: "Nordik Data Systems",
      logo: "/images/nordic-semiconductor9924.logowik.com.webp",
    },
    {
      id: 3,
      name: "Alpina Tech Group",
      logo: "/images/1178-alpine.jpg",
    },
    {
      id: 4,
      name: "Baltic Innovators",
      logo: "/images/ceitec-logo-web.png",
    },
    {
      id: 5,
      name: "Skandinavian Digital",
      logo: "/images/N-iX_logo.jpg",
    },
    {
      id: 6,
      name: "Centrale European Technologies",
      logo: "/images/logoblue-1-e1676981785980.png",
    },
  ]

  return (
    <section className="relative py-12 overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.03) 0%, rgba(255, 255, 255, 1) 50%, rgba(44, 74, 110, 0.03) 100%)'
    }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{
          background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.08) 0%, rgba(200, 154, 61, 0.05) 100%)'
        }}></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{
          background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.08) 0%, rgba(11, 31, 59, 0.05) 100%)'
        }}></div>
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
          {locale === "tr" 
            ? "Avrupa'nın önde gelen teknoloji firmaları tarafından güveniliyoruz"
            : "Trusted by leading European technology companies"}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity group"
              title={client.name}
            >
              <div className="relative h-12 w-32">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
