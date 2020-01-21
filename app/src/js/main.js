
//ПЛАВНЫЕ ЯКОРНЫЕ ССЫЛКИ
$(document).ready(function () {
    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top - 69;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//ВЫПАДАЮЩЕЕ МЕНЮ
// let navBurgerIcon = document.body.querySelector(".nav-burger-icon");
// let navBurger = document.body.querySelector(".nav-burger");
// let navListSmall = document.body.querySelector(".nav-list-small");

// function Nav() {
//     if (navListSmall.classList.contains("display-none")) {
//         navListSmall.classList.remove("display-none");
//     } else {
//         navListSmall.classList.add("display-none");
//     }
// }
// navBurgerIcon.addEventListener("click", Nav);


//показать/скрыть message-form
let messageForm = document.body.querySelector(".message-form");
let submitSendMessage = document.body.querySelector(".button-send-message");
let xIconMessageForm = document.body.querySelector(".message-form__x-icon");
let xIconModalWindowOk = document.body.querySelector(".modal-window-ok__x-icon");
let xIconModalWindowError = document.body.querySelector(".modal-window-error__x-icon");
let messageFormBackground = document.body.querySelector(".message-form__background");
let modalWindowOkBackground = document.body.querySelector(".modal-window-ok__background");
let modalWindowErrorBackground = document.body.querySelector(".modal-window-error__background");

submitSendMessage.addEventListener("click", showMessageForm);
xIconMessageForm.addEventListener("click", hideMessageForm);
xIconModalWindowOk.addEventListener("click", hideModalWindowOk);
xIconModalWindowError.addEventListener("click", hideModalWindowError);
messageFormBackground.addEventListener("click", hideMessageForm);
modalWindowOkBackground.addEventListener("click", hideModalWindowOk);
modalWindowErrorBackground.addEventListener("click", hideModalWindowError);

function showMessageForm() {
    messageForm.classList.remove("display-none");
    document.body.style.overflow = "hidden";
}
function hideMessageForm() {
    messageForm.classList.add("display-none");
    document.body.style.overflow = "";
}


//ВАЛИДАЦИЯ
let submit = document.body.querySelector(".submit");
let modalWindowOk = document.body.querySelector(".modal-window-ok");
let modalWindowError = document.body.querySelector(".modal-window-error");

function hideModalWindowOk() {
    modalWindowOk.classList.add("display-none");
}
function hideModalWindowError() {
    modalWindowError.classList.add("display-none");
}

function showModalWindowOk () {
    modalWindowOk.classList.remove("display-none");
    setTimeout(hideModalWindowOk, 5000);
}
function showModalWindowError () {
    modalWindowError.classList.remove("display-none");
    setTimeout(hideModalWindowOk, 5000);
}




submit.addEventListener("click", function() {

    let isError = false;

    let name = document.body.querySelector('#name');
    let errorName = document.querySelector('.error-name');
    let re=/^[a-zа-яё]+$/i;
    if (!re.test(name.value) || name.value.length < 2) {
        isError = true;
        errorName.innerHTML = "Введите корректное имя";
        name.classList.add("invalid");
    } else {
        errorName.innerHTML = "";
        name.classList.remove("invalid");
    }

    let email = document.body.querySelector("#email");
    let errorEmail = document.querySelector(".error-email");
    if (!email.validity.valid || email.value.length < 2) {
        isError = true;
        errorEmail.innerHTML = "Введите корректный адрес электронной почты";
        email.classList.add("invalid");
    } else {
        errorEmail.innerHTML = "";
        email.classList.remove("invalid");
    }

    let textarea = document.body.querySelector("#textarea");
    let errorTextarea = document.querySelector(".error-textarea");
    if (textarea.value.length < 1) {
        isError = true;
        errorTextarea.innerHTML = "Введите текст сообщения";
        textarea.classList.add("invalid");
    } else {
        errorTextarea.innerHTML = "";
        textarea.classList.remove("invalid");
    }

    if(!isError){
        showModalWindowOk();
        name.value = "";
        email.value = "";
        textarea.value = "";
        hideMessageForm();
    }
});
