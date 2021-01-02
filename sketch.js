var fixedRect, movingRect;
var gameobject1,obg2,ob3,obg4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject = createSprite(100,100,50,50);
  gameobject.shapeColor = "green";
  obg2 = createSprite(200,100,50,50);
  obg2.shapeColor = "green";
  obg3 = createSprite(300,100,50,50);
  obg3.shapeColor = "green";
  obg4 = createSprite(400,100,50,50);
  obg4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (istouching(movingRect,obg3)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }
  drawSprites();
}

function istouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
      return true;
      
 
}
else {
  return false;
 
}
}