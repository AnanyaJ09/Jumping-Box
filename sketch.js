var canvas;
var music;
var block1, block2, block3, block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(70, 570, 200, 30);
    block1.shapeColor = "blue";

    block2 = createSprite(280, 570, 200, 30);
    block2.shapeColor = "yellow";

    block3 = createSprite(490, 570, 200, 30);
    block3.shapeColor = "red";

    block4 = createSprite(700, 570, 200, 30);
    block4.shapeColor = "green";
    
    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 6;
}

function draw() 
{
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box

    if(ball.isTouching(block1) && ball.bounceOff(block1))
    {
        ball.shapeColor = "blue";
    }

    if(ball.isTouching(block3) && ball.bounceOff(block3))
    {
        ball.shapeColor = "red";
    }

    if(ball.isTouching(block4) && ball.bounceOff(block4))
    {
        ball.shapeColor = "green";
    }

    if(ball.isTouching(block2))
    {
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        //music.play();
    }


    drawSprites();
}