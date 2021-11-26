const valorCusto=-1;
const valorVenda=2;


if (valorCusto<0 || valorVenda<0){
    console.log("erro")
} else {
    let lucro =valorVenda-valorCusto*1.2;
    console.log (lucro);    
}