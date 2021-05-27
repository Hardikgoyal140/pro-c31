const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const  Body = Matter.Body;

var  divisons = [];
var divisonHeight = 300;
var particles= [];
var plinkos = [];

function preload(){

}








function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world= engine.world;

  ground = new Ground(400,690,800,20);


  for (var i = 0; i<=width; i = i+80){
    divisons.push(new divisons(i,height-divisonHeight/2,10,divisonHeight));
  }

  for (var j=75;j<=width;j = j+50){
    plinkos.push(new Plinko (j,75));
  }

  for (var j=50;j<=width-10;j = j+50){
    plinkos.push(new Plinko (j,175));
  }

  for ( var j = 75; j<=width; j=j+50 ){
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50;j<=width-10;j=j+50){
    plinkos.push (new Plinko(j,375));
  }

  //for()

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);  


  drawSprites();

  
}