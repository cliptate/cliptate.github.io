# Cliptate

[English](README.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md)

[Cliptate 웹사이트](https://cliptate.github.io)의 소스 저장소입니다. macOS 앱은 [cliptate/cliptate](https://github.com/cliptate/cliptate)에 있습니다. 웹사이트는 앱의 main 브랜치를 기준으로 하며 설치 버전의 기능은 해당 Release에 따라 다릅니다.

Mac에서 전사, 무음 제거, 자막 편집, 음성 합성을 처리하세요. 필요할 때 AI 교정과 번역을 사용하세요. 무료 GitHub 버전은 모든 모델과 Pro 기능, 스크립트용 CLI를 제공합니다.

![받아쓰기 통계와 활동 기록을 보여주는 Cliptate 한국어 홈 화면](public/assets/screenshots/home.ko.jpg)

*홈에서 누적 받아쓰기 통계, 최근 12개월의 활동, 유형별 기록을 확인할 수 있습니다.*

## 핵심 기능

- **정확하고 편집 가능한 자막 추출** — Parakeet, Qwen3 ASR, FireRed, Cohere 모델로 오디오와 비디오를 로컬 전사하고 사용자 사전으로 전문 용어 인식을 보완하세요.
- **침묵을 일괄 제거해 러프 컷을 더 빠르게** — 팟캐스트, 인터뷰, 녹음의 무음 구간을 자동 감지하고 불필요한 침묵을 일괄 제거합니다.
- **화자를 자동 식별하고 대화에 레이블 표시** — 지원되는 전사 흐름에서 Sortformer로 화자를 구분하세요. Silero VAD는 음성 구간을 감지해 인터뷰와 회의 녹음을 정리하는 데 도움을 줍니다.
- **내레이션부터 독창적인 음성까지** — Qwen3 TTS로 프리셋 음성, 참조 오디오 클론, 감정 제어, 음성 디자인을 사용하세요. 기능은 선택한 모델에 따라 다릅니다.
- **전사문 교정과 이중 언어 자막 제작** — 설정한 AI 제공업체와 API 키로 교정과 핵심어 강조를 사용하세요. 사용자 지정 OpenAI 호환 엔드포인트도 지원합니다. 자막은 지원되는 언어 쌍에 대해 Apple 번역으로 처리합니다.
- **말하는 콘텐츠에 리듬과 강조 더하기** — 군더더기 말 필터, 확대, 줌을 설정하세요. 설정한 AI 제공업체로 하이라이트를 추출하고 가로·세로 자막 스타일과 번역 위치를 조절하세요.

## 다운로드 및 설치

Apple Silicon(M1 이상)과 macOS 15 이상이 필요합니다. 모델 크기와 메모리 요구량이 다르므로 충분한 저장 공간을 확보하세요.

- **[무료 GitHub 버전](https://github.com/cliptate/cliptate/releases)** — 구독 없이 모든 모델과 Pro 기능을 무료로 제공합니다. 네이티브 CLI, 앱 내 업데이트, 권한 허용 후 텍스트 삽입과 글로벌 단축키를 지원합니다. 온라인 AI 제공업체 요금은 별도입니다.
- **[App Store 버전](https://apps.apple.com/cn/app/%E5%89%AA%E8%A8%80-cliptate/id6754441004?mt=12)** — App Store 버전은 구독 정책과 샌드박스 제한을 적용하며 CLI가 없습니다. 받아쓴 텍스트는 복사해 붙여넣고 단축키도 제한됩니다. 기능과 가격은 스토어 페이지를 확인하세요.
- **[Nightly 미리보기 빌드](https://github.com/cliptate/cliptate/releases/tag/nightly)** — Nightly는 main에서 주기적으로 빌드되며 미출시 변경이 포함될 수 있습니다. 해당 빌드 설명으로 기능을 확인하세요.

1. Release에서 Cliptate.dmg를 다운로드하고 응용 프로그램 폴더로 드래그하세요. 같은 페이지의 SHA-256 파일로 검증할 수 있습니다.
2. 앱을 열어 모델을 선택하고 다운로드하세요. 받아쓰기에는 마이크 권한을, 자동 입력에는 손쉬운 사용 권한을 허용하세요.
3. 미디어를 가져와 전사를 시작하세요. CLI는 먼저 설치하고 앱을 교체해 업그레이드한 후 Cliptate를 재시작하세요.

## 네이티브 CLI · GitHub 버전

CLI는 앱의 모델, 언어, 사전을 공유하며 필요하면 Cliptate를 백그라운드에서 실행합니다. 설정 → 명령줄에서 설치 명령을 복사하고 ~/.local/bin을 PATH에 추가하세요.

```sh
cliptate transcribe interview.mp4 --format json
cliptate transcribe a.wav b.mp4 --format vtt --output-dir subtitles
cliptate tts --text-file narration.txt -o narration.wav --download
cliptate dictionary add "Cliptate"
cliptate dictionary import words.txt
```

전사는 로컬 파일을 받아 text, JSON, Markdown, SRT, VTT로 출력합니다. CLI는 프로젝트나 기록을 만들지 않고 전사 또는 음성 요청을 한 번에 하나씩 실행합니다. TTS는 최신 소스에 추가되었으므로 해당 기능이 포함된 빌드를 사용하세요. 이전 버전은 cliptate --help로 확인하세요.

[전체 CLI 가이드](https://github.com/cliptate/cliptate/blob/main/docs/cli.md)

## 개인정보 보호 및 성능

전사, 무음 감지, 화자 분리, TTS는 Mac에서 실행됩니다. 온라인 AI 기능은 관련 텍스트와 선택한 문맥 정보를 설정한 서비스로 전송합니다.

- 로컬 음성 추론에는 미디어 업로드나 AI API 키가 필요 없습니다.
- 처음 모델을 다운로드할 때는 인터넷이 필요하며 캐시 후에는 로컬 음성 기능을 오프라인으로 사용할 수 있습니다.
- AI 교정, 핵심어 강조, 받아쓰기 향상은 설정한 제공업체를 사용하며 온라인 서비스는 별도 요금이 부과될 수 있습니다.
- 민감한 콘텐츠에는 로컬 음성 기능과 Apple 번역을 사용하세요. 언어 팩을 먼저 다운로드해야 할 수 있습니다.

## 전문적인 출력

AI 편집은 타임라인, 자막, 오디오, 비디오를 내보냅니다. CLI는 자동화를 위한 JSON, Markdown, VTT도 제공합니다.

- **FCPXML** — 타임라인 프로젝트 교환
- **SRT** — 범용 자막 배포
- **ASS** — 스타일 자막 지원
- **TXT** — 타임스탬프가 있는 전사문

FCPXML은 Final Cut Pro용이며 Resolve 호환 옵션도 제공합니다. 자막은 편집기가 지원하는 형식으로 가져오세요. 비디오: MP4 / MOV / M4V. 오디오: M4A / WAV.

## 웹사이트 개발

Astro, TypeScript, Tailwind CSS를 사용합니다. Node.js 22.12 이상이 필요합니다.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run check:seo
npm run preview
```

빌드 결과는 dist/에 저장됩니다. main에 push하면 .github/workflows/deploy.yml이 빌드하고 GitHub Pages에 게시합니다.

## 글과 도구 비교

`/blog/`에서 Cliptate와 Wispr Flow, MacWhisper, Descript를 비교합니다. 각 글은 작업 흐름, 버전 차이, 시험 방법과 확인 날짜가 있는 공식 자료를 다섯 언어로 제공합니다. 홈의 간결한 링크와 탐색 메뉴에서 글로 이동할 수 있습니다. `/guide/`에 설치, 모델, CLI 예제와 자주 묻는 질문을 모아 홈은 제품 소개에 집중합니다.

## 콘텐츠 관리

`/changelog/`와 `/changelog/<tag>/`에서 v1.0–v1.4를 다섯 언어로 제공합니다. 탐색 메뉴와 홈 푸터에 링크가 있으며 기능 변화, 업그레이드 안내, 제한, GitHub 원문과 영어 검증·커밋 기록을 확인할 수 있습니다. 정적 HTML, Article/ItemList, 언어별 탐색 경로와 실제 내용 수정일을 사용하는 sitemap `lastmod`를 생성합니다.

정식 릴리스를 추가하려면 `cliptate/cliptate/docs/release-notes/<tag>.md`와 GitHub Release를 확인하고 `src/data/release-metadata.json` 및 `src/data/changelog.ts`의 모든 언어를 갱신하세요. `date`는 원문 버전 날짜, `published`는 웹사이트 최초 게시일, `updated`는 내용 수정일입니다. 편집할 때 `published`를 유지하고 실질적 변경 시에만 `updated`를 바꾸세요. 경로, 언어 링크, 정렬, 스키마와 사이트맵은 자동 생성됩니다. Nightly와 미출시 기능은 제외합니다. 릴리스 기록은 명시적으로 관리하며 실행 시 조회나 자동 동기화를 하지 않습니다.

중국어는 기존 루트 URL을 유지하고 영어, 일본어, 한국어, 독일어는 `/en/`, `/ja/`, `/ko/`, `/de/`를 사용합니다. 가이드와 글도 각 언어의 정적 HTML로 출력되어 JavaScript가 필요하지 않습니다. 언어 링크는 현재 페이지를 유지하며 canonical, hreflang, 사이트맵과 메타 정보를 일치시킵니다.

템플릿은 `src/views/`, 라우트는 `src/pages/`에 있습니다. 빌드 후 `npm run check:seo`로 언어, 링크, 이미지, 주요 메타 정보와 구조화 데이터를 검증합니다. 게시 전 CI에서도 실행합니다. 게시 후 Search Console과 Bing Webmaster Tools에 `/sitemap-index.xml`을 제출하고 색인과 순위를 확인하세요. FAQ JSON-LD는 표시된 질문과 답변을 설명합니다. Google FAQ 리치 결과는 종료되었습니다.

기능 설명을 수정하기 전에 앱 소스, docs/development.md, docs/cli.md, 릴리스 노트를 확인하세요. 다섯 언어를 업데이트하고 로컬 음성과 온라인 AI, GitHub와 App Store, GUI와 CLI, 출시 기능과 최신 소스 기능을 구분하세요.

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

[사용 가이드](https://github.com/cliptate/cliptate#readme) · [릴리스 노트](https://github.com/cliptate/cliptate/tree/main/docs/release-notes) · [문제 및 피드백](https://github.com/cliptate/cliptate/issues)
