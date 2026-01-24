const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Logo dosyası yolu - kullanıcının gönderdiği logo
const logoPath = 'C:\\Users\\K4HPEDUNYA\\.cursor\\projects\\c-Users-K4HPEDUNYA-Desktop-DAAT\\assets\\c__Users_K4HPEDUNYA_AppData_Roaming_Cursor_User_workspaceStorage_75577f2dc6f68c392a181357c00c832a_images_Ads_z_tasar_m__15_-db41adec-e110-4e67-94c7-e86ed1a6c738.png';
const appDir = path.join(process.cwd(), 'app');

// Alternatif: public/images/DAAT.png kullan
const altLogoPath = path.join(process.cwd(), 'public', 'images', 'DAAT.png');

async function cropAndResizeFavicon() {
  try {
    // Logo dosyasını bul
    let sourcePath = logoPath;
    if (!fs.existsSync(sourcePath)) {
      sourcePath = altLogoPath;
    }
    
    if (!fs.existsSync(sourcePath)) {
      console.error('Logo dosyası bulunamadı!');
      process.exit(1);
    }

    console.log('Logo dosyası bulundu:', sourcePath);

    // Görüntüyü oku ve bilgilerini al
    const image = sharp(sourcePath);
    const metadata = await image.metadata();
    
    console.log('Orijinal boyut:', metadata.width, 'x', metadata.height);

    // Transparan alanları kırp (trim)
    const trimmed = await image
      .trim({ threshold: 10 }) // Transparan alanları kırp
      .toBuffer();

    // Trim edilmiş görüntünün boyutunu al
    const trimmedMetadata = await sharp(trimmed).metadata();
    console.log('Kırpılmış boyut:', trimmedMetadata.width, 'x', trimmedMetadata.height);

    // Favicon boyutlarını oluştur
    // Not: icon.png için en büyük boyutu kullan (512x512)
    const sizes = [
      { size: 512, name: 'icon.png' },
      { size: 180, name: 'apple-icon.png' },
      { size: 32, name: 'favicon.ico' },
    ];

    for (const { size, name } of sizes) {
      const outputPath = path.join(appDir, name);
      
      // 32x32 için favicon.ico formatında kaydet
      if (name === 'favicon.ico') {
        await sharp(trimmed)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparan arka plan
          })
          .toFormat('png')
          .toFile(outputPath.replace('.ico', '.png'));
        
        // .ico dosyası için PNG'yi kopyala (tarayıcılar PNG'yi de kabul eder)
        const pngPath = outputPath.replace('.ico', '.png');
        if (fs.existsSync(pngPath)) {
          fs.copyFileSync(pngPath, outputPath);
        }
      } else {
        await sharp(trimmed)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparan arka plan
          })
          .toFile(outputPath);
      }
      
      console.log(`✓ ${name} (${size}x${size}) oluşturuldu`);
    }

    console.log('\nTüm favicon dosyaları başarıyla oluşturuldu!');
  } catch (error) {
    console.error('Hata:', error);
    process.exit(1);
  }
}

cropAndResizeFavicon();
