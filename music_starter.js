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

let ellipseRadius = 10 
let ellipseRadius2 = 10 
let starSize = 0.2
let starSize2 = 0.2

let Lights = [];

let squareSize = 8
let x1 = 783
let x2 = 817

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

    recTro = loadImage('ArecTroopa');
    recDup = loadImage('ArecDupa');
    recSup = loadImage('ArecSuper');

    spLeft = loadImage('Abass');
    spRight = loadImage('Asound');

    // Lights.push(loadImage('Light1.png'));
    // Lights.push(loadImage('Light2.png'));
    // Lights.push(loadImage('Light3.png'));
    x = 600;
    changeDirection = false;
    firstRun = false
  }

  //BACKGROUND
  background(backImg2)

 ///////////////////////////////
  // //FOR BACKGROUND COLOURCHANGE
  // if (counter > 200) {
  //   fill(200,200,200)
  //   ellipse(200, 200, ellipseRadius, ellipseRadius)
  //   if (ellipseRadius < 2000) {
  //     ellipseRadius += 20; 
  //   }
  // }
  // if (counter > 400) {
  //   fill(0,0,150)
  //   ellipse(1056, 0, ellipseRadius2, ellipseRadius2)
  //   if (ellipseRadius2 < 1000) {
  //     ellipseRadius2 += 40; 
  //   }
  // }
  // push();
  // if (counter > 10) {
  //   scale(starSize)
  //   image(starPImg, -187, -180.5)
  //   if (starSize < 1000) {
  //     starSize += 0.2;
  //   }
  // }
  // if (counter > 20) {
  //   scale(starSize2)
  //   translate(700,0)
  //   image(starYImg, -187, -180.5)
  //   if (starSize2 < 1000) {
  //     starSize2 += 0.2;
  //   }
  // }
  // pop()

  ///////////////////////////////
  // //SUPA DUPA TROOPER
//   push();
// if(words == 'super') {
//   translate(333,200)
//   image(recSup, -160, -160)
// }
// if(words == 'duper') {
//   translate(500,200)
//   image(recDup, -160, -160)
// }
// pop()

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
  rotateAngle++;
  rotate(rotateAngle)
  scale(1)
  image(rec1Img, -74, -74) 
  if (rotateAngle > 360) {
    rotateAngle = 0;
  }
  pop();

  push();
  translate(800, 600)
  rotateAngle++;
  rotate(rotateAngle)
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
scale(1)
image(musicImg,-75.5,-240)
pop()

///////////////////////////////
//SPEAKERS
push();
scale(10)
 translate(10,80)
 image(spLeft,-138.5,-147)
 pop()

  fill(255, 162, 41)
  ellipse(150, 160, 3 * bass, 3 * bass)

  fill(255, 225, 0)
  ellipse(920, 200, 3 * vocal, 3 * vocal)

  fill(223, 92, 255)
  ellipse(925, 105, 1 * drum, 1 * drum)

  ///////////////////////////////
  //WAVES
  //i< to upper x position // + to x coord for lower x position
  for (let i = 0; i < 1000; i++) {
    fill(223, 92, 255) //PURPLE
    ellipse(i * 10, drum * sin(i * 20) + 160, 7, 7)
    fill(0, 0, 0) //BLACK
    rect(i * 10, bass * sin(i * 10) + 160, 5)
    //     fill(0, 255, 4)//GREEN
    // rect(i*10,other* (-sin(i*20)-sin(i*3)) +160,5)
  }

///////////////////////////////
  //WORDS
  textFont('Geneva'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  fill(20)
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
if (drum > 90) {
  noStroke()
  fill(200,0,0)
  rect(x2,455,squareSize,squareSize)
  fill(0,200,0)
  rect(x1,473,squareSize,squareSize)
}
//SLIDERS
push();
fill(0)
rect(x,376,10,20)
rect(x,438,10,20)
if(x>660){
  changeDirection=true}
  else if (x<=540){
		changeDirection=false}
    if (x>=0 && changeDirection == false){
      x=x+1}
      else if(changeDirection == true){
        x=x-1}
pop()

}

// //FOR IMAGE

// let lightYellow
//-
// lightYellow = loadImage('Light1.png');
//-
//push();
// translate(100, 500)
// scale(0.5)
// image(lightYellow, -565, -420)
//pop()

// //BACKGROUND COLOUR CHANGE ACCORDING TO MOUSE
//   r = map(mouseX,0,1000,0,255)
//   b = map(mouseX,0,1000,0,255)
//   background (r,0,b)

//   for(let i = 0; i <= 6; i ++){
// ellipse(300,y*i,50,50)
// }

// map counter once reaches number ie i<100 to change throughout

//counter 60=1 second as based of fracerate

//IMAGEMAP
// var drumSS = int(map(drum, 0, 100, 0, 2));
// console.log(drumSS);
// push();
// scale(1);
// image(Lights[drumSS], 0, 0)
// pop();




  //     for (let i = 0; i < 1000; i++) {
  // var VocalFrame = int(map(vocal,0,100,0,2));
  // console.log(VocalFrame);
  // push()
  // scale(0.5);
  // ellipse(9,9, i*VocalFrame, i*20)
  // pop();
  //     }



 