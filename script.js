const modal = document.querySelector('.modal-container');
let imagenscard1 = ["./imagens/EscapeVortex1.png", "./imagens/EscapeVortex2.png", "./imagens/EscapeVortex3.png"];
let imagenscard2 = ["./imagens/AetherMotors1.png", "./imagens/AetherMotors2.png", "./imagens/AetherMotors3.png"];
let elemento = document.getElementById("img-modal");

let indiceAtual = 0;
let intervaloAtivo = null;

function closeModal() {
    modal.classList.remove('active');
    clearInterval(intervaloAtivo); 
}


function alternarImagem(imagens) {
      indiceAtual = (indiceAtual + 1) % imagens.length;
      elemento.src = imagens[indiceAtual];
      
}



function openModal(lista) {
    modal.classList.add('active');
    elemento.src = lista[0];
    intervaloAtivo = setInterval(() => alternarImagem(lista), 3000);
}


  card1.addEventListener("click", () => openModal(imagenscard1));
  card2.addEventListener("click",  () => openModal(imagenscard2));
  




