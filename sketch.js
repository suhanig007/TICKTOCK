var hr
var mn
var sc
var scAngle
var hrAngle
var mnAngle
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(255, 255, 255);
  translate(200,200)
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES)
  scAngle = map(sc, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(250, 0, 0)
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  push();
  rotate(mnAngle);
  stroke(180, 0, 0)
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();
  push();
  rotate(hrAngle);
  stroke(213, 213, 0)
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();
  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()
  stroke(255,0,0)
  arc(0,0,300,300,0,scAngle)
  
}