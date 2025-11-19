const burger = document.querySelector(".burger-icon");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

window.addEventListener("load", () => {
    const slider = document.querySelector(".slider-container");
    slider.scrollLeft = 150;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    window.addEventListener("mouseup", () => {
        isDown = false;
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.2;
        slider.scrollLeft = scrollLeft - walk;
    });
});

