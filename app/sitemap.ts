import { MetadataRoute } from "next"
import { locales, defaultLocale } from "@/lib/i18n"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daat.com"

  const routes = [
    "",
    "/services",
    "/case-studies",
    "/insights",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = locale === defaultLocale
        ? `${baseUrl}${route === "" ? "" : `/${locale}${route}`}`
        : `${baseUrl}/${locale}${route}`
      
      sitemapEntries.push({
        url: url.replace(/\/+/g, '/').replace(/\/$/, '') || baseUrl,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
      })
    })
  })

  return sitemapEntries
}
