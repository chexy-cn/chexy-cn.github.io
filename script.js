// 国际化配置
const translations = {
    zh: {
        navLogo: "车昕益",
        navHome: "首页",
        navExperience: "学术经历",
        navResearch: "学术研究",
        navBlog: "最新动态",
        navProjects: "项目与开发",
        navAbout: "关于我",
        heroTitle: "车昕益 (Xinyi Che)",
        heroResearch: "学术研究",
        heroAbout: "关于我",
        sectionExperience: "学术经历",
        sectionResearch: "学术研究",
        sectionBlog: "最新动态",
        sectionProjects: "项目与开发",
        sectionAbout: "关于我",
        inspireLink: "在 INSPIRE 上查看完整记录",
        projectSampleTitle: "示例项目名称",
        projectSampleDesc: "这是一个占位示例，旨在展示项目卡片的布局效果。您可以在未来添加实际参与的科研工具、数据处理脚本或开源项目。",
        tagPython: "Python",
        tagTool: "科研工具",
        aboutP1: "这是一个关于我的示例介绍。您可以在此简要描述您的研究兴趣、学术背景以及在科研之外的爱好。这部分旨在让访问者对您有一个更全面的初步了解。",
        aboutP2: "示例占位文字：目前我专注于引力物理领域的探索，并持续学习相关的数据分析与数值计算技术。我热爱跨学科的交流，并致力于将复杂的物理概念以更直观的方式呈现出来。",
        skillsTitle: "示例技能与工具",
        skill1: "物理建模",
        skill2: "数值模拟",
        skill3: "数据处理",
        skill4: "LaTeX",
        skill5: "示例标签",
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
        navAbout: "About",
        heroTitle: "Xinyi Che",
        heroResearch: "Research",
        heroAbout: "About Me",
        sectionExperience: "Academic Experience",
        sectionResearch: "Research",
        sectionBlog: "Latest News",
        sectionProjects: "Projects & Development",
        sectionAbout: "About Me",
        inspireLink: "View full records on INSPIRE",
        projectSampleTitle: "Sample Project Name",
        projectSampleDesc: "This is a placeholder example to demonstrate the project card layout. You can add actual research tools, data scripts, or open-source projects in the future.",
        tagPython: "Python",
        tagTool: "Research Tool",
        aboutP1: "This is a sample introduction about me. You can briefly describe your research interests, academic background, and hobbies outside of research here. This section aims to provide visitors with a more comprehensive first impression.",
        aboutP2: "Sample placeholder: Currently, I focus on exploring gravitational physics and continuously learn related data analysis and numerical calculation techniques. I enjoy interdisciplinary exchange and aim to present complex physical concepts more intuitively.",
        skillsTitle: "Sample Skills & Tools",
        skill1: "Physical Modeling",
        skill2: "Numerical Simulation",
        skill3: "Data Processing",
        skill4: "LaTeX",
        skill5: "Sample Tag",
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
            description: "专注于引力波天文学及引力理论研究"
        },
        {
            period: "2021 - 2025",
            institution: "中山大学物理与天文学院",
            position: "物理学，本科",
            description: "完成本科阶段物理学专业课程学习<br>完成大创项目：利用引力波探测环双白矮星的系外行星<br>完成大创项目：神经网络无波前自适应光学<br>完成毕业设计：利用引力波限制dCS理论"
        }
    ],
    en: [
        {
            period: "2025 - Present",
            institution: "TianQin Research Center, School of Physics and Astronomy, Sun Yat-sen University",
            position: "PhD Student, Theory Group",
            description: "Focusing on gravitational wave astronomy and gravitational theory research"
        },
        {
            period: "2021 - 2025",
            institution: "School of Physics and Astronomy, Sun Yat-sen University",
            position: "B.Sc. in Physics",
            description: "Completed undergraduate physics curriculum<br>Completed Undergraduate Innovation Project: Detecting Exoplanets Around Circumbinary White Dwarfs with Gravitational Waves<br>Completed Undergraduate Innovation Project: Wavefront-less Adaptive Optics Based on Neural Networks<br>Completed Graduation Thesis: Constraining dCS Theory Using Gravitational Waves"
        }
    ]
};

const blogPosts = {
    zh: [
        {
            id: 1,
            title: "这是一篇示例动态标题",
            excerpt: "这仅仅是一个用于演示网页排版和视觉效果的示例。您可以在此发布学术随笔、会议纪闻或研究进展。",
            content: `<h2>示例内容</h2><p>这是一个示例页面。在实际使用中，您可以通过修改 script.js 中的 blogPosts 数组来添加真实的动态内容。</p>`,
            date: "2026-02-28",
            category: "示例",
            readTime: "1 min"
        }
    ],
    en: [
        {
            id: 1,
            title: "Sample News Title",
            excerpt: "This is just a sample for demonstrating the layout and visual effects. You can publish academic essays, conference notes, or research progress here.",
            content: `<h2>Sample Content</h2><p>This is a sample page. In actual use, you can add real news content by modifying the blogPosts array in script.js.</p>`,
            date: "2026-02-28",
            category: "Sample",
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

// 切换语言
function setLanguage(lang) {
    currentLang = lang;
    
    // 更新按钮状态
    document.getElementById('lang-zh').classList.toggle('active', lang === 'zh');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    // 更新静态文本
    document.querySelectorAll('[data-i18n]').forEach(el => {
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
    const experienceList = document.getElementById('experience-list');
    if (!experienceList) return;
    experienceList.innerHTML = '';

    academicExperience[currentLang].forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';
        expItem.innerHTML = `
            <div class="exp-period">${exp.period}</div>
            <div class="exp-content">
                <h3>${exp.institution}</h3>
                <p class="exp-position">${exp.position}</p>
                <p class="exp-desc">${exp.description}</p>
            </div>
        `;
        experienceList.appendChild(expItem);
    });
}

// 显示博客列表
function showBlogList() {
    const blogList = document.getElementById('blog-list');
    if (!blogList) return;
    blogList.innerHTML = '';

    blogPosts[currentLang].forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.setAttribute('data-id', post.id);

        blogCard.innerHTML = `
            <h3>${post.title}</h3>
            <p class="excerpt">${post.excerpt}</p>
            <div class="blog-meta">
                <span>${post.date}</span>
                <span>${post.category}</span>
                <span>${post.readTime}</span>
            </div>
        `;

        blogCard.addEventListener('click', () => showBlogDetail(post.id));
        blogList.appendChild(blogCard);
    });
}

// 显示论文列表
function showPaperList() {
    const paperList = document.getElementById('paper-list');
    if (!paperList) return;
    paperList.innerHTML = '';

    researchPapers.forEach(paper => {
        const paperCard = document.createElement('div');
        paperCard.className = 'paper-card';
        const processedAuthors = paper.authors.map(author => 
            author === "Xinyi Che" ? `<strong>${author}</strong>` : author
        ).join(', ');

        paperCard.innerHTML = `
            <h3 class="paper-title">${paper.title}</h3>
            <div class="paper-authors">${processedAuthors}</div>
            <div class="paper-footer">
                <div class="paper-meta">
                    <span>${paper.journal}</span>
                    <span>${paper.date}</span>
                </div>
                <div class="paper-links">
                    ${paper.arxiv ? `<a href="https://arxiv.org/abs/${paper.arxiv}" target="_blank" class="paper-link">arXiv</a>` : ''}
                    ${paper.doi ? `<a href="https://doi.org/${paper.doi}" target="_blank" class="paper-link">DOI</a>` : ''}
                    <a href="${paper.inspireUrl}" target="_blank" class="paper-link">INSPIRE</a>
                </div>
            </div>
        `;
        paperList.appendChild(paperCard);
    });
}

// 显示博客详情
function showBlogDetail(postId) {
    const post = blogPosts[currentLang].find(p => p.id === postId);
    if (!post) return;

    currentView = 'blog-detail';
    currentBlogPost = post;

    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    document.querySelector('.footer').style.display = 'none';
    const blogDetail = document.getElementById('blog-detail');
    blogDetail.style.display = 'block';

    document.getElementById('blog-title').textContent = post.title;
    document.getElementById('blog-date').textContent = post.date;
    document.getElementById('blog-category').textContent = post.category;
    document.getElementById('blog-content').innerHTML = post.content;

    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
}

function backToBlog() {
    currentView = 'blog';
    currentBlogPost = null;
    document.getElementById('blog-detail').style.display = 'none';
    document.querySelectorAll('section').forEach(s => s.style.display = 'block');
    document.querySelector('.footer').style.display = 'block';
    document.body.style.overflow = '';
    scrollToSection('blog');
}

function handleNavigation(sectionId) {
    if (sectionId === 'blog' && currentView === 'blog-detail') {
        backToBlog();
    } else {
        currentView = sectionId;
        document.querySelectorAll('section').forEach(s => s.style.display = 'block');
        document.getElementById('blog-detail').style.display = 'none';
        document.querySelector('.footer').style.display = 'block';
        document.body.style.overflow = '';
        
        if (sectionId === 'research') showPaperList();
        if (sectionId === 'experience') showExperienceList();
        
        scrollToSection(sectionId);
    }
    if (isMobileMenuOpen) toggleMobileMenu();
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
        navMenu.style.display = 'flex';
        navToggle.querySelectorAll('span').forEach((s, i) => {
            if (i === 0) s.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (i === 1) s.style.opacity = '0';
            if (i === 2) s.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        });
    } else {
        navMenu.style.display = 'none';
        navToggle.querySelectorAll('span').forEach(s => {
            s.style.transform = ''; s.style.opacity = '';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 语言切换监听
    document.getElementById('lang-zh').addEventListener('click', () => setLanguage('zh'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    showExperienceList();
    showPaperList();
    showBlogList();

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            handleNavigation(link.getAttribute('href').substring(1));
        });
    });

    document.querySelector('.nav-toggle').addEventListener('click', toggleMobileMenu);
    document.getElementById('back-to-blog').addEventListener('click', backToBlog);

    document.querySelectorAll('.btn').forEach(btn => {
        const href = btn.getAttribute('href');
        if (href && href.startsWith('#')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                handleNavigation(href.substring(1));
            });
        }
    });

    window.addEventListener('resize', () => {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
            isMobileMenuOpen = false;
            navToggle.querySelectorAll('span').forEach(s => {
                s.style.transform = '';
                s.style.opacity = '';
            });
        } else if (!isMobileMenuOpen) {
            navMenu.style.display = 'none';
        }
    });

    handleNavigation('home');
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.style.boxShadow = window.scrollY > 10 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none';
    }
});
