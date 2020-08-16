
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, rect1, rect2, rect3;
function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper();

	ground = new Ground(400, 680, 800, 20);

	rect1 = new Ground(450, 600, 20, 150);

	rect2 = new Ground(550, 600, 20, 150);

	rect3 = new Dustbin(500, 600, 150, 1);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  

  paper.display();
 
  ground.display();

  rect1.display();

  rect2.display();

  rect3.display();
}
function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body, paper.body.position,{x:40,y:-40});

}

}


