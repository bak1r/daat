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

  const sectionTitle =
    locale === "tr"
      ? "Firmalaşmadan önce hizmet sunduğumuz firmalar"
      : locale === "al"
        ? "Kompanitë që i kemi shërbyer para themelimit të kompanisë"
        : "Companies we served before incorporation"

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
        <p className="text-center text-sm text-foreground/80 mb-10 font-semibold tracking-wide uppercase">
          {sectionTitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group"
              title={client.name}
            >
              <div className="relative flex h-16 w-36 items-center justify-center rounded-xl border border-border/60 bg-card/80 px-3 py-2 shadow-sm backdrop-blur-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-card/60 dark:border-white/10">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-full object-contain opacity-95 transition-opacity duration-300 group-hover:opacity-100 [filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.2))] dark:[filter:drop-shadow(0_1px_2px_rgba(255,255,255,0.18))]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
