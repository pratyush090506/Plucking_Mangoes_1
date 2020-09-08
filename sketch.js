
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var boy1;
var stone1;
//var tree1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var launcher;
var ground1;

function preload()
{
	bg = loadImage("bg.jpg");
	Boy = loadImage("Boy.png");
	Tree = loadImage("tree.png");
	catapult1 = loadImage("catapult.png");
	clouds = loadImage("clouds.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	stone1 = new stone(160,430,30);

  //tree1 = new tree(950,300);

	mango1 = new Mango(850,250,30);
	mango2 = new Mango(920,160,30);
	mango3 = new Mango(900,210,30);
	mango4 = new Mango(1100,180,30);
	mango5 = new Mango(950,120,30);
	mango6 = new Mango(850,140,30);
	mango7 = new Mango(910,70,30);
	mango8 = new Mango(1100,250,30);
	mango9 = new Mango(1040,120,30);
	mango10 = new Mango(810,180,30);
	mango11 = new Mango(1010,50,30);
	mango12 = new Mango(1010,220,30);

	ground1 = new ground(600,590,1200,20);
    console.log (mango12)
	launcher = new Launcher(stone1.body,{x:180,y:442});
	
	Engine.run(engine);
  
}


function draw() {

  background(bg);
Engine.update(engine);
detectCollision(stone1,mango1);
detectCollision(stone1,mango2);
detectCollision(stone1,mango3);
detectCollision(stone1,mango4);
detectCollision(stone1,mango5);
detectCollision(stone1,mango6);
detectCollision(stone1,mango7);
detectCollision(stone1,mango8);
detectCollision(stone1,mango9);
detectCollision(stone1,mango10);
detectCollision(stone1,mango11);
detectCollision(stone1,mango12);
  strokeWeight(4)
  
  imageMode(CENTER);
image(Boy,252,430,200,300)
 
imageMode(CENTER);
image(Tree,950,300,420,600)

imageMode(CENTER);
image(catapult1,180,460,60,60)

imageMode(CENTER);
image(clouds,400,80,350,300);


  stone1.display();
  //tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

launcher.display();

ground1.display();

 



 drawSprites();


  
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();


}

function detectCollision(lstone,lmango){

	stoneBody=lstone.body.position;
mangoBody=lmango.body.position;

	var distance = dist(stoneBody.x,stoneBody.y,mangoBody.x,mangoBody.y);
	//console.log(lmango.body.position.x);
	if(distance<=50+lmango.r)
	{

		Matter.Body.setStatic(lmango.body,false);
	
	}
}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:180,y:442})
		launcher.attach(stone1.body);
	}
}