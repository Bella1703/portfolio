
//
let mh = 0;
$(".a").each(function b() {
    let h_a = parseInt($(this).height());
    if(h_a > mh) {
        mh = h_a;
    };
});
$(".a").height(mh);

window.onresize = function(e){
    if (time)
    clearTimeout(time);
    time = setTimeout(function(){
        resize(e);
    },1);
}


$(window).load(b);
$(window).resize(b);
$(window).on('load resize', b);



//СЛАЙДЕР БЛОКА НАВЫКИ
$('.logo-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    draggable: true,
    adaptiveHeight: true,
});









//ПЛАВНЫЕ ЯКОРНЫЕ ССЫЛКИ
$(document).ready(function () {
    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//ВЫПАДАЮЩЕЕ МЕНЮ
let navBurgerIcon = document.body.querySelector(".nav-burger-icon");
let navBurger = document.body.querySelector(".nav-burger");
let navListSmall = document.body.querySelector(".nav-list-small");

function Nav() {
    if (navListSmall.classList.contains("display-none")) {
        navListSmall.classList.remove("display-none");
    } else {
        navListSmall.classList.add("display-none");
    }
}
navBurgerIcon.addEventListener("click", Nav);


