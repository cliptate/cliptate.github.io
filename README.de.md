# Cliptate

[English](README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md)

Quellcode der [Cliptate-Website](https://cliptate.github.io). Die macOS-App liegt in [cliptate/cliptate](https://github.com/cliptate/cliptate). Die Inhalte folgen dem main-Zweig der App; Funktionen der Installationspakete hängen vom jeweiligen Release ab.

Transkribieren, Pausen schneiden, Untertitel bearbeiten und Sprache am Mac erzeugen. KI-Korrektur und Übersetzung bei Bedarf aktivieren. Die kostenlose GitHub-Version bietet alle Modelle, Pro-Funktionen und eine CLI.

![Cliptate-Startseite auf Deutsch mit Diktierstatistik und Aktivitätsverlauf](public/assets/screenshots/home.de.jpg)

*Die Startseite zeigt die Diktierstatistik, die Aktivität der letzten 12 Monate und Aufzeichnungen nach Quelle.*

## Kernfunktionen

- **Präzise, bearbeitbare Untertitel** — Parakeet, Qwen3 ASR, FireRed oder Cohere für lokale Audio- und Videotranskription wählen. Fachbegriffe im eigenen Wörterbuch ergänzen.
- **Pausen gesammelt entfernen, Rohschnitte schneller erstellen** — Stille automatisch erkennen und unnötige Pausen aus Podcasts, Interviews und Aufnahmen entfernen.
- **Sprecher automatisch erkennen und Dialoge zuordnen** — Sortformer unterscheidet Sprecher in unterstützten Transkriptionsabläufen. Silero VAD erkennt Sprachaktivität und erleichtert die Aufbereitung von Interviews und Meetings.
- **Von Erzählstimmen bis zum eigenen Stimmdesign** — Qwen3 TTS bietet voreingestellte Stimmen, Klonen per Referenzaudio, Emotionssteuerung und Stimmdesign. Die verfügbaren Funktionen hängen vom Modell ab.
- **Transkripte korrigieren und zweisprachige Untertitel erstellen** — KI-Anbieter und API-Schlüssel für Korrektur und Stichwortbetonung konfigurieren, auch mit eigenen OpenAI-kompatiblen Endpunkten. Apple Translation übersetzt Untertitel für unterstützte Sprachpaare.
- **Sprechvideos mit Rhythmus und Akzenten gestalten** — Füllwortfilter, Skalierung und Zoom einstellen. Highlights mit dem konfigurierten KI-Anbieter finden; Untertitelstile für Quer- und Hochformat sowie die Übersetzungsposition wählen.

## Download und Installation

Erfordert Apple Silicon (M1 oder neuer) und macOS 15 oder neuer. Modellgrößen und RAM-Anforderungen variieren; ausreichend Speicherplatz einplanen.

- **[Kostenlose GitHub-Version](https://github.com/cliptate/cliptate/releases)** — Alle Modelle und Pro-Funktionen kostenlos, ohne Abo. Mit nativer CLI, Updates in der App und Texteingabe sowie globalen Tastaturkürzeln nach erteilter Berechtigung. Online-KI-Anbieter berechnen separat.
- **[App-Store-Version](https://apps.apple.com/cn/app/%E5%89%AA%E8%A8%80-cliptate/id6754441004?mt=12)** — App-Store-Versionen verwenden Abos und Sandbox-Einschränkungen, ohne CLI. Diktierter Text wird kopiert und eingefügt; Tastaturkürzel sind eingeschränkt. Funktionen und Preise im Store prüfen.
- **[Nightly-Vorabversionen](https://github.com/cliptate/cliptate/releases/tag/nightly)** — Nightly-Versionen folgen regelmäßig main und können unveröffentlichte Änderungen enthalten. Enthaltene Funktionen in den jeweiligen Hinweisen prüfen.

1. Cliptate.dmg aus einem Release laden und die App in Programme ziehen. Mit der zugehörigen SHA-256-Datei den Download prüfen.
2. App öffnen und Modelle wählen und laden. Mikrofon für Diktate und Bedienungshilfen für automatische Texteingabe erlauben.
3. Medien zum Transkribieren importieren. CLI vorher installieren und Cliptate nach einem Austausch der App neu starten.

## Native CLI · GitHub-Version

Die CLI nutzt Modelle, Sprache und Wörterbuch der App und startet Cliptate bei Bedarf im Hintergrund. Installationsbefehl unter Einstellungen → Kommandozeile kopieren und ~/.local/bin zum PATH hinzufügen.

```sh
cliptate transcribe interview.mp4 --format json
cliptate transcribe a.wav b.mp4 --format vtt --output-dir subtitles
cliptate tts --text-file narration.txt -o narration.wav --download
cliptate dictionary add "Cliptate"
cliptate dictionary import words.txt
```

Transkription akzeptiert lokale Dateien und gibt text, JSON, Markdown, SRT oder VTT aus. CLI-Anfragen erstellen keine Projekte oder Verlaufseinträge; jeweils ein Transkriptions- oder Spracherzeugungsauftrag läuft. TTS ist im aktuellen Quellcode enthalten: eine passende Version verwenden. Ältere Versionen mit cliptate --help prüfen.

[Vollständige CLI-Anleitung](https://github.com/cliptate/cliptate/blob/main/docs/cli.md)

## Datenschutz und Leistung

Transkription, Stille-Erkennung, Sprecherzuordnung und TTS laufen am Mac. Online-KI sendet relevante Texte und ausgewählte Kontextdaten an den konfigurierten Dienst.

- Lokale Sprachinferenz benötigt weder Medien-Upload noch KI-API-Schlüssel.
- Modell-Downloads benötigen Internet; nach dem Zwischenspeichern funktionieren lokale Sprachfunktionen offline.
- KI-Korrektur, Stichwortbetonung und Diktatverbesserung nutzen Ihren Anbieter; Online-Dienste können separate Kosten verursachen.
- Für sensible Inhalte lokale Sprachfunktionen und Apple Translation nutzen; Sprachpakete müssen gegebenenfalls zuerst geladen werden.

## Professioneller Export

AI Cut exportiert Timelines, Untertitel, Audio und Video. Die CLI bietet zusätzlich JSON, Markdown und VTT für Automatisierungen.

- **FCPXML** — Austausch von Timeline-Projekten
- **SRT** — Universelles Untertitelformat
- **ASS** — Gestaltete Untertitel
- **TXT** — Transkript mit Zeitstempeln

FCPXML für Final Cut Pro mit Resolve-Kompatibilitätsoption. Untertitel in den vom Editor unterstützten Formaten importieren. Video: MP4 / MOV / M4V. Audio: M4A / WAV.

## Website-Entwicklung

Erstellt mit Astro, TypeScript und Tailwind CSS. Erfordert Node.js 22.12 oder neuer.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run check:seo
npm run preview
```

Build-Ausgabe liegt in dist/. Pushes auf main lösen .github/workflows/deploy.yml zum Bauen und Veröffentlichen auf GitHub Pages aus.

## Artikel und Vergleiche

Unter `/blog/` stehen Vergleiche von Cliptate mit Wispr Flow, MacWhisper und Descript. Jeder Artikel enthält Arbeitsabläufe, Versionsunterschiede, einen praktischen Testvorschlag und datierte offizielle Quellen in allen fünf Sprachen. Ein kompakter Einstieg und die Navigation führen zu den Artikeln. `/guide/` bündelt Installation, Modelle, CLI-Beispiele und häufige Fragen; die Startseite konzentriert sich auf das Produkt.

## Inhaltspflege

`/changelog/` und `/changelog/<tag>/` zeigen v1.0–v1.3 in fünf Sprachen. Navigation und Startseiten-Footer verlinken das Archiv. Details enthalten Funktionen, Upgrade-Hinweise, Grenzen, GitHub-Originale und englische Prüf-/Commit-Protokolle. Statisches HTML, Article/ItemList, lokalisierte Breadcrumbs und sitemap `lastmod` mit dem tatsächlichen Änderungsdatum werden erzeugt.

Für eine neue stabile Veröffentlichung `cliptate/cliptate/docs/release-notes/<tag>.md` und das GitHub Release prüfen, Metadaten in `src/data/release-metadata.json` ergänzen und alle Felder in `src/data/changelog.ts` übersetzen. `date` ist das Versionsdatum im Original, `published` die erste Website-Veröffentlichung, `updated` das Änderungsdatum. `published` bei Bearbeitung beibehalten; `updated` nur bei wesentlichen Änderungen anpassen. Routen, Sprachlinks, Reihenfolge, Schema und Sitemap entstehen automatisch. Nightly und unveröffentlichte Funktionen bleiben außerhalb des Archivs. Veröffentlichungen werden ausdrücklich gepflegt, ohne automatische Synchronisierung oder Abruf zur Laufzeit.

Chinesisch behält die bisherigen Root-URLs. Englisch, Japanisch, Koreanisch und Deutsch verwenden `/en/`, `/ja/`, `/ko/` und `/de/`, auch für Anleitung und Artikel. Jede URL liefert statisches HTML in einer Sprache ohne JavaScript. Sprachlinks behalten die aktuelle Seite; Metadaten, Canonical, hreflang und Sitemap stimmen überein.

Vorlagen liegen in `src/views/`, Routen in `src/pages/`. Nach dem Build prüft `npm run check:seo` Sprachseiten, Links, Bilder, zentrale Metadaten und strukturierte Daten. CI führt diese Prüfungen vor der Veröffentlichung aus. Danach `/sitemap-index.xml` in Search Console und Bing Webmaster Tools einreichen und Indexierung sowie Rankings beobachten. FAQ-JSON-LD beschreibt sichtbare Fragen und Antworten; Google hat FAQ-Rich-Results eingestellt.

Vor Änderungen App-Quellcode, docs/development.md, docs/cli.md und Versionshinweise prüfen. Alle fünf Sprachen aktualisieren; lokale Sprachfunktionen und Online-KI, GitHub und App Store, GUI und CLI sowie veröffentlichte und neue Quellcode-Funktionen unterscheiden.

- src/data/site.ts
- src/views/
- scripts/check-seo.py
- src/data/guide.ts
- src/data/blog.ts
- src/data/changelog.ts / src/data/release-metadata.json
- src/pages/changelog/
- src/pages/blog/
- src/pages/guide/
- src/components/SiteHeader.astro
- src/styles/editorial.css
- src/pages/index.astro
- src/components/LanguageToggle.astro
- public/assets/screenshots/

[Anleitung](https://github.com/cliptate/cliptate#readme) · [Versionshinweise](https://github.com/cliptate/cliptate/tree/main/docs/release-notes) · [Probleme und Feedback](https://github.com/cliptate/cliptate/issues)
