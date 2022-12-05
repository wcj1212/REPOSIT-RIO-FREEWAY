// códigos do Ator
let xAtor =75;
let yAtor = 369;
let raio = 20;
let colidiu = false;
let meusPontos = 0;
function imagemAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;
  }  
 }
}
function  vereficaColisao(){
  // hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100)
for(let i = 0; i < imagemCarros.length; i++){
 colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoDoCarro, alturaDoCarro, xAtor, yAtor, raio)
 if(colisao){
   voltaPosicaoInicial();
    somColidiu.play();
   if(pontosMaiorQueZero()){
   meusPontos -= 1;
   }      
} 
} 
}
function voltaPosicaoInicial(){
  yAtor = 369
  
}

function incluirPlacar(){
textAlign(CENTER); 
textSize(20);
fill(color(250, 128, 118));  
text(meusPontos, width / 5, 27);
 
}
function marcaPontos(){
  if(yAtor < 10){
 meusPontos += 1;     
 voltaPosicaoInicial();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
return meusPontos > 0;  
}

function podeSeMover(){
return yAtor < 366; 
}
