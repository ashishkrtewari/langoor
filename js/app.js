$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 300);
          return false;
        }
      }
    });
  });

  if ($(window).width() <= 768) {

         // is mobile device
         $("#bs-example-navbar-collapse-1").removeClass('pull-right');
         $('.nav').addClass('bg-black');

  }
  else {
    $('#bs-example-navbar-collapse-1').addClass('pull-right');
    $('.nav').removeClass('bg-black');
  }
  $(window).resize(function(){

       if ($(window).width() < 768 && $(window).width() > 300) {

              // is mobile device
              $("#bs-example-navbar-collapse-1").removeClass('pull-right');
              $('.nav').addClass('bg-black');

       }
       else {
         $('#bs-example-navbar-collapse-1').addClass('pull-right');
         $('.nav').removeClass('bg-black');
       }

});
});
