/**
 * TZ-Bibliothek: Katastrophenschutz / BBK – NORMKONFORM
 * Zeichen nach KatS-Vorschriften, BBK-Vorgaben und ABC-Schutz
 */
'use strict';
(function(){
const VB='0 0 90 60';
const l=(x1,y1,x2,y2,col,sw=2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${sw}"/>`;
const t=(text,x,y,sz,col,w='normal',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" font-family="Arial,sans-serif" font-size="${sz}" font-weight="${w}" fill="${col}">${text}</text>`;
const c=(cx,cy,r,fill,stroke,sw=2)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const rect=(fill,stroke='#000',sw=2)=>`<rect x="1" y="1" width="88" height="58" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const dash=(stroke,sw=2.5,da='8,4')=>`<rect x="1" y="1" width="88" height="58" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-dasharray="${da}"/>`;
const tri=(pts,fill,stroke,sw=2)=>`<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const kreuz=(col,cx=45,cy=30,s=14)=>`${l(cx,cy-s,cx,cy+s,col,5)}${l(cx-s,cy,cx+s,cy,col,5)}`;

// Strahlenwarnung Trefoil (korrekte Berechnung, cx=45, cy=30)
const trefoil=(cx,cy,ri,ro,col)=>{
  const pi=Math.PI;
  const pt=(r,a)=>`${(cx+r*Math.cos(a)).toFixed(2)},${(cy+r*Math.sin(a)).toFixed(2)}`;
  const blades=[-pi/2,pi/6,5*pi/6].map(center=>{
    const a1=center-pi/6,a2=center+pi/6;
    return `<path d="M ${pt(ri,a1)} A ${ri},${ri} 0 0,1 ${pt(ri,a2)} L ${pt(ro,a2)} A ${ro},${ro} 0 0,0 ${pt(ro,a1)} Z" fill="${col}"/>`;
  }).join('');
  return blades+`<circle cx="${cx}" cy="${cy}" r="${ri*0.7}" fill="${col}"/>`;
};

const LIB = {

/* ── FÜHRUNG / STÄBE ── */
kats_stab:{name:'Katastrophenschutzstab (KatS-Stab)',ref:'KatS / BBK',cat:'kats_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#7c3aed')}
  ${l(1,56,89,56,'#FFFFFF',6)}
  ${t('KatS',45,26,14,'#FFFFFF','bold')}
  ${t('Stab',45,44,14,'#FFFFFF','bold')}
</svg>`},

kats_krisenstab:{name:'Krisenstab',ref:'KatS / BBK',cat:'kats_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#7c3aed')}
  ${l(1,56,89,56,'#FFFFFF',6)}
  ${t('KriSt',45,34,18,'#FFFFFF','bold')}
</svg>`},

kats_gem_stab:{name:'Gemeinsamer Stab (BOS)',ref:'KatS §3',cat:'kats_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#7c3aed')}
  ${t('Gem.',45,24,14,'#FFFFFF','bold')}
  ${t('Stab',45,42,14,'#FFFFFF','bold')}
  ${t('BOS',45,56,9,'#c4b5fd')}
</svg>`},

kats_katgebiet:{name:'Katastrophengebiet',ref:'KatS §2',cat:'kats_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${dash('#7c3aed',2.5,'8,4')}
  ${t('KatS',45,28,14,'#7c3aed','bold')}
  ${t('Gebiet',45,46,12,'#7c3aed','bold')}
</svg>`},

kats_hlz:{name:'Hilfeleistungszug (HLZ)',ref:'KatS',cat:'kats_fuehr',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#7c3aed')}
  ${l(1,32,89,32,'#FFFFFF',1.5)}
  ${t('HLZ',24,22,13,'#FFFFFF','bold')}
  ${t('1/19',69,22,10,'#FFFFFF')}
</svg>`},

/* ── WARNUNG / ALARM (nach BBK) ── */
kats_warnung:{name:'Warnung der Bevölkerung',ref:'BBK / NINA',cat:'kats_warn',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${tri('45,2 88,58 2,58','#fef08a','#ca8a04',2.5)}
  ${t('!',45,50,30,'#ca8a04','bold')}
</svg>`},

kats_entwarnung:{name:'Entwarnung',ref:'BBK',cat:'kats_warn',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${c(45,30,28,'#dcfce7','#16a34a',2.5)}
  <polyline points="30,30 42,43 63,17" fill="none" stroke="#16a34a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`},

kats_strahlenwarnung:{name:'Strahlenwarnung – ISO 361 / DIN 25430',ref:'ISO 361 / KatS ABC',cat:'kats_warn',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${c(45,30,28,'#fef08a','#ca8a04',2)}
  ${trefoil(45,30,9,24,'#ca8a04')}
</svg>`},

kats_chemwarnung:{name:'Chemikalien-Warnung (C)',ref:'KatS ABC / GHS',cat:'kats_warn',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${tri('45,2 88,58 2,58','#fef08a','#ca8a04',2.5)}
  ${t('C',45,48,24,'#ca8a04','bold')}
</svg>`},

kats_biowarnung:{name:'Biologische Warnung (B)',ref:'KatS ABC',cat:'kats_warn',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${tri('45,2 88,58 2,58','#dcfce7','#16a34a',2.5)}
  ${t('B',45,48,24,'#16a34a','bold')}
</svg>`},

/* ── VERSORGUNG / UNTERBRINGUNG ── */
kats_notunterkunft:{name:'Notunterkunft / Notlager (NL)',ref:'KatS §5',cat:'kats_versorgg',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="24" width="62" height="34" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  <polygon points="45,4 76,24 14,24" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  ${t('NL',45,45,14,'#7c3aed','bold')}
</svg>`},

kats_aufnahmelager:{name:'Aufnahmelager / Evakuierungslager',ref:'KatS §5',cat:'kats_versorgg',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${dash('#7c3aed',2,'6,3')}
  ${t('Aufn.',45,28,12,'#7c3aed','bold')}
  ${t('Lager',45,46,12,'#7c3aed','bold')}
</svg>`},

kats_trinkwasser:{name:'Trinkwasser-Notversorgung',ref:'KatS §5',cat:'kats_versorgg',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${c(45,30,28,'none','#1d4ed8',2.5)}
  <path d="M45,12 Q52,22 54,30 Q56,40 45,46 Q34,40 36,30 Q38,22 45,12Z" fill="#1d4ed8"/>
</svg>`},

kats_notstrom:{name:'Notstromaggregat',ref:'KatS §5',cat:'kats_versorgg',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="88" height="58" fill="none" stroke="#ca8a04" stroke-width="2.5"/>
  <polygon points="50,8 38,30 44,30 40,52 52,28 46,28 50,8" fill="#ca8a04"/>
</svg>`},

/* ── ABC / CBRN SCHUTZ ── */
kats_dekon:{name:'Dekontaminationsstelle (Dekon)',ref:'KatS ABC / FwDV',cat:'kats_abc',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#FFFFFF','#7c3aed',2.5)}
  ${t('Dekon',45,28,14,'#7c3aed','bold')}
  ${t('Stelle',45,46,11,'#7c3aed','bold')}
</svg>`},

kats_abc_lage:{name:'ABC/CBRN-Lage',ref:'KatS ABC',cat:'kats_abc',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${tri('45,2 88,58 2,58','rgba(124,58,237,0.1)','#7c3aed',2.5)}
  ${t('ABC',45,46,18,'#7c3aed','bold')}
</svg>`},

kats_messst:{name:'Messstelle ABC',ref:'KatS ABC',cat:'kats_abc',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="88" height="58" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  ${c(45,28,16,'none','#7c3aed',2)}
  ${l(45,12,45,20,'#7c3aed',2)}
  ${l(45,28,56,18,'#7c3aed',2)}
  ${c(45,28,3,'#7c3aed','#7c3aed',1)}
  ${t('CBRN',45,52,9,'#7c3aed','bold')}
</svg>`},

kats_kontgrenze:{name:'Kontaminationsgrenze',ref:'KatS ABC',cat:'kats_abc',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${l(5,30,85,30,'#7c3aed',4)}
  ${l(14,22,14,38,'#7c3aed',3)}
  ${l(31,22,31,38,'#7c3aed',3)}
  ${l(48,22,48,38,'#7c3aed',3)}
  ${l(65,22,65,38,'#7c3aed',3)}
  ${l(82,22,82,38,'#7c3aed',3)}
  ${t('Kont.Gr.',45,52,9,'#7c3aed','bold')}
</svg>`},

/* ── ZIVILSCHUTZ / BBK ── */
kats_zs:{name:'Zivilschutz (ZS)',ref:'ZSKG / BBK',cat:'kats_zs',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#4b5563')}
  ${t('ZS',45,36,28,'#FFFFFF','bold')}
</svg>`},

kats_bbk:{name:'BBK / Bundesamt Bevölkerungsschutz',ref:'BBK',cat:'kats_zs',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rect('#1d4ed8')}
  ${t('BBK',45,30,18,'#FFFFFF','bold')}
  ${t('Bundesbehörde',45,50,7,'#93c5fd')}
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'kats_fuehr',   label:'KatS – Führung/Stäbe',              color:'#c084fc', official:true},
  {id:'kats_warn',    label:'KatS – Warnung/Alarm (BBK/ISO)',     color:'#fbbf24', official:true},
  {id:'kats_versorgg',label:'KatS – Versorgung/Unterbringung',    color:'#c084fc', official:true},
  {id:'kats_abc',     label:'KatS – ABC/CBRN-Schutz',            color:'#c084fc', official:true},
  {id:'kats_zs',      label:'KatS – Zivilschutz/BBK',            color:'#60a5fa', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });
console.log(`[TZ-Lib] KatS normkonform: ${Object.keys(LIB).length} Zeichen`);
})();
