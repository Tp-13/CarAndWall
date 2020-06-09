var car,wall;
var speed,weight;
var deformation

function setup() {
  createCanvas(1000,400);
  
  speed = random(55,90);
  weight = random(400,1500)

  car = createSprite(50,200,50,50)
  car.velocityX = speed;

  wall = createSprite(900,200,60,200)
}

function draw() {
  background(255,255,255);

  if (wall.x-car.x < car.width/2+wall.width/2){
    deformation = ((weight)*(speed)*(speed))/45000
    
    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
    
    if(deformation > 100 && deformation < 180){
      car.shapeColor = color(230,230,0);
    }
    
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }

    car.velocityX = 0;
    car.collide(wall);
} 



  drawSprites();
}