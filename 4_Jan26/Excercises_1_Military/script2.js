let age = (prompt("What´s your age?"));
let result = "";

if (age<18){
    console.log("Too young!");
    result = "Too young!";
} else if (age >=18 && age<27){
    console.log("Right age for military service!");  
    result = "Right age for military service!";  
} else if (age >=27 && age<41){
    console.log("You are in reserve.");
    result = "You are in reserve."; 
} else if (age >=41 && age<55){
    console.log("You are in backup reserve.");
    result = "You are in backup reserve."; 
} else {
    console.log("Too old :(");
    result = ("Too old :("); 
}

console.log("The indicated age is " + age);
console.log("Result: "+ result);