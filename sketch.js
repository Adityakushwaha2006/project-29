var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,rec,rope,hex;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

    hex= new Hex(50,400,30,30);
ground= new Ground(500,500,300,30);
box1= new Box(400,300,50,50);
box2= new Box(450,300,50,50);
box3= new Box(500,300,50,50);
box4= new Box(550,300,50,50);
box5= new Box(600,300,50,50);
box6= new Box(450,250,50,50);
box7= new Box(500,250,50,50);
box8= new Box(550,250,50,50);
box9= new Box(475,200,50,50);
box10= new Box(525,200,50,50);
box11= new Box(500,150,50,50);
rec =new Ground(50,400,2,2);
rope= new Chain(hex.body,rec.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(90,10,0);

 box1.display();
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
rec.display();
hex.display();
rope.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 rope.fly();
}



