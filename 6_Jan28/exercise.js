//1. To create the array with 5 elments and random numbers between 0 and 1:

// Approach 1

let chosenNumbers = [];

chosenNumbers[0] = Math.floor(Math.randon()*2);
chosenNumbers[0] = Math.floor(Math.randon()*2);
chosenNumbers[0] = Math.floor(Math.randon()*2);
chosenNumbers[0] = Math.floor(Math.randon()*2);
chosenNumbers[0] = Math.floor(Math.randon()*2);

console.log(chosenNumbers);

// Approach 2.

while(true) {
    chosenNumbers[counter] = Math.floor(Math.random()*2);

    counter = counter + 1;
    
    if (counter === 5){
        break;
    }
}

console.log('The value of the counter after the creation loop: ', counter);

// 2. Create a while loop, that goes through each element in teh Array, check if they are 1 or 0

while(true) {

    counter = counter+1;

    if (chosenNumbers[counter] === 1) {
        console.log('found a 1');
    } else {
        console.log('found a 0');
    }

    if (counter === 0) {
        break;
    }

}
console.log(chosenNumbers)


// 3. Also create a counter variable to keep track of the number of 1 and 0 values in the array (how many of each number are there)

let oneCounter = 0;
let zeroCounter = 0;

while (counter) {
    counter = counter -1;

    if (chosenNumbers[counter]===1) {
        oneCounter++;
    } else if (chosenNumbers[] === 0) {
        zeroCounter++;
    }
}

console.log(`Fonund ${oneCounter} ones and ${zeroCounter} zeroes`);


// 4. If the number of 1s is 5, announce the jackpot prize
// 5. If the number of 0s is 5, announce the congrat message
// 6. If the number of 1s is 3 < x < 5, announce smaller prize

if (oneCounter === 5) {
    console.log('Jackpot')
} else if (zeroCounter === 5) {
    console.log('No win but very lucky');
} else if (oneCounter > 3 && oneCounter < 5 ){
    console.log('Smaller prize')
} else {
    console.log('Not lucky, no win either.')
}

// 7. Create a while loop that will run the above application for an undefinite number of time, and only break out of the loop if the jackpot prize is won.
// 8. Create a variable to keep track of many rounds have been played in order to win the jackpot (this is in the last part of this code)



let winningStatus = false;
let roundPlayed=0;

while(true) {
    roundPlayed++;

    // game logic in points 1-7 goes here

    if (winningStatus){
        break;
    }
}

console.log(`${roundPlayed} played until a jackpot is won`);

// 9. If each round costs 50 cents, run the above program 5 times, either manually or use a while loop to help you, in order to learn the average amount of money you have to spend on winning a jackpot 😄

let costOfOneRound = 0.50;

console.log(`${roundPlayed*costOfOneRound} EUR was spent to win the jackpot`)

// 10. Increase the random number range to be any number between 0 - 5, run the program on number 9 again to see how much money you would actually have to spend to win a jackpot
Instead of having a fix number in the radomizer change to a variable radmonsizeRange which can be updated from 5, 6, etc to 9.

cosnt RANDOMIZED_RANGE = 6;

let chosenNumbers = [];
let counter = 0;

while (counter < 5) {
    chosenNumber[counter] = Math.floor(Math.random()*RANDOMIZED_RANGE);
    counter++
}

// Review answers with full code here: https://gist.github.com/phamt6/46f7ec2117dd90c430a488cd6a623793


// 11. If the jackpot prize was 30000 EUR, how much profit/loss do you make? 
