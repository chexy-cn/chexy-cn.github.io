// 页面交互：微信弹层支持点击外部或按 Esc 关闭。
(() => {
    const wechat = document.querySelector(".wechat-contact");
    if (!wechat) return;

    document.addEventListener("click", event => {
        if (wechat.open && !wechat.contains(event.target)) wechat.open = false;
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && wechat.open) {
            wechat.open = false;
            wechat.querySelector("summary").focus();
        }
    });
})();
