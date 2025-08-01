
function cout(text)
{
    console.log(text);
}

function print(text)
{
    console.log(text);
}


print("Hello world");
cout("Hello world");

/*
The data types of function parameters in JavaScript are not fixed. 
This is because JavaScript is a dynamically typed programming language,
in which the types of variables and parameters can change while the program is
running, as opposed to a statically typed language, in which the types of
variables and parameters are determined before the program is run.
*/

// Side Effect

// A side effect is anything a function does that makes a difference outside of
// the function itself, apart from returning a value.

// Side effects can be intended or unintended, 
// and include updating the value of a variable declared outside
// the function, modifying an array or object declared outside the function, or
// outputting a string to the console.

function add(x,y)
{
    console.log(x+y); // side effect
    return x + y;
}


// In JavaScript, functions are first-class citizens, which means they can be
// used like any other value, such as a number or a string.

// When a function is passed
// as an argument, it’s often referred to as a callback because the function it’s
// passed to is said to “call it back” by executing it.

function LLM(undefined)
{
    console.log("Hey! How can I help?");
}

console.log("AI:")
// passing function like a variable to another function
setTimeout(LLM, 2000); // sets a timeout of 2s 

// Function expressions
// A function expression, also known as a function literal, is a code literal
// whose value is a function, just as 123 is a literal whose value is the number
// 123. 

// Whereas a function declaration creates a function and binds it to a
// name, a function expression is an expression that evaluates to (returns) a
// function, for you to do with what you will.


let subtract = function (x,y){
    if(x > y)
    {
    return x - y
    }
    else{
        return y - x;
    }
}

console.log(subtract(2,3));


//  An arrow function is a
// more compact version of a function expression, and in most cases the
// choice between the two is purely stylistic. 


let add_ = (x,y) => {
    return x + y;
};

// concise body syntax is used for only one statement logic 

let greater = (x,y) => x > y;

console.log("10 > 20 ? ",greater(10,20));


let greet = () => {
    console.log("hey");
};

greet();


// rest parameter for passing more than one arguments

let fav_movie_list = (name, ...movies) => {
    console.log(`${name} likes ${movies}`);
};

function add_all(...Numbers){

    let sum = 0; 
    for(let number of Numbers)
    {
        sum += number;
    }
    return sum;
}

console.log(add_all(1,5,6,7,8,96));

// Higher order functions

// A higher-order function is a function that takes another function as an
// argument, or that outputs another function as its return value.

// filter, map and find methods of array


let numbers = [2,5,6,9,23];

// find: Returns the value of the first element in the array where predicate is true, and undefined otherwise.
console.log(numbers.find(num => num % 2 == 0));


// Returns the elements of an array that meet the condition specified in a callback function.
console.log(numbers.filter(num => num % 2 == 0));


// maps each element of the array to the callback function
console.log(numbers.map(x => x * x * x));


function calltwice(callback)
{
    callback();
    callback();
}

calltwice(greet);


// functions returning functions

function create_prompt(system_message)
{
    return function(user_instructions)
    {
        return system_message + user_instructions;
    };
}


let doctor_AI = create_prompt("Act like a doctor if you can answer medical queries.");
doctor_AI("Always provide a disclaimer to consult a real doctor.");