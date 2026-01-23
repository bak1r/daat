# DAAT Sunucu Kurulum Rehberi

## 🌐 Sunucu Bilgileri
- **IP Adresi:** 167.99.249.171
- **Hostname:** daat
- **OS:** Ubuntu 24.04 LTS

---

## 🔌 1. SSH ile Bağlan

Windows PowerShell veya CMD'de:

```bash
ssh root@167.99.249.171
```

Şifreni gir (yazarken görünmez, normal).

---

## 📦 2. Sistem Güncellemesi

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 🟢 3. Node.js 18.x Kurulumu

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Kontrol et:
```bash
node --version
npm --version
```

---

## ⚙️ 4. PM2 Kurulumu (Process Manager)

```bash
sudo npm install -g pm2
```

---

## 🌐 5. Nginx Kurulumu (Reverse Proxy)

```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

---

## 📥 6. Git Kurulumu

```bash
sudo apt install git -y
```

---

## 🚀 7. Projeyi Clone Et ve Build Et

```bash
cd /var/www
sudo git clone [GITHUB_REPO_URL] daat
cd daat
sudo npm install
sudo npm run build
```

**Not:** `[GITHUB_REPO_URL]` yerine GitHub repo URL'ini yaz.

---

## ▶️ 8. PM2 ile Başlat

```bash
sudo pm2 start npm --name "daat" -- start
sudo pm2 save
sudo pm2 startup
```

PM2 durumunu kontrol et:
```bash
pm2 list
pm2 logs daat
```

---

## 🔧 9. Nginx Konfigürasyonu

```bash
sudo nano /etc/nginx/sites-available/daat.al
```

Aşağıdaki içeriği yapıştır:

```nginx
server {
    listen 80;
    server_name daat.al www.daat.al;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Kaydet: `Ctrl+X`, sonra `Y`, sonra `Enter`

---

## 🔗 10. Nginx'i Aktif Et

```bash
sudo ln -s /etc/nginx/sites-available/daat.al /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🔒 11. SSL Sertifikası (Let's Encrypt - HTTPS)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d daat.al -d www.daat.al
```

Email adresini gir, şartları kabul et.

---

## 🔥 12. Firewall Ayarları

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

---

## ✅ 13. Test Et

Tarayıcıda aç:
- `http://167.99.249.171` (HTTP)
- `https://daat.al` (HTTPS - DNS ayarlarından sonra)

---

## 🔄 Güncelleme Yapmak İçin

```bash
cd /var/www/daat
sudo git pull
sudo npm install
sudo npm run build
sudo pm2 restart daat
```

---

## 📝 Environment Variables Ekle

```bash
sudo nano /var/www/daat/.env.local
```

İçeriği:
```
NEXT_PUBLIC_SITE_URL=https://daat.al
UNSPLASH_ACCESS_KEY=your_key_here
```

PM2'yi restart et:
```bash
sudo pm2 restart daat
```

---

## 🆘 Sorun Giderme

### PM2 çalışmıyor:
```bash
pm2 list
pm2 logs daat
pm2 restart daat
```

### Nginx çalışmıyor:
```bash
sudo systemctl status nginx
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

### Port 3000 erişilemiyor:
```bash
sudo netstat -tulpn | grep 3000
pm2 restart daat
```

---

## 📞 Yardım

Herhangi bir adımda takılırsan, hata mesajını paylaş!
