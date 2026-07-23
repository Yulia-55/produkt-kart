
const productCards = document.querySelectorAll('.products__item');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#00FF00';
const yellowColorHash = '#FFFF00';
const googleUrl = 'https://google.com';

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

const productCard = document.querySelector('.products__item');
const changeColorFirstCardButton = document.querySelector('#change-color-firstcard');

changeColorFirstCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = yellowColorHash;
})

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer === true) {
    window.open(googleUrl);
  }
}

const outputConsoleLogButton = document.querySelector('#outputConsoleLog');
outputConsoleLogButton.addEventListener('click', () => outputConsoleLog('Д/з №4'));
function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

const title = document.querySelector('.catalog__title');

title.addEventListener('mouseover', () => {
    console.log(title.textContent);
});

const changeColorBackgroundButton = document.querySelector('#change-color-background-button');
changeColorBackgroundButton.addEventListener('click', () => {
  changeColorBackgroundButton.classList.toggle('active');
})