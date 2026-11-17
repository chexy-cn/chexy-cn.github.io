(() => {
    const storageKey = "site_lang_v1";
    const english = {
        ".tagline": "Gravitational-wave data analysis · Gravitational theory",
        "a[href=\"#experience\"], #experience h2": "Academic Experience",
        "#experience .timeline:nth-of-type(1) h3": "TianQin Research Center, School of Physics and Astronomy, Sun Yat-sen University",
        "#experience .timeline:nth-of-type(1) .sub": "PhD Student in Theoretical Physics",
        "#experience .timeline:nth-of-type(1) .muted": "Advisors: Yi-Ming Hu, Jianwei Mei",
        "#experience .timeline:nth-of-type(2) h3": "School of Physics and Astronomy, Sun Yat-sen University",
        "#experience .timeline:nth-of-type(2) .sub": "B.Sc. in Physics",
        "#experience .timeline:nth-of-type(2) .muted": "Physics (Pilot Reform Program of Enrollment for Fundamental Disciplines)",
        "a[href=\"#research\"], #research h2": "Research",
        "#research .research-more a": "View full records on INSPIRE",
        "a[href=\"#news\"], #news h2": "News",
        "#news .card h3": "Undergraduate Graduation",
        "#news .card .muted": "June 21, 2025 · Academic Milestone",
        "#news .card li:nth-of-type(1)": "Undergraduate Innovation Project: Detecting Exoplanets Around Circumbinary White Dwarfs with Gravitational Waves",
        "#news .card li:nth-of-type(2)": "Experimental Design Project: Laser Eavesdropping",
        "#news .card li:nth-of-type(3)": "Undergraduate Innovation Project: Wavefront-less Adaptive Optics Based on Neural Networks",
        "#news .card li:nth-of-type(4)": "Graduation Thesis: Constraining dCS Theory Using Gravitational Waves",
        "a[href=\"#projects\"], #projects h2": "Projects",
        "#project-dcs .muted": "Public repository for reproducing the results of arXiv:2512.22762.",
        "#project-population .muted": "Repository for reproducing the GWTC-4.0 population analysis and the extended population model used in the dCS paper.",
        "#experience .timeline:first-child .time": "2025 – Present"
    };
    const description = document.querySelector('meta[name="description"]');
    const chineseDescription = description.content;
    const entries = Object.entries(english).flatMap(([selector, translation]) =>
        Array.from(document.querySelectorAll(selector), node => [node, node.textContent, translation])
    );
    const switcher = document.querySelector(".language");
    const buttons = switcher.querySelectorAll("button");

    function applyLanguage(language) {
        const isEnglish = language === "en";
        document.documentElement.lang = isEnglish ? "en" : "zh-CN";
        document.title = isEnglish ? "Xin-Yi Che | Homepage" : "车昕益 | 个人主页";
        description.content = isEnglish
            ? "Personal homepage of Xin-Yi Che, focused on gravitational physics and gravitational-wave research."
            : chineseDescription;
        for (const [node, zh, en] of entries) node.textContent = isEnglish ? en : zh;
        for (const button of buttons) button.setAttribute("aria-pressed", String(button.dataset.lang === language));
    }

    let saved;
    try { saved = localStorage.getItem(storageKey); } catch {}
    const preferred = navigator.languages?.[0] || navigator.language || "zh";
    applyLanguage(saved === "zh" || saved === "en" ? saved : preferred.toLowerCase().startsWith("zh") ? "zh" : "en");
    for (const button of buttons) {
        button.addEventListener("click", () => {
            const language = button.dataset.lang;
            applyLanguage(language);
            try { localStorage.setItem(storageKey, language); } catch {}
        });
    }
    switcher.hidden = false;
})();
