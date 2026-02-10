import { NextRequest, NextResponse } from "next/server"
import knowledgeBase from "@/lib/knowledge-base.json"
import { saveLead } from "@/lib/lead-storage"

// Rate limiting (simple in-memory)
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT = 10 // messages per minute
const RATE_WINDOW = 60000 // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []
  const recentTimestamps = timestamps.filter(t => now - t < RATE_WINDOW)
  
  if (recentTimestamps.length >= RATE_LIMIT) {
    return false
  }
  
  recentTimestamps.push(now)
  rateLimitMap.set(ip, recentTimestamps)
  return true
}

function formatKnowledgeContext(sections: any): string {
  const lines: string[] = []

  if (sections?.services?.length) {
    lines.push("SERVICES")
    for (const s of sections.services) {
      if (!s?.title) continue
      lines.push(`- ${s.title}: ${s.description ?? ""}`.trim())
    }
    lines.push("")
  }

  if (sections?.process?.length) {
    lines.push("PROCESS")
    for (const p of sections.process) {
      if (!p?.title) continue
      lines.push(`- ${p.title}: ${p.description ?? ""}`.trim())
    }
    lines.push("")
  }

  if (sections?.faq?.length) {
    lines.push("FAQ (selected)")
    for (const f of sections.faq.slice(0, 8)) {
      if (!f?.question) continue
      lines.push(`- Q: ${f.question}`)
      lines.push(`  A: ${f.answer ?? ""}`.trimEnd())
    }
    lines.push("")
  }

  if (sections?.about) {
    lines.push("ABOUT")
    if (sections.about.mission) lines.push(`- Mission: ${sections.about.mission}`)
    if (sections.about.whyAlbania) lines.push(`- Why Albania: ${sections.about.whyAlbania}`)
    if (sections.about.value) lines.push(`- Value: ${sections.about.value}`)

    if (Array.isArray(sections.about.team) && sections.about.team.length) {
      lines.push("- Team / Founders:")
      for (const m of sections.about.team) {
        if (!m?.name) continue
        const role = m.role ? ` — ${m.role}` : ""
        const bio = m.bio ? ` (${m.bio})` : ""
        lines.push(`  - ${m.name}${role}${bio}`)
      }
    }
    lines.push("")
  }

  if (sections?.contact) {
    lines.push("CONTACT")
    if (sections.contact.phone) lines.push(`- Phone: ${sections.contact.phone}`)
    if (sections.contact.email) lines.push(`- Email: ${sections.contact.email}`)
    if (sections.contact.address) lines.push(`- Address: ${sections.contact.address}`)
    lines.push("")
  }

  return lines.join("\n").trim()
}

function getSystemPrompt(locale: string, knowledgeContext: string): string {
  const prompts = {
    tr: `Sen DAAT Albania'nın canlı AI asistanısın. DAAT hakkında net, profesyonel ve kısa cevaplar ver.

KAPSAM (yanıtlayabilirsin):
- Hizmetler, süreç, fiyatlandırma yaklaşımı, iletişim
- Hakkımızda / misyon / neden Arnavutluk
- Ekip ve kurucu bilgilerimiz (\"sahipleri kim\" gibi sorular dahil)

KURALLAR:
1) Yalnızca aşağıdaki ŞİRKET BİLGİSİ'ne dayan. Bilgi yoksa \"Elimdeki içerikte bu detay yok\" de ve iletişim seçeneği sun.
2) \"Sahipleri/kurucuları kim?\" sorulursa, ŞİRKET BİLGİSİ > ABOUT > Team / Founders bölümündeki isimleri ve rolleri paylaş.
3) Resmi ortaklık oranı / ticaret sicil kaydı gibi hukuki detaylar sorulursa: bu bilgi bende yok; resmi kaynakları veya ekibimizi yönlendir.
4) Gereksiz yere reddetme: Soru DAAT ile ilgiliyse yardımcı ol.
5) Cevaplar 2-4 cümle olsun. Ton: sıcak, profesyonel, güven veren.
6) İnsan olduğunu iddia etme; \"AI asistanım\" de.

ŞİRKET BİLGİSİ:
${knowledgeContext}`,
    
    en: `You are DAAT Albania’s live AI assistant. Provide clear, professional, concise answers about DAAT.

SCOPE (you may answer):
- Services, delivery process, pricing approach, contact details
- About / mission / why Albania
- Team & founders (including questions like “who owns DAAT?”)

RULES:
1) Use ONLY the COMPANY INFO below. If a detail is missing, say so and offer the contact option.
2) For “Who are the owners/founders?”: use COMPANY INFO > ABOUT > Team / Founders and share names + roles.
3) If asked for legal ownership structure / shareholding details: you don’t have that—suggest official sources or contacting the team.
4) Don’t refuse DAAT-related questions. Be helpful and trust-building.
5) Keep answers 2–4 sentences. Tone: warm, professional, confident.
6) Never claim to be human—say “I’m an AI assistant”.

COMPANY INFO:
${knowledgeContext}`,
    
    al: `Ti je asistenti AI live i DAAT Albania. Jep përgjigje të qarta, profesionale dhe të shkurtra për DAAT.

FUSHA (mund të përgjigjesh):
- Shërbimet, procesi i punës, qasja e çmimeve, kontaktet
- Rreth nesh / misioni / pse Shqipëria
- Ekipi & bashkëthemeluesit (p.sh. “kush janë pronarët?”)

RREGULLAT:
1) Përdor VETËM INFORMACIONIN E KOMPANISË më poshtë. Nëse mungon një detaj, thuaj kështu dhe ofro opsion kontakti.
2) Për “Kush janë pronarët/bashkëthemeluesit?”: përdor seksionin ABOUT > Team / Founders dhe jep emrat + rolet.
3) Për detaje ligjore të pronësisë / përqindje aksionesh: nuk i ke—sugjero burime zyrtare ose kontakt me ekipin.
4) Mos refuzo pyetje që lidhen me DAAT; ji ndihmues dhe ndërtues besimi.
5) Mbaji përgjigjet 2–4 fjali. Toni: i ngrohtë, profesional, i sigurt.
6) Mos pretendo se je njeri—thuaj “jam asistent AI”.

INFORMACIONI I KOMPANISË:
${knowledgeContext}`
  }
  
  return prompts[locale as keyof typeof prompts] || prompts.en
}

export async function POST(request: NextRequest) {
  try {
    // Moonshot AI API key validation
    const apiKey = process.env.MOONSHOT_API_KEY
    console.log("[Chat API] MOONSHOT_API_KEY present:", !!apiKey, "length:", apiKey?.length ?? 0)
    if (!apiKey) {
      console.error("[Chat API] MOONSHOT_API_KEY boş. .env.local kontrol edin.")
      return NextResponse.json(
        {
          error: "API key not configured. Ensure MOONSHOT_API_KEY in .env.local",
        },
        { status: 500 }
      )
    }

    const { message, locale = 'al', conversationHistory = [], phoneNumber } = await request.json()
    
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Rate limiting check
    if (!checkRateLimit(ip)) {
      const errorMessages = {
        tr: "Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyin.",
        al: "Shumë kërkesa. Ju lutemi prisni një minutë.",
        en: "Too many requests. Please wait a minute.",
      }
      return NextResponse.json(
        { error: errorMessages[locale as keyof typeof errorMessages] || errorMessages.en },
        { status: 429 }
      )
    }
    
    // Handle phone number submission
    if (phoneNumber) {
      try {
        const lead = saveLead({
          phone: phoneNumber,
          locale,
          messages: conversationHistory.map((m: any) => m.content),
          ipAddress: ip,
        })
        
        console.log('📞 New lead saved:', { id: lead.id, phone: lead.phone, locale: lead.locale })
        
        const successMessages = {
          tr: "Teşekkürler! Ekibimiz en kısa sürede dönüş yapacak.",
          al: "Faleminderit! Ekipi ynë do të kthehet sa më shpejt.",
          en: "Thank you! Our team will get back to you soon.",
        }
        
        return NextResponse.json({
          success: true,
          message: successMessages[locale as keyof typeof successMessages] || successMessages.en
        })
      } catch (error) {
        console.error('Error saving lead:', error)
        return NextResponse.json(
          { error: "Failed to save contact information" },
          { status: 500 }
        )
      }
    }
    
    // Get knowledge base for locale
    const kb = knowledgeBase.find(k => k.locale === locale) || knowledgeBase[0]
    const knowledgeContext = formatKnowledgeContext(kb.sections)
    
    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }
    
    // Call Moonshot AI (Kimi K2) API
    try {
      // Official base URL (OpenAI-compatible): https://api.moonshot.ai/v1
      const moonshotResponse = await fetch("https://api.moonshot.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          // Kimi K2 high-speed variant (recommended by Moonshot docs)
          model: "kimi-k2-turbo-preview",
          max_tokens: 1024,
          temperature: 0.7,
          messages: [
            { role: "system", content: getSystemPrompt(locale, knowledgeContext) },
            ...conversationHistory.slice(-10), // Keep last 10 messages for context
            { role: "user", content: message }
          ],
        }),
      })

      if (!moonshotResponse.ok) {
        const errorData = await moonshotResponse.json().catch(() => ({}))
        console.error("Moonshot API error response:", moonshotResponse.status, errorData)
        throw new Error(`Moonshot API returned ${moonshotResponse.status}: ${JSON.stringify(errorData)}`)
      }

      const responseData = await moonshotResponse.json()
      const assistantMessage = responseData.choices?.[0]?.message?.content || 'Sorry, I could not process that.'
      
      return NextResponse.json({
        success: true,
        message: assistantMessage,
      })
      
    } catch (error: any) {
      console.error("Moonshot AI API error:", error)
      
      // Handle specific API errors
      if (error?.status === 401) {
        return NextResponse.json(
          { error: "API authentication failed. Check your API key." },
          { status: 500 }
        )
      }
      
      if (error?.status === 429) {
        return NextResponse.json(
          { error: "API rate limit exceeded. Please try again later." },
          { status: 503 }
        )
      }
      
      return NextResponse.json(
        { error: "Failed to process message: " + (error?.message || "Unknown error") },
        { status: 500 }
      )
    }
    
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
