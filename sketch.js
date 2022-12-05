// play

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}
function draw() {
  background(imagemDaEstrada);
  imagemAtor();
 mostraCarro();
  movimentaCarro()
  movimentaAtor();
  pontoInicialdoCarro();
  vereficaColisao();
  incluirPlacar();
  marcaPontos();
}
