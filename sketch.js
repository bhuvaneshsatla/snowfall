const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var maxFlakes = 200;
var snowflakes=[];
var lit1;
var lit2;
var lit3;
var lit4;

function preload() {

    lit1 = loadImage("1.png");
    lit2 = loadImage("2.png");
    lit3 = loadImage("3.png");
    lit4 = loadImage("4.png");

}

function setup(){ 

    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    umbrellaObj = new umbrella(200, 550);

    for(var i = 0; i < maxFlakes; i++){

        snowflakes.push(new snow(random(10,390), random(10, 110)));

    }

}

function draw(){
    
    background("black");
    Engine.update(engine);

    umbrellaObj.display();

    rand = Math.round(random(1,4));

    if(frameCount % 80 === 0){

        litCreatedFrame = frameCount;
        lit = createSprite(random(10,390),random(10,60), 10, 10);
        lit.lifetime = 15;

        switch(rand){

            case 1:lit.addImage(lit1);
            break;
            case 2:lit.addImage(lit2);
            break;
            case 3:lit.addImage(lit3);
            break;
            case 4:lit.addImage(lit4);
            break;
            default:break;

        }

        lit.scale = random(0.3, 0.6);

    }

    for(var i = 0; i < maxFlakes; i++){

        snowflakes[i].display();
        snowflakes[i].update();

    }

    drawSprites();

}   

