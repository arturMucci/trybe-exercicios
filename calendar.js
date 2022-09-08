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
const btnContainer = document.getElementsByClassName('buttons-container')[0];
const holidays = document.getElementsByClassName('holiday');
const friday = document.getElementsByClassName('friday');
const allDays = document.getElementsByClassName('day');
const btnAdd = document.getElementById('btn-add');
const myTsks = document.getElementsByClassName('my-tasks')[0];
const tskInput = document.getElementById('task-input');

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
    teste.className += ' holiday';
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

function insertBtnHoliday() {
  const btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerText = 'Feriados';
  btnHoliday.addEventListener('click', changeHolidayColors);
  btnContainer.appendChild(btnHoliday);
}

function insertBtnFriday() {
  const btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  btnFriday.innerText = 'Sexta-feira';
  btnFriday.addEventListener('click', changeFridayText);
  btnContainer.appendChild(btnFriday);
}

function changeHolidayColors() {
  if (holidays[0].style.backgroundColor === 'rgb(238, 238, 238)') {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'rgb(200, 200, 200)';
    }
  } else if (holidays[0].style.backgroundColor === 'rgb(200, 200, 200)') {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'rgb(238, 238, 238)';
    }
  }
}

function changeFridayText() {
  const fridays = [4, 11, 18, 25];
  for (let index = 0; index < friday.length; index += 1) {
    if (friday[index].innerText !== 'Sextou!') {
      friday[index].innerText = 'Sextou!';
    } else if (friday[index].innerText === 'Sextou!') {
      friday[index].innerText = fridays[index];
    }
  }
}

function insertColorInput() {
  const colorInput = document.createElement('input');
  colorInput.type = 'color';
  colorInput.style.marginLeft = '10px';
  colorInput.id = 'tsk-color';
tskInput.insertAdjacentElement('afterend', colorInput);
}
insertColorInput();

function zoomIn(event) {
  const element = event.target;
  element.style.fontSize = '26px';
}

function zoomOut(event) {
  const element = event.target;
  element.style.fontSize = '20px';
}

function addTask() {
  const tskContainer = document.createElement('section');
  const newTsk = document.createElement('span');
  newTsk.innerText = tskInput.value;
  newTsk.style.backgroundColor = 
  tskContainer.appendChild(newTsk);
  tskContainer.className = 'task';
  tskContainer.style.backgroundColor = colorTsk;
  myTsks.appendChild(tskContainer);
}

window.addEventListener('load', () => {
  insertDays();
  insertBtnHoliday();
  insertBtnFriday();
  for (let index = 0; index < allDays.length; index += 1) {
    allDays[index].style.lineHeight = '26px';
    allDays[index].addEventListener('mouseover', zoomIn);
    allDays[index].addEventListener('mouseleave', zoomOut);
  }
  
  btnAdd.addEventListener('click', addTask);
});
