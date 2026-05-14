# Cliptate Landing Page

Cliptate 的 GitHub Pages 官网，使用 Astro + Tailwind CSS 构建，强调科技感视觉、极低运行时负担和双语内容切换。

## Tech stack

- Astro
- Tailwind CSS v4
- TypeScript
- GitHub Pages + GitHub Actions

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Content and structure

- `src/data/site.ts`: 中英双语文案与页面内容配置
- `src/pages/index.astro`: 单页 Landing Page 结构
- `src/components/`: 语言切换、文案渲染、Mac 风格样机
- `src/styles/global.css`: 全局视觉系统和响应式样式

## Deployment

推送到 `main` 后，GitHub Actions 会自动构建并部署到 GitHub Pages。

如果要替换链接：

- App Store: `src/data/site.ts` 里的 `appStoreUrl`
- GitHub: `src/data/site.ts` 里的 `githubUrl`
