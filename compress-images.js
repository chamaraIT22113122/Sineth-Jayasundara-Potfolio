import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, 'src', 'Images');
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

async function getAllImageFiles(dir) {
  const files = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...await getAllImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function compressImage(filePath) {
  try {
    const stats = await fs.stat(filePath);
    const fileSizeInMB = stats.size / (1024 * 1024);

    // Skip if file is already small (less than 500KB)
    if (fileSizeInMB < 0.5) {
      console.log(`✓ Skipped (already optimized): ${path.basename(filePath)} (${fileSizeInMB.toFixed(2)}MB)`);
      return;
    }

    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Resize if larger than max dimensions
    let processedImage = image;
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      processedImage = processedImage.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Compress based on format
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.png') {
      processedImage = processedImage.png({ quality: QUALITY, compressionLevel: 9 });
    } else {
      processedImage = processedImage.jpeg({ quality: QUALITY, mozjpeg: true });
    }

    const outputPath = filePath;
    await processedImage.toFile(outputPath + '.tmp');
    
    // Replace original with compressed version
    await fs.unlink(filePath);
    await fs.rename(outputPath + '.tmp', filePath);

    const newStats = await fs.stat(filePath);
    const newSizeInMB = newStats.size / (1024 * 1024);
    const savedMB = fileSizeInMB - newSizeInMB;
    const savedPercent = ((savedMB / fileSizeInMB) * 100).toFixed(1);

    console.log(`✓ Compressed: ${path.basename(filePath)}`);
    console.log(`  Before: ${fileSizeInMB.toFixed(2)}MB → After: ${newSizeInMB.toFixed(2)}MB (Saved ${savedPercent}%)`);
  } catch (error) {
    console.error(`✗ Error compressing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Starting image compression...\n');
  
  const imageFiles = await getAllImageFiles(IMAGES_DIR);
  console.log(`Found ${imageFiles.length} images to process\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of imageFiles) {
    const statsBefore = await fs.stat(file);
    totalBefore += statsBefore.size;
    
    await compressImage(file);
    
    const statsAfter = await fs.stat(file);
    totalAfter += statsAfter.size;
  }

  const totalSavedMB = (totalBefore - totalAfter) / (1024 * 1024);
  const totalSavedPercent = ((totalSavedMB / (totalBefore / (1024 * 1024))) * 100).toFixed(1);

  console.log('\n✅ Compression complete!');
  console.log(`📊 Total saved: ${totalSavedMB.toFixed(2)}MB (${totalSavedPercent}%)`);
  console.log(`📦 Before: ${(totalBefore / (1024 * 1024)).toFixed(2)}MB → After: ${(totalAfter / (1024 * 1024)).toFixed(2)}MB`);
}

main().catch(console.error);
