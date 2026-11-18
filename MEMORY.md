# MEMORY.md - 工作记录

记录本项目的重要改动、决策与待办事项，便于后续（人或 AI）接手。最新记录写在最上方。
本文件不会被部署（工作流只发布 `*.html` / `*.css` / `*.js` 与 `assets/`、`files/`）。

---

## 2026-11-18（续）

- 新增 ORCID（0009-0006-0403-3194）：页头图标链接（位于 GitHub 之后），JSON-LD 加入 `identifier` 与 `sameAs`。
- 尝试对比了 4 套替代视觉风格（学术经典、现代卡片、极简杂志、终端风），最终决定保留原有的极简风格，已清理临时 `preview/` 目录。

## 2026-11-18

### 1. 清理冗余文件

首页早已合并为单页，以下文件不再被引用但仍被部署，已删除（均可从 git 历史恢复，如 `git checkout <commit> -- paper.txt`）：

- `script.js`：旧版 i18n / 博客 / 论文渲染逻辑（内容已与首页不一致）
- `details.css`、`background-switcher.js`：旧详情页与背景切换
- `fig/`、`fig1/`、`assets/lyra-stars-*.jpg`、`assets/placeholder.txt`：约 37 MB 背景图
- `paper.txt`：论文 BibTeX / INSPIRE 草稿（以后做"复制 BibTeX"功能时可从历史中取回）
- `ASSETS_SETUP.md`、`IMPROVED_BG_SETUP.md`：背景图相关说明
- `.nojekyll`：改用 Actions 部署后不再需要

保留 `experience.html` / `research.html` / `news.html` / `projects.html` 作为旧链接跳转页。

### 2. 部署工作流（`.github/workflows/deploy.yml`）

- 去掉 `pull_request` 与 `master` 触发，仅在推送 `main` 时部署，并新增 `workflow_dispatch` 手动触发。
- 新增 "Collect site files" 步骤：只复制 `*.html`、`*.css`、`*.js` 及（若存在）`assets/`、`files/` 到 `_site/` 再上传，不再发布整个仓库。
- `actions/configure-pages` 升级到 v5。

### 3. 项目指令文档

- `GEMINI.md` 按现有架构重写，并改名为 `AGENTS.md`。
- `README.md` 同步更新维护说明。

### 4. 技术细节改进

| 项目 | 改动 |
|---|---|
| SEO / 分享 | `index.html` `<head>` 新增 canonical、favicon、`theme-color`（浅/深）、Open Graph、Twitter Card、JSON-LD `Person`（关联 GitHub、INSPIRE、X） |
| favicon | 新增 `assets/favicon.svg`（蓝底白色引力波波形） |
| 翻译机制 | 英文改为写在元素的 `data-en` / `data-en-aria-label` 属性中，`lang-manager.js` 重写，不再依赖 `nth-of-type` 等位置选择器；页面 `<title>` / description 的英文在 `lang-manager.js` 的 `meta.en` 中 |
| 语言闪烁 | `<head>` 内联脚本在首次绘制前确定语言；英文访客在替换完成前隐藏 `[data-en]` 元素（`html[data-lang-pending]`），3 秒兜底超时 |
| 深色模式 | `style.css` 颜色全部改为 CSS 变量，新增 `prefers-color-scheme: dark` 配色 |
| 微信弹层 | 新增 `site.js`：点击外部或按 Esc 关闭，Esc 后焦点回到图标 |
| 其他 | 删除未使用的 `.tags` 样式；版本号 `style.css?v=7`、`lang-manager.js?v=5`、`site.js?v=1` |

**验证：** JS 语法检查、JSON-LD 解析、HTML 标签配对均通过；本地浏览器测试中英文切换、刷新后保持语言、微信弹层关闭均正常，控制台无报错。深色模式尚未实际目视检查。

### 决策记录

- JSON-LD `sameAs` 未加入 Facebook：现有链接是 `share/...` 分享短链，不是稳定的个人主页地址。
- 未加入 ORCID：尚不知道 ORCID 号（后已补充，见上方"续"记录）。
- 部署采用"按扩展名 / 目录白名单"收集文件，而不是排除法，避免草稿和文档被意外公开。

---

## 待办 / 后续建议

- [ ] 提交并推送本次改动，确认 GitHub Actions 部署成功（当前环境无法写入 `.git`，需手动提交）
- [ ] 在系统深色模式下目视检查页面效果
- [ ] 补充个人简介 / 研究兴趣段落（目前只有一行标语）
- [x] ORCID 已加入（页头 + JSON-LD）
- [ ] 顶部加入 Google Scholar、INSPIRE 作者页链接，并同步 JSON-LD `sameAs`
- [ ] 提供 CV（PDF，放在 `files/`）
- [ ] 检查 arXiv:2512.22762 是否已发表，补充期刊与 DOI
- [ ] 论文卡片可考虑加入"复制 BibTeX"按钮
- [ ] 更新"最新动态"（目前只有 2025 年 6 月一条），或暂时隐藏该区块
- [ ] 加页脚（最后更新时间 / © 年份）
- [ ] Facebook 链接换成个人主页的固定地址
- [ ] （可选）头像、Open Graph 分享图片（`og:image`）
