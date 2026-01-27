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
  const t = getTranslations(params.locale)
  return {
    title: `${t.about.title} - DAAT`,
    description: t.about.description,
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

// NOT: Tamamen hayali/generic müşteri listesi - Gerçek şirket isimleri kullanılmamıştır
const clients = [
  "ApexTech Solutions",
  "Nexus Digital Works",
  "Vertex Data Systems",
  "Quantum Innovations",
  "Catalyst Software Labs",
  "Pulse Tech",
  "Synergy Automation",
  "CodeForge Works",
  "Digital Nexus Solutions",
  "TechSphere Partners",
]

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale)
  const about = t.about
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
              {about.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {about.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>{about.mission.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {about.mission.description}
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{about.vision.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {about.vision.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {about.whatWeDo.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>{about.whatWeDo.automation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {about.whatWeDo.automation.description}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{about.whatWeDo.finance.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {about.whatWeDo.finance.description}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{about.whatWeDo.integrations.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {about.whatWeDo.integrations.description}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2" style={{
                borderColor: 'rgba(200, 154, 61, 0.3)',
                background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.05) 0%, rgba(200, 154, 61, 0.08) 100%)'
              }}>
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-2xl flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, rgba(242, 184, 75, 0.15) 0%, rgba(200, 154, 61, 0.1) 100%)'
                  }}>
                    <svg className="h-6 w-6" style={{ color: '#C89A3D' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.585 11.692h4.328s2.432.739 2.432-2.961c0-2.322-1.769-2.322-1.769-2.322h-3.362v10.075h-1.629V6.39H7.108s-3.953.116-3.953 4.676c0 4.442 3.953 4.676 3.953 4.676h1.477v-4.05zm-1.589-4.676h2.692s1.332.027 1.332 1.353c0 1.324-1.332 1.353-1.332 1.353H8.108V7.016h-.112z"/>
                    </svg>
                  </div>
                  <CardTitle>{about.whatWeDo.pythonBots.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {about.whatWeDo.pythonBots.description}
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
              {about.team.title}
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
              {about.clients.title}
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
