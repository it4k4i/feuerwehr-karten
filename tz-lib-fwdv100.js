/**
 * TZ-Bibliothek: FwDV 100 / FwDV 3 / FwDV 7 – NORMKONFORM
 * Führung und Leitung im Feuerwehreinsatz (FwDV 100, Stand 2023)
 * Einheiten im Löscheinsatz (FwDV 3)
 * Atemschutz (FwDV 7)
 *
 * Alle Zeichen nach offizieller Norm mit korrekten:
 * - Proportionen (viewBox 90×60)
 * - Farben (DV 102 Farbsystem)
 * - Symbolen und Linienführungen
 */
'use strict';
(function(){
const C = window.TZ_COLORS || {};
const FW='#CC0000',FWS='#FFFFFF';
const FÜ='#FFCC00',FÜS='#000000';
const HO='#FFFFFF',HOS='#000000';
const VB='0 0 90 60';
const r=(x,y,w,h,fill,stroke='#000',sw=2)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const l=(x1,y1,x2,y2,col='#000',sw=2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${sw}"/>`;
const t=(text,x,y,sz,col='#000',w='normal',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" font-family="Arial,sans-serif" font-size="${sz}" font-weight="${w}" fill="${col}">${text}</text>`;
const circ=(cx,cy,r2,fill,stroke='#000',sw=2)=>`<circle cx="${cx}" cy="${cy}" r="${r2}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const rect=(fill,stroke='#000000',sw=2)=>`<rect x="1" y="1" width="88" height="58" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const kreuz=(col,cx=45,cy=30,s=13)=>`${l(cx,cy-s,cx,cy+s,col,5)}${l(cx-s,cy,cx+s,cy,col,5)}`;
const dash=(stroke,sw=2.5,da='8,4')=>`<rect x="1" y="1" width="88" height="58" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-dasharray="${da}"/>`;
const tri=(pts,fill,stroke='#000',sw=2)=>`<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;

const LIB = {

/* ═══════════════════════════════════════════
   FwDV 100 §2 – FÜHRUNGSORGANISATION
═══════════════════════════════════════════ */

// §2.1 Einsatzleitung
fw100_el:{name:'Einsatzleitung (EL)',ref:'FwDV 100 §2.1',cat:'fwdv100_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW)}
  ${t('EL',45,38,26,FWS,'bold')}
</svg>`},

// §2.1 Technische Einsatzleitung
fw100_tel:{name:'Technische Einsatzleitung (TEL)',ref:'FwDV 100 §2.1',cat:'fwdv100_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW)}
  ${l(1,56,89,56,FWS,6)}
  ${t('TEL',45,35,22,FWS,'bold')}
</svg>`},

// §2.2 Einsatzabschnitt (mit Trennlinie und Nummer)
fw100_ea:{name:'Einsatzabschnitt (EA)',ref:'FwDV 100 §2.2',cat:'fwdv100_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW)}
  ${l(1,30,89,30,FWS,1.5)}
  ${t('EA',45,22,15,FWS,'bold')}
  ${t('__',45,48,14,FWS)}
</svg>`},

// §2.2 Unterabschnitt (zwei Trennlinien)
fw100_ua:{name:'Unterabschnitt (UA)',ref:'FwDV 100 §2.3',cat:'fwdv100_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW)}
  ${l(1,28,89,28,FWS,1.5)}
  ${l(1,35,89,35,FWS,1.5)}
  ${t('UA',45,20,14,FWS,'bold')}
  ${t('__',45,50,13,FWS)}
</svg>`},

// §2.2 Löschabschnitt
fw100_loesch_a:{name:'Löschabschnitt',ref:'FwDV 100 §2.2',cat:'fwdv100_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW)}
  ${l(1,30,89,30,FWS,1.5)}
  ${t('LöA',45,22,14,FWS,'bold')}
  ${t('__',45,48,13,FWS)}
</svg>`},

// §2.2 Rettungsabschnitt
fw100_ret_a:{name:'Rettungsabschnitt',ref:'FwDV 100 §2.2',cat:'fwdv100_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW)}
  ${l(1,30,89,30,FWS,1.5)}
  ${t('RetA',45,22,14,FWS,'bold')}
  ${t('__',45,48,13,FWS)}
</svg>`},

// §2.2 Versorgungsabschnitt
fw100_vers_a:{name:'Versorgungsabschnitt',ref:'FwDV 100 §2.2',cat:'fwdv100_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW)}
  ${l(1,30,89,30,FWS,1.5)}
  ${t('VersA',45,22,13,FWS,'bold')}
  ${t('__',45,48,13,FWS)}
</svg>`},

// §3.2 Führungsstelle (mit starker Unterlinie)
fw100_fuehrst:{name:'Führungsstelle',ref:'FwDV 100 §3.2',cat:'fwdv100_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FÜ,'#000000',2)}
  ${l(1,56,89,56,'#000000',6)}
  ${t('FüSt',45,35,18,FÜS,'bold')}
</svg>`},

// §3.2 Einsatzleitwagen (Führung, Kreis)
fw100_elw:{name:'Einsatzleitwagen (ELW)',ref:'FwDV 100 §3.2',cat:'fwdv100_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FÜ,'#000000',2)}
  ${l(1,56,89,56,'#000000',5)}
  ${circ(45,28,16,'none','#000000',2)}
  ${t('ELW',45,33,13,FÜS,'bold')}
</svg>`},

/* ═══════════════════════════════════════════
   FwDV 100 §4 – RÄUME / STELLEN
═══════════════════════════════════════════ */

// §4.1 Bereitstellungsraum (gestrichelter Rahmen)
fw100_br:{name:'Bereitstellungsraum (BR)',ref:'FwDV 100 §4.1',cat:'fwdv100_raum',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${dash(FW,2.5,'8,4')}
  ${t('BR',45,36,24,FW,'bold')}
</svg>`},

// §4.1 Aufstellungsraum
fw100_ar:{name:'Aufstellungsraum (AR)',ref:'FwDV 100 §4.1',cat:'fwdv100_raum',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${dash(FW,2,'5,5')}
  ${t('AR',45,36,24,FW,'bold')}
</svg>`},

// §4.2 Sammelplatz (Dreieck)
fw100_sp:{name:'Sammelplatz (SP)',ref:'FwDV 100 §4.2',cat:'fwdv100_raum',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${tri('45,2 88,58 2,58','none',FW,2.5)}
  ${t('SP',45,50,16,FW,'bold')}
</svg>`},

// Versorgungspunkt
fw100_vp:{name:'Versorgungspunkt (VP)',ref:'FwDV 100 §6',cat:'fwdv100_raum',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${circ(45,30,28,'none',FW,2.5)}
  ${t('VP',45,36,20,FW,'bold')}
</svg>`},

// Verpflegungsstelle
fw100_vpst:{name:'Verpflegungsstelle',ref:'FwDV 100 §6',cat:'fwdv100_raum',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${circ(45,30,28,'none',FW,2.5)}
  ${t('VpSt',45,36,16,FW,'bold')}
</svg>`},

// §5 Behandlungsplatz (Sanitätsdienst-Kreuz in Rahmen)
fw100_bhp:{name:'Behandlungsplatz (BHP)',ref:'FwDV 100 §5 / MANV',cat:'fwdv100_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${kreuz('#CC0000',45,28,14)}
  ${t('BHP',45,52,10,'#CC0000','bold')}
</svg>`},

// §5 Patientenablage
fw100_pa:{name:'Patientenablage (PA)',ref:'FwDV 100 §5 / MANV',cat:'fwdv100_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${tri('45,2 88,58 2,58',HO,'#000000',2)}
  ${kreuz('#CC0000',45,36,11)}
  ${t('PA',45,54,9,'#CC0000','bold')}
</svg>`},

// §5 Verletzten-Sammelstelle
fw100_vst:{name:'Verletzten-Sammelstelle (VSt)',ref:'FwDV 100 §5 / MANV',cat:'fwdv100_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${tri('45,2 88,58 2,58','none','#CC0000',2.5)}
  ${kreuz('#CC0000',45,36,10)}
</svg>`},

// Sanitätsstelle (Kreis mit Kreuz)
fw100_sanst:{name:'Sanitätsstelle',ref:'FwDV 100 §6',cat:'fwdv100_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${circ(45,30,28,HO,'#000000',2)}
  ${kreuz('#CC0000',45,30,14)}
</svg>`},

/* ═══════════════════════════════════════════
   FwDV 100 – MANV KATEGORIEN (nach Sichtung)
═══════════════════════════════════════════ */

// Kategorie I – Rot (Sofortbehandlung)
fw100_kat1:{name:'Sichtungskategorie I – Sofortbehandlung (rot)',ref:'FwDV 100 MANV / DIN 13050',cat:'fwdv100_manv',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#CC0000','#000000',2)}
  ${t('I',45,38,30,FWS,'bold')}
</svg>`},

// Kategorie II – Gelb (Aufgeschobene Behandlung)
fw100_kat2:{name:'Sichtungskategorie II – Aufgeschoben (gelb)',ref:'FwDV 100 MANV / DIN 13050',cat:'fwdv100_manv',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#FFCC00','#000000',2)}
  ${t('II',45,38,28,'#000000','bold')}
</svg>`},

// Kategorie III – Grün (Leicht verletzt)
fw100_kat3:{name:'Sichtungskategorie III – Leichtverletzt (grün)',ref:'FwDV 100 MANV / DIN 13050',cat:'fwdv100_manv',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#009900','#000000',2)}
  ${t('III',45,38,24,FWS,'bold')}
</svg>`},

// Kategorie IV – Schwarz (Abwartende Behandlung / Verstorben)
fw100_kat4:{name:'Sichtungskategorie IV – Verstorben/Abwartend (schwarz)',ref:'FwDV 100 MANV / DIN 13050',cat:'fwdv100_manv',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#1a1a1a','#000000',2)}
  ${t('IV',45,38,28,FWS,'bold')}
</svg>`},

// MANV-Lage
fw100_manv:{name:'MANV – Massenanfall Verletzter',ref:'FwDV 100 MANV',cat:'fwdv100_manv',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#FFFFFF','#CC0000',2.5)}
  ${t('MANV','45',32,16,'#CC0000','bold')}
  ${t('__Verl.','45',50,11,'#CC0000')}
</svg>`},

/* ═══════════════════════════════════════════
   FwDV 3 – EINHEITEN IM LÖSCHEINSATZ
═══════════════════════════════════════════ */

// Staffel (1/5) – mit Trennlinie und Stärkeangabe
fw3_staffel:{name:'Staffel (1/5)',ref:'FwDV 3 §2',cat:'fwdv100_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW,'#000000',2)}
  ${l(1,32,89,32,FWS,1.5)}
  ${t('Stff',24,22,12,FWS,'bold')}
  ${t('1/5',69,22,11,FWS)}
  ${t('Staffel',45,48,11,FWS)}
</svg>`},

// Gruppe (1/8)
fw3_gruppe:{name:'Gruppe (1/8)',ref:'FwDV 3 §2',cat:'fwdv100_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW,'#000000',2)}
  ${l(1,32,89,32,FWS,1.5)}
  ${t('Gr',24,22,12,FWS,'bold')}
  ${t('1/8',69,22,11,FWS)}
  ${t('Gruppe',45,48,11,FWS)}
</svg>`},

// Zug (1/19 od. 1/22)
fw3_zug:{name:'Zug (1/19 oder 1/22)',ref:'FwDV 3 §2',cat:'fwdv100_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW,'#000000',2)}
  ${l(1,32,89,32,FWS,1.5)}
  ${t('Zug',24,22,12,FWS,'bold')}
  ${t('1/19',69,22,11,FWS)}
  ${t('Löschzug',45,48,11,FWS)}
</svg>`},

// HLF-Gruppe
fw3_hlf_gr:{name:'HLF-Gruppe',ref:'FwDV 3 §3',cat:'fwdv100_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW,'#000000',2)}
  ${circ(45,30,20,'none',FWS,2)}
  ${l(1,32,89,32,FWS,1)}
  ${t('HLF',45,35,13,FWS,'bold')}
</svg>`},

/* ═══════════════════════════════════════════
   FwDV 7 – ATEMSCHUTZ
═══════════════════════════════════════════ */

// AGT-Überwachungsfeld (normkonform)
fw7_agt:{name:'AGT-Überwachungsfeld',ref:'FwDV 7 §4',cat:'fwdv100_agt',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW,'#000000',2)}
  ${t('AGT',45,18,11,FWS,'bold')}
  ${l(1,24,89,24,FWS,1)}
  ${t('ein:',20,37,9,FWS,'normal','middle')}
  ${t('__:__',62,37,10,FWS)}
  ${l(1,42,89,42,FWS,1)}
  ${t('aus:',20,53,9,FWS,'normal','middle')}
  ${t('__:__',62,53,10,FWS)}
</svg>`},

// Atemschutzgeräteträger im Einsatz
fw7_agt_aktiv:{name:'Atemschutzgeräteträger (aktiv)',ref:'FwDV 7 §2',cat:'fwdv100_agt',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(FW,'#000000',2)}
  <ellipse cx="45" cy="30" rx="22" ry="16" fill="none" stroke="${FWS}" stroke-width="2.5"/>
  <ellipse cx="45" cy="30" rx="8" ry="8" fill="${FWS}" stroke="${FWS}" stroke-width="1"/>
  ${t('AGT',45,52,9,FWS,'bold')}
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'fwdv100_fuehr', label:'FwDV 100 §2–3 – Führung/Abschnitte',  color:'#f87171', official:true},
  {id:'fwdv100_raum',  label:'FwDV 100 §4–6 – Räume/Stellen',        color:'#f87171', official:true},
  {id:'fwdv100_san',   label:'FwDV 100 §5 – San/Behandlung',          color:'#fb7185', official:true},
  {id:'fwdv100_manv',  label:'FwDV 100 – MANV/Sichtung',              color:'#fb7185', official:true},
  {id:'fwdv100_einh',  label:'FwDV 3 – Einheiten',                    color:'#f87171', official:true},
  {id:'fwdv100_agt',   label:'FwDV 7 – Atemschutz',                   color:'#f87171', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });

console.log(`[TZ-Lib] FwDV 100/3/7 normkonform geladen: ${Object.keys(LIB).length} Zeichen`);
})();
