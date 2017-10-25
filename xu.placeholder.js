// Xu.PlaceHolder.

(function($){  
$.fn.xu_PlaceHolder=function(options){
  var defualts={tip:'',class:null};
  var opts=$.extend({},defualts,options);
  var xu_PlaceHolder=$(this);
  
  function isPlaceHolder(){var input=document.createElement("input");return "placeholder" in input;}
  if(!isPlaceHolder()){
	xu_PlaceHolder.focus(function(){
	  if($(this).val()==opts.tip){$(this).css({color:'#555'}).val('');}
	}).blur(function(){
	  if($(this).val()==''){$(this).css({color:'#aaa'}).val(opts.tip);}
	});
	$(function(){
	  if(xu_PlaceHolder.val()=='' || xu_PlaceHolder.val()==opts.tip){
		xu_PlaceHolder.css({color:'#999'}).val(opts.tip);
	  }
	});
  }
  
};  
})(jQuery); 
///////////////////////////////////////////////////////////////////////////////
(function(){(function(jQuery){
jQuery(document).ready(function(){
  jQuery('#gotop').xu_PlaceHolder({tip:'搜索本站...',class:jQuery('id')});
});
})(jQuery);})();