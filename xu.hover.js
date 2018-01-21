// Xu.hover.

(function($){  
$.fn.xu_hover=function(options){
  var defualts={class:null,ie6:0};
  var opts=$.extend({},defualts,options);
  var xuhover=$(this);
  
  xuhover.hover(function(){
	$(this).addClass(opts.class);
  },function(){
	$(this).removeClass(opts.class);
  });
  
};  
})(jQuery); 
///////////////////////////////////////////////////////////////////////////////
(function(){(function(jQuery){
jQuery(document).ready(function(){
  jQuery('#gotop').xu_hover({class:'.hover',ie6:0});
});
})(jQuery);})();