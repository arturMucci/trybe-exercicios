const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://icanhazdadjoke.com/j/R7UfaahVfFd';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();
