// Xuui Tracing.
"use strict";
void function(){
  var d=document,n=navigator,s=screen,w=window;
  var rson={
    'title':d.title,
    'domain':d.domain,
    'URL':d.URL,
    'referrer':d.referrer,
    'userAgent':n.userAgent,
    'browserLanguage':n.browserLanguage,
    'platform':n.platform,
    'screen_width':s.width,
    'screen_height':s.height,
    'availWidth':s.availWidth,
    'availHeight':s.availHeight,
    'colorDepth':s.colorDepth,
    'pixelDepth':s.pixelDepth,

  };

  console.log(rson);
  document.write(JSON.stringify(rson));
}();
