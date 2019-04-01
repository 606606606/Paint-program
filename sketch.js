var penColor = [0, 0, 0];
var nextColor = newColor();
function setup() {
  frameRate(60);
  createCanvas(400, 400);
  background(220, 230, 255);
}

function draw() {
  stroke(1)
  fill(nextColor[0], nextColor[1], nextColor[2]);
  rect(100, 100, 20, 20);
  fill(255, 0, 0);
  rect(350, 10, 40, 40);
}
function newColor() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  return [r, g, b]
}


function mousePressed() {
  if ((mouseX > 100 && mouseX < 120) && (mouseY > 100 && mouseY < 120)) {
    penColor = nextColor;
    nextColor = newColor();
  } else if ((mouseX > 350 && mouseX < 390) && (mouseY > 10 && mouseY < 50)) {
    background(220, 230, 255);
  }
}
function mouseDragged() {
  fill(penColor[0], penColor[1], penColor[2], 100);
  noStroke()
  var pen = circle(mouseX, mouseY, 10, 10);
}
