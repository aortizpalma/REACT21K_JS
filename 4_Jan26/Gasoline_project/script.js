calculate2 = () => {
    let price = Number(document.getElementById("price").value);
    let money = Number(document.getElementById("money").value);
    let answer = document.getElementById("answer");
    let solution = document.getElementById("solution");
    let phrase1 = "Good, you can escape now!.";
    let phrase2 = "Oops, you have to stay here :(";
    let liters = money/price;
    
    console.log(price);
    console.log(money);
    console.log(money/price);

    answer.textContent = money/price;

    if (liters>=10) {
        status = phrase1;
    } else {
        status = phrase2;
    }

    console.log(status);
    solution.textContent = status;
}

/* Code example 2

function calculate() {
    // Example using querySelector
    // let price = Number(document.querySelector("#price").value);
    let price = Number(document.getElementById("price").value);
    let money = Number(document.getElementById("money").value);
    let answer = document.getElementById("answer");

    console.log(price);
    console.log(money);
    console.log(money/price);

    answer.textContent = money/price;

    // These two options also work but it is not a recommendede method
    // answer.innerHTML = money/price;
    // answer.innerText = money/price;
}

*/

/* Code example 1

function hello() {
    alert("Hello, my name is Alfonso.");
    requestName();
}

function requestName(){
    let yourName = prompt("What is your name?");
    greeting(yourName);
}

function greeting(x){
    document.write(x);

}

hello(); */

