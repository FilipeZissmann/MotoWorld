
let modal = document.querySelector(".modal-container"); // Com método seletor pego o container que será mostrado como pop-up mais adiante.

/* A partir daqui crio um objeto com o conteúdo dos cartões. */
const dadosCard = {
    img: "imagens/Peça.png",
    alt: "imagem",
    titulo: "Nome da peça",
    modelo: "Modelo da moto",
    ano: "Ano da moto",
    codigo: "Código da peça"
};

/* A partir daqui crio a função que gera os cartões de acordo com informações do objeto. Essa função é executada através do evento de click em +infomações. */

function criarCard(dados) {
    /* A estrutura ${} me permite trazer os elementos do objeto dadosCard para formação dessa string retornada pela função. */
    return ` 
        <div class="card">
            <img src="${dados.img}" alt="${dados.alt}"> 
            <div class="info-card">
                <h3>${dados.titulo}</h3>
                <p>${dados.modelo}</p>
                <p>${dados.ano}</p>
                <p>${dados.codigo}</p>
            </div>
            <div class="card-content">
                <a class="info-modal" href="#">+ Informações</a>
            </div>
        </div>
    `;
}

/* Com o método querySelector seleciono a classe que corresponde ao input que o usuário digitará sua pesquisa. */

const form = document.querySelector('.search-area');

/* A partir daqui criei um addEventListener para executar várias funções a partir do 'submit' do usuário ao form. */

form.addEventListener('submit', (event) => { // Quando o usuário submeter o form a função é executada.

    event.preventDefault(); // Uso esse método para que a página não recarregue após o usuário submeter o form. 

    const container = document.getElementById('containerCards'); // Com esse método pego a div que conterá os cards para manipular.

    let cards = ''; // Crio uma variável que vai será "abastecida" com todas as tags que geram os cartões e que depois de "abastecida" irá ser atribuida ao container.

    for (let i = 0; i < 15; i++) { // Defini 15 cartões somente para aparecerem na página.
        cards += criarCard(dadosCard); // A variável aqui é "abastecida" com 15 cartões. 
    }

    container.innerHTML = cards; // Aqui apenas "jogo" para o grande container a variável que está abastecida com 15 cartões.

    let infocard = document.getElementsByClassName("info-modal"); // Através dessa variável eu pego todos os elementos com essa classe que está presente na tag <a>+informações.

    for (let i = 0; i < infocard.length; i++) { /* Esse "for" basicamente atribui um evento que abre o pop-up a todos os cards com a tag <a>+informações. */
        infocard[i].addEventListener("click", openModal);
    }

    let x = document.getElementsByClassName("x"); 

    x.addEventListener("click", closeModal); // Aqui basicamente adiciono a um evento a função de fechar o modal.

});


function openModal() {
    modal.classList.add("active"); // Aqui adiciono uma classe que ativa o display do modal fazendo ele aparecer. 
    document.body.classList.add('modal-aberto'); // Esse método retira a barra de scroll do body enquanto o modal está aberto. 
}

function closeModal() {
    modal.classList.remove("active"); // Aqui retiro a classe que ativa o display do modal fazendo ele aparecer. 
    document.body.classList.remove('modal-aberto'); // Esse método devolve a barra de scroll para o body com o modal fechado.
}