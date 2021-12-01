//Parte II - Funções
let palavra="";
function menorNumero(arranjo){
    let indiceMenorNumero=0;
    let menorNumeroAtual=0;
    for (let position in arranjo){
        if (arranjo[position]<menorNumeroAtual){
            menorNumeroAtual=arranjo[position];
            indiceMenorNumero=position;
        }
    }
    return indiceMenorNumero;
}
let teste =[2, 4, 6, 7, 10, 0, -3];
console.log(menorNumero(teste));