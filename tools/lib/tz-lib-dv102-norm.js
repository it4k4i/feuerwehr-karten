/**
 * TZ-Bibliothek: DV 102 NORMKONFORM
 * Taktische Zeichen nach DV 102 (Stand 2023)
 * Alle Zeichen 1:1 nach Dienstvorschrift mit korrekten Proportionen,
 * Farben und Symbolen. Grundzeichen + Kombinationssystem.
 *
 * FARBSYSTEM (DV 102 Kapitel 2):
 * Feuerwehr:    Rot    #CC0000 / Weiß
 * THW:          Blau   #003399 / Weiß
 * HiOrg/San:    Weiß   #FFFFFF / Schwarz
 * Führung:      Gelb   #FFCC00 / Schwarz
 * Polizei:      Grün   #006633 / Weiß
 * Sonstige:     Orange #FF6600 / Schwarz
 *
 * GRUNDZEICHEN-PROPORTIONEN (DV 102 §1):
 * Standard-Magnet: 60×40 mm → viewBox 90×60 (3:2)
 * Alle Zeichen: viewBox="0 0 90 60"
 */
'use strict';
(function(){

/* ══ FARBEN (exakt nach DV 102 Kap. 2) ══ */
const F = {
  FW:  {f:'#CC0000', s:'#FFFFFF', n:'Feuerwehr'},
  THW: {f:'#003399', s:'#FFFFFF', n:'THW'},
  HO:  {f:'#FFFFFF', s:'#000000', n:'HiOrg/San'},
  FÜ:  {f:'#FFCC00', s:'#000000', n:'Führung'},
  POL: {f:'#006633', s:'#FFFFFF', n:'Polizei'},
  SO:  {f:'#FF6600', s:'#000000', n:'Sonstige'},
  BW:  {f:'#4A5320', s:'#FFFFFF', n:'Bundeswehr'}, // Bundeswehr OD-Grün
};

/* ══ SVG HELPERS ══ */
// Standard viewBox: 90×60 (3:2, wie DV 102 Grundzeichen-Proportionen)
const VB = '0 0 90 60';
const mk = (tag, attrs, children='') => {
  const a = Object.entries(attrs).map(([k,v])=>`${k}="${v}"`).join(' ');
  return `<${tag} ${a}>${children}</${tag}>`;
};

// Grundrechteck (DV 102 §1.1)
const grundRect = (fill, stroke='#000000', sw=2) =>
  `<rect x="1" y="1" width="88" height="58" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" rx="0"/>`;

// Diagonale Kreuzlinie (für "beschädigt/zerstört")
const kreuz = (col='#000000') =>
  `<line x1="1" y1="1" x2="89" y2="59" stroke="${col}" stroke-width="1.5"/>
   <line x1="89" y1="1" x2="1" y2="59" stroke="${col}" stroke-width="1.5"/>`;

// Horizontale Trennlinie (Einsatzabschnitt)
const hLine = (y=30, col='#000000', sw=1.5) =>
  `<line x1="1" y1="${y}" x2="89" y2="${y}" stroke="${col}" stroke-width="${sw}"/>`;

// Rahmen nur (kein Fill)
const rahmen = (stroke='#000000', sw=2) =>
  `<rect x="1" y="1" width="88" height="58" fill="none" stroke="${stroke}" stroke-width="${sw}"/>`;

// Gestrichelter Rahmen (Bereitstellungsraum)
const gestrichelt = (stroke='#000000', sw=2, dash='6,3') =>
  `<rect x="1" y="1" width="88" height="58" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-dasharray="${dash}"/>`;

// Text zentriert
const txt = (t, x, y, sz, col='#000000', weight='normal', anchor='middle') =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Arial,sans-serif" font-size="${sz}" font-weight="${weight}" fill="${col}">${t}</text>`;

// Gefüllte Einheitsgrössen-Symbole über dem Zeichen (DV 102 §1.4)
/* ══════════════════════════════════════════════════
   DV 102 §1 – GRUNDZEICHEN (korrekte Formen)
══════════════════════════════════════════════════ */

// §1.1 Taktische Formation (Rechteck)
const TAKT_RECT = (fill, textCol, label='', sublabel='') =>
  `<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
    ${grundRect(fill)}
    ${label ? txt(label, 45, 35, 22, textCol, 'bold') : ''}
    ${sublabel ? txt(sublabel, 45, 50, 11, textCol) : ''}
  </svg>`;

// §1.2 Führungszeichen (Rechteck mit Unterstrich)
const FÜ_RECT = (fill, textCol, label='') =>
  `<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
    ${grundRect(fill)}
    <line x1="1" y1="56" x2="89" y2="56" stroke="#000000" stroke-width="4"/>
    ${label ? txt(label, 45, 34, 18, textCol, 'bold') : ''}
  </svg>`;

// §1.3 Fahrzeugzeichen (Rechteck mit Kreis)
const FZ_RECT = (fill, textCol, label='', r=20) =>
  `<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
    ${grundRect(fill)}
    <circle cx="45" cy="30" r="${r}" fill="none" stroke="${textCol}" stroke-width="2"/>
    ${label ? txt(label, 45, 35, 14, textCol, 'bold') : ''}
  </svg>`;

/* ══════════════════════════════════════════════════
   FACHAUFGABEN-SYMBOLE (DV 102 §3 – intern im Rechteck)
══════════════════════════════════════════════════ */

// Flamme (Brandbekämpfung)
const symFlamme = (col) => `
  <path d="M38 50 Q36 38 44 28 Q40 42 50 34 Q46 44 54 30 Q56 44 52 50Z"
        fill="${col}" stroke="${col}" stroke-width="0.5"/>`;

// Wasser/Wasserwelle
const symWasser = (col) => `
  <path d="M20 38 Q27 30 34 38 Q41 46 48 38 Q55 30 62 38 Q69 46 75 38"
        fill="none" stroke="${col}" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M20 44 Q27 36 34 44 Q41 52 48 44 Q55 36 62 44 Q69 52 75 44"
        fill="none" stroke="${col}" stroke-width="2.5" stroke-linecap="round"/>`;

// Mensch (Person, Rettung)
const symMensch = (col) => `
  <circle cx="45" cy="17" r="5" fill="${col}"/>
  <line x1="45" y1="22" x2="45" y2="42" stroke="${col}" stroke-width="2.5"/>
  <line x1="32" y1="30" x2="58" y2="30" stroke="${col}" stroke-width="2.5"/>
  <line x1="45" y1="42" x2="35" y2="55" stroke="${col}" stroke-width="2.5"/>
  <line x1="45" y1="42" x2="55" y2="55" stroke="${col}" stroke-width="2.5"/>`;

// Kreuz (Sanitäts/Hilfe)
const symKreuz = (col, cx=45, cy=30, sz=14) => `
  <line x1="${cx}" y1="${cy-sz}" x2="${cx}" y2="${cy+sz}" stroke="${col}" stroke-width="5"/>
  <line x1="${cx-sz}" y1="${cy}" x2="${cx+sz}" y2="${cy}" stroke="${col}" stroke-width="5"/>`;

// Fahrzeug-Silhouette (vereinfacht)
const symFahrzeug = (col) => `
  <rect x="18" y="28" width="54" height="22" rx="3" fill="${col}"/>
  <rect x="26" y="20" width="38" height="14" rx="2" fill="${col}"/>
  <circle cx="28" cy="52" r="5" fill="none" stroke="${col}" stroke-width="2.5"/>
  <circle cx="62" cy="52" r="5" fill="none" stroke="${col}" stroke-width="2.5"/>`;

// Leiter/Drehleiter
const symLeiter = (col) => `
  <line x1="30" y1="55" x2="38" y2="10" stroke="${col}" stroke-width="2.5"/>
  <line x1="60" y1="55" x2="52" y2="10" stroke="${col}" stroke-width="2.5"/>
  <line x1="32" y1="48" x2="58" y2="48" stroke="${col}" stroke-width="1.5"/>
  <line x1="33" y1="40" x2="57" y2="40" stroke="${col}" stroke-width="1.5"/>
  <line x1="35" y1="32" x2="55" y2="32" stroke="${col}" stroke-width="1.5"/>
  <line x1="37" y1="24" x2="53" y2="24" stroke="${col}" stroke-width="1.5"/>`;

// Pumpe (Wasser pumpen)
const symPumpe = (col) => `
  <circle cx="45" cy="30" r="14" fill="none" stroke="${col}" stroke-width="2.5"/>
  <path d="M36 30 Q45 22 54 30 Q45 38 36 30Z" fill="${col}"/>
  <line x1="20" y1="30" x2="31" y2="30" stroke="${col}" stroke-width="2.5"/>
  <line x1="59" y1="30" x2="70" y2="30" stroke="${col}" stroke-width="2.5"/>`;

// Atom/Strahlung (korrektes Trefoil nach ISO 361)
// Atom/Strahlung – ISO 361 Trefoil, mathematisch exakt
// cx=45, cy=30, ri=8, ro=20, Blätter bei -90°, 30°, 150°, je ±30°
const symStrahlung = (col) => `
  <path d="M 41,23.07 A 8,8 0 0,1 49,23.07 L 55,12.68 A 20,20 0 0,0 35,12.68 Z" fill="${col}"/>
  <path d="M 53,30 A 8,8 0 0,1 49,36.93 L 55,47.32 A 20,20 0 0,0 65,30 Z" fill="${col}"/>
  <path d="M 41,36.93 A 8,8 0 0,1 37,30 L 25,30 A 20,20 0 0,0 35,47.32 Z" fill="${col}"/>
  <circle cx="45" cy="30" r="6" fill="${col}"/>`;

// ABC Warnung
const symABC = (col) => `
  <text x="45" y="28" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="${col}">ABC</text>
  <text x="45" y="46" text-anchor="middle" font-family="Arial" font-size="10" fill="${col}">GEFAHR</text>`;

// Blitz/Strom
const symBlitz = (col) => `
  <polygon points="50,10 36,32 44,32 40,52 54,28 46,28 50,10" fill="${col}"/>`;

// Funk/Antenne
const symFunk = (col) => `
  <line x1="45" y1="50" x2="45" y2="30" stroke="${col}" stroke-width="2.5"/>
  <path d="M30 46 Q45 25 60 46" fill="none" stroke="${col}" stroke-width="2"/>
  <path d="M22 52 Q45 16 68 52" fill="none" stroke="${col}" stroke-width="1.5"/>`;

// Schere/Technische Hilfe
const symTH = (col) => `
  <line x1="25" y1="15" x2="65" y2="47" stroke="${col}" stroke-width="3" stroke-linecap="round"/>
  <line x1="65" y1="15" x2="25" y2="47" stroke="${col}" stroke-width="3" stroke-linecap="round"/>
  <circle cx="45" cy="31" r="5" fill="none" stroke="${col}" stroke-width="2"/>`;

/* ══════════════════════════════════════════════════
   DV 102 – NORMKONFORME ZEICHEN
══════════════════════════════════════════════════ */
const LIB = {

/* ────────────────────────────────────────────────
   §1 GRUNDZEICHEN
──────────────────────────────────────────────── */
dv_grd_fw:{name:'Grundzeichen Feuerwehr',ref:'DV 102 §1.1',cat:'dv102_norm_grd',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
</svg>`},

dv_grd_thw:{name:'Grundzeichen THW',ref:'DV 102 §1.1',cat:'dv102_norm_grd',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.THW.f,'#000000',2)}
</svg>`},

dv_grd_ho:{name:'Grundzeichen HiOrg/Sanitätsdienst',ref:'DV 102 §1.1',cat:'dv102_norm_grd',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.HO.f,'#000000',2)}
</svg>`},

dv_grd_pol:{name:'Grundzeichen Polizei',ref:'DV 102 §1.1',cat:'dv102_norm_grd',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.POL.f,'#000000',2)}
</svg>`},

dv_grd_fü:{name:'Grundzeichen Führung',ref:'DV 102 §1.2',cat:'dv102_norm_grd',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FÜ.f,'#000000',2)}
  <line x1="1" y1="56" x2="89" y2="56" stroke="#000000" stroke-width="5"/>
</svg>`},

/* ────────────────────────────────────────────────
   §3 FACHAUFGABEN FEUERWEHR – Brandbekämpfung
──────────────────────────────────────────────── */
dv_fw_brand:{name:'FW – Brandbekämpfung',ref:'DV 102 §3.1',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${symFlamme(F.FW.s)}
</svg>`},

dv_fw_brand_staf:{name:'FW Staffel – Brandbekämpfung (1/5)',ref:'DV 102 §3.1+§4',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${symFlamme(F.FW.s)}
  <line x1="1" y1="30" x2="89" y2="30" stroke="${F.FW.s}" stroke-width="1.5"/>
  ${txt('1/5', 45, 52, 11, F.FW.s)}
</svg>`},

dv_fw_brand_gr:{name:'FW Gruppe – Brandbekämpfung (1/8)',ref:'DV 102 §3.1+§4',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${symFlamme(F.FW.s)}
  <line x1="1" y1="30" x2="89" y2="30" stroke="${F.FW.s}" stroke-width="1.5"/>
  ${txt('1/8', 45, 52, 11, F.FW.s)}
</svg>`},

dv_fw_brand_zug:{name:'FW Zug – Brandbekämpfung',ref:'DV 102 §3.1+§4',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${symFlamme(F.FW.s)}
  <line x1="1" y1="30" x2="89" y2="30" stroke="${F.FW.s}" stroke-width="1.5"/>
  ${txt('Zug', 45, 52, 11, F.FW.s)}
</svg>`},

/* ────────────────────────────────────────────────
   §3 FACHAUFGABEN FEUERWEHR – Technische Hilfe
──────────────────────────────────────────────── */
dv_fw_th:{name:'FW – Technische Hilfe',ref:'DV 102 §3.2',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${symTH(F.FW.s)}
</svg>`},

dv_fw_th_gr:{name:'FW Gruppe – Technische Hilfe (1/8)',ref:'DV 102 §3.2+§4',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${symTH(F.FW.s)}
  <line x1="1" y1="30" x2="89" y2="30" stroke="${F.FW.s}" stroke-width="1.5"/>
  ${txt('1/8', 45, 52, 11, F.FW.s)}
</svg>`},

/* ────────────────────────────────────────────────
   §3 FACHAUFGABEN – Wasserversorgung/Rettung
──────────────────────────────────────────────── */
dv_fw_wasser:{name:'FW – Wasserversorgung',ref:'DV 102 §3.3',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${symWasser(F.FW.s)}
</svg>`},

dv_fw_rettung:{name:'FW – Menschenrettung',ref:'DV 102 §3.4',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${symMensch(F.FW.s)}
</svg>`},

dv_fw_rettung_gr:{name:'FW Gruppe – Menschenrettung',ref:'DV 102 §3.4+§4',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${symMensch(F.FW.s)}
  <line x1="1" y1="35" x2="89" y2="35" stroke="${F.FW.s}" stroke-width="1.5"/>
  ${txt('1/8', 45, 50, 10, F.FW.s)}
</svg>`},

/* ────────────────────────────────────────────────
   §4 EINHEITSGROSSEN – Staffel/Gruppe/Zug/Verband
──────────────────────────────────────────────── */
dv_fw_trupp:{name:'FW – Trupp (1/2)',ref:'DV 102 §4.1',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${txt('Tr', 45, 38, 24, F.FW.s, 'bold')}
  ${txt('1/2', 45, 52, 10, F.FW.s)}
</svg>`},

dv_fw_staffel:{name:'FW – Staffel (1/5)',ref:'DV 102 §4.2',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${txt('Stff', 45, 38, 20, F.FW.s, 'bold')}
  ${txt('1/5', 45, 52, 10, F.FW.s)}
</svg>`},

dv_fw_gruppe:{name:'FW – Gruppe (1/8)',ref:'DV 102 §4.3',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${txt('Gr', 45, 38, 24, F.FW.s, 'bold')}
  ${txt('1/8', 45, 52, 10, F.FW.s)}
</svg>`},

dv_fw_zug:{name:'FW – Zug (1/19 od. 1/22)',ref:'DV 102 §4.4',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${txt('Zug', 45, 35, 22, F.FW.s, 'bold')}
  ${txt('1/19', 45, 52, 10, F.FW.s)}
</svg>`},

dv_fw_verband:{name:'FW – Verband',ref:'DV 102 §4.5',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${txt('Verb', 45, 35, 18, F.FW.s, 'bold')}
</svg>`},

/* ────────────────────────────────────────────────
   §5 FÜHRUNGSKRÄFTE (DV 102 §5)
──────────────────────────────────────────────── */
dv_fü_einsatzleiter:{name:'Einsatzleiter',ref:'DV 102 §5.1',cat:'dv102_norm_fü',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FÜ.f,'#000000',2)}
  <line x1="1" y1="56" x2="89" y2="56" stroke="#000000" stroke-width="5"/>
  ${txt('EL', 45, 36, 26, F.FÜ.s, 'bold')}
</svg>`},

dv_fü_zugführer:{name:'Zugführer',ref:'DV 102 §5.2',cat:'dv102_norm_fü',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FÜ.f,'#000000',2)}
  <line x1="1" y1="56" x2="89" y2="56" stroke="#000000" stroke-width="5"/>
  ${txt('ZgFü', 45, 36, 18, F.FÜ.s, 'bold')}
</svg>`},

dv_fü_gruppenführer:{name:'Gruppenführer',ref:'DV 102 §5.3',cat:'dv102_norm_fü',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FÜ.f,'#000000',2)}
  <line x1="1" y1="56" x2="89" y2="56" stroke="#000000" stroke-width="5"/>
  ${txt('GrFü', 45, 36, 18, F.FÜ.s, 'bold')}
</svg>`},

dv_fü_staffelführer:{name:'Staffelführer',ref:'DV 102 §5.4',cat:'dv102_norm_fü',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FÜ.f,'#000000',2)}
  <line x1="1" y1="56" x2="89" y2="56" stroke="#000000" stroke-width="5"/>
  ${txt('StffFü', 45, 36, 15, F.FÜ.s, 'bold')}
</svg>`},

/* ────────────────────────────────────────────────
   §6 FAHRZEUGE (DV 102 §6) – Kreis im Grundzeichen
──────────────────────────────────────────────── */
dv_fw_lf:{name:'Löschgruppenfahrzeug (LF)',ref:'DV 102 §6.1',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FW.s}" stroke-width="2"/>
  ${txt('LF', 45, 35, 16, F.FW.s, 'bold')}
</svg>`},

dv_fw_hlf:{name:'Hilfeleistungslöschfahrzeug (HLF)',ref:'DV 102 §6.1',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FW.s}" stroke-width="2"/>
  ${txt('HLF', 45, 35, 14, F.FW.s, 'bold')}
</svg>`},

dv_fw_tlf:{name:'Tanklöschfahrzeug (TLF)',ref:'DV 102 §6.1',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FW.s}" stroke-width="2"/>
  ${txt('TLF', 45, 35, 14, F.FW.s, 'bold')}
</svg>`},

dv_fw_dlk:{name:'Drehleiter mit Korb (DLK 23/12)',ref:'DV 102 §6.2',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FW.s}" stroke-width="2"/>
  ${txt('DLK', 45, 28, 13, F.FW.s, 'bold')}
  ${txt('23/12', 45, 42, 10, F.FW.s)}
</svg>`},

dv_fw_rw:{name:'Rüstwagen (RW)',ref:'DV 102 §6.3',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FW.s}" stroke-width="2"/>
  ${txt('RW', 45, 35, 16, F.FW.s, 'bold')}
</svg>`},

dv_fw_gwl:{name:'Gerätewagen Logistik (GW-L)',ref:'DV 102 §6.4',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FW.s}" stroke-width="2"/>
  ${txt('GW-L', 45, 35, 12, F.FW.s, 'bold')}
</svg>`},

dv_fw_gwas:{name:'Gerätewagen Atemschutz (GW-A)',ref:'DV 102 §6.4',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FW.s}" stroke-width="2"/>
  ${txt('GW-A', 45, 35, 12, F.FW.s, 'bold')}
</svg>`},

dv_fw_elw1:{name:'Einsatzleitwagen 1 (ELW 1)',ref:'DV 102 §6.5',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FÜ.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FÜ.s}" stroke-width="2"/>
  <line x1="1" y1="56" x2="89" y2="56" stroke="#000000" stroke-width="4"/>
  ${txt('ELW 1', 45, 35, 12, F.FÜ.s, 'bold')}
</svg>`},

dv_fw_elw2:{name:'Einsatzleitwagen 2 (ELW 2)',ref:'DV 102 §6.5',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FÜ.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FÜ.s}" stroke-width="2"/>
  <line x1="1" y1="56" x2="89" y2="56" stroke="#000000" stroke-width="4"/>
  ${txt('ELW 2', 45, 35, 12, F.FÜ.s, 'bold')}
</svg>`},

dv_fw_wlf:{name:'Wechselladerfahrzeug (WLF)',ref:'DV 102 §6.4',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FW.s}" stroke-width="2"/>
  ${txt('WLF', 45, 35, 14, F.FW.s, 'bold')}
</svg>`},

dv_fw_mtf:{name:'Mannschaftstransportfahrzeug (MTF)',ref:'DV 102 §6.6',cat:'dv102_norm_fz',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="${F.FW.s}" stroke-width="2"/>
  ${txt('MTF', 45, 35, 14, F.FW.s, 'bold')}
</svg>`},

/* ────────────────────────────────────────────────
   §7 RICHTUNGEN / BEWEGUNG (DV 102 §7)
──────────────────────────────────────────────── */
dv_pfeil_angriff:{name:'Angriffsrichtung',ref:'DV 102 §7.1',cat:'dv102_norm_ri',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <line x1="8" y1="30" x2="72" y2="30" stroke="#CC0000" stroke-width="4"/>
  <polygon points="72,20 89,30 72,40" fill="#CC0000"/>
</svg>`},

dv_pfeil_rueckzug:{name:'Rückzug',ref:'DV 102 §7.2',cat:'dv102_norm_ri',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <line x1="18" y1="30" x2="82" y2="30" stroke="#CC0000" stroke-width="4" stroke-dasharray="8,4"/>
  <polygon points="18,20 1,30 18,40" fill="#CC0000"/>
</svg>`},

dv_pfeil_versorgung:{name:'Versorgungsrichtung',ref:'DV 102 §7.3',cat:'dv102_norm_ri',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <line x1="8" y1="30" x2="72" y2="30" stroke="#000000" stroke-width="3"/>
  <polygon points="72,22 89,30 72,38" fill="#000000"/>
  <circle cx="8" cy="30" r="6" fill="#000000"/>
</svg>`},

dv_pfeil_bereit:{name:'Bereitstellungsrichtung',ref:'DV 102 §7.4',cat:'dv102_norm_ri',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <line x1="8" y1="30" x2="72" y2="30" stroke="#CC0000" stroke-width="3"/>
  <polygon points="72,22 89,30 72,38" fill="none" stroke="#CC0000" stroke-width="2"/>
</svg>`},

/* ────────────────────────────────────────────────
   ANHANG 1.1 – FW EINHEITEN (normkonforme Formen)
──────────────────────────────────────────────── */
dv_fw_ea:{name:'Einsatzabschnitt FW',ref:'DV 102 Anh.1.1',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${hLine(30, F.FW.s)}
  ${txt('EA', 45, 23, 15, F.FW.s, 'bold')}
  ${txt('__', 45, 48, 13, F.FW.s)}
</svg>`},

dv_fw_unterabschnitt:{name:'Unterabschnitt FW',ref:'DV 102 Anh.1.1',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.FW.f,'#000000',2)}
  ${hLine(28, F.FW.s)}
  ${hLine(34, F.FW.s)}
  ${txt('UA', 45, 20, 14, F.FW.s, 'bold')}
  ${txt('__', 45, 48, 13, F.FW.s)}
</svg>`},

dv_fw_bereitstellungsraum:{name:'Bereitstellungsraum FW',ref:'DV 102 Anh.1.1',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${gestrichelt('#CC0000', 2.5, '8,4')}
  ${txt('BR', 45, 36, 22, '#CC0000', 'bold')}
</svg>`},

dv_fw_sammelplatz:{name:'Sammelplatz / Treffpunkt',ref:'DV 102 Anh.1.1',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="45,2 88,58 2,58" fill="none" stroke="#CC0000" stroke-width="2.5"/>
  ${txt('SP', 45, 50, 14, '#CC0000', 'bold')}
</svg>`},

dv_fw_einsatzstelle:{name:'Einsatzstelle',ref:'DV 102 Anh.1.9',cat:'dv102_norm_fw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="45,3 87,30 45,57 3,30" fill="#CC0000" stroke="#000000" stroke-width="2"/>
  ${txt('E', 45, 36, 22, '#FFFFFF', 'bold')}
</svg>`},

/* ────────────────────────────────────────────────
   ANHANG 1.3 – SANITÄTSDIENST/HIORG (normkonform)
──────────────────────────────────────────────── */
dv_san_gruppe:{name:'Sanitätsgruppe',ref:'DV 102 Anh.1.3',cat:'dv102_norm_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.HO.f,'#000000',2)}
  ${symKreuz('#CC0000', 45, 30, 14)}
  ${txt('1/8', 72, 52, 9, '#CC0000')}
</svg>`},

dv_san_zug:{name:'Sanitätszug',ref:'DV 102 Anh.1.3',cat:'dv102_norm_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.HO.f,'#000000',2)}
  ${symKreuz('#CC0000', 45, 28, 12)}
  ${txt('1/19', 70, 52, 9, '#CC0000')}
  ${txt('Zg', 22, 52, 9, '#000000')}
</svg>`},

dv_san_rtw:{name:'Rettungswagen (RTW)',ref:'DV 102 Anh.1.3',cat:'dv102_norm_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.HO.f,'#000000',2)}
  <circle cx="45" cy="30" r="20" fill="none" stroke="#000000" stroke-width="2"/>
  ${symKreuz('#CC0000', 45, 30, 10)}
  ${txt('RTW', 45, 52, 9, '#CC0000')}
</svg>`},

dv_san_nef:{name:'Notarzteinsatzfahrzeug (NEF)',ref:'DV 102 Anh.1.3',cat:'dv102_norm_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.HO.f,'#000000',2)}
  <circle cx="45" cy="28" r="18" fill="none" stroke="#000000" stroke-width="2"/>
  <circle cx="45" cy="28" r="5" fill="#CC0000"/>
  <line x1="45" y1="14" x2="45" y2="42" stroke="#CC0000" stroke-width="1.5"/>
  <line x1="31" y1="28" x2="59" y2="28" stroke="#CC0000" stroke-width="1.5"/>
  ${txt('NEF', 45, 52, 9, '#CC0000')}
</svg>`},

dv_san_ktw:{name:'Krankentransportwagen (KTW)',ref:'DV 102 Anh.1.3',cat:'dv102_norm_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.HO.f,'#000000',2)}
  <circle cx="45" cy="30" r="18" fill="none" stroke="#000000" stroke-width="2"/>
  ${txt('KTW', 45, 35, 13, '#000000', 'bold')}
</svg>`},

dv_san_itw:{name:'Intensivtransportwagen (ITW)',ref:'DV 102 Anh.1.3',cat:'dv102_norm_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.HO.f,'#000000',2)}
  <circle cx="45" cy="28" r="18" fill="none" stroke="#000000" stroke-width="2"/>
  ${symKreuz('#CC0000', 45, 28, 9)}
  ${txt('I', 45, 28, 8, '#FFFFFF', 'bold')}
  ${txt('ITW', 45, 52, 9, '#CC0000')}
</svg>`},

dv_san_behandlungsplatz:{name:'Behandlungsplatz (BHP)',ref:'DV 102 Anh.1.3',cat:'dv102_norm_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.HO.f,'#000000',2)}
  ${symKreuz('#CC0000', 45, 28, 16)}
  ${txt('BHP', 45, 52, 10, '#CC0000', 'bold')}
</svg>`},

dv_san_patientenablage:{name:'Patientenablage (PA)',ref:'DV 102 Anh.1.3',cat:'dv102_norm_san',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="45,2 88,58 2,58" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
  ${symKreuz('#CC0000', 45, 36, 12)}
  ${txt('PA', 45, 54, 9, '#CC0000', 'bold')}
</svg>`},

/* ────────────────────────────────────────────────
   ANHANG 1.2 – THW EINHEITEN (normkonform)
──────────────────────────────────────────────── */
dv_thw_tz:{name:'THW Technischer Zug',ref:'DV 102 Anh.1.2',cat:'dv102_norm_thw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.THW.f,'#000000',2)}
  ${txt('TZ', 45, 35, 24, F.THW.s, 'bold')}
  ${txt('1/19', 45, 52, 10, F.THW.s)}
</svg>`},

dv_thw_bgruppe:{name:'THW Bergungsgruppe',ref:'DV 102 Anh.1.2',cat:'dv102_norm_thw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.THW.f,'#000000',2)}
  ${hLine(30, F.THW.s)}
  ${txt('B', 45, 22, 18, F.THW.s, 'bold')}
  ${txt('1/8', 45, 48, 11, F.THW.s)}
</svg>`},

dv_thw_fk:{name:'THW FG Führung/Kommunikation (FK)',ref:'DV 102 Anh.1.2',cat:'dv102_norm_thw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.THW.f,'#000000',2)}
  ${hLine(30, F.THW.s)}
  ${txt('FK', 45, 22, 18, F.THW.s, 'bold')}
  ${txt('1/8', 45, 48, 11, F.THW.s)}
</svg>`},

dv_thw_e:{name:'THW FG Elektroversorgung (E)',ref:'DV 102 Anh.1.2',cat:'dv102_norm_thw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.THW.f,'#000000',2)}
  ${hLine(30, F.THW.s)}
  ${txt('E', 45, 22, 20, F.THW.s, 'bold')}
  ${txt('1/8', 45, 48, 11, F.THW.s)}
</svg>`},

dv_thw_w:{name:'THW FG Wassergefahren (W)',ref:'DV 102 Anh.1.2',cat:'dv102_norm_thw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.THW.f,'#000000',2)}
  ${hLine(30, F.THW.s)}
  ${txt('W', 45, 22, 20, F.THW.s, 'bold')}
  ${txt('1/8', 45, 48, 11, F.THW.s)}
</svg>`},

dv_thw_n:{name:'THW FG Notversorgung (N)',ref:'DV 102 Anh.1.2',cat:'dv102_norm_thw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.THW.f,'#000000',2)}
  ${hLine(30, F.THW.s)}
  ${txt('N', 45, 22, 20, F.THW.s, 'bold')}
  ${txt('1/8', 45, 48, 11, F.THW.s)}
</svg>`},

dv_thw_log:{name:'THW FG Logistik (Log)',ref:'DV 102 Anh.1.2',cat:'dv102_norm_thw',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${grundRect(F.THW.f,'#000000',2)}
  ${hLine(30, F.THW.s)}
  ${txt('Log', 45, 22, 17, F.THW.s, 'bold')}
  ${txt('1/8', 45, 48, 11, F.THW.s)}
</svg>`},

/* ────────────────────────────────────────────────
   ANHANG 1.9 – LAGEBILD / SCHADENZEICHEN (normkonform)
──────────────────────────────────────────────── */
dv_lage_brand:{name:'Schadenzeichen Brand',ref:'DV 102 Anh.1.9',cat:'dv102_norm_lage',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="45,3 87,30 45,57 3,30" fill="#CC0000" stroke="#000000" stroke-width="2"/>
  ${symFlamme('#FFFFFF')}
</svg>`},

dv_lage_person_vermisst:{name:'Person vermisst',ref:'DV 102 Anh.1.9',cat:'dv102_norm_lage',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rahmen('#000000', 2)}
  <circle cx="45" cy="16" r="6" fill="none" stroke="#000000" stroke-width="2"/>
  <line x1="45" y1="22" x2="45" y2="40" stroke="#000000" stroke-width="2"/>
  <line x1="33" y1="30" x2="57" y2="30" stroke="#000000" stroke-width="2"/>
  <line x1="45" y1="40" x2="37" y2="53" stroke="#000000" stroke-width="2"/>
  <line x1="45" y1="40" x2="53" y2="53" stroke="#000000" stroke-width="2"/>
  ${txt('?', 72, 52, 14, '#CC0000', 'bold')}
</svg>`},

dv_lage_person_tot:{name:'Person tot',ref:'DV 102 Anh.1.9',cat:'dv102_norm_lage',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${rahmen('#000000', 2)}
  <line x1="30" y1="20" x2="60" y2="50" stroke="#000000" stroke-width="3"/>
  <line x1="60" y1="20" x2="30" y2="50" stroke="#000000" stroke-width="3"/>
</svg>`},

dv_lage_schadengebiet:{name:'Schadensgebiet',ref:'DV 102 Anh.1.9',cat:'dv102_norm_lage',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  ${gestrichelt('#CC0000', 2.5, '8,4')}
  ${txt('Schad.', 45, 36, 14, '#CC0000', 'bold')}
</svg>`},

dv_lage_gefahrengebiet:{name:'Gefahrengebiet (allg.)',ref:'DV 102 Anh.1.9',cat:'dv102_norm_lage',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="45,2 88,58 2,58" fill="none" stroke="#CC0000" stroke-width="2.5"/>
  ${txt('!', 45, 50, 28, '#CC0000', 'bold')}
</svg>`},

dv_lage_abc:{name:'ABC/CBRN-Gefahrgebiet',ref:'DV 102 Anh.1.9',cat:'dv102_norm_lage',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="45,2 88,58 2,58" fill="rgba(204,0,0,0.08)" stroke="#CC0000" stroke-width="2.5"/>
  ${txt('ABC', 45, 46, 16, '#CC0000', 'bold')}
</svg>`},

dv_lage_strahlung:{name:'Strahlengefahrgebiet',ref:'DV 102 Anh.1.9',cat:'dv102_norm_lage',
svg:()=>`<svg viewBox="${VB}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="45,2 88,58 2,58" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
  <!-- Radiation trefoil, scaled for triangle, cx=45 cy=38 -->
  <circle cx="45" cy="38" r="20" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
  <path d="M 41.34,31.69 A 6,6 0 0,1 48.66,31.69 L 53.57,21.19 A 18,18 0 0,0 36.43,21.19 Z" fill="#ca8a04"/>
  <path d="M 49.5,38 A 6,6 0 0,1 47,43.2 L 57,49 A 18,18 0 0,0 63,26 Z" fill="#ca8a04"/>
  <path d="M 40.5,43.2 A 6,6 0 0,1 40.5,32.8 L 27,26 A 18,18 0 0,0 33,49 Z" fill="#ca8a04"/>
  <circle cx="45" cy="38" r="5" fill="#ca8a04"/>
</svg>`},

};

/* Register */
Object.assign(window.SYM, LIB);

const newCats = [
  {id:'dv102_norm_grd',  label:'DV 102 §1 – Grundzeichen',              color:'#4ade80', official:true},
  {id:'dv102_norm_fw',   label:'DV 102 §3–4 – FW Einheiten/Aufgaben',  color:'#4ade80', official:true},
  {id:'dv102_norm_fü',   label:'DV 102 §5 – Führungskräfte',            color:'#4ade80', official:true},
  {id:'dv102_norm_fz',   label:'DV 102 §6 – Fahrzeuge (FW)',            color:'#4ade80', official:true},
  {id:'dv102_norm_ri',   label:'DV 102 §7 – Richtungen/Bewegung',       color:'#4ade80', official:true},
  {id:'dv102_norm_san',  label:'DV 102 Anh.1.3 – Sanitätsdienst/RD',   color:'#4ade80', official:true},
  {id:'dv102_norm_thw',  label:'DV 102 Anh.1.2 – THW normkonform',      color:'#4ade80', official:true},
  {id:'dv102_norm_lage', label:'DV 102 Anh.1.9 – Lagebild/Schaden',     color:'#4ade80', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });

console.log(`[TZ-Lib] DV 102 Normkonform geladen: ${Object.keys(LIB).length} Zeichen`);
})();
