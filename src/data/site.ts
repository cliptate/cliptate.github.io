export type LocalizedString = {
  zh: string;
  en: string;
};

export const siteData = {
  appStoreUrl: 'https://apps.apple.com/',
  githubUrl: 'https://github.com/cliptate',
  meta: {
    title: {
      zh: 'Cliptate — 面向音视频创作者的端侧 AI 工作台',
      en: 'Cliptate — The on-device AI workspace for audio and video creators',
    },
    description: {
      zh: '为 Mac 创作者打造的端侧 AI 助手：离线转写、智能去停顿、声音增强、翻译纠错与专业级时间线导出。',
      en: 'A Mac-first on-device AI assistant for creators with local transcription, smart trimming, voice enhancement, translation, and timeline-ready exports.',
    },
  },
  nav: [
    { href: '#features', label: { zh: '核心功能', en: 'Features' } },
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
      zh: 'Cliptate 将离线转写、智能去停顿、声音增强、翻译纠错与专业导出整合进同一条创作链路，让你更快进入真正的叙事和表达。',
      en: 'Cliptate unifies offline transcription, pause trimming, voice enhancement, translation, and pro exports into one creator workflow so you can stay focused on storytelling.',
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
      { value: 'Offline', label: { zh: '转写与增强均在设备侧完成', en: 'Transcription and enhancement stay on your device' } },
      { value: 'Fast Cut', label: { zh: '静音裁剪与粗剪提速', en: 'Silence trimming accelerates rough cuts' } },
      { value: 'Studio', label: { zh: '降噪、EQ、动态处理一体化', en: 'Noise reduction, EQ, and dynamics in one pass' } },
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
        tag: { zh: '离线转写', en: 'Offline transcription' },
        title: { zh: '字幕提取精准且可编辑', en: 'Accurate, editable subtitle extraction' },
        body: {
          zh: '直接在本地生成高精度字幕，不上传音频，不牺牲隐私。',
          en: 'Generate accurate captions locally without shipping audio to the cloud.',
        },
      },
      {
        index: '02',
        tag: { zh: '智能精剪', en: 'Smart trimming' },
        title: { zh: '批量去停顿，粗剪更快成型', en: 'Trim pauses in bulk and shape rough cuts faster' },
        body: {
          zh: '自动识别无声片段，快速裁剪播客、访谈和课程录音中的冗余停顿。',
          en: 'Detect and remove dead air across podcasts, interviews, and course recordings.',
        },
      },
      {
        index: '03',
        tag: { zh: '声音增强', en: 'Voice enhancement' },
        title: { zh: '本地完成降噪、EQ 与动态处理', en: 'Apply denoise, EQ, and dynamics on-device' },
        body: {
          zh: '用接近录音室流程的处理链，让旁白、人声和播客轨道更稳定、更清晰。',
          en: 'Bring narration, dialogue, and podcast tracks closer to a studio-grade finish.',
        },
      },
      {
        index: '04',
        tag: { zh: '声音克隆', en: 'Voice cloning' },
        title: { zh: '用本地模型完成自然配音', en: 'Create natural dubbing with local models' },
        body: {
          zh: '保留角色质感与表达节奏，适合补录、配音和多语种版本制作。',
          en: 'Keep tone and cadence intact for pick-ups, dubbing, and multilingual versions.',
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
          zh: '把精彩片段主动标记到时间线上，帮助你更快找到可发布的内容段落。',
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
      zh: 'Cliptate 的价值不是单个模型，而是把创作者最耗时的步骤压缩成四个连续动作。',
      en: 'The value is not one model by itself, but compressing the slowest creator tasks into four connected steps.',
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
        title: { zh: '增强声音并生成多语版本', en: 'Enhance voice and create multilingual versions' },
        body: {
          zh: '针对旁白和人声做本地处理，再完成翻译与多语配音。',
          en: 'Refine voice locally, then branch into translated and dubbed versions.',
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
      zh: '没有云端排队、没有敏感素材上传、也没有网络往返等待。所有关键处理都留在你的 Mac 上完成。',
      en: 'No cloud queue, no sensitive media upload, and no waiting on network round trips. The entire critical path stays on your Mac.',
    },
    points: [
      { zh: '素材不离开设备，适合隐私敏感内容与合规要求。', en: 'Media stays on-device for privacy-sensitive work and compliance needs.' },
      { zh: '不受网络波动影响，创作节奏不会被上传和下载打断。', en: 'Network volatility never interrupts the editing rhythm.' },
      { zh: '端侧模型直接服务后期流程，减少跨平台搬运。', en: 'On-device models stay close to the editing workflow, not another platform.' },
      { zh: '适合播客、课程、访谈、企业内部内容等需要控盘的场景。', en: 'Ideal for podcasts, courses, interviews, and internal media where control matters.' },
    ],
  },
  compatibility: {
    kicker: { zh: '专业输出', en: 'Professional output' },
    title: {
      zh: '无缝衔接你已经在用的剪辑软件。',
      en: 'Plug directly into the editing tools you already use.',
    },
    description: {
      zh: '导出格式保持专业流程兼容，让你不用为了 AI 处理重建整个后期链路。',
      en: 'Export formats stay compatible with pro workflows, so AI processing does not force a new post stack.',
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
        title: { zh: '课程与会议记录', en: 'Courses and meeting recordings' },
        body: {
          zh: '把长时内容压缩成可检索、可翻译、可交付的文本与字幕资产。',
          en: 'Turn long-form recordings into searchable, translatable, deliverable text assets.',
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
  cta: {
    kicker: { zh: '现在开始', en: 'Start now' },
    title: {
      zh: '把时间留给创作，把繁杂留给 Cliptate。',
      en: 'Keep your time for creation and let Cliptate absorb the busywork.',
    },
    description: {
      zh: '如果你希望在 Mac 上把转写、精剪、增强与导出压缩成一条更短的路径，Cliptate 就是这条工作流的起点。',
      en: 'If you want the Mac workflow for transcription, trimming, enhancement, and export to feel dramatically shorter, this is where it begins.',
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
