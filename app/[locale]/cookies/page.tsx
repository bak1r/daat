import { getTranslations, type Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = getTranslations(params.locale)
  return {
    title: `${t.footer.legal.cookies} - DAAT`,
    description: params.locale === "tr"
      ? "Çerez politikası ve kullanım bilgileri"
      : params.locale === "al"
      ? "Politika e cookies dhe informacioni i përdorimit"
      : "Cookie policy and usage information",
  }
}

export default function CookiesPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale

  const content = {
    tr: {
      title: "Çerez Politikası",
      intro: "Bu Çerez Politikası, DAAT web sitesinin çerez kullanımını açıklamaktadır. Arnavutluk Veri Koruma Yasası (Ligji Nr. 9887) ve GDPR uyarınca hazırlanmıştır.",
      whatAre: "Çerezler Nedir?",
      whatAreDesc: "Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin düzgün çalışmasını sağlar ve kullanıcı deneyimini iyileştirir.",
      types: "Kullandığımız Çerez Türleri",
      essential: "Zorunlu Çerezler",
      essentialDesc: "Web sitesinin temel işlevlerini sağlamak için gereklidir. Bu çerezler olmadan site düzgün çalışmaz.",
      analytics: "Analitik Çerezler",
      analyticsDesc: "Web sitesinin nasıl kullanıldığını anlamak için kullanılır. Bu çerezler, ziyaretçi sayısı ve sayfa görüntülemeleri gibi bilgileri toplar.",
      functional: "İşlevsel Çerezler",
      functionalDesc: "Dil tercihleri ve diğer ayarlar gibi kullanıcı tercihlerini hatırlamak için kullanılır.",
      yourRights: "Haklarınız",
      yourRightsDesc: "Arnavutluk yasaları ve GDPR uyarınca, çerez kullanımına ilişkin haklarınız bulunmaktadır:",
      right1: "Çerezleri reddetme hakkı",
      right2: "Çerez ayarlarınızı değiştirme hakkı",
      right3: "Kişisel verilerinize erişim hakkı",
      right4: "Verilerinizin silinmesini talep etme hakkı",
      contact: "İletişim",
      contactDesc: "Çerez politikamız hakkında sorularınız için:",
      email: "E-posta: info@daat.com",
      address: "Adres: Rruga Artan Lenja 81HX+F94 Tiran, Arnavutluk",
      lastUpdated: "Son Güncelleme: 2024"
    },
    en: {
      title: "Cookie Policy",
      intro: "This Cookie Policy explains how DAAT website uses cookies. It is prepared in accordance with Albanian Data Protection Law (Law No. 9887) and GDPR.",
      whatAre: "What Are Cookies?",
      whatAreDesc: "Cookies are small text files saved to your device when you visit websites. These files ensure the website functions properly and improve user experience.",
      types: "Types of Cookies We Use",
      essential: "Essential Cookies",
      essentialDesc: "Required for the website's basic functions. The site will not work properly without these cookies.",
      analytics: "Analytics Cookies",
      analyticsDesc: "Used to understand how the website is used. These cookies collect information such as visitor count and page views.",
      functional: "Functional Cookies",
      functionalDesc: "Used to remember user preferences such as language preferences and other settings.",
      yourRights: "Your Rights",
      yourRightsDesc: "In accordance with Albanian laws and GDPR, you have rights regarding cookie usage:",
      right1: "Right to refuse cookies",
      right2: "Right to change your cookie settings",
      right3: "Right to access your personal data",
      right4: "Right to request deletion of your data",
      contact: "Contact",
      contactDesc: "For questions about our cookie policy:",
      email: "Email: info@daat.com",
      address: "Address: Rruga Artan Lenja 81HX+F94 Tiran, Albania",
      lastUpdated: "Last Updated: 2024"
    },
    al: {
      title: "Politika e Cookies",
      intro: "Kjo Politika e Cookies shpjegon se si faqja e internetit e DAAT përdor cookies. Është përgatitur në përputhje me Ligjin e Mbrojtjes së të Dhënave të Shqipërisë (Ligji Nr. 9887) dhe GDPR.",
      whatAre: "Çfarë Janë Cookies?",
      whatAreDesc: "Cookies janë skedarë të vegjël teksti që ruhen në pajisjen tuaj kur vizitoni faqet e internetit. Këto skedarë sigurojnë që faqja e internetit të funksionojë siç duhet dhe përmirësojnë përvojën e përdoruesit.",
      types: "Llojet e Cookies që Përdorim",
      essential: "Cookies Themelore",
      essentialDesc: "Të nevojshme për funksionet themelore të faqes së internetit. Faqja nuk do të funksionojë siç duhet pa këto cookies.",
      analytics: "Cookies Analitike",
      analyticsDesc: "Përdoren për të kuptuar se si përdoret faqja e internetit. Këto cookies mbledhin informacione si numri i vizitorëve dhe shikimet e faqeve.",
      functional: "Cookies Funksionale",
      functionalDesc: "Përdoren për të kujtuar preferencat e përdoruesit si preferencat e gjuhës dhe cilësimet e tjera.",
      yourRights: "Të Drejtat Tuaja",
      yourRightsDesc: "Në përputhje me ligjet shqiptare dhe GDPR, ju keni të drejta në lidhje me përdorimin e cookies:",
      right1: "E drejta për të refuzuar cookies",
      right2: "E drejta për të ndryshuar cilësimet tuaja të cookies",
      right3: "E drejta për të hyrë në të dhënat tuaja personale",
      right4: "E drejta për të kërkuar fshirjen e të dhënave tuaja",
      contact: "Kontakt",
      contactDesc: "Për pyetje në lidhje me politikën tonë të cookies:",
      email: "Email: info@daat.com",
      address: "Adresa: Rruga Artan Lenja 81HX+F94 Tiran, Shqipëri",
      lastUpdated: "Përditësuar Së Fundi: 2024"
    },
  }

  const t = content[locale]

  return (
    <div className="pt-20 pb-16">
      <article className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-daat-dark" style={{
            background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t.title}
          </h1>
          
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.intro}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.whatAre}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.whatAreDesc}</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.types}</h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-daat-dark">{t.essential}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.essentialDesc}</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-daat-dark">{t.analytics}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.analyticsDesc}</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-daat-dark">{t.functional}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.functionalDesc}</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.yourRights}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.yourRightsDesc}</p>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-6">
                <li className="leading-relaxed">{t.right1}</li>
                <li className="leading-relaxed">{t.right2}</li>
                <li className="leading-relaxed">{t.right3}</li>
                <li className="leading-relaxed">{t.right4}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.contact}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.contactDesc}</p>
              <div className="space-y-1 text-muted-foreground">
                <p>{t.email}</p>
                <p>{t.address}</p>
              </div>
            </section>

            <div className="mt-12 pt-6 border-t border-daat-steel/10 text-sm text-muted-foreground">
              <p>{t.lastUpdated}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
