/**
 * TZ-Bibliothek: THW DV 1-100 / DV 1-102 – NORMKONFORM
 * Alle 16 Fachgruppen nach offizieller THW-Dienstvorschrift
 * Farbe: Blau #003399 / Weiß
 */
'use strict';
(function(){
const T='#003399',TS='#FFFFFF';
const VB='0 0 90 60';
const rect=(fill,stroke='#000',sw=2)=>`<rect x="1" y="1" width="88" height="58" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const l=(x1,y1,x2,y2,col,sw=2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${sw}"/>`;
const t=(text,x,y,sz,col,w='normal',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" font-family="Arial,sans-serif" font-size="${sz}" font-weight="${w}" fill="${col}">${text}</text>`;
const c=(cx,cy,r,fill,stroke,sw=2)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const dash=(stroke,sw=2.5,da='8,4')=>`<rect x="1" y="1" width="88" height="58" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-dasharray="${da}"/>`;

// Technischer Zug mit Fachgruppe: TZ-Grundform (Rechteck) + hLine + FG-Kürzel oben + Stärke unten
const fg=(kuerzel,staerke='1/8')=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(T)}
  ${l(1,30,89,30,TS,1.5)}
  ${t(kuerzel,45,22,kuerzel.length>3?13:16,TS,'bold')}
  ${t(staerke,45,47,11,TS)}
</svg>`;

const LIB = {

/* ── Führungszeichen THW ── */
thw_ov:{name:'THW Ortsverband (OV)',ref:'THW DV 1-100',cat:'thw_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(T)}
  ${t('THW',45,28,18,TS,'bold')}
  ${t('OV __',45,48,11,TS)}
</svg>`},

thw_zugführer:{name:'THW Zugführer (ZgFü)',ref:'THW DV 1-100',cat:'thw_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(T)}
  ${l(1,56,89,56,TS,6)}
  ${t('ZgFü',45,34,18,TS,'bold')}
</svg>`},

thw_fuehrst:{name:'THW Führungsstelle',ref:'THW DV 1-100',cat:'thw_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(T)}
  ${l(1,56,89,56,TS,6)}
  ${t('THW',45,26,14,TS,'bold')}
  ${t('FüSt',45,44,14,TS,'bold')}
</svg>`},

thw_elw:{name:'THW Einsatzleitwagen (ELW)',ref:'THW DV 1-100',cat:'thw_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(T)}
  ${l(1,56,89,56,TS,5)}
  ${c(45,28,18,'none',TS,2)}
  ${t('ELW',45,33,13,TS,'bold')}
</svg>`},

thw_tz:{name:'THW Technischer Zug (TZ)',ref:'THW DV 1-100',cat:'thw_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(T)}
  ${l(1,32,89,32,TS,1.5)}
  ${t('TZ',24,22,14,TS,'bold')}
  ${t('1/19',69,22,10,TS)}
  ${t('Tech.Zug',45,48,10,TS)}
</svg>`},

thw_br:{name:'THW Bereitstellungsraum',ref:'THW DV 1-102',cat:'thw_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${dash(T,2.5,'8,4')}
  ${t('THW',45,28,14,T,'bold')}
  ${t('BR',45,46,14,T,'bold')}
</svg>`},

/* ── 16 Fachgruppen (alle nach DV 1-100) ── */
thw_fg_b:{name:'FG Bergung (B)',ref:'THW DV 1-100 §4.1',cat:'thw_fg',
svg:()=>fg('B')},

thw_fg_e:{name:'FG Elektroversorgung (E)',ref:'THW DV 1-100 §4.2',cat:'thw_fg',
svg:()=>fg('E')},

thw_fg_fk:{name:'FG Führung/Kommunikation (FK)',ref:'THW DV 1-100 §4.3',cat:'thw_fg',
svg:()=>fg('FK')},

thw_fg_i:{name:'FG Infrastruktur (I)',ref:'THW DV 1-100 §4.4',cat:'thw_fg',
svg:()=>fg('I')},

thw_fg_iuk:{name:'FG Information u. Kommunikation (IuK)',ref:'THW DV 1-100 §4.5',cat:'thw_fg',
svg:()=>fg('IuK')},

thw_fg_log:{name:'FG Logistik (Log)',ref:'THW DV 1-100 §4.6',cat:'thw_fg',
svg:()=>fg('Log')},

thw_fg_n:{name:'FG Notversorgung u. -instandsetzung (N)',ref:'THW DV 1-100 §4.7',cat:'thw_fg',
svg:()=>fg('N')},

thw_fg_o:{name:'FG Ortung (O)',ref:'THW DV 1-100 §4.8',cat:'thw_fg',
svg:()=>fg('O')},

thw_fg_oel:{name:'FG Ölschadenbekämpfung (ÖL)',ref:'THW DV 1-100 §4.9',cat:'thw_fg',
svg:()=>fg('ÖL')},

thw_fg_r:{name:'FG Räumen (R)',ref:'THW DV 1-100 §4.10',cat:'thw_fg',
svg:()=>fg('R')},

thw_fg_spr:{name:'FG Sprengen (Spr)',ref:'THW DV 1-100 §4.11',cat:'thw_fg',
svg:()=>fg('Spr')},

thw_fg_sb:{name:'FG Schwere Bergung (SB)',ref:'THW DV 1-100',cat:'thw_fg',
svg:()=>fg('SB')},

thw_fg_tw:{name:'FG Trinkwasserversorgung (TW)',ref:'THW DV 1-100 §4.12',cat:'thw_fg',
svg:()=>fg('TW')},

thw_fg_w:{name:'FG Wassergefahren (W)',ref:'THW DV 1-100 §4.13',cat:'thw_fg',
svg:()=>fg('W')},

thw_fg_wp:{name:'FG Wasserversorgung (WP)',ref:'THW DV 1-100 §4.14',cat:'thw_fg',
svg:()=>fg('WP')},

thw_fg_sp:{name:'FG Schwere Pumpen (SP)',ref:'THW DV 1-100',cat:'thw_fg',
svg:()=>fg('SP')},

/* ── Fahrzeuge ── */
thw_mlw:{name:'Mannschaftslastwagen (MLW)',ref:'THW DV 1-100',cat:'thw_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(T)}${c(45,30,20,'none',TS,2)}${t('MLW',45,35,14,TS,'bold')}
</svg>`},

thw_gkw:{name:'Gerätekraftwagen (GKW)',ref:'THW DV 1-100',cat:'thw_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(T)}${c(45,30,20,'none',TS,2)}${t('GKW',45,35,14,TS,'bold')}
</svg>`},

thw_krkw:{name:'Kranwagen (KrKW)',ref:'THW DV 1-100',cat:'thw_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(T)}${c(45,30,20,'none',TS,2)}${t('KrKW',45,35,13,TS,'bold')}
</svg>`},

thw_boot:{name:'Schnelles Einsatzboot (SEB)',ref:'THW DV 1-100',cat:'thw_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(T)}
  <path d="M12 42 Q45 20 78 42 L73 53 Q45 59 17 53 Z" fill="${TS}" stroke="${TS}" stroke-width="1.5"/>
  ${t('SEB',45,15,13,TS,'bold')}
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'thw_fuehr', label:'THW DV – Führung/Stellen',       color:'#60a5fa', official:true},
  {id:'thw_fg',    label:'THW DV – Alle 16 Fachgruppen',    color:'#60a5fa', official:true},
  {id:'thw_fz',    label:'THW DV – Fahrzeuge',              color:'#60a5fa', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });
console.log(`[TZ-Lib] THW normkonform: ${Object.keys(LIB).length} Zeichen`);
})();
