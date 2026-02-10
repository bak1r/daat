import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "DAAT - Business Automation & Finance Ops Tech",
    template: "%s | DAAT",
  },
  description: "Modern business automation solutions and finance operations technology",
  keywords: ["business automation", "finance operations", "technology", "Albania"],
  authors: [{ name: "DAAT" }],
  creator: "DAAT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://daat.com",
    siteName: "DAAT",
    title: "DAAT - Business Automation & Finance Ops Tech",
    description: "Modern business automation solutions and finance operations technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAAT - Business Automation & Finance Ops Tech",
    description: "Modern business automation solutions and finance operations technology",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daat.com"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DAAT",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: "Business Automation & Finance Ops Tech",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AL",
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
