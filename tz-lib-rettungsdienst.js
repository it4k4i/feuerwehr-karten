/**
 * TZ-Bibliothek: Rettungsdienst / Sanitätswesen
 * DIN 13050, DIN EN 1789, Katastrophenschutz-Sanitätsdienst
 * Enthält: Fahrzeuge, Einheiten, Einsatzmittel, MANV-Ergänzungen,
 *          Sanitätsdienst Bundeswehr, Hilfsorganisationen
 */
'use strict';
(function(){
const RD = '#dc2626';   // Rot für RD
const RDS = '#ffffff';
const BRK = '#dc2626';  // Rotes Kreuz
const ASB = '#f97316';  // ASB orange
const MHD = '#1d4ed8';  // Malteser blau
const JUH = '#facc15';  // JUH gelb
const DRK = '#dc2626';  // DRK rot
const GRN = '#15803d';  // Grün

const LIB = {

/* ══════════════════════════════════════════
   RETTUNGSDIENST – FAHRZEUGE (DIN 13050 / DIN EN 1789)
══════════════════════════════════════════ */
rd_rtw:{name:'Rettungswagen (RTW)',ref:'DIN EN 1789 Typ C',cat:'rd_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <line x1="50" y1="22" x2="50" y2="58" stroke="${RD}" stroke-width="4"/>
  <line x1="32" y1="40" x2="68" y2="40" stroke="${RD}" stroke-width="4"/>
  <text x="50" y="70" text-anchor="middle" font-size="9" fill="${RD}" font-family="Arial">RTW</text>
</svg>`},

rd_ktw:{name:'Krankentransportwagen (KTW)',ref:'DIN EN 1789 Typ A2',cat:'rd_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2"/>
  <line x1="50" y1="25" x2="50" y2="55" stroke="${RD}" stroke-width="3"/>
  <line x1="35" y1="40" x2="65" y2="40" stroke="${RD}" stroke-width="3"/>
  <text x="50" y="70" text-anchor="middle" font-size="9" fill="${RD}" font-family="Arial">KTW</text>
</svg>`},

rd_nef:{name:'Notarzteinsatzfahrzeug (NEF)',ref:'DIN EN 1789 Typ C',cat:'rd_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <circle cx="50" cy="40" r="18" fill="none" stroke="${RD}" stroke-width="2.5"/>
  <text x="50" y="45" text-anchor="middle" font-size="13" font-weight="bold" fill="${RD}" font-family="Arial">NEF</text>
</svg>`},

rd_itw:{name:'Intensivtransportwagen (ITW)',ref:'DIN EN 1789 Typ C',cat:'rd_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <line x1="50" y1="22" x2="50" y2="58" stroke="${RD}" stroke-width="4"/>
  <line x1="32" y1="40" x2="68" y2="40" stroke="${RD}" stroke-width="4"/>
  <text x="50" y="70" text-anchor="middle" font-size="9" fill="${RD}" font-family="Arial">ITW</text>
  <text x="12" y="30" text-anchor="start" font-size="7" fill="${RD}" font-family="Arial">IT</text>
</svg>`},

rd_naw:{name:'Notarztwagen (NAW)',ref:'DIN EN 1789',cat:'rd_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <line x1="50" y1="22" x2="50" y2="58" stroke="${RD}" stroke-width="4"/>
  <line x1="32" y1="40" x2="68" y2="40" stroke="${RD}" stroke-width="4"/>
  <text x="50" y="70" text-anchor="middle" font-size="9" fill="${RD}" font-family="Arial">NAW</text>
</svg>`},

rd_elw:{name:'Einsatzleitwagen RD (ELW)',ref:'DIN 13050',cat:'rd_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <circle cx="50" cy="38" r="16" fill="none" stroke="${RD}" stroke-width="2"/>
  <text x="50" y="43" text-anchor="middle" font-size="11" font-weight="bold" fill="${RD}" font-family="Arial">ELW</text>
</svg>`},

rd_rdh:{name:'Rettungshubschrauber (RTH)',ref:'DIN EN 13718',cat:'rd_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <path d="M50 22 L68 48 L50 42 L32 48 Z" fill="${RD}"/>
  <path d="M50 42 L54 62 L50 55 L46 62 Z" fill="${RD}"/>
  <line x1="18" y1="26" x2="82" y2="26" stroke="${RD}" stroke-width="2"/>
  <text x="50" y="73" text-anchor="middle" font-size="9" fill="${RD}" font-family="Arial">RTH</text>
</svg>`},

rd_gw_san:{name:'Gerätewagen Sanität (GW-San)',ref:'DIN 13050',cat:'rd_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2"/>
  <text x="50" y="38" text-anchor="middle" font-size="12" font-weight="bold" fill="${RD}" font-family="Arial">GW</text>
  <text x="50" y="56" text-anchor="middle" font-size="12" fill="${RD}" font-family="Arial">San</text>
</svg>`},

rd_mzf:{name:'Mehrzweckfahrzeug RD (MZF)',ref:'DIN 13050',cat:'rd_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${RD}" font-family="Arial">MZF</text>
</svg>`},

/* ══════════════════════════════════════════
   EINHEITEN RETTUNGSDIENST
══════════════════════════════════════════ */
rd_rettungswache:{name:'Rettungswache',ref:'DIN 13050',cat:'rd_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="22" width="72" height="42" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <polygon points="50,8 86,22 14,22" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <line x1="50" y1="30" x2="50" y2="56" stroke="${RD}" stroke-width="3.5"/>
  <line x1="36" y1="43" x2="64" y2="43" stroke="${RD}" stroke-width="3.5"/>
</svg>`},

rd_leitstellenbereich:{name:'RD-Leitstelle',ref:'DIN 13050',cat:'rd_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <line x1="8" y1="65" x2="92" y2="65" stroke="${RD}" stroke-width="5"/>
  <text x="50" y="44" text-anchor="middle" font-size="12" font-weight="bold" fill="${RD}" font-family="Arial">Leitstelle</text>
</svg>`},

rd_san_gruppe:{name:'Sanitätsgruppe',ref:'DIN 13050',cat:'rd_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="#ffffff" stroke="${RD}" stroke-width="2"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${RD}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${RD}" font-family="Arial">1/8</text>
  <text x="73" y="46" text-anchor="middle" font-size="12" fill="${RD}" font-family="Arial">SanGr</text>
</svg>`},

rd_san_zug:{name:'Sanitätszug',ref:'DIN 13050 / KatS',cat:'rd_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="#ffffff" stroke="${RD}" stroke-width="2"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${RD}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${RD}" font-family="Arial">1/19</text>
  <text x="73" y="44" text-anchor="middle" font-size="12" fill="${RD}" font-family="Arial">SanZg</text>
</svg>`},

rd_arztgruppe:{name:'Arztgruppe',ref:'DIN 13050',cat:'rd_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="#ffffff" stroke="${RD}" stroke-width="2"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${RD}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${RD}" font-family="Arial">Arzt</text>
  <text x="73" y="46" text-anchor="middle" font-size="12" fill="${RD}" font-family="Arial">Gr</text>
</svg>`},

/* ── Hilfsorganisationen ── */
rd_drk:{name:'Deutsches Rotes Kreuz (DRK)',ref:'DIN 13050',cat:'rd_hilfsorg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${DRK}" stroke-width="2.5"/>
  <line x1="50" y1="22" x2="50" y2="58" stroke="${DRK}" stroke-width="6"/>
  <line x1="28" y1="40" x2="72" y2="40" stroke="${DRK}" stroke-width="6"/>
  <text x="50" y="73" text-anchor="middle" font-size="9" fill="${DRK}" font-family="Arial">DRK</text>
</svg>`},

rd_asb:{name:'Arbeiter-Samariter-Bund (ASB)',ref:'DIN 13050',cat:'rd_hilfsorg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${ASB}" stroke="${ASB}" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="18" font-weight="bold" fill="#ffffff" font-family="Arial">ASB</text>
</svg>`},

rd_mhd:{name:'Malteser Hilfsdienst (MHD)',ref:'DIN 13050',cat:'rd_hilfsorg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${MHD}" stroke="${MHD}" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="18" font-weight="bold" fill="#ffffff" font-family="Arial">MHD</text>
</svg>`},

rd_juh:{name:'Johanniter-Unfall-Hilfe (JUH)',ref:'DIN 13050',cat:'rd_hilfsorg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#1e3a8a" stroke="#1e3a8a" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="18" font-weight="bold" fill="#fbbf24" font-family="Arial">JUH</text>
</svg>`},

rd_dlrg:{name:'DLRG – Wasserrettung',ref:'DIN 13050',cat:'rd_hilfsorg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#1e3a8a" stroke="#1e3a8a" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="17" font-weight="bold" fill="#facc15" font-family="Arial">DLRG</text>
</svg>`},

/* ── Sanitätsdienst Bundeswehr ── */
bw_san_staffel:{name:'San-Staffel Bundeswehr',ref:'ZDv 1/15 §Anh.',cat:'rd_bw',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="#4b5563" stroke="#4b5563" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="#ffffff" stroke-width="2"/>
  <text x="27" y="43" text-anchor="middle" font-size="9" fill="#ffffff" font-family="Arial">San</text>
  <text x="73" y="43" text-anchor="middle" font-size="9" fill="#ffffff" font-family="Arial">Stff</text>
  <line x1="50" y1="22" x2="50" y2="58" stroke="#dc2626" stroke-width="2"/>
  <line x1="35" y1="40" x2="65" y2="40" stroke="#dc2626" stroke-width="2"/>
</svg>`},

bw_san_kompanie:{name:'Sanitätskompanie Bw',ref:'ZDv 1/15',cat:'rd_bw',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#4b5563" stroke="#374151" stroke-width="2"/>
  <line x1="50" y1="22" x2="50" y2="58" stroke="#dc2626" stroke-width="4"/>
  <line x1="30" y1="40" x2="70" y2="40" stroke="#dc2626" stroke-width="4"/>
  <text x="50" y="72" text-anchor="middle" font-size="8" fill="#9ca3af" font-family="Arial">SanKp</text>
</svg>`},

bw_lazarett:{name:'Feldlazarett Bundeswehr',ref:'ZDv 1/15',cat:'rd_bw',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="22" width="72" height="42" fill="#f9fafb" stroke="#374151" stroke-width="2"/>
  <polygon points="50,8 86,22 14,22" fill="#f9fafb" stroke="#374151" stroke-width="2"/>
  <line x1="50" y1="30" x2="50" y2="55" stroke="#dc2626" stroke-width="4"/>
  <line x1="36" y1="42" x2="64" y2="42" stroke="#dc2626" stroke-width="4"/>
  <text x="50" y="70" text-anchor="middle" font-size="7" fill="#374151" font-family="Arial">Lazarett</text>
</svg>`},

/* ── Stellen & Räume ── */
rd_erste_hilfe_stelle:{name:'Erste-Hilfe-Stelle',ref:'DIN 13050',cat:'rd_stellen',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2"/>
  <text x="50" y="35" text-anchor="middle" font-size="10" fill="${RD}" font-family="Arial">Erste</text>
  <text x="50" y="50" text-anchor="middle" font-size="10" fill="${RD}" font-family="Arial">Hilfe</text>
</svg>`},

rd_arztposten:{name:'Arztposten',ref:'DIN 13050',cat:'rd_stellen',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="${RD}" stroke-width="2"/>
  <circle cx="50" cy="38" r="18" fill="none" stroke="${RD}" stroke-width="2"/>
  <text x="50" y="44" text-anchor="middle" font-size="14" font-weight="bold" fill="${RD}" font-family="Arial">NA</text>
</svg>`},

rd_krankensammelstelle:{name:'Kranken-Sammelstelle',ref:'DIN 13050 / KatS',cat:'rd_stellen',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 92,65 8,65" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <line x1="50" y1="22" x2="50" y2="53" stroke="${RD}" stroke-width="3"/>
  <line x1="36" y1="38" x2="64" y2="38" stroke="${RD}" stroke-width="3"/>
</svg>`},

rd_notaufnahme:{name:'Notaufnahme / Krankenhaus',ref:'DIN 13050',cat:'rd_stellen',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="28" width="72" height="40" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <polygon points="50,8 86,28 14,28" fill="#ffffff" stroke="${RD}" stroke-width="2.5"/>
  <line x1="50" y1="35" x2="50" y2="60" stroke="${RD}" stroke-width="4"/>
  <line x1="36" y1="47" x2="64" y2="47" stroke="${RD}" stroke-width="4"/>
</svg>`},

rd_sanitaetscamp:{name:'Sanitätslager',ref:'DIN 13050 / KatS',cat:'rd_stellen',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${RD}" stroke-width="2" stroke-dasharray="6,3"/>
  <line x1="50" y1="25" x2="50" y2="57" stroke="${RD}" stroke-width="3"/>
  <line x1="34" y1="41" x2="66" y2="41" stroke="${RD}" stroke-width="3"/>
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'rd_fz',       label:'RD – Fahrzeuge (DIN EN 1789)',   color:'#fb7185', official:true},
  {id:'rd_einh',     label:'RD – Einheiten / Züge',          color:'#fb7185', official:true},
  {id:'rd_hilfsorg', label:'RD – Hilfsorganisationen',       color:'#fb7185', official:true},
  {id:'rd_stellen',  label:'RD – Stellen & Räume',           color:'#fb7185', official:true},
  {id:'rd_bw',       label:'RD – Sanitätsdienst Bundeswehr', color:'#9ca3af', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });

console.log(`[TZ-Lib] Rettungsdienst geladen: ${Object.keys(LIB).length} Zeichen`);
})();
