import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read config.json
const configPath = path.join(__dirname, '../src/data/config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Read index.html template
const htmlPath = path.join(__dirname, '../index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Generate dynamic content
const title = `${config.pegantin.wanita.panggilan} & ${config.pegantin.pria.panggilan} - Wedding Invitation`;
const description = config.intro;
const ogImage = config.thumbnail_image_url;

// Update HTML content
htmlContent = htmlContent
  .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
  .replace(/name="description" content="[^"]*"/, `name="description" content="${description}"`)
  .replace(/property="og:title" content="[^"]*"/, `property="og:title" content="${title}"`)
  .replace(/property="og:description" content="[^"]*"/, `property="og:description" content="${description}"`)
  .replace(/property="og:image" content="[^"]*"/, `property="og:image" content="${ogImage}"`)
  .replace(/name="twitter:title" content="[^"]*"/, `name="twitter:title" content="${title}"`)
  .replace(/name="twitter:description" content="[^"]*"/, `name="twitter:description" content="${description}"`)
  .replace(/name="twitter:image" content="[^"]*"/, `name="twitter:image" content="${ogImage}"`);

// Write updated HTML
fs.writeFileSync(htmlPath, htmlContent);

console.log('✅ HTML updated successfully with config data');
console.log(`📄 Title: ${title}`);
console.log(`📝 Description: ${description.substring(0, 50)}...`);
console.log(`🖼️  Image: ${ogImage}`);
