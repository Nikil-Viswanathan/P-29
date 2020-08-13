class Hexagon{
    constructor(x , y){
        var options = {
            restitution: 0.8,
    
            density: 1.2
        }
        this.body = Bodies.rectangle(x , y , 25 , 25 , options );
        this.width = 25;
        this.height = 25;
        this.image = loadImage("bird.png")
        World.add(world , this.body);
    }
display(){
    push();
    translate(this.body.position.x , this.body.position.y);
    rotate(this.body.angle);
    
    imageMode(CENTER);
    image(this.image , this.body.position.x , this.body.position.y,50,50);
    pop();
}
     
}
    
    
