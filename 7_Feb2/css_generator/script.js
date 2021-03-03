let form = document.querySelector("form");

let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let text = document.querySelector(".p_code");

let direction = document.querySelectorAll('input[name="direction"]');

const setGradient = (event) => {
    event.preventDefault();

    let selectedValue;

    for (const v of direction) {
        if (v.checked) {
            selectedValue = v.value;
        }
    }


    console.log("Wow, it is actually working");
    console.log(color1.value);
    console.log(color2.value);
    console.log(direction);
    console.log(selectedValue);

    document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value}`;
    
    text.textContent = `background-image: linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
}

form.addEventListener("submit", setGradient);

let header = document.getElementById("nav_a");


const scrollFunction = () => {    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.background = "#000000";
        header.style.height = "65px";
        header.style.padding = "3px";
        header.style.fontSize = "80%";

    } else {
        header.style.background = "transparent";
        header.style.height = "70px";
        header.style.padding = "20px";
        header.style.fontSize = "100%";
    }
}

window.addEventListener("scroll", scrollFunction);

