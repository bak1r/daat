const fs = require('fs');
const path = require('path');

// Logo dosyasını oku
const logoPath = path.join(process.cwd(), 'public', 'images', 'DAAT.png');
const appDir = path.join(process.cwd(), 'app');

// app klasörünün var olduğundan emin ol
if (!fs.existsSync(appDir)) {
  console.error('app klasörü bulunamadı!');
  process.exit(1);
}

// Logo dosyasını oku
if (!fs.existsSync(logoPath)) {
  console.error('Logo dosyası bulunamadı:', logoPath);
  process.exit(1);
}

const logoBuffer = fs.readFileSync(logoPath);

// Favicon dosyalarını oluştur
const iconPath = path.join(appDir, 'icon.png');
const appleIconPath = path.join(appDir, 'apple-icon.png');

fs.writeFileSync(iconPath, logoBuffer);
fs.writeFileSync(appleIconPath, logoBuffer);

console.log('Favicon dosyaları oluşturuldu:');
console.log('- app/icon.png');
console.log('- app/apple-icon.png');
