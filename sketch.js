var pcNotMovingAnimation,pcMovingAnimation;
var pc;
function preload()
{
   pcMovingAnimation = loadAnimation('./assets/pc_static.png','./assets/pc_static2.png')
}
function setup() 
{
  createCanvas(600, 700);

 pc=new Player(200,200);
//  pc.charecter.addAnimation("static",pcMovingAnimation);
//  pc.charecter.scale = 0.5

 
}

function draw() {
  background("black");
  pc.display()
  drawSprites();
}

