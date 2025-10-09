// scripts/generate-translations.js
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'fs';
import { resolve, join, relative } from 'path';

const SRC = resolve(process.cwd(), '.source_strings.json');
if (!existsSync(SRC)) {
  console.error('ERROR: .source_strings.json not found. Run `npx fbt-collect` first.');
  process.exit(1);
}

const data = JSON.parse(readFileSync(SRC, 'utf8'));
const locales = process.argv.slice(2);
if (!locales.length) {
  console.error('Usage: node scripts/generate-translations.js en_US vi_VN ...');
  process.exit(1);
}

const phrases = Array.isArray(data.phrases) ? data.phrases : [];
const project = (phrases.find(p => p.project) || {}).project || (data._meta && data._meta.project) || 'default';

const collected = new Set();

function addString(s) {
  if (typeof s !== 'string') return;
  const t = s.trim();
  if (!t) return;
  collected.add(t);
}

function extract(val) {
  if (typeof val === 'string') return addString(val);
  if (Array.isArray(val)) return val.forEach(extract);
  if (val && typeof val === 'object') {
    // common case: hashToText values may be strings or objects with .text
    if (val.text && typeof val.text === 'string') return addString(val.text);
    // otherwise iterate properties (skip internal/meta)
    for (const k of Object.keys(val)) {
      if (k.startsWith('_')) continue;
      extract(val[k]);
    }
  }
}

for (const p of phrases) {
  if (p.hashToText && typeof p.hashToText === 'object') {
    Object.values(p.hashToText).forEach(extract);
  } else {
    extract(p);
  }
}

// ensure translations dir
const outDir = resolve(process.cwd(), 'translations');
mkdirSync(outDir, { recursive: true });

for (const locale of locales) {
  // filename: use part before '_' (en_US -> en.json). Keep locale in _meta exactly as provided.
  const short = locale.includes('_') ? locale.split('_')[0] : locale;
  const outFile = join(outDir, `${short}.json`);
  const out = {};
  out._meta = { project, locale };
  for (const s of collected) out[s] = '';
  writeFileSync(outFile, JSON.stringify(out, null, 2), 'utf8');
  console.log(`Created ${relative(process.cwd(), outFile)} — ${collected.size} keys, _meta.locale=${locale}`);
}
