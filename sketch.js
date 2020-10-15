var fixedRectangle;

var movingRectangle;




function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 100, 50);
  movingRectangle =   createSprite(600, 200, 50, 100);



  movingRectangle.debug = true;
  fixedRectangle.debug = true;
  
  fixedRectangle.shapeColor = "blue";
  movingRectangle.shapeColor = "blue";
}

function draw() {
  background(0,0,0);

  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

  if(fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 && movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 && fixedRectangle.y - movingRectangle.y < fixedRectangle.width/2 + movingRectangle.width/2 && movingRectangle.y - fixedRectangle.y < fixedRectangle.width/2 + movingRectangle.width/2){
    fixedRectangle.shapeColor = "red";
    movingRectangle.shapeColor = "red";
  }
  else {
    fixedRectangle.shapeColor = "blue";
    movingRectangle.shapeColor = "blue";
  }



  drawSprites();
}