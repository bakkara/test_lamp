$(document).ready(function () {
    $(".new-collection-list").owlCarousel({
        loop:true,
        margin: 32,
        autoWidth:true,
        autoplay: true,
        autoplayTimeout:1000,
        autoplayHoverPause: true,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:3,
        },
        1158:{
            items:4,
        }
    }
    });
})
