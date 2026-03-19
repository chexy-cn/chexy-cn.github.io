(function () {
    const DEFAULT_IMAGES = {
        fig: ["fig/1.jpg", "fig/2.jpg"],
        fig1: ["fig1/1.jpg", "fig1/2.jpg", "fig1/3.jpg"]
    };

    const REPO_API_BASE = "https://api.github.com/repos/chexy-cn/chexy-cn.github.io/contents/";
    const themeCache = new Map();
    let layerA = null;
    let layerB = null;
    let activeLayer = null;

    function isImageFile(name) {
        return /\.(png|jpe?g|webp|avif|gif)$/i.test(name);
    }

    function sortByNumericFilename(paths) {
        return [...paths].sort((a, b) => {
            const nameA = a.split("/").pop() || a;
            const nameB = b.split("/").pop() || b;
            const numA = Number.parseInt(nameA, 10);
            const numB = Number.parseInt(nameB, 10);
            const hasNumA = Number.isFinite(numA);
            const hasNumB = Number.isFinite(numB);

            if (hasNumA && hasNumB && numA !== numB) return numA - numB;
            if (hasNumA && !hasNumB) return -1;
            if (!hasNumA && hasNumB) return 1;
            return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: "base" });
        });
    }

    function getImageFolder() {
        return window.matchMedia("(max-width: 768px)").matches ? "fig1" : "fig";
    }

    async function loadImages() {
        const folder = getImageFolder();
        const defaultForFolder = sortByNumericFilename(DEFAULT_IMAGES[folder] || []);
        const fallbackDesktop = sortByNumericFilename(DEFAULT_IMAGES.fig || []);
        try {
            const resp = await fetch(`${REPO_API_BASE}${folder}`, { headers: { Accept: "application/vnd.github+json" } });
            if (!resp.ok) return defaultForFolder.length ? defaultForFolder : fallbackDesktop;
            const items = await resp.json();
            const images = Array.isArray(items)
                ? items
                    .filter((item) => item && item.type === "file" && isImageFile(item.name))
                    .map((item) => `${folder}/${item.name}`)
                : [];
            if (images.length) return sortByNumericFilename(images);
            return defaultForFolder.length ? defaultForFolder : fallbackDesktop;
        } catch {
            return defaultForFolder.length ? defaultForFolder : fallbackDesktop;
        }
    }

    function setBg(path) {
        const safePath = encodeURI(path);
        document.documentElement.style.setProperty("--bg-image", `url("${safePath}")`);
    }

    function ensureLayers() {
        if (layerA && layerB) return;
        layerA = document.createElement("div");
        layerB = document.createElement("div");
        layerA.className = "bg-layer active";
        layerB.className = "bg-layer";
        document.body.prepend(layerA, layerB);
        document.body.classList.add("js-bg-enhanced");
        activeLayer = layerA;
    }

    function crossfadeTo(path) {
        ensureLayers();
        const safePath = `url("${encodeURI(path)}")`;
        const nextLayer = activeLayer === layerA ? layerB : layerA;
        nextLayer.style.backgroundImage = safePath;
        nextLayer.classList.add("active");
        activeLayer.classList.remove("active");
        activeLayer = nextLayer;
    }

    function rgbToHsl(r, g, b) {
        const rn = r / 255;
        const gn = g / 255;
        const bn = b / 255;
        const max = Math.max(rn, gn, bn);
        const min = Math.min(rn, gn, bn);
        const l = (max + min) / 2;
        let h = 0;
        let s = 0;

        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case rn:
                    h = (gn - bn) / d + (gn < bn ? 6 : 0);
                    break;
                case gn:
                    h = (bn - rn) / d + 2;
                    break;
                default:
                    h = (rn - gn) / d + 4;
                    break;
            }
            h /= 6;
        }
        return { h: h * 360, s, l };
    }

    function pickThemeFromHsl(hsl) {
        const { h, s } = hsl;
        if (h >= 80 && h <= 170 && s >= 0.12) return "green";
        return "blue";
    }

    async function resolveThemeForImage(path) {
        if (themeCache.has(path)) return themeCache.get(path);

        const theme = await new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                try {
                    const canvas = document.createElement("canvas");
                    const size = 32;
                    canvas.width = size;
                    canvas.height = size;
                    const ctx = canvas.getContext("2d", { willReadFrequently: true });
                    if (!ctx) return resolve("blue");

                    ctx.drawImage(img, 0, 0, size, size);
                    const { data } = ctx.getImageData(0, 0, size, size);
                    let r = 0;
                    let g = 0;
                    let b = 0;
                    let count = 0;
                    for (let i = 0; i < data.length; i += 4) {
                        const alpha = data[i + 3];
                        if (alpha < 20) continue;
                        r += data[i];
                        g += data[i + 1];
                        b += data[i + 2];
                        count += 1;
                    }
                    if (!count) return resolve("blue");
                    const avg = { r: r / count, g: g / count, b: b / count };
                    const hsl = rgbToHsl(avg.r, avg.g, avg.b);
                    resolve(pickThemeFromHsl(hsl));
                } catch {
                    resolve("blue");
                }
            };
            img.onerror = () => resolve("blue");
            img.src = encodeURI(path);
        });

        themeCache.set(path, theme);
        return theme;
    }

    async function applyThemeForImage(path) {
        const theme = await resolveThemeForImage(path);
        document.documentElement.setAttribute("data-bg-theme", theme);
    }

    function shouldIgnoreClick(target) {
        if (!target) return true;
        return Boolean(
            target.closest(
                "a,button,input,textarea,select,label,.card,.quick-grid,.header,.main,.landing-content,.block,.list,.lang-switcher"
            )
        );
    }

    async function init() {
        const images = await loadImages();
        if (!images.length) return;

        let idx = 0;
        setBg(images[idx]); // fallback for no-JS/slow init
        crossfadeTo(images[idx]);
        applyThemeForImage(images[idx]);

        document.addEventListener("click", (e) => {
            if (shouldIgnoreClick(e.target)) return;
            idx = (idx + 1) % images.length;
            crossfadeTo(images[idx]);
            setBg(images[idx]); // keep css var in sync as fallback
            applyThemeForImage(images[idx]);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
