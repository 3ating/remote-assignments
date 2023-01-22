const welMessage = document.querySelector(".wel-message");
const btnIcons = document.querySelector(".btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");
const actionBtn = document.querySelector(".action-btn");
const hidedBox = document.querySelector(".box-container-hided");

welMessage.addEventListener("click", () => {
    welMessage.textContent = "Have a Good Time!";
});

btnIcons.addEventListener("click", () => {
    if (menuIcon.style.display !== "none") {
        menuIcon.style.display = "none";
        mobileMenu.style.display = "flex";
        closeIcon.style.display = "flex";
    } else if (menuIcon.style.display == "none") {
        menuIcon.style.display = "";
        mobileMenu.style.display = "none";
        closeIcon.style.display = "none";
    }
});

actionBtn.addEventListener("click", () => {
    if (hidedBox.style.display !== "none") {
        hidedBox.style.display = "flex";
    }
});
