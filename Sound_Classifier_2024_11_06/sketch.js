let label = "waiting...";
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/f3coGlzWV/';

function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
  singingBowlImg = loadImage('/assets/singing-bowl.png');
  thereminImg = loadImage('/assets/theremin.png');
}

function setup() {
  createCanvas(640, 520);
  classifyAudio();
}

function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);
  let emoji = "🎧";
  if (label == "Light Theremin") {
    emoji = "💡";
  } else if (label == "Singing Bell") {
    emoji = "🔔";
  } 

  textAlign(CENTER, CENTER);
  textSize(256);
  text(emoji, width / 2, height / 2);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
}
