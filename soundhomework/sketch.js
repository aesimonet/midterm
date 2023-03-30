let imageWidth=0;
let amplitude;
let rms1, rms2, rms3, rms4, rms5, rms6, rms7, rms8
let beat1, beat2, beat3, electric, piano, bass, trumpet


// image coordinates and width/height


//record 1      ( rms1 )
let beat1x = 200;
let beat1y = 40;
let beat1Width = 125;
let beat1Height = 125;


//record 2      ( rms2 )
let beat2x = 590;
let beat2y = 40;
let beat2Width = 125;
let beat2Height = 125;


//record 3     ( rms3 )
let beat3x = 975;
let beat3y = 40;
let beat3Width = 125;
let beat3Height = 125;


//electric guitar     ( rms4 )
let electricx = 160;
let electricy = 380;
let electricWidth = 170;
let electricHeight = 170;


//drums       ( rms5 )
let drumsx = 530;
let drumsy = 380;
let drumsWidth = 250;
let drumsHeight = 180;


//bass guitar      ( rms6 )
let bassx = 935;
let bassy = 375;
let bassWidth = 230;
let bassHeight = 170;


//piano      ( rms7 )
let pianox = 328;
let pianoy = 205;
let pianoWidth = 260;
let pianoHeight = 190;


//trumpet       ( rms8 )
let trumpetx = 800;
let trumpety = 200;
let trumpetWidth = 200;
let trumpetHeight = 220;




function preload() { 

    // images
  record1 = loadImage('/soundhomework/images/record1.png')
  record2 = loadImage('/soundhomework/images/record2.png')
  record3 = loadImage('/soundhomework/images/record3.png')
  drumsPic = loadImage('/soundhomework/images/drums.png')
  electricPic = loadImage('/soundhomework/images/electric.png')
  pianoPic = loadImage('/soundhomework/images/piano.png')
  bassPic = loadImage('/soundhomework/images/bass.png')
  trumpetPic = loadImage('/soundhomework/images/trumpet.png')

    // sounds
  beat1 = loadSound('/soundhomework/sounds/beat1.mp3')
  beat2 = loadSound('/soundhomework/sounds/beat2.mp3')
  beat3 = loadSound('/soundhomework/sounds/beat3.mp3')
  electric = loadSound('/soundhomework/sounds/electricguitar.mp3')
  piano = loadSound('/soundhomework/sounds/piano.mp3')
  drums = loadSound('/soundhomework/sounds/drums.mp3')
  bass = loadSound('/soundhomework/sounds/bass.mp3')
  trumpet = loadSound('/soundhomework/sounds/trumpet.mp3')

}


function setup() {
  createCanvas(windowWidth, windowHeight)

  analyzer1 = new p5.Amplitude()      // record 1
  analyzer1.setInput(beat1)

  analyzer2 = new p5.Amplitude()      // record 2
  analyzer2.setInput(beat2)

  analyzer3 = new p5.Amplitude()      // record 3
  analyzer3.setInput(beat3)
  
  analyzer4 = new p5.Amplitude()      // electric guitar
  analyzer4.setInput(electric)

  analyzer5 = new p5.Amplitude()      // piano
  analyzer5.setInput(piano)

  analyzer6 = new p5.Amplitude()      // drums
  analyzer6.setInput(drums)

  analyzer7 = new p5.Amplitude()      // bass
  analyzer7.setInput(bass)

  analyzer8 = new p5.Amplitude()      // trumpet
  analyzer8.setInput(trumpet)

}


function draw() {

  // setting rms values for analyzer

  let rmsValue1 = analyzer1.getLevel()    // record 1
  let rmsValue2 = analyzer2.getLevel()    // record 2
  let rmsValue3 = analyzer3.getLevel()    // record 3
  let rmsValue4 = analyzer4.getLevel()    // electric guitar
  let rmsValue5 = analyzer5.getLevel()    // piano
  let rmsValue6 = analyzer6.getLevel()    // drums
  let rmsValue7 = analyzer7.getLevel()    // bass
  let rmsValue8 = analyzer8.getLevel()    // trumpet
 

  background(40)    //record holder color
  rect(0, 200, windowWidth, windowHeight-200)   //record holder
  fill(120, 210, 160, 50)   //amplitude color
  stroke(200, 120, 255)


  //  amplitude ellipses behind objects
  ellipse(beat1x + 62, beat1y + 62, 100 + rmsValue1 * 450, 100 + rmsValue1 * 450)
  ellipse(beat2x + 62, beat2y + 62, 100 + rmsValue2 * 450, 100 + rmsValue2 * 450)
  ellipse(beat3x + 62, beat3y + 62, 100 + rmsValue3 * 450, 100 + rmsValue3 * 450)
  ellipse(electricx + 110, electricy + 110, 10 + rmsValue4 * 400, 30 + rmsValue4 * 400)
  ellipse(pianox + 125, pianoy + 100, 50 + rmsValue5 * 450, 50 + rmsValue5 * 450)
  ellipse(drumsx + 125, drumsy + 90, 30 + rmsValue6 * 500, 30 + rmsValue6 * 500)
  ellipse(bassx + 62, bassy + 100, 10 + rmsValue7 * 450, 30 + rmsValue7 * 450)
  ellipse(trumpetx + 100, trumpety + 120, 10 + rmsValue8 * 450, 10 + rmsValue8 * 450)


  fill(120, 100, 200, 55)   //background color


  //images of the instruments
  image(record1, beat1x, beat1y, beat1Width, beat1Height)        //record 1
  image(record2, beat2x, beat2y, beat2Width, beat2Height)      //record 2
  image(record3, beat3x, beat3y, beat3Width, beat3Height)        //record 3
  image(drumsPic, drumsx, drumsy, drumsWidth, drumsHeight)         //drums
  image(electricPic, electricx, electricy, electricWidth, electricHeight)    //electric guitar
  image(pianoPic, pianox, pianoy, pianoWidth, pianoHeight)        //piano
  image(bassPic, bassx, bassy, bassWidth, bassHeight)         //bass guitar
  image(trumpetPic, trumpetx, trumpety, trumpetWidth, trumpetHeight)       //trumpet


}


function mousePressed() {

// record 1 audio
  if ((mouseX > beat1x) &&
    (mouseX < (beat1x + beat1Width)) &&
    (mouseY > beat1y)  &&
    (mouseY < (beat1y + beat1Height))) {
   if (beat1.isPlaying()) {
    beat1.stop()
  } else {
    beat1.play()
    beat1.loop()
  }}


// record 2 audio
  if ((mouseX > beat2x) &&
    (mouseX < (beat2x + beat2Width)) &&
    (mouseY > beat2y)  &&
    (mouseY < (beat2y + beat2Height))) {
   if (beat2.isPlaying()) {
    beat2.stop()
  } else {
    beat2.play()
    beat2.loop()
  }}


// record 3 audio (get better beat 3 audio this one sucks)
if ((mouseX > beat3x) &&
    (mouseX < (beat3x + beat3Width)) &&
    (mouseY > beat3y)  &&
    (mouseY < (beat3y + beat3Height))) {
   if (beat3.isPlaying()) {
    beat3.stop()
  } else {
    beat3.play()
    beat3.loop()
  }}


// electric guitar audio 
if ((mouseX > electricx) &&
    (mouseX < (electricx + electricWidth)) &&
    (mouseY > electricy)  &&
    (mouseY < (electricy + electricHeight))) {
   if (electric.isPlaying()) {
    electric.stop()
  } else {
    electric.play()
    electric.loop()
  }}


// drums audio
if ((mouseX > drumsx) &&
    (mouseX < (drumsx + drumsWidth)) &&
    (mouseY > drumsy)  &&
    (mouseY < (drumsy + drumsHeight))) {
   if (drums.isPlaying()) {
    drums.stop()
  } else {
    drums.play()
    drums.loop()
  }}


// piano audio
if ((mouseX > pianox) &&
    (mouseX < (pianox + pianoWidth)) &&
    (mouseY > pianoy)  &&
    (mouseY < (pianoy + pianoHeight))) {
   if (piano.isPlaying()) {
    piano.stop()
  } else {
    piano.play()
    piano.loop()
  }}

 
// bass guitar audio (keep this audio it's the only good one)
if ((mouseX > bassx) &&
    (mouseX < (bassx + bassWidth)) &&
    (mouseY > bassy)  &&
    (mouseY < (bassy + bassHeight))) {
   if (bass.isPlaying()) {
    bass.stop()
  } else {
    bass.play()
    bass.loop()
  }}

// trumpet audio
if ((mouseX > trumpetx) &&
    (mouseX < (trumpetx + trumpetWidth)) &&
    (mouseY > trumpety)  &&
    (mouseY < (trumpety + trumpetHeight))) {
   if (trumpet.isPlaying()) {
    trumpet.stop()
  } else {
    trumpet.play()
    trumpet.loop()
  }}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)

}

