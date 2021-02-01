var car, wall;
var speed, weight,thickness;



function setup() {
 createCanvas(1920,1080);
  thickness = random(22,83)
  car = createSprite(50, 400, 50, 10);
  wall = createSprite(1000, 200,thickness, height);
  speed = random(55, 90);
  weight = random(400, 1500);
  car.velocityX = speed;
 car.shapeColor = "white" ; 

}





function draw() {
  background(0,0,0);

  if (hasCollided (car,wall))

  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / (thickness*thickness*thickness);
    if (deformation > 10) {

      wall.shapeColor = color(255, 0, 0);
      textSize(50);
      fill("red")
      text("rejected",50, 400);

    }

    
    if (deformation < 10) {

      wall.shapeColor = color(0, 255, 0);
      textSize(50);
      fill(0, 225, 0)
      text("Accepted", 50, 400);

    }









  }

  drawSprites();
}
function hasCollided (lcar,lwall){
 if (wall.x - car.x < (car.width + wall.width) / 2){
   
  return true ;
   
   
 } 
  
 return false; 
  
  
  
  
  
  
  
}






  



