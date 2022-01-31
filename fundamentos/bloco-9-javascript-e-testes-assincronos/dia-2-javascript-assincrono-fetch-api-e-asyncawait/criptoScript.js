const API_URL = 'https://api.coincap.io/v2/assets';
const currencyList = document.querySelector('#currency-list');

const createLi = (currency) => {
  const newLi = document.createElement('li');
  newLi.innerHTML = `${currency.name} (${currency.symbol}): ${parseFloat(currency.marketCapUsd).toFixed(2)}`
  currencyList.appendChild(newLi);
}

async function loadApi () {
  let arrayOfCrypto = await fetch(API_URL)
    .then((response) => response.json());

  console.log(arrayOfCrypto);
  
  arrayOfCrypto = arrayOfCrypto.data.filter((currency, index) => index < 10);

  console.log(arrayOfCrypto);

  arrayOfCrypto.forEach(element => {
    createLi(element);  
  });
}

window.onload = loadApi;