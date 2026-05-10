/**
 * TZ-Bibliothek: Katastrophenschutz / Bevölkerungsschutz
 * Ergänzende Zeichen für den Zivil- und Katastrophenschutz (KatS)
 * Enthält: BBK-Zeichen, Zivilschutz, Bevölkerungsschutz,
 *          gemeinsame Einsatzstäbe, Warnsystem, ABC-Schutz erweitert
 */
'use strict';
(function(){
const K = '#7c3aed';   // Violett für KatS
const KS = '#ffffff';
const BBK = '#1d4ed8'; // BBK-Blau
const ZS = '#4b5563';  // Zivilschutz grau

const LIB = {

/* ══════════════════════════════════════════
   BEVÖLKERUNGSSCHUTZ / KATASTROPHENSCHUTZ
══════════════════════════════════════════ */
kats_katastrophenschutzstab:{name:'Katastrophenschutzstab (KatS-Stab)',ref:'KatS / BBK',cat:'kats_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${K}" stroke="${K}" stroke-width="2"/>
  <line x1="8" y1="65" x2="92" y2="65" stroke="${KS}" stroke-width="5"/>
  <text x="50" y="36" text-anchor="middle" font-size="11" font-weight="bold" fill="${KS}" font-family="Arial">KatS</text>
  <text x="50" y="55" text-anchor="middle" font-size="10" fill="${KS}" font-family="Arial">Stab</text>
</svg>`},

kats_gemeinsamer_stab:{name:'Gemeinsamer Stab (BOS)',ref:'KatS §3',cat:'kats_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${K}" stroke="${K}" stroke-width="2"/>
  <text x="50" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="${KS}" font-family="Arial">Gem.</text>
  <text x="50" y="55" text-anchor="middle" font-size="11" fill="${KS}" font-family="Arial">Stab</text>
</svg>`},

kats_krisenstab:{name:'Krisenstab',ref:'KatS / BBK',cat:'kats_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${K}" stroke="${K}" stroke-width="2"/>
  <line x1="8" y1="65" x2="92" y2="65" stroke="${KS}" stroke-width="5"/>
  <text x="50" y="44" text-anchor="middle" font-size="14" font-weight="bold" fill="${KS}" font-family="Arial">KriSt</text>
</svg>`},

kats_fuehrungsgruppe:{name:'Führungsgruppe KatS',ref:'KatS §4',cat:'kats_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${K}" stroke="${K}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${KS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${KS}" font-family="Arial">FüGr</text>
  <text x="73" y="46" text-anchor="middle" font-size="10" fill="${KS}" font-family="Arial">KatS</text>
</svg>`},

/* ── Warnung & Information ── */
kats_warnung:{name:'Warnung der Bevölkerung',ref:'BBK / Sirenenalarm',cat:'kats_warn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,6 94,72 6,72" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
  <text x="50" y="58" text-anchor="middle" font-size="30" font-weight="bold" fill="#ca8a04" font-family="Arial">!</text>
</svg>`},

kats_entwarnung:{name:'Entwarnung',ref:'BBK',cat:'kats_warn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="40" r="32" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
  <polyline points="32,40 44,52 68,28" fill="none" stroke="#16a34a" stroke-width="4"/>
</svg>`},

kats_strahlenwarnung:{name:'Strahlenwarnung (Atom/Radio)',ref:'KatS ABC',cat:'kats_warn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="40" r="34" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
  <!-- Blade 1: top (−90°) -->
  <path d="M 45,31.34 A 10,10 0 0,1 55,31.34 L 64,15.75 A 28,28 0 0,0 36,15.75 Z" fill="#ca8a04"/>
  <!-- Blade 2: lower-right (30°) -->
  <path d="M 60,40 A 10,10 0 0,1 55,48.66 L 64,64.25 A 28,28 0 0,0 78,40 Z" fill="#ca8a04"/>
  <!-- Blade 3: lower-left (150°) -->
  <path d="M 45,48.66 A 10,10 0 0,1 40,40 L 22,40 A 28,28 0 0,0 36,64.25 Z" fill="#ca8a04"/>
  <!-- Center circle -->
  <circle cx="50" cy="40" r="7" fill="#ca8a04"/>
</svg>`},

kats_chemikalienwarnung:{name:'Chemikalien-Warnung',ref:'KatS ABC / Gefahrgut',cat:'kats_warn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,6 94,72 6,72" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
  <text x="50" y="60" text-anchor="middle" font-size="18" font-weight="bold" fill="#ca8a04" font-family="Arial">C</text>
</svg>`},

/* ── Aufnahme & Unterbringung ── */
kats_notunterkunft:{name:'Notunterkunft / Notlager',ref:'KatS §5',cat:'kats_versorgg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="32" width="72" height="38" fill="none" stroke="${K}" stroke-width="2.5"/>
  <polygon points="50,8 86,32 14,32" fill="none" stroke="${K}" stroke-width="2.5"/>
  <text x="50" y="56" text-anchor="middle" font-size="12" font-weight="bold" fill="${K}" font-family="Arial">NL</text>
</svg>`},

kats_aufnahmelager:{name:'Aufnahmelager / Evakuierungslager',ref:'KatS §5',cat:'kats_versorgg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${K}" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="50" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="${K}" font-family="Arial">Aufn.</text>
  <text x="50" y="55" text-anchor="middle" font-size="11" fill="${K}" font-family="Arial">Lager</text>
</svg>`},

kats_notversorgungspunkt:{name:'Notversorgungspunkt',ref:'KatS §5',cat:'kats_versorgg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="40" r="32" fill="none" stroke="${K}" stroke-width="2.5"/>
  <text x="50" y="45" text-anchor="middle" font-size="14" font-weight="bold" fill="${K}" font-family="Arial">NVP</text>
</svg>`},

kats_trinkwassernotversorgung:{name:'Trinkwasser-Notversorgung',ref:'KatS §5',cat:'kats_versorgg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="40" r="32" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <path d="M50 18 Q56 28 58 36 Q62 48 50 54 Q38 48 42 36 Q44 28 50 18Z" fill="#1d4ed8"/>
</svg>`},

kats_notstromaggregat:{name:'Notstromaggregat',ref:'KatS §5',cat:'kats_versorgg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="#ca8a04" stroke-width="2.5"/>
  <text x="50" y="38" text-anchor="middle" font-size="20" font-weight="bold" fill="#ca8a04" font-family="Arial">⚡</text>
  <text x="50" y="58" text-anchor="middle" font-size="10" fill="#ca8a04" font-family="Arial">Notstrom</text>
</svg>`},

/* ── ABC-Schutz (erweitert) ── */
kats_dekontaminationsstelle:{name:'Dekontaminationsstelle (Dekon)',ref:'KatS ABC / FwDV',cat:'kats_abc',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="50" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#7c3aed" font-family="Arial">Dekon</text>
  <text x="50" y="57" text-anchor="middle" font-size="11" fill="#7c3aed" font-family="Arial">Stelle</text>
</svg>`},

kats_kontaminationsgrenze:{name:'Kontaminationsgrenze',ref:'KatS ABC',cat:'kats_abc',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="40" x2="90" y2="40" stroke="#7c3aed" stroke-width="4"/>
  <line x1="20" y1="28" x2="20" y2="52" stroke="#7c3aed" stroke-width="3"/>
  <line x1="40" y1="28" x2="40" y2="52" stroke="#7c3aed" stroke-width="3"/>
  <line x1="60" y1="28" x2="60" y2="52" stroke="#7c3aed" stroke-width="3"/>
  <line x1="80" y1="28" x2="80" y2="52" stroke="#7c3aed" stroke-width="3"/>
  <text x="50" y="68" text-anchor="middle" font-size="8" fill="#7c3aed" font-family="Arial">Kont.Grenze</text>
</svg>`},

kats_abc_lage:{name:'ABC-Lage / CBRN-Einsatz',ref:'KatS ABC / FwDV',cat:'kats_abc',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,6 94,72 6,72" fill="rgba(124,58,237,0.1)" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="50" y="58" text-anchor="middle" font-size="14" font-weight="bold" fill="#7c3aed" font-family="Arial">ABC</text>
</svg>`},

kats_messtrupp_abc:{name:'Messtrupp ABC/CBRN',ref:'KatS ABC',cat:'kats_abc',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="50" cy="38" r="16" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <line x1="50" y1="22" x2="50" y2="30" stroke="#7c3aed" stroke-width="2"/>
  <line x1="50" y1="38" x2="62" y2="26" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="50" cy="38" r="3" fill="#7c3aed"/>
  <text x="50" y="60" text-anchor="middle" font-size="8" fill="#7c3aed" font-family="Arial">CBRN</text>
</svg>`},

/* ── Zivilschutz / BBK ── */
kats_zivilschutz:{name:'Zivilschutz (ZS)',ref:'ZSKG / BBK',cat:'kats_zs',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${ZS}" stroke="${ZS}" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="20" font-weight="bold" fill="#ffffff" font-family="Arial">ZS</text>
</svg>`},

kats_bbk_einsatz:{name:'BBK / Bundesbehörde',ref:'BBK',cat:'kats_zs',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${BBK}" stroke="${BBK}" stroke-width="2"/>
  <text x="50" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff" font-family="Arial">BBK</text>
  <text x="50" y="56" text-anchor="middle" font-size="10" fill="#93c5fd" font-family="Arial">Bundesbehörde</text>
</svg>`},

kats_bund_land_koordination:{name:'Bund-Land Koordination',ref:'BBK §6',cat:'kats_zs',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="40" height="50" fill="${BBK}" stroke="${BBK}" stroke-width="1.5"/>
  <rect x="52" y="15" width="40" height="50" fill="#374151" stroke="#374151" stroke-width="1.5"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff" font-family="Arial">Bund</text>
  <text x="73" y="46" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff" font-family="Arial">Land</text>
</svg>`},

kats_katastrophengebiet:{name:'Katastrophengebiet',ref:'KatS §2',cat:'kats_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="rgba(124,58,237,0.08)" stroke="${K}" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="50" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="${K}" font-family="Arial">KatS</text>
  <text x="50" y="57" text-anchor="middle" font-size="11" fill="${K}" font-family="Arial">Gebiet</text>
</svg>`},

kats_schadensschwerpunkt:{name:'Schadensschwerpunkt',ref:'KatS',cat:'kats_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,6 94,40 50,74 6,40" fill="rgba(124,58,237,0.15)" stroke="${K}" stroke-width="2.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="20" font-weight="bold" fill="${K}" font-family="Arial">!</text>
</svg>`},

kats_hilfeleistungszug:{name:'Hilfeleistungszug (HLZ)',ref:'KatS',cat:'kats_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${K}" stroke="${K}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${KS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${KS}" font-family="Arial">1/19</text>
  <text x="73" y="44" text-anchor="middle" font-size="12" fill="${KS}" font-family="Arial">HLZ</text>
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'kats_fuehr',   label:'KatS – Führung / Stäbe',           color:'#c084fc', official:true},
  {id:'kats_warn',    label:'KatS – Warnung / Alarm',            color:'#fbbf24', official:true},
  {id:'kats_versorgg',label:'KatS – Versorgung / Unterbringung', color:'#c084fc', official:true},
  {id:'kats_abc',     label:'KatS – ABC / CBRN Schutz',          color:'#c084fc', official:true},
  {id:'kats_zs',      label:'KatS – Zivilschutz / BBK',          color:'#60a5fa', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });

console.log(`[TZ-Lib] Katastrophenschutz geladen: ${Object.keys(LIB).length} Zeichen`);
})();
