import data from "../data/webdev/webdev.js"

const grid = document.querySelector('#grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
let loop = 0;

const characters = () => {
  const imageUrls = data.items.map((item) => { return { url: item.image, bgColor: item.bgColor } });
  return imageUrls;
};

const imageArray = characters();

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const finishGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');
  
  if (disabledCards.length === 20) {   
    clearInterval(loop);
    alert(`Parabéns, ${spanPlayer.innerHTML} seu tempo foi: ${timer.innerHTML}s`);
    document.querySelector('.restart-button').disabled = false; // habilita o botão de reiniciar
    document.querySelector('.restart-button').addEventListener('click', (e) => {
      e.preventDefault();
      window.location = './index.html';
    });
  }
}


const checkCards = () => {
  const firstImage = firstCard.getAttribute('data-image');
  const secondImage = secondCard.getAttribute('data-image');

  if (firstImage === secondImage) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    finishGame();
    
  } else {

    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);

  }
}
const revealCard = ({ target }) => {
  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }
  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();
  }

}

const createCard = (image) => {
  const card = createElement('div', 'card');
  const front = createElement('img', 'face front');
  const back = createElement('div', 'face back');
  front.style.backgroundColor = image.bgColor;
  front.setAttribute('src', image.url);

  card.appendChild(front);
  card.appendChild(back);
  card.addEventListener('click', revealCard);
  card.setAttribute('data-image', image.url);

  return card;
}

const loadGame = () => {

  const doubleImages = [...imageArray, ...imageArray];

  const mixArray = doubleImages.sort(() => Math.random() - 0.5);

  mixArray.forEach((image) => {

    const card = createCard(image);
    grid.appendChild(card);

  });
}

const startTimer = () => {

  loop = setInterval(() => {
    const nowTime = +timer.innerHTML;
    timer.innerHTML = nowTime + 1;
  }, 1000);

}
window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}



