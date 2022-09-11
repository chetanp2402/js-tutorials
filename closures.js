// simple closure example
function f(){
    var a = 28;
  
    
    // Closure is function bundled together 
    // with its lexical environment
    // e forms closure with f
    function e (){
        console.log(a);
    }
    e();
}

f();

// another closure example
function j(){
    var z = 28;
  
    function k (){
        console.log(z);
    }
    // if z is reassgned 100 then it will get printed
    //z= 100;
    return k;
}

// function j will be executed and popped from stack after this line
var l = j();


// still the value of a will be printed even when it is executed in diff execution context
// Function can now be executed independently of parent function and
// it still remembers the variables from parent function

l();
