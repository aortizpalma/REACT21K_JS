calculate2 = () => {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let number3 = Number(document.getElementById("number3").value);

      let solution = document.getElementById("solution");
    let phrase1 = (`The numbers you entered were `+number1+`, `+number2+` and `+number3+`.`);
    let phrase2 = (`When you add these numbers you get: ${number1+number2+number3}.`);
    let phrase3 = (`When you multiply these numbers you get: ${number1*number2*number3}.`);
    let phrase4 = ("You entered only negative numbers.");
    let phrase5 = (`The numbers you entered were `+number1+`, `+number2+` and `+number3+`.`);
    let phrase6 = (`When you add these numbers you get: ${number1+number2+number3}.`);

    // let liters = number1+number2+number3;
    
    console.log(number1);
    console.log(number2);
    console.log(number3);

      if (number1 >= 0 && number2 >= 0 && number3 >= 0) {
        status = (phrase1+`\n`+phrase2+`\n`+phrase3);
    } else if (number1 < 0 && number2 < 0 && number3 < 0) {
        status = phrase4;
    } else {
        status = (phrase5+`\n`+phrase6);
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

