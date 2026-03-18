import fs from 'fs';
import path from 'path';

import { locations } from '../src/data/locations.js';

let content = `# LAYER 1: EXHAUSTIVE EXACT MATCHES
# These provide 100% unbreakable guarantees for multi-hyphen slugs and misspellings
`;

// Define EVERY SINGLE map to ensure zero reliance on pattern routing for core urls
const exhaustiveMap = {
  // Crane
  "crane-inspections": "crane-inspections",
  "crane-inspection": "crane-inspections",
  
  // Lifting Equipment
  "lifting-equipment-inspections": "lifting-equipment",
  "lifting-equipment-inspection": "lifting-equipment",
  "lifting-equipment": "lifting-equipment",
  
  // Mobile Plant
  "mobile-plant-inspections": "mobile-plant-inspection",
  "mobile-plant-inspection": "mobile-plant-inspection",

  // Puwer / Loler -> core categories
  "puwer-inspections": "work-equipment",
  "puwer-inspection": "work-equipment",
  "loler-inspections": "lifting-equipment",
  "loler-inspection": "lifting-equipment",
  
  // Passenger & Goods
  "passenger-goods-lift-inspections": "passenger-and-goods-lifts-inspections",
  "passenger-goods-lift-inspection": "passenger-and-goods-lifts-inspections",
  "passenger-and-goods-lifts-inspections": "passenger-and-goods-lifts-inspections",
  "passenger-and-goods-lift-inspection": "passenger-and-goods-lifts-inspections",
  
  // Work at Height
  "work-at-height-inspections": "work-at-height-equipment-inspections",
  "work-at-height-inspection": "work-at-height-equipment-inspections",
  "work-height-inspections": "work-at-height-equipment-inspections",
  "work-at-height-equipment-inspections": "work-at-height-equipment-inspections",
  "work-at-height-equipment-inspection": "work-at-height-equipment-inspections",
  
  // Garage
  "garage-equipment-inspections": "garage-equipment-inspections",
  "garage-equipment-inspection": "garage-equipment-inspections",
  
  // Firefighting
  "firefighting-evacuation-lift-inspections": "firefighting-and-evacuation-lift-inspections",
  "firefighting-evacuation-lift-inspection": "firefighting-and-evacuation-lift-inspections",
  "firefighting-and-evacuation-lift-inspections": "firefighting-and-evacuation-lift-inspections",
  "firefighting-and-evacuation-lift-inspection": "firefighting-and-evacuation-lift-inspections"
};

const counties = Object.keys(locations);

function push(oldUrl, newUrl) {
  content += `/${oldUrl} /loler/${newUrl} 301\n`;
}

// Map everything exhaustive to protect ranking collapse on exact URLs that don't fit generic parser
for (const [legacy, fresh] of Object.entries(exhaustiveMap)) {
  // Service
  push(legacy, `${fresh}/`);

  for (const county of counties) {
    // Service+County & County+Service
    push(`${legacy}-${county}`, `${fresh}/${county}/`);
    push(`${county}-${legacy}`, `${fresh}/${county}/`);
    
    // Towns
    for (const town of locations[county]) {
       push(`${legacy}-${town}`, `${fresh}/${county}/${town}/`);
       push(`${town}-${legacy}`, `${fresh}/${county}/${town}/`);
    }
  }

  // Unsupported legacy migrations
  push(`${legacy}-surrey`, `${fresh}/london/`);
  push(`surrey-${legacy}`, `${fresh}/london/`);
  push(`${legacy}-east-sussex`, `${fresh}/kent/`);
  push(`east-sussex-${legacy}`, `${fresh}/kent/`);
  push(`${legacy}-sussex`, `${fresh}/kent/`);
  push(`sussex-${legacy}`, `${fresh}/kent/`);
}

content += `
# LAYER 2: PATTERN RULES (FALLBACK)
/:service-inspections /loler/:service/ 301
/:service-inspection /loler/:service/ 301
/:service-inspections-:county /loler/:service/:county/ 301
/:county-:service-inspections /loler/:service/:county/ 301
/:service-inspection-:county /loler/:service/:county/ 301
/:county-:service-inspection /loler/:service/:county/ 301
/:service-inspections-:town /loler/:service/:county/:town/ 301
/:service-inspection-:town /loler/:service/:county/:town/ 301

# LAYER 3: GUIDES MIGRATION
/post/* /guides/:splat 301
`;

const targetFile = path.join(process.cwd(), 'dist', '_redirects');
const publicFile = path.join(process.cwd(), 'public', '_redirects');

if (!fs.existsSync(path.dirname(targetFile))) fs.mkdirSync(path.dirname(targetFile), { recursive: true });
if (!fs.existsSync(path.dirname(publicFile))) fs.mkdirSync(path.dirname(publicFile), { recursive: true });

fs.writeFileSync(targetFile, content, 'utf8');
fs.writeFileSync(publicFile, content, 'utf8');

console.log(`✅ Exported ${content.split('\n').length - 12} Exhaustive 1-to-1 Rules and Pattern Fallbacks.`);
