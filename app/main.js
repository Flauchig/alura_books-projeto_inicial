//este arquivo vai fazer a requisiçao dis livros 

let livros = [];

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivroDaAPI();
const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivroDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();

    let livorsComDesconto = aplicarDesconto(livros); 

    ExibirLivrosTela(livros);



}




