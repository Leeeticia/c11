var path, mainCyclist;
var runner1, runner2;
var pathImg, runner1Img, runner2Img
var leftBoundary

function preload(){
  pathImg = loadImage("path.png")
  runner1Img = loadImage("runner-1.png")
  runner1Img = loadImage("runner-2.png")
}

function setup(){
  createCanvas(400,400);
  path = createSprite(100,200);
  path.addImage(pathImg);
  path.velocityY = 5
  if(path.y > 400){
    path.y = height/2;
  }
  
  
  


  //crie sprite aqui
  runner1 = createSprite(70,200);
  runner1.addAnimation("runner-1.png", runner1Img)
  runner1.scale = 0.05
}



function draw() {
  background(0);
  

  drawSprites();
  runner1.x = World.mouseX
  
  
}

