
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let y = 100;
let firstRun = true;
let diskImg
rotateAngle = 0 // needs to be outside of draw_one_frame
function draw_one_frame(words, vocal, drum, bass, other, counter) {
if(firstRun){
diskImg = loadImage('Asset1.png');

  firstRun = false
}
  background(150,150,150)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
//   for(let i = 0; i <= 6; i ++){
// ellipse(300,y*i,50,50)
// }

// ellipse(200,200,200,200)

 push();
 
 translate(200, 200)
 
 rotateAngle++;

 rotate(rotateAngle)
 
  image(diskImg, -119.5, -119) // these numbers are half the width and height of image so image off centred
//image(diskImg, 0, 0)

 if (rotateAngle > 360) {
  rotateAngle = 0;
  }
  
  pop();
 
  textAlign(CENTER);
  textSize(vocal);
  text(words, width/2, height/3);
}

//    let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
