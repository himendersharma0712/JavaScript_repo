
// let canvas = document.querySelector("#canvas");
// let ctx = canvas.getContext("2d");
// ctx.fillStyle = "blue";
// ctx.fillRect(10,10,200,100);


let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to draw a random rectangle
function drawRandomRect(){
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let width = Math.random() * 100 + 20;
  let height = Math.random() * 50 + 20;
  ctx.fillStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
  ctx.fillRect(x, y, width, height);
}

// Draw 50 random rectangles
for(let i = 0; i < 50; i++){
  drawRandomRect();
}
