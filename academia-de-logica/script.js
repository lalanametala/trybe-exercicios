function atribuirId() {
    let botao = document.querySelectorAll('.button');
    for (let index=0; index<botao.length;index+=1 ){
        if (index===0){
            botao[index].id = 'soma';
            console.log (botao[index]);
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