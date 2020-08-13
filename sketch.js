const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;
var hexagon, slingShot;
var score = 0;
function preload() {
   
}

function setup(){
createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(700,320,70,70);
    box2 = new Box(780,320,70,70);
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(780,240,70,70);
    
   

    box5 = new Box(740,200,70,70);
    box6 = new Box(850 , 350, 70,70);
    box7 = new Box(630,350,70,70);
    box8 = new Box(740 , 150 , 70,70);
    hexagon = new Hexagon(200,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hexagon.body,{x:200, y:50});
}

function draw(){
    background("white");
    text('x:'+ mouseX + 'y:'+ mouseY , mouseX , mouseY);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
   
    box5.display();
    box6.display();
box7.display();
box8.display();
    hexagon.display();
  
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
if(keyCode == 32){
    slingshot.attach(hexagon.body);
    Matter.Body.setPosition(hexagon.body , {x:200 , y:50});
}

}
