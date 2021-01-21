// Code for number 1
let chosenNumber1 = Math.round(Math.random() * 1);

if (chosenNumber1 === 1) {
    console.log ('The first random number is 1');
                }
else {
console.log ('The first random number 0');
}

// Code for number 2
let chosenNumber2 = Math.round(Math.random() * 1);

if (chosenNumber2 === 1) {
    console.log ('The second random number is 1');
                }
else {
console.log ('The second random number 0');
}

// Code for number 3
let chosenNumber3 = Math.round(Math.random() * 1);

if (chosenNumber3 === 1) {
    console.log ('The third random number is 1');
                }
else {
console.log ('The third random number 0');
}

// Code for number 4
let chosenNumber4 = Math.round(Math.random() * 1);

if (chosenNumber4 === 1) {
    console.log ('The fourth random number is 1');
                }
else {
console.log ('The fouth random number 0');
}

// Code for number 5
let chosenNumber5 = Math.round(Math.random() * 1);

if (chosenNumber5 === 1) {
    console.log ('The fifth random number is 1');
                }
else {
console.log ('The fifth random number 0');
}

// Jacpot calculation and messaging.
let jackpot = (chosenNumber1+chosenNumber2+chosenNumber3+chosenNumber4+chosenNumber5);

switch(jackpot) {
    case 5:
        console.log("Congratulations! You've won the jackpot!"+`There was a probability of ${1/2**5} for winning it! You got lucky!`);
        break;
    case 0:
        console.log("Almost congratulations! You found five zeros, which is really difficult to do! Unfortunately, you didn't win anything.");
        break;
    default:
        console.log("Thanks for playing! Try again some other time.");
        break;

}
