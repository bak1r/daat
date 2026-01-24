import { getTranslations, type Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = getTranslations(params.locale)
  const content = {
    tr: { description: "GDPR uyumluluğu ve veri koruma bilgileri" },
    en: { description: "GDPR compliance and data protection information" },
    al: { description: "Përputhshmëria GDPR dhe informacioni i mbrojtjes së të dhënave" },
  }
  return {
    title: `${t.footer.legal.gdpr} - DAAT`,
    description: content[params.locale].description,
  }
}

export default function GDPRPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale

  const content = {
    tr: {
      title: "GDPR Uyumluluğu",
      intro: "DAAT, kişisel verilerin korunması konusunda yüksek standartlara bağlıdır. Bu sayfa, Arnavutluk Veri Koruma Yasası (Ligji Nr. 9887) ve Genel Veri Koruma Tüzüğü (GDPR) uyarınca uyumluluğumuzu açıklamaktadır.",
      dataController: "Veri Sorumlusu",
      dataControllerDesc: "DAAT, kişisel verilerinizin veri sorumlusudur. İletişim bilgilerimiz:",
      address: "Adres: Rruga Artan Lenja 81HX+F94 Tiran, Arnavutluk",
      email: "E-posta: info@daat.com",
      phone: "Telefon: +38268186300",
      dataWeCollect: "Topladığımız Veriler",
      dataWeCollectDesc: "Yasalara uygun olarak, yalnızca gerekli verileri topluyoruz:",
      data1: "İletişim bilgileri (ad, e-posta, telefon)",
      data2: "Web sitesi kullanım verileri",
      data3: "İletişim formu gönderileri",
      data4: "Teknik veriler (IP adresi, tarayıcı bilgileri)",
      purpose: "Veri İşleme Amaçları",
      purposeDesc: "Kişisel verilerinizi aşağıdaki amaçlar için işliyoruz:",
      purpose1: "Hizmetlerimizi sağlamak ve geliştirmek",
      purpose2: "Müşteri desteği sunmak",
      purpose3: "Yasal yükümlülükleri yerine getirmek",
      purpose4: "Web sitesi analitiği ve iyileştirme",
      legalBasis: "Yasal Dayanak",
      legalBasisDesc: "Veri işleme faaliyetlerimiz aşağıdaki yasal dayanaklara göre gerçekleştirilmektedir:",
      basis1: "Sözleşmenin ifası (hizmet sağlama)",
      basis2: "Yasal yükümlülüklerin yerine getirilmesi",
      basis3: "Meşru menfaatler (web sitesi iyileştirme)",
      basis4: "Açık rıza (iletişim formları)",
      yourRights: "Haklarınız",
      yourRightsDesc: "Arnavutluk yasaları ve GDPR uyarınca aşağıdaki haklara sahipsiniz:",
      right1: "Erişim hakkı: Verilerinize erişim talep edebilirsiniz",
      right2: "Düzeltme hakkı: Yanlış verilerin düzeltilmesini talep edebilirsiniz",
      right3: "Silme hakkı: Verilerinizin silinmesini talep edebilirsiniz",
      right4: "İtiraz hakkı: Veri işlemeye itiraz edebilirsiniz",
      right5: "Veri taşınabilirliği: Verilerinizi başka bir hizmete aktarabilirsiniz",
      right6: "İşlemeye itiraz: Belirli durumlarda veri işlemeye itiraz edebilirsiniz",
      dataRetention: "Veri Saklama",
      dataRetentionDesc: "Kişisel verilerinizi yalnızca gerekli olduğu sürece saklıyoruz. Veri saklama süreleri:",
      retention1: "İletişim formu verileri: 2 yıl",
      retention2: "Web sitesi analitik verileri: 26 ay",
      retention3: "Yasal yükümlülükler gerektirdiğinde daha uzun süreler",
      security: "Güvenlik",
      securityDesc: "Verilerinizin güvenliğini sağlamak için teknik ve organizasyonel önlemler alıyoruz:",
      security1: "SSL şifreleme",
      security2: "Güvenli veri saklama",
      security3: "Erişim kontrolleri",
      security4: "Düzenli güvenlik denetimleri",
      dataSharing: "Veri Paylaşımı",
      dataSharingDesc: "Kişisel verilerinizi yalnızca aşağıdaki durumlarda paylaşıyoruz:",
      sharing1: "Yasal yükümlülükler gerektirdiğinde",
      sharing2: "Hizmet sağlayıcılarımızla (veri işleme sözleşmeleri ile)",
      sharing3: "Açık rızanızla",
      contact: "İletişim ve Şikayetler",
      contactDesc: "Haklarınızı kullanmak veya sorularınız için:",
      complaint: "Şikayetleriniz için Arnavutluk Veri Koruma Otoritesi'ne (Autoriteti për Mbrojtjen e të Dhënave Personale) başvurabilirsiniz.",
      lastUpdated: "Son Güncelleme: 2024"
    },
    en: {
      title: "GDPR Compliance",
      intro: "DAAT is committed to high standards in personal data protection. This page explains our compliance with Albanian Data Protection Law (Law No. 9887) and the General Data Protection Regulation (GDPR).",
      dataController: "Data Controller",
      dataControllerDesc: "DAAT is the data controller for your personal data. Our contact information:",
      address: "Address: Rruga Artan Lenja 81HX+F94 Tiran, Albania",
      email: "Email: info@daat.com",
      phone: "Phone: +38268186300",
      dataWeCollect: "Data We Collect",
      dataWeCollectDesc: "In accordance with the law, we only collect necessary data:",
      data1: "Contact information (name, email, phone)",
      data2: "Website usage data",
      data3: "Contact form submissions",
      data4: "Technical data (IP address, browser information)",
      purpose: "Data Processing Purposes",
      purposeDesc: "We process your personal data for the following purposes:",
      purpose1: "Providing and improving our services",
      purpose2: "Providing customer support",
      purpose3: "Fulfilling legal obligations",
      purpose4: "Website analytics and improvement",
      legalBasis: "Legal Basis",
      legalBasisDesc: "Our data processing activities are based on the following legal bases:",
      basis1: "Contract performance (service provision)",
      basis2: "Fulfillment of legal obligations",
      basis3: "Legitimate interests (website improvement)",
      basis4: "Explicit consent (contact forms)",
      yourRights: "Your Rights",
      yourRightsDesc: "In accordance with Albanian laws and GDPR, you have the following rights:",
      right1: "Right of access: You can request access to your data",
      right2: "Right to rectification: You can request correction of incorrect data",
      right3: "Right to erasure: You can request deletion of your data",
      right4: "Right to object: You can object to data processing",
      right5: "Data portability: You can transfer your data to another service",
      right6: "Right to object to processing: You can object to data processing in certain circumstances",
      dataRetention: "Data Retention",
      dataRetentionDesc: "We only retain your personal data for as long as necessary. Data retention periods:",
      retention1: "Contact form data: 2 years",
      retention2: "Website analytics data: 26 months",
      retention3: "Longer periods when required by legal obligations",
      security: "Security",
      securityDesc: "We implement technical and organizational measures to ensure the security of your data:",
      security1: "SSL encryption",
      security2: "Secure data storage",
      security3: "Access controls",
      security4: "Regular security audits",
      dataSharing: "Data Sharing",
      dataSharingDesc: "We only share your personal data in the following circumstances:",
      sharing1: "When required by legal obligations",
      sharing2: "With our service providers (with data processing agreements)",
      sharing3: "With your explicit consent",
      contact: "Contact and Complaints",
      contactDesc: "To exercise your rights or for questions:",
      complaint: "For complaints, you can contact the Albanian Data Protection Authority (Autoriteti për Mbrojtjen e të Dhënave Personale).",
      lastUpdated: "Last Updated: 2024"
    },
    al: {
      title: "Përputhshmëria GDPR",
      intro: "DAAT është i përkushtuar për standarde të larta në mbrojtjen e të dhënave personale. Kjo faqe shpjegon përputhshmërinë tonë me Ligjin e Mbrojtjes së të Dhënave të Shqipërisë (Ligji Nr. 9887) dhe Rregulloren e Përgjithshme për Mbrojtjen e të Dhënave (GDPR).",
      dataController: "Kontrolluesi i të Dhënave",
      dataControllerDesc: "DAAT është kontrolluesi i të dhënave për të dhënat tuaja personale. Informacioni ynë i kontaktit:",
      address: "Adresa: Rruga Artan Lenja 81HX+F94 Tiran, Shqipëri",
      email: "Email: info@daat.com",
      phone: "Telefoni: +38268186300",
      dataWeCollect: "Të Dhënat që Mbledhim",
      dataWeCollectDesc: "Në përputhje me ligjin, ne mbledhim vetëm të dhëna të nevojshme:",
      data1: "Informacioni i kontaktit (emri, email, telefoni)",
      data2: "Të dhënat e përdorimit të faqes së internetit",
      data3: "Dërgimet e formularit të kontaktit",
      data4: "Të dhënat teknike (adresa IP, informacioni i shfletuesit)",
      purpose: "Qëllimet e Përpunimit të të Dhënave",
      purposeDesc: "Ne përpunojmë të dhënat tuaja personale për qëllimet e mëposhtme:",
      purpose1: "Ofrimi dhe përmirësimi i shërbimeve tona",
      purpose2: "Ofrimi i mbështetjes së klientit",
      purpose3: "Përmbushja e detyrimeve ligjore",
      purpose4: "Analitika dhe përmirësimi i faqes së internetit",
      legalBasis: "Baza Ligjore",
      legalBasisDesc: "Aktivitetet tona të përpunimit të të dhënave bazohen në bazat ligjore të mëposhtme:",
      basis1: "Ekzekutimi i kontratës (ofrimi i shërbimit)",
      basis2: "Përmbushja e detyrimeve ligjore",
      basis3: "Interesat legjitime (përmirësimi i faqes së internetit)",
      basis4: "Pëlqimi i qartë (format e kontaktit)",
      yourRights: "Të Drejtat Tuaja",
      yourRightsDesc: "Në përputhje me ligjet shqiptare dhe GDPR, ju keni të drejtat e mëposhtme:",
      right1: "E drejta e qasjes: Mund të kërkoni qasje në të dhënat tuaja",
      right2: "E drejta për korrigjim: Mund të kërkoni korrigjimin e të dhënave të pasakta",
      right3: "E drejta për fshirje: Mund të kërkoni fshirjen e të dhënave tuaja",
      right4: "E drejta për kundërshtim: Mund të kundërshtoni përpunimin e të dhënave",
      right5: "Lëvizshmëria e të dhënave: Mund të transferoni të dhënat tuaja në një shërbim tjetër",
      right6: "E drejta për të kundërshtuar përpunimin: Mund të kundërshtoni përpunimin e të dhënave në rrethana të caktuara",
      dataRetention: "Ruajtja e të Dhënave",
      dataRetentionDesc: "Ne ruajmë të dhënat tuaja personale vetëm për aq kohë sa është e nevojshme. Periudhat e ruajtjes së të dhënave:",
      retention1: "Të dhënat e formularit të kontaktit: 2 vjet",
      retention2: "Të dhënat analitike të faqes së internetit: 26 muaj",
      retention3: "Periudha më të gjata kur kërkohen nga detyrimet ligjore",
      security: "Siguria",
      securityDesc: "Ne zbatojmë masa teknike dhe organizative për të siguruar sigurinë e të dhënave tuaja:",
      security1: "Enkriptimi SSL",
      security2: "Ruajtja e sigurt e të dhënave",
      security3: "Kontrolli i qasjes",
      security4: "Auditimet e rregullta të sigurisë",
      dataSharing: "Ndarja e të Dhënave",
      dataSharingDesc: "Ne ndajmë të dhënat tuaja personale vetëm në rrethanat e mëposhtme:",
      sharing1: "Kur kërkohen nga detyrimet ligjore",
      sharing2: "Me ofruesit tanë të shërbimeve (me marrëveshje përpunimi të dhënash)",
      sharing3: "Me pëlqimin tuaj të qartë",
      contact: "Kontakt dhe Ankesat",
      contactDesc: "Për të ushtruar të drejtat tuaja ose për pyetje:",
      complaint: "Për ankesa, mund të kontaktoni Autoritetin e Mbrojtjes së të Dhënave të Shqipërisë (Autoriteti për Mbrojtjen e të Dhënave Personale).",
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
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.dataController}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.dataControllerDesc}</p>
              <div className="space-y-1 text-muted-foreground">
                <p>{t.address}</p>
                <p>{t.email}</p>
                <p>{t.phone}</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.dataWeCollect}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.dataWeCollectDesc}</p>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-6">
                <li className="leading-relaxed">{t.data1}</li>
                <li className="leading-relaxed">{t.data2}</li>
                <li className="leading-relaxed">{t.data3}</li>
                <li className="leading-relaxed">{t.data4}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.purpose}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.purposeDesc}</p>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-6">
                <li className="leading-relaxed">{t.purpose1}</li>
                <li className="leading-relaxed">{t.purpose2}</li>
                <li className="leading-relaxed">{t.purpose3}</li>
                <li className="leading-relaxed">{t.purpose4}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.legalBasis}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.legalBasisDesc}</p>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-6">
                <li className="leading-relaxed">{t.basis1}</li>
                <li className="leading-relaxed">{t.basis2}</li>
                <li className="leading-relaxed">{t.basis3}</li>
                <li className="leading-relaxed">{t.basis4}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.yourRights}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.yourRightsDesc}</p>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-6">
                <li className="leading-relaxed">{t.right1}</li>
                <li className="leading-relaxed">{t.right2}</li>
                <li className="leading-relaxed">{t.right3}</li>
                <li className="leading-relaxed">{t.right4}</li>
                <li className="leading-relaxed">{t.right5}</li>
                <li className="leading-relaxed">{t.right6}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.dataRetention}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.dataRetentionDesc}</p>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-6">
                <li className="leading-relaxed">{t.retention1}</li>
                <li className="leading-relaxed">{t.retention2}</li>
                <li className="leading-relaxed">{t.retention3}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.security}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.securityDesc}</p>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-6">
                <li className="leading-relaxed">{t.security1}</li>
                <li className="leading-relaxed">{t.security2}</li>
                <li className="leading-relaxed">{t.security3}</li>
                <li className="leading-relaxed">{t.security4}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.dataSharing}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.dataSharingDesc}</p>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground pl-6">
                <li className="leading-relaxed">{t.sharing1}</li>
                <li className="leading-relaxed">{t.sharing2}</li>
                <li className="leading-relaxed">{t.sharing3}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-daat-dark">{t.contact}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.contactDesc}</p>
              <p className="text-muted-foreground text-sm italic leading-relaxed">{t.complaint}</p>
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
