/**
 * TZ-Bibliothek: THW – Technisches Hilfswerk
 * Taktische Zeichen nach THW DV 1-100 / DV 1-102
 * Enthält: Alle Fachgruppen, Führungszeichen, Fahrzeuge, Einheiten
 */
'use strict';
(function(){
const C = window.TZ_COLORS || { THW_F:'#1d4ed8', THW_S:'#ffffff' };
const T = C.THW_F, TS = C.THW_S;

const LIB = {

/* ══════════════════════════════════════════
   THW – FÜHRUNGSZEICHEN
══════════════════════════════════════════ */
thw_ortsverband:{name:'THW Ortsverband (OV)',ref:'THW DV 1-100',cat:'thw_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="2"/>
  <text x="50" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="${TS}" font-family="Arial">THW</text>
  <text x="50" y="57" text-anchor="middle" font-size="11" fill="${TS}" font-family="Arial">OV __</text>
</svg>`},

thw_technischer_zug:{name:'Technischer Zug (TZ)',ref:'THW DV 1-100',cat:'thw_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${TS}" font-family="Arial">1/19</text>
  <text x="73" y="46" text-anchor="middle" font-size="12" fill="${TS}" font-family="Arial">TZ</text>
</svg>`},

thw_bergungsgruppe:{name:'Bergungsgruppe (B)',ref:'THW DV 1-100 §3',cat:'thw_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${TS}" font-family="Arial">1/8</text>
  <text x="73" y="46" text-anchor="middle" font-size="13" fill="${TS}" font-family="Arial">B</text>
</svg>`},

thw_zugfuehrer:{name:'THW Zugführer',ref:'THW DV 1-100',cat:'thw_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="2"/>
  <line x1="8" y1="65" x2="92" y2="65" stroke="${TS}" stroke-width="5"/>
  <text x="50" y="44" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">ZgFü</text>
</svg>`},

thw_fuehrungsstelle:{name:'THW Führungsstelle',ref:'THW DV 1-100',cat:'thw_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="2"/>
  <line x1="8" y1="65" x2="92" y2="65" stroke="${TS}" stroke-width="5"/>
  <text x="50" y="44" text-anchor="middle" font-size="12" font-weight="bold" fill="${TS}" font-family="Arial">THW-FüSt</text>
</svg>`},

/* ── Fachgruppen ── */
thw_fg_bergung:{name:'FG Bergung (B)',ref:'THW DV 1-100 §4.1',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${TS}" font-family="Arial">B</text>
</svg>`},

thw_fg_elektroversorgung:{name:'FG Elektroversorgung (E)',ref:'THW DV 1-100 §4.2',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${TS}" font-family="Arial">E</text>
</svg>`},

thw_fg_fachgruppe_k:{name:'FG Führung/Kommunikation (FK)',ref:'THW DV 1-100 §4.3',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FK</text>
</svg>`},

thw_fg_infrastruktur:{name:'FG Infrastruktur (I)',ref:'THW DV 1-100 §4.4',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${TS}" font-family="Arial">I</text>
</svg>`},

thw_fg_iuk:{name:'FG Information u. Kommunikation (IuK)',ref:'THW DV 1-100 §4.5',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="44" text-anchor="middle" font-size="11" font-weight="bold" fill="${TS}" font-family="Arial">IuK</text>
</svg>`},

thw_fg_logistik:{name:'FG Logistik (Log)',ref:'THW DV 1-100 §4.6',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="44" text-anchor="middle" font-size="12" font-weight="bold" fill="${TS}" font-family="Arial">Log</text>
</svg>`},

thw_fg_notversorgung:{name:'FG Notversorgung u. -instandsetzung (N)',ref:'THW DV 1-100 §4.7',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${TS}" font-family="Arial">N</text>
</svg>`},

thw_fg_ortung:{name:'FG Ortung (O)',ref:'THW DV 1-100 §4.8',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${TS}" font-family="Arial">O</text>
</svg>`},

thw_fg_oel:{name:'FG Ölschadenbekämpfung (ÖL)',ref:'THW DV 1-100 §4.9',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="${TS}" font-family="Arial">ÖL</text>
</svg>`},

thw_fg_raeumen:{name:'FG Räumen (R)',ref:'THW DV 1-100 §4.10',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${TS}" font-family="Arial">R</text>
</svg>`},

thw_fg_sprengen:{name:'FG Sprengen (Spr)',ref:'THW DV 1-100 §4.11',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="44" text-anchor="middle" font-size="12" font-weight="bold" fill="${TS}" font-family="Arial">Spr</text>
</svg>`},

thw_fg_schwere_bergung:{name:'FG Schwere Bergung (SB)',ref:'THW DV 1-100',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="${TS}" font-family="Arial">SB</text>
</svg>`},

thw_fg_trinkwasser:{name:'FG Trinkwasserversorgung (TW)',ref:'THW DV 1-100 §4.12',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="${TS}" font-family="Arial">TW</text>
</svg>`},

thw_fg_wassergefahren:{name:'FG Wassergefahren (W)',ref:'THW DV 1-100 §4.13',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${TS}" font-family="Arial">W</text>
</svg>`},

thw_fg_wasserversorgung:{name:'FG Wasserversorgung (WP)',ref:'THW DV 1-100 §4.14',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="${TS}" font-family="Arial">WP</text>
</svg>`},

thw_fg_sp:{name:'FG Schwere Pumpen (SP)',ref:'THW DV 1-100',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="${TS}" font-family="Arial">SP</text>
</svg>`},

thw_fg_abcschutz:{name:'FG ABC-Schutz',ref:'THW DV 1-100',cat:'thw_fg',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <line x1="50" y1="15" x2="50" y2="65" stroke="${TS}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">FG</text>
  <text x="73" y="44" text-anchor="middle" font-size="11" font-weight="bold" fill="${TS}" font-family="Arial">ABC</text>
</svg>`},

/* ── THW Fahrzeuge ── */
thw_mlw:{name:'Mannschaftslastwagen (MLW)',ref:'THW DV 1-100',cat:'thw_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="17" font-weight="bold" fill="${TS}" font-family="Arial">MLW</text>
</svg>`},

thw_geruestwagen:{name:'Gerätekraftwagen (GKW)',ref:'THW DV 1-100',cat:'thw_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="17" font-weight="bold" fill="${TS}" font-family="Arial">GKW</text>
</svg>`},

thw_lkw:{name:'LKW Beleuchter (BelKw)',ref:'THW DV 1-100',cat:'thw_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <text x="50" y="44" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">BelKw</text>
</svg>`},

thw_kran:{name:'Kranwagen (KrKW)',ref:'THW DV 1-100',cat:'thw_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${TS}" font-family="Arial">KrKW</text>
</svg>`},

thw_boot:{name:'Schnelles Einsatzboot (SEB)',ref:'THW DV 1-100',cat:'thw_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <path d="M15 55 Q50 30 85 55 L80 65 Q50 72 20 65 Z" fill="${TS}" opacity="0.9"/>
  <text x="50" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="${TS}" font-family="Arial">SEB</text>
</svg>`},

thw_anhanger:{name:'Anhänger THW',ref:'THW DV 1-100',cat:'thw_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <text x="50" y="44" text-anchor="middle" font-size="15" font-weight="bold" fill="${TS}" font-family="Arial">Anh.</text>
</svg>`},

thw_elw:{name:'Einsatzleitwagen THW (ELW)',ref:'THW DV 1-100',cat:'thw_fz',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <circle cx="50" cy="38" r="14" fill="none" stroke="${TS}" stroke-width="2"/>
  <text x="50" y="43" text-anchor="middle" font-size="11" font-weight="bold" fill="${TS}" font-family="Arial">ELW</text>
</svg>`},

/* ── THW Einsatzzeichen ── */
thw_einsatzstelle:{name:'THW Einsatzstelle',ref:'THW DV 1-102',cat:'thw_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,6 94,40 50,74 6,40" fill="${T}" stroke="${T}" stroke-width="1.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${TS}" font-family="Arial">THW</text>
</svg>`},

thw_bereitstellungsraum:{name:'THW Bereitstellungsraum',ref:'THW DV 1-102',cat:'thw_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${T}" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="50" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="${T}" font-family="Arial">THW</text>
  <text x="50" y="57" text-anchor="middle" font-size="12" fill="${T}" font-family="Arial">BR</text>
</svg>`},

thw_stuetztunkt:{name:'THW Stützpunkt',ref:'THW DV 1-102',cat:'thw_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="22" width="72" height="42" fill="none" stroke="${T}" stroke-width="2.5"/>
  <polygon points="50,8 86,22 14,22" fill="none" stroke="${T}" stroke-width="2.5"/>
  <text x="50" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="${T}" font-family="Arial">StP</text>
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'thw_fuehr', label:'THW DV – Führung / Stellen',     color:'#60a5fa', official:true},
  {id:'thw_fg',    label:'THW DV – Fachgruppen (alle)',     color:'#60a5fa', official:true},
  {id:'thw_fz',    label:'THW DV – Fahrzeuge',              color:'#60a5fa', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });

console.log(`[TZ-Lib] THW geladen: ${Object.keys(LIB).length} Zeichen`);
})();
