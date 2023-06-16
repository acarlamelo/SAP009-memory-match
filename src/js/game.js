import data from "../data/webdev/webdev.js"

const grid = document.querySelector('#grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = () => {
const imageUrls = data.items.map((item) => item.image);
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
    alert('Parabéns, conseguiu todas!!');
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

  setTimeout (() => {
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
  const card = createElement('div','card');
  const front = createElement('img','face front');
  const back = createElement('div', 'face back');

  front.setAttribute('src', image);

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click' , revealCard);
  card.setAttribute('data-image', image);

  return card;
}

const loadGame = () => {

  const doubleImages = [ ...imageArray, ...imageArray ];

  const mixArray = doubleImages.sort(() => Math.random() -0.5);

  mixArray.forEach((image) => {

    const card = createCard(image);
    grid.appendChild(card);

  });
}

loadGame();

