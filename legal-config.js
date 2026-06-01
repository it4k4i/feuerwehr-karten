/* =============================================================================
 *  legal-config.js  –  Datenquelle für Impressum & Datenschutzerklärung
 * =============================================================================
 *
 *  Diese Datei ist die EINZIGE Stelle, an der personenbezogene Daten des
 *  Betreibers stehen. impressum.html und datenschutz.html lesen ausschließlich
 *  window.LEGAL_CONFIG.
 *
 *  Du musst diese Datei NICHT von Hand pflegen. Sie wird normalerweise
 *  automatisch generiert von  scripts/gen-legal-config.mjs :
 *
 *    • Self-Hosting:   Werte aus  .env   (siehe .env.example)
 *    • GitHub Pages:   Werte aus  GitHub  → Settings → Secrets and variables
 *                      → Actions → Variables  (siehe .github/workflows/deploy.yml)
 *
 *  Die hier eingetragenen Werte sind PLATZHALTER und dienen nur als Fallback,
 *  falls die Generierung (noch) nicht gelaufen ist. Solange Name/E-Mail leer
 *  sind, zeigen beide Seiten einen deutlichen Warnhinweis an.
 * ===========================================================================*/

window.LEGAL_CONFIG = {

  /* ── Betreiber / Verantwortlicher i.S.d. § 5 DDG bzw. Art. 4 Nr. 7 DSGVO ── */
  name:        "",            // Vor- und Nachname  (ODER Organisation/Verein)
  street:      "",            // Straße + Hausnummer (ladungsfähig, kein Postfach!)
  zip:         "",            // PLZ
  city:        "",            // Ort
  country:     "Deutschland",
  email:       "",            // Pflichtangabe – muss erreichbar sein
  phone:       "",            // optional, aber empfohlen
  responsible: "",            // Verantwortlich n. § 18 Abs.2 MStV (leer = wie 'name')
  ustId:       "",            // USt-IdNr. – NUR ausfüllen, falls tatsächlich vorhanden

  /* ── Hosting ──────────────────────────────────────────────────────────────
   *  'both'       → GitHub Pages UND Cloudflare (aktuelles Setup laut README)
   *  'github'     → nur GitHub Pages
   *  'cloudflare' → nur Cloudflare (Workers/Pages)
   *  'self'       → eigener Server / eigener Hoster (Felder unten ausfüllen)         */
  hosting: "both",

  selfHost: {                 // nur relevant bei hosting:'self'
    name:    "",              // z.B. "Hetzner Online GmbH"
    address: "",              // z.B. "Industriestr. 25, 91710 Gunzenhausen"
    country: "Deutschland",
    avContract: true          // AV-Vertrag nach Art. 28 DSGVO geschlossen?
  },

  /* ── Tatsächlich eingebundene externe Ressourcen ──────────────────────────
   *  WICHTIG: Die Tools laden derzeit beides extern. Beides überträgt die
   *  Besucher-IP an Dritte (USA) und MUSS deklariert werden – ODER besser:
   *  self-hosten und hier auf false setzen. Siehe Hinweise in datenschutz.html. */
  googleFonts: true,          // fonts.googleapis.com / fonts.gstatic.com
  cdnjs:       true,          // cdnjs.cloudflare.com (jsPDF, JSZip, …)
  githubLinks: true,          // externe Links zu github.com ("Bug melden")

  /* ── Zuständige Aufsichtsbehörde (Default: Hessen) ──────────────────────── */
  authority:    "Der Hessische Beauftragte für Datenschutz und Informationsfreiheit",
  authorityUrl: "https://datenschutz.hessen.de",

  /* ── Stand der Dokumente (wird vom Generator gesetzt) ─────────────────── */
  lastUpdated: ""             // leer = Generator trägt Build-Datum ein
};
