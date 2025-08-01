let primes = [1,5,7,11];
console.log(primes);

console.log(primes[3]);

// Arrays are zero indexed

// Array methods

// Appends new elements to the end of an array
primes.push(13);

// Inserts new elements at the start of an array, and returns the new length of the array.
primes.unshift(3)

// Removes the last element from an array and returns it
let popped_val = primes.pop()

// Removes the first element from an array and returns it
let shifted = primes.shift()



// The original arrays remain unchanged because, unlike
// the other methods we’ve looked at so far, concat isn’t a mutating method.

let evens = [2,4,8,16];

let even_n_primes = evens.concat(primes)

console.log("The index of 4 is",evens.indexOf(4))

// The original arrays remain unchanged because, unlike
// the other methods we’ve looked at so far, concat isn’t a mutating method.

// Turning an array into a string

console.log("Alright there's ",evens.join(" and "), "in the evens array hehe.");

// more array methods

// includes 
console.log(primes.includes(13)); // checks if the value is in the array
console.log(primes.reverse()); // reverses the elements in the array
console.log(primes.sort()); // sorts the array
console.log(primes.slice(1,3)); // slices the arr , start and end arg must be provided
console.log(primes.splice(1)) // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.