// This is only an example of the first version of the project to show where I got stuck.

// const NUMBER_OF_BULBS = 20;
let NUMBER_OF_BULBS = Number(prompt("How many bulbs you want in the game?"));
let DELAY = 500;
const WINNING_BULB_INDEX = 10; // Math.round(Math.random() * NUMBER_OF_BULBS);

let counter = 0;
let arrayOfBulbs = [];

//creating the bulbs
while(counter < NUMBER_OF_BULBS) {
    const newEl = document.createElement('div');
    newEl.className = 'bulb';
    document.getElementById('bulbs').appendChild(newEl);

    arrayOfBulbs[counter] = false;
    counter++;
}


counter = 0;
bulbs[WINNING_BULB_INDEX] = true;
document.getElementsByClassName('bulb')[WINNING_BULB_INDEX].classList.add('chosen');



// reset the pointer back to the first bulb
counter = 0;
arrayOfBulbs[counter] = true; // initial bulb
document.getElementsByClassName('bulb')[counter].classList.add('active');


intervalId = setInterval(() => {
    //switch off the current bulb
    arrayOfBulbs[counter] = false;
    document.getElementsByClassName('bulb')[counter].classList.remove('active');

    //unless it is already the last bubl
    if (counter < NUMBER_OF_BULBS - 1) {
        counter++; //get the next bubl in the array
    } else {
        counter=0; //reset
    }

    arrayOfBulbs[counter] = true;
    document.getElementsByClassName('bulb')[counter].classList.add('active');

    console.clear();
    console.log(arrayOfBulbs);

},DELAY);

stop = () => {
    clearInterval(intervalId)
    document.getElementsByClassName('bulb')[counter].classList.add('selected');

    if (document.querySelector('.active.chosen') /*&& counter === CHOSEN_BULB_INDEX*/) {
        alert('won');
    } else {
        alert('No win');
    }

}




gameSpeed = () => {
    DELAY = Number(document.getElementById("speed").value);
}



//Addition of difficulty radio butttons
let difficulty = document.querySelectorAll('input[name="difficulty"]');
console.log(difficulty);

let setDifficulty = () => {
    DELAY=difficulty;
}



/* let setDifficulty = () => {
    console.log("Wow, it is actually working");

form.addEventListener("submit", setDifficulty); */














//SNIPET TO ARRANGE THE BULBS

/* 
const arrangeItems = nodes => {   
    const radius = '12em',
        start = -90,
        $els = [...nodes],
        numberOfEls = $els.length,
        slice = 360 / numberOfEls,
        index = 0;

    $els.forEach((el, i) => {
        const rotate = slice * i + start;
        const rotateReverse = rotate * -1;

        el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    })
}

arrangeBulbsInACircle(document.getElementsByClassName('bulb')); */