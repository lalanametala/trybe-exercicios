//Parte II - Funções
let palavra="";
function maiorNumero(arranjo){
    let indiceMaiorNumero=0;
    let maiorNumeroAtual=0;
    for (let position in arranjo){
        if (arranjo[position]>maiorNumeroAtual){
            maiorNumeroAtual=arranjo[position];
            indiceMaiorNumero=position;
        }
    }
    return indiceMaiorNumero;
}
let teste =[2, 3, 6, 7, 10, 1];
console.log(maiorNumero(teste));