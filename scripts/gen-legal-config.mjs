#!/usr/bin/env node
/* =============================================================================
 *  scripts/gen-legal-config.mjs
 *  Erzeugt legal-config.js aus Umgebungsvariablen.
 *
 *  Quellen (in dieser Reihenfolge, spätere überschreiben frühere):
 *    1) .env-Datei im Projektwurzelverzeichnis (für lokales Self-Hosting)
 *    2) process.env                            (für CI / GitHub Actions)
 *
 *  Aufruf:  node scripts/gen-legal-config.mjs
 *  Keine externen Abhängigkeiten nötig (eigener .env-Parser).
 * ===========================================================================*/
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const env = {};

// 1) .env einlesen (simpel, robust gegen Kommentare/Quotes)
const envPath = join(root, '.env');
if (existsSync(envPath)) {
  for (const raw of readFileSync(envPath, 'utf8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1);
    env[key] = val;
  }
}
// 2) process.env hat Vorrang (CI gewinnt)
for (const [k, v] of Object.entries(process.env)) {
  if (k.startsWith('LEGAL_') && v !== undefined && v !== '') env[k] = v;
}

const g    = (k, d = '') => (env[k] ?? d);
const bool = (k, d)      => { const v = env[k]; return v == null ? d : /^(1|true|yes|on)$/i.test(v); };

const config = {
  name:        g('LEGAL_NAME'),
  street:      g('LEGAL_STREET'),
  zip:         g('LEGAL_ZIP'),
  city:        g('LEGAL_CITY'),
  country:     g('LEGAL_COUNTRY', 'Deutschland'),
  email:       g('LEGAL_EMAIL'),
  phone:       g('LEGAL_PHONE'),
  responsible: g('LEGAL_RESPONSIBLE'),
  ustId:       g('LEGAL_USTID'),
  hosting:     g('LEGAL_HOSTING', 'both'),
  selfHost: {
    name:       g('LEGAL_SELFHOST_NAME'),
    address:    g('LEGAL_SELFHOST_ADDRESS'),
    country:    g('LEGAL_SELFHOST_COUNTRY', 'Deutschland'),
    avContract: bool('LEGAL_SELFHOST_AV', true),
  },
  googleFonts: bool('LEGAL_GOOGLE_FONTS', true),
  cdnjs:       bool('LEGAL_CDNJS', true),
  githubLinks: bool('LEGAL_GITHUB_LINKS', true),
  authority:    g('LEGAL_AUTHORITY', 'Der Hessische Beauftragte für Datenschutz und Informationsfreiheit'),
  authorityUrl: g('LEGAL_AUTHORITY_URL', 'https://datenschutz.hessen.de'),
  lastUpdated:  g('LEGAL_LAST_UPDATED', new Date().toLocaleDateString('de-DE')),
};

const out =
`/* AUTOGENERIERT von scripts/gen-legal-config.mjs – NICHT von Hand bearbeiten.
   Werte stammen aus .env bzw. GitHub-Variables. Erzeugt: ${new Date().toISOString()} */
window.LEGAL_CONFIG = ${JSON.stringify(config, null, 2)};
`;

writeFileSync(join(root, 'legal-config.js'), out, 'utf8');

const missing = ['name', 'email'].filter(k => !config[k]);
if (missing.length) {
  console.warn(`⚠️  legal-config.js erzeugt, aber Pflichtfelder fehlen: ${missing.join(', ')}`);
} else {
  console.log('✅ legal-config.js erfolgreich erzeugt.');
}
