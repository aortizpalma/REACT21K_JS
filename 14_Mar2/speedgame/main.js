let scoreDisplay = document.getElementById("scoreDisplay");
scoreDisplay.textContent = 0;

// Random number generator from W3 Schools (https://www.w3schools.com/js/js_random.asp)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
let activeNumber = "circ"+getRndInteger(1,4);
console.log(activeNumber);

// function to detect wich button ID was click. It gets part of the ID passed as a parameter inside the parenthesis, i.e. (1), (2), etc.

clickButton = (No) => {
    let buttonNo = "circ"+No;
    let clicked = document.getElementById(`${buttonNo}`).value;
    console.log(clicked);
    updateScore(activeNumber,clicked);
}


function updateScore(activeNumber,clicked) {
    console.log(`activeNumber is ${activeNumber} and clicked is ${clicked}`);
    if (activeNumber == clicked) {
        console.log(`This is the previous score ${score}`);
        score++;
        console.log(`This is the updated score ${score}`);
        score.textContent = score;
    } else {
        console.log("Wrong number");
    }    
}

