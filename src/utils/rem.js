// ---------------------第四种----------------------- 18fontsize = (18/100)rem
(function (doc, win) {
  const docEl = doc.documentElement;
  const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  let dpr;
  dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1;
  dpr = window.top === window.self ? dpr : 1; // 被iframe引用时，禁止缩放
  const scale = 1 / dpr;
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  docEl.dataset.dpr = dpr;
  const metaEl = doc.createElement('meta');
  metaEl.name = 'viewport';
  metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale;
  docEl.firstElementChild.appendChild(metaEl);
  // 增加判断PC/and/ios
  const isAndroid = navigator.userAgent.includes('Android') || navigator.userAgent.includes('Linux'); // g
  const recalc = function () {
    // 1rem =100px
    let width = docEl.clientWidth;
    if (isAndroid || isIOS) {
      if (width / dpr > 750) {
        width = 750 * dpr;
      }
      docEl.style.fontSize = (100 * (width / 750)) * 2 + 'px';
      // console.log('isAndroid || isIOS');
    } else {
      if (width > 1024) {
        if (width / dpr > 1920) {
          width = 1920 * dpr;
        }
        docEl.style.fontSize = (100 * (width / 1920)) + 'px';
      } else {
        // 增加在PC情况下适应dpr:默认3倍
        if (width / 3 > 750) {
          width = 750 * 3;
        }
        docEl.style.fontSize = (100 * (width / 750)) * 2 + 'px';
      }

      console.log('isPC');
    }
  };
  recalc();
  if (!doc.addEventListener) { return; }
  win.addEventListener(resizeEvt, recalc, false);
  console.log('已自适应');
})(document, window);
