// Xu.Go Top.

(function($){  
$.fn.xu_gotop=function(options){
  var defualts={id:null,class:0};
  var opts=$.extend({},defualts,options);
  var xugotop=$(this);
  
  $(window).scroll(function(){
	if(xugotop.length>0){if($document.scrollTop()>=128){xugotop.fadeIn(200);}else{xugotop.fadeOut(200);}}
	
  });
  

  
  $(window).resize(function(){
	 //sideLeft=aside.offset().left;
  });
};  
})(jQuery); 
///////////////////////////////////////////////////////////////////////////////
(function(){(function(jQuery){
jQuery(document).ready(function(){
  jQuery('#gotop').xu_gotop({id:jQuery('id'),class:0});
});
})(jQuery);})();