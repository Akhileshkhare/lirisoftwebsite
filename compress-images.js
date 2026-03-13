// compress-images.js
// Compress all images in the public folder using sharp
// Usage: node compress-images.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const PUBLIC_DIR = path.join(__dirname, 'public');

function getAllImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImageFiles(filePath));
    } else if (IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())) {
      results.push(filePath);
    }
  });
  return results;
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const tempPath = filePath + '.tmp';
  try {
    let pipeline = sharp(filePath);
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 75, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: 75, compressionLevel: 9 });
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: 75 });
    }
    await pipeline.toFile(tempPath);
    fs.renameSync(tempPath, filePath);
    console.log(`Compressed: ${filePath}`);
  } catch (err) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    console.error(`Failed to compress ${filePath}:`, err.message);
  }
}

async function main() {
  const images = getAllImageFiles(PUBLIC_DIR);
  for (const img of images) {
    await compressImage(img);
  }
  console.log('Image compression complete.');
}

main();
