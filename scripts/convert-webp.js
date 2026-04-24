/**
 * Convert every PNG/JPG in public/images/ to WebP.
 * Keeps originals in place for <picture> fallback support.
 * Run manually with: node scripts/convert-webp.js
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');

const files = fs.readdirSync(imagesDir).filter(f => /\.(png|jpe?g)$/i.test(f));

let converted = 0;
let skipped = 0;

for (const file of files) {
  const srcPath = path.join(imagesDir, file);
  const outPath = path.join(imagesDir, file.replace(/\.(png|jpe?g)$/i, '.webp'));

  if (fs.existsSync(outPath)) {
    const srcStat = fs.statSync(srcPath);
    const outStat = fs.statSync(outPath);
    if (outStat.mtimeMs >= srcStat.mtimeMs) {
      skipped++;
      continue;
    }
  }

  try {
    await sharp(srcPath)
      .webp({ quality: 82 })
      .toFile(outPath);
    const srcSize = fs.statSync(srcPath).size;
    const outSize = fs.statSync(outPath).size;
    const savings = (((srcSize - outSize) / srcSize) * 100).toFixed(1);
    console.log(`✓ ${file} → ${path.basename(outPath)} (${(srcSize / 1024).toFixed(0)}KB → ${(outSize / 1024).toFixed(0)}KB, -${savings}%)`);
    converted++;
  } catch (err) {
    console.error(`✗ Failed to convert ${file}: ${err.message}`);
  }
}

console.log(`\n${converted} converted, ${skipped} skipped (up-to-date).`);
