
//image
let pz= [];
let pzX= [];
let pzY= [];
let pzOn= [];
let pzMv= [];
let pzFreeze= [];
let pzAnswerX= [];
let pzAnswerY= [];
let xDist;
let yDist;
let magnet;
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
    pzMv[i]=false;
    pzFreeze[i]=false;
  }
  xDist=0;
  yDist=0;

  //set puzzle answer
  magnet=15;
  ///puzzle1
  pzAnswerX[1]=100;
  pzAnswerY[1]=75;
  ///puzzle2
  pzAnswerX[2]=250;
  pzAnswerY[2]=75;
  ///puzzle3
  pzAnswerX[3]=375;
  pzAnswerY[3]=100;
  ///puzzle4
  pzAnswerX[4]=500
  pzAnswerY[4]=100;
  ///puzzle5
  pzAnswerX[5]=75;
  pzAnswerY[5]=200;
  ///puzzle6
  pzAnswerX[6]=200;
  pzAnswerY[6]=200;
  ///puzzle7
  pzAnswerX[7]=350;
  pzAnswerY[7]=225;
  ///puzzle8
  pzAnswerX[8]=500;
  pzAnswerY[8]=250;
  ///puzzle9
  pzAnswerX[9]=75;
  pzAnswerY[9]=350;
  ///puzzle10
  pzAnswerX[10]=225;
  pzAnswerY[10]=350;
  ///puzzle11
  pzAnswerX[11]=375;
  pzAnswerY[11]=350;
  ///puzzle12
  pzAnswerX[12]=500;
  pzAnswerY[12]=375;
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

  for(let i=1; i<13; i++){
    if(mouseIsPressed==false){
      sensePuzzle(i);
    }
  }
  for(let i=1; i<13; i++){
    effectPuzzle(i);
    movePuzzle(i);
    fixPuzzle(i);
    putPuzzle(i);
  }
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
      if (mouseIsPressed==true){
      rectMode(CENTER);
      fill(200, 200);
      rect(x,y,w+20,h+20);
    } else {
      rectMode(CENTER);
      fill(200, 100);
      rect(x,y,w+20,h+20);
    }
  }
}

function movePuzzle(_num){
  let pic=pz[_num];
  let x=pzX[_num];
  let y=pzY[_num];
  let w=pic.width;
  let h=pic.height;

  if(pzOn[_num]==true){
    if (mouseIsPressed==true){
      if(pzMv[_num]==false){
        xDist=mouseX-x;
        yDist=mouseY-y;
        pzMv[_num]=true;
      }
    } else {
      xDist=0;
      yDist=0;
      pzMv[_num]=false;
    }
  } else {
    xDist=0;
    yDist=0;
    pzMv[_num]=false;
  }
    if (pzMv[_num]==true){
      pzX[_num]= mouseX-xDist;
      pzY[_num]= mouseY-yDist;
    }
}

function fixPuzzle(_num){
  let x=pzX[_num];
  let y=pzY[_num];
  let ax=pzAnswerX[_num]+200;
  let ay=pzAnswerY[_num]+100;
  let d=magnet;

  if (x<ax+d && x> ax-d){
    if (y<ay+d && y>ay-d){
      pzX[_num]=ax;
      pzY[_num]=ay;
    }
  }

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
