const elementoParaInserirLivros = document.getElementById('livros');
const valorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');


function ExibirLivrosTela(listaDeLivros) {
  
  valorTotalDeLivrosDisponiveis.innerHTML = '';
  elementoParaInserirLivros.innerHTML = '';
  //aqui quando um evento de filtro foir cliclado colocara apenas os livros filtrados e evitara  que mais de um inform~ção apareça na tela.

    listaDeLivros.forEach(livro => {

      // let disponibilidade = verificiaDisponibilidade(livro);
      //aqui executa com a funçao abaixo 

      //exemplo de operador ternario para aplicar esta funçao em uma linha 

     let disponibilidade = livro.quantidade > 0 ? 'livro__imagem' : 'livro__imagem indisponivel';


        elementoParaInserirLivros.innerHTML += `   <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
  
     
  
    });
  
  }


  // function verificiaDisponibilidade(livro){

  //   if(livro.quantidade > 0 ){

  //     return  'livro__imagens'


  //   }else{

  //     return  'livro__imagens indisponivel'



  //   }

  //   // esta funçaõ retorna a disponibilidade de cada livro exibido na tela 


  // }