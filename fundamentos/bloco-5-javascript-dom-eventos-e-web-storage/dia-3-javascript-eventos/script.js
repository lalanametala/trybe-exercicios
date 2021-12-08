function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function criaDias () {
    const listaDias = document.querySelector('#days');
    for (let dia of dezDaysList){
        let newDay = document.createElement('li');
        newDay.innerText=dia;
        newDay.className = 'day';
        if (dia == 24 || dia == 25 || dia == 31){
            newDay.classList.add('holiday');
        }
        if (dia == 4 || dia == 11 || dia == 18 || dia == 25) {
            newDay.classList.add('friday');
        }
        listaDias.appendChild(newDay);
    }
}
criaDias();

function botaoFeriados (feriados) {
    const parentDiv = document.querySelector('.buttons-container');
    const botaoHoliday = document.createElement('button');
    botaoHoliday.innerText = feriados;
    botaoHoliday.id = 'btn-holiday';
    parentDiv.appendChild(botaoHoliday);
}
botaoFeriados ('Feriados');

const botaoDeFeriado = document.querySelector('#btn-holiday');
let apertado = false;
botaoDeFeriado.addEventListener('click', function(event){
    let diasFeriado = document.querySelectorAll('.holiday');
    if (!apertado){
        for (let elemento of diasFeriado) {
            elemento.style.backgroundColor = 'green';
            apertado=true;                  
        }
    } else {
        for (let elemento of diasFeriado) {
            elemento.style.backgroundColor = 'rgb(238,238,238)';
            apertado=false;        
        }
    }
})

function botaoSexta (sexta) {
    const parentDiv = document.querySelector('.buttons-container');
    const botaoFriday = document.createElement('button');
    botaoFriday.innerText = sexta;
    botaoFriday.id = 'btn-friday';
    parentDiv.appendChild(botaoFriday);
}
botaoSexta ('Sexta-feira');

const botaoDeSexta = document.querySelector('#btn-friday');
let btnFridayApertado = false;
let diasSexta = document.querySelectorAll('.friday');
let arraYofSextas = [];
for (let elemento of diasSexta){
    let texto = elemento.innerText;
    arraYofSextas.push(texto);
}
botaoDeSexta.addEventListener('click', function(event){
    
    if (!btnFridayApertado){
        for (let elemento of diasSexta) {
            elemento.innerText = 'SEXTOU!';                              
        }
        btnFridayApertado=true;
    } else {
        for (let indice=0; indice< diasSexta.length; indice+=1) {
            diasSexta[indice].innerText=arraYofSextas[indice];                  
        }
        btnFridayApertado=false;  
    }
})

let dia = document.querySelector('#days');

function enlargeDay() {
    dia.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    })
}
enlargeDay();

function shrinkDay() {
    dia.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
    })
}
shrinkDay();

let divMyTasks = document.querySelector('.my-tasks');
function tarefaPersonalizada (tarefa) {
    let tarefaPers = document.createElement('span');
    tarefaPers.innerText = tarefa;    
    divMyTasks.appendChild(tarefaPers);
}
tarefaPersonalizada('Cozinhar');

function colorir (color) {
    let taskColor = document.createElement('div')
    taskColor.className = 'task';
    taskColor.style.backgroundColor = color;
    divMyTasks.appendChild(taskColor);
}

colorir('green');

let divColorida = document.querySelector('.task');
let isSelected = false;
divColorida.addEventListener('click', function(event){
    if (!isSelected){
        event.target.classList.add('selected');
        event.target.innerText='X';
        isSelected=true;
    } else {
        event.target.classList.remove('selected');
        event.target.innerText='';
        isSelected=false;
    }
})

let dayIsSelected = false;
function clickDayTask() {
    dia.addEventListener('click', function(event){
        if (!dayIsSelected){
            let corDeFundo = document.querySelector('.selected').style.backgroundColor;
            event.target.style.color = corDeFundo;
            dayIsSelected=true;
        } else {
            event.target.style.color = 'rgb(119,119,119)';
            dayIsSelected=false;
        }
    })
}
clickDayTask();

let textoCompromisso = document.querySelector('#task-input');
let listaDeCompromissos = document.querySelector('.task-list');
let botaoAdd = document.querySelector('#btn-add');

botaoAdd.addEventListener('click', function(){
    if (textoCompromisso.value.length>0){
        let novaLi = document.createElement('li');
        novaLi.innerText=textoCompromisso.value;
        listaDeCompromissos.appendChild(novaLi);
        textoCompromisso.value='';
    } else {
        alert('Erro! Campo vazio!');
    }
})

textoCompromisso.addEventListener('keyup', function(event){
    if (event.key === 'Enter'){
        if (textoCompromisso.value.length>0){
            let novaLi = document.createElement('li');
            novaLi.innerText=textoCompromisso.value;
            listaDeCompromissos.appendChild(novaLi);
            textoCompromisso.value='';
        } else {
            alert('Erro! Campo vazio!');
        }
    }
})

