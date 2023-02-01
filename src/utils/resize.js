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
    

    const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    const isAndroid = navigator.userAgent.includes('Android') || navigator.userAgent.includes('Linux'); // g
    
    let width = document.clientWidth;

    let dpr;
  dpr = isIOS ? Math.min(window.devicePixelRatio, 3) : 1;
  dpr = window.top === window.self ? dpr : 1; // 被iframe引用时，禁止缩放

    let fontSize = 16;
    if (isAndroid || isIOS) {
      if (width / dpr > 750) {
        width = 750 * dpr;
      }
      fontSize = (100 * (width / 750)) * 2  ; 
    } else {
      if (width > 1024) {
        if (width / dpr > 1920) {
          width = 1920 * dpr;
        }
        fontSize = (100 * (width / 1920))  ;
      } else {
        // 增加在PC情况下适应dpr:默认3倍
        if (width / 3 > 750) {
          width = 750 * 3;
        }
        fontSize = (100 * (width / 750)) * 2  ;
      } 
    }
    console.log( 'screen width = ',document.documentElement.clientWidth,'1rem = ', fontSize);
    document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px'; 
}
  
  let setDomFontSizeDebounce = onDebounceFn(setDomFontSize)
  window.addEventListener('resize', setDomFontSizeDebounce); // 浏览器加入收缩监听防抖，重新计算rem配置