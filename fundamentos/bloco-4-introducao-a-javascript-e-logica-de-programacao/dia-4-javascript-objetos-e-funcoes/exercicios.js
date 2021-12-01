//Parte II - Funções
let palavra="";
function verificaPalindromo(palavra){
    let arranjoPalavra=palavra.split("");    
    let arranjoPalavraReversa=arranjoPalavra.reverse();
    let palavraReversa=arranjoPalavraReversa.join('');
    let retorno;
    if (palavra===palavraReversa){
        retorno=true;
    } else {
        retorno=false;
    }
    return retorno;
}

console.log(verificaPalindromo("desenvolvimento"));