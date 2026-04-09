/* Ridho Dimas Ramadhan - Portfolio Scripts */

(function($) {
    "use strict";

    /* Fix #5: Scroll to top on page load */
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });
    if (window.location.hash === '' || window.location.hash === '#header') {
        $(window).scrollTop(0);
    }

    /* Navbar Scripts */
    $(window).on('scroll load', function() {
        if ($(".navbar").offset().top > 60) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });

    /* Smooth Scrolling */
    $(document).on('click', 'a.page-scroll', function(event) {
        var target = $(this).attr('href');
        if (target && target.charAt(0) === '#' && $(target).length) {
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top - 70
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        }
    });

    /* Offcanvas Menu */
    function openNav() {
        $('.offcanvas-collapse').addClass('open');
        $('.navbar-toggler').addClass('active');
        $('#navBackdrop').addClass('show');
        $('body').css('overflow', 'hidden');
    }
    function closeNav() {
        $('.offcanvas-collapse').removeClass('open');
        $('.navbar-toggler').removeClass('active');
        $('#navBackdrop').removeClass('show');
        $('body').css('overflow', '');
    }

    $(document).on('click', '.navbar-toggler', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($('.offcanvas-collapse').hasClass('open')) {
            closeNav();
        } else {
            openNav();
        }
    });

    $(document).on('click', '.offcanvas-collapse .nav-link', function() {
        closeNav();
    });

    $(document).on('click', '#navBackdrop', function() {
        closeNav();
    });

    /* Back To Top Button */
    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 700) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });
    $(document).on('click', 'a.back-to-top', function(e) {
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: 0 }, 600, 'easeInOutExpo');
    });

    /* Remove Focus on Buttons */
    $(".button, a, button").mouseup(function() {
        $(this).blur();
    });

})(jQuery);

/* Gallery slider is initialized inline in index.html */
