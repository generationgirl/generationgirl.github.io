$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.nav ul li a');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-nav ul li a').css('background-color', 'rgba(240, 95, 64, 0.9)');
       } else {
          $('.navbar-nav ul li a').css('background-color', 'transparent');
       }
   });
});
