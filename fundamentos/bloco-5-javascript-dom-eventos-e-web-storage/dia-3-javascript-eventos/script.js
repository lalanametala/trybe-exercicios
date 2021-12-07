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