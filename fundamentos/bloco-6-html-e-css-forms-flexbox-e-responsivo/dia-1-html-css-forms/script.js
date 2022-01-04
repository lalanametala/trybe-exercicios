// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nadaAconteceFeijoada (event){
    event.preventDefault();
}

HREF_LINK.addEventListener('click', nadaAconteceFeijoada);
INPUT_CHECKBOX.addEventListener('click', nadaAconteceFeijoada);

function somenteA (event){
    if (event.key!='a'){
        event.preventDefault();
    }
}

INPUT_TEXT.addEventListener('keypress', somenteA);