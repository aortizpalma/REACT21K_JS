calculate2 = () => {
    let number1 = Number(document.getElementById("number1").value);
    let solution = document.getElementById("solution");
 
    
    console.log(number1);
    
    let evenOrOdd = ""; 
    
    if (number1%2 > 0) {
        evenOrOdd = "even";
    } else {
        evenOrOdd = "odd";
    }
    
    let phrase1 = (`The number you entered was `+ number1 +`. It is positive and it is an`+evenOrOdd+` number.`);
    let phrase2 = (`Please enter a positive number`);

    if (number1 > 0) {
        status = (phrase1);
    } else {
        status = (phrase2);
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

