
let x = 38;

if (x) {
    
}

else{

}

// else if

if (x) {
    
}

else if (!x){

}

else{

}

// while loop 

let i = 0; 
while(i != 3)
{
    console.log("*");
    i++;
}


// for loop 

for(let y = 0; y < 5; y++)
{
    for(let o = 0; o <=y; o++){
        console.log("^");
    }

    console.log("end of row");
}


// for of loops for looping over array elements

let fruits = ["apple","banana","orange","watermelon"];

for ( let fruit of fruits){
   console.log(`Fruit choice: ${fruit}`);
}

// for in loops for looping over the keys in an object 

let ig_acc = 
{
    name: "Himender",
    age: null,
    verified_user: null
};

for(let detail in ig_acc)
{
    console.log(detail);
}

// Note: for-in is strictly for keys in an object
// for of is strictly for array objects