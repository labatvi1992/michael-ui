import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '../../..');
const COMP_DIR = path.join(ROOT, 'packages/michael-ui/components');

const items = fs.readdirSync(COMP_DIR).filter((name) => {
  const p = path.join(COMP_DIR, name);
  return fs.statSync(p).isDirectory() && !name.startsWith('_') && !name.startsWith('.');
});

const genScript = fs.readFileSync(path.join(ROOT, 'apps/docs/scripts/generate-docs.mjs'), 'utf8');
const taxonomyKeys = Array.from(genScript.matchAll(/^\s+['"]?([a-z-]+)['"]?:\s*\{\s*category:/gm)).map(
  (m) => m[1]
);

const missing = items.filter((i) => !taxonomyKeys.includes(i));
console.log('Total comp dirs:', items.length);
console.log('In taxonomy:', taxonomyKeys.length);
console.log('Not in taxonomy:', missing);

// For each directory in missing, let's see what is inside
for (const m of missing) {
  const p = path.join(COMP_DIR, m);
  const files = fs.readdirSync(p);
  const hasDoc = files.includes('index.en-US.md');
  const hasIndex = files.includes('index.tsx') || files.includes('index.ts');
  const hasDemo = files.includes('demo');
  console.log(`- ${m}: hasDoc=${hasDoc}, hasIndex=${hasIndex}, hasDemo=${hasDemo}, filesCount=${files.length}`);
}
