const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');
const allInputs = document.getElementsByTagName('input');

function clearAll() {
  for (let index = 0; index < allInputs.length; index += 1) {
    allInputs[index].value = '';
  }
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

clearBtn.addEventListener('click', clearAll());
