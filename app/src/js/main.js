//ОТКРЫТЬ МЕНЮ
let burgerIcon = document.body.querySelector(".burger-icon");
let navContent = document.body.querySelector(".nav-content");

burgerIcon.addEventListener("click", openNavContent);

function openNavContent() {
    burgerIcon.classList.add("display-none");
    navContent.classList.remove("display-none");
}

//ЗАКРЫТЬ МЕНЮ
let navHeaderArrowBigRight = document.body.querySelector(".nav-header__arrow-big-right");
navHeaderArrowBigRight.addEventListener("click", closeNavContent);

function closeNavContent() {
    navContent.classList.add("display-none");
    burgerIcon.classList.remove("display-none");
    closeSearch();
    closeNavListItem();
    closeNavListSecondLevelItem();
}

//ОТКРЫТЬ ПОИСК
let navHeaderSearch = document.body.querySelector(".nav-header__search");
let navHeaderSearchFormWrapper = document.body.querySelector(".nav-header__search-form-wrapper");
let lang = document.body.querySelector(".lang");
let form = document.body.querySelector("form");

let langItems = document.body.querySelectorAll(".lang__item");

navHeaderSearch.addEventListener("click", openSearch);

function openSearch() {
    lang.classList.add("display-none");
    navHeaderSearchFormWrapper.classList.remove("display-none");
    navHeaderSearch.classList.add("display-none");
    form.style.width = "100%";
}

//ЗАКРЫТЬ ПОИСК
let navHeaderCross = document.body.querySelector(".nav-header__cross");
let navHeaderSearchForm = document.body.querySelector(".nav-header__search-form");

navHeaderCross.addEventListener("click", closeSearch);

function closeSearch() {
    lang.classList.remove("display-none");

    if (!langItems[0].classList.contains("display-none") && !langItems[1].classList.contains("display-none") && !langItems[2].classList.contains("display-none")) {
        for (let langItem of langItems) {
            langItem.classList.add("display-none");
        }
        langItems[0].classList.remove("display-none");
    }

    navHeaderSearchFormWrapper.classList.add("display-none");
    navHeaderSearch.classList.remove("display-none");
    navHeaderSearchForm.value = "";
    form.style.width = "";
}


//ВЫБРАТЬ ЯЗЫК
let langArrows = document.body.querySelectorAll(".lang__arrow");

lang.addEventListener("click", chooseLang);

function chooseLang(event) {
    if (langItems[0].classList.contains("display-none") || langItems[1].classList.contains("display-none") || langItems[2].classList.contains("display-none") ) {
        openLangMenu();
    }
    else {
        let target = event.target;
        if (target.classList.contains("lang__item")) {
            for (let langItem of langItems) {
                langItem.classList.add("display-none");
            }
            target.classList.remove("display-none");
            for (let langArrow of langArrows) {
                langArrow.classList.add("hidden");
            }
            target.lastElementChild.classList.remove("arrow-up");
            target.lastElementChild.classList.add("arrow-down");
            target.lastElementChild.classList.remove("hidden");
        }
    }
}

function openLangMenu() {
    for (let langItem of langItems) {
        langItem.classList.remove("display-none");
    }
    for (let langArrow of langArrows) {
        langArrow.classList.add("hidden");
    }
    langArrows[0].classList.remove("hidden");
    langArrows[0].classList.remove("arrow-down");
    langArrows[0].classList.add("arrow-up");
}


//АККОРДЕОН МЕНЮ ПЕРВЫЙ УРОВЕНЬ
let navList = document.body.querySelector(".nav-list");
let navListItems = document.body.querySelectorAll(".nav-list__item");
let target;

navList.addEventListener("click", openOrCloseNavListItem);

function openOrCloseNavListItem(event) {
    closeSearch();

    if (event.target.classList.contains("nav-list-second-level")) {
        return false;
    }
    else if (event.target.parentElement.classList.contains("nav-list-second-level")) {
        return false;
    }
    else if (event.target.parentElement.parentElement.classList.contains("nav-list-second-level")) {
        return false;
    }
    else if (event.target.parentElement.parentElement.parentElement.classList.contains("nav-list-second-level")) {
        return false;
    }

    else if (event.target.classList.contains("nav-list__item")) {
        target = event.target;
    }
    else if (event.target.parentElement.classList.contains("nav-list__item")) {
        target = event.target.parentElement;
    }
    else if (event.target.parentElement.parentElement.classList.contains("nav-list__item")) {
        target = event.target.parentElement.parentElement;
    }

    if (target.children.length === 1) {
        return false;
    }
    else if (target.lastElementChild.classList.contains("display-none")) {
        openNavListItem();
    }
    else {
        closeNavListItem();
    }

}


function openNavListItem(event) {
    for (let navListItem of navListItems) {
        navListItem.classList.add("display-none");
    }
    target.classList.remove("display-none");
    target.firstElementChild.lastElementChild.classList.add("display-none");
    target.firstElementChild.firstElementChild.classList.remove("display-none");
    target.lastElementChild.classList.remove("display-none");
}

function closeNavListItem(event) {
    for (let navListItem of navListItems) {
        navListItem.classList.remove("display-none");
    }

    target.firstElementChild.lastElementChild.classList.remove("display-none");
    target.firstElementChild.firstElementChild.classList.add("display-none");
    target.lastElementChild.classList.add("display-none");
    closeNavListSecondLevelItem();
}

//АККОРДЕОН МЕНЮ ВТОРОЙ УРОВЕНЬ
let navListSecondLevel = document.body.querySelector(".nav-list-second-level");
let targetSecondLevel;

navListSecondLevel.addEventListener("click", openOrCloseNavListSecondLevelItem);

function openOrCloseNavListSecondLevelItem(event) {

    if (event.target.classList.contains("nav-list-third-level")) {
        return false;
    }
    else if (event.target.parentElement.classList.contains("nav-list-third-level")) {
        return false;
    }
    else if (event.target.parentElement.parentElement.classList.contains("nav-list-third-level")) {
        return false;
    }
    else if (event.target.parentElement.parentElement.parentElement.classList.contains("nav-list-third-level")) {
        return false;
    }
    else if (event.target.parentElement.parentElement.parentElement.parentElement.classList.contains("nav-list-third-level")) {
        return false;
    }
    else if (event.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains("nav-list-third-level")) {
        return false;
    }

    else if (event.target.classList.contains("nav-list-second-level__item")) {
        targetSecondLevel = event.target;
    }
    else if (event.target.parentElement.classList.contains("nav-list-second-level__item")) {
        targetSecondLevel = event.target.parentElement;
    }
    else if (event.target.parentElement.parentElement.classList.contains("nav-list-second-level__item")) {
        targetSecondLevel = event.target.parentElement.parentElement;
    }

    if (targetSecondLevel.children.length === 1) {
        return false;
    }
    else if (targetSecondLevel.lastElementChild.classList.contains("display-none")) {
        openNavListSecondLevelItem();
    }
    else {
        closeNavListSecondLevelItem();
    }

}


function openNavListSecondLevelItem(event) {
    targetSecondLevel.firstElementChild.lastElementChild.classList.add("display-none");
    targetSecondLevel.firstElementChild.children[1].classList.remove("display-none");
    targetSecondLevel.lastElementChild.classList.remove("display-none");
}

function closeNavListSecondLevelItem(event) {
    targetSecondLevel.firstElementChild.lastElementChild.classList.remove("display-none");
    targetSecondLevel.firstElementChild.children[1].classList.add("display-none");
    targetSecondLevel.lastElementChild.classList.add("display-none");
}
