let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero=0;

for (let number of numbers){
    if (number>maiorNumero){
        maiorNumero=number;
    }
}
console.log(maiorNumero);