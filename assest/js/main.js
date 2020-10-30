window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log("iam worked");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("h-logo").style.width = "100px";
    document.getElementById("a-logo").style.width = "100px";
    
  } else {
    document.getElementById("h-logo").style.width = "400px";
    document.getElementById("a-logo").style.width = "400px";
    
  }
}



jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });

    $('li.dropdown').find('.fa-angle-down').each(function(){
		$(this).on('click', function(){
            
			if( $(window).width() < 768 ) {
				$(this).parent().next().slideToggle();
			}
			return false;
		});
    });
    
    
    var vids = $("video"); 
    $.each(vids, function(){
           this.controls = false; 
    }); 
    //Loop though all Video tags and set Controls as false
    
    $("video").click(function() {
      //console.log(this); 
      if (this.paused) {
        this.play();
      } else {
        this.play();
      }
    });

         
        // var scroll_pos = 0;
        // $(document).scroll(function() {
        //     scroll_pos = $(this).scrollTop();
        //     if(scroll_pos > 300) {
        //         $(".mu-main-navbar").css('background-color', 'black');
        //         $(".nav-log-bx").css('background-color', '#edcd1f');

               
        //     } else {
        //         $(".mu-main-navbar").css('background-color', 'transparent');
        //         $(".nav-log-bx").css('background-color', 'transparent');
                
        //     }
        // });
    


        var scroll_pos = 0;
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();
            if( $(window).width() < 991 ) {
            if(scroll_pos > 20) {
               
                $(".nav-log-bx").css('background-color', '#edcd1f');
                
            } else {
              
                $(".nav-log-bx").css('background-color', '#edcd1f');
            }
        }
        });
  
    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"], a.navbar-brand, a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });


   

    /*----------------------------
        MOBILE & DROPDOWN MENU
    ------------------------------*/
    jQuery('.stellarnav').stellarNav({
        theme: 'dark',
        breakpoint: 900,
    });


    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });

    /*--------------------------
       PARALLAX BACKGROUND
    ----------------------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });


    /*---------------------------
	    HOME SLIDER
	-----------------------------*/
    var $homeSlider = $('.welcome-slider-area');
    $homeSlider.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 0,
        /*animateIn: 'fadeIn',
        animateOut: 'fadeOut',*/
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });


    /*------------------------------
        VIDEO POPUP
    --------------------------------*/
    var $videoModal = $(".video-area-popup");
    $videoModal.modalVideo({
        channel: 'youtube'
    });


    /*---------------------------
        MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://intimissibd.us14.list-manage.com/subscribe/post?u=a77a312486b6e42518623c58a&amp;id=4af1f9af4c', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscriber-form input, .subscriber-form button').hide();
            }
        }
    });


    /*---------------------------
        COURSE SLIDER
    -----------------------------*/
    var $courseCarousel = $('.course-list');
    $courseCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        center: true,
        navText: ['<i class="fa fa-long-arrow-left"></i> Prev', 'Next <i class="fa fa-long-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
            1900: {
                items: 4
            }
        }
    });

    /*---------------------------
        TESTMONIAL SLIDER
    -----------------------------*/
    var $testmonialCarousel = $('.testmonial-slider');
    $testmonialCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        center: false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    /*---------------------------
        CLIENT SLIDER
    -----------------------------*/
    var $clientCarousel = $('.client-slider');
    $clientCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        center: true,
        navText: ['<i class="fa fa-long-arrow-left"></i> Prev', 'Next <i class="fa fa-long-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },
            1200: {
                items: 5
            },
            1900: {
                items: 5
            }
        }
    });


    /*--------------------------
        FACT COUNTERING
    ---------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();

    /*---------------------------
        PLACEHOLDER ANIMATION
    ----------------------------*/
    Placeholdem(document.querySelectorAll('[placeholder]'));

}(jQuery));



jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);

});

