const salarioBruto = 10000;
const salarioBase;
const imposto;

if (salarioBruto<=1556.94){
    salarioBase=salarioBruto*0.92;
} else if (salarioBruto<=2594.92) {
    salarioBase=salarioBruto*0.91;
} else if (salarioBruto<=5189.82){
    salarioBase=salarioBruto*0.89;
} else {
    salarioBase=salarioBruto-570.88;
}

if (salarioBase<=1903.98) {
    imposto=0;
} else if (salarioBase<=2826.65) {
    
}