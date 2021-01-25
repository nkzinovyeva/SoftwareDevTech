
console.log("********************************************");
console.log("*********** variables and scopes ***********");
console.log("********************************************");

/* var declarations, wherever they occur, are processed before any code is executed. 
This is called hoisting,*/ 


var y = 1; // global scope variable
let x = 1; // block scope variable

function varTest() { //scope of a var  is the entire enclosing function
    var y = 'dog';
    {
      var y = 'cat';  // same variable!
      console.log(y);  // Output: 'cat'
    }
    console.log(y);  // Output: 'cat'
}
varTest();

function letTest() { //scope of a let is in the block for which it is declared
    let x = 'parrot';
    {
      let x = 'rabbit';  // different variable
      console.log(x);  // Output: 'rabbit'
    }
    console.log(x);  // Output: 'parrot'
}
letTest();

/* declare a variable without assigning the value.
In such a case, the variable will be initialized with a value of undefined */
let height;
console.log(height); // Output: undefined
height = 165;
console.log(height); // Output: 165

/* combination of var and let declaration below is a SyntaxError 
due to var being hoisted to the top of the block */
/*
let price = 100;
{
  var price = 200; // SyntaxError for re-declaration
}
*/

/** Consequently, after the first line, x === undefined && y === 'A', hence the result. */
var c = d, d = 'A';
console.log(c + d); // Output: undefinedA




/*
// Two global variables https://developer.mozilla.org/en-US/docs/Glossary/Scope 
var a;         // variable defined, value undefined
var b = 3;     // variable defined, value defined
//var f;       // This would fix the implicit global scope var prob   = G

// Function definition (~function creation)
function variable_foo(c, d) {
    "use strict";
    var e;   // variable would be _hoisted_ here anyway
    // c and d are function parameters, i.e. function-scope   =  F   (GF)
    // variables that might get value from caller
    // https://developer.mozilla.org/en-US/docs/Glossary/Hoisting 
    // "Planned Parameters" c and d

    // c = c + 3; // you could use the parameter variable as any local var
    e = c + d;    // e is a function-scope variable
    console.log("e: " + e);

    f = e * 2;    // f is _implicit_ global scope variable f (Bad!!!)
    // Of course 'var f;' could be written in another file.
    // But all in all we _try_ to avoid using global scope variables.
    
    f2 = 7;   // Another implicit global scope var created (even if in func!)

    console.log("f: " + f);
    c = 7;
}

a = 6;


f = 15;     // This is bad coding, (implicit global scope var)
console.log("f after function definition:" + f);

// Function call (~invocation, execution) happens after all definitions
// 
variable_foo(a, b);        // "Actual Arguments" values of a and b
console.log("f after function call:" + f);
// c = 11;  // This is an error! Undeclared/undefined 'c'
// e = 13;  // This is an error! Undeclared/undefined 'e'


/*  Example of how VARIABLE HOISTING sometimes makes things tricky:

nameX = "Joe";      // implicit global scoped 'var'
                    // example would work same if here: var nameX = "Joe";

func zoo() {
                               // <= here _hoisted_: var nameX;
    nameX ="Mike"              // thus this refers to f-scoped, not global

    for(var i=0; i<10; i++) {
        var nameX = "Sue";         // this will become actually:  nameX = "Sue";
    }
}

zoo();

*/
