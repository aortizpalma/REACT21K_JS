
function ageCheck = () => {
    let age = Number(document.getElementById("age").value);
    let result = document.getElementById("result");
    let answer="";

    if (age<18){
        console.log("Too young!");
        answer = "Too young!";
    } else if (age >=18 && age<27){
        console.log("Right age for military service!");  
        answer = "Right age for military service!";  
        } else if (age >=27 && age<41){
            console.log("You are in reserve.");
            answer = "You are in reserve."; 
            } else if (age >=41 && age<55){
                console.log("You are in backup reserve.");
                answer = "You are in backup reserve."; 
        } else {
        console.log("Too old :(");
        answer = ("Too old :("); 
    }
    
    let result = document.getElementById("result");
    let age = document.getElementById("age");

    result.textContent = answer;

}