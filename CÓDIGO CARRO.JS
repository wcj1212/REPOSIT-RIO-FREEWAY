// códigos do Carro 0, 1, 2, 3, 4, 5;
let yCarro = [40, 95, 150, 213, 263, 315 ]
let xCarro = [550, 550, 550, 550, 550, 550]
let velocidadeCarro = [2.5, 3.3, 5, 2.3, 4, 3.7]
let comprimentoDoCarro = 50;
let alturaDoCarro = 40


function mostraCarro() {
for(let i = 0; i < imagemCarros.length; i = i +1){    image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoDoCarro, alturaDoCarro) 
                                                
 }  
}
function movimentaCarro (){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  xCarro[i]-= velocidadeCarro[i]; }
    
}
function pontoInicialdoCarro (){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
  if(passouTodaATela(xCarro[i])){
    xCarro[i] = 550; }
   
  }
}
function passouTodaATela(xCarro){ 
  return xCarro < - 50;
}
