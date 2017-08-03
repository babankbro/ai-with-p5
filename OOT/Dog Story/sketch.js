var dogA;
var dogB;

function setup(){
    var size = 100;
    var color = 'red';
    dogA = new Dog("Dog A", size, color);
    dogA.bark();
    dogA.showState();

    dogB = new Dog("Dog B", 2*size, "green");
    dogB.bark();
    dogB.showState();
    createCanvas(500, 500);
}

function draw(){
    background(100, 100, 100);

    dogB.draw(100, 100);
    dogA.draw(300, 300);
    
}