// $(document).ready(function(){
//           $(".owl-carousel").owlCarousel();
//         });

$('#slider').owlCarousel({
          loop:true,
          margin:25,
          nav:false,
          autoplay:true,
          autoplayTimeout:1000,
          autoplayHoverPause:true,
          dots:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:2
              }
          }
      });
      $('#fotter').owlCarousel({
        loop:true,
        margin:25,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })