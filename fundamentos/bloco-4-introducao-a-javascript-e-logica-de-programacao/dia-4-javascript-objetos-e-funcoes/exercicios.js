//Parte II - Funções
let palavra="";
function maisRepeticoes(arranjo){
    let maisRepetidoAtual=0;
    let numeroRepeticoesMaior=0;
    for (let position in arranjo){
        let contadorRepeticoes=0;
        for (let posicao in arranjo){  
            if (posicao!=position){
                if (arranjo[position]==arranjo[posicao]){
                    contadorRepeticoes+=1;
                }
            }
        }
        if (contadorRepeticoes>numeroRepeticoesMaior){
            numeroRepeticoesMaior=contadorRepeticoes;
            maisRepetidoAtual=arranjo[position];
        }
    }
    return maisRepetidoAtual;
}
let teste =[2, 3, 2, 5, 8, 2, 3];
console.log(maisRepeticoes(teste));