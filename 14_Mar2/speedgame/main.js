let scoreDisplay = document.getElementById("scoreDisplay");
scoreDisplay.textContent = 0;

let resultBox = document.getElementById("gameOverMessage");
console.log(resultBox);

let score = ""; // used to keep/show the score of the game
let activeNumber = ""; // used to select which circle number is active
let oldActiveNumber; // used to keep track of the previous circle number active and prevent repeating the number in a row
let adjustFactor = 0; // used to adjust the speed of the interval refreshing the active number.
let baseSpeed; // used to name/store the set interval function

console.log(`this is the initial value of the activeNumber variable: ${activeNumber}`)

// This changes the start/stop button and calls the necessary funcitons to start or stop the game
function startStopGame() {
    let startStopButton = document.querySelector(".startStop").innerHTML;
    console.log(startStopButton);

    if (startStopButton == "Start game") {
        startStopButton = document.querySelector(".startStop").innerHTML = "Stop game";
        gameStart();
        
        
    } else if (startStopButton == "Stop game") {
        startStopButton = document.querySelector(".startStop").innerHTML = "Play again";
        gameOver();
    }
        
    else {
        gameReset();
    }



    function gameStart() {

        // Random number generator function from W3 Schools (https://www.w3schools.com/js/js_random.asp)
        function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        }


        // This function defines an active number using the random number generator function and retruns it, so it can be used by other functions.
        function getActiveNumber () {

            if (activeNumber == "") {

                activeNumber = "circ"+getRndInteger(1,4);
                console.log(`This is the activeNumber log: ${activeNumber}`);
                
                // When a timer has ended, this function should be called again to generate a new active number. IT IS NOT ACTIVE HERE YET AS IT'S FILLING THE MEMORY AND CRASHING THE APP.
                // speedControl();

                return activeNumber;
                
            } else {
                oldActiveNumber = activeNumber;
                let newActiveNumber = "circ"+getRndInteger(1,4);
                console.log(`This is the newActiveNumber log: ${newActiveNumber}`);

                if (newActiveNumber == oldActiveNumber) {
                    getActiveNumber();
                } else {
                    activeNumber = newActiveNumber;
                }

                // When a timer has ended, this function should be called again to generate a new active number. IT IS NOT ACTIVE HERE YET AS IT'S FILLING THE MEMORY AND CRASHING THE APP.
                // speedControl();

                return activeNumber;
            }

        }


        // This function is used to adjust the style of the circles to add the highlight class to the active circle. IT ISN'T YET ACTIVE AS NEEDS TO BE FIXED.
        function setCircleColor() {
            console.log(`This is activeNumber inside setCircleColor: ${getActiveNumber()}`);
/*             elem = document.querySelector(`${activeNumber}`);
            console.log(`elem is ${elem}`); */
/*             let element = document.querySelector(`${activeNumber}`);
            console.log(`this is how element looks in setCircleColor: ${element}`);
            element.classList.add("highlight");

            resultBox = document.getElementById("gameOverMessage").style.visibility='hidden'; */


        }
        setCircleColor();



        // This fucntion will define the time interval for refreshing the active number. Currently it is ONLY being called ONCE and needs to be integrated in the logic to run again.

        function speedControl(adjustFactor) {
            baseSpeed = setInterval(getActiveNumber(),1000000-adjustFactor);
            
            console.log(`testing if speedControl is executed`);
            // clearInterval(baseSpeed);
            // speedControl();
        }
        speedControl();

        // function to detect wich button ID was clicked. It gets part of the ID passed as a parameter inside the parenthesis, i.e. (1), (2), etc.

        clickButton = (Num) => {
            let buttonNum = "circ"+Num;
            let clicked = document.getElementById(`${buttonNum}`).value;
            console.log(clicked);
            updateScore(activeNumber,clicked);
            adjustFactor = adjustFactor-500;
            console.log(`The adjustedFactor is ${adjustFactor}`);
        }


        function updateScore(activeNumber,clicked) {
            console.log(`activeNumber is ${activeNumber} and clicked is ${clicked}`);
            if (activeNumber == clicked) {
                console.log(`This is the previous score ${score}`);
                score++;
                console.log(`This is the updated score ${score}`);
                scoreDisplay.textContent = score;

        /*         activeNumber=0;
                console.log(`This is activeNumber after a correct click: ${activeNumber}`); */
            
                console.log(`This is activeNumber after a correct click, and running getActiveNumber again: ${getActiveNumber()}`);

            } else {
                console.log("Wrong number");
                gameOver();
            }    
        }


        
    }
        // This function should change the visibility attribute of the popup CSS class from "hidden" to "visible" and show the score in the scoreDisplay field. 
        function gameOver() {
            console.log(`The gameOver function is being executed.`);
            resultBox = document.getElementById("gameOverMessage").style.visibility='visible';
            scoreDisplay2.textContent = score;
        }

        // This function resets the values to the original state and hides the result box.
        function gameReset() {
            startStopButton = document.querySelector(".startStop").innerHTML = "Start game";
            console.log("The game will be reset");
            activeNumber = "";
            score = 0;
            scoreDisplay.textContent = score;
            resultBox = document.getElementById("gameOverMessage").style.visibility='hidden';
        }




}