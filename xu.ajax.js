"use strict";
function request(type,url,opts,callback){
  var xhr=new XMLHttpRequest(),fd;
  if(typeof opts==='function'){
    callback=opts;
    opts=null;
  }
  xhr.open(type,url);
  if(type==='POST' && opts){
    fd=new FormData();
    for(var key in opts){
      fd.append(key,JSON.stringify(opts[key]));
    }
  }
  xhr.onload=function(){
    callback(JSON.parse(xhr.response));
  };
  xhr.send(opts ? fd : null);
}

var get=request.bind(this,'GET');
var post=request.bind(this,'POST');

//request('GET','http://xuui.io/iot/data.json',function(data){
get('https://cdn.xuui.net/jtouch/resources/fonts/mdicons.json',function(data){
//post('http://xuui.io/iot/xuiot.php?callback=',{'temperature':0,'humidity':2},function(data){
  console.log(data);
});
