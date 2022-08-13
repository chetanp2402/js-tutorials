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
// simple closure example
function j(){
    var z = 28;
  
    
    // Closure is function bundled together 
    // with its lexical environment
    // e forms closure with f
    function k (){
        console.log(z);
    }

    return k;
}

var l = j();

console.log(l);
