runProgram = () => {
    let number1 = (prompt("Enter a number"));
    let number2 = (prompt("Enter a number"));
    let number3 = (prompt("Enter a number"));

    let answer = document.getElementById("answer1");

    // let answer2 = document.getElementById("answer2");
    // let answer3 = document.getElementById("answer3");
    // let answer4 = document.getElementById("answer4");
    // let answer5 = document.getElementById("answer5");
    // let answer6 = document.getElementById("answer5");
    
    if ((number1 >= 0) && (number2 >= 0) && (number3 >= 0)) {
        let answer1 = (`The numbers you entered were `+number1+`, `+number2` and `+number3);
        let answer2 = (`When you add these numbers you get: ${number1+number2+number3}.`;
        let answer3 = (`When you multiply these numbers you get: ${number1*number2*number3}.`);
    } else if ((number1 < 0) && (number2 < 0) && (number3 < 0)) {
        let answer4 = ("You entered only negative numbers.");
    } else {
        let answer5 = (`The numbers you entered were `+number1+`, `+number2` and `+number3);
        let answer6 = (`When you add these numbers you get: ${number1+number2+number3}.`;
    }

    answer.textContent = answer1 + answer2 + answer3 + answer4 + answer5 + answer6

}


runProgram();