
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


