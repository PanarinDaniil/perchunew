WebFontConfig = 
    {
    	google:{
    		families:[
    			"Open+Sans:300,400,600,700,800&subset=latin-ext"
    		]
    	}
    },
    function() {
    	var n=document.createElement("script"),t;
    	n.src="https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    	n.type="text/javascript";
    	n.async="true";
    	t=document.getElementsByTagName("script")[0];
    	t.parentNode.insertBefore(n,t)
    }();
$(document).ready(function() {
    (function() {
    "use strict";
    var toggles = document.querySelectorAll(".mob-btn");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    $('.layout').click(function() {
      ($(".mob-btn").hasClass("active") === true) ? $(".mob-btn").removeClass("active")  : $(".mob-btn").addClass("active");
      $(".top-nav").hide(1000);
      ($(".mob-btn").hasClass("active") === true) ? $(".layout").toggle('wiggle') : $(".layout").hide('wiggle');
    });
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("active") === true) ? this.classList.remove("active")  : this.classList.add("active");
        (this.classList.contains("active") === true) ? $(".layout").toggle('wiggle') : $(".layout").hide('wiggle');
        (this.classList.contains("active") === true) ? $(".top-nav").toggle('wiggle') : $(".top-nav").hide('wiggle');
      });
    }
  })();
    $('.slider').slick({
        lazyLoad: 'ondemand',
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        swipe: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              arrows:false
            }
          }
        ]
    });
});