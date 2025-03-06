//Essa é a segunda versão do projeto que fiz, com uma otimização.

//Variável que faz a contagem de jogos alugados.
let contador = 1;

//Função para exibir jogos alugados no console.
function exibirQuantidadeJogosAlugados(){
    console.log(`Jogos alugados: ${contador}`);
}

//Configuração que altera o status do botão/imagem ao alugar/devolver de acordo com a id selecionada.
function alterarStatus(id){
    let jogo = document.getElementById(`game-${id}`);
    let imagemJogo = jogo.querySelector('div');
    let botaoJogo = jogo.querySelector('a');
    let nomeJogo = jogo.querySelector('p').textContent;
    
    //Altera tanto o status da imagem quanto do botão de acordo com a condição.
    if(imagemJogo.classList.contains('dashboard__item__img--rented')){
        let devolverJogo = confirm(`Você quer devolver o jogo ${nomeJogo}?`);
        if(devolverJogo){
            imagemJogo.classList.remove('dashboard__item__img--rented');
            botaoJogo.classList.remove('dashboard__item__button--return');
            botaoJogo.textContent = 'Alugar';
            contador--;
        }
    }else{
        imagemJogo.classList.add('dashboard__item__img--rented');
        botaoJogo.classList.add('dashboard__item__button--return');
        botaoJogo.textContent = 'Devolver';
        contador++;
    }

    exibirQuantidadeJogosAlugados();

    
}




    