calculate2 = () => {
    let hours = Number(document.getElementById("hours").value);
    let hourlyRate = Number(document.getElementById("hourlyRate").value);
    let extraHours1 = "";
    let extraHours2 = "";
    let extraHoursTotal = "";
    let normalHours = "";

    let solution = document.getElementById("solution");
  
    console.log(hours);
    console.log(hourlyRate);
    
    if (hours > 7) {
        extraHoursTotal = hours-7;
        normalHours= hours-extraHoursTotal;
            if (extraHoursTotal>2) {
                extraHours2 = extraHoursTotal -2;
                extraHours1 = extraHoursTotal - extraHours2;
            } else {
                extraHours1 = extraHoursTotal;
            }    
    } else {
        normalHours=hours;
    }
    
    console.log(normalHours);
    console.log(extraHours1);
    console.log(extraHours2);
    
    let total1 = hourlyRate * normalHours;
    let total2 = (hourlyRate*1.5) * extraHours1;
    let total3 = (hourlyRate*2) * extraHours2;

    solution.textContent = total1+total2+total3;
    totalRate1.textContent = total1;
    totalRate2.textContent = total2;
    totalRate3.textContent = total3;
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

