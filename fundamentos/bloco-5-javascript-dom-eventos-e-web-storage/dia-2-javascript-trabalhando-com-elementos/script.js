document.getElementById('elementoOndeVoceEsta').style.color='red';
document.getElementById('primeiroFilhoDoFilho').innerText='Primeiro filho do filho.';
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').children[2]);

//parte 2
let irmao = document.createElement('section');
let pai = document.querySelector('#pai');
pai.appendChild(irmao);

let paragrafo = document.createElement('p');
document.querySelector('#elementoOndeVoceEsta').appendChild(paragrafo);

document.querySelector('#primeiroFilhoDoFilho').appendChild(paragrafo);
console.log(document.getElementById('primeiroFilhoDoFilho').firstElementChild.parentElement.parentElement.nextElementSibling);

//parte 3
pai = document.querySelector('#pai');
for (let index = pai.childNodes.length-1; index>=0; index -=1){
    let filhoAtual = pai.childNodes[index];
    console.log (filhoAtual);
    if (filhoAtual.id !== 'elementoOndeVoceEsta'){
        filhoAtual.remove();
    }
}

let segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();


