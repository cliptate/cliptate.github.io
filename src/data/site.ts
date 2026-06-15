export type LocalizedString = {
  zh: string;
  en: string;
};

export const siteData = {
  appStoreUrl: 'https://apps.apple.com/cn/app/%E5%89%AA%E8%A8%80-cliptate/id6754441004?mt=12',
  githubUrl: 'https://github.com/cliptate',
  meta: {
    title: {
      zh: 'Cliptate — 面向音视频创作者的端侧 AI 工作台',
      en: 'Cliptate — The on-device AI workspace for audio and video creators',
    },
    description: {
      zh: '为 Mac 创作者打造的端侧 AI 助手：实时语音听写、离线转写、智能去停顿、多模态 TTS 合成、翻译纠错与专业级时间线导出。',
      en: 'A Mac-first on-device AI assistant for creators with live voice dictation, local transcription, smart trimming, multi-mode TTS synthesis, translation, and timeline-ready exports.',
    },
  },
  nav: [
    { href: '#features', label: { zh: '核心功能', en: 'Features' } },
    { href: '#voice', label: { zh: '语音', en: 'Voice' } },
    { href: '#workflow', label: { zh: '工作流', en: 'Workflow' } },
    { href: '#privacy', label: { zh: '隐私与性能', en: 'Privacy' } },
    { href: '#cta', label: { zh: '立即体验', en: 'Get Cliptate' } },
  ],
  hero: {
    kicker: {
      zh: '为 Mac 音视频创作者而生',
      en: 'Built for Mac audio and video creators',
    },
    title: {
      zh: '把剪辑里的机械劳动，交给纯本地 AI。',
      en: 'Move the repetitive editing work to fully local AI.',
    },
    description: {
      zh: 'Cliptate 将实时听写、转写、精剪、增强、TTS 合成与专业导出整合进一条本地链路，让你更快进入叙事。',
      en: 'One on-device pipeline — from dictation to dubbing — so you spend less time on process and more on storytelling.',
    },
    primaryCta: {
      zh: '在 App Store 查看',
      en: 'View on the App Store',
    },
    secondaryCta: {
      zh: '查看 GitHub',
      en: 'Explore on GitHub',
    },
    pills: [
      { zh: '100% 本地运行', en: '100% local processing' },
      { zh: '实时听写与 TTS 合成', en: 'Live dictation and TTS synthesis' },
      { zh: '为 Final Cut / Resolve / Premiere 准备', en: 'Ready for FCP / Resolve / Premiere' },
      { zh: '零云端上传', en: 'Zero cloud upload' },
    ],
    stats: [
      {
        value: '100%',
        label: { zh: '本地处理链路', en: 'On-device workflow' },
      },
      {
        value: '6',
        label: { zh: '关键工作流模块', en: 'Core workflow modules' },
      },
      {
        value: 'FCPXML',
        label: { zh: '专业时间线导出', en: 'Timeline export format' },
      },
    ],
  },
  proof: {
    items: [
      { value: 'Offline', label: { zh: '转写与合成均在设备侧完成', en: 'Transcription and synthesis stay on your device' } },
      { value: 'Fast Cut', label: { zh: '静音裁剪与粗剪提速', en: 'Silence trimming accelerates rough cuts' } },
      { value: 'Speakers', label: { zh: '多说话人自动识别与标注', en: 'Multi-speaker diarization and labeling' } },
      { value: 'Export', label: { zh: '字幕和时间线直接进入后期', en: 'Subtitles and timelines hand off cleanly to post' } },
    ],
  },
  features: {
    kicker: { zh: '核心能力', en: 'Core capabilities' },
    title: {
      zh: '一套面向创作者的端侧 AI 工具链。',
      en: 'One on-device AI toolkit built for creator workflows.',
    },
    description: {
      zh: '不是散落的单点功能，而是从素材进入到成品导出的完整工作链路。',
      en: 'Not a loose collection of point features, but one continuous pipeline from raw media to final export.',
    },
    items: [
      {
        index: '01',
        tag: { zh: '转写与听写', en: 'Transcription and dictation' },
        title: { zh: '字幕提取精准且可编辑', en: 'Accurate, editable subtitle extraction' },
        body: {
          zh: '批量转写文件，或切换到实时听写模式口述文本——全程本地，音频不上传。',
          en: 'Batch-transcribe files or dictate live — all on-device, no audio upload.',
        },
      },
      {
        index: '02',
        tag: { zh: '智能精剪', en: 'Smart trimming' },
        title: { zh: '批量去停顿，粗剪更快成型', en: 'Trim pauses in bulk and shape rough cuts faster' },
        body: {
          zh: '自动检测无声片段，批量裁剪播客、访谈、课程录音中的冗余停顿。',
          en: 'Auto-detect silence and bulk-trim dead air from podcasts, interviews, and recordings.',
        },
      },
      {
        index: '03',
        tag: { zh: '说话人识别', en: 'Speaker diarization' },
        title: { zh: '自动区分说话人，标注对话结构', en: 'Auto-identify speakers and label dialogue' },
        body: {
          zh: '自动识别多位说话人并分段标注，让访谈、播客和会议记录的结构一目了然。',
          en: 'Automatically identify and label multiple speakers so interviews, podcasts, and meeting transcripts are instantly clear.',
        },
      },
      {
        index: '04',
        tag: { zh: 'TTS 合成', en: 'Voice synthesis' },
        title: { zh: '四种模式覆盖从补录到原创配音的全部需求', en: 'Four TTS modes from pick-ups to original voice creation' },
        body: {
          zh: '预设音色、声音克隆、情感控制、音色设计——四种模式，按需选用。',
          en: 'Preset, clone, emotion control, or voice design — four modes for any voicing need.',
        },
      },
      {
        index: '05',
        tag: { zh: '纠错翻译', en: 'Correction and translation' },
        title: { zh: '上下文纠错与即时多语翻译', en: 'Context-aware correction with instant translation' },
        body: {
          zh: '在文本层完成语义修正，再生成面向全球受众的多语言内容。',
          en: 'Correct transcripts contextually before producing multilingual deliverables.',
        },
      },
      {
        index: '06',
        tag: { zh: '高亮标记', en: 'Highlighting' },
        title: { zh: '自动抓出关键句与高光片段', en: 'Surface the lines and moments worth revisiting' },
        body: {
          zh: '把精彩片段主动标记到时间线，更快找到可发布的内容段落。',
          en: 'Flag the strongest moments on the timeline so publishing edits move faster.',
        },
      },
    ],
  },
  workflow: {
    kicker: { zh: '工作流', en: 'Workflow' },
    title: {
      zh: '从导入到导出，保持一条稳定高速的生产线。',
      en: 'From import to export, keep the workflow in one fast production line.',
    },
    description: {
      zh: '把创作者最耗时的步骤，压缩成四个连续动作。',
      en: 'The most time-consuming creator tasks, compressed into four connected steps.',
    },
    steps: [
      {
        index: '01',
        title: { zh: '导入常见音视频素材', en: 'Import common audio and video formats' },
        body: {
          zh: '把播客、Vlog、访谈或会议录音直接拖进工作区。',
          en: 'Drop podcasts, vlogs, interviews, or meeting recordings straight into the workspace.',
        },
      },
      {
        index: '02',
        title: { zh: '转写、去停顿、纠错同步进行', en: 'Transcribe, trim pauses, and correct in parallel' },
        body: {
          zh: '减少在不同工具之间来回切换，第一轮粗剪就更接近可交付状态。',
          en: 'Avoid bouncing between tools so the first cut lands much closer to delivery-ready.',
        },
      },
      {
        index: '03',
        title: { zh: '生成多语配音与翻译版本', en: 'Create multilingual dubbed and translated versions' },
        body: {
          zh: '通过 TTS 合成完成配音，再交由翻译模块生成多语版本。',
          en: 'Use TTS synthesis for dubbing, then branch into translated versions.',
        },
      },
      {
        index: '04',
        title: { zh: '导出时间线与字幕文件', en: 'Export timelines and subtitle files' },
        body: {
          zh: '把 FCPXML、SRT、ASS、VTT 直接交给 Final Cut Pro、DaVinci Resolve 和 Premiere Pro。',
          en: 'Hand off FCPXML, SRT, ASS, and VTT directly to Final Cut Pro, DaVinci Resolve, and Premiere Pro.',
        },
      },
    ],
  },
  privacy: {
    kicker: { zh: '隐私与性能', en: 'Privacy and performance' },
    title: {
      zh: '完全本地，不只是更安全，也更顺手。',
      en: 'Fully local means more than privacy. It means a smoother workflow.',
    },
    description: {
      zh: '没有云端排队，没有素材上传，没有网络等待。',
      en: 'No cloud queue. No media upload. No network wait.',
    },
    points: [
      { zh: '素材不离开设备，适合隐私敏感内容。', en: 'Media stays on-device — safe for sensitive and regulated content.' },
      { zh: '网络波动不影响创作节奏。', en: 'Network issues never disrupt your workflow.' },
      { zh: '端侧模型直接嵌入后期流程，无需切换平台。', en: 'On-device models fit into your existing post workflow.' },
      { zh: '适合播客、课程、访谈和企业内部内容。', en: 'Ideal for podcasts, courses, interviews, and internal media.' },
    ],
  },
  compatibility: {
    kicker: { zh: '专业输出', en: 'Professional output' },
    title: {
      zh: '无缝衔接你已经在用的剪辑软件。',
      en: 'Plug directly into the editing tools you already use.',
    },
    description: {
      zh: '不需要为了 AI 处理重建后期链路，格式直接兼容。',
      en: 'No need to rebuild your post stack — formats plug straight in.',
    },
    outputs: [
      { code: 'FCPXML', label: { zh: '适配时间线工程交换', en: 'Timeline project exchange' } },
      { code: 'SRT', label: { zh: '通用字幕交付', en: 'Universal subtitle delivery' } },
      { code: 'ASS', label: { zh: '样式化字幕支持', en: 'Styled subtitle support' } },
      { code: 'VTT', label: { zh: '网页与平台字幕', en: 'Web and platform captions' } },
    ],
    note: {
      zh: '兼容 Final Cut Pro、DaVinci Resolve、Premiere Pro 及常见分发平台。',
      en: 'Compatible with Final Cut Pro, DaVinci Resolve, Premiere Pro, and common distribution platforms.',
    },
  },
  scenarios: {
    kicker: { zh: '适用场景', en: 'Use cases' },
    title: {
      zh: '为播客、Vlog、课程、访谈和多语内容准备。',
      en: 'Ready for podcasts, vlogs, courses, interviews, and multilingual content.',
    },
    items: [
      {
        title: { zh: '播客与人物访谈', en: 'Podcasts and interviews' },
        body: {
          zh: '快速去停顿、补齐字幕并整理可发布片段。',
          en: 'Trim dead air, add captions, and identify publishable moments faster.',
        },
      },
      {
        title: { zh: 'Vlog 与短视频', en: 'Vlogs and short-form video' },
        body: {
          zh: '让口播与粗剪更顺滑，把精力重新放回节奏和表达。',
          en: 'Make talking-head edits smoother and keep attention on pacing and expression.',
        },
      },
      {
        title: { zh: '课程、会议与口述记录', en: 'Courses, meetings, and dictation' },
        body: {
          zh: '把长时录音或实时语音输入压缩成可检索、可翻译、可交付的文本与字幕资产。',
          en: 'Turn long recordings or live voice input into searchable, translatable, and deliverable text assets.',
        },
      },
      {
        title: { zh: '多语种配音', en: 'Multilingual dubbing' },
        body: {
          zh: '在保留原始表达质感的同时，更快生成新的语言版本。',
          en: 'Ship alternate language versions faster while preserving expressive tone.',
        },
      },
    ],
  },
  voice: {
    kicker: { zh: '语音能力', en: 'Voice capabilities' },
    title: {
      zh: '实时听写与本地多模态语音合成。',
      en: 'Real-time dictation and on-device multi-mode voice synthesis.',
    },
    description: {
      zh: '从实时口述到 TTS 配音，两种语音能力，全程本地。',
      en: 'From live dictation to TTS dubbing — two voice capabilities, entirely on-device.',
    },
    dictation: {
      kicker: { zh: '语音听写', en: 'Voice dictation' },
      title: { zh: '说话即输入，实时生成可编辑文本', en: 'Speak to type — editable text in real time' },
      description: {
        zh: '实时流式转写麦克风音频，支持多说话人识别与自定义词典，全局快捷键随时唤起。',
        en: 'Stream editable text from your mic in real time, with multi-speaker support, custom vocabulary, and a global shortcut.',
      },
      points: [
        { zh: '流式实时转写，低延迟输出', en: 'Streaming transcription with minimal latency' },
        { zh: '多说话人自动区分与标注', en: 'Automatic multi-speaker diarization' },
        { zh: '自定义词典，提升专有词汇准确率', en: 'Custom vocabulary for domain-specific accuracy' },
        { zh: '全局快捷键随时唤起或暂停', en: 'Global shortcut to invoke or pause anywhere' },
      ],
    },
    tts: {
      kicker: { zh: 'TTS 语音合成', en: 'TTS voice synthesis' },
      title: { zh: '四种模式，按需选用', en: 'Four modes for every voicing need' },
      modes: [
        {
          code: 'Preset',
          title: { zh: '预设音色', en: 'Preset voices' },
          body: { zh: '内置多语言音色库，即开即用。', en: 'Built-in multilingual voices, ready instantly.' },
        },
        {
          code: 'Clone',
          title: { zh: '声音克隆', en: 'Voice clone' },
          body: { zh: '上传参考音频，复现音色与节奏。', en: 'Upload reference audio to reproduce timbre and cadence.' },
        },
        {
          code: 'Emotion',
          title: { zh: '情感控制', en: 'Emotion control' },
          body: { zh: '通过提示词调控音色的情感与风格。', en: 'Steer emotion and style via text prompts.' },
        },
        {
          code: 'Design',
          title: { zh: '音色设计', en: 'Voice design' },
          body: { zh: '用文字描述，生成原创声音形象。', en: 'Describe a voice in text to generate an original persona.' },
        },
      ],
    },
  },
  cta: {
    kicker: { zh: '现在开始', en: 'Start now' },
    title: {
      zh: '把时间留给创作，把繁杂留给 Cliptate。',
      en: 'Keep your time for creation and let Cliptate absorb the busywork.',
    },
    description: {
      zh: '在 Mac 上把从听写到导出的全流程压缩到 Cliptate。',
      en: 'Compress your entire Mac workflow — dictation to export — into one app.',
    },
    primaryCta: {
      zh: '打开 App Store',
      en: 'Open the App Store',
    },
    secondaryCta: {
      zh: '进入 GitHub',
      en: 'Visit GitHub',
    },
  },
  footer: {
    tagline: {
      zh: 'Cliptate — 为重视隐私、速度与专业输出的创作者打造。',
      en: 'Cliptate — Built for creators who care about privacy, speed, and professional output.',
    },
  },
} as const;
