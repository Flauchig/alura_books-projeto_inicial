const botoes = document.querySelectorAll('.btn'); 

botoes.forEach(btn =>btn.addEventListener('click', filtrarLivros ));


function filtrarLivros(){
    const elementoBtn  = document.getElementById(this.id);
    const categoria =  elementoBtn.value

    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria );

    ExibirLivrosTela(livrosFiltrados);

    
}

// foi usado um forEach para buscar cada botão e quano clicado ele ira executar um filtro

//uma função de filtrar livros foi criada pois cada botao possui um id então  ele pega o id do botao  clicado e  pega o valor do mesmo para aplicar o filtro 

//con isso foi executado o método filter que vai trazer os livros dento do parametro selecionado. 

//no meteodoforEach.js foi aplicado um innerHTML vazio para que apenas aprecer os livros filtrados