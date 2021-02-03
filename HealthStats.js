
const userInfo = { name:"Mike", height:175, dob:new Date(1989, 0, 31), 
                       maxBpm: 188, weightGoal:85.0, waistGoal:95.5, dateGoal:new Date(2021,6,1) };

const stats = [  
                    {date:new Date(2021, 0, 25), weight:96.4, waist:106.5, kCal:0,    slept:true,   },

                    {date:new Date(2021, 0, 27), weight:97.2, waist:105.0, kCal:512,                },

                    {date:new Date(2021, 1, 1),  weight:99.1, waist:108.0, kCal:1150, slept:false,  },
                    {date:new Date(2021, 1, 2),  weight:99.0, waist:107.5,            slept:true,   },
                    
                    {date:new Date(2021, 1, 4),                            kCal:666                 },
                    {date:new Date(2021, 1, 5),  weight:98.9, waist:107.0,            slept:false,  },
            ];

console.log(JSON.stringify(stats));


/***** 
 * exercises 
*****/

/* Task 2: Then do whatever reports / analysis or so, with all the measurements you hard-coded above */

// userInfo = {} ///  Uncaught TypeError: Assignment to constant variable

// const userInfo = 20; //Uncaught SyntaxError: Identifier 'userifo' has already been declared

// var userInfo = 20; // SyntaxError: Identifier 'userInfo' has already been declared

// let userInfo = 20; //SyntaxError: Identifier 'userInfo' has already been declared


/*--- const can't be changed through reassignment, and it can't be redeclared!!! ---*/

if (userInfo) {
        // this is fine and creates a block scoped userInfo variable
        // (works equally well with let to declare a block scoped non const variable)
        let userInfo = {name: "noName"};

        console.log('Im the new Object with the following data: ' + Object.values(userInfo));
        
        // this gets hoisted into the global context and throws an error
        //var userInfo = {name: "you cant change name!"};
}
      
      // userInfo is still original one
console.log('Im the original Object with the following data: ' + Object.values(userInfo));

//userInfo = { surname: "Johnson" }; // Uncaught TypeError: Assignment to constant variable.

//userInfo.name = "Johnson";
//console.log('I can change the Object: ' + Object.values(userInfo));

/****---Complete list of JavaScript falsy values ----****/

if (false) {console.log("I can print " + Object.values(userInfo) )} //The keyword false.
else if (null) {console.log( "I can print " + Object.values(userInfo))}  // null	null — the absence of any value.
else if (undefined) {console.log( "I can print " +Object.values(userInfo))} // undefined — the primitive value.
else if (0) {console.log("I can print " + Object.values(userInfo))} // The Number zero and negative zero (so, also 0, -0, 0.0/-0.0, etc., 0x0/-0x0).
else if (0n) {console.log("I can print " + Object.values(userInfo))} // 0n, -0n	The BigInt zero and negative zero (so, also 0x0n/-0x0n).
else if (NaN) {console.log("I can print " + Object.values(userInfo))} // NaN — not a number.
else if ("") {console.log("I can print " + Object.values(userInfo))} // "", '', ``	Empty string value.
//else if (" ") {console.log("I can print " + Object.values(userInfo))} 
else {console.log("nothing happened")}

// One more is document.all - 	Objects are falsy if and only if they have the [[IsHTMLDDA]] internal slot.
// That slot only exists in document.all and cannot be set using JavaScript.


var workout = function(data){
        "use strict";
        let counter = 0;
        for (let i = 0; i < data.length; i++) {
            if(data !== null && data[i].kCal > 0) {
                counter++;
            }
        }
        console.log("There were " + counter + " workouts");
}
workout(stats);

// function that defines a function and returns that function (object)
var motivator = function (d) {
        "use strict";
        if(d===true) {
            return function(text) {
                console.log("It was a good " + text);
            };
        } else {
            return function(text) {
                console.log("It was a bad " + text);
            };
        }
    };
    
// calling both functions on one row:
motivator(true)(" day, " + userInfo.name);

var checkWorkout = function (_, stats) {
        "use strict";
        for(let i = 0; i < stats.length; i++) {
                if(stats[i].kCal) {
                        motivator(true)("day, " + userInfo.name);
                }
                else {
                        motivator(false)("day, " + userInfo.name);
                }
        }   
};

checkWorkout(stats, stats);


const {date, weight, waist, kCal, slept,} = stats[0];
console.log ("date is " + date + " and weight is " + weight  + " and waist is " + waist + " and kCal is " + kCal + " and does he slept? " + slept)
let array = [weight, waist, kCal]     
let array2 = [...array, ...array,];
let array3 = ["test", ...array,];
let array4 = [...array, "test",];   
console.log(array); 
console.log(array2); 
console.log(array3);
console.log(array4);

console.log('You forgot to sleep at ' + JSON.stringify(stats.filter(day => day.slept === false)));

var checkkCal = function(calories = 0) {
    stats.forEach(day => {                              
        if(day.kCal > calories) {
            console.log(day.date.toDateString() + ': You burned ' + (day.kCal + calories))
        }
    })
}

checkkCal();
checkkCal(100);
checkkCal(2000);





// Task 3: Turn the data into JSON and back and make sure it still is valid and same information
// Take a copy of than JSON as text. We usually need such JSON text (both format of the JSON and
// some data are needed) for tests anyway!

const statsJson = JSON.stringify(stats);
console.log("JSON is "+ statsJson);

const statsObj = JSON.parse(statsJson);
console.log(statsObj);
const iterator = statsObj.values();

for (const value of iterator) {
  console.log(Object.values(value));
}



/*------------------------------------------------------------------*/
/***---Teacher's material ---***/

// 2021-01-24  Juhani Välimäki
// ES5,6,7,(8,9) task prepping for the exam and the project
// Create a JS program, where you just use as many of the first exam features as you 
// can = learn them for the exam

// The business value of the app can be 0, as such, although some parts might become
// useful in th project.
// Create a UI if wish, or just play behind the scenes and print to 
// console and use debugger to see what happens in the memory

// First adhoc object, later maybe ES6 etc. class syntax
// e.g. class HealthStats later

// Pieces of info are markings, that might exist daily, or just for every 2-7 days
// With this info (Starting from most important, then more to allow more features/stats)

// * date - e.g. Date ,  with maybe no use for the hours in this case
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date - Maybe only day part
//   Good question: String in UI, Date in Front-end, What kind of String(?) in JSON, Date(?) in future Back-end, DATE(?) in RDB  

// * weight - Number, with one decimal, e.g. 96.4   (kg)   (0.1 kg accuracy)

// * waist - Number, maybe one decimal, e.g. 100.5   (cm)  (Half a centimeter accuracy)

// * kCal - Number, no decimal, e.g. 512     (kCal), amount of energy spent in exercise/sports

// * slept - Boolean,  true or fals,   meaning if the nightly sleep before the day was good/okay or not

// (Not here, but could be e.g. rest heart rate beats per minute - BPM )

// Now what could be information that is allowed to be missing is a "design decision", that 
// naturally affects the statistical analysis. E.g. clearly date cannot be missing. But kCal
// could be (then assuming no sports that day). Possibly also slept value (maybe assuming
// good sleep if not marked?).  
// Well, no anwers here, but good fuel for your design brain in general. Cases are never 100% straight forward
// For processing, if we decide so, the missing data could be assumed or interpolated there


// Tasks: 


// Task 1: (atm only think) This kind of case would require a lot of test data that would be similar 
// to real life data. E.g. weight will not jump like 50.3 kg, 55.4 kg, 49.9, and so on.
// It's easy for the person measured over time to create natural stats like this. 
// But think how could you create similar test data, like five years of authentic looking data
// without typing all in manually?    
// That's about 5*200*4 = 4 000 logical interconnected data points 
// (Test data generation is a typical challenge in our customer projects)


// Task 2: Then do whatever reports / analysis or so, with all the measurements you hard-coded above


// Task 3: Turn the data into JSON and back and make sure it still is valid and same information
// Take a copy of than JSON as text. We usually need such JSON text (both format of the JSON and
// some data are needed) for tests anyway!


// Task 4: If want to, start thinking how to generate data. JavaScript is not the best suited
// for that task, compared to e.g. Python. But if want, you can do with JavaScript as well. 