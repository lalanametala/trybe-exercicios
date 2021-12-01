//Bônus

function singleRomanToArabic(numero) {
    switch (numero){
        case "I":
            numero=1;
            break;
        case "V":
            numero=5;
            break;
        case "X":
            numero=10;
            break;
        case "L":
            numero=50;
            break;
        case "C":
            numero=100;
            break;
        case "D":
            numero=500;
            break;
        case "M":
            numero=1000;
            break;        
    }
    return numero;
}

function romanToArabic(romanNumber){
    let numArabico=0;
    let numAnterior=0;
    let numAtual=0;
    for (let caractere in romanNumber){
        numAtual=singleRomanToArabic(romanNumber[caractere]);
        if (romanNumber.length==1){
            numArabico=numAtual;
        } else if (caractere==0) {
            numAnterior=numAtual;
            numArabico=numAtual;                  
        } else if (numAtual>numAnterior && romanNumber.length==2){
            numArabico=numAtual-numAnterior;
            break;
        } else {
            numArabico+=numAtual;
            numAnterior=numAtual;
        }
    }
    return numArabico;
}

console.log(romanToArabic("MIII"));