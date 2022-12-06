function setup() {
  createCanvas(800,800);
 }
 function draw() {
     if (mouseIsPressed) {
     stroke(random(0,200),random(0,200),random(0,200), random(50,70));
     strokeWeight(random(1,12));
       fill(random(175,400),random(175,400),random(175,400));
     rect(mouseX, mouseY, random(10,60), random(10, 60));
 }
 }
   function doubleClicked() {
   save("myImage.png");
 }

