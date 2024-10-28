let prevSecond = -1;
let r, g, b; // Variables to store the random color values

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noStroke();
  
}

function draw() {
  background(0);
  translate(300, 300);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  let currentSecond = sc;
  
  // If the second has changed, update the color
  if (currentSecond !== prevSecond) {
    r = random(255);
    g = random(255);
    b = random(255);
    prevSecond = currentSecond; // Update the previous second
  }

  // Set the fill color to the new random color
  fill(r, g, b, random);
  arc(0, 0, 600, 600, 0, sc * 6, PIE);

push();
  rotate(90);
  textSize(400);
  fill('white');
  text(hr, -200, 0);
  if (mn < 10) {
    text('0' + mn, -200, 300);
  }
  else {
    text(mn, -200, 300);
  }
  pop();
  
}


