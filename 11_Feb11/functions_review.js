// Example of a "procedure" function. It's called 'procedure', 'void' or 'pure' function way because it doesn't calculate a result.
// If you add a calculation or a return boolean, then it is simply called a function.

function makeOmelette() {
    console.log('get a pan');
    console.log('get an egg');
    console.log('crack the egg');
    console.log('turn up the heat');
    console.log('take off the heat once');
}

makeOmelette()

// This isn't anymore a void function
function makeOmelette() {
    console.log('get a pan');
    console.log('get an egg');
    console.log('crack the egg');
    console.log('turn up the heat');
    console.log('take off the heat once');

    retrun true;
}

makeOmelette()

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function calculate(a,b) {
    return a+b;

}


const result = calculate()
console.log(`Result of the function is $${calculate}`)



// Review the app that reads numbers in text to improve it with functions