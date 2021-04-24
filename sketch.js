
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	


	paper=new Paper(100,600,10);
	ground=new Ground(400,600,800,20);
	leftSide=new Dustbin(550,20,20,100);
	rightSide=new Dustbin(670,620,20,100);
bottom=new Dustbin(610,660,100,20);
	
Engine.run(engine);


}

	function draw(){

  rectMode(CENTER);
  
  background(0);

  Engine.update(engine);

   paper.display();
  rightSide.display();
bottom.display();
  leftSide .display();
  ground.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
Matter.Body.applyforce(paper.body,paper.body.position,{
	x:15,
	y:-15
});		
	}
}