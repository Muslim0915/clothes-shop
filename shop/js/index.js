
    $('#first-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeOut: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1280:{
                items:2
            },
        }
    });

    $('#second-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeOut: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1280:{
                items:4
            }
        }
    });
    const menu = document.querySelector('.menu-btn');
    const nav_menu = document.querySelector('.nav-menu');
    menu.onclick = function(){
        menu.classList.toggle('active');
        nav_menu.classList.toggle('active');
    }