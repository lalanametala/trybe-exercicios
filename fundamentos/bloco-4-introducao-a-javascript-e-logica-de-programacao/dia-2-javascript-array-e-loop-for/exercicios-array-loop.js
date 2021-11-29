let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero=numbers[0];

for (let number of numbers){
    if (number<menorNumero){
        menorNumero=number;
    }
}
console.log(menorNumero);