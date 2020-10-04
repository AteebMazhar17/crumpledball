
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box, box1, box2,ground;
var engine, world;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 400);

	
	engine = Engine.create();
	world = engine.world;

	box=new DustbinClass(1100,345,200,20);
	box.shapeColor="white";

	box1=new DustbinClass(1000,305,20,100);
	box1.shapeColor="white";
	
	box2=new DustbinClass(1200,305,20,100);
    box2.shapeColor="white";

	ground= new Ground(420,370,1800,20);
	ground.shapeColor="yellow";

	Matter.Bodies.circle(56, 46, 10);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  ball.display();
  ellipseMode(CENTER);
  fill(100);
  ellipse(50, 50, 30, 30);
  drawSprites();
 
}



