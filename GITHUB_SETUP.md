# GitHub Kurulum Adımları

## 1. Git Config Ayarla

PowerShell'de çalıştır (email'i kendi email'inle değiştir):

```powershell
cd C:\Users\K4HPEDUNYA\Desktop\DAAT
git config --global user.name "bak1r"
git config --global user.email "your-email@example.com"
```

## 2. GitHub'da Yeni Repo Oluştur

1. GitHub'a git: https://github.com/new
2. Repository name: `daat` (veya istediğin isim)
3. Public veya Private seç
4. **"Initialize this repository with a README" işaretleme**
5. "Create repository" tıkla

## 3. Lokal Projeyi Push Et

GitHub'da repo oluşturduktan sonra, GitHub'ın gösterdiği komutları kullan VEYA şunları çalıştır:

```powershell
cd C:\Users\K4HPEDUNYA\Desktop\DAAT
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/bak1r/daat.git
git push -u origin main
```

**Not:** Repo adını değiştirdiysen URL'yi güncelle.

## 4. Sunucuda Clone Et

SSH ile sunucuya bağlan:

```bash
ssh root@167.99.249.171
```

Sonra:

```bash
cd /var/www
sudo git clone https://github.com/bak1r/daat.git daat
cd daat
sudo npm install
sudo npm run build
```

## 5. PM2 ile Başlat

```bash
sudo pm2 start npm --name "daat" -- start
sudo pm2 save
sudo pm2 startup
```

## 6. Güncelleme Yapmak İçin

**Lokal bilgisayarda:**
```powershell
cd C:\Users\K4HPEDUNYA\Desktop\DAAT
git add .
git commit -m "güncelleme açıklaması"
git push
```

**Sunucuda:**
```bash
cd /var/www/daat
sudo git pull
sudo npm install  # yeni paket varsa
sudo npm run build
sudo pm2 restart daat
```
