# AGENTS.md - 项目上下文与指令

车昕益（Xin-Yi Che）的个人学术主页，纯静态单页，通过 GitHub Pages 发布（https://chexy-cn.github.io/）。

## 项目结构

| 文件 | 作用 |
|---|---|
| `index.html` | 唯一的内容页：`<head>` 内含 SEO / Open Graph / JSON-LD 元信息与提前确定语言的内联脚本；正文为页头（姓名、标语、外部链接、导航）+ 学术经历 / 学术研究 / 最新动态 / 项目开发 四个区块 |
| `style.css` | 全部样式：CSS 变量配色，支持 `prefers-color-scheme: dark`；移动端断点 `540px` |
| `lang-manager.js` | 中英文切换：中文为原文，英文写在元素的 `data-en`（文字）/ `data-en-aria-label`（无障碍标签）属性中；语言偏好存于 `localStorage`（`site_lang_v1`） |
| `site.js` | 页面交互（微信弹层点击外部或按 Esc 关闭） |
| `assets/` | 静态资源（`favicon.svg` 等） |
| `experience.html` / `research.html` / `news.html` / `projects.html` | 旧链接兼容页，仅做 `meta refresh` 跳转到首页对应锚点，不要往里加内容 |
| `.github/workflows/deploy.yml` | 推送 `main` 时自动部署 |
| `MEMORY.md` | 工作记录：重要改动、决策与待办事项；完成较大改动后在顶部追加记录 |

- **技术：** 原生 HTML5 / CSS3 / ES6+，无框架、无构建步骤、无外部依赖。
- **已废弃：** 旧版 `script.js`（`blogPosts` / `researchPapers` 数组）、星空背景图、背景切换器、博客详情页、基于 CSS 选择器的翻译表均已删除，不要按旧架构恢复。

## 本地预览

```bash
python3 -m http.server 8000
```

访问 http://localhost:8000 ，检查桌面端与 ≤540px 宽度、浅色 / 深色模式、中英文切换。

## 部署

- 推送 `main`（或在 Actions 中手动运行）触发部署。
- 工作流只把根目录下的 `*.html`、`*.css`、`*.js`，以及（若存在）`assets/`、`files/` 目录复制到 `_site/` 发布。
- **新增静态资源**（图片、CV PDF 等）放进 `assets/` 或 `files/`，否则不会被发布；`*.md` 等文档不会被发布。

## 内容维护规范

- **所有内容直接写在 `index.html` 中**（中文为原文）。
- **新增或修改需要翻译的中文文字时，在同一元素上同步写 `data-en="英文"`**；元素内只能是纯文本（替换时使用 `textContent`，内部标签会丢失）。不需翻译的内容（论文标题、作者、期刊等英文信息）不加该属性。
- `<title>` 与 `meta[name="description"]` 的英文版在 `lang-manager.js` 的 `meta.en` 中维护。
- 新增论文：在 `#research .list` 中追加一个 `article.card`，包含：
  - `h3` 标题；
  - 作者行 `p.muted`，本人姓名用 `<span class="me">Xin-Yi Che</span>` 加粗；
  - 期刊 / e-Print 与日期 `p.muted`；
  - 链接行 `p.links`：arXiv、DOI（如有）、INSPIRE、相关 GitHub 仓库。
- 个人信息（单位、外部账号）变化时，同步更新 `<head>` 中的 JSON-LD 与 Open Graph 元信息。
- 外部链接统一加 `target="_blank" rel="noopener noreferrer"`。
- 修改 CSS / JS 后，同步递增 `index.html` 中引用的 `?v=` 版本号以刷新缓存。

## 样式与可访问性

- 保持极简风格：系统字体、单栏（最大宽度 `46rem`）、细分隔线、低饱和蓝色链接。
- 颜色一律使用 `style.css` 顶部的 CSS 变量，新增颜色时需同时给出深色模式取值。
- 保留语义化结构（`header` / `nav` / `main` / `section[aria-labelledby]` / `article`）和 `:focus-visible` 样式。
- 纯图标链接必须带 `aria-label` 与 `title`；新交互元素需支持键盘与触摸操作。
