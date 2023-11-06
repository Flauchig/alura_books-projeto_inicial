//este arquivo vai fazer a requisiçao dis livros 

let livros = [];

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivroDaAPI();


async function getBuscarLivroDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();

    let livrosComDesconto = aplicarDesconto(livros); 

    ExibirLivrosTela(livros);



}




