(function () {
    const STORAGE_KEY = "site_lang_v1";
    const SUPPORTED = ["zh", "en"];

    const translations = {
        "/": {
            title: {
                zh: "车昕益 | Homepage",
                en: "Xinyi Che | Homepage"
            },
            description: {
                zh: "车昕益的个人主页，聚焦引力物理与引力波研究。",
                en: "Personal homepage of Xinyi Che, focused on gravitational physics and gravitational-wave research."
            },
            selectors: {
                ".badge": { zh: "个人主页", en: "PERSONAL HOMEPAGE" },
                ".tagline": { zh: "引力波数据处理·引力理论", en: "Gravitational-wave data analysis · Gravitational theory" },
                ".intro": { zh: "你好，我是车昕益。这里是我的个人主页。", en: "Hi, I'm Xinyi Che. This is my personal homepage." },
                ".quick-card:nth-of-type(1)": { zh: "学术经历", en: "Experience" },
                ".quick-card:nth-of-type(2)": { zh: "学术研究", en: "Research" },
                ".quick-card:nth-of-type(3)": { zh: "最新动态", en: "News" },
                ".quick-card:nth-of-type(4)": { zh: "项目开发", en: "Projects" },
                ".quick-grid": { zh: "详细内容入口", en: "Section Links" }
            }
        },
        "/experience.html": {
            title: { zh: "车昕益 | 学术经历", en: "Xinyi Che | Academic Experience" },
            selectors: {
                ".logo": { zh: "车昕益", en: "Xinyi Che" },
                ".back-home": { zh: "返回首页", en: "Back Home" },
                ".hero h1": { zh: "学术经历", en: "Academic Experience" },
                ".hero p:last-of-type": { zh: "个人学习与研究阶段记录。", en: "Records of my academic and research journey." },
                ".timeline:nth-of-type(1) h3": {
                    zh: "中山大学物理与天文学院天琴中心",
                    en: "TianQin Research Center, School of Physics and Astronomy, Sun Yat-sen University"
                },
                ".timeline:nth-of-type(1) .sub": { zh: "理论组，博士在读", en: "PhD Student, Theory Group" },
                ".timeline:nth-of-type(1) .muted": { zh: "导师：梅健伟，胡一鸣", en: "Advisors: Jianwei Mei, Yi-Ming Hu" },
                ".timeline:nth-of-type(2) h3": { zh: "中山大学物理与天文学院", en: "School of Physics and Astronomy, Sun Yat-sen University" },
                ".timeline:nth-of-type(2) .sub": { zh: "物理学，本科", en: "B.Sc. in Physics" },
                ".timeline:nth-of-type(2) .muted": { zh: "物理学（强基计划）", en: "Physics (Pilot Reform Program of Enrollment for Fundamental Disciplines)" }
            }
        },
        "/research.html": {
            title: { zh: "车昕益 | 学术研究", en: "Xinyi Che | Research" },
            selectors: {
                ".logo": { zh: "车昕益", en: "Xinyi Che" },
                ".back-home": { zh: "返回首页", en: "Back Home" },
                ".hero h1": { zh: "学术研究", en: "Research" },
                ".hero p:last-of-type": { zh: "论文与研究成果列表。", en: "Publications and research outputs." },
                ".research-more a": { zh: "在 INSPIRE 上查看完整记录", en: "View full records on INSPIRE" }
            }
        },
        "/news.html": {
            title: { zh: "车昕益 | 最新动态", en: "Xinyi Che | News" },
            selectors: {
                ".logo": { zh: "车昕益", en: "Xinyi Che" },
                ".back-home": { zh: "返回首页", en: "Back Home" },
                ".hero h1": { zh: "最新动态", en: "News" },
                ".hero p:last-of-type": { zh: "近期学术与学习进展。", en: "Recent academic milestones and updates." },
                ".card h3": { zh: "本科毕业", en: "Undergraduate Graduation" },
                ".card .muted": { zh: "2025年6月21日 · 学术经历", en: "June 21, 2025 · Academic Milestone" },
                ".card li:nth-of-type(1)": {
                    zh: "完成大创项目：利用引力波探测环双白矮星的系外行星",
                    en: "Completed Undergraduate Innovation Project: Detecting Exoplanets Around Circumbinary White Dwarfs with Gravitational Waves"
                },
                ".card li:nth-of-type(2)": {
                    zh: "完成大创项目：神经网络无波前自适应光学",
                    en: "Completed Undergraduate Innovation Project: Wavefront-less Adaptive Optics Based on Neural Networks"
                },
                ".card li:nth-of-type(3)": {
                    zh: "完成毕业设计：利用引力波限制 dCS 理论",
                    en: "Completed Graduation Thesis: Constraining dCS Theory Using Gravitational Waves"
                }
            }
        },
        "/projects.html": {
            title: { zh: "车昕益 | 项目开发", en: "Xinyi Che | Projects" },
            selectors: {
                ".logo": { zh: "车昕益", en: "Xinyi Che" },
                ".back-home": { zh: "返回首页", en: "Back Home" },
                ".hero h1": { zh: "项目开发", en: "Projects" },
                ".hero p:last-of-type": { zh: "科研工具与开发实践。", en: "Research tools and development practice." },
                ".card h3": { zh: "示例项目名称", en: "Sample Project Name" },
                ".card .muted": {
                    zh: "这是一个占位示例，后续可替换为科研工具、数据处理脚本或开源项目。",
                    en: "This is a placeholder. You can replace it with research tools, data scripts, or open-source projects."
                },
                ".tags span:nth-of-type(1)": { zh: "Python", en: "Python" },
                ".tags span:nth-of-type(2)": { zh: "科研工具", en: "Research Tool" }
            }
        }
    };

    function normalizePath(pathname) {
        if (pathname === "/" || pathname === "/index.html") return "/";
        return pathname;
    }

    function detectLanguage() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED.includes(saved)) return saved;
        const preferred = Array.isArray(navigator.languages) && navigator.languages.length
            ? navigator.languages[0]
            : navigator.language || "zh";
        return preferred.toLowerCase().startsWith("zh") ? "zh" : "en";
    }

    function setNodeText(selector, text) {
        const el = document.querySelector(selector);
        if (!el || typeof text !== "string") return;
        if (selector === ".quick-grid") {
            el.setAttribute("aria-label", text);
            return;
        }
        el.textContent = text;
    }

    function applyLanguage(lang) {
        const path = normalizePath(window.location.pathname);
        const page = translations[path];
        if (!page) return;

        document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
        if (page.title && page.title[lang]) document.title = page.title[lang];

        const desc = document.querySelector('meta[name="description"]');
        if (desc && page.description && page.description[lang]) {
            desc.setAttribute("content", page.description[lang]);
        }

        Object.entries(page.selectors || {}).forEach(([selector, texts]) => {
            setNodeText(selector, texts[lang]);
        });

        const switcher = document.querySelector(".lang-switcher");
        if (switcher) {
            switcher.querySelectorAll("button").forEach((btn) => {
                btn.classList.toggle("active", btn.dataset.lang === lang);
            });
        }
    }

    function injectSwitcher(currentLang) {
        const style = document.createElement("style");
        style.textContent = `
            .lang-switcher {
                position: fixed;
                top: 14px;
                right: 14px;
                z-index: 50;
                display: inline-flex;
                border: 1px solid var(--line);
                border-radius: 999px;
                background: var(--card);
                backdrop-filter: blur(8px);
                overflow: hidden;
            }
            .lang-switcher button {
                border: 0;
                background: transparent;
                color: var(--brand-deep);
                padding: 0.33rem 0.62rem;
                font-size: 0.78rem;
                font-weight: 700;
                cursor: pointer;
            }
            .lang-switcher button.active {
                background: rgba(255, 255, 255, 0.22);
            }
        `;
        document.head.appendChild(style);

        const wrapper = document.createElement("div");
        wrapper.className = "lang-switcher";
        wrapper.setAttribute("aria-label", "Language Switch");
        wrapper.innerHTML = `
            <button type="button" data-lang="zh">中文</button>
            <button type="button" data-lang="en">EN</button>
        `;
        document.body.appendChild(wrapper);

        wrapper.querySelectorAll("button").forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.lang === currentLang);
            btn.addEventListener("click", () => {
                const lang = btn.dataset.lang;
                if (!SUPPORTED.includes(lang)) return;
                localStorage.setItem(STORAGE_KEY, lang);
                applyLanguage(lang);
            });
        });
    }

    function init() {
        const currentLang = detectLanguage();
        injectSwitcher(currentLang);
        applyLanguage(currentLang);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
