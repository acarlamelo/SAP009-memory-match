import { validateInput, handleSubmit } from '../js/login.js';

describe('validateInput', () => {
  let button;

  beforeEach(() => {
    document.body.innerHTML = `
      <input class="login-input">
      <button class="login-button" disabled></button>
      <form class="login-form"></form>
    `;
    button = document.querySelector('.login-button');
  });

  it('deve habilitar o botão de login quando o valor do input tem pelo menos 3 caracteres', () => {
    const input = document.querySelector('.login-input');
    input.value = 'abc';

    validateInput();

    expect(button.getAttribute('disabled')).toBe(null);
  });

  it('deve desabilitar o botão de login quando o valor do input tem menos de 3 caracteres', () => {
    const input = document.querySelector('.login-input');
    input.value = 'ab';

    validateInput();

    expect(button.getAttribute('disabled')).toBe('');
  });
});

describe('handleSubmit', () => {
  let event;
  let input;
  let windowLocation;
  let localStorage;

  beforeEach(() => {
    event = { preventDefault: jest.fn() };
    input = { value: '' };
    windowLocation = { location: { href: '' } };
    localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };

    // Adiciona o código de validação e submissão do formulário aqui
    const form = document.getElementById('form');
    const button = document.querySelector('.login-button');

    function validateInput() {
      if (input.value.length >= 3) {
        button.removeAttribute('disabled');
      } else {
        button.setAttribute('disabled', true);
      }
    }

    function handleSubmit(event) {
      event.preventDefault();
      if (!input.value) {
        return;
      }
      localStorage.setItem('player', input.value);
      window.location.href = '../pages/game.html';
    }

    input.addEventListener('input', validateInput);
    form.addEventListener('submit', handleSubmit);
  });

  it('deve armazenar o nome do jogador no localStorage e redirecionar para a página do jogo', () => {
    input.value = 'jogador';
    handleSubmit(event, input, windowLocation, localStorage);

    expect(localStorage.setItem).toHaveBeenCalledWith('player', 'jogador');
    expect(windowLocation.location.href).toBe('../pages/game.html');
  });

  it('deve impedir o envio do formulário se o input estiver vazio', () => {
    input.value = '';
    handleSubmit(event, input, windowLocation, localStorage);

    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(windowLocation.location.href).toBe('');
  });
});