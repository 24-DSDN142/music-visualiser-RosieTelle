// vocal, drum, bass, and other are volumes ranging from 0 to 100
let y = 100;
let firstRun = true;
let diskImg
let backImg
let backImg2
let tableImg

let recordImg
let rec1Img
let rec2Img
let starPImg
let starYImg
let musicImg
let recTro
let recDup
let recSup
let spLeft
let spRight
let backImg3

let ellipseRadius = 10 
let ellipseRadius2 = 10 
let starSize = 0.2
let starSize2 = 0.2
let starSize3 = 0.2
displacement = 10

let Lights = [];

let squareSize = 8
let x1 = 783
let x2 = 817
let spSize = 10

var x;
var changeDirection;



rotateAngle = 0 // needs to be outside of draw_one_frame
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun) {
    // diskImg = loadImage('Asset1.png');
    // backImg = loadImage('Asset2.png');
    backImg2 = loadImage('Abackgr1.png');

    tableImg = loadImage('Adeck.png');
    musicImg = loadImage('Amusic.png');

    recordImg = loadImage('ArecMain.png');
    rec1Img = loadImage('ArecCoo.png');
    rec2Img = loadImage('ArecTyr.png');
    starPImg = loadImage('Astar1.png');
    starYImg = loadImage('Astar2.png');

    recTro = loadImage('ArecTroopa.png');
    recDup = loadImage('ArecDupa.png');
    recSup = loadImage('ArecSuper.png');

    spLeft = loadImage('Abass.png');
    spRight = loadImage('Asound.png');

    backImg3 = loadImage('back2.png');

    // Lights.push(loadImage('Light1.png'));
    // Lights.push(loadImage('Light2.png'));
    // Lights.push(loadImage('Light3.png'));
    x = 600;
    changeDirection = false;
    firstRun = false
  }

  //BACKGROUND
  background(backImg3)

 

  push();
if (counter > 200) {
  translate(500,300)
  scale(starSize);
  image(starPImg, -187, -180.5);
  
  // Increase starSize, then reset if it reaches 1000
  if (starSize < 1000) {
    starSize += 0.2;
  } else {

    starSize = 1; // Reset to starting scale
  }
}
pop();

push();
if (bass > 60) {
  scale(starSize2);
  translate(150,150)
  rotateAngle++;
  rotate(rotateAngle)
  image(starYImg, -187, -180.5);
  if (rotateAngle > 360) {
    rotateAngle = 0;}
  console.log(starSize2)
  // Increase starSize2, then reset if it reaches 1000
  if (starSize2 < 10) {
    starSize2 += 0.1;
  } else {
    starSize2 = 1; // Reset to starting scale
  }
}
pop();



  ///////////////////////////////


 ///////////////////////////////
 //Deck
push();
 scale(1)
 translate(710,580)
 image(tableImg,-665,-262)
 pop()

///////////////////////////////
//ROTATING RECORDs
  push();
  translate(314, 500)
  rotateAngle++;
  rotate(rotateAngle)
  scale(1)
  image(recordImg, -161, -161) // these numbers are half the width and height of image so image off centred
  if (rotateAngle > 360) {
    rotateAngle = 0;
  }
  pop();

  push();
  translate(937, 410)
  // rotateAngle++;
  rotate(map(other, 0, 100, -180, 180))
  scale(1)
  image(rec1Img, -74, -74) 
  if (rotateAngle > 360) {
    rotateAngle = 0;
  }
  pop();

  push();
  translate(800, 600)
  // rotateAngle++;
  rotate(map(2*vocal,0,100,-30,100))
  scale(1)
  image(rec2Img, -74, -74) 
  if (rotateAngle > 360) {
    rotateAngle = 0;
  }
  pop();

///////////////////////////////
//Music part of record player ?
push();
translate(160,670)
//map rotaions - variable that changing is counter
scale(1)
// rotate(50)
image(musicImg,-75.5,-240)
pop()

///////////////////////////////
//SPEAKERS
push();
 translate(150,150)
 scale(0.9)
 image(spLeft,-138.5,-147)
 translate(850,10)
 image(spRight,-112.5,-165.5)
 pop()

push();
 stroke(250)
 strokeWeight(10)
  fill(197, 255, 122)
  let spbassMap = map(bass,0,100,80,160)
  ellipse(187, 166, spbassMap, spbassMap)

  fill(255, 225, 0)
  let vocalMap = map(vocal, 0, 100, 70, 120);
  ellipse(885, 225, vocalMap, vocalMap)

  fill(223, 92, 255)
  let spdrumMap = map(drum, 0, 100, 30, 80);
  ellipse(885, 105, spdrumMap, spdrumMap)
  pop()


  ///////////////////////////////
  //WAVES
  //i< to upper x position // + to x coord for lower x position
  for (let i = 0; i < 54; i++) {
    fill(255) //PURPLE
    ellipse(i * 10+280, drum * sin(i * 20) + 160, 7, 7)
    fill(0, 0, 0) //BLACK
    rect(i * 10+280, bass * sin(i * 10) + 160, 5)
    fill(100,250,100)//GREEN
    rect(i * 10+280, -other * cos(i * 8) + 160, 5)
  }

///////////////////////////////
  //WORDS
  textFont('Impact'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  fill(250)
  textAlign(CENTER);
  textSize(100); // size of text (if 'vocal' then changes size.)
  text(words, width / 2, height / 3 - 30);

///////////////////////////////
//VOLUME BARS
fill(200,0,0);
rect(543,588,5,-1.5*drum)
fill(100,250,100);
rect(602,588,5,-1.5*vocal)
fill(100,150,250);
rect(653,588,5,-1.5*other)

//VOLUME 'LIGHTS'
let drumMap = int(map(drum, 0, 100, 1, 5));
for (let i=0; i<drumMap; i++) {
  noStroke()
  fill(200,0,0)
  rect(x2,473 - 17.5 * i,squareSize,squareSize)
}
let otherMap = int(map(vocal, 0, 100, 1, 5));
for (let i=0; i<otherMap; i++) {
  noStroke()
fill(0,200,0)
  rect(x1,473-17.5*i,squareSize,squareSize)
}

//SLIDERS
push();
fill(0)
rect(map(vocal, 0, 100, 540, 660),376,10,20)
rect(map(vocal, 0, 100, 660, 540),438,10,20)

if(x>660){
  changeDirection=true}
  else if (x<=540){
		changeDirection=false}
    if (x>=0 && changeDirection == false){
      x=x+1}
      else if(changeDirection == true){
        x=x-1}
pop()
push();
fill(200,0,0)
rect(map(drum, 0, 100, 903, 993),560,10,20)
fill(100,250,100)
rect(map(bass, 0, 100, 903, 993),602,10,20)
fill(100,150,250)
rect(map(other, 0, 100, 903, 993),644,10,20)


// if(x>900){
//   changeDirection=true}
//   else if (x<=850){
// 		changeDirection=false}
//     if (x>=0 && changeDirection == false){
//       x=x+1}
//       else if(changeDirection == true){
//         x=x-1}
pop()
  //SUPA DUPA TROOPER
  push();
  translate(530,50)
  
if(words == 'super') {
  scale(0.9)
  image(recSup, -160, 0)
}

if(words == 'duper') {

  scale(1.4)
  image(recDup, -160, 0)
}

if(words == 'trooper.') {
  scale(2)
  image(recTro, -160, 0)
}
pop()


///////////////////////////////

}

