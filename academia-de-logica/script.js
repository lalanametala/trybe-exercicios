function atribuirId() {
    let botao = document.querySelectorAll('.button');
    for (let index=0; index<botao.length;index+=1 ){
        if (index===0){
            botao[index].id = 'soma';            
        } else if (index===1){
            botao[index].id = 'subtracao';
        } else if (index===2){
            botao[index].id = 'divisao';
        } else if (index===3) {
            botao[index].id = 'multiplicacao';
        } 
    }
}
atribuirId ();

let caixa1 = document.querySelector('#input1');
let caixa2 = document.querySelector('#input2');


let botaoApertado = document.querySelector('.operacoes');

botaoApertado.addEventListener('click', function(event) {
    let identificacao = event.target.id;
    let resultado = document.querySelector('#pResult');
    if (identificacao == 'soma'){
        resultado.innerHTML = parseInt(caixa1.value) + parseInt(caixa2.value);
        caixa1.value='';
        caixa2.value='';
    }
    if (identificacao == 'subtracao'){
        resultado.innerHTML = parseInt(caixa1.value, 10) - parseInt(caixa2.value, 10);
        caixa1.value='';
        caixa2.value='';
    }
    if (identificacao == 'divisao'){
        resultado.innerHTML = parseInt(caixa1.value) / parseInt(caixa2.value);
        caixa1.value='';
        caixa2.value='';
    }
    if (identificacao == 'multiplicacao'){
        resultado.innerHTML = parseInt(caixa1.value) * parseInt(caixa2.value);
        caixa1.value='';
        caixa2.value='';
    }
}); 