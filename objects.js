// objects store value in a key value pair 
// each key has a specific value

// objects are usually used to store multiple pieces of
// information about a single entity.


let dictionary = {
    "apple": "a red colored sweet fruit",
    "banana": "a yellow fruit which is sasuage like in shape"
};

console.log(dictionary["apple"])

// we use dot notation with non string keys
dictionary.orange = "An orange colored fruit which contains seeds and slices";

// we can change the value of a string key as follows
dictionary["apple"] = "a red colored sweet fruit which grows on trees";


console.log(dictionary);

// Returns the names of the enumerable string properties and methods of an object.
console.log(Object.keys(dictionary));

// Returns an array of key/values of the enumerable own properties of an object
console.log(Object.entries(dictionary));

// Combining objects 

let physical = {pages:208, binding: "Hardcover"};
let contents = {genre:"Fiction",subgenre:"Mystery"};

let book = {};
Object.assign(book,physical,contents);
console.log(book);


// nesting objects

let movies = [
    {
        genre:"horror",
        titles:["IT","Smile","The Substance"]
    },
    {
        genre:"action",
        titles:["Mission Impossible","M3GAN 2.0"]
    }
];

console.log(movies[0].titles[2]);


// nesting with variables 

let penny = {name: "Pennywise"};
let art = {name:"Art"};
let joker = {name:"Joker"};


let clowns = [penny,art,joker];


console.log(clowns[1].name, " the clown");


// nested object

let parent = {
    child: {name: "Aaron",type:"human"}
}

// Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
console.log(JSON.stringify(parent));
