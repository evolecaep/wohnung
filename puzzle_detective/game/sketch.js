
//image
let pz= [];
let pzX= [];
let pzY= [];
let pzOn= [];
let pzAnswerX= [];
let pzAnswerY= [];

function preload(){
  //image
  ///puzzle
  pz[1]= loadImage('data/image/puzzle/pz1.png');
  pz[2]= loadImage('data/image/puzzle/pz2.png');
  pz[3]= loadImage('data/image/puzzle/pz3.png');
  pz[4]= loadImage('data/image/puzzle/pz4.png');
  pz[5]= loadImage('data/image/puzzle/pz5.png');
  pz[6]= loadImage('data/image/puzzle/pz6.png');
  pz[7]= loadImage('data/image/puzzle/pz7.png');
  pz[8]= loadImage('data/image/puzzle/pz8.png');
  pz[9]= loadImage('data/image/puzzle/pz9.png');
  pz[10]= loadImage('data/image/puzzle/pz10.png');
  pz[11]= loadImage('data/image/puzzle/pz11.png');
  pz[12]= loadImage('data/image/puzzle/pz12.png');
}


function setup(){
  createCanvas(1000,800);

  //set puzzle value
  for (let i=1; i<13; i++) {
    pzX[i]= 500;
    pzY[i]= 325;
    pzOn[i]=false;
  }

  //set puzzle answer
  ///puzzle1
  pzAnswerX[1]=12345;
  pzAnswerY[1]=12345;
  ///puzzle2
  pzAnswerX[2]=12345;
  pzAnswerY[2]=12345;
  ///puzzle3
  pzAnswerX[3]=12345;
  pzAnswerY[3]=12345;
  ///puzzle4
  pzAnswerX[4]=12345;
  pzAnswerY[4]=12345;
  ///puzzle5
  pzAnswerX[5]=12345;
  pzAnswerY[5]=12345;
  ///puzzle6
  pzAnswerX[6]=12345;
  pzAnswerY[6]=12345;
  ///puzzle7
  pzAnswerX[7]=12345;
  pzAnswerY[7]=12345;
  ///puzzle8
  pzAnswerX[8]=12345;
  pzAnswerY[8]=12345;
  ///puzzle9
  pzAnswerX[9]=12345;
  pzAnswerY[9]=12345;
  ///puzzle10
  pzAnswerX[10]=12345;
  pzAnswerY[10]=12345;
  ///puzzle11
  pzAnswerX[11]=12345;
  pzAnswerY[11]=12345;
  ///puzzle12
  pzAnswerX[12]=12345;
  pzAnswerY[12]=12345;

}

function draw() {
  background(0);
  //interface
  rectMode(CORNER);
  noStroke();
  //top
  fill(0);
  rect(0,0,1000,100);
  //bottom
  fill(50);
  rect(0,550,1000,250);
  //left
  fill(0,0,125);
  //rect(0,100,200,450);
  //right
  fill(0,125,0);
  //rect(800,100,200,450);
  //screen
  fill(255);
  rect(200,100,600,450);

  sensePuzzle(1);
  putPuzzle(1);
  sensePuzzle(1);
  effectPuzzle(1);
  posPuzzle(1);
  fixPuzzle(1);
  putPuzzle(1);

}






function sensePuzzle(_num){
  let pic=pz[_num];
  let x=pzX[_num];
  let y=pzY[_num];
  let w=pic.width;
  let h=pic.height;

  if(x-w/2<mouseX&&mouseX<x+w/2){
    if(y-h/2<mouseY&&mouseY<y+h/2){
      pzOn[_num]=true;
      sortPuzzle(_num);
    } else {
      pzOn[_num]=false;
    }
  } else {
    pzOn[_num]=false;
  }
}

function sortPuzzle(_num){
  for(let i=1; i<_num; i++){
    pzOn[i]=false;
  }
}

function effectPuzzle(_num){
  let pic=pz[_num];
  let x=pzX[_num];
  let y=pzY[_num];
  let w=pic.width;
  let h=pic.height;

  if(pzOn[_num]==true){
    rectMode(CENTER);
    fill(255,255,0, 125);
    rect(x,y,w+10,h+10);
  }
}

function posPuzzle(_num){

}

function fixPuzzle(_num){

}

function putPuzzle( _num ){
  let pic=pz[_num];
  let x=pzX[_num];
  let y=pzY[_num];
  let w=pic.width;
  let h=pic.height;

  imageMode(CENTER);
  image(pic,x,y);

  //forTest
  rectMode(CENTER);
  fill(255,0,0);
  rect(x,y,10,10)
}
