//Parte II - Funções
let palavra="";
function maisCaracteres(arranjo){
    let maisCaracteresAtual="";
    for (let position in arranjo){
        if (arranjo[position].length>maisCaracteresAtual.length){
            maisCaracteresAtual=arranjo[position];
        }
    }
    return maisCaracteresAtual;
}
let teste =['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maisCaracteres(teste));