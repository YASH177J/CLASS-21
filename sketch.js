var fixedRect, movingRect,rect3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 rect3=createSprite(200,100,50,20)
 rect3.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,rect3)){
    movingRect.shapeColor = "red";
    rect3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    rect3.shapeColor = "green";
  }
  drawSprites();
}














