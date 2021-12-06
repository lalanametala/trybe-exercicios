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
let paiDoPai = document.querySelector('#paiDoPai').childNodes;

for (let no of paiDoPai) {
    if (!(no.id.contains('pai') && no.id.contains('elementoOndeVoceEsta') && no.id.contains('primeiroFilhoDoFilho'))){
        paiDoPai.removeChild(no);
    }
}


