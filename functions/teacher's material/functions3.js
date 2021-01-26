/*jslint browser:true*/
/*global console*/

console.log("**************************************************");
console.log("********** functions 3 - default values **********");
console.log("**************************************************");

// Default parameter values for functions    -    Used if not enough arguments provided in call
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

var sum = function (num1, num2=3) {
    var result = num1 + num2;
    return result;
};

console.log(sum(4,11));         // Will print 15, and not use the default value 3

console.log(sum(4,3));          
// Did print 7, and not use the default value 3

console.log(sum(4));            
// Did also print 7, as missing(=undefined) num2 defaults to 3

console.log(sum(4,undefined))   
// Did also print 7, as undefinded num2 defaults to 3

console.log(sum(4,null));       
// Won't default to 3, but turned null into 0 => 4+0=4
// Why isn't this not using default value? 
// Hint: What was the case when default value used?

console.log("Put a break point here for stopping the debugger");
