# GEMINI.md - 项目上下文与指令

此文件为个人技术博客项目提供架构上下文和开发指南。

## 项目概述

这是一个现代化的、响应式的个人博客和作品集网站。包含英雄区域（Hero Section）、动态博客系统（客户端渲染）、项目展示、关于我以及联系表单。

- **核心技术：** HTML5, CSS3, ES6+ JavaScript。
- **样式：** 使用原生 CSS 变量、Grid、Flexbox 和响应式设计（移动优先）。
- **架构：** 
  - `index.html`: 单页面结构，包含导航、英雄区、博客、学术研究（Research）、项目、关于和联系等区块。
  - `style.css`: 包含全面的样式定义和自定义背景系统（`lyra-stars`）。
  - `script.js`: 管理应用状态、通过本地数组动态加载博客和学术论文内容，以及处理 UI 交互（导航、移动端菜单、模态框）。
- **部署：** 通过 GitHub Actions (`.github/workflows/deploy.yml`) 自动部署到 GitHub Pages。

## 构建与运行

由于这是一个静态网站，无需构建步骤。

- **本地开发：** 直接在浏览器中打开 `index.html` 或使用简单的本地服务器。
  - 命令示例：`python -m http.server 8000` 或使用 VS Code 的 "Live Server" 扩展。
- **测试：** 手动验证不同屏幕尺寸（768px 和 480px 断点）下的响应式表现，确保博客详情页覆盖层和学术论文卡片显示正常。
- **部署：** 推送到 `main` 或 `master` 分支将触发 GitHub Pages 自动部署。

## 开发规范

- **内容管理：**
  - 博客文章在 `script.js` 的 `blogPosts` 数组中管理。
  - 学术论文在 `script.js` 的 `researchPapers` 数组中管理。
  - 添加新论文：在数组中追加包含 `id`, `title`, `authors` (数组), `journal`, `date`, `doi`, `arxiv`, 和 `inspireUrl` 的对象。
- **样式指南：**
  - 使用 `:root` 中定义的 CSS 变量来控制颜色、字体和间距。
  - 遵循 `style.css` 中使用的 BEM 风格或描述性类名命名规范。
  - 保持 `assets/` 中定义的“星空”美学风格。
- **交互逻辑：**
  - 导航通过平滑滚动到指定 ID 或切换博客详情视图的显示状态来实现。
  - 论文列表支持高亮显示作者姓名，并提供指向 DOI, arXiv, 和 INSPIRE 记录的链接。
  - 确保所有新交互元素支持触摸设备且具备无障碍性。
- **资源：**
  - 大尺寸背景图存储在 `assets/` 目录。
  - 保持横向 (`-horizontal.jpg`) 和纵向 (`-vertical.jpg`) 版本以优化不同设备的显示效果。
