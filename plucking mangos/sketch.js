
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ground;
var tree;
var stone;

var boyImg,boy;
var mango1,mango2;

var launcher;
function preload()
{
	boyImg = loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350,600,width,20);
	tree = new Tree(550,355,500,500);
	

	boy = createSprite(120,540);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	stone = new Stone(100,100,20)

	launcher = new Launcher(stone.body,{x:70,y:486});

	mango1 = new Mango(500,300,30)
	mango2 = new Mango(600,200,30);

	Engine.run(engine);
  
}


function draw() {
  
  background("lightBlue");
  Engine.update(engine);
  rectMode(CENTER);
  
  ground.display();
  tree.display();
  
  launcher.display();
  stone.display();
  mango1.display();
  mango2.display();

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcher.fly();
}




