
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var slingShot;
function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1100,440,500,500);

	ground = new Ground(800,690,3200,10);

	stone = new Stone(240,520);

	mango1 = new Mango(1100,300);
	mango2 = new Mango(930,370);
	mango3 = new Mango(1140,270);
	mango4 = new Mango(1260,290);
	mango5 = new Mango(1000,340);
	mango6 = new Mango(1200,330);
	mango7 = new Mango(1070,360);
	mango8 = new Mango(1050,250);

	slingShot = new SlingShot(stone.body,{x:230,y:530});

	

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();
  ground.display();
  stone.display();
  

  image (boy,300,600,250,250);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  slingShot.display();
  detectollision(stone,mango1);
  console.log(mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  
  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX ,y: mouseY})
}



function mouseReleased() {
    slingShot.fly();
}



function detectollision(stone,mango){
	var posStone = stone.body.position
	var posMango= mango.body.position

	var distance = dist(posStone.x,posStone.y,posMango.x,posMango.y)
	if(distance<-mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}

