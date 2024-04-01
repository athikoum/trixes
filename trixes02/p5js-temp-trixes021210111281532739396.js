let mic;
let fft;
let img;
let song;
let input;
let analyzer;
let playing = false;
var fade;
var fadeAmount =0.01;
let delay;

let amp;

let pg;

function preload() {
  song = loadSound('data/lizahair_01.mp3');
  img = loadImage('data/trixes.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();

  mic = new p5.AudioIn();
  mic.start();
input = new p5.AudioIn();
  input.start();
  reverb = new p5.Reverb();
  delay = new p5.Delay();
 reverb.process(input, 6, 0.2);
  reverb.amp(0.7);
   delay.process(input, 0.25 ,0.8, 300);
  amp = new p5.Amplitude();
  //delay.amp(8);
  amp.setInput(input);
  //fft = new p5.FFT(); // Initialize FFT for audio visualization
}

function draw() {
  background(200, 100, 50);

  // Analyze microphone input
  let vol = mic.getLevel();
  let col = map(vol, 0, 0.1, 0, 255);

  // Display image with tint based on microphone input
  tint(255, col); // Adjusted tinting to full white with variable alpha based on mic input
  image(img, 0, 0, width, height); // Adjusted image position and size to cover the entire canvas

  // Visualize audio frequencies using FFT
  //let spectrum = fft.analyze();
  //noStroke();
  //fill(255);
  //for (let i = 0; i < spectrum.length; i++) {
  //  let x = map(i, 0, spectrum.length, 0, width);
  //  let h = -height + map(spectrum[i], 0, 255, height, 0);
  //  rect(x, height, width / spectrum.length, h);
  //}

  // Display text
  textSize(20);
  textAlign(CENTER);
  fill(255);
  text("clap", width / 2, 50);
}
