// 博客数据
const blogPosts = [
    {
        id: 1,
        title: "现代Web开发的最佳实践",
        excerpt: "探讨现代前端开发中的最佳实践和工具链配置，提高开发效率和代码质量。",
        content: `
            <h2>现代Web开发的最佳实践</h2>
            <p>随着Web技术的快速发展，前端开发已经变得异常复杂。我们需要遵循一些最佳实践来保持代码的可维护性和可扩展性。</p>

            <h3>模块化开发</h3>
            <p>使用ES6模块或现代模块系统将代码拆分成小的、可重用的模块。这不仅提高代码的可读性，也使得测试和维护变得更加容易。</p>

            <h3>组件化思维</h3>
            <p>将UI拆分成独立的组件，每个组件负责特定的功能。React、Vue等现代框架都基于这种思想。</p>

            <h3>性能优化</h3>
            <ul>
                <li>代码分割和懒加载</li>
                <li>图片和资源的优化</li>
                <li>使用CDN加速</li>
                <li>缓存策略的合理配置</li>
            </ul>

            <h3>代码质量</h3>
            <p>使用ESLint、Prettier等工具保持代码风格的一致性，并通过自动化测试确保代码质量。</p>
        `,
        date: "2024-12-01",
        category: "前端开发",
        readTime: "5 min"
    },
    {
        id: 2,
        title: "响应式设计的实现原理",
        excerpt: "深入解析响应式设计的核心技术，包括媒体查询、弹性布局和移动优先策略。",
        content: `
            <h2>响应式设计的实现原理</h2>
            <p>响应式设计已成为现代Web开发的标配技术，它让网站能够优雅地适配各种设备尺寸。</p>

            <h3>媒体查询（Media Queries）</h3>
            <p>媒体查询是响应式设计的核心，它允许我们根据设备特性（如屏幕宽度、分辨率等）应用不同的CSS样式。</p>

            <h3>弹性网格系统</h3>
            <p>使用百分比、flexbox或grid布局创建灵活的网格系统，使页面元素能够根据容器尺寸自动调整。</p>

            <h3>移动优先策略</h3>
            <p>从移动设备开始设计，然后逐步增强到大屏幕设备。这种方法确保基础体验在所有设备上都表现良好。</p>

            <h3>实用技巧</h3>
            <ul>
                <li>使用相对单位（rem, em）</li>
                <li>合理设置断点</li>
                <li>优化图像和媒体资源</li>
                <li>考虑触摸交互</li>
            </ul>
        `,
        date: "2024-11-28",
        category: "CSS",
        readTime: "4 min"
    },
    {
        id: 3,
        title: "JavaScript异步编程模式",
        excerpt: "从回调到async/await，探索JavaScript异步编程的演进和技术选型。",
        content: `
            <h2>JavaScript异步编程模式</h2>
            <p>JavaScript的单线程特性使得异步编程成为处理I/O密集型操作的关键技术。</p>

            <h3>回调函数（Callbacks）</h3>
            <p>最基础的异步模式，简单但容易导致回调地狱。适用于简单的异步场景。</p>

            <h3>Promise对象</h3>
            <p>ES6引入的Promise提供了更优雅的异步处理方式，支持链式调用和错误传播。</p>

            <h3>Async/Await</h3>
            <p>ES8的async/await让异步代码看起来像同步代码，极大地提高了代码的可读性。</p>

            <h3>技术选型建议</h3>
            <ul>
                <li>简单场景：回调或Promise</li>
                <li>复杂流程：async/await</li>
                <li>并发处理：Promise.all/race</li>
                <li>错误处理：try/catch + Promise.catch</li>
            </ul>
        `,
        date: "2024-11-25",
        category: "JavaScript",
        readTime: "6 min"
    },
    {
        id: 4,
        title: "构建工具的选择与配置",
        excerpt: "对比Webpack、Vite、Parcel等主流构建工具的特点和使用场景。",
        content: `
            <h2>构建工具的选择与配置</h2>
            <p>现代前端项目离不开构建工具，选择合适的工具能够显著提升开发效率。</p>

            <h3>Webpack</h3>
            <p>功能最全面的构建工具，插件生态丰富，适合大型复杂项目。但配置相对复杂，构建速度较慢。</p>

            <h3>Vite</h3>
            <p>基于ESM的现代化构建工具，开发服务器启动极快，内置TypeScript、JSX等支持。</p>

            <h3>Parcel</h3>
            <p>零配置的构建工具，开箱即用，适合快速原型开发和小型项目。</p>

            <h3>选择建议</h3>
            <ul>
                <li>大型企业项目：Webpack</li>
                <li>现代框架项目：Vite</li>
                <li>快速开发：Parcel</li>
                <li>特定需求：Rollup（库开发）</li>
            </ul>
        `,
        date: "2024-11-22",
        category: "工具链",
        readTime: "5 min"
    }
];

// 全局状态
let currentView = 'home';
let currentBlogPost = null;
let isMobileMenuOpen = false;

// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 显示博客列表
function showBlogList() {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '';

    blogPosts.forEach(post => {
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

        blogCard.addEventListener('click', () => {
            showBlogDetail(post.id);
        });

        blogList.appendChild(blogCard);
    });
}

// 显示博客详情
function showBlogDetail(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    currentView = 'blog-detail';
    currentBlogPost = post;

    // 隐藏所有主要区块
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const footer = document.querySelector('.footer');
    footer.style.display = 'none';

    // 显示博客详情
    const blogDetail = document.getElementById('blog-detail');
    blogDetail.style.display = 'block';

    // 填充内容
    document.getElementById('blog-title').textContent = post.title;
    document.getElementById('blog-date').textContent = post.date;
    document.getElementById('blog-category').textContent = post.category;
    document.getElementById('blog-content').innerHTML = post.content;

    // 滚动到顶部
    window.scrollTo(0, 0);

    // 更新body滚动状态
    document.body.style.overflow = 'hidden';
}

// 返回博客列表
function backToBlog() {
    currentView = 'blog';
    currentBlogPost = null;

    // 隐藏博客详情
    document.getElementById('blog-detail').style.display = 'none';

    // 显示所有区块
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'block';
    });

    const footer = document.querySelector('.footer');
    footer.style.display = 'block';

    // 恢复body滚动
    document.body.style.overflow = '';

    // 滚动到博客区域
    scrollToSection('blog');
}

// 处理导航点击
function handleNavigation(sectionId) {
    if (sectionId === 'blog') {
        if (currentView === 'blog-detail') {
            backToBlog();
        } else {
            // 显示博客列表
            currentView = 'blog';

            // 确保所有区块显示
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.style.display = 'block';
            });

            document.getElementById('blog-detail').style.display = 'none';
            document.querySelector('.footer').style.display = 'block';

            showBlogList();
            scrollToSection('blog');
        }
    } else {
        // 其他页面导航
        currentView = sectionId;

        // 确保显示所有区块，隐藏博客详情
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'block';
        });

        document.getElementById('blog-detail').style.display = 'none';
        document.querySelector('.footer').style.display = 'block';

        // 恢复body滚动
        document.body.style.overflow = '';

        scrollToSection(sectionId);
    }

    // 移动端关闭菜单
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

// 切换移动端菜单
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');

    isMobileMenuOpen = !isMobileMenuOpen;

    if (isMobileMenuOpen) {
        navMenu.style.display = 'flex';
        navToggle.querySelectorAll('span').forEach((span, index) => {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        });
    } else {
        navMenu.style.display = 'none';
        navToggle.querySelectorAll('span').forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
    }
}

// 表单提交处理
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // 模拟表单提交
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    console.log('表单数据:', data);

    // 显示成功消息
    alert('感谢你的消息！我会尽快回复。');
    this.reset();
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('网站加载完成！');

    // 初始化博客列表
    showBlogList();

    // 桌面端导航链接点击事件
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            handleNavigation(targetId);
        });
    });

    // 移动端菜单切换
    document.querySelector('.nav-toggle').addEventListener('click', toggleMobileMenu);

    // 返回按钮事件
    document.getElementById('back-to-blog').addEventListener('click', backToBlog);

    // 首页按钮事件
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                handleNavigation(targetId);
            }
        });
    });

    // 监听窗口大小变化，调整移动端菜单
    window.addEventListener('resize', function() {
        const navMenu = document.querySelector('.nav-menu');
        if (window.innerWidth > 768) {
            navMenu.style.display = 'flex';
            isMobileMenuOpen = false;
        } else if (!isMobileMenuOpen) {
            navMenu.style.display = 'none';
        }
    });

    // 初始化页面状态
    handleNavigation('home');
});

// 添加滚动时头部阴影效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});