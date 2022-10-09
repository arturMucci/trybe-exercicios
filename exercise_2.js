// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => batata = response.json())
    .then((batata) => jokeContainer.innerText = batata.joke);
};

window.onload = () => fetchJoke();
