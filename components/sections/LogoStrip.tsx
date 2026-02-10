import { type Locale } from "@/lib/i18n"

interface LogoStripProps {
  locale: Locale
}

export function LogoStrip({ locale }: LogoStripProps) {
  const clients = [
    {
      id: 1,
      name: "DataAI",
      logo: "/images/partners/dataai.png",
    },
    {
      id: 2,
      name: "OTA Legal",
      logo: "/images/partners/ota-legal.png",
    },
    {
      id: 3,
      name: "r10.net",
      logo: "/images/partners/r10-net.webp",
    },
    {
      id: 4,
      name: "Thinfit",
      logo: "/images/partners/thinfit.png",
    },
    {
      id: 5,
      name: "Turcsell",
      logo: "/images/partners/turcsell.png",
    },
    {
      id: 6,
      name: "WM Aracı",
      logo: "/images/partners/wmaraci.jpg",
    },
  ]

  return (
    <section className="relative py-16 md:py-20 overflow-x-hidden bg-gradient-to-br from-daat-gold/5 via-background to-daat-steel/5">
      {/* Premium decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-20 animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(242,184,75,0.3) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-15 animate-blob-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(44,74,110,0.3) 0%, transparent 70%)'
          }}
        />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 max-w-full relative z-10">
        <p className="text-center text-sm text-foreground/60 mb-8 font-medium tracking-wide uppercase">
          {locale === "tr"
            ? "Partnerlerimiz"
            : locale === "al"
              ? "Partnerët tanë"
              : "Our partners"}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 group"
              title={client.name}
            >
              <div className="relative h-12 w-32 group-hover:scale-110 transition-transform">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
