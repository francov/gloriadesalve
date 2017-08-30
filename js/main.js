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
      var hash = $anchor.attr('href').split('#')[1];
      hash = (hash === 'page-top') ? '/' : hash + '.html';
      var stateObj = { nav: hash };
      history.pushState(stateObj, hash, hash );
      event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
    });

    // Change hash on modal opening
    var activeModal = "";
    $('.portfolio-link').click(function() {
      window.location = $(this).get(0).href;
      activeModal = window.location.hash;
    });

    // Show spinner before image loading, then hide
    $('.portfolio-modal').on("show.bs.modal", function() {
      var images = $(this).find("img");
      var loader = images.get(0);
      var img = images.get(1);
      $(loader).show();
      $(img).css('opacity', 0);
      img.setAttribute('src', img.getAttribute('data-pvt'));
      img.onload = function() {
        $(loader).hide();
        $(img).css('opacity', 1);
      };
    });

    // Close modal
    $(".close-modal-hash").click(function(){
      $(activeModal).modal('hide');
      if (window.location.pathname === '/') {
        window.location.hash = "";
        activeModal = window.location.hash;
      } else {
        window.history.back();
        activeModal = "";
      }
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
    });

    $(window).on('load', function (event) {
      var hash = window.location.hash;
      console.log(hash);
      if ((window.location.pathname !== '/') && (hash === '')) {
        window.location.href = '#' + window.location.pathname.substr(1).split('.')[0];
        console.log(window.location.href);
      }
    });

    // Toggle modal if hash is present
    if(window.location.hash) {
      var hash = window.location.hash;
      if ((hash !== '#my-works') && (hash !== '#about') && (hash !== '#contacts')) {
        $(hash).modal('toggle');
      }
    }
})(jQuery); // End of use strict
