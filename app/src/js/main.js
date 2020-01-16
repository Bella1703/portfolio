
//
// let mh = 0;
// let b = function() {
//     let h_a = parseInt($(this).height());
//     if(h_a > mh) {
//         mh = h_a;
//     };
// }
//
// $(".a").each(b);
// $(".a").height(mh);
// let time;
// window.onresize = function(e){
//     if (time)
//     clearTimeout(time);
//     time = setTimeout(function(){
//         mh = 0;
//         $(window).resize(b);
//         $(".a").each(b);
//         $(".a").height(mh);
//     },1);
// };
//
//
// $(window).load(b);
// $(window).resize(b);
//
// $(window).on('load resize', b);

let blocks = document.body.querySelectorAll(".portfolio-list-item__title-block");

// window.onresize = function () {
//     let maxHeight = 0;
//     let height;
//     for (let block of blocks) {
//         let computedStyle = getComputedStyle(block);
//         console.log(computedStyle.height);
//         height = parseInt(computedStyle.height);
//         if (height > maxHeight) {
//             maxHeight = height;
//         }
//     }
//    console.log(maxHeight);
//     for (let block of blocks) {
//         block.style.height = maxHeight + 'px';
//     }
// };

// window.onresize = function () {
//     for (let block of blocks) {
//         block.style.height = "50vh";
//     }
// }





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

// function Nav() {
//     if (navListSmall.classList.contains("display-none")) {
//         navListSmall.classList.remove("display-none");
//     } else {
//         navListSmall.classList.add("display-none");
//     }
// }
// navBurgerIcon.addEventListener("click", Nav);


