var oi
function setup() {
  createCanvas(400,400);
oi=createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
drawSprites();
if (keyDown("right")){
  oi.velocityX=2
}
if (keyDown("left")){
  oi.velocityX=-2
}
if (keyDown("up")){
  oi.velocityY=-2
}
if (keyDown("down")){
  oi.velocityY=2
}
}




