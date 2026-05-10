/**
 * TZ-Bibliothek: PDV 100 – Polizei NORMKONFORM
 * Taktische Zeichen der Polizei nach PDV 100
 * Farbe: Grün #006633 / Weiß nach DV 102
 */
'use strict';
(function(){
const P='#006633',PS='#FFFFFF';
const VB='0 0 90 60';
const rect=(fill,stroke='#000',sw=2)=>`<rect x="1" y="1" width="88" height="58" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const l=(x1,y1,x2,y2,col,sw=2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${sw}"/>`;
const t=(text,x,y,sz,col,w='normal',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" font-family="Arial,sans-serif" font-size="${sz}" font-weight="${w}" fill="${col}">${text}</text>`;
const c=(cx,cy,r,fill,stroke,sw=2)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const dash=(stroke,sw=2.5,da='8,4')=>`<rect x="1" y="1" width="88" height="58" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-dasharray="${da}"/>`;
const tri=(pts,fill,stroke,sw=2)=>`<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;

const LIB = {

/* ── §2 FÜHRUNG ── */
pol_ea:{name:'Einsatzabschnitt Polizei (EA)',ref:'PDV 100 §2',cat:'pol_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  ${l(1,30,89,30,PS,1.5)}
  ${t('Pol-EA',45,22,13,PS,'bold')}
  ${t('__',45,48,14,PS)}
</svg>`},

pol_fuehrst:{name:'Polizeiliche Führungsstelle',ref:'PDV 100 §3',cat:'pol_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  ${l(1,56,89,56,PS,6)}
  ${t('Pol-FüSt',45,34,14,PS,'bold')}
</svg>`},

pol_el:{name:'Örtliche Einsatzleitung Polizei (ÖEL)',ref:'PDV 100 §3',cat:'pol_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  ${l(1,56,89,56,PS,6)}
  ${t('ÖEL',45,32,22,PS,'bold')}
  ${t('Pol.',45,50,11,PS)}
</svg>`},

pol_hundertschaft:{name:'Hundertschaft (100er)',ref:'PDV 100 §5',cat:'pol_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  ${l(1,32,89,32,PS,1.5)}
  ${t('Hsk',24,22,12,PS,'bold')}
  ${t('1/99',69,22,10,PS)}
  ${t('Hundertschaft',45,48,9,PS)}
</svg>`},

pol_zug:{name:'Polizei-Zug',ref:'PDV 100 §5',cat:'pol_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  ${l(1,32,89,32,PS,1.5)}
  ${t('Zug',24,22,12,PS,'bold')}
  ${t('1/29',69,22,10,PS)}
</svg>`},

pol_gruppe:{name:'Polizei-Gruppe',ref:'PDV 100 §5',cat:'pol_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  ${l(1,32,89,32,PS,1.5)}
  ${t('Gr',24,22,12,PS,'bold')}
  ${t('1/10',69,22,10,PS)}
</svg>`},

pol_sek:{name:'Spezialeinheit (SEK/MEK)',ref:'PDV 100 §5',cat:'pol_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  <polygon points="45,8 75,22 75,44 45,56 15,44 15,22" fill="none" stroke="${PS}" stroke-width="2"/>
  ${t('SEK',45,36,14,PS,'bold')}
</svg>`},

/* ── §4 FAHRZEUGE ── */
pol_fustw:{name:'Funkstreifenwagen (FuStW)',ref:'PDV 100 §4',cat:'pol_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  ${c(45,30,20,'none',PS,2)}
  ${t('FuStW',45,35,12,PS,'bold')}
</svg>`},

pol_elw:{name:'Einsatzleitwagen Pol. (ELW)',ref:'PDV 100 §4',cat:'pol_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  ${l(1,56,89,56,PS,5)}
  ${c(45,28,18,'none',PS,2)}
  ${t('ELW',45,33,13,PS,'bold')}
</svg>`},

pol_waw:{name:'Wasserwerfer (WaWe)',ref:'PDV 100 §4',cat:'pol_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  ${c(45,30,20,'none',PS,2)}
  <path d="M30 26 Q45 18 60 26" fill="none" stroke="${PS}" stroke-width="2.5"/>
  <path d="M30 34 Q45 42 60 34" fill="none" stroke="${PS}" stroke-width="2.5"/>
  ${t('WaWe',45,35,11,PS,'bold')}
</svg>`},

pol_hubschrauber:{name:'Polizeihubschrauber',ref:'PDV 100 §4',cat:'pol_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(P)}
  ${c(45,30,20,'none',PS,2)}
  ${l(20,22,70,22,PS,2)}
  <path d="M45 22 L55 45 L45 40 L35 45 Z" fill="${PS}"/>
  <line x1="45" y1="40" x2="48" y2="55" stroke="${PS}" stroke-width="2"/>
</svg>`},

/* ── §6 SPERREN / MASSNAHMEN ── */
pol_sperre:{name:'Polizeisperre',ref:'PDV 100 §6',cat:'pol_massn',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${l(5,30,85,30,P,5)}
  ${l(15,18,15,42,P,4)}
  ${l(75,18,75,42,P,4)}
</svg>`},

pol_absperrung:{name:'Polizeiliche Absperrung (Linie)',ref:'PDV 100 §6',cat:'pol_massn',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${l(2,20,88,20,P,3)}
  ${l(2,50,88,50,P,3)}
  ${l(18,20,6,50,P,1.5)}
  ${l(38,20,26,50,P,1.5)}
  ${l(58,20,46,50,P,1.5)}
  ${l(78,20,66,50,P,1.5)}
</svg>`},

pol_gefahrengebiet:{name:'Polizeiliches Gefahrengebiet',ref:'PDV 100 §6',cat:'pol_massn',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${tri('45,2 88,58 2,58','none',P,2.5)}
  ${t('!',45,50,28,P,'bold')}
</svg>`},

pol_evakuierung:{name:'Evakuierungsraum',ref:'PDV 100 §6',cat:'pol_massn',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${dash(P,2,'8,4')}
  ${l(18,30,55,30,P,3)}
  <polygon points="52,22 68,30 52,38" fill="${P}"/>
  ${l(72,20,72,50,P,3)}
</svg>`},

pol_tatort:{name:'Tatort',ref:'PDV 100 §7',cat:'pol_ermittl',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="88" height="58" fill="none" stroke="${P}" stroke-width="2.5"/>
  ${l(1,1,89,59,P,2)}
  ${l(1,59,89,1,P,2)}
  ${t('TATORT',45,55,8,P,'bold')}
</svg>`},

pol_bpol:{name:'Bundespolizei (BPol)',ref:'PDV 100',cat:'pol_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#1e3a8a')}
  ${t('BPOL',45,32,20,'#FFFFFF','bold')}
  ${t('Bundespolizei',45,50,8,'#93c5fd')}
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'pol_fuehr',   label:'PDV 100 – Führung/Einsatz',    color:'#4ade80', official:true},
  {id:'pol_einh',    label:'PDV 100 – Einheiten',           color:'#4ade80', official:true},
  {id:'pol_fz',      label:'PDV 100 – Fahrzeuge',           color:'#4ade80', official:true},
  {id:'pol_massn',   label:'PDV 100 – Sperren/Maßnahmen',   color:'#4ade80', official:true},
  {id:'pol_ermittl', label:'PDV 100 – Ermittlung/Tatort',   color:'#4ade80', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });
console.log(`[TZ-Lib] PDV 100 Polizei normkonform: ${Object.keys(LIB).length} Zeichen`);
})();
