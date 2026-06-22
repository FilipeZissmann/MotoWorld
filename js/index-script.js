
/* A partir daqui crio uma const que atuará na função openModal e closeModal. */
const modal = document.querySelector('.modal-container');
/* A partir daqui são declarados três arrays de imagens que atuarão na função alternarImagem. */
let imagenscard1 = ["./imagens/EscapeVortex1.png", "./imagens/EscapeVortex2.png", "./imagens/EscapeVortex3.png"];
let imagenscard2 = ["./imagens/AetherMotors1.png", "./imagens/AetherMotors2.png", "./imagens/AetherMotors3.png"];
let imagenscard3 = ["./imagens/Volted1.png", "./imagens/Volted2.png", "./imagens/Volted3.png"];
/* A partir daqui são declaradas variáveis que atuam na função alternarTexto.*/
let modalTitulo = document.querySelector('.modal .content-modal h2');
let modalTexto = document.querySelector('.modal .content-modal p');
/* A partir daqui crio uma variável que atuará na função alternarImagens. */
let elemento = document.getElementById("img-modal");
/* A variável a seguir é a inicialização do índice dos arrays de imagens, necessário para executar sempre a primeira imagem.*/
let indiceAtual = 0;
/* A variável a seguir é intencionamente declara sem um valor atribuido. */
let intervaloAtivo = null;

/* A função a seguir recebe uma das variáveis de array como parâmetro (imagenscard1, imagenscard2 ou imagenscard3)*/
function openModal(lista) {
    modal.classList.add('active'); /* Adiciona um classe com display: flex para tornar visível o modal. */
    elemento.src = lista[0]; /* Inicializa o atributo source da tag img com a primeira imagem do array que entrou na função. */
    intervaloAtivo = setInterval(() => alternarImagem(lista), 3000); /* Fica repetindo a função que alterna as imagens até que o usuário clique no
    "x" do modal. */
    document.body.classList.add('modal-aberto'); /* Esse método retira a barra de scroll do body enquanto o modal está aberto. */
}

/* A função a seguir retira a classe que torna o modal visível (display: flex), limpa o intervalo que executa a função de alternar imagens e 
remove a propriedade que retira a barra de scroll do body. */
function closeModal() {
    modal.classList.remove('active');
    clearInterval(intervaloAtivo);
    document.body.classList.remove('modal-aberto');
}

/* A função a seguir recebe o parâmetro que vem da execução do openModal com um array como parâmetro (imagenscard1, imagenscard2 ou imagenscard3).*/
function alternarImagem(imagens) { 
    indiceAtual = (indiceAtual + 1) % imagens.length; /* Esse cálculo vai mudando o número do índice do array através do lenght. */
    elemento.src = imagens[indiceAtual]; /* Esse método seleciona o índice atual e atribui o conteúdo do array ao atributo source da imagem. */

}

/* A função a seguir é executada por eventos de click do usuário e adequa o conteúdo ao respectivo cartão. */
function alterarTexto(titulo, texto) {
    modalTitulo.textContent = titulo; /* Substitui o conteúdo do título pelos textos recebidos como parâmetro no addEventListener. */
    modalTexto.textContent = texto; /* Substitui o conteúdo do parágrafo pelos textos recebidos como parâmetro no addEventListener. */
}


card1.addEventListener("click", () => openModal(imagenscard1));
card2.addEventListener("click", () => openModal(imagenscard2));
card3.addEventListener("click", () => openModal(imagenscard3));
card1.addEventListener('click', () => {
    alterarTexto('Novos escapamentos da Vortex', 'Novos escapamentos prometem revolucionar o desempenho das motos.');
});
card2.addEventListener('click', () => {
    alterarTexto('Arther com novo design em sua linha de rodas', 'Arther surpreende mercado com rodas foscas estilo anos 70.');
});
card3.addEventListener('click', () => {
    alterarTexto('Lançamento VTX PRO', 'Volted inova com capacete que promete maior resistência e segurança que outros modelos.');
});



