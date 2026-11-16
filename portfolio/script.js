
// ==============================
// 1. MOBILE MENU
// ==============================

const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");

// OPEN AND CLOSE MOBILE MENU
menuButton.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A NAVIGATION LINK
const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");

        menuButton.textContent = "☰";
    });
});

// CLOSE MENU WHEN SWITCHING TO DESKTOP WIDTH
window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
        nav.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");

        menuButton.textContent = "☰";
    }
});

// ==============================
// 2. LIGHT / DARK MODE
// ==============================

const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-mode");

    themeButton.textContent = isLight ? "☾" : "☀";

    themeButton.setAttribute(
        "aria-label",
        isLight ? "Switch to dark mode" : "Switch to light mode"
    );
});
