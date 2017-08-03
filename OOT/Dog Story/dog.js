function Dog(name, size, color){
    this.name = name;
    this.size = size;
    this.color = color;
}

Dog.prototype.bark = function(){
    console.log(this.name + " bark!");
}

Dog.prototype.showState = function(){
    console.log("Dog State[Size:"+this.size +
                ", Color:"+this.color+"]");
}

Dog.prototype.draw = function(x, y){
    fill(this.color);
    ellipse(x, y, this.size, this.size);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(30);
    text(this.name, x, y);
}

