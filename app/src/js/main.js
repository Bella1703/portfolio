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
let navBurger = document.body.querySelector(".nav-burger");
let modalWindowNav = document.body.querySelector(".modal-window-nav");

function showModalWindowNav() {
    modalWindowNav.classList.remove("display-none");
}

navBurger.addEventListener("click", showModalWindowNav);

//скрывать выпадающее меню после перехода по ссылке
let navItems = document.body.querySelectorAll(".nav-list-modal-window__item");
for (let navItem of navItems) {
    navItem.addEventListener("click", hideModalWindowNav);
}



//показать/скрыть message-form
let modalWindowOk = document.body.querySelector(".modal-window-ok");
let modalWindowError = document.body.querySelector(".modal-window-error");


let messageForm = document.body.querySelector(".message-form");
let submitSendMessage = document.body.querySelector(".button-send-message");
let xIconMessageForm = document.body.querySelector(".message-form__x-icon");
let xIconModalWindowOk = document.body.querySelector(".modal-window-ok__x-icon");
let xIconModalWindowError = document.body.querySelector(".modal-window-error__x-icon");
let xIconModalWindowNav = document.body.querySelector(".modal-window-nav__x-icon");
let messageFormBackground = document.body.querySelector(".message-form__background");
let modalWindowOkBackground = document.body.querySelector(".modal-window-ok__background");
let modalWindowErrorBackground = document.body.querySelector(".modal-window-error__background");
let modalWindowNavBackground = document.body.querySelector(".modal-window-nav__background");

submitSendMessage.addEventListener("click", showMessageForm);
xIconMessageForm.addEventListener("click", hideMessageForm);
xIconModalWindowOk.addEventListener("click", hideModalWindowOk);
xIconModalWindowError.addEventListener("click", hideModalWindowError);
xIconModalWindowNav.addEventListener("click", hideModalWindowNav);
messageFormBackground.addEventListener("click", hideMessageForm);
modalWindowOkBackground.addEventListener("click", hideModalWindowOk);
modalWindowErrorBackground.addEventListener("click", hideModalWindowError);
modalWindowNavBackground.addEventListener("click", hideModalWindowNav);

function showMessageForm() {
    messageForm.classList.remove("display-none");
    document.body.style.overflow = "hidden";
}

function showModalWindowOk() {
    modalWindowOk.classList.remove("display-none");
    setTimeout(hideModalWindowOk, 5000);
}

function showModalWindowError() {
    modalWindowError.classList.remove("display-none");
    setTimeout(hideModalWindowOk, 5000);
}

function hideMessageForm() {
    messageForm.classList.add("display-none");
    document.body.style.overflow = "";
}

function hideModalWindowOk() {
    modalWindowOk.classList.add("display-none");
}

function hideModalWindowError() {
    modalWindowError.classList.add("display-none");
}

function hideModalWindowNav() {
    modalWindowNav.classList.add("display-none");
}


//ВАЛИДАЦИЯ
let submit = document.body.querySelector(".submit");

submit.addEventListener("click", function () {

    let isError = false;

    let name = document.body.querySelector('#name');
    let errorName = document.querySelector('.error-name');
    let re = /^[a-zа-яё]+$/i;
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

    if (!isError) {
        showModalWindowOk();
        name.value = "";
        email.value = "";
        textarea.value = "";
        hideMessageForm();
    }
});
