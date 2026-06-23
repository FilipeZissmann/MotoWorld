/* A partir daqui crio um objeto com o conteúdo dos cartões. */
const dadosCard = {
    img: "imagens/Peça.png",
    alt: "imagem",
    titulo: "Nome da peça",
    modelo: "Modelo da moto",
    ano: "Ano da moto",
    codigo: "Código da peça"
};

/* A partir daqui crio a função que gera os cartões com o parâmetro do objeto criado acima. */ 
function criarCard(dados) {
    /* Pego valores chaves específicos do objeto dadosCard. */
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
                <a href="#">+ Informações</a>
            </div>
        </div>
    `;
}

/* A partir daqui capturo o form da pesquisa com um método do DOM. */
const form = document.querySelector('.search-area');

/* Esse evento de form basicamente preenche o container com os cards. */

form.addEventListener('submit', (event) => { /* Quando o usuário submeter o forms a função é executada. */
    event.preventDefault(); // Uso esse método para que a página não recarregue e gere os cards. 

    const container = document.getElementById('containerCards');

    let cards = '';
    for (let i = 0; i < 15; i++) {
        cards += criarCard(dadosCard); /* Vou incrementando blocos de cards na variável de string vazia cards. */
    }
    container.innerHTML = cards; // Aqui preencho o container da seção de pesquisa com 15 cards informativos. */
});