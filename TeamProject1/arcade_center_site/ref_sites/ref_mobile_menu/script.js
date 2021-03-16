let header = document.querySelector("header");
// let buttonBackTotop = document.getElementById("backtotop") ----used with event listener otpon
let buttonMobile = document.getElementById("mobileButton");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");


window.onscroll = function () {
    headerFunction();
    scrollFunction()
}


const headerFunction = () => {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        header.classList.add("bg");
    } else {
        header.classList.remove("bg");
    }

}


mybutton = document.getElementById("backToTop");

function scrollFunction() {
    if(document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
            nav.classList.remove = "responsive";
        } else {
            mybutton.style.display = "none";
        }
}

window.onclick = function() {topFunction()};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


const mobMenu = () => {
    nav.classList.toggle("responsive");
    // for (let i = 0; i < links.length; i++) {
    //     links[].addEventListener("click", mobMenu);
    // }

}

buttonMobile.addEventListener("click", mobMenu);










// header function which modifies the html
/* function headerFunction() {
    if (document.body.scrollTop > 100||
        document.documentElement.scrollTop > 100
    ) {
        header.style.backgroundColor = "#2424248e";
        header.style.color = "#fff";
        header.style.padding = "1rem";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.color = "#000";
        header.style.padding = "2rem";
    }

} */