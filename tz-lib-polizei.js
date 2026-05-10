/**
 * TZ-Bibliothek: PDV 100 – Polizei-Dienstvorschrift 100
 * Taktische Zeichen der Polizei (Bund und Länder)
 * Enthält: Führungszeichen, Einsatzkräfte, Fahrzeuge, Sperren,
 *          Lage-/Schadenszeichen, Beweissicherung, Spezialeinheiten
 */
'use strict';
(function(){
const C = window.TZ_COLORS || {
  FW_F:'#dc2626', FW_S:'#ffffff',
  POL_F:'#15803d', POL_S:'#ffffff',
  POL_F2:'#166534', POL_S2:'#ffffff',
};
const P = C.POL_F, PS = C.POL_S;

const LIB = {

/* ══════════════════════════════════════════
   PDV 100 – GRUNDZEICHEN POLIZEI
══════════════════════════════════════════ */

pol_einsatzabschnitt:{name:'Einsatzabschnitt Pol.',ref:'PDV 100 §2',cat:'pol_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="2"/>
  <line x1="8" y1="40" x2="92" y2="40" stroke="${PS}" stroke-width="2"/>
  <text x="50" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="${PS}" font-family="Arial">Pol-EA</text>
  <text x="50" y="57" text-anchor="middle" font-size="10" fill="${PS}" font-family="Arial">__</text>
</svg>`},

pol_fuehrungsstelle:{name:'Polizeiliche Führungsstelle',ref:'PDV 100 §3',cat:'pol_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="2"/>
  <line x1="8" y1="65" x2="92" y2="65" stroke="${PS}" stroke-width="5"/>
  <text x="50" y="44" text-anchor="middle" font-size="14" font-weight="bold" fill="${PS}" font-family="Arial">Pol-FüSt</text>
</svg>`},

pol_oertliche_einsatzleitung:{name:'Örtliche Einsatzleitung Pol.',ref:'PDV 100 §3',cat:'pol_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="2"/>
  <text x="50" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="${PS}" font-family="Arial">ÖEL</text>
  <text x="50" y="57" text-anchor="middle" font-size="10" fill="${PS}" font-family="Arial">Polizei</text>
</svg>`},

pol_einsatzleitwagen:{name:'Einsatzleitwagen Pol. (ELW)',ref:'PDV 100 §4',cat:'pol_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <circle cx="50" cy="40" r="16" fill="none" stroke="${PS}" stroke-width="2"/>
  <text x="50" y="45" text-anchor="middle" font-size="11" font-weight="bold" fill="${PS}" font-family="Arial">ELW</text>
</svg>`},

pol_streifenwagen:{name:'Streifenwagen (SWG)',ref:'PDV 100 §4',cat:'pol_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="18" font-weight="bold" fill="${PS}" font-family="Arial">SWG</text>
</svg>`},

pol_funkstreifenwagen:{name:'Funkstreifenwagen (FuStW)',ref:'PDV 100 §4',cat:'pol_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <text x="50" y="44" text-anchor="middle" font-size="15" font-weight="bold" fill="${PS}" font-family="Arial">FuStW</text>
</svg>`},

pol_gefangenentransportwagen:{name:'Gefangenentransportwagen (GefKw)',ref:'PDV 100 §4',cat:'pol_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <text x="50" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="${PS}" font-family="Arial">Gef</text>
  <text x="50" y="57" text-anchor="middle" font-size="11" fill="${PS}" font-family="Arial">KW</text>
</svg>`},

pol_wasserwerfer:{name:'Wasserwerfer (WaWe)',ref:'PDV 100 §4',cat:'pol_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <path d="M25 42 Q40 28 60 36 Q74 42 78 30" fill="none" stroke="${PS}" stroke-width="2.5"/>
  <text x="50" y="62" text-anchor="middle" font-size="12" font-weight="bold" fill="${PS}" font-family="Arial">WaWe</text>
</svg>`},

pol_hubschrauber:{name:'Polizeihubschrauber',ref:'PDV 100 §4',cat:'pol_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <path d="M50 25 L64 50 L50 44 L36 50 Z" fill="${PS}"/>
  <path d="M50 44 L54 65 L50 58 L46 65 Z" fill="${PS}"/>
  <line x1="20" y1="28" x2="80" y2="28" stroke="${PS}" stroke-width="2"/>
</svg>`},

pol_motorrad:{name:'Polizeikraftrad',ref:'PDV 100 §4',cat:'pol_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <circle cx="35" cy="52" r="10" fill="none" stroke="${PS}" stroke-width="2"/>
  <circle cx="65" cy="52" r="10" fill="none" stroke="${PS}" stroke-width="2"/>
  <line x1="35" y1="42" x2="50" y2="28" stroke="${PS}" stroke-width="2"/>
  <line x1="50" y1="28" x2="65" y2="42" stroke="${PS}" stroke-width="2"/>
</svg>`},

/* ── Bereitschaftspolizei / Hundertschaft ── */
pol_hundertschaft:{name:'Hundertschaft (100er)',ref:'PDV 100 §5',cat:'pol_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${PS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${PS}" font-family="Arial">1/99</text>
  <text x="73" y="46" text-anchor="middle" font-size="11" fill="${PS}" font-family="Arial">100</text>
</svg>`},

pol_zug_bereit:{name:'Zug Bereitschaftspolizei',ref:'PDV 100 §5',cat:'pol_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${PS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${PS}" font-family="Arial">1/29</text>
  <text x="73" y="46" text-anchor="middle" font-size="11" fill="${PS}" font-family="Arial">BPol</text>
</svg>`},

pol_gruppe:{name:'Polizei-Gruppe',ref:'PDV 100 §5',cat:'pol_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${PS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${PS}" font-family="Arial">1/10</text>
  <text x="73" y="46" text-anchor="middle" font-size="11" fill="${PS}" font-family="Arial">Gr</text>
</svg>`},

pol_spezialkraefte:{name:'Spezialeinheit (SEK/MEK)',ref:'PDV 100 §5',cat:'pol_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <polygon points="50,22 64,38 58,55 42,55 36,38" fill="none" stroke="${PS}" stroke-width="2"/>
  <text x="50" y="44" text-anchor="middle" font-size="12" font-weight="bold" fill="${PS}" font-family="Arial">SEK</text>
</svg>`},

pol_vhs:{name:'Verkehrs-/Hilfsdienst',ref:'PDV 100',cat:'pol_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <text x="50" y="44" text-anchor="middle" font-size="15" font-weight="bold" fill="${PS}" font-family="Arial">VHS</text>
</svg>`},

pol_kriminalpolizei:{name:'Kriminalpolizei (KPol)',ref:'PDV 100',cat:'pol_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <text x="50" y="44" text-anchor="middle" font-size="15" font-weight="bold" fill="${PS}" font-family="Arial">KPol</text>
</svg>`},

/* ── Sperren & Maßnahmen ── */
pol_sperre:{name:'Polizeisperre',ref:'PDV 100 §6',cat:'pol_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="40" x2="90" y2="40" stroke="${P}" stroke-width="5"/>
  <line x1="20" y1="28" x2="20" y2="52" stroke="${P}" stroke-width="4"/>
  <line x1="80" y1="28" x2="80" y2="52" stroke="${P}" stroke-width="4"/>
</svg>`},

pol_kontrollstelle:{name:'Kontrollstelle',ref:'PDV 100 §6',cat:'pol_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${P}" stroke-width="2.5"/>
  <line x1="8" y1="40" x2="92" y2="40" stroke="${P}" stroke-width="2"/>
  <text x="50" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="${P}" font-family="Arial">Kont.</text>
  <text x="50" y="58" text-anchor="middle" font-size="10" fill="${P}" font-family="Arial">Stelle</text>
</svg>`},

pol_festnahmebereich:{name:'Festnahmebereich',ref:'PDV 100 §6',cat:'pol_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="rgba(21,128,61,0.12)" stroke="${P}" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="50" y="46" text-anchor="middle" font-size="13" font-weight="bold" fill="${P}" font-family="Arial">Festn.</text>
</svg>`},

pol_absperrung:{name:'Polizeiliche Absperrung',ref:'PDV 100 §6',cat:'pol_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="22" x2="90" y2="22" stroke="${P}" stroke-width="3"/>
  <line x1="10" y1="58" x2="90" y2="58" stroke="${P}" stroke-width="3"/>
  <line x1="25" y1="22" x2="10" y2="58" stroke="${P}" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="50" y1="22" x2="35" y2="58" stroke="${P}" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="75" y1="22" x2="60" y2="58" stroke="${P}" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="100" y1="22" x2="85" y2="58" stroke="${P}" stroke-width="2" stroke-dasharray="4,3"/>
</svg>`},

pol_schutzbereich:{name:'Schutzbereich',ref:'PDV 100 §6',cat:'pol_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 8 L88 22 L88 48 Q88 68 50 76 Q12 68 12 48 L12 22 Z" fill="rgba(21,128,61,0.12)" stroke="${P}" stroke-width="2.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="13" font-weight="bold" fill="${P}" font-family="Arial">Schutz</text>
</svg>`},

pol_gefahrengebiet:{name:'Polizeiliches Gefahrengebiet',ref:'PDV 100 §6',cat:'pol_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 92,65 8,65" fill="rgba(21,128,61,0.1)" stroke="${P}" stroke-width="2.5"/>
  <text x="50" y="55" text-anchor="middle" font-size="22" font-weight="bold" fill="${P}" font-family="Arial">!</text>
</svg>`},

pol_evakuierungsraum:{name:'Evakuierungsraum',ref:'PDV 100 §6',cat:'pol_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${P}" stroke-width="2" stroke-dasharray="8,4"/>
  <line x1="20" y1="40" x2="55" y2="40" stroke="${P}" stroke-width="3"/>
  <polyline points="45,28 60,40 45,52" fill="none" stroke="${P}" stroke-width="3"/>
  <line x1="70" y1="26" x2="70" y2="54" stroke="${P}" stroke-width="3"/>
</svg>`},

/* ── Tatort / Ermittlung ── */
pol_tatort:{name:'Tatort',ref:'PDV 100 §7',cat:'pol_ermittl',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${P}" stroke-width="2.5"/>
  <line x1="10" y1="17" x2="90" y2="63" stroke="${P}" stroke-width="2"/>
  <line x1="10" y1="63" x2="90" y2="17" stroke="${P}" stroke-width="2"/>
  <text x="50" y="72" text-anchor="middle" font-size="9" fill="${P}" font-family="Arial">TATORT</text>
</svg>`},

pol_fundort:{name:'Fundort (Beweismittel)',ref:'PDV 100 §7',cat:'pol_ermittl',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="40" r="30" fill="none" stroke="${P}" stroke-width="2.5"/>
  <circle cx="50" cy="40" r="4" fill="${P}"/>
  <line x1="50" y1="10" x2="50" y2="20" stroke="${P}" stroke-width="2"/>
  <line x1="50" y1="60" x2="50" y2="70" stroke="${P}" stroke-width="2"/>
  <line x1="20" y1="40" x2="30" y2="40" stroke="${P}" stroke-width="2"/>
  <line x1="70" y1="40" x2="80" y2="40" stroke="${P}" stroke-width="2"/>
</svg>`},

pol_spurensicherung:{name:'Spurensicherung aktiv',ref:'PDV 100 §7',cat:'pol_ermittl',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${P}" stroke-width="2.5"/>
  <circle cx="35" cy="35" r="8" fill="none" stroke="${P}" stroke-width="2"/>
  <line x1="40" y1="40" x2="70" y2="60" stroke="${P}" stroke-width="2"/>
  <circle cx="38" cy="43" r="3" fill="${P}"/>
  <text x="50" y="70" text-anchor="middle" font-size="8" fill="${P}" font-family="Arial">Spur</text>
</svg>`},

pol_beobachtungsstelle:{name:'Beobachtungsstelle',ref:'PDV 100 §7',cat:'pol_ermittl',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${P}" stroke-width="2.5"/>
  <circle cx="50" cy="38" rx="16" ry="10" stroke="${P}" stroke-width="2" fill="none"/>
  <circle cx="50" cy="38" r="5" fill="${P}"/>
  <line x1="20" y1="62" x2="50" y2="38" stroke="${P}" stroke-width="1.5" stroke-dasharray="4,2"/>
</svg>`},

/* ── Führungsmittel ── */
pol_erkundungstruppp:{name:'Erkundungstrupp',ref:'PDV 100',cat:'pol_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${PS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="11" fill="${PS}" font-family="Arial">Erkd</text>
  <text x="73" y="46" text-anchor="middle" font-size="10" fill="${PS}" font-family="Arial">Tr</text>
</svg>`},

pol_schutzstaffel:{name:'Schutzstaffel',ref:'PDV 100',cat:'pol_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${PS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="11" fill="${PS}" font-family="Arial">Sch</text>
  <text x="73" y="46" text-anchor="middle" font-size="10" fill="${PS}" font-family="Arial">Stff</text>
</svg>`},

pol_bundespolizei:{name:'Bundespolizei (BPol)',ref:'PDV 100',cat:'pol_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#1e3a8a" stroke="#1e3a8a" stroke-width="2"/>
  <text x="50" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff" font-family="Arial">BPOL</text>
  <text x="50" y="56" text-anchor="middle" font-size="10" fill="#ffffff" font-family="Arial">Bundespolizei</text>
</svg>`},

pol_zoll:{name:'Zoll',ref:'PDV 100',cat:'pol_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#78350f" stroke="#78350f" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="18" font-weight="bold" fill="#fef3c7" font-family="Arial">Zoll</text>
</svg>`},

pol_thw_pol_koordination:{name:'THW-Polizei-Koordination',ref:'PDV 100 / gemeinsam',cat:'pol_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="38" height="50" fill="#1d4ed8" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="54" y="15" width="38" height="50" fill="${P}" stroke="${P}" stroke-width="1.5"/>
  <line x1="46" y1="15" x2="54" y2="65" stroke="#ffffff" stroke-width="1"/>
  <text x="26" y="46" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff" font-family="Arial">THW</text>
  <text x="74" y="46" text-anchor="middle" font-size="10" font-weight="bold" fill="${PS}" font-family="Arial">POL</text>
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'pol_fuehr',   label:'PDV 100 – Polizei Führung',    color:'#4ade80', official:true},
  {id:'pol_fz',      label:'PDV 100 – Polizei Fahrzeuge',   color:'#4ade80', official:true},
  {id:'pol_einh',    label:'PDV 100 – Polizei Einheiten',   color:'#4ade80', official:true},
  {id:'pol_massn',   label:'PDV 100 – Polizei Maßnahmen',   color:'#4ade80', official:true},
  {id:'pol_ermittl', label:'PDV 100 – Tatort / Ermittlung', color:'#4ade80', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });

console.log(`[TZ-Lib] PDV 100 Polizei geladen: ${Object.keys(LIB).length} Zeichen`);
})();
