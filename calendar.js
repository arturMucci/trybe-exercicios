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

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const monthDays = document.getElementById('days');

function checkHoliday(day) {
  if (day.innerText == 4) {
    day.className += ' friday';
  }
  if (day.innerText == 11) {
    day.className += ' friday';
  }
  if (day.innerText == 18) {
    day.className += ' friday';
  }
  if (day.innerText == 24) {
    day.className += ' friday';
  }
  if (day.innerText == 25) {
    day.className += ' holiday friday';
  }
  if (day.innerText == 31) {
    day.className += ' holiday';
  }
}

function insertDays() {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const days = document.createElement('li');
    days.innerText = JSON.stringify(decemberDaysList[index]);
    days.className = 'days';
    checkHoliday(days);
    monthDays.appendChild(days);
  }
}

window.addEventListener('load', insertDays());
