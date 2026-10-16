import type { LocalizedString } from './languages';

const l = (zh: string, en: string, ja: string, ko: string, de: string): LocalizedString => ({ zh, en, ja, ko, de });

export const guide = {
  page: {
    title: l('从安装到第一份字幕。', 'From installation to your first captions.', 'インストールから最初の字幕まで。', '설치부터 첫 자막까지.', 'Von der Installation zu den ersten Untertiteln.'),
    metaTitle: l('使用指南：安装、模型与 CLI | Cliptate', 'User guide: installation, models & CLI | Cliptate', '使い方：インストール、モデル、CLI | Cliptate', '사용 가이드: 설치, 모델과 CLI | Cliptate', 'Anleitung: Installation, Modelle & CLI | Cliptate'),
    description: l('选择发行版本，准备本地模型，再把 Cliptate 接入你的日常工作流。安装步骤、命令行示例和常见问题都在这里。', 'Choose an edition, prepare local models, and bring Cliptate into your workflow. Installation steps, CLI examples, and common questions in one place.', '配布版を選び、ローカルモデルを準備して、いつもの作業に Cliptate を取り入れましょう。インストール手順、CLI の例、よくある質問をまとめました。', '버전을 선택하고 로컬 모델을 준비해 Cliptate를 일상 작업에 연결하세요. 설치 단계, CLI 예제와 자주 묻는 질문을 모았습니다.', 'Eine Version wählen, lokale Modelle vorbereiten und Cliptate in den Arbeitsablauf integrieren. Installation, CLI-Beispiele und häufige Fragen an einem Ort.'),
    contents: l('本页内容', 'On this page', 'このページの内容', '이 페이지의 내용', 'Auf dieser Seite'),
    install: l('安装与上手', 'Installation', 'インストール', '설치와 시작', 'Installation'),
    models: l('模型与设置', 'Models & settings', 'モデルと設定', '모델과 설정', 'Modelle & Einstellungen'),
    cli: l('命令行', 'Command line', 'コマンドライン', '명령줄', 'Kommandozeile'),
    faq: l('常见问题', 'Common questions', 'よくある質問', '자주 묻는 질문', 'Häufige Fragen'),
    read: l('查看安装与使用指南', 'Read the setup & user guide', 'インストールと使い方を見る', '설치 및 사용 가이드 보기', 'Installation und Anleitung lesen'),
  },
  releasesUrl: 'https://github.com/cliptate/cliptate/releases',
  nightlyUrl: 'https://github.com/cliptate/cliptate/releases/tag/nightly',
  cliUrl: 'https://github.com/cliptate/cliptate/blob/main/docs/cli.md',
  docsUrl: 'https://github.com/cliptate/cliptate#readme',
  issuesUrl: 'https://github.com/cliptate/cliptate/issues',
  releaseNotesUrl: 'https://github.com/cliptate/cliptate/tree/main/docs/release-notes',
  screenshot: {
    title: l('从一个原生 Mac 工作台开始。', 'Start in one native Mac workspace.', 'ひとつのネイティブ Mac アプリから。', '하나의 네이티브 Mac 작업 공간에서 시작하세요.', 'Ein nativer Mac-Arbeitsbereich als Ausgangspunkt.'),
    caption: l('首页展示累计听写统计、最近 12 个月的使用记录和记录来源。', 'Home shows dictation totals, activity over the last 12 months, and records by source.', 'ホームには音声入力の累計、過去 12 か月のアクティビティ、記録の内訳が表示されます。', '홈에서 누적 받아쓰기 통계, 최근 12개월의 활동, 유형별 기록을 확인할 수 있습니다.', 'Die Startseite zeigt die Diktierstatistik, die Aktivität der letzten 12 Monate und Aufzeichnungen nach Quelle.'),
    alt: l('Cliptate 简体中文首页，显示听写统计和使用记录', 'Cliptate Home dashboard in English with dictation statistics and activity history', '音声入力の統計とアクティビティを表示する Cliptate 日本語ホーム画面', '받아쓰기 통계와 활동 기록을 보여주는 Cliptate 한국어 홈 화면', 'Cliptate-Startseite auf Deutsch mit Diktierstatistik und Aktivitätsverlauf'),
  },
  models: {
    kicker: l('模型与日常使用', 'Models and everyday use', 'モデルと日々の作業', '모델과 일상 작업', 'Modelle und tägliche Arbeit'),
    title: l('按任务选择模型，保留你的工作习惯。', 'Choose models for the task. Keep your workflow.', '作業に合うモデルを選び、いつもの流れで。', '작업에 맞는 모델을 선택하고 익숙한 흐름을 유지하세요.', 'Passende Modelle wählen und im gewohnten Ablauf arbeiten.'),
    items: [
      {
        title: l('在应用内管理模型', 'Manage models in the app', 'アプリ内でモデル管理', '앱에서 모델 관리', 'Modelle direkt in der App verwalten'),
        body: l('浏览 ASR、TTS、VAD、说话人识别和对齐模型，查看下载状态与存储占用。不同模型的语言覆盖、内存需求和速度各不相同。', 'Browse ASR, TTS, VAD, diarization, and alignment models, with download status and storage usage. Language coverage, memory needs, and speed vary by model.', 'ASR、TTS、VAD、話者識別、アライメントのモデルとダウンロード状況・容量を確認。対応言語、メモリ、速度はモデルごとに異なります。', 'ASR, TTS, VAD, 화자 분리, 정렬 모델과 다운로드 상태, 저장 공간을 확인하세요. 언어, 메모리 요구량, 속도는 모델마다 다릅니다.', 'ASR-, TTS-, VAD-, Sprecher- und Alignment-Modelle mit Downloadstatus und Speicherbedarf durchsuchen. Sprachen, RAM-Bedarf und Geschwindigkeit unterscheiden sich je nach Modell.'),
      },
      {
        title: l('复用已有模型缓存', 'Reuse cached model weights', '保存済みモデルを再利用', '기존 모델 캐시 재사용', 'Vorhandene Modellgewichte wiederverwenden'),
        body: l('GitHub 版可复用兼容的 Hugging Face 缓存，避免重复下载或复制权重。首次使用前准备好所选模型，之后本地语音功能即可离线运行。', 'GitHub builds reuse compatible Hugging Face caches without downloading or copying weights again. Prepare selected models once, then use local speech features offline.', 'GitHub 版は互換性のある Hugging Face キャッシュを再利用。重複ダウンロードやコピーを避け、準備後はローカル音声機能をオフラインで利用できます。', 'GitHub 버전은 호환되는 Hugging Face 캐시를 재사용해 중복 다운로드나 복사를 줄입니다. 모델을 준비한 후 로컬 음성 기능을 오프라인으로 사용하세요.', 'GitHub-Versionen verwenden kompatible Hugging-Face-Caches ohne erneuten Download oder Kopie. Modelle einmal vorbereiten, danach lokale Sprachfunktionen offline nutzen.'),
      },
      {
        title: l('词典、历史与配置预设', 'Vocabulary, history, and presets', '辞書、履歴、設定プリセット', '사전, 기록 및 설정 프리셋', 'Wörterbuch, Verlauf und Vorlagen'),
        body: l('维护品牌名和专业词汇，整理转写与合成历史，保存常用配置预设。也可在设置中选择登录时启动。', 'Maintain brand names and specialist terms, manage transcript and synthesis history, and save configuration presets. Enable launch at login in Settings.', 'ブランド名や専門用語を登録し、文字起こし・音声合成の履歴を整理。よく使う設定を保存し、ログイン時の起動も設定できます。', '브랜드명과 전문 용어를 관리하고 전사·합성 기록과 자주 쓰는 설정을 저장하세요. 설정에서 로그인 시 실행도 선택할 수 있습니다.', 'Marken und Fachbegriffe pflegen, Transkript- und Syntheseverlauf verwalten und Einstellungen als Vorlagen speichern. Start bei Anmeldung in den Einstellungen aktivieren.'),
      },
    ],
  },
  automation: {
    kicker: l('原生 CLI · GitHub 版', 'Native CLI · GitHub build', 'ネイティブ CLI · GitHub 版', '네이티브 CLI · GitHub 버전', 'Native CLI · GitHub-Version'),
    title: l('让脚本和 AI Agent 调用 Mac 上的模型。', 'Put your Mac’s models to work in scripts and AI agents.', 'Mac のモデルをスクリプトや AI エージェントから。', '스크립트와 AI 에이전트에서 Mac의 모델을 사용하세요.', 'Mac-Modelle in Skripten und KI-Agenten nutzen.'),
    description: l('CLI 复用应用的模型、语言和词典，必要时在后台启动 Cliptate。从「设置 → 命令行」复制安装命令，并将 ~/.local/bin 加入 PATH。', 'The CLI shares the app’s models, language, and vocabulary, starting Cliptate in the background when needed. Copy the install command from Settings → Command Line and add ~/.local/bin to PATH.', 'CLI はアプリのモデル・言語・辞書を共有し、必要に応じて Cliptate をバックグラウンド起動。「設定 → コマンドライン」でインストールコマンドをコピーし、~/.local/bin を PATH に追加。', 'CLI는 앱의 모델, 언어, 사전을 공유하며 필요하면 Cliptate를 백그라운드에서 실행합니다. 설정 → 명령줄에서 설치 명령을 복사하고 ~/.local/bin을 PATH에 추가하세요.', 'Die CLI nutzt Modelle, Sprache und Wörterbuch der App und startet Cliptate bei Bedarf im Hintergrund. Installationsbefehl unter Einstellungen → Kommandozeile kopieren und ~/.local/bin zum PATH hinzufügen.'),
    examples: [
      { title: l('批量转写与结构化结果', 'Batch transcription and structured results', '一括文字起こしと構造化出力', '일괄 전사 및 구조화된 결과', 'Stapeltranskription und strukturierte Ergebnisse'), code: 'cliptate transcribe interview.mp4 --format json\ncliptate transcribe a.wav b.mp4 --format vtt --output-dir subtitles' },
      { title: l('生成本地 WAV 语音', 'Generate local WAV speech', 'ローカル WAV 音声を生成', '로컬 WAV 음성 생성', 'Lokale WAV-Sprachausgabe erzeugen'), code: 'cliptate tts --text-file narration.txt -o narration.wav --download' },
      { title: l('维护识别词典', 'Maintain recognition vocabulary', '認識辞書を管理', '인식 사전 관리', 'Erkennungswörterbuch pflegen'), code: 'cliptate dictionary add "Cliptate"\ncliptate dictionary import words.txt' },
    ],
    note: l('转写支持本地文件及 text、JSON、Markdown、SRT、VTT 输出。CLI 不创建项目或历史记录；一次运行一个转写或语音生成请求。TTS 命令已加入最新源码，请选用包含该功能的构建；旧版可用 cliptate --help 查看支持的命令。', 'Transcription accepts local files and outputs text, JSON, Markdown, SRT, or VTT. CLI requests create no projects or history; one transcription or speech request runs at a time. TTS is in the latest source: use a build containing this feature. Check cliptate --help for commands in older builds.', '文字起こしはローカルファイルを受け取り、text・JSON・Markdown・SRT・VTT を出力。プロジェクトや履歴は作らず、文字起こし・音声生成は一度に一件実行。TTS は最新ソースに追加済みのため、対応ビルドを使用してください。旧版の対応コマンドは cliptate --help で確認できます。', '전사는 로컬 파일을 받아 text, JSON, Markdown, SRT, VTT로 출력합니다. CLI는 프로젝트나 기록을 만들지 않고 전사 또는 음성 요청을 한 번에 하나씩 실행합니다. TTS는 최신 소스에 추가되었으므로 해당 기능이 포함된 빌드를 사용하세요. 이전 버전은 cliptate --help로 확인하세요.', 'Transkription akzeptiert lokale Dateien und gibt text, JSON, Markdown, SRT oder VTT aus. CLI-Anfragen erstellen keine Projekte oder Verlaufseinträge; jeweils ein Transkriptions- oder Spracherzeugungsauftrag läuft. TTS ist im aktuellen Quellcode enthalten: eine passende Version verwenden. Ältere Versionen mit cliptate --help prüfen.'),
    link: l('完整 CLI 使用指南', 'Full CLI guide', 'CLI の詳しい使い方', '전체 CLI 가이드', 'Vollständige CLI-Anleitung'),
  },
  download: {
    kicker: l('下载与安装', 'Download and install', 'ダウンロードとインストール', '다운로드 및 설치', 'Download und Installation'),
    title: l('选择适合你的 Mac 版本。', 'Choose your Mac build.', 'Mac 用の配布版を選択。', 'Mac용 버전을 선택하세요.', 'Die passende Mac-Version wählen.'),
    requirements: l('需要 Apple Silicon（M1 及更新芯片）和 macOS 15 或更新版本。模型大小与内存需求取决于所选模型，请预留足够空间。', 'Requires Apple Silicon (M1 or newer) and macOS 15 or later. Model downloads and memory requirements vary; allow enough storage for your selections.', 'Apple Silicon（M1 以降）と macOS 15 以降が必要。モデルの容量・メモリ要件は選択により異なるため、十分な空き容量を確保してください。', 'Apple Silicon(M1 이상)과 macOS 15 이상이 필요합니다. 모델 크기와 메모리 요구량이 다르므로 충분한 저장 공간을 확보하세요.', 'Erfordert Apple Silicon (M1 oder neuer) und macOS 15 oder neuer. Modellgrößen und RAM-Anforderungen variieren; ausreichend Speicherplatz einplanen.'),
    direct: {
      title: l('GitHub 免费版', 'Free GitHub build', '無料 GitHub 版', '무료 GitHub 버전', 'Kostenlose GitHub-Version'),
      body: l('全部模型与 Pro 功能免费开放，无需订阅。提供原生 CLI 和应用内更新；可在授权后使用辅助功能支持的文本输入与全局快捷键。在线 AI 服务的费用由服务商另行收取。', 'All models and Pro features are free, with no subscription. Includes the native CLI and in-app updates, plus Accessibility-backed text insertion and global shortcuts with permission. Online AI providers charge separately.', '全モデルと Pro 機能を無料開放、サブスクリプション不要。ネイティブ CLI とアプリ内更新、許可後のテキスト挿入・グローバルショートカットに対応。オンライン AI の料金はサービス側で別途発生します。', '구독 없이 모든 모델과 Pro 기능을 무료로 제공합니다. 네이티브 CLI, 앱 내 업데이트, 권한 허용 후 텍스트 삽입과 글로벌 단축키를 지원합니다. 온라인 AI 제공업체 요금은 별도입니다.', 'Alle Modelle und Pro-Funktionen kostenlos, ohne Abo. Mit nativer CLI, Updates in der App und Texteingabe sowie globalen Tastaturkürzeln nach erteilter Berechtigung. Online-KI-Anbieter berechnen separat.'),
      cta: l('前往 GitHub Releases', 'Open GitHub Releases', 'GitHub Releases を開く', 'GitHub Releases 열기', 'GitHub Releases öffnen'),
    },
    store: {
      title: l('App Store 版', 'App Store build', 'App Store 版', 'App Store 버전', 'App-Store-Version'),
      body: l('通过 App Store 获取的版本采用订阅策略和沙盒限制，不包含 CLI。听写文本通过复制粘贴使用，快捷键行为也受该渠道限制；功能与价格以商店页面为准。', 'App Store builds use subscriptions and sandbox restrictions and do not include the CLI. Dictated text uses copy and paste, with channel-specific shortcut restrictions. Check the store listing for features and pricing.', 'App Store 版はサブスクリプションとサンドボックス制限を採用し、CLI は含みません。音声入力はコピー・貼り付けで利用し、ショートカットにも制限があります。機能と価格はストアで確認してください。', 'App Store 버전은 구독 정책과 샌드박스 제한을 적용하며 CLI가 없습니다. 받아쓴 텍스트는 복사해 붙여넣고 단축키도 제한됩니다. 기능과 가격은 스토어 페이지를 확인하세요.', 'App-Store-Versionen verwenden Abos und Sandbox-Einschränkungen, ohne CLI. Diktierter Text wird kopiert und eingefügt; Tastaturkürzel sind eingeschränkt. Funktionen und Preise im Store prüfen.'),
      cta: l('查看 App Store', 'View App Store', 'App Store で確認', 'App Store 보기', 'Im App Store ansehen'),
    },
    steps: [
      l('下载 Release 中的 Cliptate.dmg，将应用拖入「应用程序」。可用同页的 SHA-256 文件校验下载。', 'Download Cliptate.dmg from a Release and drag the app into Applications. Use its SHA-256 file to verify the download.', 'Release の Cliptate.dmg をダウンロードし、アプリケーションへドラッグ。同ページの SHA-256 ファイルで検証できます。', 'Release에서 Cliptate.dmg를 다운로드하고 응용 프로그램 폴더로 드래그하세요. 같은 페이지의 SHA-256 파일로 검증할 수 있습니다.', 'Cliptate.dmg aus einem Release laden und die App in Programme ziehen. Mit der zugehörigen SHA-256-Datei den Download prüfen.'),
      l('打开应用，选择并下载模型；使用听写时允许麦克风访问，需要自动输入时再授权辅助功能。', 'Open the app and download selected models. Allow microphone access for dictation and Accessibility permission if you want automatic text insertion.', 'アプリを開いてモデルを選択・ダウンロード。音声入力にはマイク、自動テキスト挿入にはアクセシビリティを許可。', '앱을 열어 모델을 선택하고 다운로드하세요. 받아쓰기에는 마이크 권한을, 자동 입력에는 손쉬운 사용 권한을 허용하세요.', 'App öffnen und Modelle wählen und laden. Mikrofon für Diktate und Bedienungshilfen für automatische Texteingabe erlauben.'),
      l('导入素材开始转写。使用 CLI 前先完成安装；升级替换应用后，重新启动 Cliptate。', 'Import media to start transcribing. Install the CLI before using it, and restart Cliptate after replacing the app during an upgrade.', '素材を取り込んで文字起こしを開始。CLI は先にインストールし、アプリ更新後は Cliptate を再起動。', '미디어를 가져와 전사를 시작하세요. CLI는 먼저 설치하고 앱을 교체해 업그레이드한 후 Cliptate를 재시작하세요.', 'Medien zum Transkribieren importieren. CLI vorher installieren und Cliptate nach einem Austausch der App neu starten.'),
    ],
    nightly: l('Nightly 预览构建', 'Nightly preview builds', 'Nightly プレビュービルド', 'Nightly 미리보기 빌드', 'Nightly-Vorabversionen'),
    nightlyNote: l('Nightly 随主分支定期构建，可能包含尚未正式发布的改动。请查看对应构建说明确认功能。', 'Nightly builds track main periodically and may contain unreleased changes. Check each build’s notes for included features.', 'Nightly は main から定期生成され、正式リリース前の変更を含む場合があります。各ビルドの説明を確認してください。', 'Nightly는 main에서 주기적으로 빌드되며 미출시 변경이 포함될 수 있습니다. 해당 빌드 설명으로 기능을 확인하세요.', 'Nightly-Versionen folgen regelmäßig main und können unveröffentlichte Änderungen enthalten. Enthaltene Funktionen in den jeweiligen Hinweisen prüfen.'),
  },
  faq: {
    title: l('开始之前，你可能想知道。', 'Before you get started.', '始める前に。', '시작하기 전에.', 'Vor dem Start.'),
    items: [
      {
        question: l('如何在 Mac 上将录音或视频转成文字与 SRT 字幕？', 'How do I transcribe audio or video into text and SRT captions on Mac?', 'Mac で音声や動画を文字と SRT 字幕に変換するには？', 'Mac에서 녹음이나 영상을 텍스트와 SRT 자막으로 변환하려면?', 'Wie transkribiere ich Audio oder Video am Mac in Text und SRT-Untertitel?'),
        answer: l('在 Cliptate 中下载并选择转写模型，导入本地音视频并运行转写。检查文字与分段后，在 AI 剪辑界面导出 TXT 或 SRT。GitHub 版也可使用 CLI：cliptate transcribe interview.mp4 --format srt --output interview.srt。', 'Download and select a transcription model in Cliptate, import local audio or video, and transcribe. Review the text and segments, then export TXT or SRT from AI Cut. The GitHub build also supports the CLI: cliptate transcribe interview.mp4 --format srt --output interview.srt.', 'Cliptate でモデルをダウンロード・選択し、音声や動画を取り込んで文字起こしします。文字と区間を確認し AI カットから TXT または SRT を出力。GitHub 版の CLI：cliptate transcribe interview.mp4 --format srt --output interview.srt。', 'Cliptate에서 전사 모델을 다운로드하고 선택한 뒤 로컬 미디어를 가져와 전사하세요. 텍스트와 구간을 확인하고 AI 편집에서 TXT 또는 SRT로 내보냅니다. GitHub 버전 CLI: cliptate transcribe interview.mp4 --format srt --output interview.srt.', 'In Cliptate ein Transkriptionsmodell laden und auswählen, lokale Medien importieren und transkribieren. Text und Segmente prüfen und in AI Cut als TXT oder SRT exportieren. GitHub-CLI: cliptate transcribe interview.mp4 --format srt --output interview.srt.'),
      },
      {
        question: l('如何批量去除口播、播客或访谈中的停顿？', 'How do I remove pauses from a spoken video, podcast or interview?', 'トーク動画・ポッドキャスト・インタビューの無音をまとめて削除するには？', '말하기 영상, 팟캐스트나 인터뷰에서 무음을 일괄 제거하려면?', 'Wie entferne ich Pausen aus Sprachvideos, Podcasts oder Interviews?'),
        answer: l('将素材导入 Cliptate 的 AI 剪辑流程，利用静音检测识别无声片段，批量裁剪冗余停顿。检查片段边界和字幕后，导出视频、音频或 FCPXML 时间线。静音检测在 Mac 本地运行；可选的在线 AI 纠错和重点提取使用已配置的服务。', 'Import media into Cliptate AI Cut, detect silent segments, and trim unwanted pauses in bulk. Review segment boundaries and captions, then export video, audio or an FCPXML timeline. Silence detection runs locally on Mac; optional online AI correction and highlight extraction use your configured service.', 'AI カットに素材を取り込み、無音区間を検出して不要な無音を一括カット。境界と字幕を確認し、動画・音声・FCPXML を出力します。無音検出は Mac 上で動作。任意のオンライン AI 校正やハイライト抽出は設定済みサービスを使います。', 'Cliptate AI 편집에 미디어를 가져와 무음 구간을 감지하고 불필요한 정지를 일괄 제거하세요. 경계와 자막을 확인한 뒤 영상, 음성 또는 FCPXML 타임라인을 내보냅니다. 무음 감지는 Mac에서 실행되며 온라인 AI 교정과 핵심 추출은 설정한 서비스를 사용합니다.', 'Medien in AI Cut importieren, stille Abschnitte erkennen und unerwünschte Pausen gesammelt schneiden. Grenzen und Untertitel prüfen, dann Video, Audio oder FCPXML exportieren. Stille-Erkennung läuft lokal; optionale Online-KI nutzt den konfigurierten Dienst.'),
      },
      {
        question: l('Cliptate 剪言免费吗？', 'Is Cliptate free?', 'Cliptate は無料ですか？', 'Cliptate는 무료인가요?', 'Ist Cliptate kostenlos?'),
        answer: l('GitHub 版全部模型与 Pro 功能免费开放，无需订阅，包含原生 CLI 和应用内更新。App Store 版采用订阅与沙盒限制，不包含 CLI，价格以商店页面为准。两种版本的在线 AI 服务都可能由服务商另行收费。', 'The GitHub build includes all models and Pro features for free, without a subscription, plus the native CLI and in-app updates. The App Store edition uses subscriptions and sandbox restrictions and excludes the CLI; check its listing for pricing. Online AI providers may charge separately in either edition.', 'GitHub 版は全モデルと Pro 機能が無料で、CLI とアプリ内更新を含みます。App Store 版はサブスクリプションとサンドボックス制限があり、CLI は含まれません。価格はストアを確認してください。オンライン AI は別料金の場合があります。', 'GitHub 버전은 모든 모델과 Pro 기능이 구독 없이 무료이며 CLI와 앱 내 업데이트를 포함합니다. App Store 버전은 구독과 샌드박스 제한을 적용하며 CLI는 포함하지 않습니다. 가격은 스토어를 확인하세요. 온라인 AI에는 별도 요금이 발생할 수 있습니다.', 'Die GitHub-Version bietet alle Modelle und Pro-Funktionen kostenlos ohne Abo, inklusive CLI und App-Updates. Die App-Store-Version nutzt Abos und Sandbox-Beschränkungen, ohne CLI; Preise stehen im Store. Online-KI kann separat kostenpflichtig sein.'),
      },
      {
        question: l('可以完全离线使用吗？', 'Can I work offline?', '完全オフラインで使えますか？', '완전히 오프라인으로 사용할 수 있나요?', 'Kann ich offline arbeiten?'),
        answer: l('缓存所需模型后，本地转写、静音检测、说话人识别和 TTS 可离线使用。Apple 翻译需准备受支持语言对的语言包；在线 AI 纠错、重点提取、模型下载、更新和 App Store 购买需要网络。', 'After caching models, local transcription, silence detection, diarization, and TTS work offline. Prepare Apple Translation packs for supported language pairs; online AI, model downloads, updates, and App Store purchases need internet access.', 'モデル保存後、文字起こし・無音検出・話者識別・TTS はオフラインで動作。Apple 翻訳は対応言語ペアの言語パックを準備。オンライン AI、ダウンロード、更新、App Store 購入には通信が必要です。', '모델 캐시 후 로컬 전사, 무음 감지, 화자 분리, TTS는 오프라인으로 작동합니다. 지원 언어 쌍의 Apple 번역 언어 팩을 준비하세요. 온라인 AI, 다운로드, 업데이트, App Store 구매에는 인터넷이 필요합니다.', 'Nach dem Speichern der Modelle funktionieren Transkription, Stille-Erkennung, Sprecherzuordnung und TTS offline. Apple-Sprachpakete für unterstützte Sprachpaare vorbereiten; Online-KI, Downloads, Updates und Store-Käufe benötigen Internet.'),
      },
      {
        question: l('为什么界面里没有 VTT 导出？', 'Where is VTT export?', 'VTT の書き出しはどこにありますか？', 'VTT 내보내기는 어디에 있나요?', 'Wo finde ich den VTT-Export?'),
        answer: l('AI 剪辑界面提供 SRT、ASS 和 TXT。VTT 是 CLI 转写的输出格式；可使用 --format vtt，多个输入文件需指定 --output-dir。', 'AI Cut provides SRT, ASS, and TXT. VTT is a CLI transcription format: use --format vtt and specify --output-dir for multiple inputs.', 'AI カットは SRT・ASS・TXT に対応。VTT は CLI の文字起こし形式で、--format vtt を使用。複数ファイルには --output-dir が必要です。', 'AI 편집은 SRT, ASS, TXT를 제공합니다. VTT는 CLI 전사 출력 형식입니다. --format vtt를 사용하고 여러 입력에는 --output-dir을 지정하세요.', 'AI Cut bietet SRT, ASS und TXT. VTT wird per CLI-Transkription ausgegeben: --format vtt verwenden, bei mehreren Eingaben --output-dir angeben.'),
      },
      {
        question: l('听写为什么没有直接输入到其他应用？', 'Why is dictated text not inserted into another app?', '音声入力が他のアプリに挿入されないのはなぜ？', '받아쓴 텍스트가 다른 앱에 입력되지 않는 이유는?', 'Warum wird Diktattext nicht in eine andere App eingefügt?'),
        answer: l('GitHub 版需要辅助功能权限才能向当前输入框写入文本。未授权时会回退为复制后粘贴；App Store 版始终使用复制粘贴方式。', 'The GitHub build needs Accessibility permission to insert text into the focused field. Without permission it falls back to copy and paste; App Store builds always use copy and paste.', 'GitHub 版で入力欄へ挿入するにはアクセシビリティ許可が必要。未許可時はコピー・貼り付けに切り替わり、App Store 版は常にコピー・貼り付けを使用します。', 'GitHub 버전은 활성 입력란 삽입에 손쉬운 사용 권한이 필요합니다. 권한이 없으면 복사·붙여넣기를 사용하며 App Store 버전은 항상 이 방식입니다.', 'Die GitHub-Version benötigt Bedienungshilfen-Berechtigung zur Texteingabe. Ohne Erlaubnis wird kopiert und eingefügt; App-Store-Versionen nutzen dies grundsätzlich.'),
      },
    ],
  },
  links: {
    guide: l('使用指南', 'User guide', '使い方', '사용 가이드', 'Anleitung'),
    feedback: l('问题与反馈', 'Issues and feedback', '不具合・フィードバック', '문제 및 피드백', 'Probleme und Feedback'),
    releases: l('版本说明', 'Release notes', 'リリースノート', '릴리스 노트', 'Versionshinweise'),
  },
};
