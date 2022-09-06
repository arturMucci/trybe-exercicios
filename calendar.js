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
const allDays = document.getElementsByClassName('day');
const btnContainer = document.getElementsByClassName('buttons-container')[0];
const holidays = document.getElementsByClassName('holiday');

function changeClassName(teste) {
  if (teste.innerText == 4) {
    teste.className += ' friday';
  }
  if (teste.innerText == 11) {
    teste.className += ' friday';
  }
  if (teste.innerText == 18) {
    teste.className += ' friday';
  }
  if (teste.innerText == 24) {
    teste.className += ' friday';
  }
  if (teste.innerText == 25) {
    teste.className += ' holiday friday';
  }
  if (teste.innerText == 31) {
    teste.className += ' holiday';
  }
  return teste;
}

function insertDays() {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = document.createElement('li');
    day.className = 'day';
    day.innerText = decemberDaysList[index];
    day.style.backgroundColor = 'rgb(238, 238, 238)';
    day.style.borderRadius = '10%';
    changeClassName(day);
    monthDays.appendChild(day);
  }
}

function insertBtn() {
  const btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerText = 'Feriados';
  btnHoliday.addEventListener('click', changeHolidayColors);
  btnContainer.appendChild(btnHoliday);
}

function changeHolidayColors() {
  if (holidays[0].style.backgroundColor === 'rgb(238, 238, 238)') {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'rgb(200, 200, 200)';
    }
  } else  if (holidays[0].style.backgroundColor === 'rgb(200, 200, 200)') {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'rgb(238, 238, 238)';
    }
  }
}

window.addEventListener('load', () => {
  insertDays();
  insertBtn();
});
