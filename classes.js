// A class is a template that defines properties and method
// for an object


// A constructor is used to initialize and object with properties

// for defining methods/functions of a class , we DONT use the function keyword
class Player{
    constructor(startX,startY)
    {
        this.x = startX;
        this.y = startY;
    }

    move(dx,dy)
    {
        this.x += dx;
        this.y += dy;
    }
}

// we create a new instance of a class by writin the new keyword
let player1 = new Player(0,0);

console.log(player1.x)

console.log(player1.y)

player1.move(8,9);

console.log(player1.x)

console.log(player1.y)



// Inheritance is how one class(child) can inherit the properties and methods
// of another class(parent)

class Actor{
    constructor(startX,startY){
        this.x = startX;
        this.y = startY;
    }

    move(dX,dY)
    {
        this.x += dX;
        this.y += dY;
    }
}

// we use the extend keyword
class MainPlayer extends Actor{
    constructor(startX,startY)
    {
        super(startX,startY); // super is used to initialize parent class's properties
        this.hp = 100;
    }

    get_position()
    {
        console.log(`Player position: (${this.x},${this.y})`);
    }
}


let player2 = new MainPlayer(0,5);
player2.move(6,5);
player2.get_position();


// instanceof keyword
console.log(player1 instanceof Player); // true
console.log(player2 instanceof MainPlayer); // true
console.log(player2 instanceof Actor); // true


// Prototype based inheritance (Former way of implementing inheritnce in JavaScript)

// A constructor function that creates and returns new objects
// We just use a regular standalone function not a class
// function, but its called using new keyword.

// A prototype is an example object that the constructor 
// uses as a model for the object it creates.

function Smartphone(name,cpu,ram)
{
    this.name = name;
    this.cpu = cpu;
    this.ram = ram;
}


// we cant use arrow functions here, because this refers to the file instance instead of object
Smartphone.prototype.device_info =  function ()
{
    console.log(`Name: ${this.name}\nCPU: ${this.cpu}\nRAM: ${this.ram}`)
}

let iphone12 = new Smartphone("iPhone 12","A14 Bionic",8);

// A javascript function is an object and has a property `prototype`
iphone12.device_info();

console.log(iphone12);

console.log(iphone12.__proto__)

console.log(Actor.__proto__)


// Prototype chain
// JS first looks on the object itself, then its looks on object's prototype
// then if not found, it checks the prototype's prototype
console.log(iphone12.hasOwnProperty("name"));



// overriding a method
let nordce5 = new Smartphone("OnePlus CE5","Dimensity 8350",8);

// this object's device info method overrides the original one
nordce5.device_info = function(){
    console.log(`Device Info:\nName: ${this.name}\nCPU: Mediatek ${this.cpu}\nRAM: ${this.ram} GB`)
}

// the object's own device info method takes precedence over prototype's device info method
nordce5.device_info();
iphone12.device_info();
