






document.write('bye bye');
document.write('<h1>bye bye</h1>');




/* 
const newEl = document.createElement (‘h2’);
newEl.innerText = 'Hello from H2';
newEl.id = 'message';
newEl.className = 'class1 class2';
newEl.classList.add('active');
newEl.classList.remove('class1');
document.body.appendChild(newEl);
 */



















// SET INTERVAL EXAMPLES


/* 
 setInterval(() => {
     console.log('hello from setInterval')
    },0);

    console.log('hello from outside of the interval'); */
    
    // clearInterval(intervalId)



// Sample setInterval and setTimeout    
/* let randomNumber = 0;
    
const timer = setInterval(()=>{
    console.log('hiiiiiii');
    randomNumber++
}, 500) //non-blocking code

    
setTimeout(()=>{
    console.log('after 2 seconds of delay');
    console.log('random number is', randomNumber);
    clearInterval(timer);
}, 2000) */

    
    
    
    
// Sample while loop    
    
/* let counter = 0;

while(counter<100) {
console.log('hello');
counter++;

} //blcoking code

console.log('bye'); */