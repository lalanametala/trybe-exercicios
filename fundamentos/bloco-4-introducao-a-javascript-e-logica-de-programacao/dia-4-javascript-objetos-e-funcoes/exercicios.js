//Parte II - Funções
let palavra="";
function finalString(word,ending){
    let teste=false;
    let drow = word.split('').reverse();
    let gnidne = ending.split('').reverse();

    for (let position in gnidne){        
        if (gnidne[position]==drow[position]){
            teste=true;
        } else {
            teste=false;
            break;
        }        
    }

    return teste;
}
console.log(finalString('joaofernando', 'fernan'));