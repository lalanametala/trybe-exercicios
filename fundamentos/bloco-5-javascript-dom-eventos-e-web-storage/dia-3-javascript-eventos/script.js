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