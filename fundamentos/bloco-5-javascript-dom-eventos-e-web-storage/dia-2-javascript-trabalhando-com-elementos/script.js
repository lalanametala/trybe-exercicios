document.getElementById('elementoOndeVoceEsta').style.color='red';
document.getElementById('primeiroFilhoDoFilho').innerText='Primeiro filho do filho.';
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').children[2]);