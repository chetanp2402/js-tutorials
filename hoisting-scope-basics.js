// variable initialized in global space
var c = 10;
 

// Function call will give output due to hoisting 
//even if function is called on a line before the line
// on which it is actually written

f();  // function code is already present in execution context as it is created during memory creation phase


var d = 15;

// var variable is used before initialization will be undefined
console.log(a); // variable used before initialization
var a= 7;

// using let before initialization is not allowed
// hoisting occurs for let variable as well but it is
// scoped in Script object and not tied to the global object

//console.log(b); // this code will throw reference error
let b = 5;

console.log(b);

console.log(a);

function f(){
    var a = 14;

    // variable a will be first searched in executing function
    // and then in upper lexical environments                                   
    console.log(a)
    function e(){
        // if c variable is not present in executing function
        // it is checked in parent lexical envitonment
        // till all env are checked i.e. till window object
        console.log(c);

        // variable d is declared after function call f
        // so it will be undefined                                
        console.log(d);
    }
    e();
}



console.log('Hello JS Folks')


