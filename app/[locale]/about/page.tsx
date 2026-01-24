import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { type Locale, getTranslations } from "@/lib/i18n"
import type { Metadata } from "next"
import { CheckCircle2, Target, TrendingUp, Lightbulb } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const isTR = params.locale === "tr"
  return {
    title: isTR ? "Hakkımızda - DAAT" : "About - DAAT",
    description: isTR
      ? "DAAT hakkında bilgi edinin"
      : "Learn about DAAT",
  }
}

const team = [
  {
    name: "Orhan Erdem",
    role: "Co-Founder & Head of Technology",
    image: null,
    bio: "10+ years of experience in software architecture and business automation systems.",
  },
  {
    name: "Onur Bolukbasi",
    role: "Co-Founder & Head of Operations",
    image: null,
    bio: "Expert in operations management and process optimization with a strong background in finance technology.",
  },
  {
    name: "Suheda Nur",
    role: "Director",
    image: null,
    bio: "Strategic leader with extensive experience in business development and client relations.",
  },
]

// NOT: Generic/sahte müşteri listesi - Gerçek müşterileriniz olduğunda izinle değiştirin
const clients = [
  "TechFlux Solutions - Stockholm, Sweden",
  "Nordik Data Systems - Oslo, Norway",
  "Alpina Tech Group - Zurich, Switzerland",
  "Baltic Innovators - Tallinn, Estonia",
  "Skandinavian Digital - Copenhagen, Denmark",
  "Centrale European Technologies - Vienna, Austria",
  "Mediterranea Software - Barcelona, Spain",
  "Atlantik Business Solution - Dublin, Ireland",
]

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const isTR = params.locale === "tr"
  const t = getTranslations(params.locale)
  const whyAlbania = t.whyAlbania

  return (
    <div className="pt-20 pb-16 min-h-screen">
      <section className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-daat-dark" style={{
              background: 'linear-gradient(135deg, #0B1F3B 0%, #C89A3D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {isTR ? "Hakkımızda" : "About Us"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isTR
                ? "DAAT, iş otomasyonu ve finans operasyonları teknolojisi alanında uzmanlaşmış bir şirkettir. Avrupa'nın önde gelen teknoloji firmalarına modern çözümler sunarak iş süreçlerini dijitalleştiriyor ve optimize ediyoruz."
                : "DAAT is a company specialized in business automation and finance operations technology. We help leading European technology companies digitize and optimize their business processes with modern solutions."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>{isTR ? "Misyonumuz" : "Our Mission"}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {isTR
                    ? "İşletmelerin dijital dönüşüm yolculuğunda onlara rehberlik etmek ve en iyi teknoloji çözümlerini sunmak. Müşterilerimizin operasyonel verimliliğini artırmak ve rekabet avantajı kazanmalarını sağlamak."
                    : "To guide businesses in their digital transformation journey and provide the best technology solutions. We help our clients increase operational efficiency and gain competitive advantage."}
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{isTR ? "Vizyonumuz" : "Our Vision"}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {isTR
                    ? "Teknoloji ile iş dünyasını birleştiren öncü bir şirket olmak. Avrupa'da iş otomasyonu ve finans teknolojileri alanında referans noktası haline gelmek."
                    : "To be a leading company that connects technology with the business world. To become a reference point in business automation and finance technologies across Europe."}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isTR ? "Ne Yapıyoruz?" : "What We Do"}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>{isTR ? "İş Süreci Otomasyonu" : "Process Automation"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {isTR
                      ? "Tekrarlayan görevleri otomatikleştirerek işletmelerin verimliliğini artırıyoruz. RPA, workflow yönetimi ve entegrasyon çözümleri sunuyoruz."
                      : "We automate repetitive tasks to increase business efficiency. We provide RPA, workflow management, and integration solutions."}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{isTR ? "Finans Operasyonları" : "Finance Operations"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {isTR
                      ? "Muhasebe süreçlerinden raporlamaya, dashboard'lardan veri analizine kadar finans operasyonlarını dijitalleştiriyoruz."
                      : "We digitize finance operations from accounting processes to reporting, dashboards, and data analysis."}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{isTR ? "Sistem Entegrasyonları" : "System Integrations"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {isTR
                      ? "Mevcut sistemlerinizi birbirine bağlayarak veri akışını optimize ediyoruz. API entegrasyonları ve veri senkronizasyonu sağlıyoruz."
                      : "We connect your existing systems to optimize data flow. We provide API integrations and data synchronization."}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Albania Section */}
          <div className="mb-16 relative">
            <div className="absolute inset-0 rounded-3xl -z-10" style={{
              background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.05) 0%, rgba(200, 154, 61, 0.08) 45%, rgba(44, 74, 110, 0.05) 75%, rgba(10, 22, 40, 0.03) 100%)'
            }}></div>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-center">
                {whyAlbania.title}
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                {whyAlbania.subtitle}
              </p>

              <div className="grid gap-8 md:grid-cols-2 mb-12">
                <Card className="bg-background/80 backdrop-blur">
                  <CardHeader>
                    <div className="mb-4 h-12 w-12 rounded-2xl flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.15) 0%, rgba(200, 154, 61, 0.1) 100%)'
                    }}>
                      <Lightbulb className="h-6 w-6" style={{ color: '#C89A3D' }} />
                    </div>
                    <CardTitle className="text-xl text-daat-dark">{whyAlbania.innovation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{whyAlbania.innovation.desc}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#C89A3D' }} />
                        <span className="text-sm">{whyAlbania.innovation.point1}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#C89A3D' }} />
                        <span className="text-sm">{whyAlbania.innovation.point2}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#C89A3D' }} />
                        <span className="text-sm">{whyAlbania.innovation.point3}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#C89A3D' }} />
                        <span className="text-sm">{whyAlbania.innovation.point4}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background/80 backdrop-blur">
                  <CardHeader>
                    <div className="mb-4 h-12 w-12 rounded-2xl flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, rgba(44, 74, 110, 0.15) 0%, rgba(11, 31, 59, 0.1) 100%)'
                    }}>
                      <TrendingUp className="h-6 w-6" style={{ color: '#2C4A6E' }} />
                    </div>
                    <CardTitle className="text-xl text-daat-dark">{whyAlbania.value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{whyAlbania.value.desc}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#2C4A6E' }} />
                        <span className="text-sm">{whyAlbania.value.point1}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#2C4A6E' }} />
                        <span className="text-sm">{whyAlbania.value.point2}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#2C4A6E' }} />
                        <span className="text-sm">{whyAlbania.value.point3}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#2C4A6E' }} />
                        <span className="text-sm">{whyAlbania.value.point4}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2" style={{
                background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.08) 0%, rgba(200, 154, 61, 0.1) 45%, rgba(44, 74, 110, 0.05) 75%, rgba(10, 22, 40, 0.03) 100%)',
                borderColor: 'rgba(200, 154, 61, 0.3)'
              }}>
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-2xl flex items-center justify-center mx-auto" style={{
                    background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.2) 0%, rgba(200, 154, 61, 0.15) 100%)'
                  }}>
                    <Target className="h-6 w-6" style={{ color: '#C89A3D' }} />
                  </div>
                  <CardTitle className="text-2xl text-center text-daat-dark">{whyAlbania.results.title}</CardTitle>
                  <CardDescription className="text-center text-base mt-2">{whyAlbania.results.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-background/70">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                      <span className="text-sm font-medium">{whyAlbania.results.example1}</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-background/70">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                      <span className="text-sm font-medium">{whyAlbania.results.example2}</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-background/70">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                      <span className="text-sm font-medium">{whyAlbania.results.example3}</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-background/70">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#C89A3D' }} />
                      <span className="text-sm font-medium">{whyAlbania.results.example4}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isTR ? "Ekibimiz" : "Our Team"}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name} className="text-center">
                  <CardHeader>
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-4">
                          <svg
                            className="w-full h-full"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse cx="50" cy="35" rx="12" ry="18" fill="#6B7280"/>
                            <path d="M20 70C20 58 30 50 50 50C70 50 80 58 80 70V90H20V70Z" fill="#6B7280"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="font-medium" style={{ color: '#C89A3D' }}>
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isTR ? "Hizmet Verdiğimiz Firmalar" : "Our Clients"}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {clients.map((client, index) => (
                <Card key={index} className="hover:shadow-soft-lg transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-sm font-medium text-center">{client}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}
