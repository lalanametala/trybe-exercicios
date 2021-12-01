//Bônus

function vectorUnifier(vetor){
    let resposta = [];
    for (let array of vetor){
        for (let num of array){
            resposta.push (num);
        }
    }
    return resposta;
}


let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(vectorUnifier(vector));