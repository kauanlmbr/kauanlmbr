let cor 
 let posicaoX
 let posicaoY
 
function setup() {
  createCanvas(400, 400);
  background (color(190, 70, 120));
  cor= color(random(0, 255),random (0,255),random(0,255));   
  posicaoX= [0,0,0];
  posicaoY= [random(height), random(height), random(height)];
}

function draw() {
  stroke (0);
  fill(cor)
  for ( let n in posicaoX){
  circle(posicaoX[n], posicaoY[n],70);
  posicaoX[n]+=random(0,3);
  posicaoY[n]+=random(-3,3);
 if(posicaoX[n]>=width){
  posicaoX[n]=0;
  posicaoY[n]=random(height);
}
}
  if(mouseIsPressed){
    cor=color(random(0,255), random(0,255), random(0,255));
}
}