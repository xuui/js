// Xuui Tracing.
"use strict";
void function(){
  var d=document,n=navigator;
  var rson={
    'title':d.title,
    'domain':d.domain,
    'URL':d.URL,
    'referrer':d.referrer,
    'userAgent':n.userAgent,
    'browserLanguage':n.browserLanguage,
    'platform':n.platform,
  };

  console.log(rson);
}();
