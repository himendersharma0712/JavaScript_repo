


// A Promise is a special JavaScript object representing an operation that hasn't completed yet but is expected in the future. 
// Promises make it easier to work with asynchronous operations like fetching data from an API, file reading, 
// or network requests

// States of a Promise:

// Pending: operation hasn’t finished yet.

// Resolved (Fulfilled): succeeded and has a value.

// Rejected: failed with an error.

let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done!'),2000);
});

p.then(result=> console.log(result));


fetch('https://api.com')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error',error));


// Async/await is modern JavaScript syntax built on top of Promises that lets you write code that looks synchronous but handles asynchronous operations “under the hood.”

async function fetchdata() {

    try{
        const response = await fetch("https:/google-api.com");
        const data = await response.json();
        console.log(data);
    }
    
    catch(error){
        console.error('Error: ',error);
    }
}


// fetchdata();