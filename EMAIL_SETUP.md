# Email Kurulum Rehberi

## 📧 Contact Form Email Gönderme

### 1. Resend API Key Al

1. https://resend.com/signup adresine git
2. Ücretsiz hesap oluştur
3. Dashboard → API Keys → "Create API Key"
4. Key'i kopyala

### 2. Environment Variables Ekle

**Lokal bilgisayarda (.env.local):**
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=info@daatalbania.com
NEXT_PUBLIC_SITE_URL=https://daatalbania.com
```

**Sunucuda (.env.local):**
```bash
cd /var/www/daat
sudo nano .env.local
```

Aynı içeriği ekle ve kaydet.

### 3. PM2'yi Restart Et

```bash
sudo pm2 restart daat
```

---

## 📬 Profesyonel Email Adresi Oluşturma (info@daatalbania.com)

DigitalOcean email hosting sağlamaz. Seçenekler:

### Seçenek 1: Zoho Mail (Ücretsiz - Önerilen)

1. https://www.zoho.com/mail/ adresine git
2. "Get Started" → "Free Plan"
3. Domain ekle: `daatalbania.com`
4. DNS kayıtlarını ekle (Zoho talimat verir)
5. Email oluştur: `info@daatalbania.com`

**Fiyat:** Ücretsiz (5 kullanıcı, 5GB/kullanıcı)

### Seçenek 2: Google Workspace

1. https://workspace.google.com adresine git
2. Domain ekle: `daatalbania.com`
3. DNS kayıtlarını ekle
4. Email oluştur: `info@daatalbania.com`

**Fiyat:** ~$6/ay/kullanıcı

### Seçenek 3: Microsoft 365

1. https://www.microsoft.com/microsoft-365 adresine git
2. Business plan seç
3. Domain ekle: `daatalbania.com`
4. Email oluştur: `info@daatalbania.com`

**Fiyat:** ~$6/ay/kullanıcı

### Seçenek 4: Namecheap Private Email

1. Namecheap hesabına git
2. Email → Private Email
3. Domain seç: `daatalbania.com`
4. Email oluştur: `info@daatalbania.com`

**Fiyat:** ~$1.99/ay/kullanıcı

---

## ✅ Önerilen: Zoho Mail (Ücretsiz)

Başlangıç için Zoho Mail yeterli. İleride Google Workspace'e geçebilirsin.

**Adımlar:**
1. Zoho Mail'de ücretsiz hesap oluştur
2. Domain ekle
3. DNS kayıtlarını DigitalOcean'a ekle (Zoho talimat verir)
4. Email oluştur: `info@daatalbania.com`
5. `.env.local` dosyasında `CONTACT_EMAIL=info@daatalbania.com` olarak ayarla

---

## 🔄 Güncelleme

**Lokal bilgisayarda:**
```powershell
cd C:\Users\K4HPEDUNYA\Desktop\DAAT
git add .
git commit -m "Add email sending with Resend"
git push
```

**Sunucuda:**
```bash
cd /var/www/daat
sudo git pull
sudo npm install
sudo npm run build
# .env.local dosyasını güncelle (RESEND_API_KEY ekle)
sudo pm2 restart daat
```
