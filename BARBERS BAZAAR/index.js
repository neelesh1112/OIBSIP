/**** Table of content *****/

/* Header /*
/* Navbar*/
/* Banner */





/*** Header ***/
/*** Navbar ***/
/*** Banner ***/




// Top Rated Salons Card SEction Start
var swiper=new Swiper(".mySwiper",{
    loop: true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPouse:true,

    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:"auto",
    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:300,
        modifier:1,
        slideShadows:false,
    },
    pagination:{
        el:".swiper-pagenation",
    },


});
// Top Rated Salons Card SEction End