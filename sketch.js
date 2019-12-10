var place;
var d = 100;

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);

  place = loadImage("PalazzoDucale.jpg");

  angleMode(DEGREES);

  noCursor();
}

function draw() {
  imageMode(CENTER);
  image(place,0, 0, windowWidth);
  //background(15, 3, 5);

  push();
  noStroke();
  translate(mouseX - width/2, mouseY - height/2);
  ambientLight(255);
  directionalLight(88, 163, 184, 0 , 1 , 0);
  specularMaterial(244, 187, 250);
  shininess(1);
  rotateY(map(mouseX, 0, width, 120, -120));
  rotateX(map(mouseY, 0, width, 120, -120));
  texture(place);
  textureWrap(CLAMP);
  sphere(d, 24, 24);
  if(mouseX < width/2 && mouseY < height/2 || mouseX > 3*width/4) {
    d = map(mouseX, 0, width/2, 100, 10);
  }
  pop();

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
