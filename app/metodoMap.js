function aplicarDesconto(livros){
    const desconto  = 0.3;

    livorsComDesconto  = livros.map(livro => {
                // aqui estou trabalhado com  arraow functions

                return {...livro, preco: livro.preco -(livro.preco * desconto )  }



    } )

    return livorsComDesconto

}