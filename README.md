# chexy-cn.github.io

一个简洁的个人学术主页（静态站点），支持中英文切换、研究论文展示和最新动态。

## 功能

- 单页响应式布局（桌面 + 移动端）
- 中英文切换
- 学术经历与论文列表（含 arXiv / DOI / INSPIRE 链接）
- 最新动态文章列表与详情页
- GitHub Pages 自动部署

## 项目结构

```text
.
├── index.html          # 页面结构
├── style.css           # 样式与响应式规则
├── script.js           # 数据与交互逻辑
├── assets/             # 背景图等静态资源
└── .github/workflows/  # Pages 部署流程
```

## 内容维护

- 学术经历：编辑 `script.js` 中 `academicExperience`
- 最新动态：编辑 `script.js` 中 `blogPosts`
- 论文列表：编辑 `script.js` 中 `researchPapers`
- 页面样式：编辑 `style.css`

