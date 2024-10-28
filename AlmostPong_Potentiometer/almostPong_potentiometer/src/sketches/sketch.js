export default function sketch(p5) {
  let ballX = 100;
  let ballY = 100;
  let ballXV = -4;
  let ballYV = 1;
  let rectX = 10;
  let rectY = 10;
  let lives = 3;
  let potValue = 512; // Initialize potValue with a middle value

  p5.setup = function() {
    p5.createCanvas(200, 200);
    p5.background(0);
    p5.noStroke();
    p5.fill(0, 255, 0);
  }
  
  p5.draw = function() {
    p5.background(0);
    setText();
    setShapes();
    bounceCheck();
    increment();
    scoreCheck();
    knobMoved();  // Use the potentiometer data to update rectY
  }

 function increment() {
  ballX += ballXV;  
    ballY += ballYV;
    if (p5.millis() % 1000 === 0) {
      ballXV *= 2;
    }
 }

 function knobMoved () {
    // Map potentiometer value to the canvas height
    rectY = p5.map(potValue, 0, 1023, 0, p5.height - 75);
  }

  function ball(x, y) {
    p5.ellipse(x - 2, y, 30, 30);
    p5.ellipse(x, y, 15, 15);
  }

function setShapes() {
    p5.fill(255);
    p5.rect(rectX, rectY, 20, 75);
    ball(ballX, ballY);
  }

 function sliderBounce() {
    if (rectY < ballY && rectY + 100 > ballY) {
      ballXV *= -1;
      lives += 1;
    }
  }

  function wallBounce() {
    ballXV *= -1;
  }

  function bounceCheck() {
    if (ballY < 0 || ballY > p5.height) {
      ballYV *= -1;
    }
    if (ballX < 40 && ballXV < 0) {
      sliderBounce();
    }
    if (ballX > p5.width && ballXV > 0) {
      wallBounce();
    }
    if (ballX < 0) {
      ballX = p5.width;
      lives -= 1;
    }
  }

  function scoreCheck() {
    if (lives === 0) {
      p5.noLoop();
      lives = "YOU LOSE";
    } else if (lives === 10) {
      p5.noLoop();
      lives = "YOU WIN";
    }
  }

  function setText() {
    p5.textAlign(p5.CENTER);
    p5.textSize(22);
    p5.text(lives, 10, 20);
  }

  // This function receives data from the parent component with potValue
  p5.updateWithProps = function(props) {
    if (props.potValue !== undefined) {
      console.log("p5 received new potValue:", props.potValue);
      potValue = props.potValue;
    }
  }
}