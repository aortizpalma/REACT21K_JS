let buttonMobile = document.getElementById("mobileButton");
// let mobileDropdownButton = document.getElementsByClassName("mobile-dropdown-item");

const mobMenu = () => {
    document.getElementById("mobile-menu").classList.toggle("show");
}

buttonMobile.addEventListener("click", mobMenu);

// mobileDropdownButton.addEventListener("click", mobMenu);



