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
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $('#sponsor-carousel').owlCarousel({
        loop: true,
        margin: 5,
        center: false,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 2
            },
            480 : {
                items: 3,
            },
            768 : {
                items: 3,
            },
            992 : {
                items: 6,
            }
        }
    });

    $(document).ready(function() {
        // When a product is clicked, show the modal with detailed info
        $('.product-item').on('click', function() {
            const productId = $(this).data('product');
            
            // Use productId to fetch product details dynamically (hardcoded for now)
            const productDetails = {
                1: {
                    name: 'Product 1',
                    image: 'path_to_image1.jpg',
                    description: 'Detailed description of Product 1.',
                    price: '$29.00'
                },
                // Add other products here as needed
            };
    
            const details = productDetails[productId];
    
            // Update modal content
            $('#product-name').text(details.name);
            $('#product-detail-image').attr('src', details.image);
            $('#product-description').text(details.description);
            $('#product-price').text(details.price);
    
            // Show the modal
            $('#product-detail-modal').modal('show');
        });
    });
    

})(jQuery);
