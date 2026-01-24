import { type Locale } from "@/lib/i18n"

export type CaseStudyContent = {
  title: string
  description: string
  content: string
  image: string
}

export const caseStudies: Record<string, Record<Locale, CaseStudyContent>> = {
  "telegram-automation-bot": {
    al: {
      title: "Bot Automatizimi i Telegram",
      description: "Bot i personalizuar Telegram për mbështetjen e klientit dhe automatizimin e ndjekjes së porosive.",
      content: `Një nga klientët tanë përballte me qindra pyetje klientësh dhe kërkesa ndjekjeje porosish çdo ditë. Ekipi i mbështetjes manuale ishte i kushtueshëm dhe nuk mund të shërbente gjatë natës dhe fundjavave. Për të zgjidhur këtë problem, ne zhvilluam një bot të plotë automatizimi Telegram.

**Çfarë Bëmë:**

Boti lejon klientët të bëjnë kërkesa të menjëhershme për statusin duke futur numrin e porosisë përmes Telegram. Sistemi punon në integrim me panelin ekzistues të menaxhimit të porosive dhe tërheq të gjitha të dhënat si statusi i stokut, informacioni i dërgesës, konfirmimi i pagesës në kohë reale. Kur klienti shkruan "/porosi 12345", boti automatikisht tregon në cilën fazë është porosia, nëse është dërguar, datën e parashikuar të dorëzimit dhe numrin e ndjekjes së dërgesës.

Kemi krijuar një sistem automatik ticket për kërkesat e mbështetjes. Kur klienti shkruan "/mbështetje", boti fillimisht tregon pyetjet e bëra shpesh. Nëse problemi nuk zgjidhet, krijohet një ticket dhe dërgohet njoftim ekipit të mbështetjes. Për situatat urgjente, bëjmë prioritetizim - për shembull, mesazhet që përmbajnë fjalët "kthim" ose "anulim" automatikisht merren me prioritet të lartë.

Kemi shtuar mbështetje shumëgjuhësore. Boti përgjigjet në shqip ose anglisht sipas preferencës së klientit. Gjithashtu, anketat e kënaqësisë së klientit dërgohen automatikisht dhe rezultatet mblidhen në panelin e analizës.

**Detajet Teknike:**

Boti u zhvillua duke përdorur Node.js dhe bibliotekën Telegraf. U integrua me REST API-në e platformës ekzistuese e-tregtie. U siguruan kohë përgjigjeje të shpejta me Redis cache. Falë strukturës së webhook, kur statusi i porosisë ndryshon, klientit i dërgohet automatikisht njoftim.

**Rezultatet:**

Koha e përgjigjes së mbështetjes u ul me 70%. Tani klientët mund të marrin shërbim 24/7. Shkalla e kënaqësisë së klientit u rrit në 85%. U arrit kursim i rëndësishëm në kostot e ekipit të mbështetjes. Mesatarisht, mbi 500 kërkesa automatike përpunohen çdo ditë dhe 80% e tyre zgjidhen pa ndërhyrje njerëzore.`,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop",
    },
    en: {
      title: "Telegram Automation Bot",
      description: "Custom Telegram bot for customer support and order tracking automation.",
      content: `One of our clients was facing hundreds of customer questions and order tracking requests daily. The manual support team was costly and couldn't provide service during nights and weekends. To solve this problem, we developed a comprehensive Telegram automation bot.

**What We Did:**

The bot allows customers to make instant status inquiries by entering their order number through Telegram. The system works in integration with the existing order management panel and pulls all data such as stock status, shipping information, payment confirmation in real-time. When the customer writes "/order 12345", the bot automatically shows which stage the order is in, whether it has been shipped, the estimated delivery date, and the shipping tracking number.

We set up an automatic ticket system for support requests. When the customer writes "/support", the bot first shows frequently asked questions. If the problem is not resolved, a ticket is created and a notification is sent to the support team. For urgent situations, we do prioritization - for example, messages containing the words "return" or "cancel" are automatically given high priority.

We added multilingual support. The bot responds in Albanian or English according to the customer's language preference. Also, customer satisfaction surveys are sent automatically and results are collected in the analytics panel.

**Technical Details:**

The bot was developed using Node.js and the Telegraf library. It was integrated with the existing e-commerce platform's REST API. Fast response times were ensured with Redis cache. Thanks to the webhook structure, when the order status changes, the customer is automatically sent a notification.

**Results:**

Support response time decreased by 70%. Now customers can receive service 24/7. Customer satisfaction rate increased to 85%. Significant savings were achieved in support team costs. On average, over 500 automatic queries are processed daily and 80% of them are resolved without human intervention.`,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop",
    },
    tr: {
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
  },
  "ai-chatbot-integration": {
    al: {
      title: "Integrimi i Chatbot-it AI",
      description: "Zbatimi i chatbot-it inteligjent AI për shërbimin ndaj klientit të e-tregtisë.",
      content: `Klientët e një platforme e-tregtie po hasnin vështirësi në gjetjen e produkteve dhe proceset e porosive. Në faqen e internetit kishte mijëra produkte dhe klientët po hasnin vështirësi në gjetjen e produktit të duhur. Gjithashtu, ekipi i mbështetjes duhej të përgjigjej vazhdimisht pyetjeve të njëjta. Për të zgjidhur këto probleme, ne realizuam një integrim chatbot të fuqizuar nga inteligjenca artificiale.

**Çfarë Bëmë:**

Chatbot-i u krijua mbi modelin OpenAI GPT dhe mund të kuptojë pyetjet që klientët bëjnë në gjuhën natyrore. Për shembull, kur klienti thotë "po kërkoj një fustan të kuq, nën 500 lekë", chatbot-i skanon katalogun e produkteve dhe tregon opsionet e përshtatshme. Nuk jep vetëm listën e produkteve, por gjithashtu përmbledh karakteristikat, statusin e stokut dhe komentet e klientëve për çdo produkt.

Zhvilluam një motor rekomandimi produktesh. Ai analizon historikun e blerjeve të klientit dhe sjelljet brenda faqes për të ofruar rekomandime të personalizuara. Përgjigjet menjëherë pyetjeve si "çfarë tjetër ka të ngjashëm me këtë?".

Bëmë integrim për ndjekjen e porosive. Kur klienti pyet "ku është porosia ime?", chatbot-i kërkon numrin e porosisë ose, nëse klienti është i kyçur, automatikisht liston porositë aktive. Tërheq informacionin si statusi i dërgesës, data e parashikuar e dorëzimit në kohë reale.

Siguruam integrim shumë-kanalësh. Chatbot-i punon në faqen e internetit, aplikacionin mobil dhe përmes WhatsApp Business API. Të gjitha bisedat në të gjitha kanalet menaxhohen nga një panel i vetëm.

**Detajet Teknike:**

Chatbot-i u zhvillua me Python dhe FastAPI. U përdorën OpenAI API dhe modele të specializuara fine-tuned. Informacionet e produkteve mund të kërkohen shpejt me bazën e të dhënave vektoriale (Pinecone). Falë arkitekturës RAG (Retrieval Augmented Generation), chatbot-i ka gjithmonë qasje në informacionet aktuale të produkteve.

**Rezultatet:**

60% e kërkesave zgjidhen automatikisht. Shkalla e konvertimit u rrit me 40% sepse klientët gjejnë produktin e duhur më shpejt. Përvoja e klientit u përmirësua ndjeshëm. Ngarkesa e punës së ekipit të mbështetjes u ul, tani ata merren vetëm me problemet komplekse. Koha mesatare e përgjigjes ra nën 2 sekonda.`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    },
    en: {
      title: "AI Chatbot Integration",
      description: "Intelligent AI chatbot implementation for e-commerce customer service.",
      content: `An e-commerce platform's customers were struggling with product finding and order processes. The website had thousands of products and customers were having difficulty finding the right product. Also, the support team had to constantly answer the same questions. To solve these problems, we implemented an AI-powered chatbot integration.

**What We Did:**

The chatbot was built on the OpenAI GPT model and can understand questions customers ask in natural language. For example, when the customer says "I'm looking for a red dress, under 500 ALL", the chatbot scans the product catalog and shows suitable options. It doesn't just provide a product list, but also summarizes each product's features, stock status, and customer reviews.

We developed a product recommendation engine. It analyzes the customer's past purchase history and on-site behaviors to provide personalized recommendations. It responds instantly to questions like "what else is similar to this?".

We made integration for order tracking. When the customer asks "where is my order?", the chatbot asks for the order number or, if the customer is logged in, automatically lists their active orders. It pulls information such as shipping status, estimated delivery date in real-time.

We provided multi-channel integration. The chatbot works on the website, mobile app, and through WhatsApp Business API. All conversations across all channels are managed from a single panel.

**Technical Details:**

The chatbot was developed with Python and FastAPI. OpenAI API and custom fine-tuned models were used. Product information can be searched quickly with vector database (Pinecone). Thanks to RAG (Retrieval Augmented Generation) architecture, the chatbot always has access to current product information.

**Results:**

60% of queries are resolved automatically. Conversion rate increased by 40% because customers find the right product faster. Customer experience improved significantly. Support team workload decreased, they now only deal with complex issues. Average response time dropped below 2 seconds.`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    },
    tr: {
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
  },
  "panel-integrations": {
    al: {
      title: "Integrimet e Panelit të Unifikuar",
      description: "Integrimi i sistemeve të shumta në një panel të vetëm menaxhimi të unifikuar.",
      content: `Klienti ynë po punonte në sisteme të ndryshme: një platformë e-tregtie, një sistem menaxhimi stoku, një program kontabiliteti dhe një CRM. Çdo sistem kërkonte login të veçantë dhe të dhënat transferoheshin manualisht nga një sistem në tjetrin. Kjo situatë shkaktonte humbje kohe dhe rrezik gabimesh. Ne bashkuam të gjitha sistemet në një panel të vetëm menaxhimi.

**Çfarë Bëmë:**

Kemi krijuar një sistem hyrjeje të vetme (SSO). Tani përdoruesit mund të hyjnë një herë dhe të kenë qasje në të gjitha sistemet. Paneli u zhvillua me React dhe Next.js dhe ka një ndërfaqe moderne dhe miqësore me përdoruesin.

Siguruam sinkronizim të të dhënave në kohë reale. Kur stoku i një produkti zvogëlohet në sistemin e menaxhimit të stokut, automatikisht përditësohet në platformën e-tregtie. Kur vjen një porosi, si sistemi i stokut ashtu edhe programi i kontabilitetit informohen menjëherë. Falë integrimit të webhook dhe API, të gjitha sistemet komunikojnë me njëra-tjetrën.

Krijuam një dashboard të personalizueshëm. Çdo përdorues mund të shohë widget-e të ndryshme sipas rolit të tij. Për shembull, ekipi i shitjeve sheh grafikët e shitjeve ditore, ekipi i stokut sheh paralajmërimet kritike të stokut, ndërsa ekipi i kontabilitetit sheh përmbledhjet financiare.

Kemi krijuar një rrjedhë të dhënash automatike. Kur krijohet një porosi, automatikisht krijohet faturë, zvogëlohet stoku, klienti shtohet në CRM dhe dërgohet njoftim kompanisë së dërgesës. Asnjë hap nuk është manual.

**Detajet Teknike:**

Paneli komunikon me sisteme të ndryshme duke përdorur RESTful API-t dhe endpoint-et GraphQL. Autentifikimi i sigurt sigurohet me OAuth 2.0. Performanca u optimizua me Redis cache. Të gjitha transferimet e të dhënave mbrohen me enkriptim SSL.

**Rezultatet:**

Koha e shpenzuar për proceset administrative u ul me 50%. Gabimet e hyrjes së të dhënave u eliminuan plotësisht. Proceset e vendimmarrjes u përshpejtuan falë të dhënave në kohë reale. Operacionet u bënë më të qetë. Përdoruesit tani mund të menaxhojnë gjithçka nga një panel i vetëm në vend që të hyjnë në 5 sisteme të ndryshme.`,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop",
    },
    en: {
      title: "Unified Panel Integrations",
      description: "Integrating multiple systems into a single unified management panel.",
      content: `Our client was working in different systems: an e-commerce platform, an inventory management system, an accounting program, and a CRM. Each system required separate login and data was manually transferred from one system to another. This situation caused time loss and error risk. We combined all systems into a single unified management panel.

**What We Did:**

We set up a single sign-on (SSO) system. Now users can log in once and access all systems. The panel was developed with React and Next.js and has a modern, user-friendly interface.

We provided real-time data synchronization. When a product's stock decreases in the inventory management system, it is automatically updated on the e-commerce platform. When an order comes in, both the inventory system and the accounting program are instantly informed. Thanks to webhook and API integrations, all systems communicate with each other.

We created a customizable dashboard. Each user can see different widgets according to their role. For example, the sales team sees daily sales charts, the inventory team sees critical stock warnings, while the accounting team sees financial summaries.

We set up automatic data flow. When an order is created, an invoice is automatically created, stock is reduced, the customer is added to CRM, and a notification is sent to the shipping company. No step is manual.

**Technical Details:**

The panel communicates with different systems using RESTful APIs and GraphQL endpoints. Secure authentication is provided with OAuth 2.0. Performance was optimized with Redis cache. All data transfers are protected with SSL encryption.

**Results:**

Time spent on administrative processes decreased by 50%. Data entry errors were completely eliminated. Decision-making processes accelerated thanks to real-time data. Operations became smoother. Users can now manage everything from a single panel instead of logging into 5 different systems.`,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop",
    },
    tr: {
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
  },
  "workflow-automation": {
    al: {
      title: "Sistemi i Automatizimit të Rrjedhës së Punës",
      description: "Zgjidhje e plotë e automatizimit të rrjedhës së punës për procese komplekse biznesi.",
      content: `Një kompani prodhimi po bënte shumë hapa manualë në procesin nga porosia deri në dorëzim. Kur vinte një porosi, bëhej kontrolli i stokut, planifikimi i prodhimit, porosia e materialeve, ndjekja e prodhimit dhe fillimi i procesit të dërgesës. Çdo hap menaxhohej nga njerëz të ndryshëm në sisteme të ndryshme. Ne zhvilluam një sistem rrjedhe pune që automatizon të gjithë këtë proces.

**Çfarë Bëmë:**

Kur vjen një porosi, sistemi automatikisht kontrollon statusin e stokut. Nëse stoku është i mjaftueshëm, dërgohet njoftim në sistemin e planifikimit të prodhimit. Nëse stoku nuk është i mjaftueshëm, automatikisht krijohet porosi materialesh për furnizuesin. Kur vjen miratimi i furnizuesit, planifikimi i prodhimit fillon automatikisht.

Gjatë procesit të prodhimit, çdo fazë ndiqet. Kur përfundon një hap prodhimi, bëhet kalim automatik në hapin tjetër. Procesi i kontrollit të cilësisë është gjithashtu i përfshirë në automatizim - kur rezultatet e testeve futen në sistem, automatikisht miratohen ose dërgohen për përpunim të ri.

Procesi i dërgesës është plotësisht automatik. Kur përfundon prodhimi, dërgohet automatikisht njoftim kompanisë së dërgesës, krijohet etiketa dhe dërgohet informacioni i dorëzimit klientit.

Zhvilluam një ndërtues rrjedhe pune të personalizuar. Klienti mund të krijojë rrjedhat e veta të punës duke përdorur një ndërfaqe drag-and-drop. Rregullat si "nëse stoku < 10, krijo porosi për furnizuesin" mund të përcaktohen lehtësisht.

**Detajet Teknike:**

Sistemi u zhvillua me Node.js dhe PostgreSQL. U përdor Temporal si motor rrjedhe pune. Të gjitha proceset menaxhohen me arkitekturë event-driven. U krijuan lidhje WebSocket për monitorim në kohë reale.

**Rezultatet:**

Koha e përpunimit të porosive u përshpejtua me 45%. Kostot operative u ulën me 30%. Saktësia dhe konsistenca u rritën ndjeshëm. Përdorimi i burimeve u optimizua. Tani asnjë hap nuk harrohet ose anashkalohet. Falë sistemit automatik të paralajmërimeve për situatat e jashtëzakonshme, problemet zbulohen menjëherë.`,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    },
    en: {
      title: "Workflow Automation System",
      description: "Complete workflow automation solution for complex business processes.",
      content: `A manufacturing company was making many manual steps in the process from order to delivery. When an order came in, stock check was done, production planning was done, material order was placed, production tracking was done, and shipping process was started. Each step was managed by different people in different systems. We developed a workflow system that automates this entire process.

**What We Did:**

When an order comes in, the system automatically checks stock status. If stock is sufficient, a notification is sent to the production planning system. If stock is insufficient, a material order is automatically created for the supplier. When supplier approval comes, production planning starts automatically.

During the production process, each stage is tracked. When a production step is completed, automatic transition is made to the next step. Quality control process is also included in automation - when test results are entered into the system, they are automatically approved or sent for reprocessing.

The shipping process is completely automatic. When production is completed, automatic notification is sent to the shipping company, label is created, and delivery information is sent to the customer.

We developed a custom workflow builder. The client can create their own workflows using a drag-and-drop interface. Rules like "if stock < 10, create order for supplier" can be easily defined.

**Technical Details:**

The system was developed with Node.js and PostgreSQL. Temporal was used as the workflow engine. All processes are managed with event-driven architecture. WebSocket connections were established for real-time monitoring.

**Results:**

Order processing time accelerated by 45%. Operational costs decreased by 30%. Accuracy and consistency increased significantly. Resource usage was optimized. Now no step is forgotten or skipped. Thanks to the automatic warning system for exceptional situations, problems are detected instantly.`,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    },
    tr: {
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
  },
  "ecommerce-automation": {
    al: {
      title: "Suksesi i Automatizimit të E-Tregtisë",
      description: "Përpunimi automatik i porosive dhe menaxhimi i inventarit për një shitës kryesor.",
      content: `Një kompani e madhe e-tregtie po merrte qindra porosi çdo ditë, por procesi i përpunimit të porosive ishte plotësisht manual. Kur vinte një porosi, punonjësit bënin manualisht kontrollin e stokut, krijonin faturën, printonin etiketën e dërgesës dhe bënin paketimin. Ky proces ishte i ngadalshëm dhe mbante rrezik gabimesh. Ne zhvilluam një sistem të plotë automatik për përpunimin e porosive dhe menaxhimin e stokut.

**Çfarë Bëmë:**

Kur vjen një porosi, sistemi automatikisht bën kontrollin e stokut. Nëse produkti është në stok, porosia miratohet dhe bëhet kontrolli i pagesës. Kur pagesa miratohet, automatikisht krijohet faturë dhe dërgohet email klientit.

Menaxhimi i stokut është plotësisht automatik. Kur shitet një produkt, stoku zvogëlohet automatikisht. Kur stoku arrin nivel kritik (për shembull, bie nën 10), automatikisht krijohet porosi për furnizuesin. Falë mbështetjes për depo të shumta, porosia dërgohet nga depoja më e afërt me klientin.

Procesi i dërgesës u automatizua. Kur porosia miratohet, dërgohet automatikisht njoftim në API-në e kompanisë së dërgesës. Etiketa e dërgesës krijohet automatikisht dhe printohet. Lista e paketimit përgatitet dhe dërgohet ekipit të depove.

Procesi i kthimit është gjithashtu i përfshirë në automatizim. Kur klienti bën një kërkesë kthimi, sistemi automatikisht krijon kod kthimi. Kur produkti kthehet, stoku përditësohet automatikisht dhe procesi i kthimit përfundon.

**Detajet Teknike:**

Sistemi u zhvillua me Python dhe Django. U integrua me platformën e-tregtie (WooCommerce), sistemin e menaxhimit të depove dhe API-t e kompanive të dërgesës. Menaxhimi i proceseve asinkrone u sigurua me RabbitMQ. Performanca u optimizua me Redis cache.

**Rezultatet:**

Koha e dorëzimit të porosive u përshpejtua me 80%. Tani porositë dorëzohen mesatarisht brenda 2 orëve. Saktësia e stokut u rrit në 95%. Gabimet manuale u reduktuan pothuajse në zero. Sistemi mund të shkallëzohet paralelisht me rritjen e kompanisë. Mund të përpunojë pa probleme mbi 1000 porosi në ditë.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    },
    en: {
      title: "E-commerce Automation Success",
      description: "Automated order processing and inventory management for a leading retailer.",
      content: `A large e-commerce company was receiving hundreds of orders daily, but the order processing process was completely manual. When an order came in, employees manually checked stock, created invoice, printed shipping label, and did packaging. This process was slow and carried error risk. We developed a fully automatic order processing and inventory management system.

**What We Did:**

When an order comes in, the system automatically does stock check. If the product is in stock, the order is approved and payment check is done. When payment is approved, an invoice is automatically created and an email is sent to the customer.

Inventory management is completely automatic. When a product is sold, stock is automatically reduced. When stock reaches critical level (for example, drops below 10), an order is automatically created for the supplier. Thanks to multi-warehouse support, the order is shipped from the warehouse closest to the customer.

The shipping process was automated. When the order is approved, automatic notification is sent to the shipping company's API. The shipping label is automatically created and printed. The packaging list is prepared and sent to the warehouse team.

The return process is also included in automation. When the customer makes a return request, the system automatically creates a return code. When the product is returned, stock is automatically updated and the return process is completed.

**Technical Details:**

The system was developed with Python and Django. It was integrated with the e-commerce platform (WooCommerce), warehouse management system, and shipping companies' APIs. Asynchronous process management was provided with RabbitMQ. Performance was optimized with Redis cache.

**Results:**

Order delivery time accelerated by 80%. Now orders are shipped on average within 2 hours. Stock accuracy increased to 95%. Manual errors were reduced to almost zero. The system can scale parallel to the company's growth. It can process over 1000 orders per day without problems.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    },
    tr: {
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
  },
  "finance-dashboard": {
    al: {
      title: "Dashboard Financiar në Kohë Reale",
      description: "Dashboard gjithëpërfshirës për operacionet financiare dhe raportimin në kohë reale.",
      content: `Klienti ynë po ndiqte të dhënat e tij financiare në sisteme të ndryshme: një program kontabiliteti, një procesues pagesash, një llogari banke dhe një platformë e-tregtie. Për të përgatitur raporte financiare, duhej të tërhiqte manualisht të dhëna nga këto sisteme dhe t'i kombinonte në Excel. Ky proces ishte kohë-ngrënës dhe mbante rrezik gabimesh. Ne zhvilluam një sistem që kombinon të gjitha të dhënat financiare në një dashboard të vetëm.

**Çfarë Bëmë:**

Tregojmë metrika financiare në kohë reale. Dashboard-i tregon të gjitha metrikat e rëndësishme si të ardhurat, shpenzimet, fitimi, rrjedha e parasë në kohë reale. Të dhënat përditësohen automatikisht çdo 5 minuta. Grafikët dhe tabelat janë interaktive - përdoruesi mund të zgjedhë intervalin kohor që dëshiron.

Krijuam raporte të personalizueshme. Përdoruesit mund të krijojnë shabllone raportesh sipas nevojave të tyre. Për shembull, raportet si "Raporti Mujor i Të Ardhurave-Shpenzimeve", "Analiza e Rentabilitetit Bazuar në Produkte" mund të krijohen me një klikim. Raportet mund të shkarkohen në format PDF ose Excel.

Siguruam mbështetje për monedha të shumta. Nëse kompania bën transaksione në monedha të ndryshme, të gjitha të dhënat konvertohen dhe shfaqen në një monedhë të vetme (për shembull, ALL). Kurset e këmbimit përditësohen automatikisht.

Kemi krijuar një sistem automatik përputhjeje. Ekstrakti i llogarisë bankare krahasohet automatikisht me regjistrat e kontabilitetit. Kur zbulohen mospërputhje, përdoruesit dërgohet paralajmërim. Në këtë mënyrë, gabimet e kontabilitetit zbuloren herët.

Shtuam analitikë parashikuese. Sistemi bën parashikime për periudhat e ardhshme bazuar në të dhënat e kaluara. Për shembull, përgjigjet automatikisht pyetjes "çfarë do të jetë situata e parasë në fund të këtij muaji?".

**Detajet Teknike:**

Dashboard-i u zhvillua me React dhe D3.js. Backend u krijua me Node.js dhe Express. U integrua me programin e kontabilitetit (QuickBooks), procesuesin e pagesave (Stripe, PayPal) dhe API-t e bankave. Të dhënat ruhen në PostgreSQL dhe përdoret WebSocket për përditësime në kohë reale.

**Rezultatet:**

U sigurua qasje e menjëhershme në të dhënat financiare. Tani nuk ka më nevojë për procese manuale në Excel. Proceset e vendimmarrjes financiare u përshpejtuan sepse të dhënat mund të shihen menjëherë. Koha e raportimit u ul me 70%. Dukshmëria e rrjedhës së parasë u rrit ndjeshëm. Problemet financiare zbuloren herët dhe mund të merren masa.`,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    },
    en: {
      title: "Real-time Finance Dashboard",
      description: "Comprehensive dashboard for financial operations and real-time reporting.",
      content: `Our client was tracking their financial data in different systems: an accounting program, a payment processor, a bank account, and an e-commerce platform. To prepare financial reports, they had to manually pull data from these systems and combine them in Excel. This process was time-consuming and carried error risk. We developed a system that combines all financial data in a single dashboard.

**What We Did:**

We show real-time financial metrics. The dashboard shows all important metrics such as revenue, expenses, profit, cash flow in real-time. Data is automatically updated every 5 minutes. Charts and tables are interactive - users can select the time range they want.

We created customizable reports. Users can create report templates according to their needs. For example, reports like "Monthly Income-Expense Report", "Product-Based Profitability Analysis" can be created with one click. Reports can be downloaded in PDF or Excel format.

We provided multi-currency support. If the company makes transactions in different currencies, all data is converted and displayed in a single currency (for example, USD). Exchange rates are automatically updated.

We set up an automatic reconciliation system. Bank account statement is automatically compared with accounting records. When discrepancies are detected, users are sent a warning. This way, accounting errors are detected early.

We added predictive analytics. The system makes predictions for future periods based on past data. For example, it automatically answers the question "what will the cash situation be at the end of this month?".

**Technical Details:**

The dashboard was developed with React and D3.js. Backend was created with Node.js and Express. It was integrated with the accounting program (QuickBooks), payment processor (Stripe, PayPal), and bank APIs. Data is stored in PostgreSQL and WebSocket is used for real-time updates.

**Results:**

Instant access to financial data was provided. There's no longer a need for manual processes in Excel. Financial decision-making processes accelerated because data can be seen instantly. Reporting time decreased by 70%. Cash flow visibility increased significantly. Financial problems are detected early and measures can be taken.`,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    },
    tr: {
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
  },
}
