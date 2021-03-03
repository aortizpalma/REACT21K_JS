const chooseNumber = (Math.round(Math.random()*100));

console.log(`The randon number is ` + chooseNumber);

let reminder = chooseNumber % 10;

let decimalBracket = (chooseNumber-reminder)/10;


console.log(`The number is in the bracket #`+ decimalBracket);
console.log(`The number has a reminder of ` + reminder + ` when divided by 10`);

let suffix1 = ("toista");
let suffix2 = ("kummenta");
let prefix1a = ("sata");
let suffix3 = ("sataa");
let suffix4 = ("tuhatta"); 


// This detects in which ten bracket the number is.
let decimalBracketText;

switch(decimalBracket){

    case 0:
        decimalBracketText = ("");
        break;

    case 1:
        decimalBracketText = ("");
        break;

    
    case 2:
        decimalBracketText = ("Kaksi");
        break;
    
    case 3:
        decimalBracketText = ("Kolme");
        break;
    
    case 4:
        decimalBracketText = ("Neljä");
        break;
    
    case 5:
        decimalBracketText = ("Viisi");
        break;
    
    case 6:
        decimalBracketText = ("Kuusi");
        break;
    
    case 7:
        decimalBracketText = ("Seitseman");
        break;

    case 8:
        decimalBracketText = ("Kädesään");
        break;            

    case 9:
        decimalBracketText = ("Yhdesään");
        break;

    case 10:
        decimalBracketText = ("Sata");
        break;
    } 
// This is a dialog to help verify that the right bracket was being selected.
    // console.log(decimalBracketText+" bracket text");

console.log("This is how the number is written in Finnish:");


// For the numbers 0-9
if (decimalBracket === 0) { 
    switch(reminder){
        
        case 1:
            console.log("yksi");
            break;
        
        case 2:
            console.log("kaksi");
            break;
        
        case 3:
            console.log("kolme");
            break;
        
        case 4:
            console.log("neljä");
            break;
        
        case 5:
            console.log("viisi");
            break;
        
        case 6:
            console.log("kuusi");
            break;
        
        case 7:
            console.log("seitseman");
            break;

        case 8:
            console.log("kädesään");
            break;            

        case 9:
            console.log("yhdesään");
            break;

        default:
            console.log("nolla");
            break;
        } 
  
    }

// For numbers 10-19
else if (decimalBracket === 1) { 
    switch(reminder){
        
        case 1:
            console.log("yksi"+suffix1);
            break;
        
        case 2:
            console.log("kaksi"+suffix1);
            break;
        
        case 3:
            console.log("kolme"+suffix1);
            break;
        
        case 4:
            console.log("neljä"+suffix1);
            break;
        
        case 5:
            console.log("viisi"+suffix1);
            break;
        
        case 6:
            console.log("kuusi"+suffix1);
            break;
        
        case 7:
            console.log("seitseman"+suffix1);
            break;

        case 8:
            console.log("kädesään"+suffix1);
            break;            

        case 9:
            console.log("yhdesään"+suffix1);
            break;

        default:
            console.log("kymmenen");
            break;
        } 
  
    }

// For numbers 20-100
        else if (decimalBracket=>2 && decimalBracket<10) { 
            switch(reminder){
                
                case 1:
                    console.log(decimalBracketText+suffix2+"yksi");
                    break;
                
                case 2:
                    console.log(decimalBracketText+suffix2+"kaksi");
                    break;
                
                case 3:
                    console.log(decimalBracketText+suffix2+"kolme");
                    break;
                
                case 4:
                    console.log(decimalBracketText+suffix2+"neljä");
                    break;
                
                case 5:
                    console.log(decimalBracketText+suffix2+"viisi");
                    break;
                
                case 6:
                    console.log(decimalBracketText+suffix2+"kuusi");
                    break;
                
                case 7:
                    console.log(decimalBracketText+suffix2+"seitseman");
                    break;
        
                case 8:
                    console.log(decimalBracketText+suffix2+"kädesään");
                    break;            
        
                case 9:
                    console.log(decimalBracketText+suffix2+"yhdesään");
                    break;
                
                case 10:
                     console.log(decimalBracketText);
                     break;
        
                default:
                    console.log(suffix2);
                    break;
                } 
          
else {
        console.log("something else");

    }    





