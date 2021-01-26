
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

// const can't be changed through reassignment, and it can't be redeclared!!
// const z; 
//z = 25; // impossible!! Wrong way to declare const variable  Missing initializer in const declaration
const z = 25;
z = 13; // impossible!! Uncaught TypeError: Assignment to constant variable.
console.log(z);

