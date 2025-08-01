// The DOM (Document Object Model) is a programming interface for web documents. 
// It represents the structure of an HTML or XML document as a tree of objects, where each node is an element, attribute, or piece of text. 

document.title = "Learn JS DOM";

let heading = document.getElementById("main-heading");
heading.innerText = "JavaScript DOM";

let about = document.getElementById("about_js_dom");
about.innerText = "The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, where each node is an element, attribute, or piece of text. ";

// for css editing 
let about_js = document.querySelectorAll(".about_js");
about_js[0].textContent = "POOF! 💀💀💀";


// Event handling 

// add event listener listens for events and performs an action defined by a js function
heading.addEventListener("click", () => {
    console.log("heading was clicked!")
});


let btn = document.getElementById("btn");
btn.addEventListener("click",() => {
    document.title = "GOOFY JS";
    heading.innerText = "DORA THE EXPLORER";
});



document.querySelector("html").addEventListener("keydown",
    e => {
        console.log(e);
    }
);




document.querySelector("html").addEventListener("mousemove",
    e => {
        console.log(`mousemove x: ${e.clientX}, y: ${e.clientY}`);
    }
);