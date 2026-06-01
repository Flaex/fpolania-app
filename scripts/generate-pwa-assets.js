import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgPath = path.resolve('public/favicon.svg');
const publicDir = path.resolve('public');

async function generate() {
  try {
    if (!fs.existsSync(svgPath)) {
      console.error(`SVG file not found at ${svgPath}`);
      return;
    }

    console.log('Generating PNG icons using sharp...');
    
    // Generate 192x192
    await sharp(svgPath)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'icon-192.png'));
    console.log('✓ Generated icon-192.png');

    // Generate 512x512
    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'icon-512.png'));
    console.log('✓ Generated icon-512.png');

    // Generate 180x180 for Apple touch icon
    await sharp(svgPath)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ Generated apple-touch-icon.png');

    console.log('All PWA assets generated successfully!');
  } catch (error) {
    console.error('Error generating assets:', error);
  }
}

generate();
