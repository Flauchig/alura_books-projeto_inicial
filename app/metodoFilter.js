const botoes = document.querySelectorAll('.btn'); 

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros ));


function filtrarLivros(){
    const elementoBtn  = document.getElementById(this.id);
    const categoria =  elementoBtn.value

    let livrosFiltrados = categoria == 'disponivel' ? FiltrarPorDisponibilidade() : filtrarPorCategoria(categoria)

    // foi aplicadao um filtro  buscando a quantidade dos livros para aplicar o botao dos livros desponiveis. 

    ExibirLivrosTela(livrosFiltrados);


    
    if (categoria == 'disponivel'){

        const valorTotal =  calcularValorTotalDeLivrosDisponíveis(livrosFiltrados); 
        console.log(valorTotal)

        exibirValorTotalDeLivrosDisponiveis(valorTotal);


    }


    
}


function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function FiltrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function  exibirValorTotalDeLivrosDisponiveis(valorTotal){

    valorTotalDeLivrosDisponiveis.innerHTML = `  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
</section>`


}

// foi usado um forEach para buscar cada botão e quano clicado ele ira executar um filtro

//uma função de filtrar livros foi criada pois cada botao possui um id então  ele pega o id do botao  clicado e  pega o valor do mesmo para aplicar o filtro 

//con isso foi executado o método filter que vai trazer os livros dento do parametro selecionado. 

//no meteodoforEach.js foi aplicado um innerHTML vazio para que apenas aprecer os livros filtrados