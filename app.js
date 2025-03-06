//Essa é a primeira versão do projeto que fiz, não está otimizada.

//Variável que faz a contagem de jogos alugados.
let contador = 1;

//Variável que fará a pergunta se o usuário quer realmente devolver o jogo.
let devolverJogo;

//Função para exibir jogos alugados no console.
function exibirQuantidadeJogosAlugados(){
    console.log(`Jogos alugados: ${contador}`);
}

//Configuração que chama a função de alterar botao e imagem de acordo com o botão pressionado.
function alterarStatus(numero){
    //Altera o status de acordo com o id do jogo.
    if(numero == 1){
        alterandoBotaoImagem('game-1');
    }else if(numero == 2){
        alterandoBotaoImagem('game-2');
    }else{
        alterandoBotaoImagem('game-3');
    }
}

//Configuração que altera botão e imagem ao pressionar botão de alugar/devolver.
function alterandoBotaoImagem(id){
   let botao = document.getElementById(id).querySelector('a');
   let fundo = document.getElementById(id).querySelector('div'); 
   let nomeJogo = document.getElementById(id).querySelector('p').textContent;

   //Alteração do status do botão.
    if(botao.classList.contains('dashboard__item__button--return')){
        devolverJogo = confirm(`Você quer devolver o jogo ${nomeJogo}?`);
        if(devolverJogo){
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            contador--;
        }
        
    }else{
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        contador++;
    }

    //Alteração do status da imagem.
    if(fundo.classList.contains('dashboard__item__img--rented')){
        if(devolverJogo){
            fundo.classList.remove('dashboard__item__img--rented');
        } 
    }else{
        fundo.classList.add('dashboard__item__img--rented');
    }  
    
    exibirQuantidadeJogosAlugados();

}

