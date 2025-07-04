const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class", 
        isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000, 
};

//header container
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
    ...scrollRevealOptions,
    delay: 500,
});

//srvice container
ScrollReveal().reveal(".service__card", {
    ...scrollRevealOptions,
    interval: 500,
});

//price container
ScrollReveal().reveal(".price__card", {
    ...scrollRevealOptions,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});


