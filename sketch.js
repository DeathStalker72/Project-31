const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop;
var thunderbolt1img,thunderbolt2img,thunderbolt3img,thunderbolt4img;
var walking1img,walking2mg,walking3img,walking4img,walking5img,walking6img,walking7img,walking8img;
var maxDrops=100;

function preload(){
   thunderbolt1img=loadImage("images/thunderbolt/1.png");
   thunderbolt2img=loadImage("images/thunderbolt/2.png");
   thunderbolt3img=loadImage("images/thunderbolt/3.png");
   thunderbolt4img=loadImage("images/thunderbolt/4.png");
   walking1img=loadImage("images/Walking Frame/walking_1.png");
   walking2img=loadImage("images/Walking Frame/walking_2.png");
   walking3img=loadImage("images/Walking Frame/walking_3.png");    
   walking4img=loadImage("images/Walking Frame/walking_4.png");
   walking5img=loadImage("images/Walking Frame/walking_5.png");
   walking6img=loadImage("images/Walking Frame/walking_6.png");
   walking7img=loadImage("images/Walking Frame/walking_7.png");
   walking8img=loadImage("images/Walking Frame/walking_8.png");
}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    drop = new Drops(50,50);
    for(var i=0; i<maxDrops; i++){
       drop.push(new Drops(random(0,400)), random(0,400));
   }
    
}

function draw(){
    background(0);
    Engine.update(engine);
    drop.display();
}   

