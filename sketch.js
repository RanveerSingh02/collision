var fixrect , movingrect;

function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  fixrect.shapeColor="blue"
  movingrect=createSprite(200, 100, 100, 50);
  movingrect.shapeColor="blue"
  fixrect.debug=true;
  movingrect.debug=true;

//25+50=75

}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixrect.x);
  if(movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2&&fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2
    &&movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2&&fixrect.y-movingrect.y<movingrect.height/2+fixrect.height/2){


      movingrect.shapeColor="green"
    fixrect.shapeColor="green"


  }
  else{

    movingrect.shapeColor="blue"
    fixrect.shapeColor="blue"


  }
  drawSprites();
}
