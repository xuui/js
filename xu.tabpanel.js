// Xu.Tab Panel.

(function($){  
$.fn.xu_tabs=function(options){
  var defualts={id:null,class:0};
  var opts=$.extend({},defualts,options);
  var xu_tabs=$(this);
  
  xu_tabs.siblings(opts.tabTatle).click(function(){
	$(this).addClass('selected').siblings().removeClass();
	xu_tabs.siblings(opts.tabPanel).eq(xu_tabs.siblings(opts.tabPanel).index(this)).show().siblings().hide();
  });
  
  /*
  $('#xinwen .tabTitle a').click(function(){
	$(this).addClass('selected').siblings().removeClass();
	$('#xinwen .tabContent >div').eq($('#xinwen .tabTitle a').index(this)).show().siblings().hide();
  });
  */
  
  function isPlaceHolder(){var input=document.createElement("input");return "placeholder" in input;}
  if(!isPlaceHolder()){//alert('nooo');
    var searchtext=$('#searchsite #s');
	searchtext.focus(function(){
	  if($(this).val()=='搜索本站...'){$(this).css({color:'#555'}).val('');}
	}).blur(function(){
	  if($(this).val()==''){$(this).css({color:'#aaa'}).val('搜索本站...');}
	});
	$(function(){if(searchtext.val()=='' || searchtext.val()=='搜索本站...'){
	  searchtext.css({color:'#999'}).val('搜索本站...');
	}});
  }
  
};  
})(jQuery); 
///////////////////////////////////////////////////////////////////////////////
(function(){(function(jQuery){
jQuery(document).ready(function(){
  jQuery('#gotop').xu_tabs({tabTatle:jQuery('id'),tabPanel:jQuery('id2')});
});
})(jQuery);})();