import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

let updated = 0;

walkDir(path.join(process.cwd(), 'src/pages/loler'), function(filePath) {
  if (!filePath.endsWith('.astro')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // STEP 4: Standardize Typography
  content = content.replace(/<h2>/g, '<h2 class="text-2xl font-semibold mt-12 mb-4">');
  content = content.replace(/<p>/g, '<p class="mb-4 text-slate-700">');
  content = content.replace(/<p class="lead[^"]*">/g, '<p class="text-lg text-slate-600 mb-8">');
  
  // STEP 6: Separate Navigation Sections
  content = content.replace(/<div class="(?:not-prose )?space-y-8">/g, '<section class="mt-16 border-t pt-10">');
  content = content.replace(/<\/div>\s*<section class="mt-10 mb-12/g, '</section>\n\n  <section class="mt-10 mb-12');

  // Strip entirely naked not-prose 
  content = content.replace(/class="not-prose"/g, '');
  content = content.replace(/not-prose /g, '');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updated++;
  }
});

console.log(`Successfully migrated ${updated} template files away from prose formatting.`);
