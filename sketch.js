var fixed,moving;

function setup() {
  createCanvas(800,400);
 fixed=createSprite(400, 200, 50, 50);
 fixed.shapeColor="red";
moving=createSprite(400,100,20,20);
moving.shapeColor="white";
}

function draw() {
  background(0);  
  moving.x=World.mouseX
  moving.y=World.mouseY
  if(moving.x-fixed.x<moving.width/2+fixed.width/2&&
    fixed.x-moving.x<moving.width/2+fixed.width/2&&
    moving.y-fixed.y<moving.height/2+fixed.height/2&&
    fixed.y-moving.y<moving.height/2+fixed.height/2){
    
    fixed.shapeColor="green";
    moving.shapeColor="green";
  }
else{
  fixed.shapeColor="red"
  moving.shapeColor="white"
}
  drawSprites();
}