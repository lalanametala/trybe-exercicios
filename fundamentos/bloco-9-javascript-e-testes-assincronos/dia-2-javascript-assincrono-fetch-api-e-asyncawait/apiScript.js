// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.querySelector('#jokeContainer');

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const data = await fetch(API_URL, myObject)
    .then((response) => response.json());

  jokeContainer.innerText = data.joke;
};

window.onload = fetchJoke;