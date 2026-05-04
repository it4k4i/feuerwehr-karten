# 🔥 Feuerwehr Gerätekunde Karten Generator

Erstelle professionelle Pokémon-style Gerätekunde-Karten für die Feuerwehr — kostenlos, ohne Anmeldung, direkt im Browser.

**👉 [Jetzt öffnen](https://it4k4i.github.io/feuerwehr-karten)**
**👉 [Jetzt öffnen (Cloudflare)](https://feuerwehr-karten.fabian98.workers.dev/)**


---

## Features

- 🃏 Pokémon-Style Karten mit Foto, Name und Kategorie
- 🎨 Vollständig anpassbare Kategorien (Farben, Schrift, Ausrichtung)
- 📦 Mehrere Karten auf einmal (Fotos, Liste oder CSV)
- 🖨 Drucken auf DIN A4 (beidseitig, 9 Karten pro Seite)
- 🏭 Profi-Export für Plastikkarten-Druckfirmen (300 DPI, CR80, A6, Custom)
- 💾 Projekte als JSON speichern und laden
- 🔄 Eigene Rückseite hochladbar

## Kartengröße

| Format | Maße | Verwendung |
|--------|------|-----------|
| Pokémon | 63 × 88 mm | Standard-Spielkarte |
| CR80 | 85,6 × 54 mm | Standard EC-/Plastikkarte |
| A6 | 105 × 148 mm | Große Lernkarte |
| Custom | frei wählbar | Beliebig |

## Lokale Nutzung

Einfach `index.html` herunterladen und im Browser öffnen — kein Server, kein Backend, keine Installation nötig.

## Deployment

### GitHub Pages
1. Fork dieses Repository
2. Gehe zu **Settings → Pages**
3. Source: `main` Branch, `/ (root)`
4. Fertig — automatisch unter `https://USERNAME.github.io/feuerwehr-karten` erreichbar

### Cloudflare Pages
1. [Cloudflare Pages](https://pages.cloudflare.com) öffnen
2. **Create a project → Upload assets**
3. `index.html` hochladen
4. Fertig — sofort weltweit verfügbar

### Eigener Server
```bash
# Nginx — einfachste Variante
docker run -p 80:80 -v $(pwd)/index.html:/usr/share/nginx/html/index.html nginx:alpine
```

## Lizenz



[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

- ✅ Kostenlos für private, gemeinnützige und Feuerwehr-Nutzung
- ✅ Weitergabe und Anpassung erlaubt (mit Namensnennung)
- ❌ Kommerzielle Nutzung nur mit schriftlicher Genehmigung

Kontakt für kommerzielle Anfragen: GitHub Issues
