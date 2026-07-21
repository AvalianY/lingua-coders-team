<div align="center">

# English Excellence

### Eine responsive Landingpage für eine moderne Online-Englischschule

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/de/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/de/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/de/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-222?logo=github)](https://avaliany.github.io/lingua-coders-team/)

[Deutsch](README.md) · [Українська](README.uk.md) · [English](README.en.md)

[Live-Demo](https://avaliany.github.io/lingua-coders-team/) · [Repository](https://github.com/AvalianY/lingua-coders-team)

</div>

## Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Funktionen](#funktionen)
- [Seitenstruktur](#seitenstruktur)
- [Technologien](#technologien)
- [Projektstruktur](#projektstruktur)
- [Installation und Start](#installation-und-start)
- [Verfügbare Skripte](#verfügbare-skripte)
- [Team-Workflow](#team-workflow)
- [Deployment](#deployment)
- [Team](#team)

## Über das Projekt

**English Excellence** ist ein Teamprojekt zur Entwicklung einer modernen Landingpage für eine Online-Englischschule. Die Website präsentiert die Vorteile der Schule, verfügbare Unterrichtsangebote, Lehrkräfte, Bewertungen und ein Formular für eine Probestunde.

Das Projekt wird mit einer komponentenorientierten HTML-Struktur entwickelt: Jeder Seitenbereich befindet sich in einer separaten Partial-Datei und wird beim Build mit Vite in die Hauptseite eingebunden.

## Funktionen

- Responsive Darstellung für Mobilgeräte, Tablets und Desktop-Bildschirme
- Semantische HTML-Struktur
- Mobile Navigation
- Navigation über Ankerlinks zu den Seitenbereichen
- Darstellung der Unterrichtsangebote
- Bereich mit Lehrkräften
- Kundenbewertungen
- Kontakt- und Bewerbungsformular
- Optimierte Bilder für unterschiedliche Bildschirmauflösungen
- Automatischer Build und Deployment über GitHub Actions

## Seitenstruktur

Die Landingpage besteht aus folgenden Bereichen:

1. Header und Navigation
2. Mobile Menü
3. Hero-Bereich
4. Über uns
5. Unsere Unterrichtsangebote
6. Angebot zur Anmeldung
7. Unsere Lehrkräfte
8. Bewerbungsformular
9. Bewertungen
10. Footer

## Technologien

- **HTML5** — semantische Seitenstruktur
- **CSS3** — Layout, Responsive Design und visuelle Gestaltung
- **JavaScript** — interaktive Elemente
- **Vite** — Entwicklungsserver und Produktions-Build
- **vite-plugin-html-inject** — Einbindung wiederverwendbarer HTML-Partials
- **vite-plugin-full-reload** — automatisches Neuladen während der Entwicklung
- **PostCSS** — Verarbeitung und Sortierung von Media Queries
- **Modern Normalize** — einheitliche Darstellung in verschiedenen Browsern
- **Git und GitHub** — Versionskontrolle und Teamarbeit
- **GitHub Actions und GitHub Pages** — CI/CD und Veröffentlichung

## Projektstruktur

```text
lingua-coders-team/
├── .github/
│   └── workflows/          # GitHub-Actions-Workflows
├── assets/                 # Projektressourcen
├── src/
│   ├── css/                # Globale und komponentenbezogene Styles
│   ├── fonts/              # Lokale Schriftarten
│   ├── img/                # Bilder und SVG-Sprites
│   ├── partials/           # HTML-Komponenten der Seite
│   ├── public/             # Statische öffentliche Dateien
│   ├── index.html          # Haupteinstiegspunkt
│   └── main.js             # JavaScript-Einstiegspunkt
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── package.json
└── vite.config.js
```

## Installation und Start

### Voraussetzungen

- [Node.js](https://nodejs.org/) LTS
- npm
- Git

### Lokale Installation

```bash
git clone https://github.com/AvalianY/lingua-coders-team.git
cd lingua-coders-team
npm install
npm run dev
```

Vite zeigt anschließend die lokale Adresse im Terminal an. Standardmäßig ist das:

```text
http://localhost:5173
```

## Verfügbare Skripte

```bash
npm run dev
```

Startet den lokalen Entwicklungsserver.

```bash
npm run build
```

Erstellt die optimierte Produktionsversion im Ordner `dist`.

```bash
npm run preview
```

Startet eine lokale Vorschau des Produktions-Builds.

## Team-Workflow

1. Für jede Aufgabe wird ein eigenes GitHub Issue erstellt.
2. Die Entwicklung erfolgt in einer separaten Branch.
3. Änderungen werden mit klaren Commit-Nachrichten gespeichert.
4. Nach Abschluss wird ein Pull Request nach `main` geöffnet.
5. Der Code wird geprüft und erst danach zusammengeführt.
6. Direkte Änderungen an der geschützten `main`-Branch werden vermieden.
7. Nach einem Merge in `main` wird der Deployment-Workflow automatisch gestartet.

Beispiel für eine neue Branch:

```bash
git switch main
git pull origin main
git switch -c feature/section-name
```

## Deployment

Der Produktions-Build wird mit GitHub Actions erstellt und über GitHub Pages veröffentlicht.

Die Vite-Basisadresse ist für dieses Repository konfiguriert:

```json
"build": "vite build --base=/lingua-coders-team/"
```

Live-Version:

**https://avaliany.github.io/lingua-coders-team/**

## Team

Das Projekt wird vom **Lingua Coders Team** entwickelt.

Repository-Inhaber: [AvalianY](https://github.com/AvalianY)

---

<div align="center">

Entwickelt als Teamprojekt zur praktischen Anwendung von HTML, CSS, Git und GitHub.

</div>
