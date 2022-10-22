'use strict';

//Anchors
$(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);
        return false;
    });
});
$(function(){ 
    $('.SmoothmyTop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
  });
});
$(window).scroll(function() {
    if ($(this).scrollTop()>200){
        $('.SmoothmyTop').show(1000);
     }
    else{
      $('.SmoothmyTop').hide(1000);
     }
 });
//Fixed-top menu
function fixedHeader() {
    var ww = $(window).scrollTop();
    if(ww > 0){
        $('.menu').addClass('menu--active');
        $('.mobile-menu').addClass('mobile-menu--active');
    }else{
        $('.menu').removeClass('menu--active');
        $('.mobile-menu').removeClass('mobile-menu--active');
    }
}
fixedHeader();
$(window).on('scroll', function () {
    fixedHeader();
});


