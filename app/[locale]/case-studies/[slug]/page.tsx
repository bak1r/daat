import { notFound } from "next/navigation"
import Image from "next/image"
import { type Locale } from "@/lib/i18n"
import type { Metadata } from "next"

const caseStudies = {
  "telegram-automation-bot": {
    title: "Telegram Automation Bot",
    description: "Custom Telegram bot for customer support and order tracking automation.",
    content: `Müşterilerimizden biri, günlük yüzlerce müşteri sorusu ve sipariş takip talebiyle karşılaşıyordu. Manuel destek ekibi hem maliyetliydi hem de gece yarısı ve hafta sonları hizmet veremiyordu. Bu sorunu çözmek için kapsamlı bir Telegram otomasyon botu geliştirdik.

**Ne Yaptık:**

Bot, müşterilerin Telegram üzerinden sipariş numarası girerek anlık durum sorgulaması yapmasını sağlıyor. Sistem, mevcut sipariş yönetim paneliyle entegre çalışıyor ve stok durumu, kargo bilgisi, ödeme onayı gibi tüm verileri gerçek zamanlı olarak çekiyor. Müşteri "/siparis 12345" yazdığında, bot otomatik olarak siparişin hangi aşamada olduğunu, kargoya verilip verilmediğini, tahmini teslimat tarihini ve kargo takip numarasını gösteriyor.

Destek talepleri için otomatik ticket sistemi kurduk. Müşteri "/destek" yazdığında, bot önce sık sorulan soruları gösteriyor. Eğer sorun çözülmezse, ticket oluşturuluyor ve destek ekibine bildirim gidiyor. Acil durumlar için öncelik sıralaması yapıyoruz - örneğin "iade" veya "iptal" kelimeleri geçen mesajlar otomatik olarak yüksek önceliğe alınıyor.

Çok dilli destek ekledik. Bot, müşterinin dil tercihine göre Türkçe veya İngilizce yanıt veriyor. Ayrıca, müşteri memnuniyet anketleri otomatik gönderiliyor ve sonuçlar analiz panosunda toplanıyor.

**Teknik Detaylar:**

Bot, Node.js ve Telegraf kütüphanesi kullanılarak geliştirildi. Mevcut e-ticaret platformunun REST API'si ile entegre edildi. Redis cache ile hızlı yanıt süreleri sağlandı. Webhook yapısı sayesinde sipariş durumu değiştiğinde müşteriye otomatik bildirim gönderiliyor.

**Sonuçlar:**

Destek yanıt süresi %70 azaldı. Artık müşteriler 7/24 hizmet alabiliyor. Müşteri memnuniyet oranı %85'e çıktı. Destek ekibi maliyetlerinde önemli tasarruf sağlandı. Günlük ortalama 500+ otomatik sorgu işleniyor ve bunların %80'i insan müdahalesi gerektirmeden çözülüyor.`,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop",
  },
  "ai-chatbot-integration": {
    title: "AI Chatbot Integration",
    description: "Intelligent AI chatbot implementation for e-commerce customer service.",
    content: `Bir e-ticaret platformu müşterileri, ürün bulma ve sipariş süreçlerinde zorlanıyordu. Web sitesinde binlerce ürün vardı ve müşteriler doğru ürünü bulmakta zorlanıyordu. Ayrıca, destek ekibi sürekli aynı soruları yanıtlamak zorunda kalıyordu. Bu sorunları çözmek için yapay zeka destekli bir chatbot entegrasyonu gerçekleştirdik.

**Ne Yaptık:**

Chatbot, OpenAI GPT modeli üzerine kuruldu ve müşterilerin doğal dilde sorduğu soruları anlayabiliyor. Örneğin, müşteri "kırmızı elbise arıyorum, 500 TL altında" dediğinde, chatbot ürün kataloğunu tarayarak uygun seçenekleri gösteriyor. Sadece ürün listesi vermekle kalmıyor, her ürünün özelliklerini, stok durumunu ve müşteri yorumlarını da özetliyor.

Ürün öneri motoru geliştirdik. Müşterinin geçmiş alışveriş geçmişini ve site içi davranışlarını analiz ederek kişiselleştirilmiş öneriler sunuyor. "Buna benzer ne var?" gibi sorulara anında yanıt veriyor.

Sipariş takibi için entegrasyon yaptık. Müşteri "siparişim nerede?" diye sorduğunda, chatbot sipariş numarasını soruyor veya müşteri giriş yaptıysa otomatik olarak aktif siparişlerini listeliyor. Kargo durumu, tahmini teslimat tarihi gibi bilgileri anlık olarak çekiyor.

Çok kanallı entegrasyon sağladık. Chatbot web sitesinde, mobil uygulamada ve WhatsApp Business API üzerinden çalışıyor. Tüm kanallardaki konuşmalar tek bir panelden yönetiliyor.

**Teknik Detaylar:**

Chatbot, Python ve FastAPI ile geliştirildi. OpenAI API ve özel fine-tuned modeller kullanıldı. Vector database (Pinecone) ile ürün bilgileri hızlıca aranabiliyor. RAG (Retrieval Augmented Generation) mimarisi sayesinde chatbot her zaman güncel ürün bilgilerine erişebiliyor.

**Sonuçlar:**

Sorguların %60'ı otomatik olarak çözülüyor. Dönüşüm oranı %40 arttı çünkü müşteriler daha hızlı doğru ürünü buluyor. Müşteri deneyimi önemli ölçüde iyileşti. Destek ekibinin iş yükü azaldı, artık sadece karmaşık sorunlarla ilgileniyorlar. Ortalama yanıt süresi 2 saniyenin altına düştü.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  },
  "panel-integrations": {
    title: "Unified Panel Integrations",
    description: "Integrating multiple systems into a single unified management panel.",
    content: `Müşterimiz, farklı sistemlerde çalışıyordu: bir e-ticaret platformu, bir stok yönetim sistemi, bir muhasebe programı ve bir CRM. Her sistem ayrı login gerektiriyordu ve veriler manuel olarak bir sistemden diğerine aktarılıyordu. Bu durum hem zaman kaybına hem de hata riskine yol açıyordu. Tüm sistemleri tek bir yönetim panelinde birleştirdik.

**Ne Yaptık:**

Tek giriş (SSO) sistemi kurduk. Artık kullanıcılar bir kez giriş yaparak tüm sistemlere erişebiliyor. Panel, React ve Next.js ile geliştirildi ve modern, kullanıcı dostu bir arayüze sahip.

Gerçek zamanlı veri senkronizasyonu sağladık. Stok yönetim sisteminde bir ürünün stoğu azaldığında, e-ticaret platformunda otomatik olarak güncelleniyor. Sipariş geldiğinde, hem stok sistemi hem de muhasebe programı anında bilgilendiriliyor. Webhook ve API entegrasyonları sayesinde tüm sistemler birbiriyle konuşuyor.

Özelleştirilebilir dashboard oluşturduk. Her kullanıcı kendi rolüne göre farklı widget'lar görebiliyor. Örneğin, satış ekibi günlük satış grafiklerini, stok ekibi kritik stok uyarılarını, muhasebe ekibi ise finansal özetleri görüyor.

Otomatik veri akışı kurduk. Sipariş oluşturulduğunda, otomatik olarak fatura oluşturuluyor, stok düşülüyor, müşteri CRM'e ekleniyor ve kargo firmasına bildirim gönderiliyor. Hiçbir adım manuel değil.

**Teknik Detaylar:**

Panel, RESTful API'ler ve GraphQL endpoint'leri kullanarak farklı sistemlerle iletişim kuruyor. OAuth 2.0 ile güvenli kimlik doğrulama sağlanıyor. Redis cache ile performans optimize edildi. Tüm veri transferleri SSL şifreleme ile korunuyor.

**Sonuçlar:**

İdari işlemler için harcanan zaman %50 azaldı. Veri girişi hataları tamamen ortadan kalktı. Gerçek zamanlı veriler sayesinde karar verme süreçleri hızlandı. Operasyonlar daha akıcı hale geldi. Kullanıcılar artık 5 farklı sisteme giriş yapmak yerine tek bir panelden her şeyi yönetebiliyor.`,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop",
  },
  "workflow-automation": {
    title: "Workflow Automation System",
    description: "Complete workflow automation solution for complex business processes.",
    content: `Bir üretim firması, siparişten teslimata kadar olan süreçte çok sayıda manuel adım yapıyordu. Sipariş geldiğinde, stok kontrolü yapılıyor, üretim planlaması yapılıyor, malzeme siparişi veriliyor, üretim takibi yapılıyor ve kargo süreci başlatılıyordu. Her adım farklı kişiler tarafından farklı sistemlerde yönetiliyordu. Tüm bu süreci otomatikleştiren bir workflow sistemi geliştirdik.

**Ne Yaptık:**

Sipariş geldiğinde, sistem otomatik olarak stok durumunu kontrol ediyor. Eğer stok yeterliyse, üretim planlama sistemine bildirim gönderiliyor. Stok yetersizse, otomatik olarak tedarikçiye malzeme siparişi oluşturuluyor. Tedarikçi onayı geldiğinde, üretim planlaması otomatik başlıyor.

Üretim sürecinde, her aşama takip ediliyor. Bir üretim adımı tamamlandığında, bir sonraki adıma otomatik geçiş yapılıyor. Kalite kontrol süreci de otomasyona dahil - test sonuçları sisteme girildiğinde, otomatik olarak onaylanıyor veya yeniden işleme gönderiliyor.

Kargo süreci tamamen otomatik. Üretim tamamlandığında, kargo firmasına otomatik bildirim gidiyor, etiket oluşturuluyor ve müşteriye teslimat bilgisi gönderiliyor.

Özel workflow builder geliştirdik. Müşteri, drag-and-drop arayüzü kullanarak kendi iş akışlarını oluşturabiliyor. "Eğer stok < 10 ise, tedarikçiye sipariş oluştur" gibi kurallar kolayca tanımlanabiliyor.

**Teknik Detaylar:**

Sistem, Node.js ve PostgreSQL ile geliştirildi. Workflow engine olarak Temporal kullanıldı. Tüm süreçler event-driven mimari ile yönetiliyor. Gerçek zamanlı monitoring için WebSocket bağlantıları kuruldu.

**Sonuçlar:**

Sipariş işleme süresi %45 hızlandı. Operasyonel maliyetler %30 azaldı. Doğruluk ve tutarlılık önemli ölçüde arttı. Kaynak kullanımı optimize edildi. Artık hiçbir adım unutulmuyor veya atlanmıyor. İstisnai durumlar için otomatik uyarı sistemi sayesinde sorunlar anında tespit ediliyor.`,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
  },
  "ecommerce-automation": {
    title: "E-commerce Automation Success",
    description: "Automated order processing and inventory management for a leading retailer.",
    content: `Büyük bir e-ticaret firması, günlük yüzlerce sipariş alıyordu ancak sipariş işleme süreci tamamen manueldi. Sipariş geldiğinde, çalışanlar manuel olarak stok kontrolü yapıyor, fatura oluşturuyor, kargo etiketi basıyor ve paketleme yapıyordu. Bu süreç hem yavaştı hem de hata riski taşıyordu. Tam otomatik bir sipariş işleme ve stok yönetim sistemi geliştirdik.

**Ne Yaptık:**

Sipariş geldiğinde, sistem otomatik olarak stok kontrolü yapıyor. Eğer ürün stokta varsa, sipariş onaylanıyor ve ödeme kontrolü yapılıyor. Ödeme onaylandığında, otomatik olarak fatura oluşturuluyor ve müşteriye e-posta gönderiliyor.

Stok yönetimi tamamen otomatik. Ürün satıldığında, stok otomatik düşülüyor. Stok kritik seviyeye geldiğinde (örneğin 10'un altına düştüğünde), otomatik olarak tedarikçiye sipariş oluşturuluyor. Çoklu depo desteği sayesinde, sipariş müşteriye en yakın depodan gönderiliyor.

Kargo süreci otomatikleştirildi. Sipariş onaylandığında, kargo firması API'sine otomatik bildirim gidiyor. Kargo etiketi otomatik oluşturuluyor ve yazdırılıyor. Paketleme listesi hazırlanıyor ve depo ekibine gönderiliyor.

İade süreci de otomasyona dahil. Müşteri iade talebinde bulunduğunda, sistem otomatik olarak iade kodu oluşturuyor. Ürün geri geldiğinde, stok otomatik güncelleniyor ve iade işlemi tamamlanıyor.

**Teknik Detaylar:**

Sistem, Python ve Django ile geliştirildi. E-ticaret platformu (WooCommerce), depo yönetim sistemi ve kargo firmalarının API'leri ile entegre edildi. RabbitMQ ile asenkron işlem yönetimi sağlandı. Redis cache ile performans optimize edildi.

**Sonuçlar:**

Sipariş teslim süresi %80 hızlandı. Artık siparişler ortalama 2 saat içinde kargoya veriliyor. Stok doğruluğu %95'e çıktı. Manuel hatalar neredeyse sıfıra indi. Sistem, firmanın büyümesine paralel olarak ölçeklenebiliyor. Günlük 1000+ siparişi sorunsuz işleyebiliyor.`,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
  },
  "finance-dashboard": {
    title: "Real-time Finance Dashboard",
    description: "Comprehensive dashboard for financial operations and real-time reporting.",
    content: `Müşterimiz, finansal verilerini farklı sistemlerde takip ediyordu: bir muhasebe programı, bir ödeme işlemcisi, bir banka hesabı ve bir e-ticaret platformu. Finansal raporlar hazırlamak için bu sistemlerden manuel olarak veri çekip Excel'de birleştirmesi gerekiyordu. Bu süreç hem zaman alıcıydı hem de hata riski taşıyordu. Tüm finansal verileri tek bir dashboard'da birleştiren bir sistem geliştirdik.

**Ne Yaptık:**

Gerçek zamanlı finansal metrikler gösteriyoruz. Dashboard, gelir, gider, kar, nakit akışı gibi tüm önemli metrikleri anlık olarak gösteriyor. Veriler her 5 dakikada bir otomatik güncelleniyor. Grafikler ve tablolar interaktif - kullanıcı istediği zaman aralığını seçebiliyor.

Özelleştirilebilir raporlar oluşturduk. Kullanıcılar, kendi ihtiyaçlarına göre rapor şablonları oluşturabiliyor. Örneğin, "Aylık Gelir-Gider Raporu", "Ürün Bazlı Karlılık Analizi" gibi raporlar tek tıkla oluşturulabiliyor. Raporlar PDF veya Excel formatında indirilebiliyor.

Çoklu para birimi desteği sağladık. Firma, farklı para birimlerinde işlem yapıyorsa, tüm veriler tek bir para birimine (örneğin TL) çevrilerek gösteriliyor. Döviz kurları otomatik güncelleniyor.

Otomatik mutabakat sistemi kurduk. Banka hesap ekstresi ile muhasebe kayıtları otomatik olarak karşılaştırılıyor. Farklılıklar tespit edildiğinde, kullanıcıya uyarı gönderiliyor. Bu sayede muhasebe hataları erken tespit ediliyor.

Tahminsel analitik ekledik. Sistem, geçmiş verilere dayanarak gelecek dönemler için tahminler yapıyor. Örneğin, "Bu ayın sonunda nakit durumu ne olacak?" sorusuna otomatik yanıt veriyor.

**Teknik Detaylar:**

Dashboard, React ve D3.js ile geliştirildi. Backend, Node.js ve Express ile oluşturuldu. Muhasebe programı (QuickBooks), ödeme işlemcisi (Stripe, PayPal) ve banka API'leri ile entegre edildi. Veriler PostgreSQL'de saklanıyor ve gerçek zamanlı güncellemeler için WebSocket kullanılıyor.

**Sonuçlar:**

Finansal verilere anında erişim sağlandı. Artık Excel'de manuel işlem yapmaya gerek yok. Finansal karar verme süreçleri hızlandı çünkü veriler anında görülebiliyor. Raporlama süresi %70 azaldı. Nakit akışı görünürlüğü önemli ölçüde arttı. Finansal sorunlar erken tespit ediliyor ve önlem alınabiliyor.`,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
  },
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string }
}): Promise<Metadata> {
  const study = caseStudies[params.slug as keyof typeof caseStudies]
  if (!study) return {}

  return {
    title: `${study.title} - DAAT`,
    description: study.description,
  }
}

export default function CaseStudyPage({
  params,
}: {
  params: { locale: Locale; slug: string }
}) {
  const study = caseStudies[params.slug as keyof typeof caseStudies]

  if (!study) {
    notFound()
  }

  return (
    <div className="pt-20 pb-16">
      <article className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-daat-dark" style={{
            background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {study.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{study.description}</p>
          <div className="relative h-64 md:h-96 w-full mb-12 rounded-2xl overflow-hidden">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-none space-y-6">
            {study.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                const text = paragraph.replace(/\*\*/g, '')
                return <h3 key={index} className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-daat-dark">{text}</h3>
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '))
                return (
                  <ul key={index} className="list-disc list-outside mb-6 space-y-2 text-muted-foreground pl-6">
                    {items.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={index} className="mb-6 text-muted-foreground leading-relaxed">{paragraph}</p>
            })}
          </div>
        </div>
      </article>
    </div>
  )
}
