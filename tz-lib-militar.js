/**
 * TZ-Bibliothek: Militär – NATO APP-6D / ZDv 1-15
 * Taktische Zeichen der Bundeswehr und NATO
 * Enthält: Truppengattungen, Einheitsgrößen, Führungsmittel,
 *          Fahrzeuge, Waffen, logistische Zeichen
 */
'use strict';
(function(){
// NATO Farben nach APP-6D
const NATO = {
  FREUND: '#004b8d',   // blau – eigene Kräfte
  FEIND:  '#c8102e',   // rot  – feindliche Kräfte
  UNBEK:  '#ffc000',   // gelb – unbekannt
  NEUT:   '#00a550',   // grün – neutral
  ZIVIL:  '#a349a4',   // lila – zivil
};
const BW_F = '#4b5563';  // Bundeswehr grau/olive
const BW_S = '#ffffff';

const LIB = {

/* ══════════════════════════════════════════
   NATO APP-6D – GRUNDFORMEN (Affiliations)
══════════════════════════════════════════ */
nato_freund_inf:{name:'Infanterie (eigene Kräfte)',ref:'NATO APP-6D §4.2',cat:'nato_boden',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="80" height="50" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <line x1="10" y1="15" x2="90" y2="65" stroke="${NATO.FREUND}" stroke-width="2"/>
  <line x1="10" y1="65" x2="90" y2="15" stroke="${NATO.FREUND}" stroke-width="2"/>
</svg>`},

nato_freund_pz:{name:'Panzer / Gepanzert (eigene)',ref:'NATO APP-6D §4.3',cat:'nato_boden',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="80" height="50" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <ellipse cx="50" cy="40" rx="28" ry="18" fill="none" stroke="${NATO.FREUND}" stroke-width="2.5"/>
</svg>`},

nato_freund_art:{name:'Artillerie (eigene)',ref:'NATO APP-6D §4.4',cat:'nato_boden',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="80" height="50" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <circle cx="50" cy="40" r="16" fill="${NATO.FREUND}"/>
</svg>`},

nato_freund_panzgren:{name:'Panzergrenadiere (eigene)',ref:'NATO APP-6D',cat:'nato_boden',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="80" height="50" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <line x1="10" y1="15" x2="90" y2="65" stroke="${NATO.FREUND}" stroke-width="2"/>
  <line x1="10" y1="65" x2="90" y2="15" stroke="${NATO.FREUND}" stroke-width="2"/>
  <ellipse cx="50" cy="40" rx="20" ry="13" fill="none" stroke="${NATO.FREUND}" stroke-width="2"/>
</svg>`},

nato_freund_pioneer:{name:'Pioniere (eigene)',ref:'NATO APP-6D',cat:'nato_boden',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="80" height="50" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <line x1="28" y1="26" x2="72" y2="54" stroke="${NATO.FREUND}" stroke-width="3"/>
  <line x1="28" y1="54" x2="72" y2="26" stroke="${NATO.FREUND}" stroke-width="3"/>
</svg>`},

nato_freund_luftabwehr:{name:'Luftabwehr (eigene)',ref:'NATO APP-6D',cat:'nato_boden',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="80" height="50" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <path d="M50 60 L30 40 L70 40 Z" fill="${NATO.FREUND}"/>
  <line x1="50" y1="40" x2="50" y2="20" stroke="${NATO.FREUND}" stroke-width="2.5"/>
</svg>`},

nato_freund_log:{name:'Logistik (eigene)',ref:'NATO APP-6D',cat:'nato_log',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="80" height="50" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <rect x="30" y="30" width="40" height="22" fill="${NATO.FREUND}"/>
</svg>`},

nato_freund_nachschub:{name:'Nachschub (eigene)',ref:'NATO APP-6D',cat:'nato_log',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="80" height="50" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <circle cx="50" cy="40" r="12" fill="none" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <line x1="50" y1="28" x2="50" y2="52" stroke="${NATO.FREUND}" stroke-width="2"/>
  <line x1="38" y1="40" x2="62" y2="40" stroke="${NATO.FREUND}" stroke-width="2"/>
</svg>`},

nato_freund_san:{name:'Sanitätsdienst Bw (eigene)',ref:'NATO APP-6D / ZDv 1-15',cat:'nato_san',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="15" width="80" height="50" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <line x1="50" y1="22" x2="50" y2="58" stroke="#dc2626" stroke-width="5"/>
  <line x1="30" y1="40" x2="70" y2="40" stroke="#dc2626" stroke-width="5"/>
</svg>`},

nato_freund_luft:{name:'Luftkräfte (eigene)',ref:'NATO APP-6D §5',cat:'nato_luft',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 10 L90 70 L50 55 L10 70 Z" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
</svg>`},

nato_freund_heli:{name:'Hubschrauber (eigene)',ref:'NATO APP-6D',cat:'nato_luft',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="40" r="32" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <line x1="10" y1="30" x2="90" y2="30" stroke="${NATO.FREUND}" stroke-width="2.5"/>
  <path d="M50 30 L64 55 L50 50 L36 55 Z" fill="${NATO.FREUND}"/>
</svg>`},

nato_freund_see:{name:'Seekräfte (eigene)',ref:'NATO APP-6D §6',cat:'nato_see',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 60 Q50 20 90 60 L85 70 Q50 75 15 70 Z" fill="#cce5ff" stroke="${NATO.FREUND}" stroke-width="2.5"/>
</svg>`},

/* ── Feindliche Kräfte ── */
nato_feind_inf:{name:'Infanterie (feindlich)',ref:'NATO APP-6D §4.2',cat:'nato_feind',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 92,40 50,72 8,40" fill="#ffd0d0" stroke="${NATO.FEIND}" stroke-width="2.5"/>
  <line x1="30" y1="25" x2="70" y2="55" stroke="${NATO.FEIND}" stroke-width="2"/>
  <line x1="30" y1="55" x2="70" y2="25" stroke="${NATO.FEIND}" stroke-width="2"/>
</svg>`},

nato_feind_pz:{name:'Panzer (feindlich)',ref:'NATO APP-6D',cat:'nato_feind',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 92,40 50,72 8,40" fill="#ffd0d0" stroke="${NATO.FEIND}" stroke-width="2.5"/>
  <ellipse cx="50" cy="40" rx="24" ry="15" fill="none" stroke="${NATO.FEIND}" stroke-width="2"/>
</svg>`},

nato_unbekannt:{name:'Unbekannte Kräfte',ref:'NATO APP-6D §3',cat:'nato_feind',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="80" height="60" rx="30" fill="#fff9c4" stroke="${NATO.UNBEK}" stroke-width="2.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="22" font-weight="bold" fill="${NATO.UNBEK}" font-family="Arial">?</text>
</svg>`},

/* ── Einheitsgrößen (Größenangaben) ── */
nato_team:{name:'Trupp / Team (●)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="80" height="44" fill="${NATO.FREUND}" stroke="${NATO.FREUND}" stroke-width="1.5"/>
  <circle cx="50" cy="10" r="6" fill="${NATO.FREUND}"/>
  <text x="50" y="48" text-anchor="middle" font-size="12" fill="#ffffff" font-family="Arial">Trupp</text>
</svg>`},

nato_squad:{name:'Gruppe / Squad (●●)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="80" height="44" fill="${NATO.FREUND}" stroke="${NATO.FREUND}" stroke-width="1.5"/>
  <circle cx="43" cy="10" r="6" fill="${NATO.FREUND}"/>
  <circle cx="57" cy="10" r="6" fill="${NATO.FREUND}"/>
  <text x="50" y="48" text-anchor="middle" font-size="12" fill="#ffffff" font-family="Arial">Gruppe</text>
</svg>`},

nato_platoon:{name:'Zug / Platoon (●●●)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="80" height="44" fill="${NATO.FREUND}" stroke="${NATO.FREUND}" stroke-width="1.5"/>
  <circle cx="37" cy="10" r="5" fill="${NATO.FREUND}"/>
  <circle cx="50" cy="10" r="5" fill="${NATO.FREUND}"/>
  <circle cx="63" cy="10" r="5" fill="${NATO.FREUND}"/>
  <text x="50" y="48" text-anchor="middle" font-size="14" fill="#ffffff" font-family="Arial">Zug</text>
</svg>`},

nato_kompanie:{name:'Kompanie / Batterie (I)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="80" height="44" fill="${NATO.FREUND}" stroke="${NATO.FREUND}" stroke-width="1.5"/>
  <line x1="50" y1="4" x2="50" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <text x="50" y="48" text-anchor="middle" font-size="12" fill="#ffffff" font-family="Arial">Kp/Bttr</text>
</svg>`},

nato_bataillon:{name:'Bataillon / Abteilung (II)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="80" height="44" fill="${NATO.FREUND}" stroke="${NATO.FREUND}" stroke-width="1.5"/>
  <line x1="43" y1="4" x2="43" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <line x1="57" y1="4" x2="57" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <text x="50" y="48" text-anchor="middle" font-size="12" fill="#ffffff" font-family="Arial">Btl/Abt</text>
</svg>`},

nato_regiment:{name:'Regiment (III)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="80" height="44" fill="${NATO.FREUND}" stroke="${NATO.FREUND}" stroke-width="1.5"/>
  <line x1="36" y1="4" x2="36" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <line x1="50" y1="4" x2="50" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <line x1="64" y1="4" x2="64" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <text x="50" y="48" text-anchor="middle" font-size="12" fill="#ffffff" font-family="Arial">Rgt</text>
</svg>`},

nato_brigade:{name:'Brigade (X)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="80" height="44" fill="${NATO.FREUND}" stroke="${NATO.FREUND}" stroke-width="1.5"/>
  <line x1="50" y1="4" x2="37" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <line x1="50" y1="4" x2="63" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <text x="50" y="48" text-anchor="middle" font-size="12" fill="#ffffff" font-family="Arial">Brig</text>
</svg>`},

nato_division:{name:'Division (XX)',ref:'NATO APP-6D §2.2',cat:'nato_groesse',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="20" width="80" height="44" fill="${NATO.FREUND}" stroke="${NATO.FREUND}" stroke-width="1.5"/>
  <line x1="38" y1="4" x2="29" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <line x1="38" y1="4" x2="47" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <line x1="62" y1="4" x2="53" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <line x1="62" y1="4" x2="71" y2="20" stroke="${NATO.FREUND}" stroke-width="3"/>
  <text x="50" y="48" text-anchor="middle" font-size="14" fill="#ffffff" font-family="Arial">Div</text>
</svg>`},

/* ── Bundeswehr Spezial ── */
bw_gefechtsstand:{name:'Gefechtsstand Bundeswehr',ref:'ZDv 1-15 §3',cat:'nato_bw',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${BW_F}" stroke="#374151" stroke-width="2"/>
  <line x1="8" y1="65" x2="92" y2="65" stroke="#d1d5db" stroke-width="5"/>
  <text x="50" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="${BW_S}" font-family="Arial">GefSt</text>
</svg>`},

bw_feldlager:{name:'Feldlager / Biwak',ref:'ZDv 1-15',cat:'nato_bw',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${BW_F}" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="50" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${BW_F}" font-family="Arial">Biwak</text>
</svg>`},

bw_versorgungszone:{name:'Versorgungszone Bw',ref:'ZDv 1-15',cat:'nato_log',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${BW_F}" stroke-width="2.5"/>
  <text x="50" y="38" text-anchor="middle" font-size="12" fill="${BW_F}" font-family="Arial">Vers</text>
  <text x="50" y="56" text-anchor="middle" font-size="12" fill="${BW_F}" font-family="Arial">Zone</text>
</svg>`},

bw_mze:{name:'Munitionsversorgungselement',ref:'ZDv 1-15',cat:'nato_log',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${BW_F}" stroke="#374151" stroke-width="1.5"/>
  <ellipse cx="38" cy="40" rx="12" ry="20" fill="none" stroke="${BW_S}" stroke-width="2"/>
  <line x1="38" y1="20" x2="38" y2="16" stroke="${BW_S}" stroke-width="2"/>
  <text x="70" y="46" text-anchor="middle" font-size="10" fill="${BW_S}" font-family="Arial">Mun</text>
</svg>`},

bw_einsatzgrundsatz:{name:'Verteidigungsstellung',ref:'ZDv 1-15',cat:'nato_bw',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 65 L30 30 L50 50 L70 20 L90 45 L90 65 Z" fill="rgba(75,85,99,0.2)" stroke="${BW_F}" stroke-width="2.5"/>
</svg>`},

bw_angriff_pfeil:{name:'Angriffsrichtung',ref:'ZDv 1-15 §6',cat:'nato_bw',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="40" x2="75" y2="40" stroke="${BW_F}" stroke-width="5"/>
  <polygon points="75,28 92,40 75,52" fill="${BW_F}"/>
</svg>`},

bw_rueckzug_pfeil:{name:'Rückzugsrichtung',ref:'ZDv 1-15 §6',cat:'nato_bw',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <line x1="25" y1="40" x2="90" y2="40" stroke="${BW_F}" stroke-width="5" stroke-dasharray="8,4"/>
  <polygon points="25,28 8,40 25,52" fill="${BW_F}"/>
</svg>`},

};

Object.assign(window.SYM, LIB);

const newCats = [
  {id:'nato_boden',  label:'NATO APP-6D – Bodentruppen',  color:'#60a5fa', official:true},
  {id:'nato_luft',   label:'NATO APP-6D – Luftkräfte',    color:'#60a5fa', official:true},
  {id:'nato_see',    label:'NATO APP-6D – Seekräfte',     color:'#60a5fa', official:true},
  {id:'nato_feind',  label:'NATO APP-6D – Feindl. Kräfte',color:'#f87171', official:true},
  {id:'nato_san',    label:'NATO APP-6D – Sanitätsdienst',color:'#fb7185', official:true},
  {id:'nato_log',    label:'NATO APP-6D – Logistik',      color:'#60a5fa', official:true},
  {id:'nato_groesse',label:'NATO APP-6D – Einheitsgrößen',color:'#60a5fa', official:true},
  {id:'nato_bw',     label:'ZDv 1-15 – Bundeswehr',       color:'#9ca3af', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });

console.log(`[TZ-Lib] Militär NATO / Bundeswehr geladen: ${Object.keys(LIB).length} Zeichen`);
})();
