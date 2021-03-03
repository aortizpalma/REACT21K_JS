let number1, number2, number3, addition1, substraction11, division1, multiplication11;
number1 = prompt("Please enter a number");
number2 = prompt("Please enter a number");
number3 = prompt("Please enter a number");
number4 = prompt("Please enter a number");
number5 = prompt("Please enter a number");

addition1 = Number(number1)+Number(number2);
substraction1 = addition1-Number(number3);
division1 = substraction1/Number(number4);
multiplication1 = division1 *1 Number(number5)

alert(`The first number plus the second number equals ${addition1}. \n If we substract the third number from this addition, the result is ${substraction1}. \n This result, divided by the fourth number equals ${division1}. \n And finally, this last result multiplied by the fifth number equals ${multiplication1}.`);
