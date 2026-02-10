import fs from 'fs'
import path from 'path'

// Read JSON files directly
const alTranslations = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'content/translations/al.json'), 'utf-8')
)
const enTranslations = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'content/translations/en.json'), 'utf-8')
)
const trTranslations = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'content/translations/tr.json'), 'utf-8')
)

interface KnowledgeBase {
  locale: string
  sections: {
    services: Array<{ title: string; description: string }>
    process: Array<{ title: string; description: string }>
    faq: Array<{ question: string; answer: string }>
    contact: {
      address: string
      email: string
      phone: string
    }
    about: {
      mission: string
      whyAlbania: string
      value: string
      team: Array<{ name: string; role: string; bio: string }>
    }
  }
}

function generateKnowledgeBase(translations: any, locale: string): KnowledgeBase {
  // Extract services
  const services = [
    { title: translations.services.automation.title, description: translations.services.automation.description },
    { title: translations.services.reporting.title, description: translations.services.reporting.description },
    { title: translations.services.integrations.title, description: translations.services.integrations.description },
    { title: translations.services.bots.title, description: translations.services.bots.description },
    { title: translations.services.workflows.title, description: translations.services.workflows.description },
    { title: translations.services.consulting.title, description: translations.services.consulting.description },
  ]

  // Extract process steps
  const process = [
    { title: translations.howWeWork.discovery.title, description: translations.howWeWork.discovery.description },
    { title: translations.howWeWork.build.title, description: translations.howWeWork.build.description },
    { title: translations.howWeWork.deploy.title, description: translations.howWeWork.deploy.description },
    { title: translations.howWeWork.support.title, description: translations.howWeWork.support.description },
  ]

  // Extract FAQ
  const faq = [
    { question: translations.faq.q1, answer: translations.faq.a1 },
    { question: translations.faq.q2, answer: translations.faq.a2 },
    { question: translations.faq.q3, answer: translations.faq.a3 },
    { question: translations.faq.q4, answer: translations.faq.a4 },
    { question: translations.faq.q5, answer: translations.faq.a5 },
    { question: translations.faq.q6, answer: translations.faq.a6 },
  ]

  // Contact info (same for all locales)
  const contact = {
    address: "Rruga Artan Lenja 81HX+F94, Tiran, Arnavutluk",
    email: "info@daat.com",
    phone: "+355693788480"
  }

  // About info
  const teamByLocale: Record<string, Array<{ name: string; role: string; bio: string }>> = {
    en: [
      {
        name: "Orhan Erdem",
        role: "Co-Founder & Head of Technology",
        bio: "10+ years of experience in software architecture and business automation systems.",
      },
      {
        name: "Onur Bolukbasi",
        role: "Co-Founder & Head of Operations",
        bio: "Expert in operations management and process optimization with a strong background in finance technology.",
      },
      {
        name: "Suheda Nur",
        role: "Director",
        bio: "Strategic leader with extensive experience in business development and client relations.",
      },
    ],
    tr: [
      {
        name: "Orhan Erdem",
        role: "Kurucu Ortak & Teknoloji Lideri",
        bio: "Yazılım mimarisi ve iş otomasyonu sistemlerinde 10+ yıl deneyim.",
      },
      {
        name: "Onur Bolukbasi",
        role: "Kurucu Ortak & Operasyon Lideri",
        bio: "Finans teknolojileri odağında operasyon yönetimi ve süreç optimizasyonu uzmanı.",
      },
      {
        name: "Suheda Nur",
        role: "Direktör",
        bio: "İş geliştirme ve müşteri ilişkilerinde deneyimli stratejik lider.",
      },
    ],
    al: [
      {
        name: "Orhan Erdem",
        role: "Bashkëthemelues & Drejtues i Teknologjisë",
        bio: "10+ vite përvojë në arkitekturë software dhe sisteme automatizimi biznesi.",
      },
      {
        name: "Onur Bolukbasi",
        role: "Bashkëthemelues & Drejtues i Operacioneve",
        bio: "Ekspert në menaxhim operacionesh dhe optimizim procesesh me fokus në finance-tech.",
      },
      {
        name: "Suheda Nur",
        role: "Drejtore",
        bio: "Udhëheqëse strategjike me përvojë në zhvillim biznesi dhe marrëdhënie me klientët.",
      },
    ],
  }

  const about = {
    mission: translations.whyAlbania.title + " - " + translations.whyAlbania.subtitle,
    whyAlbania: translations.whyAlbania.innovation.desc,
    value: translations.whyAlbania.value.desc,
    team: teamByLocale[locale] || teamByLocale.en,
  }

  return {
    locale,
    sections: {
      services,
      process,
      faq,
      contact,
      about
    }
  }
}

// Generate knowledge bases for all locales
const knowledgeBases = [
  generateKnowledgeBase(alTranslations, 'al'),
  generateKnowledgeBase(enTranslations, 'en'),
  generateKnowledgeBase(trTranslations, 'tr'),
]

// Write to file
const outputPath = path.join(process.cwd(), 'lib', 'knowledge-base.json')
fs.writeFileSync(
  outputPath,
  JSON.stringify(knowledgeBases, null, 2),
  'utf-8'
)

console.log('✅ Knowledge base generated successfully!')
console.log(`📄 Output: ${outputPath}`)
console.log(`📊 Locales: ${knowledgeBases.map(kb => kb.locale).join(', ')}`)
