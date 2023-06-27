const { characters, createElement, revealCard, createCard, loadGame, startTimer, checkCards, loop,
    finishGame } = require('../js/game.js');

// Teste da função characters
describe('characters', () => {
  test('deve retornar um array de objetos com as imagens e cores dos personagens', () => {
    const images = characters();
    expect(images).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: expect.any(String),
        bgColor: expect.any(String)
      })
    ]));
  });
});
// Teste da função createElement
describe('createElement', () => {
  test('deve criar um elemento com a tag e a classe especificadas', () => {
    const tag = 'div';
    const className = 'foo';
    const element = createElement(tag, className);
    expect(element.tagName.toLowerCase()).toBe(tag);
    expect(element.classList.contains(className)).toBe(true);
  });
});
// Teste da função revealCard
describe('revealCard', () => {
  test('deve adicionar a classe reveal-card ao elemento pai do alvo', () => {
    const parent = document.createElement('div');
    const target = document.createElement('img');
    target.parentNode = parent;
    revealCard({ target });
    expect(parent.classList.contains('reveal-card')).toBe(true);
  });
});
// Teste da função createCard
describe('createCard', () => {
  test('deve criar um elemento do tipo div com as classes "card", "face", "front" e "back"', () => {
    const image = { url: 'imagem.png', bgColor: '#000000' };
    const card = createCard(image);
    expect(card.tagName.toLowerCase()).toBe('div');
    expect(card.classList.contains('card')).toBe(true);
    expect(card.firstChild.tagName.toLowerCase()).toBe('img');
    expect(card.firstChild.classList.contains('face')).toBe(true);
    expect(card.firstChild.classList.contains('front')).toBe(true);
    expect(card.lastChild.tagName.toLowerCase()).toBe('div');
    expect(card.lastChild.classList.contains('face')).toBe(true);
    expect(card.lastChild.classList.contains('back')).toBe(true);
  });
});

// Teste da função loadGame
describe('loadGame', () => {
  test('deve criar as cartas no grid com base nas imagens retornadas pela função characters', () => {
    const spyCreateCard = jest.spyOn(window, 'createCard');
    loadGame();
    expect(spyCreateCard).toHaveBeenCalledTimes(characters().length * 2);
  });
});

// Teste da função startTimer
describe('startTimer', () => {
  test('deve iniciar o loop do timer', () => {
    startTimer();
    expect(loop).not.toBe(null);
  });
});

// Teste da função checkCards
describe('checkCards', () => {
  test('deve adicionar a classe disabled-card às cartas correspondentes quando as imagens forem iguais', () => {
    const firstImage = 'imagem1.png';
    const secondImage = 'imagem1.png';
    const firstCard = document.createElement('div');
    const secondCard = document.createElement('div');
    firstCard.setAttribute('data-image', firstImage);
    secondCard.setAttribute('data-image', secondImage);
    firstCard.firstChild = { classList: { add: jest.fn() } };
    secondCard.firstChild = { classList: { add: jest.fn() } };
    checkCards(firstCard, secondCard);
    expect(firstCard.firstChild.classList.add).toHaveBeenCalledWith('disabled-card');
    expect(secondCard.firstChild.classList.add).toHaveBeenCalledWith('disabled-card');
  });
 });
// Teste da função finishGame
describe('finishGame', () => {
  test('deve exibir uma mensagem de parabéns e habilitar o botão de reiniciar quando todas as cartas forem desabilitadas', () => {
    document.body.innerHTML = `
      <div>
        <div class="disabled-card"></div>
        <div class="disabled-card"></div>
        <div class="disabled-card"></div>
        <div class="disabled-card"></div>
        <div class="disabled-card"></div>
        <div class="disabled-card"></div>
        <div class="disabled-card"></div>
        <div class="disabled-card"></div>
        <div class="disabled-card"></div>`
       expect(finishGame()).toEqual(expect.stringContaining('Parabéns! Você ganhou o jogo!'));
    expect(document.querySelector('.restart-btn').disabled).toBe(false);
  });
});