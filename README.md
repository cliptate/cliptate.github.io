# Cliptate

[English](README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md)

Source for the [Cliptate website](https://cliptate.github.io). The macOS application lives in [cliptate/cliptate](https://github.com/cliptate/cliptate). Website content follows the application’s main branch; packaged features depend on the chosen Release.

Transcribe, trim pauses, edit captions, and synthesize speech on your Mac. Enable AI correction and translation when needed. The free GitHub build unlocks all models and Pro features, with a CLI for scripts.

## Core capabilities

- **Accurate, editable subtitle extraction** — Choose Parakeet, Qwen3 ASR, FireRed, or Cohere models for local audio/video transcription. Add custom vocabulary for specialist terms.
- **Trim pauses in bulk and shape rough cuts faster** — Auto-detect silence and bulk-trim dead air from podcasts, interviews, and recordings.
- **Auto-identify speakers and label dialogue** — Use Sortformer to distinguish speakers in supported transcription pipelines. Silero VAD detects speech activity, making interviews and meeting recordings easier to organize.
- **From narration to original voices** — Qwen3 TTS offers preset voices, reference-audio cloning, emotion control, and voice design. Available controls depend on the selected model.
- **Correct transcripts and create bilingual captions** — Configure an AI provider and API key for correction and keyword emphasis, including custom OpenAI-compatible endpoints. Apple Translation handles captions for supported language pairs.
- **Give spoken content rhythm and emphasis** — Configure filler-word filtering, scaling, and zoom. Extract highlights with your configured AI provider, and set landscape/portrait caption styles and translation placement.

## Download and install

Requires Apple Silicon (M1 or newer) and macOS 15 or later. Model downloads and memory requirements vary; allow enough storage for your selections.

- **[Free GitHub build](https://github.com/cliptate/cliptate/releases)** — All models and Pro features are free, with no subscription. Includes the native CLI and in-app updates, plus Accessibility-backed text insertion and global shortcuts with permission. Online AI providers charge separately.
- **[App Store build](https://apps.apple.com/cn/app/%E5%89%AA%E8%A8%80-cliptate/id6754441004?mt=12)** — App Store builds use subscriptions and sandbox restrictions and do not include the CLI. Dictated text uses copy and paste, with channel-specific shortcut restrictions. Check the store listing for features and pricing.
- **[Nightly preview builds](https://github.com/cliptate/cliptate/releases/tag/nightly)** — Nightly builds track main periodically and may contain unreleased changes. Check each build’s notes for included features.

1. Download Cliptate.dmg from a Release and drag the app into Applications. Use its SHA-256 file to verify the download.
2. Open the app and download selected models. Allow microphone access for dictation and Accessibility permission if you want automatic text insertion.
3. Import media to start transcribing. Install the CLI before using it, and restart Cliptate after replacing the app during an upgrade.

## Native CLI · GitHub build

The CLI shares the app’s models, language, and vocabulary, starting Cliptate in the background when needed. Copy the install command from Settings → Command Line and add ~/.local/bin to PATH.

```sh
cliptate transcribe interview.mp4 --format json
cliptate transcribe a.wav b.mp4 --format vtt --output-dir subtitles
cliptate tts --text-file narration.txt -o narration.wav --download
cliptate dictionary add "Cliptate"
cliptate dictionary import words.txt
```

Transcription accepts local files and outputs text, JSON, Markdown, SRT, or VTT. CLI requests create no projects or history; one transcription or speech request runs at a time. TTS is in the latest source: use a build containing this feature. Check cliptate --help for commands in older builds.

[Full CLI guide](https://github.com/cliptate/cliptate/blob/main/docs/cli.md)

## Privacy and performance

Transcription, silence detection, diarization, and TTS run on your Mac. Online AI features send relevant text and any context you choose to the configured service.

- Local speech inference needs no media upload or AI API key.
- Model downloads need internet access; local speech features work offline once cached.
- AI correction, keyword emphasis, and dictation enhancement use your configured provider; online services may charge separately.
- For sensitive content, use local speech features and Apple Translation; language packs may need downloading first.

## Professional output

AI Cut exports timelines, captions, audio, and video. The CLI also provides JSON, Markdown, and VTT for automation.

- **FCPXML** — Timeline project exchange
- **SRT** — Universal subtitle delivery
- **ASS** — Styled subtitle support
- **TXT** — Timestamped transcript

FCPXML targets Final Cut Pro with a Resolve compatibility option. Import captions in formats your editor supports. Video: MP4 / MOV / M4V. Audio: M4A / WAV.

## Website development

Built with Astro, TypeScript, and Tailwind CSS. Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run check:seo
npm run preview
```

Build output is in dist/. Pushes to main trigger .github/workflows/deploy.yml to build and publish to GitHub Pages.

## Articles and comparisons

The `/blog/` index covers Cliptate vs Wispr Flow, MacWhisper, and Descript. Each article includes a workflow comparison, edition differences, a practical trial, and dated official sources in all five languages. A compact homepage entry and navigation link to the articles. `/guide/` holds installation details, models, CLI examples, and common questions, leaving the homepage focused on the product.

## Content maintenance

Chinese keeps the existing root URLs. English, Japanese, Korean, and German use `/en/`, `/ja/`, `/ko/`, and `/de/`, including guides and articles. Each URL renders one language without JavaScript, with matching metadata, self-canonical, reciprocal hreflang, and sitemap alternates. Language links preserve the current page; browser language preferences do not override its URL.

Page templates live in `src/views/`; `src/pages/` contains static route wrappers. After building, `npm run check:seo` checks every generated locale, internal links, anchors, images, core metadata, and structured-data relationships. Deployment runs type and SEO checks before publication. Submit `/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools after deployment; ranking and indexing require observation in those services. FAQ JSON-LD describes the visible questions and answers; Google [retired FAQ rich results](https://developers.google.com/search/updates#june-2026), so it is not a Google rich-result tactic.

Before changing claims, check the app source, docs/development.md, docs/cli.md, and release notes. Update all five languages. Distinguish local speech from optional online AI, GitHub from App Store builds, GUI from CLI exports, and released features from latest-source additions.

- src/data/site.ts
- src/views/
- scripts/check-seo.py
- src/data/guide.ts
- src/data/blog.ts
- src/pages/blog/
- src/pages/guide/
- src/components/SiteHeader.astro
- src/styles/editorial.css
- src/pages/index.astro
- src/components/LanguageToggle.astro
- public/assets/screenshots/

[User guide](https://github.com/cliptate/cliptate#readme) · [Release notes](https://github.com/cliptate/cliptate/tree/main/docs/release-notes) · [Issues and feedback](https://github.com/cliptate/cliptate/issues)
