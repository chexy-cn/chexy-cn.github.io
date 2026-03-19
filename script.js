// 国际化配置
const translations = {
    zh: {
        navLogo: "车昕益",
        navHome: "首页",
        navExperience: "学术经历",
        navResearch: "学术研究",
        navBlog: "最新动态",
        navProjects: "项目与开发",
        heroTitle: "车昕益 (Xinyi Che)",
        heroResearch: "学术研究",
        sectionExperience: "学术经历",
        sectionResearch: "学术研究",
        sectionBlog: "最新动态",
        sectionProjects: "项目与开发",
        inspireLink: "在 INSPIRE 上查看完整记录",
        projectSampleTitle: "示例项目名称",
        projectSampleDesc: "这是一个占位示例，旨在展示项目卡片的布局效果。您可以在未来添加实际参与的科研工具、数据处理脚本或开源项目。",
        tagPython: "Python",
        tagTool: "科研工具",
        backBtn: "返回文章列表",
        footerNavTitle: "导航",
        footerLinkTitle: "链接"
    },
    en: {
        navLogo: "Xinyi Che",
        navHome: "Home",
        navExperience: "Experience",
        navResearch: "Research",
        navBlog: "News",
        navProjects: "Projects",
        heroTitle: "Xinyi Che",
        heroResearch: "Research",
        sectionExperience: "Academic Experience",
        sectionResearch: "Research",
        sectionBlog: "Latest News",
        sectionProjects: "Projects & Development",
        inspireLink: "View full records on INSPIRE",
        projectSampleTitle: "Sample Project Name",
        projectSampleDesc: "This is a placeholder example to demonstrate the project card layout. You can add actual research tools, data scripts, or open-source projects in the future.",
        tagPython: "Python",
        tagTool: "Research Tool",
        backBtn: "Back to List",
        footerNavTitle: "Navigation",
        footerLinkTitle: "Links"
    }
};

// 动态内容双语数据
const academicExperience = {
    zh: [
        {
            period: "2025 - 至今",
            institution: "中山大学物理与天文学院天琴中心",
            position: "理论组，博士在读",
            description: "导师：梅健伟，胡一鸣"
        },
        {
            period: "2021 - 2025",
            institution: "中山大学物理与天文学院",
            position: "物理学，本科",
            description: "物理学（强基计划）"
        }
    ],
    en: [
        {
            period: "2025 - Present",
            institution: "TianQin Research Center, School of Physics and Astronomy, Sun Yat-sen University",
            position: "PhD Student, Theory Group",
            description: "Advisors: Jianwei Mei, Yi-Ming Hu"
        },
        {
            period: "2021 - 2025",
            institution: "School of Physics and Astronomy, Sun Yat-sen University",
            position: "B.Sc. in Physics",
            description: "Physics (Pilot Reform Program of Enrollment for Fundamental Disciplines)"
        }
    ]
};

const blogPosts = {
    zh: [
        {
            id: 1,
            title: "本科毕业",
            excerpt: "本科阶段完成两项大创项目及毕业设计。",
            content: `<h2>本科毕业</h2><p>完成大创项目：利用引力波探测环双白矮星的系外行星</p><p>完成大创项目：神经网络无波前自适应光学</p><p>完成毕业设计：利用引力波限制dCS理论</p>`,
            date: "2025年6月21日",
            category: "学术经历",
            readTime: "1 min"
        }
    ],
    en: [
        {
            id: 1,
            title: "Undergraduate Graduation",
            excerpt: "Completed two undergraduate innovation projects and a graduation thesis.",
            content: `<h2>Undergraduate Graduation</h2><p>Completed Undergraduate Innovation Project: Detecting Exoplanets Around Circumbinary White Dwarfs with Gravitational Waves</p><p>Completed Undergraduate Innovation Project: Wavefront-less Adaptive Optics Based on Neural Networks</p><p>Completed Graduation Thesis: Constraining dCS Theory Using Gravitational Waves</p>`,
            date: "June 21, 2025",
            category: "Academic Milestone",
            readTime: "1 min"
        }
    ]
};

const researchPapers = [
    {
        id: 1,
        title: "Constraining the dynamical Chern-Simons gravity with future gravitational wave detectors",
        authors: ["Xinyi Che", "Xiangyu Lyu", "Changfu Shi"],
        journal: "e-Print: 2512.22762 [gr-qc]",
        date: "2025-12",
        doi: "",
        arxiv: "2512.22762",
        inspireUrl: "https://inspirehep.net/literature/3096178"
    },
    {
        id: 2,
        title: "Gravitational waves and cosmic boundary",
        authors: ["Changfu Shi", "Xinyi Che", "Zeyu Huang", "Yi-Ming Hu", "Jianwei Mei"],
        journal: "Phys. Rev. D 111 (2025) 023022",
        date: "2025-01",
        doi: "10.1103/PhysRevD.111.023022",
        arxiv: "2411.17177",
        inspireUrl: "https://inspirehep.net/literature/2852199"
    }
];

// 全局状态
let currentLang = 'zh';
let currentView = 'home';
let currentBlogPost = null;
let isMobileMenuOpen = false;
let tickingScroll = false;

function detectPreferredLanguage() {
    const preferred = Array.isArray(navigator.languages) && navigator.languages.length > 0
        ? navigator.languages[0]
        : navigator.language;
    if (!preferred) return 'zh';
    return preferred.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

// DOM 缓存，避免重复查询
const dom = {};

function initDomReferences() {
    dom.langZh = document.getElementById('lang-zh');
    dom.langEn = document.getElementById('lang-en');
    dom.i18nElements = document.querySelectorAll('[data-i18n]');
    dom.sections = document.querySelectorAll('section');
    dom.footer = document.querySelector('.footer');
    dom.blogDetail = document.getElementById('blog-detail');
    dom.blogTitle = document.getElementById('blog-title');
    dom.blogDate = document.getElementById('blog-date');
    dom.blogCategory = document.getElementById('blog-category');
    dom.blogContent = document.getElementById('blog-content');
    dom.experienceList = document.getElementById('experience-list');
    dom.paperList = document.getElementById('paper-list');
    dom.blogList = document.getElementById('blog-list');
    dom.navMenu = document.querySelector('.nav-menu');
    dom.navToggle = document.querySelector('.nav-toggle');
    dom.navLinks = document.querySelectorAll('.nav-link');
    dom.actionButtons = document.querySelectorAll('.btn');
    dom.header = document.querySelector('.header');
    dom.backToBlogBtn = document.getElementById('back-to-blog');
    dom.currentYear = document.getElementById('current-year');
}

function setMainPageVisibility(visible) {
    const display = visible ? 'block' : 'none';
    dom.sections.forEach(section => {
        section.style.display = display;
    });
    dom.footer.style.display = display;
}

// 切换语言
function setLanguage(lang) {
    currentLang = lang;
    
    // 更新按钮状态
    dom.langZh.classList.toggle('active', lang === 'zh');
    dom.langEn.classList.toggle('active', lang === 'en');
    
    // 更新静态文本
    dom.i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // 重新渲染动态列表
    showExperienceList();
    showPaperList();
    showBlogList();
}

// 平滑滚动
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 显示学术经历
function showExperienceList() {
    if (!dom.experienceList) return;

    dom.experienceList.innerHTML = academicExperience[currentLang].map(exp => `
        <div class="experience-item">
            <div class="exp-period">${exp.period}</div>
            <div class="exp-content">
                <h3>${exp.institution}</h3>
                <p class="exp-position">${exp.position}</p>
                <p class="exp-desc">${exp.description}</p>
            </div>
        </div>
    `).join('');
}

// 显示博客列表
function showBlogList() {
    if (!dom.blogList) return;

    dom.blogList.innerHTML = blogPosts[currentLang].map(post => `
        <div class="blog-card" data-id="${post.id}">
            <h3>${post.title}</h3>
            <p class="excerpt">${post.excerpt}</p>
            <div class="blog-meta">
                <span>${post.date}</span>
                <span>${post.category}</span>
                <span>${post.readTime}</span>
            </div>
        </div>
    `).join('');
}

// 显示论文列表
function showPaperList() {
    if (!dom.paperList) return;

    dom.paperList.innerHTML = researchPapers.map(paper => {
        const processedAuthors = paper.authors.map(author => 
            author === "Xinyi Che" ? `<strong>${author}</strong>` : author
        ).join(', ');

        return `
            <div class="paper-card">
            <h3 class="paper-title">${paper.title}</h3>
            <div class="paper-authors">${processedAuthors}</div>
            <div class="paper-footer">
                <div class="paper-meta">
                    <span>${paper.journal}</span>
                    <span>${paper.date}</span>
                </div>
                <div class="paper-links">
                    ${paper.arxiv ? `<a href="https://arxiv.org/abs/${paper.arxiv}" target="_blank" rel="noopener noreferrer" class="paper-link">arXiv</a>` : ''}
                    ${paper.doi ? `<a href="https://doi.org/${paper.doi}" target="_blank" rel="noopener noreferrer" class="paper-link">DOI</a>` : ''}
                    <a href="${paper.inspireUrl}" target="_blank" rel="noopener noreferrer" class="paper-link">INSPIRE</a>
                </div>
            </div>
            </div>
        `;
    }).join('');
}

// 显示博客详情
function showBlogDetail(postId) {
    const post = blogPosts[currentLang].find(p => p.id === postId);
    if (!post) return;

    currentView = 'blog-detail';
    currentBlogPost = post;

    setMainPageVisibility(false);
    dom.blogDetail.style.display = 'block';

    dom.blogTitle.textContent = post.title;
    dom.blogDate.textContent = post.date;
    dom.blogCategory.textContent = post.category;
    dom.blogContent.innerHTML = post.content;

    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
}

function backToBlog() {
    currentView = 'blog';
    currentBlogPost = null;
    dom.blogDetail.style.display = 'none';
    setMainPageVisibility(true);
    document.body.style.overflow = '';
    scrollToSection('blog');
}

function handleNavigation(sectionId) {
    if (sectionId === 'blog' && currentView === 'blog-detail') {
        backToBlog();
    } else {
        currentView = sectionId;
        setMainPageVisibility(true);
        dom.blogDetail.style.display = 'none';
        document.body.style.overflow = '';
        
        if (sectionId === 'research') showPaperList();
        if (sectionId === 'experience') showExperienceList();
        
        scrollToSection(sectionId);
    }
    if (isMobileMenuOpen) toggleMobileMenu();
}

function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
        dom.navMenu.style.display = 'flex';
        dom.navToggle.querySelectorAll('span').forEach((s, i) => {
            if (i === 0) s.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (i === 1) s.style.opacity = '0';
            if (i === 2) s.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        });
    } else {
        dom.navMenu.style.display = 'none';
        dom.navToggle.querySelectorAll('span').forEach(s => {
            s.style.transform = ''; s.style.opacity = '';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initDomReferences();
    if (dom.currentYear) dom.currentYear.textContent = String(new Date().getFullYear());

    // 语言切换监听
    dom.langZh.addEventListener('click', () => setLanguage('zh'));
    dom.langEn.addEventListener('click', () => setLanguage('en'));

    setLanguage(detectPreferredLanguage());

    dom.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            handleNavigation(link.getAttribute('href').substring(1));
        });
    });

    dom.navToggle.addEventListener('click', toggleMobileMenu);
    dom.backToBlogBtn.addEventListener('click', backToBlog);

    dom.actionButtons.forEach(btn => {
        const href = btn.getAttribute('href');
        if (href && href.startsWith('#')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                handleNavigation(href.substring(1));
            });
        }
    });

    dom.blogList.addEventListener('click', (e) => {
        const blogCard = e.target.closest('.blog-card');
        if (!blogCard || !dom.blogList.contains(blogCard)) return;
        showBlogDetail(Number(blogCard.dataset.id));
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            dom.navMenu.style.display = 'flex';
            isMobileMenuOpen = false;
            dom.navToggle.querySelectorAll('span').forEach(s => {
                s.style.transform = '';
                s.style.opacity = '';
            });
        } else if (!isMobileMenuOpen) {
            dom.navMenu.style.display = 'none';
        }
    }, { passive: true });

    handleNavigation('home');
});

window.addEventListener('scroll', () => {
    if (tickingScroll) return;
    tickingScroll = true;

    requestAnimationFrame(() => {
        if (dom.header) {
            dom.header.style.boxShadow = window.scrollY > 10 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none';
        }
        tickingScroll = false;
    });
}, { passive: true });
