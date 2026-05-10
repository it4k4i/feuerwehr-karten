/**
 * TZ-Bibliothek: FwDV 100 – Feuerwehr-Dienstvorschrift 100
 * Führung und Leitung im Feuerwehreinsatz
 * Enthält: Führungszeichen, Einsatzabschnitte, Bereitstellungsräume,
 *          Sammelplätze, kombinierte Einheitszeichen, Lagebild-Ergänzungen
 */
'use strict';
(function(){
const C = window.TZ_COLORS || {
  FW_F:'#dc2626', FW_S:'#ffffff',
  THW_F:'#1d4ed8', THW_S:'#ffffff',
  HO_F:'#ffffff',  HO_S:'#000000',
  FÜ_F:'#ca8a04',  FÜ_S:'#000000',
  POL_F:'#15803d', POL_S:'#ffffff',
  SONST_F:'#ea580c', SONST_S:'#000000',
};

const LIB = {

/* ══════════════════════════════════════════
   FwDV 100 – FÜHRUNGSORGANISATION
══════════════════════════════════════════ */

/* §2 Führungsebenen */
fw100_einsatzleitung:{name:'Einsatzleitung (EL)',ref:'FwDV 100 §2.1',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="22" font-weight="bold" fill="${C.FW_S}" font-family="Arial">EL</text>
</svg>`},

fw100_technische_einsatzleitung:{name:'Technische Einsatzleitung (TEL)',ref:'FwDV 100 §2.1',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="2"/>
  <line x1="8" y1="65" x2="92" y2="65" stroke="${C.FW_S}" stroke-width="4"/>
  <text x="50" y="45" text-anchor="middle" font-size="18" font-weight="bold" fill="${C.FW_S}" font-family="Arial">TEL</text>
</svg>`},

fw100_einsatzabschnitt:{name:'Einsatzabschnitt (EA)',ref:'FwDV 100 §2.2',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="2"/>
  <line x1="8" y1="40" x2="92" y2="40" stroke="${C.FW_S}" stroke-width="2"/>
  <text x="50" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="${C.FW_S}" font-family="Arial">EA</text>
  <text x="50" y="58" text-anchor="middle" font-size="11" fill="${C.FW_S}" font-family="Arial">__</text>
</svg>`},

fw100_unterabschnitt:{name:'Unterabschnitt (UA)',ref:'FwDV 100 §2.3',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="2"/>
  <line x1="8" y1="40" x2="92" y2="40" stroke="${C.FW_S}" stroke-width="2"/>
  <line x1="8" y1="48" x2="92" y2="48" stroke="${C.FW_S}" stroke-width="2"/>
  <text x="50" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="${C.FW_S}" font-family="Arial">UA</text>
  <text x="50" y="62" text-anchor="middle" font-size="10" fill="${C.FW_S}" font-family="Arial">__</text>
</svg>`},

fw100_fuehrungsstelle:{name:'Führungsstelle',ref:'FwDV 100 §3.2',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FÜ_F}" stroke="#000" stroke-width="2"/>
  <line x1="8" y1="65" x2="92" y2="65" stroke="#000" stroke-width="5"/>
  <text x="50" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${C.FÜ_S}" font-family="Arial">FüSt</text>
</svg>`},

fw100_gefechtsstand:{name:'Gefechtsstand / ELW',ref:'FwDV 100 §3.2',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FÜ_F}" stroke="#000" stroke-width="2"/>
  <circle cx="50" cy="40" r="14" fill="none" stroke="#000" stroke-width="2"/>
  <text x="50" y="45" text-anchor="middle" font-size="11" font-weight="bold" fill="${C.FÜ_S}" font-family="Arial">ELW</text>
</svg>`},

fw100_kdo:{name:'Kommandofahrzeug (KdoW)',ref:'FwDV 100 §3.2',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FÜ_F}" stroke="#000" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${C.FÜ_S}" font-family="Arial">KdoW</text>
</svg>`},

/* §3 Bereitstellungsräume & Sammelplätze */
fw100_bereitstellungsraum:{name:'Bereitstellungsraum (BR)',ref:'FwDV 100 §4.1',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${C.FW_F}" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="50" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${C.FW_F}" font-family="Arial">BR</text>
</svg>`},

fw100_sammelplatz:{name:'Sammelplatz',ref:'FwDV 100 §4.2',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 92,65 8,65" fill="none" stroke="${C.FW_F}" stroke-width="2.5"/>
  <text x="50" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="${C.FW_F}" font-family="Arial">SP</text>
</svg>`},

fw100_aufstellungsraum:{name:'Aufstellungsraum',ref:'FwDV 100 §4.1',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${C.FW_F}" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="50" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${C.FW_F}" font-family="Arial">AR</text>
</svg>`},

fw100_patientenablage:{name:'Patientenablage (PA)',ref:'FwDV 100 / MANV',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="#e11d48" stroke-width="2.5"/>
  <line x1="50" y1="22" x2="50" y2="58" stroke="#e11d48" stroke-width="4"/>
  <line x1="32" y1="40" x2="68" y2="40" stroke="#e11d48" stroke-width="4"/>
  <text x="50" y="70" text-anchor="middle" font-size="8" fill="#e11d48" font-family="Arial">PA</text>
</svg>`},

fw100_behandlungsplatz:{name:'Behandlungsplatz (BHP)',ref:'FwDV 100 / MANV',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="10" width="84" height="60" fill="#ffffff" stroke="#e11d48" stroke-width="2.5"/>
  <line x1="50" y1="18" x2="50" y2="62" stroke="#e11d48" stroke-width="4"/>
  <line x1="28" y1="40" x2="72" y2="40" stroke="#e11d48" stroke-width="4"/>
  <text x="50" y="76" text-anchor="middle" font-size="7" fill="#e11d48" font-family="Arial">BHP</text>
</svg>`},

fw100_verletztensammelstelle:{name:'Verletzten-Sammelstelle (VSt)',ref:'FwDV 100 / MANV',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 92,65 8,65" fill="#ffffff" stroke="#e11d48" stroke-width="2.5"/>
  <line x1="50" y1="22" x2="50" y2="55" stroke="#e11d48" stroke-width="3"/>
  <line x1="36" y1="40" x2="64" y2="40" stroke="#e11d48" stroke-width="3"/>
</svg>`},

fw100_rettungsstation:{name:'Rettungsstation',ref:'FwDV 100',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="25" width="72" height="40" fill="#ffffff" stroke="#15803d" stroke-width="2.5"/>
  <polygon points="50,8 86,25 14,25" fill="#ffffff" stroke="#15803d" stroke-width="2.5"/>
  <line x1="50" y1="32" x2="50" y2="58" stroke="#e11d48" stroke-width="3"/>
  <line x1="37" y1="45" x2="63" y2="45" stroke="#e11d48" stroke-width="3"/>
</svg>`},

/* §4 Abschnitte / Sektoren */
fw100_loeschabschnitt:{name:'Löschabschnitt',ref:'FwDV 100 §2.2',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="2"/>
  <line x1="8" y1="40" x2="92" y2="40" stroke="${C.FW_S}" stroke-width="2"/>
  <text x="50" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="${C.FW_S}" font-family="Arial">LöA</text>
  <text x="50" y="58" text-anchor="middle" font-size="10" fill="${C.FW_S}" font-family="Arial">__</text>
</svg>`},

fw100_rettungsabschnitt:{name:'Rettungsabschnitt',ref:'FwDV 100 §2.2',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="2"/>
  <line x1="8" y1="40" x2="92" y2="40" stroke="${C.FW_S}" stroke-width="2"/>
  <text x="50" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="${C.FW_S}" font-family="Arial">RetA</text>
  <text x="50" y="58" text-anchor="middle" font-size="10" fill="${C.FW_S}" font-family="Arial">__</text>
</svg>`},

fw100_versorgungsabschnitt:{name:'Versorgungsabschnitt',ref:'FwDV 100 §2.2',cat:'fwdv100_fuehr',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="2"/>
  <line x1="8" y1="40" x2="92" y2="40" stroke="${C.FW_S}" stroke-width="2"/>
  <text x="50" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="${C.FW_S}" font-family="Arial">VersA</text>
  <text x="50" y="58" text-anchor="middle" font-size="10" fill="${C.FW_S}" font-family="Arial">__</text>
</svg>`},

/* §5 Maßnahmen-Zeichen */
fw100_brandschutz:{name:'Brandschutz (aktiv)',ref:'FwDV 100 §5',cat:'fwdv100_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="1.5"/>
  <path d="M38 62 Q42 44 34 30 Q50 50 56 36 Q52 54 62 62Z" fill="${C.FW_S}"/>
</svg>`},

fw100_raeumung:{name:'Räumung / Evakuierung',ref:'FwDV 100 §5',cat:'fwdv100_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${C.FW_F}" stroke-width="2.5"/>
  <line x1="20" y1="40" x2="60" y2="40" stroke="${C.FW_F}" stroke-width="3"/>
  <polyline points="50,28 65,40 50,52" fill="none" stroke="${C.FW_F}" stroke-width="3"/>
  <line x1="70" y1="28" x2="70" y2="52" stroke="${C.FW_F}" stroke-width="3"/>
</svg>`},

fw100_absperrung:{name:'Absperrung / Sperrzone',ref:'FwDV 100 §5',cat:'fwdv100_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="20" x2="90" y2="60" stroke="${C.FW_F}" stroke-width="4"/>
  <line x1="10" y1="60" x2="90" y2="20" stroke="${C.FW_F}" stroke-width="4"/>
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${C.FW_F}" stroke-width="2.5"/>
</svg>`},

fw100_gefahrenzone:{name:'Gefahrenzone (allg.)',ref:'FwDV 100 §5',cat:'fwdv100_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 92,65 8,65" fill="rgba(220,38,38,0.15)" stroke="${C.FW_F}" stroke-width="2.5"/>
  <text x="50" y="55" text-anchor="middle" font-size="24" font-weight="bold" fill="${C.FW_F}" font-family="Arial">!</text>
</svg>`},

fw100_innere_gefahrenzone:{name:'Innere Gefahrenzone',ref:'FwDV 100 §5',cat:'fwdv100_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 92,65 8,65" fill="rgba(220,38,38,0.3)" stroke="${C.FW_F}" stroke-width="2.5"/>
  <polygon points="50,22 78,58 22,58" fill="none" stroke="${C.FW_F}" stroke-width="2"/>
  <text x="50" y="54" text-anchor="middle" font-size="16" font-weight="bold" fill="${C.FW_F}" font-family="Arial">!</text>
</svg>`},

fw100_aeussere_gefahrenzone:{name:'Äußere Gefahrenzone',ref:'FwDV 100 §5',cat:'fwdv100_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,8 92,65 8,65" fill="rgba(220,38,38,0.08)" stroke="${C.FW_F}" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="50" y="55" text-anchor="middle" font-size="18" font-weight="bold" fill="${C.FW_F}" font-family="Arial">!</text>
</svg>`},

fw100_schadengebiet:{name:'Schadensgebiet',ref:'FwDV 100 §5',cat:'fwdv100_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="rgba(220,38,38,0.12)" stroke="${C.FW_F}" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="50" y="46" text-anchor="middle" font-size="12" font-weight="bold" fill="${C.FW_F}" font-family="Arial">Schad.</text>
</svg>`},

/* §6 Versorgung & Logistik */
fw100_versorgungspunkt:{name:'Versorgungspunkt',ref:'FwDV 100 §6',cat:'fwdv100_log',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="40" r="32" fill="none" stroke="${C.FW_F}" stroke-width="2.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="14" font-weight="bold" fill="${C.FW_F}" font-family="Arial">VP</text>
</svg>`},

fw100_tankstelle:{name:'Betankungsstelle',ref:'FwDV 100 §6',cat:'fwdv100_log',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="60" height="45" fill="none" stroke="${C.FW_F}" stroke-width="2.5"/>
  <rect x="32" y="32" width="12" height="18" fill="${C.FW_F}"/>
  <line x1="44" y1="41" x2="60" y2="41" stroke="${C.FW_F}" stroke-width="2.5"/>
  <line x1="60" y1="35" x2="60" y2="50" stroke="${C.FW_F}" stroke-width="2.5"/>
  <circle cx="62" cy="50" r="3" fill="${C.FW_F}"/>
</svg>`},

fw100_verpflegungsstelle:{name:'Verpflegungsstelle',ref:'FwDV 100 §6',cat:'fwdv100_log',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="40" r="32" fill="none" stroke="${C.FW_F}" stroke-width="2.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="18" font-weight="bold" fill="${C.FW_F}" font-family="Arial">VpSt</text>
</svg>`},

fw100_sanitaetsstelle:{name:'Sanitätsstelle',ref:'FwDV 100 §6',cat:'fwdv100_log',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="40" r="32" fill="#ffffff" stroke="#e11d48" stroke-width="2.5"/>
  <line x1="50" y1="18" x2="50" y2="62" stroke="#e11d48" stroke-width="5"/>
  <line x1="28" y1="40" x2="72" y2="40" stroke="#e11d48" stroke-width="5"/>
</svg>`},

fw100_ruhebereich:{name:'Ruhebereich / Ablösebereich',ref:'FwDV 100 §6',cat:'fwdv100_log',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${C.FW_F}" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="50" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="${C.FW_F}" font-family="Arial">RB</text>
</svg>`},

fw100_zufahrt:{name:'Zufahrt / Anfahrtsweg',ref:'FwDV 100',cat:'fwdv100_log',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <line x1="15" y1="40" x2="75" y2="40" stroke="${C.FW_F}" stroke-width="4"/>
  <polyline points="60,25 78,40 60,55" fill="none" stroke="${C.FW_F}" stroke-width="4"/>
  <text x="10" y="70" text-anchor="start" font-size="10" fill="${C.FW_F}" font-family="Arial">Zufahrt</text>
</svg>`},

/* §7 Kommunikation */
fw100_fernmeldestelle:{name:'Fernmeldestelle',ref:'FwDV 100 §7',cat:'fwdv100_kom',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${C.FW_F}" stroke-width="2.5"/>
  <path d="M30 52 Q30 30 50 30 Q70 30 70 52" fill="none" stroke="${C.FW_F}" stroke-width="2.5"/>
  <path d="M38 52 Q38 38 50 38 Q62 38 62 52" fill="none" stroke="${C.FW_F}" stroke-width="2"/>
  <line x1="50" y1="44" x2="50" y2="60" stroke="${C.FW_F}" stroke-width="2"/>
</svg>`},

fw100_messtrupp:{name:'Messtrupp',ref:'FwDV 100 / ABC',cat:'fwdv100_kom',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="none" stroke="${C.FW_F}" stroke-width="2.5"/>
  <circle cx="50" cy="40" r="16" fill="none" stroke="${C.FW_F}" stroke-width="2"/>
  <line x1="50" y1="24" x2="50" y2="32" stroke="${C.FW_F}" stroke-width="2"/>
  <line x1="50" y1="40" x2="64" y2="28" stroke="${C.FW_F}" stroke-width="2"/>
  <circle cx="50" cy="40" r="3" fill="${C.FW_F}"/>
</svg>`},

/* §8 MANV – Massenanfall von Verletzten */
fw100_manv:{name:'MANV – Massenanfall Verletzter',ref:'FwDV 100 MANV',cat:'fwdv100_manv',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="10" width="92" height="60" rx="4" fill="#fff" stroke="#e11d48" stroke-width="3"/>
  <text x="50" y="38" text-anchor="middle" font-size="16" font-weight="bold" fill="#e11d48" font-family="Arial">MANV</text>
  <text x="50" y="58" text-anchor="middle" font-size="11" fill="#e11d48" font-family="Arial">__Verletzte</text>
</svg>`},

fw100_sichtungsstelle:{name:'Sichtungsstelle (S)',ref:'FwDV 100 MANV',cat:'fwdv100_manv',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#ffffff" stroke="#e11d48" stroke-width="2.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="24" font-weight="bold" fill="#e11d48" font-family="Arial">S</text>
</svg>`},

fw100_kat1:{name:'Verletzungskategorie I (rot)',ref:'FwDV 100 MANV',cat:'fwdv100_manv',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#dc2626" stroke="#dc2626" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="22" font-weight="bold" fill="#ffffff" font-family="Arial">I</text>
</svg>`},

fw100_kat2:{name:'Verletzungskategorie II (gelb)',ref:'FwDV 100 MANV',cat:'fwdv100_manv',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#fbbf24" stroke="#fbbf24" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="22" font-weight="bold" fill="#000000" font-family="Arial">II</text>
</svg>`},

fw100_kat3:{name:'Verletzungskategorie III (grün)',ref:'FwDV 100 MANV',cat:'fwdv100_manv',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#16a34a" stroke="#16a34a" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="22" font-weight="bold" fill="#ffffff" font-family="Arial">III</text>
</svg>`},

fw100_kat4:{name:'Verletzungskategorie IV / TOT (schwarz)',ref:'FwDV 100 MANV',cat:'fwdv100_manv',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="#1f2937" stroke="#1f2937" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="22" font-weight="bold" fill="#ffffff" font-family="Arial">IV</text>
</svg>`},

/* FwDV 3 – Einheiten im Löscheinsatz */
fw3_staffel:{name:'Staffel (1/5)',ref:'FwDV 3 §2',cat:'fwdv100_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${C.FW_S}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="11" fill="${C.FW_S}" font-family="Arial">1/5</text>
  <text x="73" y="46" text-anchor="middle" font-size="10" fill="${C.FW_S}" font-family="Arial">Stff</text>
</svg>`},

fw3_gruppe:{name:'Gruppe (1/8)',ref:'FwDV 3 §2',cat:'fwdv100_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${C.FW_S}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="11" fill="${C.FW_S}" font-family="Arial">1/8</text>
  <text x="73" y="46" text-anchor="middle" font-size="10" fill="${C.FW_S}" font-family="Arial">Gr</text>
</svg>`},

fw3_zug:{name:'Zug (1/19 oder 1/22)',ref:'FwDV 3 §2',cat:'fwdv100_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${C.FW_S}" stroke-width="2"/>
  <text x="27" y="46" text-anchor="middle" font-size="10" fill="${C.FW_S}" font-family="Arial">1/22</text>
  <text x="73" y="46" text-anchor="middle" font-size="11" fill="${C.FW_S}" font-family="Arial">Zug</text>
</svg>`},

fw3_verband:{name:'Verband',ref:'FwDV 3 §2',cat:'fwdv100_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="20" width="84" height="42" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="62" stroke="${C.FW_S}" stroke-width="2"/>
  <text x="50" y="46" text-anchor="middle" font-size="12" fill="${C.FW_S}" font-family="Arial">Verb.</text>
</svg>`},

/* FwDV 7 – Atemschutz */
fw7_agt_ueberwachung:{name:'AGT-Überwachung aktiv',ref:'FwDV 7 §4',cat:'fwdv100_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="8" width="92" height="64" rx="4" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="1.5"/>
  <text x="50" y="30" text-anchor="middle" font-size="10" font-weight="bold" fill="${C.FW_S}" font-family="Arial">AGT</text>
  <text x="50" y="48" text-anchor="middle" font-size="15" font-weight="bold" fill="${C.FW_S}" font-family="Arial">ein/aus</text>
  <text x="50" y="64" text-anchor="middle" font-size="9" fill="${C.FW_S}" font-family="Arial">__:__ / __:__</text>
</svg>`},

fw7_atemschutzgeraetetraeger:{name:'Atemschutzgeräteträger (aktiv)',ref:'FwDV 7',cat:'fwdv100_einh',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="15" width="84" height="50" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="1.5"/>
  <ellipse cx="50" cy="38" rx="18" ry="14" fill="none" stroke="${C.FW_S}" stroke-width="2.5"/>
  <text x="50" y="64" text-anchor="middle" font-size="10" fill="${C.FW_S}" font-family="Arial">AGT</text>
</svg>`},

/* §9 Kennzeichnung Objekte */
fw100_einsatzstelle:{name:'Einsatzstelle (allg.)',ref:'FwDV 100',cat:'fwdv100_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,6 94,40 50,74 6,40" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="1.5"/>
  <text x="50" y="46" text-anchor="middle" font-size="18" font-weight="bold" fill="${C.FW_S}" font-family="Arial">E</text>
</svg>`},

fw100_brandstelle:{name:'Brandstelle',ref:'FwDV 100 / DV102',cat:'fwdv100_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,6 94,40 50,74 6,40" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="1.5"/>
  <path d="M38 55 Q41 40 34 28 Q50 44 54 34 Q51 50 60 55Z" fill="${C.FW_S}"/>
</svg>`},

fw100_hilfeleistungsstelle:{name:'Hilfeleistungsstelle (TH)',ref:'FwDV 100',cat:'fwdv100_massn',
svg:(s,f)=>`<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,6 94,40 50,74 6,40" fill="${C.FW_F}" stroke="${C.FW_F}" stroke-width="1.5"/>
  <line x1="50" y1="24" x2="50" y2="56" stroke="${C.FW_S}" stroke-width="4"/>
  <line x1="35" y1="40" x2="65" y2="40" stroke="${C.FW_S}" stroke-width="4"/>
</svg>`},

};

/* Register in global SYM */
Object.assign(window.SYM, LIB);

/* Register categories */
const newCats = [
  {id:'fwdv100_fuehr', label:'FwDV 100 – Führung / Abschnitte', color:'#f87171', official:true},
  {id:'fwdv100_massn', label:'FwDV 100 – Maßnahmen / Zonen',    color:'#f87171', official:true},
  {id:'fwdv100_log',   label:'FwDV 100 – Logistik / Versorgung',color:'#f87171', official:true},
  {id:'fwdv100_kom',   label:'FwDV 100 – Kommunikation',        color:'#f87171', official:true},
  {id:'fwdv100_manv',  label:'FwDV 100 – MANV',                  color:'#f87171', official:true},
  {id:'fwdv100_einh',  label:'FwDV 3/7 – Einheiten / AGT',      color:'#f87171', official:true},
];
newCats.forEach(c => { if (!window.CATS.find(x=>x.id===c.id)) window.CATS.push(c); });

console.log(`[TZ-Lib] FwDV 100 geladen: ${Object.keys(LIB).length} Zeichen`);
})();
