let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares=0;

for (let number of numbers){
    if (number%2!=0){
        numerosImpares+=1;
    }
}
if (numerosImpares==0){
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(numerosImpares);
}