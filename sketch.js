const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var hierro1;
var stone1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(300,100);
    hierro1 = new hierro(300,100);
    stone1 = new stone(420,100);
    rubber1 = new Rubber(200, 100, 100);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    hierro1.display();
    stone1.display();
    plane.display();
    hammer.display();
    rubber1.display();
   

    
 
}