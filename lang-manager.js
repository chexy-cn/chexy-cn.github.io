// 中英文切换：index.html 中的中文为原文，英文写在元素的 data-en / data-en-aria-label 属性里。
// 初始语言由 <head> 中的内联脚本决定（写入 <html lang>），这里负责替换文字和绑定按钮。
(() => {
    const storageKey = "site_lang_v1";
    const root = document.documentElement;
    const description = document.querySelector('meta[name="description"]');
    const meta = {
        zh: { title: document.title, description: description.content },
        en: {
            title: "Xin-Yi Che | Homepage",
            description: "Personal homepage of Xin-Yi Che, focused on gravitational physics and gravitational-wave research."
        }
    };
    const texts = Array.from(document.querySelectorAll("[data-en]"),
        node => [node, node.textContent, node.dataset.en]);
    const labels = Array.from(document.querySelectorAll("[data-en-aria-label]"),
        node => [node, node.getAttribute("aria-label"), node.dataset.enAriaLabel]);
    const switcher = document.querySelector(".language");
    const buttons = switcher.querySelectorAll("button");

    function applyLanguage(language) {
        const isEnglish = language === "en";
        root.lang = isEnglish ? "en" : "zh-CN";
        document.title = meta[language].title;
        description.content = meta[language].description;
        for (const [node, zh, en] of texts) node.textContent = isEnglish ? en : zh;
        for (const [node, zh, en] of labels) node.setAttribute("aria-label", isEnglish ? en : zh);
        for (const button of buttons) button.setAttribute("aria-pressed", String(button.dataset.lang === language));
        root.removeAttribute("data-lang-pending");
    }

    applyLanguage(root.lang === "en" ? "en" : "zh");
    for (const button of buttons) {
        button.addEventListener("click", () => {
            const language = button.dataset.lang;
            applyLanguage(language);
            try { localStorage.setItem(storageKey, language); } catch {}
        });
    }
    switcher.hidden = false;
})();
