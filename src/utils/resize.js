function onDebounceFn(fn, delay = 300) {
    clearTimeout(window.debounceTimer);
    window.debounceTimer = setTimeout(() => {
        fn();
    }, delay);
}

export const setDomFontSize = () => {
    let width = document.documentElement.clientWidth || document.body.clientWidth;
    let fontsize = (width <= 1200 ? 1200 : width) / 100 + "px";
    console.log("1rem = ", fontsize);
    document.getElementsByTagName("html")[0].style["font-size"] = fontsize;
};

let setDomFontSizeDebounce = onDebounceFn(setDomFontSize, 100);
window.addEventListener("resize", setDomFontSizeDebounce); // 浏览器加入收缩监听防抖，重新计算rem配置
