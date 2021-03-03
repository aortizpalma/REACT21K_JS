let expectedResult;
/**
 * Task 1: You are provided with 2 arrays, firstArray, and secondArray
 * Make a new thirdArray, that contains elements of the firstArray, followed by 
 * elements of the secondArray.
 * Please don't do it manually :) 
 */

let firstArray = [1, 2, 3, 4, 'a', true, false];
let secondArray = ['hello', 'I', 'am', 'not', 'an', 'array', 'jkd']; 

expectedResult = [1, 2, 3, 4, 'a', true, false, 'hello', 'I', 'am', 'not', 'an', 'array', 'jkd'];

// Answer 1
let thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);


/**
 * Task 2: You are provided with an array of numbers
 * create another array that contains elements of the provided array, but in reverse order
 * do not use .reverse() method
 * Please don't do it manually :) 
 */

let fourthArray = [1, 500, 10000, 123456, 234, 500, 10000, 12345, 20000];

expectedResult = [20000, 12345, 10000, 500, 234, 123456, 10000, 500, 1];


//Answer 2
let fourthArray = [1, 500, 10000, 123456, 234, 500, 10000, 12345, 20000];

let newArray = [];
let i=fourthArray.length-1;

fourthArray.forEach( () => { 
    newArray.push(fourthArray[i]);
    i--;
})

console.log(newArray);


/**
 * Task 3: You are provided with an array that contains some duplicated elements
 * create another array that contains ONLY unique elements of the given array
 * the order of the new array isn't important
 * Please don't do it manually :) 
 */

let fifthArray = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 500, 10000, 12345, 20000, true, true, false, 'hello', 'world'];

expectedResult = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 12345, 20000, true, false];

// Answer 3
let fifthArray = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 500, 10000, 12345, 20000, true, true, false, 'hello', 'world'];

let newArray = [];
let i=fifthArray.length;

let orderedArray = [];
let finalArray = [];

orderedArray = fifthArray.sort();
console.log(orderedArray);

orderedArray.forEach( () => {
    if (orderedArray[i-1] === orderedArray[i-2]) {
        orderedArray.pop();
        i = i-1;
        console.log(`The updated orderedArray when a repeated item was found is ${orderedArray} and "i" = ${i}`);
    } else {
        debugger;
        finalArray.push(orderedArray[i-1]);
        orderedArray.pop();
        i = i-1;
        console.log(`The updated orderedArray when no repeated item was found is ${orderedArray} and "i" = ${i}`);
    }
    console.log(`The final array is: ${finalArray} and "i" = ${i}`)


})

// For some reason the script stops after filtering out all the words, having them included into the 'finalArray', throwing an UNDEFINED value when the counter "i" is still at 8.

 Adjusted solution ba Hoang:

let fifthArray = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 500, 10000, 12345, 20000, true, true, false, 'hello', 'world'];

let newArray = [];
let i=fifthArray.length;

let orderedArray = [];
let finalArray = [];

orderedArray = fifthArray.sort();
console.log(orderedArray);

orderedArray.forEach((el,index) => {
    if (el === orderedArray[index-1]) {
        console.log(`The updated orderedArray when a repeated item was found is ${orderedArray} and "i" = ${i}`);
    } else {
        finalArray.push(el);
        console.log(`The updated orderedArray when no repeated item was found is ${orderedArray} and "i" = ${i}`);
    }
    console.log(`The final array is: ${finalArray} and "i" = ${i}`)
})


*/




/**
 * Task 4: You are provided 2 arrays
 * write a logic that will compare elements of the 2 arrays to find out if they contain same elements
 * it is possible that the one of the array is a sub array of the other, in which case they shouldn't be considered as containing same elements
 * the order of elements in each array can be different
 * Please don't do it manually :) 
 */

// sixthArray and seventhArray should be considered as being similar
let sixthArray = [1, 2, 3, 'hello', true, false];
let seventhArray = ['hello', false, 1, 3, true, 2];

// eighthArray and ninthArray are not
let eighthArray = [1, 2, true, false, 'hello', 3, 'moi moi'];
let ninthArray = [];


// Answer 4-A

let sixthArray = [1, 2, true, false, 'hello', 3, 'moi moi'];
let seventhArray = [];

let array_1=[];
let array_2=[];

array_1 = sixthArray.sort();
array_2 = seventhArray.sort();

console.log(array_1);
console.log(array_2);

if (array_1===array_2) {
    console.log("The arrays are identical and contain the same elements.");
} else {
    console.log(`The arrays are different. The first array has ${array_1.length} elements and the second array has ${array_2.length}.`)
}
// The condition is identifying the arrays as different for some reason.


// Answer 4-B

let eighthArray = [1, 2, true, false, 'hello', 3, 'moi moi'];
let ninthArray = [];

let array_1=[];
let array_2=[];

array_1 = eighthArray.sort();
array_2 = ninthArray.sort();

console.log(array_1);
console.log(array_2);

if (array_1===array_2) {
    console.log("The arrays are identical and contain the same elements.");
} else {
    console.log(`The arrays are different. The first array has ${array_1.length} elements and the second array has ${array_2.length}.`)
}






/**
 * Task 5: The following array is nested (having array inside array)
 * you need to create a new array that will deconstruct the nested array so that it is no longer nested
 * the order isn't important
 * Please don't do it manually :) 
 */

let tenthArray = [
    'one', 'two', 'three', 1, 2, 3, false, 'false', [['oh oh'], [[['tom']], 'jerry'], ['not', 'again', ['yes', 'whynot?', true]]]
]

expectedResult = ['one', 'two', 'three', 1, 2, 3, false, 'false', 'oh oh', 'tom', 'jerry', 'not', 'again', 'yes', 'whynot?', true]


// Answer 5
let tenthArray = [
    'one', 'two', 'three', 1, 2, 3, false, 'false', [['oh oh'], [[['tom']], 'jerry'], ['not', 'again', ['yes', 'whynot?', true]]]
]

console.log(tenthArray[8]);



/**
 * Task 6: The array you are given contains all kinds of personal information
 * Filter out all email addresses into a separate array
 * Filter out all phone numbers into a separate array
 * Please don't do it manually :) 
 */

let peopleInfo = [
    'ron', '044 123 345', 'lonelyspider@email.com', 
    'hermione', '0123-414-443', 'hermione@email.com', 
    'harry', '(0123) 123 4324', 'ginnyforever@email.com'
];

let expectedNamesArray = ['ron', 'hermione', 'harry'];
let expectedPhones = ['044 123 345', '0123-414-443', '(0123) 123 4324']
let expectedEmails = ['lonelyspider@email.com', 'hermione@email.com', 'ginnyforever@gmail.com']


// Answer 6
/* 
Ideas for approaching:
- if a member has a numbers and not @, consider it as a phone number. If it has numbers and @ consider it as an email.
 */


// Check if the element is a string and contains @ and send to emails array.
// Check if 


/**
 * Task 7: The current array contains a sample text
 * use the .split(' ') method to split the paragraph to an array of words
 * iterate through the array of words, check if each word contain the letter 'o'
 * if it does, store a value of 1 to a newArray, otherwise 0
 * Please don't do it manually :) 
 * Example:
 * sample = ['Lorem', 'ipsum', 'dolor', 'sit']
 * result = [1, 0, 1, 0]
 * 
 */

const sample = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, soluta debitis reiciendis recusandae necessitatibus consequatur. Et odit quas quis, nulla sequi voluptatem, impedit optio, illo nihil at distinctio aliquid.';






// Other random tests:

[1,2,3,4,5].forEach((callbackName_elementValue, indexNumber, thirdParameter_arrayValues) => {
    console.log(`The element at the index is ${indexNumber} has the value of ${callbackName_elementValue} and third parameter is ${thirdParameter_arrayValues}`)
},this.[0])