function onDebounceFn(fn, delay = 300) {
  clearTimeout(window.debounceTimer);
  window.debounceTimer = setTimeout(() => {
      fn(); 
  }, delay);
}

export const setDomFontSize = () => {
    // let width = document.documentElement.clientWidth || document.body.clientWidth;
    // let fontsize = (width <= 1200 ? 1200 : width) / 100 + 'px';
    // console.log('1rem = ', fontsize);
    // (document.getElementsByTagName('html')[0].style )['font-size'] = fontsize;
    var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var currentFontSize = screenWidth * 100 / 750;
    console.log('1rem = ', currentFontSize);
    (document.getElementsByTagName('html')[0].style )['font-size'] = currentFontSize;

}
  
  let setDomFontSizeDebounce = onDebounceFn(setDomFontSize,100)
  window.addEventListener('resize', setDomFontSizeDebounce); // 浏览器加入收缩监听防抖，重新计算rem配置