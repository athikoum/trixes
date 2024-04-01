let input;
let analyzer;
let playing = false;
var fade;
var fadeAmount =0.01;
let delay;
let fft;
let amp;
let img;
let pg;
let song;

function preload(){
  song=loadSound ('data/lizahair_01.mp3');
  img=loadImage('data/trixes.jpg');}
function setup() {
  createCanvas (windowWidth, windowHeight);
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
  

  
  
  //revb.amp(0);
  fft = new p5.FFT(0.0); 
  




}

function draw() {
  background(200,100,50);
   let srt ='clap';
  text(srt, windowWidth/2,50,600,600,600);
  text.size(20);
  
 
 

  var vol = mic.getLevel();
  var col = map(vol, 0, 0.1, 0, 255);
  //fill(col);
  //ellipse(100, 100, 50, 50);
  image(img, windowWidth/2-250,windowHeight);
 tint (col);
}
