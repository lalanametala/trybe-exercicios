/*

02 - Contar até 10

Maria está aprendendo lógica de programação e recebeu o seguinte código:

  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}

Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e o retorne.

*/

function accumulator(limit){
    var contagem="";    
    for (var index=1; index<=limit; index+=1){
        contagem=contagem+index;        
    }
    return console.log(contagem);
  }
  
  accumulator(10);
  module.exports = accumulator;

  