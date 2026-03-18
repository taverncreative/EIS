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

  // Append hard contrast where they are specifically missing text-color
  content = content.replace(/class="text-2xl font-semibold mt-12 mb-4"/g, 'class="text-2xl font-semibold text-slate-900 mt-12 mb-4"');
  content = content.replace(/class="text-lg font-semibold mb-4"/g, 'class="text-xl font-semibold text-slate-900 mt-8 mb-3"');
  
  // Ensure the intro leads maintain explicit text sizes and slate overrides
  content = content.replace(/<p class="text-lg text-slate-600 mb-8">/g, '<p class="lead text-lg text-slate-600 mb-8">');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    updated++;
  }
});

console.log(`Explicit typography color locking executed on ${updated} locations.`);
