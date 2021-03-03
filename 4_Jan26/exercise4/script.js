calculate2 = () => {
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    let solution = document.getElementById("solution");
    let phrase1 = (`Underweight`);
    let phrase2 = (`Normal or healthy weight`);
    let phrase3 = (`Overweight`);
    let phrase4 = ("Obese");
    let bmi = (weight) / ((height/100)**2);
    
    console.log(height);
    console.log(weight);
    console.log(bmi);

      if (bmi < 18.5) {
        status = (phrase1);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = phrase2;
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = phrase3;
    } else {
        status = (phrase4);
    }

    console.log(status);
    solution.textContent = status;
    interpretation.textContent = bmi
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

