import type { LocalizedString } from './languages';

// Keep every editorial field in all five of the site's supported languages.
const l = (zh: string, en: string, ja: string, ko: string, de: string): LocalizedString => ({ zh, en, ja, ko, de });

export const blog = {
  title: l('选工具，先看工作流。', 'Choose the workflow. Then the tool.', '作業の流れから、ツールを選ぶ。', '작업 흐름에 맞는 도구를 고르세요.', 'Erst der Workflow. Dann das Werkzeug.'),
  description: l('从语音输入到字幕交付，比较 Cliptate 与常用工具的处理方式、使用成本和适用场景。', 'From dictation to subtitle delivery: compare Cliptate with other tools by processing, cost, and everyday tasks.', '音声入力から字幕の納品まで。処理方法、費用、用途で Cliptate と各ツールを比較します。', '받아쓰기부터 자막 전달까지, 처리 방식과 비용, 일상 작업을 기준으로 Cliptate와 다른 도구를 비교합니다.', 'Vom Diktat bis zur Untertitelabgabe: Cliptate und andere Werkzeuge nach Verarbeitung, Kosten und Aufgaben vergleichen.'),
  metaTitle: l('竞品对比与选型指南 | Cliptate', 'Comparisons & buying guides | Cliptate', 'ツール比較と選び方 | Cliptate', '도구 비교와 선택 가이드 | Cliptate', 'Vergleiche & Entscheidungshilfen | Cliptate'),
  nav: l('文章与对比', 'Articles & comparisons', '記事・比較', '글과 비교', 'Artikel & Vergleiche'),
  kicker: l('工作流指南', 'Workflow guides', 'ワークフローガイド', '작업 흐름 가이드', 'Workflow-Ratgeber'),
  read: l('阅读对比', 'Read comparison', '比較を読む', '비교 읽기', 'Vergleich lesen'),
  all: l('查看全部文章', 'All articles', 'すべての記事', '모든 글 보기', 'Alle Artikel'),
  back: l('返回文章列表', 'Back to articles', '記事一覧へ', '글 목록으로', 'Zur Artikelübersicht'),
  home: l('首页', 'Home', 'ホーム', '홈', 'Startseite'),
  updated: l('资料核对日期', 'Sources reviewed', '資料確認日', '자료 확인일', 'Quellen geprüft'),
  date: '2026-10-12',
  methodTitle: l('我们如何比较', 'How we compare', '比較の方針', '비교 방식', 'So vergleichen wir'),
  method: l('由 Cliptate 团队整理，比较功能与工作流，不做未经实测的准确率或速度排名。竞品信息链接至官方资料；价格与功能可能变化。Cliptate 内容依据主分支，安装包功能请以所选 Release 为准。', 'Written by the Cliptate team. These are feature and workflow comparisons, without untested accuracy or speed rankings. Competitor claims link to official sources; plans and features can change. Cliptate coverage follows main; check your chosen Release for packaged features.', 'Cliptate チームによる機能と作業手順の比較です。未検証の精度・速度ランキングは掲載しません。他社情報は公式資料にリンクしています。料金と機能は変更される場合があります。Cliptate は main の内容を扱い、配布版の機能は Release をご確認ください。', 'Cliptate 팀이 작성한 기능과 작업 흐름 비교입니다. 실측하지 않은 정확도나 속도 순위는 제시하지 않습니다. 경쟁 제품 정보는 공식 자료로 연결되며 요금제와 기능은 바뀔 수 있습니다. Cliptate는 main 기준이며 설치 버전은 해당 Release를 확인하세요.', 'Vom Cliptate-Team verfasst. Wir vergleichen Funktionen und Arbeitsabläufe ohne ungeprüfte Genauigkeits- oder Geschwindigkeitsranglisten. Angaben zu anderen Produkten verweisen auf offizielle Quellen; Angebote können sich ändern. Cliptate-Angaben beziehen sich auf main; für Installationspakete gilt das gewählte Release.'),
  table: l('关键差异一览', 'Key differences', '主な違い', '주요 차이', 'Die wichtigsten Unterschiede'),
  dimension: l('比较维度', 'Dimension', '比較項目', '비교 항목', 'Bereich'),
  source: l('官方依据', 'Official source', '公式資料', '공식 자료', 'Offizielle Quelle'),
  choose: l('怎么选', 'Which should you choose?', '選び方', '어떻게 고를까요?', 'Welches passt zu dir?'),
  chooseCliptate: l('适合选 Cliptate', 'Choose Cliptate when', 'Cliptate が向く場合', 'Cliptate가 맞는 경우', 'Cliptate passt, wenn'),
  chooseOther: l('适合选另一款工具', 'Choose the other tool when', '相手のツールが向く場合', '다른 도구가 맞는 경우', 'Das andere Werkzeug passt, wenn'),
  tryTitle: l('用自己的素材试一次', 'Try your own material', '自分の素材で試す', '자신의 자료로 시험하세요', 'Mit eigenem Material testen'),
  sourcesTitle: l('资料与延伸阅读', 'Sources & further reading', '資料と関連情報', '자료와 추가 읽을거리', 'Quellen & weitere Informationen'),
  related: l('继续比较', 'Keep comparing', 'ほかの比較', '다른 비교 보기', 'Weitere Vergleiche'),
  download: l('免费下载 Cliptate', 'Download Cliptate free', 'Cliptate を無料で入手', 'Cliptate 무료 다운로드', 'Cliptate kostenlos laden'),
  requirements: l('Apple Silicon · macOS 15+ · 免费 GitHub 版', 'Apple Silicon · macOS 15+ · Free GitHub build', 'Apple Silicon · macOS 15+ · 無料 GitHub 版', 'Apple Silicon · macOS 15+ · 무료 GitHub 버전', 'Apple Silicon · macOS 15+ · Kostenlose GitHub-Version'),
  channelNote: l('Cliptate 的 GitHub 版免费开放全部模型和 Pro 功能；App Store 版采用订阅，不包含 CLI，听写使用复制粘贴。在线 AI 服务可能另收费。', 'Cliptate’s GitHub build includes all models and Pro features free. The App Store build uses subscriptions, omits the CLI, and delivers dictation through copy and paste. Online AI services may charge separately.', 'Cliptate の GitHub 版は全モデルと Pro 機能が無料です。App Store 版はサブスクリプション制で CLI を含まず、音声入力はコピー＆ペーストで渡します。オンライン AI は別料金の場合があります。', 'Cliptate GitHub 버전은 모든 모델과 Pro 기능이 무료입니다. App Store 버전은 구독 방식이며 CLI가 없고 받아쓰기는 복사하여 붙여넣습니다. 온라인 AI 서비스 비용은 별도일 수 있습니다.', 'Cliptates GitHub-Version enthält alle Modelle und Pro-Funktionen kostenlos. Die App-Store-Version nutzt Abos, enthält keine CLI und überträgt Diktate per Kopieren und Einfügen. Online-KI kann zusätzliche Kosten verursachen.'),
};

interface Source { label: string; url: string }
interface ComparisonRow { label: LocalizedString; cliptate: LocalizedString; other: LocalizedString; source: number }
interface Section { title: LocalizedString; body: LocalizedString; source?: number }
export interface ComparisonArticle {
  slug: string;
  competitor: string;
  tag: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  intro: LocalizedString;
  rows: ComparisonRow[];
  sections: Section[];
  cliptateFit: LocalizedString;
  otherFit: LocalizedString;
  trial: LocalizedString;
  sources: Source[];
}

export const cliptateSources: Source[] = [
  { label: 'Cliptate · README', url: 'https://github.com/cliptate/cliptate#readme' },
  { label: 'Cliptate · CLI', url: 'https://github.com/cliptate/cliptate/blob/main/docs/cli.md' },
  { label: 'Cliptate · Release notes', url: 'https://github.com/cliptate/cliptate/tree/main/docs/release-notes' },
];

const localSpeech = l('模型下载后在 Mac 本地转写；在线 AI 纠错单独配置。', 'Transcribe locally after model download; configure online AI correction separately.', 'モデル取得後は Mac 内で文字起こし。オンライン AI 校正は別途設定。', '모델 다운로드 후 Mac에서 로컬 전사. 온라인 AI 교정은 별도 설정.', 'Nach dem Modelldownload lokal transkribieren; Online-KI-Korrektur separat einrichten.');
const cost = l('GitHub 版免费；App Store 版订阅；在线服务另计。', 'Free GitHub build; App Store subscriptions; online services billed separately.', 'GitHub 版は無料、App Store 版はサブスク。オンラインサービスは別料金。', 'GitHub 버전 무료, App Store 구독, 온라인 서비스 별도 과금.', 'GitHub-Version kostenlos; App-Store-Abos; Online-Dienste separat berechnet.');
const purpose = l('主要任务', 'Main task', '主な用途', '주요 작업', 'Hauptaufgabe');
const processing = l('语音处理', 'Speech processing', '音声処理', '음성 처리', 'Sprachverarbeitung');
const pricing = l('费用与版本', 'Cost & editions', '費用と配布版', '비용과 버전', 'Kosten & Versionen');

export const articles: ComparisonArticle[] = [
  {
    slug: 'cliptate-vs-wispr-flow', competitor: 'Wispr Flow',
    tag: l('语音输入 · 本地与云端', 'Dictation · Local & cloud', '音声入力 · ローカルとクラウド', '받아쓰기 · 로컬과 클라우드', 'Diktat · Lokal & Cloud'),
    title: l('Cliptate vs Wispr Flow：语音输入，还是创作工作台？', 'Cliptate vs Wispr Flow: dictation or a creator workspace?', 'Cliptate vs Wispr Flow：音声入力か、制作ワークスペースか？', 'Cliptate vs Wispr Flow: 받아쓰기인가, 제작 작업 공간인가?', 'Cliptate vs Wispr Flow: Diktat oder Kreativ-Workspace?'),
    description: l('比较本地识别与云端听写、跨设备写作和字幕剪辑，找到适合你的语音工作流。', 'Compare local recognition, cloud dictation, writing across devices, and caption editing.', 'ローカル認識、クラウド音声入力、複数端末での文章作成、字幕編集を比較。', '로컬 인식, 클라우드 받아쓰기, 여러 기기에서의 글쓰기와 자막 편집을 비교합니다.', 'Lokale Erkennung, Cloud-Diktat, geräteübergreifendes Schreiben und Untertitelbearbeitung im Vergleich.'),
    intro: l('如果你想少打字，先看听写体验；如果你还要把录音做成字幕和粗剪，先看素材处理流程。两款工具有交集，但你的最终交付物决定了选择。', 'Start with dictation if you want to type less. Start with the media workflow if your recording must become captions and a rough cut. Your deliverable should guide the choice.', '入力を減らすなら音声入力体験を、録音から字幕やラフカットを作るなら素材の処理手順を確認しましょう。最終的な成果物が選択の基準です。', '타이핑을 줄이려면 받아쓰기 경험을, 녹음을 자막과 러프 컷으로 만들려면 미디어 처리 흐름을 살펴보세요. 최종 결과물을 기준으로 선택하세요.', 'Wer weniger tippen möchte, beginnt beim Diktat. Wer aus Aufnahmen Untertitel und Rohschnitte erstellt, prüft den Medienworkflow. Das gewünschte Ergebnis bestimmt die Wahl.'),
    rows: [
      { label: purpose, cliptate: l('Mac 上的转写、听写、字幕与粗剪。', 'Mac transcription, dictation, captions, and rough cuts.', 'Mac で文字起こし、音声入力、字幕、ラフカット。', 'Mac 전사, 받아쓰기, 자막과 러프 컷.', 'Transkription, Diktat, Untertitel und Rohschnitt am Mac.'), other: l('跨应用语音写作，也提供会议笔记工具。', 'Voice writing across apps, with a meeting notetaker too.', 'アプリをまたぐ音声入力と会議ノート機能。', '앱 전반의 음성 글쓰기와 회의 노트 도구.', 'Sprachbasiertes Schreiben in Apps und ein Meeting-Notetaker.'), source: 0 },
      { label: processing, cliptate: localSpeech, other: l('语音发送至服务器转写；隐私设置管理留存。', 'Audio is sent to servers for transcription; privacy controls govern retention.', '音声をサーバーで文字起こし。保存はプライバシー設定で管理。', '음성을 서버로 전송하여 전사. 보관은 개인정보 설정으로 관리.', 'Audio wird auf Servern transkribiert; Datenschutzeinstellungen regeln die Aufbewahrung.'), source: 1 },
      { label: l('平台范围', 'Platforms', '対応環境', '플랫폼', 'Plattformen'), cliptate: l('Apple Silicon Mac，macOS 15 或更新版本。', 'Apple Silicon Mac, macOS 15 or newer.', 'Apple Silicon Mac、macOS 15 以降。', 'Apple Silicon Mac, macOS 15 이상.', 'Apple Silicon Mac, macOS 15 oder neuer.'), other: l('提供 Mac、Windows、iOS 和 Android 版本。', 'Available on Mac, Windows, iOS, and Android.', 'Mac、Windows、iOS、Android に対応。', 'Mac, Windows, iOS, Android 버전 제공.', 'Für Mac, Windows, iOS und Android verfügbar.'), source: 0 },
      { label: pricing, cliptate: cost, other: l('有免费与付费方案；额度以官方定价页为准。', 'Free and paid plans; check current allowances on the pricing page.', '無料・有料プランあり。利用枠は料金ページで確認。', '무료 및 유료 요금제. 현재 한도는 가격 페이지 확인.', 'Kostenlose und kostenpflichtige Angebote; aktuelle Kontingente auf der Preisseite.'), source: 2 },
    ],
    sections: [
      { title: l('先分清本地处理与数据留存', 'Separate processing from retention', '処理場所と保存を区別する', '처리 위치와 보관을 구분하세요', 'Verarbeitung und Speicherung unterscheiden'), body: l('Wispr 的隐私设置可以控制数据留存和训练使用，但关闭留存不等于本地识别。Cliptate 的语音识别在本地运行；启用在线 AI 增强时，相关文本及所选上下文会交给你配置的服务。', 'Turning off Wispr’s storage or training options does not make recognition local. Cliptate runs speech recognition on your Mac; online AI enhancement sends relevant text and selected context to your configured service.', 'Wispr の保存や学習設定をオフにしても、ローカル認識になるわけではありません。Cliptate の音声認識は Mac 内で動作し、オンライン AI 強化では関連テキストと選択した文脈を設定先へ送ります。', 'Wispr의 보관이나 학습 설정을 꺼도 인식이 로컬로 바뀌지는 않습니다. Cliptate는 Mac에서 음성을 인식하며 온라인 AI 강화 사용 시 관련 텍스트와 선택한 문맥을 설정한 서비스로 보냅니다.', 'Wisprs Speicher- oder Trainingsoptionen abzuschalten macht die Erkennung nicht lokal. Cliptate erkennt Sprache auf dem Mac; Online-KI übermittelt relevante Texte und gewählten Kontext an den konfigurierten Dienst.'), source: 1 },
      { title: l('写完文字之后，你还需要什么？', 'What happens after the words?', 'テキストの次に必要なものは？', '텍스트 다음에는 무엇이 필요한가요?', 'Was folgt auf den Text?'), body: l('Cliptate 可以接着编辑字幕、批量去停顿并导出 FCPXML 时间线。如果你已经在 Final Cut Pro 中完成精剪，这条交接路径值得测试；如果主要是写邮件和消息，就把试用重点放在文本送达和修改次数上。', 'Cliptate continues into caption editing, bulk pause trimming, and FCPXML timeline export. Test that handoff if you finish in Final Cut Pro. For emails and messages, measure text delivery and how many corrections you need.', 'Cliptate では字幕編集、無音の一括カット、FCPXML 書き出しへ進めます。Final Cut Pro で仕上げるなら受け渡しを試しましょう。メールやメッセージが中心なら、入力先への反映と修正回数を比べてください。', 'Cliptate에서는 자막 편집, 일괄 무음 제거, FCPXML 타임라인 내보내기로 이어집니다. Final Cut Pro로 마무리한다면 이 전달 과정을 시험하세요. 메일과 메시지가 중심이라면 텍스트 전달과 수정 횟수를 비교하세요.', 'Cliptate führt zu Untertitelbearbeitung, gebündeltem Pausenschnitt und FCPXML-Export. Teste die Übergabe, wenn du in Final Cut Pro fertigstellst. Bei E-Mails und Nachrichten zählen die Textübertragung und nötige Korrekturen.') },
    ],
    cliptateFit: l('你用 Apple Silicon Mac，希望离线识别，同时处理音视频、字幕和剪辑交付。', 'You use an Apple Silicon Mac and want offline recognition alongside media, captions, and editing handoff.', 'Apple Silicon Mac でオフライン認識と素材・字幕・編集への受け渡しをまとめたい。', 'Apple Silicon Mac에서 오프라인 인식과 미디어, 자막, 편집 전달을 함께 처리하고 싶을 때.', 'Du nutzt einen Apple Silicon Mac und möchtest Offline-Erkennung, Medienbearbeitung, Untertitel und Schnittübergabe verbinden.'),
    otherFit: l('你主要通过语音写作，需要跨设备使用，并接受云端处理。', 'Your main task is voice writing across devices, and cloud processing fits your needs.', '複数端末での音声による文章作成が中心で、クラウド処理を利用できる。', '여러 기기에서 음성으로 글을 쓰는 것이 주 작업이고 클라우드 처리를 수용할 때.', 'Du schreibst vor allem per Sprache auf mehreren Geräten und kannst Cloud-Verarbeitung nutzen.'),
    trial: l('用同一支麦克风说一段带人名、术语和自我修正的邮件，记录改字次数和文本送达方式。如果还需要字幕交付，再用访谈录音测试 Cliptate 的素材流程。', 'Dictate an email with names, jargon, and a spoken correction using the same microphone. Record corrections and text delivery. If you also need captions, test Cliptate’s media workflow with an interview recording.', '同じマイクで固有名詞、専門語、言い直しを含むメールを話し、修正回数と入力方法を記録します。字幕も必要ならインタビュー録音で Cliptate の素材処理を試しましょう。', '같은 마이크로 이름, 전문 용어와 말로 한 정정이 포함된 메일을 받아쓰세요. 수정 횟수와 텍스트 전달 방식을 기록하세요. 자막도 필요하면 인터뷰 녹음으로 Cliptate의 미디어 흐름을 시험하세요.', 'Diktiere mit demselben Mikrofon eine E-Mail mit Namen, Fachbegriffen und einer mündlichen Korrektur. Notiere Korrekturen und Textübertragung. Für Untertitel teste Cliptates Medienworkflow mit einer Interviewaufnahme.'),
    sources: [
      { label: 'Wispr Flow · Product', url: 'https://wisprflow.ai/' },
      { label: 'Wispr Flow · Privacy & processing', url: 'https://wisprflow.ai/privacy' },
      { label: 'Wispr Flow · Pricing', url: 'https://wisprflow.ai/pricing' },
    ],
  },
  {
    slug: 'cliptate-vs-macwhisper', competitor: 'MacWhisper',
    tag: l('本地转写 · 字幕交付', 'Local transcription · Captions', 'ローカル文字起こし · 字幕', '로컬 전사 · 자막', 'Lokale Transkription · Untertitel'),
    title: l('Cliptate vs MacWhisper：从转写到交付，差在哪？', 'Cliptate vs MacWhisper: from transcript to delivery', 'Cliptate vs MacWhisper：文字起こしから納品まで', 'Cliptate vs MacWhisper: 전사부터 결과물 전달까지', 'Cliptate vs MacWhisper: vom Transkript zur Abgabe'),
    description: l('两款都能本地转写，重点比较素材整理、字幕与时间线交付，以及命令行自动化。', 'Both offer local transcription. Compare media organization, caption and timeline handoff, and CLI automation.', '両方ともローカル文字起こしに対応。素材整理、字幕・タイムラインの受け渡し、CLI を比較。', '둘 다 로컬 전사를 제공합니다. 미디어 정리, 자막과 타임라인 전달, CLI 자동화를 비교합니다.', 'Beide bieten lokale Transkription. Vergleiche Medienorganisation, Untertitel- und Timeline-Übergabe sowie CLI-Automatisierung.'),
    intro: l('选本地转写工具，不能只看是否离线。先确定你要交付文字稿、字幕，还是继续剪视频；再比较自动化和版本费用。', 'Offline support is only the beginning. Decide whether you need a transcript, captions, or a video edit, then compare automation and edition costs.', 'オフライン対応だけで選ばず、原稿、字幕、動画編集のどれを仕上げたいかを決めてから、自動化と費用を比べましょう。', '오프라인 지원만으로 선택하지 마세요. 전사문, 자막, 영상 편집 중 필요한 결과물을 정한 뒤 자동화와 버전별 비용을 비교하세요.', 'Offline-Unterstützung ist erst der Anfang. Entscheide, ob du ein Transkript, Untertitel oder einen Videoschnitt brauchst, und vergleiche dann Automatisierung und Versionskosten.'),
    rows: [
      { label: purpose, cliptate: l('转写后继续去停顿、编辑字幕和导出粗剪。', 'Continue from transcription to pause trimming, captions, and rough cuts.', '文字起こしから無音カット、字幕、ラフカットへ。', '전사 후 무음 제거, 자막 편집, 러프 컷으로 연결.', 'Von der Transkription zu Pausenschnitt, Untertiteln und Rohschnitt.'), other: l('文件转写、会议录音和听写工作台。', 'A workspace for file transcription, meeting recording, and dictation.', 'ファイル文字起こし、会議録音、音声入力のワークスペース。', '파일 전사, 회의 녹음과 받아쓰기를 위한 작업 공간.', 'Workspace für Dateitranskription, Meeting-Aufnahmen und Diktat.'), source: 0 },
      { label: processing, cliptate: localSpeech, other: l('支持本地识别；云端转写和 AI 服务按所选配置运行。', 'Local recognition available; cloud transcription and AI depend on your configuration.', 'ローカル認識対応。クラウド文字起こしと AI は設定による。', '로컬 인식 지원. 클라우드 전사와 AI는 선택한 설정에 따라 동작.', 'Lokale Erkennung verfügbar; Cloud-Transkription und KI hängen von der Konfiguration ab.'), source: 0 },
      { label: l('脚本与导出', 'Scripts & exports', 'スクリプトと書き出し', '스크립트와 내보내기', 'Skripte & Exporte'), cliptate: l('GitHub 版 CLI：text、JSON、Markdown、SRT、VTT；GUI 可导出 FCPXML。', 'GitHub CLI: text, JSON, Markdown, SRT, VTT; FCPXML via the GUI.', 'GitHub 版 CLI：text、JSON、Markdown、SRT、VTT。GUI は FCPXML 対応。', 'GitHub CLI: text, JSON, Markdown, SRT, VTT. GUI에서 FCPXML 제공.', 'GitHub-CLI: text, JSON, Markdown, SRT, VTT; FCPXML über die GUI.'), other: l('也提供 mw CLI；部分结构化导出需要 Pro。', 'Also offers the mw CLI; some structured exports require Pro.', 'mw CLI も提供。一部の構造化書き出しは Pro が必要。', 'mw CLI도 제공. 일부 구조화 내보내기는 Pro 필요.', 'Bietet ebenfalls die mw-CLI; einige strukturierte Exporte benötigen Pro.'), source: 2 },
      { label: pricing, cliptate: cost, other: l('直装版有一次性 Pro 授权；App Store 版有订阅选项。', 'Direct download offers a one-time Pro license; the App Store edition has subscription options.', '直接配布版は買い切り Pro。App Store 版にはサブスクあり。', '직접 다운로드는 일회성 Pro 라이선스. App Store 버전은 구독 옵션.', 'Direktdownload mit einmaliger Pro-Lizenz; App-Store-Version mit Abo-Optionen.'), source: 3 },
    ],
    sections: [
      { title: l('本地识别是共同点，下一步才是重点', 'Local recognition is the starting point', 'ローカル認識の次を考える', '로컬 인식 다음 단계를 살펴보세요', 'Lokale Erkennung ist der Ausgangspunkt'), body: l('MacWhisper 的批量转写和多格式导出适合积累了很多录音的工作流。Cliptate 值得测试的部分是把字幕与去停顿放进同一编辑过程，再将 FCPXML 时间线交给 Final Cut Pro。', 'MacWhisper’s batch transcription and multiple export formats suit a backlog of recordings. In Cliptate, test the combined caption and pause-editing workflow, then hand the FCPXML timeline to Final Cut Pro.', 'MacWhisper の一括文字起こしと複数形式の書き出しは、大量の録音を処理する用途に向きます。Cliptate は字幕と無音カットを同じ工程で扱い、FCPXML を Final Cut Pro に渡す流れを試してください。', 'MacWhisper의 일괄 전사와 여러 형식 내보내기는 쌓인 녹음 처리에 어울립니다. Cliptate에서는 자막과 무음 편집을 함께 처리한 뒤 FCPXML 타임라인을 Final Cut Pro로 전달하는 흐름을 시험하세요.', 'MacWhispers Stapeltranskription und mehrere Exportformate passen zu vielen angesammelten Aufnahmen. Teste bei Cliptate den gemeinsamen Untertitel- und Pausenschnitt und die FCPXML-Übergabe an Final Cut Pro.'), source: 4 },
      { title: l('两款都有 CLI，按输出需求选择', 'Both have a CLI: compare the output', '両方の CLI を出力で比べる', '둘 다 CLI가 있습니다. 출력을 비교하세요', 'Beide haben eine CLI: Ausgabe vergleichen'), body: l('不要把“有命令行”当作唯一优势。拿同一个文件测试 JSON 字段、时间单位和字幕导出，并确认所选版本开放这些格式。Cliptate CLI 不创建项目或转写历史，一次处理一个推理请求。', 'A CLI alone is not the deciding factor. Test JSON fields, time units, and caption exports with the same file, and check which edition unlocks them. Cliptate CLI creates no projects or transcript history and handles one inference request at a time.', 'CLI の有無だけで決めず、同じファイルで JSON の項目、時間の単位、字幕出力を試し、利用版で対応する形式を確認しましょう。Cliptate CLI はプロジェクトや履歴を作らず、推論要求を一つずつ処理します。', 'CLI 유무만으로 결정하지 마세요. 같은 파일로 JSON 필드, 시간 단위와 자막 출력을 시험하고 버전별 지원 형식을 확인하세요. Cliptate CLI는 프로젝트나 전사 기록을 만들지 않으며 한 번에 하나의 추론 요청을 처리합니다.', 'Eine CLI allein entscheidet die Wahl nicht. Prüfe JSON-Felder, Zeiteinheiten und Untertitelexporte mit derselben Datei sowie die Freischaltung im jeweiligen Angebot. Cliptates CLI legt keine Projekte oder Transkriptverläufe an und verarbeitet eine Inferenzanfrage gleichzeitig.'), source: 2 },
    ],
    cliptateFit: l('你希望从转写直接进入字幕、去停顿和时间线交付，并使用免费 GitHub 版连接脚本。', 'You want transcription to flow into captions, pause edits, and timeline handoff, with scripting in the free GitHub build.', '文字起こしから字幕、無音カット、タイムラインへ進め、無料 GitHub 版でスクリプト連携したい。', '전사에서 자막, 무음 편집, 타임라인 전달로 이어가고 무료 GitHub 버전으로 스크립트를 연결하고 싶을 때.', 'Du möchtest von Transkription zu Untertiteln, Pausenschnitt und Timeline-Übergabe gehen und die kostenlose GitHub-Version in Skripten nutzen.'),
    otherFit: l('你主要整理大量录音和会议文字稿，想试批量转写、多格式导出及其录音工作流。', 'You mainly organize recordings and meeting transcripts and want to try its batch, export, and recording workflows.', '録音や会議原稿の整理が中心で、一括処理、各種出力、録音手順を試したい。', '녹음과 회의 전사문 정리가 주 작업이며 일괄 처리, 여러 출력 형식과 녹음 흐름을 시험하고 싶을 때.', 'Du organisierst vor allem Aufnahmen und Meeting-Transkripte und möchtest Stapelverarbeitung, Exporte und Aufnahmeabläufe ausprobieren.'),
    trial: l('准备三段带多人对话、长停顿和术语的录音。检查说话人标签与时间戳，分别导出 SRT 和 JSON，再用一段视频验证剪辑交接。', 'Use three recordings with multiple speakers, long pauses, and jargon. Check speaker labels and timestamps, export SRT and JSON, then test the editing handoff with one video.', '複数話者、長い無音、専門語を含む録音を三本用意。話者ラベルと時刻を確認し、SRT・JSON を書き出して、動画一本で編集への受け渡しも試します。', '여러 화자, 긴 무음과 전문 용어가 있는 녹음 세 개를 준비하세요. 화자 라벨과 타임스탬프를 확인하고 SRT와 JSON을 내보낸 뒤 영상 하나로 편집 전달을 시험하세요.', 'Nutze drei Aufnahmen mit mehreren Sprechern, langen Pausen und Fachbegriffen. Prüfe Sprecher und Zeitstempel, exportiere SRT und JSON und teste mit einem Video die Schnittübergabe.'),
    sources: [
      { label: 'MacWhisper · Product', url: 'https://www.macwhisper.com/' },
      { label: 'MacWhisper · AI providers', url: 'https://docs.macwhisper.com/article/58-setting-up-ai-providers-in-macwhisper' },
      { label: 'MacWhisper · Command-line tool', url: 'https://docs.macwhisper.com/article/57-macwhisper-command-line-tool' },
      { label: 'MacWhisper · Editions & licensing', url: 'https://docs.macwhisper.com/article/40-macwhisper-whisper-transcription-difference' },
      { label: 'MacWhisper · Batch transcription', url: 'https://docs.macwhisper.com/article/19-batch-transcription' },
    ],
  },
  {
    slug: 'cliptate-vs-descript', competitor: 'Descript',
    tag: l('音视频编辑 · 本地与协作', 'Media editing · Local & collaborative', '音声・動画編集 · ローカルと共同作業', '미디어 편집 · 로컬과 협업', 'Medienbearbeitung · Lokal & gemeinsam'),
    title: l('Cliptate vs Descript：本地粗剪，还是协作制作？', 'Cliptate vs Descript: local rough cuts or collaborative production?', 'Cliptate vs Descript：ローカルのラフカットか、共同制作か？', 'Cliptate vs Descript: 로컬 러프 컷인가, 협업 제작인가?', 'Cliptate vs Descript: lokaler Rohschnitt oder gemeinsame Produktion?'),
    description: l('围绕转写、字幕、粗剪和团队审阅，比较 Mac 本地工作台与协作编辑平台。', 'Compare a local Mac workspace with a collaborative editor for transcripts, captions, rough cuts, and review.', '文字起こし、字幕、ラフカット、レビューで Mac のローカル作業環境と共同編集を比較。', '전사, 자막, 러프 컷과 검토를 기준으로 Mac 로컬 작업 공간과 협업 편집기를 비교합니다.', 'Lokaler Mac-Workspace und gemeinsamer Editor für Transkripte, Untertitel, Rohschnitt und Review im Vergleich.'),
    intro: l('如果素材主要由你在 Mac 上处理，先看本地转写与剪辑交接。如果制作需要多人编辑和评论，先看协作流程。两条路径的取舍在于你想在哪里完成工作。', 'For a solo Mac workflow, examine local transcription and editing handoff. For shared production, examine editing and comments. The choice starts with where your work needs to happen.', '一人で Mac 上の素材を扱うならローカル文字起こしと編集への受け渡しを、共同制作なら編集とコメントの流れを確認しましょう。作業を行う場所が選択の出発点です。', '혼자 Mac에서 작업한다면 로컬 전사와 편집 전달을, 함께 제작한다면 편집과 댓글 흐름을 살펴보세요. 어디서 작업을 마칠지가 선택의 출발점입니다.', 'Für einen persönlichen Mac-Workflow zählen lokale Transkription und Schnittübergabe. Für gemeinsame Produktion zählen Bearbeitung und Kommentare. Die Wahl beginnt beim Ort der Arbeit.'),
    rows: [
      { label: purpose, cliptate: l('本地转写、去停顿、字幕编辑与粗剪交付。', 'Local transcription, pause trimming, captions, and rough-cut handoff.', 'ローカル文字起こし、無音カット、字幕、ラフカットの受け渡し。', '로컬 전사, 무음 제거, 자막과 러프 컷 전달.', 'Lokale Transkription, Pausenschnitt, Untertitel und Rohschnitt-Übergabe.'), other: l('通过编辑文字调整音视频，并提供时间线与视觉编辑。', 'Edit audio and video through text, with timeline and visual editing.', 'テキストで音声・動画を編集し、タイムラインと映像編集も提供。', '텍스트로 오디오·비디오를 수정하고 타임라인과 시각 편집 제공.', 'Audio und Video per Text bearbeiten, ergänzt um Timeline- und visuelle Bearbeitung.'), source: 0 },
      { label: l('素材处理路径', 'Media workflow', '素材の処理', '미디어 처리 흐름', 'Medienworkflow'), cliptate: localSpeech, other: l('将本地素材上传到项目，再进行转写与编辑。', 'Upload local media into a project for transcription and editing.', 'ローカル素材をプロジェクトにアップロードして文字起こし・編集。', '로컬 미디어를 프로젝트에 업로드하여 전사와 편집.', 'Lokale Medien ins Projekt hochladen, dann transkribieren und bearbeiten.'), source: 1 },
      { label: l('交付与协作', 'Handoff & collaboration', '納品と共同作業', '전달과 협업', 'Übergabe & Zusammenarbeit'), cliptate: l('用字幕、渲染文件和 FCPXML 对接后期流程。', 'Hand off captions, rendered files, and FCPXML to post-production.', '字幕、レンダリング済みファイル、FCPXML で後工程に渡す。', '자막, 렌더링 파일과 FCPXML로 후반 작업에 전달.', 'Untertitel, gerenderte Dateien und FCPXML an die Nachbearbeitung übergeben.'), other: l('邀请协作者编辑或评论项目。', 'Invite collaborators to edit or comment on projects.', '共同作業者を編集・コメント権限で招待。', '협업자를 초대해 프로젝트 편집이나 댓글 권한 부여.', 'Mitwirkende zum Bearbeiten oder Kommentieren einladen.'), source: 2 },
      { label: pricing, cliptate: cost, other: l('免费与付费方案，媒体分钟数和 AI 额度随方案变化。', 'Free and paid plans with plan-specific media minutes and AI credits.', '無料・有料プラン。メディア時間と AI 枠はプランによる。', '무료 및 유료 요금제. 미디어 분량과 AI 크레딧은 요금제별로 다름.', 'Kostenlose und kostenpflichtige Angebote mit unterschiedlichen Medienminuten und KI-Kontingenten.'), source: 3 },
    ],
    sections: [
      { title: l('决定你要在哪里完成精剪', 'Decide where the final edit happens', '仕上げる場所を決める', '최종 편집을 어디서 할지 정하세요', 'Ort der finalen Bearbeitung festlegen'), body: l('Cliptate 适合测试“导入素材 → 转写 → 去停顿与字幕 → 导出时间线”的路径，之后在 Final Cut Pro 完成精剪。如果你希望把文字剪辑和视觉编辑留在一个制作环境，就测试 Descript 的完整编辑流程。', 'Test Cliptate’s import → transcribe → pauses and captions → timeline export path, then finish in Final Cut Pro. If you want text and visual editing in one production environment, test Descript’s full editing workflow.', 'Cliptate の「読み込み → 文字起こし → 無音と字幕 → タイムライン出力」を試し、Final Cut Pro で仕上げます。テキストと映像の編集を一つの環境で行いたいなら Descript の編集工程を試してください。', 'Cliptate의 가져오기 → 전사 → 무음과 자막 → 타임라인 내보내기 흐름을 시험하고 Final Cut Pro로 마무리하세요. 텍스트와 시각 편집을 한 제작 환경에서 처리하고 싶다면 Descript의 전체 편집 과정을 시험하세요.', 'Teste Cliptates Ablauf Import → Transkription → Pausen und Untertitel → Timeline-Export und stelle in Final Cut Pro fertig. Für Text- und visuelle Bearbeitung in einer Umgebung teste Descripts vollständigen Schnittworkflow.'), source: 0 },
      { title: l('把素材上传与团队协作一起考虑', 'Consider uploads alongside collaboration', 'アップロードと共同作業を一緒に考える', '업로드와 협업을 함께 고려하세요', 'Uploads und Zusammenarbeit zusammen betrachten'), body: l('Cliptate 本地语音处理无需上传媒体，启用在线 AI 时另行发送相关文本。团队选型时，用真实项目验证协作者权限与反馈流程；个人选型时，验证导出文件是否能被下游编辑器正确接收。', 'Cliptate’s local speech processing needs no media upload; online AI sends relevant text separately. For a team, validate collaborator permissions and feedback with a real project. For solo work, verify that your downstream editor imports the outputs correctly.', 'Cliptate のローカル音声処理は素材アップロード不要ですが、オンライン AI には関連テキストを送ります。チームでは実際の案件で権限とレビューを、一人の作業では出力先エディターでの読み込みを確認しましょう。', 'Cliptate의 로컬 음성 처리는 미디어 업로드가 필요 없으며 온라인 AI는 관련 텍스트를 별도로 보냅니다. 팀이라면 실제 프로젝트로 권한과 피드백을 확인하고 개인이라면 다음 편집기에서 출력 파일을 제대로 가져오는지 확인하세요.', 'Cliptates lokale Sprachverarbeitung benötigt keinen Medienupload; Online-KI erhält relevante Texte separat. Prüfe im Team Rechte und Feedback an einem echten Projekt. Für Einzelarbeit prüfe den korrekten Import im nachfolgenden Editor.') },
    ],
    cliptateFit: l('你主要在 Mac 上独立处理口播或访谈，希望本地转写，做好字幕和粗剪后交给现有剪辑软件。', 'You work solo on a Mac with spoken video or interviews and want local transcripts, captions, and rough cuts for your existing editor.', 'Mac で一人でトーク動画やインタビューを扱い、ローカルで字幕とラフカットを作って既存エディターへ渡したい。', 'Mac에서 혼자 말하는 영상이나 인터뷰를 처리하며 로컬 전사, 자막과 러프 컷을 기존 편집기로 전달하고 싶을 때.', 'Du bearbeitest allein am Mac Sprachvideos oder Interviews und möchtest lokale Transkripte, Untertitel und Rohschnitte an deinen Editor übergeben.'),
    otherFit: l('你希望在共同制作环境中编辑音视频，并让团队直接在项目内编辑或评论。', 'You want a shared production environment where your team can edit or comment directly on the project.', 'チームがプロジェクト内で編集やコメントを行える共同制作環境が欲しい。', '팀이 프로젝트에서 직접 편집하거나 댓글을 남길 수 있는 공동 제작 환경을 원할 때.', 'Du möchtest eine gemeinsame Produktionsumgebung, in der das Team direkt bearbeiten oder kommentieren kann.'),
    trial: l('用同一段口播做一次完整交付：删掉长停顿、校正术语、导出字幕，再交给同事或剪辑软件。比较完成时间、返工步骤和所用额度。', 'Finish the same spoken video in each workflow: trim long pauses, correct jargon, export captions, and hand it to a teammate or editor. Compare completion time, rework, and usage allowances.', '同じトーク動画で長い無音を削除し、専門語を修正し、字幕を出力して同僚やエディターに渡します。完成までの時間、手戻り、利用枠を比較しましょう。', '같은 말하기 영상으로 긴 무음을 제거하고 용어를 수정한 뒤 자막을 내보내 동료나 편집기로 전달하세요. 완료 시간, 재작업 단계와 사용 한도를 비교하세요.', 'Bearbeite dasselbe Sprachvideo: lange Pausen schneiden, Fachbegriffe korrigieren, Untertitel exportieren und ans Team oder den Editor übergeben. Vergleiche Dauer, Nacharbeit und verbrauchte Kontingente.'),
    sources: [
      { label: 'Descript · Video editing', url: 'https://www.descript.com/video-editing' },
      { label: 'Descript · Import & upload', url: 'https://help.descript.com/getting-started/import-overview' },
      { label: 'Descript · Project access', url: 'https://help.descript.com/working-in-projects/access' },
      { label: 'Descript · Pricing', url: 'https://www.descript.com/pricing' },
    ],
  },
];
