// Cabecalho
const container = document.getElementById('container');
const header = document.getElementById('header-container');

container.style.backgroundColor = 'rgb(243, 243, 243)';
header.style.textAlign = 'center';
header.style.backgroundColor = '#00b069';
header.style.color = '#ffffff';

// Conteúdo

const emergencyTasks1 = document.getElementsByClassName('emergency-tasks')[0];
const emergencyTasks2 = document.getElementsByClassName('no-emergency-tasks')[0];

let titleSection1_1 = document.querySelectorAll('.emergency-tasks div h3');
let titleSection1_2 = document.querySelectorAll('.emergency-tasks div:nth-child(2) h3');
let titleSection2_1 = document.querySelectorAll('.no-emergency-tasks div h3');
let titleSection2_2 = document.querySelectorAll('.no-emergency-tasks div:nth-child(2) h3');
const footer = document.getElementById('footer-container');
emergencyTasks1.style.backgroundColor = 'rgb(255, 159, 132)';
emergencyTasks2.style.backgroundColor = 'rgb(249,219,94)';
footer.style.backgroundColor = 'rgb(0, 53, 51)';

for (let index = 0; index < titleSection1_1.length; index += 1) {
  titleSection1_1[index].style.backgroundColor = 'rgb(165, 0, 243)';
  titleSection1_2[index].style.backgroundColor = 'rgb(165, 0, 243)';
  titleSection2_1[index].style.backgroundColor = 'rgb(35, 37, 37)';
  titleSection2_2[index].style.backgroundColor = 'rgb(35, 37, 37)';
} 

/* console.log(titleSection1_1); */
/* header  */
/* fundoSection2 rgb(249,219,94) */
/* footer rgb (0, 53, 51) */
/* console.log(emergencyTasks1); */
