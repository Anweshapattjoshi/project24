
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1,line2,line3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	
      paper = new Paper(700,200,10);
       console.log(paper)
	Engine.run(engine);
  
}


function draw() {

  background(0);
  paper.display();
  
  drawSprites();
 
}



