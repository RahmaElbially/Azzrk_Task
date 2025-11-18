const burger = document.querySelector(".burger-icon");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});