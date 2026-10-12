# Cliptate

[English](README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md)

[Cliptate 公式サイト](https://cliptate.github.io) のソースです。macOS アプリは [cliptate/cliptate](https://github.com/cliptate/cliptate) にあります。サイトはアプリの main ブランチに基づき、配布版の機能は各 Release によって異なります。

Mac で文字起こし、無音カット、字幕編集、音声合成。必要に応じて AI 校正や翻訳も利用できます。無料の GitHub 版は全モデルと Pro 機能を開放し、CLI でスクリプトと連携。

## 主な機能

- **正確で編集可能な字幕を生成** — Parakeet、Qwen3 ASR、FireRed、Cohere からモデルを選んでローカル文字起こし。専門用語はカスタム辞書で補助。
- **無音をまとめてカットし、ラフカットをすばやく作成** — ポッドキャスト、インタビュー、録音の無音部分を自動検出し、まとめてカット。
- **話者を自動識別し、会話をラベル付け** — 対応する文字起こし処理で Sortformer により話者を区別。Silero VAD は音声区間を検出し、インタビューや会議の記録整理を補助。
- **ナレーションからオリジナル音声まで** — Qwen3 TTS でプリセット音声、参照音声によるクローン、感情制御、音声デザイン。利用できる機能は選択したモデルによって異なります。
- **校正して二言語字幕を作成** — AI サービスと API キーを設定して校正や重要語の抽出を実行。カスタム OpenAI 互換エンドポイントにも対応。字幕翻訳には対応言語ペアで Apple 翻訳を使用。
- **話し中心の動画にテンポと強調を** — フィラー除去、拡大、ズームを設定。設定済み AI サービスで注目箇所を抽出し、横・縦画面の字幕スタイルや翻訳の位置を調整。

## ダウンロードとインストール

Apple Silicon（M1 以降）と macOS 15 以降が必要。モデルの容量・メモリ要件は選択により異なるため、十分な空き容量を確保してください。

- **[無料 GitHub 版](https://github.com/cliptate/cliptate/releases)** — 全モデルと Pro 機能を無料開放、サブスクリプション不要。ネイティブ CLI とアプリ内更新、許可後のテキスト挿入・グローバルショートカットに対応。オンライン AI の料金はサービス側で別途発生します。
- **[App Store 版](https://apps.apple.com/cn/app/%E5%89%AA%E8%A8%80-cliptate/id6754441004?mt=12)** — App Store 版はサブスクリプションとサンドボックス制限を採用し、CLI は含みません。音声入力はコピー・貼り付けで利用し、ショートカットにも制限があります。機能と価格はストアで確認してください。
- **[Nightly プレビュービルド](https://github.com/cliptate/cliptate/releases/tag/nightly)** — Nightly は main から定期生成され、正式リリース前の変更を含む場合があります。各ビルドの説明を確認してください。

1. Release の Cliptate.dmg をダウンロードし、アプリケーションへドラッグ。同ページの SHA-256 ファイルで検証できます。
2. アプリを開いてモデルを選択・ダウンロード。音声入力にはマイク、自動テキスト挿入にはアクセシビリティを許可。
3. 素材を取り込んで文字起こしを開始。CLI は先にインストールし、アプリ更新後は Cliptate を再起動。

## ネイティブ CLI · GitHub 版

CLI はアプリのモデル・言語・辞書を共有し、必要に応じて Cliptate をバックグラウンド起動。「設定 → コマンドライン」でインストールコマンドをコピーし、~/.local/bin を PATH に追加。

```sh
cliptate transcribe interview.mp4 --format json
cliptate transcribe a.wav b.mp4 --format vtt --output-dir subtitles
cliptate tts --text-file narration.txt -o narration.wav --download
cliptate dictionary add "Cliptate"
cliptate dictionary import words.txt
```

文字起こしはローカルファイルを受け取り、text・JSON・Markdown・SRT・VTT を出力。プロジェクトや履歴は作らず、文字起こし・音声生成は一度に一件実行。TTS は最新ソースに追加済みのため、対応ビルドを使用してください。旧版の対応コマンドは cliptate --help で確認できます。

[CLI の詳しい使い方](https://github.com/cliptate/cliptate/blob/main/docs/cli.md)

## プライバシーとパフォーマンス

文字起こし、無音検出、話者識別、TTS は Mac 内で処理。オンライン AI を使うと、対象のテキストと選択した文脈情報が設定先のサービスに送られます。

- ローカル音声推論にはメディアのアップロードも AI API キーも不要。
- モデルの初回ダウンロードには通信が必要。保存後はローカル音声機能をオフラインで利用できます。
- AI 校正、重要語の抽出、音声入力の補助は設定したサービスを使用。オンラインサービスは別途課金される場合があります。
- 機密性の高い内容にはローカル音声機能と Apple 翻訳を利用。言語パックの事前ダウンロードが必要な場合があります。

## プロ向けの書き出し

AI カットはタイムライン、字幕、音声、動画を書き出し。CLI では自動化向けに JSON、Markdown、VTT も出力できます。

- **FCPXML** — タイムラインプロジェクトの交換
- **SRT** — 汎用字幕の納品
- **ASS** — スタイル付き字幕に対応
- **TXT** — タイムスタンプ付きテキスト

FCPXML は Final Cut Pro 向けで、Resolve 互換オプションも用意。字幕は編集ソフトが対応する形式で読み込めます。動画：MP4 / MOV / M4V、音声：M4A / WAV。

## サイト開発

Astro、TypeScript、Tailwind CSS を使用。Node.js 22.12 以降が必要です。

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

ビルド出力は dist/。main への push で .github/workflows/deploy.yml がビルドし、GitHub Pages に公開します。

## コンテンツ管理

機能の説明を変更する前に、アプリのソース、docs/development.md、docs/cli.md、リリースノートを確認。5 言語を更新し、ローカル音声とオンライン AI、GitHub と App Store、GUI と CLI、公開済みと最新ソースの機能を区別してください。

- src/data/site.ts
- src/data/guide.ts
- src/pages/index.astro
- src/components/LanguageToggle.astro
- public/assets/screenshots/

[使い方](https://github.com/cliptate/cliptate#readme) · [リリースノート](https://github.com/cliptate/cliptate/tree/main/docs/release-notes) · [不具合・フィードバック](https://github.com/cliptate/cliptate/issues)
