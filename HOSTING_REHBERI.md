# DAAT Hosting Rehberi / Hosting Guide

## 🌐 daat.al Domain'i İçin Hosting Seçenekleri

Projeniz **Next.js 14** ile geliştirilmiş ve **API route'ları** içeriyor (contact form). Bu nedenle **Node.js sunucusu** gerekiyor.

---

## 🎯 Önerilen Seçenekler

### 1. **Vercel** (En Kolay - Önerilen) ⭐

**Avantajlar:**
- ✅ Next.js için optimize edilmiş (Next.js'in yaratıcıları tarafından geliştirildi)
- ✅ Ücretsiz plan mevcut (hobby plan)
- ✅ Otomatik SSL sertifikası (HTTPS)
- ✅ Otomatik deployment (GitHub bağlantısı ile)
- ✅ Global CDN (hızlı yükleme)
- ✅ Kolay domain bağlama
- ✅ Ücretsiz plan: Sınırsız bandwidth, 100GB bandwidth

**Fiyat:**
- **Hobby (Ücretsiz)**: Kişisel projeler için
- **Pro ($20/ay)**: Ticari projeler için

**Kurulum:**
1. [vercel.com](https://vercel.com) hesabı oluştur
2. GitHub repo'yu bağla
3. Domain'i ekle (daat.al)
4. Otomatik deploy!

**Not:** Ücretsiz planda "Powered by Vercel" badge'i görünür, Pro plan'da kaldırılabilir.

---

### 2. **DigitalOcean App Platform** (Orta Seviye)

**Avantajlar:**
- ✅ Kolay kurulum
- ✅ Otomatik SSL
- ✅ Git-based deployment
- ✅ $5/ay'dan başlayan fiyatlar
- ✅ Ölçeklenebilir

**Fiyat:**
- **Basic**: $5/ay (512MB RAM, 1GB storage)
- **Professional**: $12/ay (1GB RAM, 5GB storage)

**Kurulum:**
1. [digitalocean.com](https://digitalocean.com) hesabı oluştur
2. App Platform'da yeni app oluştur
3. GitHub repo'yu bağla
4. Domain'i ekle

---

### 3. **DigitalOcean Droplet (VPS)** (Daha Fazla Kontrol)

**Avantajlar:**
- ✅ Tam kontrol
- ✅ $4-6/ay (Basic plan)
- ✅ Kendi sunucunuzu yönetirsiniz
- ✅ İstediğiniz yazılımı kurabilirsiniz

**Dezavantajlar:**
- ❌ Manuel kurulum gerekir
- ❌ SSL sertifikası manuel (Let's Encrypt ile ücretsiz)
- ❌ Sunucu yönetimi bilgisi gerekir

**Minimum Özellikler:**
- **RAM**: 1GB (2GB önerilir)
- **CPU**: 1 vCPU
- **Storage**: 25GB SSD
- **Bandwidth**: 1TB/ay

**Kurulum Adımları:**
```bash
# Ubuntu 22.04 LTS önerilir
# 1. Node.js 18+ kurulumu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. PM2 kurulumu (process manager)
sudo npm install -g pm2

# 3. Nginx kurulumu (reverse proxy)
sudo apt install nginx

# 4. Projeyi clone et ve build et
git clone <repo-url>
cd DAAT
npm install
npm run build

# 5. PM2 ile başlat
pm2 start npm --name "daat" -- start
pm2 save
pm2 startup

# 6. Nginx konfigürasyonu (SSL için Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d daat.al -d www.daat.al
```

---

### 4. **Hetzner Cloud** (Avrupa - Uygun Fiyatlı)

**Avantajlar:**
- ✅ Çok uygun fiyatlar (€4.15/ay)
- ✅ Avrupa lokasyonları (Almanya, Finlandiya)
- ✅ Yüksek performans
- ✅ SSD storage

**Fiyat:**
- **CX11**: €4.15/ay (2GB RAM, 1 vCPU, 20GB SSD)
- **CX21**: €5.83/ay (4GB RAM, 2 vCPU, 40GB SSD)

**Kurulum:** DigitalOcean Droplet ile aynı adımlar.

---

### 5. **AWS / Azure / Google Cloud** (Enterprise)

**Avantajlar:**
- ✅ Çok ölçeklenebilir
- ✅ Güvenilir
- ✅ Çok sayıda servis

**Dezavantajlar:**
- ❌ Karmaşık kurulum
- ❌ Fiyatlandırma karmaşık
- ❌ Küçük projeler için overkill

**Not:** Küçük-orta ölçekli projeler için önerilmez.

---

## 📊 Karşılaştırma Tablosu

| Özellik | Vercel | DigitalOcean App | VPS (DO/Hetzner) |
|---------|--------|------------------|------------------|
| **Kurulum Zorluğu** | ⭐ Çok Kolay | ⭐⭐ Kolay | ⭐⭐⭐ Orta |
| **Fiyat** | Ücretsiz/$20 | $5-12/ay | $4-6/ay |
| **Kontrol** | Sınırlı | Orta | Tam |
| **Ölçeklenebilirlik** | Yüksek | Yüksek | Orta |
| **SSL** | Otomatik | Otomatik | Manuel |
| **CDN** | ✅ | ✅ | ❌ |
| **Önerilen** | ✅ Evet | ✅ Evet | ⚠️ Teknik bilgi gerekir |

---

## 🚀 Önerilen Seçim: Vercel

**Neden Vercel?**
1. Next.js için en uygun platform
2. Ücretsiz plan yeterli (başlangıç için)
3. Sıfır konfigürasyon
4. Otomatik SSL ve CDN
5. Kolay domain bağlama

**Kurulum Adımları (Vercel):**

1. **Vercel Hesabı Oluştur**
   - [vercel.com/signup](https://vercel.com/signup) adresine git
   - GitHub hesabınızla giriş yap

2. **Projeyi Deploy Et**
   - "Add New Project" butonuna tıkla
   - GitHub repo'nu seç (DAAT)
   - Framework Preset: Next.js (otomatik algılanır)
   - Root Directory: `.` (boş bırak)
   - Build Command: `npm run build` (otomatik)
   - Output Directory: `.next` (otomatik)
   - Install Command: `npm install` (otomatik)

3. **Environment Variables Ekle**
   ```
   NEXT_PUBLIC_SITE_URL=https://daat.al
   UNSPLASH_ACCESS_KEY=your_key_here (opsiyonel)
   ```

4. **Domain Ekle**
   - Project Settings > Domains
   - "Add Domain" butonuna tıkla
   - `daat.al` yaz
   - DNS ayarlarını yap (Vercel size talimat verir)

5. **DNS Ayarları (Domain Registrar'da)**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21 (Vercel'in IP'si - güncel IP'yi Vercel'den alın)
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 🔧 Alternatif: VPS Kurulumu (Detaylı)

Eğer VPS tercih ederseniz, aşağıdaki minimum özelliklere sahip bir sunucu alın:

### Minimum Gereksinimler:
- **RAM**: 1GB (2GB önerilir)
- **CPU**: 1 vCPU
- **Storage**: 20GB SSD
- **OS**: Ubuntu 22.04 LTS
- **Bandwidth**: 1TB/ay

### Kurulum Scripti (Ubuntu 22.04):

```bash
#!/bin/bash
# DAAT Next.js Deployment Script

# 1. Sistem güncellemesi
sudo apt update && sudo apt upgrade -y

# 2. Node.js 18.x kurulumu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. PM2 kurulumu
sudo npm install -g pm2

# 4. Nginx kurulumu
sudo apt install nginx -y

# 5. Git kurulumu
sudo apt install git -y

# 6. Projeyi clone et
cd /var/www
sudo git clone <your-repo-url> daat
cd daat
sudo npm install
sudo npm run build

# 7. PM2 ile başlat
sudo pm2 start npm --name "daat" -- start
sudo pm2 save
sudo pm2 startup

# 8. Nginx konfigürasyonu
sudo nano /etc/nginx/sites-available/daat.al

# Aşağıdaki içeriği ekle:
"""
server {
    listen 80;
    server_name daat.al www.daat.al;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
"""

# 9. Nginx'i aktif et
sudo ln -s /etc/nginx/sites-available/daat.al /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# 10. SSL sertifikası (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d daat.al -d www.daat.al

# 11. Firewall ayarları
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

---

## 📝 Domain DNS Ayarları

Domain'inizi aldığınız yerden (registrar) aşağıdaki DNS kayıtlarını ekleyin:

### Vercel İçin:
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel'in IP'si - güncel IP'yi kontrol edin)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### VPS İçin:
```
Type: A
Name: @
Value: [VPS IP adresiniz]

Type: A
Name: www
Value: [VPS IP adresiniz]
```

**Not:** DNS değişiklikleri 24-48 saat içinde aktif olur (genellikle birkaç saat).

---

## ✅ Deployment Checklist

- [ ] Hosting sağlayıcısı seçildi
- [ ] Sunucu/VPS kuruldu (eğer VPS seçildiyse)
- [ ] Domain DNS ayarları yapıldı
- [ ] Environment variables ayarlandı
- [ ] SSL sertifikası kuruldu (HTTPS)
- [ ] Proje deploy edildi
- [ ] Test edildi (tüm sayfalar çalışıyor mu?)
- [ ] Contact form test edildi
- [ ] Analytics kuruldu (opsiyonel)

---

## 🆘 Sorun Giderme

### Vercel'de Build Hatası:
- `npm run build` komutunu lokal olarak çalıştırın
- Hataları kontrol edin
- Environment variables'ı kontrol edin

### VPS'te Port 3000 Erişilemiyor:
- Firewall'u kontrol edin: `sudo ufw status`
- PM2'nin çalıştığını kontrol edin: `pm2 list`
- Nginx loglarını kontrol edin: `sudo tail -f /var/log/nginx/error.log`

### Domain Çalışmıyor:
- DNS propagation kontrolü: [whatsmydns.net](https://www.whatsmydns.net)
- 24-48 saat bekleyin
- DNS kayıtlarını tekrar kontrol edin

---

## 💡 İpuçları

1. **Başlangıç için Vercel kullanın** - En kolay ve hızlı çözüm
2. **Pro büyüdükçe VPS'e geçiş yapabilirsiniz** - Daha fazla kontrol için
3. **SSL sertifikası mutlaka kurun** - HTTPS zorunlu
4. **Backup alın** - Düzenli olarak projeyi yedekleyin
5. **Monitoring ekleyin** - Uptime monitoring servisleri kullanın (UptimeRobot, Pingdom)

---

## 📞 Destek

Herhangi bir sorunuz olursa:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- DigitalOcean Tutorials: [digitalocean.com/community/tags/next-js](https://www.digitalocean.com/community/tags/next-js)

---

**Sonuç:** Başlangıç için **Vercel** önerilir. Ücretsiz plan yeterli, kurulum çok kolay ve Next.js için optimize edilmiş. İleride daha fazla kontrol isterseniz VPS'e geçiş yapabilirsiniz.
