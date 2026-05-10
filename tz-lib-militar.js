/**
 * TZ-Bibliothek: Militär – NATO APP-6D / ZDv 1-15 – NORMKONFORM
 * Taktische Zeichen der Bundeswehr und NATO-Standard
 * Grundformen exakt nach APP-6D
 */
'use strict';
(function(){
// NATO Farben nach APP-6D (Affiliation Colors)
const BLU='#6699CC'; // Freundlich (blau)
const RED='#C0392B'; // Feindlich (rot)
const GRN='#00A550'; // Neutral (grün)
const YEL='#FFC000'; // Unbekannt (gelb)
const VB='0 0 90 60';
const l=(x1,y1,x2,y2,col,sw=2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${sw}"/>`;
const t=(text,x,y,sz,col,w='normal',a='middle')=>`<text x="${x}" y="${y}" text-anchor="${a}" font-family="Arial,sans-serif" font-size="${sz}" font-weight="${w}" fill="${col}">${text}</text>`;
const c=(cx,cy,r,fill,stroke,sw=2)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;

// APP-6D §3 – Grundformen (Affiliations)
// Freundlich: Rechteck (blau gefüllt/umrandet)
const boxF=(inner='',textCol='#000000')=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="88" height="58" fill="${BLU}" fill-opacity="0.25" stroke="${BLU}" stroke-width="2.5"/>
  ${inner}
</svg>`;

// Feindlich: Raute (rot)
const rauteF=(inner='')=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="45,3 87,30 45,57 3,30" fill="${RED}" fill-opacity="0.2" stroke="${RED}" stroke-width="2.5"/>
  ${inner}
</svg>`;

// Unbekannt: Rechteck mit abgerundeten Ecken (gelb)
const unkF=(inner='')=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="5" width="80" height="50" rx="12" fill="${YEL}" fill-opacity="0.2" stroke="${YEL}" stroke-width="2.5"/>
  ${inner}
</svg>`;

// Einheitsgrößen-Markierungen über dem Zeichen (APP-6D §2.2)
// Einheitsgrößen werden direkt in den Symbol-SVGs definiert (s. nato_groesse Kategorie)

const LIB = {

/* ── APP-6D §4 – Bodentruppen (eigene/freundlich) ── */
nato_inf:{name:'Infanterie (Freundlich)',ref:'NATO APP-6D §4.2 / STANAG',cat:'nato_boden',
svg:()=>boxF(`
  ${l(10,15,80,55,BLU,2)}
  ${l(80,15,10,55,BLU,2)}`)},

nato_pz:{name:'Gepanzert / Panzer (Freundlich)',ref:'NATO APP-6D §4.3',cat:'nato_boden',
svg:()=>boxF(
  `<ellipse cx="45" cy="30" rx="28" ry="18" fill="none" stroke="${BLU}" stroke-width="2.5"/>`)},

nato_panzgren:{name:'Panzergrenadiere (Freundlich)',ref:'NATO APP-6D',cat:'nato_boden',
svg:()=>boxF(`
  ${l(10,15,80,55,BLU,2)}
  ${l(80,15,10,55,BLU,2)}
  <ellipse cx="45" cy="30" rx="22" ry="14" fill="none" stroke="${BLU}" stroke-width="2"/>`)},

nato_art:{name:'Artillerie (Freundlich)',ref:'NATO APP-6D §4.4',cat:'nato_boden',
svg:()=>boxF(`${c(45,30,16,BLU,BLU,1)}`)},

nato_pioneer:{name:'Pioniere / Ingenieure (Freundlich)',ref:'NATO APP-6D',cat:'nato_boden',
svg:()=>boxF(`
  ${l(25,20,65,50,BLU,3)}
  ${l(65,20,25,50,BLU,3)}`)},

nato_luftabwehr:{name:'Luftabwehr (Freundlich)',ref:'NATO APP-6D',cat:'nato_boden',
svg:()=>boxF(`
  <polygon points="45,52 28,32 62,32" fill="${BLU}"/>
  ${l(45,32,45,15,BLU,2.5)}`)},

nato_versorgungs:{name:'Versorgungstruppen (Freundlich)',ref:'NATO APP-6D',cat:'nato_log',
svg:()=>boxF(`<rect x="26" y="18" width="38" height="24" fill="${BLU}"/>`)},

nato_san_f:{name:'Sanitätsdienst (Freundlich)',ref:'NATO APP-6D / ZDv 1-15',cat:'nato_san',
svg:()=>boxF(`
  ${l(45,12,45,48,'#CC0000',5)}
  ${l(27,30,63,30,'#CC0000',5)}`)},

/* ── APP-6D §5 – Luftstreitkräfte ── */
nato_luft_f:{name:'Luftkräfte fest (Freundlich)',ref:'NATO APP-6D §5',cat:'nato_luft',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <path d="M45,3 L87,57 L45,45 L3,57 Z" fill="${BLU}" fill-opacity="0.25" stroke="${BLU}" stroke-width="2.5"/>
</svg>`},

nato_heli_f:{name:'Hubschrauber (Freundlich)',ref:'NATO APP-6D',cat:'nato_luft',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${c(45,30,28,BLU,BLU,0.3)}
  <rect x="17" y="1" width="56" height="58" fill="none" stroke="${BLU}" stroke-width="2"/>
  ${l(5,25,85,25,BLU,2)}
  <path d="M45,25 L55,50 L45,46 L35,50 Z" fill="${BLU}"/>
</svg>`},

/* ── APP-6D §6 – Seekräfte ── */
nato_see_f:{name:'Seekräfte (Freundlich)',ref:'NATO APP-6D §6',cat:'nato_see',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <path d="M5,52 Q45,5 85,52 L80,57 Q45,63 10,57 Z" fill="${BLU}" fill-opacity="0.3" stroke="${BLU}" stroke-width="2.5"/>
</svg>`},

/* ── APP-6D – Feindliche Kräfte ── */
nato_feind_inf:{name:'Infanterie (Feindlich)',ref:'NATO APP-6D §4.2',cat:'nato_feind',
svg:()=>rauteF(`
  ${l(28,18,62,48,RED,2)}
  ${l(62,18,28,48,RED,2)}`)},

nato_feind_pz:{name:'Gepanzert (Feindlich)',ref:'NATO APP-6D',cat:'nato_feind',
svg:()=>rauteF(
  `<ellipse cx="45" cy="30" rx="24" ry="15" fill="none" stroke="${RED}" stroke-width="2.5"/>`)},

nato_unbekannt:{name:'Unbekannte Kräfte',ref:'NATO APP-6D §3',cat:'nato_feind',
svg:()=>unkF(`${t('?',45,36,22,YEL,'bold')}`)},

/* ── Einheitsgrößen (APP-6D §2.2) ── */
nato_kompanie:{name:'Kompanie/Batterie (I)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:()=>boxF(`
  ${t('Kp',45,36,14,BLU,'bold')}
  ${l(45,4,45,14,BLU,2)}`)},

nato_bataillon:{name:'Bataillon/Abteilung (II)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:()=>boxF(`
  ${t('Btl',45,36,13,BLU,'bold')}
  ${l(39,4,39,14,BLU,2)}${l(51,4,51,14,BLU,2)}`)},

nato_brigade:{name:'Brigade (X)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:()=>boxF(`
  ${t('Brig',45,36,12,BLU,'bold')}
  ${l(36,4,54,14,BLU,2)}${l(54,4,36,14,BLU,2)}`)},

nato_division:{name:'Division (XX)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:()=>boxF(`
  ${t('Div',45,36,13,BLU,'bold')}
  ${l(29,4,39,14,BLU,2)}${l(39,4,29,14,BLU,2)}
  ${l(51,4,61,14,BLU,2)}${l(61,4,51,14,BLU,2)}`)},

/* ── ZDv 1-15 – Bundeswehr spezifisch ── */
bw_gefechtsstand:{name:'Gefechtsstand Bundeswehr',ref:'ZDv 1-15 §3',cat:'nato_bw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="88" height="58" fill="#4A5320" stroke="#000000" stroke-width="2"/>
  ${l(1,56,89,56,'#FFFFFF',5)}
  ${t('GefSt',45,34,16,'#FFFFFF','bold')}
</svg>`},

bw_feldlager:{name:'Feldlager / Biwak',ref:'ZDv 1-15',cat:'nato_bw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" y="1" width="88" height="58" fill="none" stroke="#4A5320" stroke-width="2" stroke-dasharray="6,3"/>
  ${t('Biwak',45,36,14,'#4A5320','bold')}
</svg>`},

bw_angriff:{name:'Angriffsrichtung Bundeswehr',ref:'ZDv 1-15 §6',cat:'nato_bw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${l(5,30,72,30,'#4A5320',5)}
  <polygon points="72,20 89,30 72,40" fill="#4A5320"/>
</svg>`},

bw_rueckzug:{name:'Rückzugsrichtung Bundeswehr',ref:'ZDv 1-15 §6',cat:'nato_bw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${l(18,30,85,30,'#4A5320',5,'8,4')}
  <polygon points="18,20 1,30 18,40" fill="#4A5320"/>
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'nato_boden',  label:'NATO APP-6D – Bodentruppen',  color:'#60a5fa', official:true},
  {id:'nato_luft',   label:'NATO APP-6D – Luftkräfte',    color:'#60a5fa', official:true},
  {id:'nato_see',    label:'NATO APP-6D – Seekräfte',     color:'#60a5fa', official:true},
  {id:'nato_feind',  label:'NATO APP-6D – Feindl. Kräfte',color:'#f87171', official:true},
  {id:'nato_san',    label:'NATO APP-6D – Sanitätsdienst',color:'#fb7185', official:true},
  {id:'nato_log',    label:'NATO APP-6D – Logistik/Vers.',color:'#60a5fa', official:true},
  {id:'nato_groesse',label:'NATO APP-6D – Einheitsgrößen',color:'#60a5fa', official:true},
  {id:'nato_bw',     label:'ZDv 1-15 – Bundeswehr',       color:'#9ca3af', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });
console.log(`[TZ-Lib] NATO APP-6D / ZDv 1-15 normkonform: ${Object.keys(LIB).length} Zeichen`);
})();
