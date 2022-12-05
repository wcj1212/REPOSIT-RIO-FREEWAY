// imagens 
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let somDaTrilha;
let somDoPonto;
let somColidiu;

function preload() {
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemDoCarro1 = loadImage("Imagens/carro-1.png");
  imagemDoCarro2 = loadImage("Imagens/carro-2.png");
  imagemDoCarro3 = loadImage("Imagens/carro-3.png");
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDoPonto = loadSound("sons/pontos.wav")
  somColidiu = loadSound("sons/colidiu.mp3")
imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3]
}
