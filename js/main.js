(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            }
        }
    });

})(jQuery);



//  Validation Script 

$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});

// Login Btn

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('login').addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent the form from submitting normally

//         // Capture input values
//         var username = document.getElementById('username').value;
//         var password = document.getElementById('password').value;

//         // Optionally: Perform validation or send data to the server

//         // Redirect to index.html
//         window.location.href = 'index.html';
//     });
// }); 




// Log In JQuery
$(document).ready(function () {
    $('#login').on('submit', function (event) {
        event.preventDefault(); 

        var username = $('#username').val();
        var password = $('#password').val();

        window.location.href = 'index.html';
    });
});


// Sing Up JQuery
$(document).ready(function () {
    $('#signup').on('submit', function (event) {
        event.preventDefault(); 

        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#setpassword').val();

        window.location.href = 'index.html';
    });
});


// SignUp Tab
$(document).ready(function () {
    // Handle tab switching
    $('.signup-link').on('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Switch to 'Sign Up' tab
        $('#login').hide();
        $('#signup').show();
        $('.tab-group li.tab').removeClass('active');
        $('.tab-group li.tab').eq(1).addClass('active'); // Assuming 'Sign Up' is the second tab
    });

    // By default, show the login tab content
    $('#login').show();
    $('#signup').hide();
});