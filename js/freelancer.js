// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // Lazy load img
    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function() {
        img.removeAttribute('data-src');
      };
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Change hsh on modal opening
    var activeModal = "";
    $('.portfolio-link').click(function(){ 
        window.location = $(this).get(0).href;
        activeModal = window.location.hash;
    });

    // Close modal
    $(".close-modal-hash").click(function(){
        $(activeModal).modal('hide');
        window.location.hash = "";
        activeModal = window.location.hash;
    });

    // Handle back button
    $(window).on('hashchange', function (event) {
        if(window.location.hash != activeModal){
            $(activeModal).modal('hide');
            activeModal = window.location.hash;
        }
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    // Toggle modal if hash is present
    if(window.location.hash) {
      var hash = window.location.hash;
      $(hash).modal('toggle');
    }
})(jQuery); // End of use strict
