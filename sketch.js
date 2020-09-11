
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   engine = Engine.create();
	world = engine.world;
	ground = new Ground(200,height,1200,20);

	//Create the Bodies Here.
	

	  //Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  ground.display();


  drawSprites();
 
}



