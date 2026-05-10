/**
 * TZ-Bibliothek: Rettungsdienst – NORMKONFORM
 * DIN 13050, DIN EN 1789, Sanitätsdienst Bundeswehr
 * Farbe: Weiß/Schwarz für HiOrg, Rotes Kreuz für San
 */
'use strict';
(function(){
const HO='#FFFFFF',HOS='#000000',RC='#CC0000';
const VB='0 0 90 60';
const rect=(fill,stroke='#000',sw=2)=>`<rect x="1" y="1" width="88" height="58" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const l=(x1,y1,x2,y2,col,sw=2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${sw}"/>`;
const t=(text,x,y,sz,col,w='normal',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" font-family="Arial,sans-serif" font-size="${sz}" font-weight="${w}" fill="${col}">${text}</text>`;
const c=(cx,cy,r,fill,stroke,sw=2)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const kreuz=(col,cx=45,cy=30,s=14)=>`${l(cx,cy-s,cx,cy+s,col,5)}${l(cx-s,cy,cx+s,cy,col,5)}`;
const tri=(pts,fill,stroke,sw=2)=>`<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const dash=(stroke,sw=2.5,da='8,4')=>`<rect x="1" y="1" width="88" height="58" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-dasharray="${da}"/>`;

// HiOrg-Grundzeichen: weißes Rechteck mit schwarzem Rand
const rdBase=(textCol,label,circle=true)=>`
  ${rect(HO,'#000000',2)}
  ${circle?`${c(45,28,18,'none','#000000',2)}`:''}
  ${kreuz(textCol,45,28,10)}
  ${t(label,45,52,9,textCol,'bold')}`;

const LIB = {

/* ── DIN EN 1789 – Fahrzeuge ── */
rd_rtw:{name:'Rettungswagen (RTW) – DIN EN 1789 Typ C',ref:'DIN EN 1789 / DIN 13050',cat:'rd_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${c(45,28,18,'none','#000000',2)}
  ${kreuz(RC,45,28,10)}
  ${t('RTW',45,52,9,RC,'bold')}
</svg>`},

rd_ktw:{name:'Krankentransportwagen (KTW) – DIN EN 1789 A2',ref:'DIN EN 1789 / DIN 13050',cat:'rd_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${c(45,28,18,'none','#000000',2)}
  ${t('KTW',45,33,14,'#000000','bold')}
  ${t('DIN EN 1789',45,52,7,'#000000')}
</svg>`},

rd_nef:{name:'Notarzteinsatzfahrzeug (NEF) – DIN EN 1789 Typ C',ref:'DIN EN 1789 / DIN 13050',cat:'rd_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${c(45,28,18,'none','#000000',2)}
  ${c(45,28,5,RC,RC,1)}
  ${l(45,14,45,42,RC,1.5)}
  ${l(31,28,59,28,RC,1.5)}
  ${t('NEF',45,52,9,RC,'bold')}
</svg>`},

rd_itw:{name:'Intensivtransportwagen (ITW)',ref:'DIN EN 1789 / DIN 13050',cat:'rd_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${c(45,28,18,'none','#000000',2)}
  ${kreuz(RC,45,28,10)}
  ${t('I',45,30,10,'#FFFFFF','bold')}
  ${t('ITW',45,52,9,RC,'bold')}
</svg>`},

rd_rtw_heli:{name:'Rettungshubschrauber (RTH)',ref:'DIN EN 13718 / DIN 13050',cat:'rd_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${c(45,28,18,'none','#000000',2)}
  ${kreuz(RC,45,28,10)}
  ${l(15,18,75,18,'#000000',2)}
  ${t('RTH',45,52,9,RC,'bold')}
</svg>`},

rd_gwsan:{name:'Gerätewagen Sanität (GW-San)',ref:'DIN 13050',cat:'rd_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${c(45,28,18,'none','#000000',2)}
  ${t('GW',45,25,13,'#000000','bold')}
  ${t('San',45,40,11,'#000000','bold')}
</svg>`},

/* ── DIN 13050 – Einheiten ── */
rd_sangruppe:{name:'Sanitätsgruppe (1/8)',ref:'DIN 13050',cat:'rd_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${l(1,30,89,30,'#000000',1.5)}
  ${kreuz(RC,25,18,8)}
  ${t('1/8',69,22,10,'#000000')}
  ${t('SanGr',45,48,11,'#000000')}
</svg>`},

rd_sanzug:{name:'Sanitätszug (1/19)',ref:'DIN 13050',cat:'rd_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${l(1,30,89,30,'#000000',1.5)}
  ${kreuz(RC,25,18,8)}
  ${t('1/19',69,22,9,'#000000')}
  ${t('SanZug',45,48,11,'#000000')}
</svg>`},

rd_rettungswache:{name:'Rettungswache',ref:'DIN 13050',cat:'rd_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="22" width="62" height="36" fill="${HO}" stroke="#000000" stroke-width="2"/>
  <polygon points="45,5 76,22 14,22" fill="${HO}" stroke="#000000" stroke-width="2"/>
  ${kreuz(RC,45,32,10)}
</svg>`},

rd_leitstelle:{name:'Rettungsleitstelle',ref:'DIN 13050',cat:'rd_einh',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${l(1,56,89,56,'#000000',5)}
  ${kreuz(RC,45,28,12)}
  ${t('Leitstelle',45,52,8,'#000000')}
</svg>`},

/* ── Hilfsorganisationen (nach DIN 13050 Farbsystem) ── */
rd_drk:{name:'Deutsches Rotes Kreuz (DRK)',ref:'DIN 13050',cat:'rd_hilfsorg',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#FFFFFF','#CC0000',2.5)}
  ${kreuz('#CC0000',45,28,18)}
  ${t('DRK',45,54,9,'#CC0000','bold')}
</svg>`},

rd_asb:{name:'Arbeiter-Samariter-Bund (ASB)',ref:'DIN 13050',cat:'rd_hilfsorg',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#FF6600','#000000',2)}
  ${t('ASB',45,36,24,'#FFFFFF','bold')}
</svg>`},

rd_mhd:{name:'Malteser Hilfsdienst (MHD)',ref:'DIN 13050',cat:'rd_hilfsorg',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#1a3a8a','#000000',2)}
  <polygon points="45,10 52,28 72,28 57,40 63,58 45,48 27,58 33,40 18,28 38,28" fill="#FFFFFF"/>
  ${t('MHD',45,36,11,'#1a3a8a','bold')}
</svg>`},

rd_juh:{name:'Johanniter-Unfall-Hilfe (JUH)',ref:'DIN 13050',cat:'rd_hilfsorg',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#1a3a8a','#000000',2)}
  <polygon points="45,10 52,28 72,28 57,40 63,58 45,48 27,58 33,40 18,28 38,28" fill="none" stroke="#FFFFFF" stroke-width="2"/>
  ${t('JUH',45,36,14,'#fbbf24','bold')}
</svg>`},

rd_dlrg:{name:'DLRG – Wasserrettung',ref:'DIN 13050',cat:'rd_hilfsorg',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#1a3a8a','#000000',2)}
  <path d="M15 36 Q25 24 35 36 Q45 48 55 36 Q65 24 75 36" fill="none" stroke="#FFFFFF" stroke-width="3"/>
  <path d="M15 44 Q25 32 35 44 Q45 56 55 44 Q65 32 75 44" fill="none" stroke="#FFFFFF" stroke-width="2"/>
  ${t('DLRG',45,22,14,'#facc15','bold')}
</svg>`},

/* ── Behandlungsplätze / MANV ── */
rd_bhp:{name:'Behandlungsplatz (BHP)',ref:'DIN 13050 / FwDV 100',cat:'rd_stellen',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${kreuz(RC,45,28,16)}
  ${t('BHP',45,52,10,RC,'bold')}
</svg>`},

rd_pa:{name:'Patientenablage (PA)',ref:'DIN 13050 / FwDV 100',cat:'rd_stellen',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${tri('45,2 88,58 2,58',HO,'#000000',2)}
  ${kreuz(RC,45,36,11)}
  ${t('PA',45,54,9,RC,'bold')}
</svg>`},

rd_sichtung:{name:'Sichtungsstelle (S)',ref:'DIN 13050 / FwDV 100',cat:'rd_stellen',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect(HO,'#000000',2)}
  ${t('S',45,38,30,RC,'bold')}
</svg>`},

rd_kh:{name:'Krankenhaus / Notaufnahme',ref:'DIN 13050',cat:'rd_stellen',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="22" width="62" height="36" fill="${HO}" stroke="#000000" stroke-width="2"/>
  <polygon points="45,5 76,22 14,22" fill="${HO}" stroke="#000000" stroke-width="2"/>
  ${kreuz(RC,45,36,12)}
  ${t('KH',14,18,9,'#000000','normal','middle')}
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'rd_fz',       label:'RD – Fahrzeuge (DIN EN 1789)', color:'#fb7185', official:true},
  {id:'rd_einh',     label:'RD – Einheiten/Wachen',         color:'#fb7185', official:true},
  {id:'rd_hilfsorg', label:'RD – Hilfsorganisationen',      color:'#fb7185', official:true},
  {id:'rd_stellen',  label:'RD – Stellen/Behandlungspl.',   color:'#fb7185', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });
console.log(`[TZ-Lib] Rettungsdienst normkonform: ${Object.keys(LIB).length} Zeichen`);
})();
