import { validateInput, handleSubmit } from '../js/login.js';

describe(validateInput, () => {
    let button;
  
    beforeEach(() => {
      document.body.innerHTML = `
        <input class="login-input">
        <button class="login-button" disabled></button>
        <form class="login-form"></form>
      `;
      button = document.querySelector('.login-button');
    });
  
    it( () => { //deve habilitar o botão de login quando o valor do input tem pelo menos 3 caracteres//
      const input = document.querySelector('.login-input');
      input.value = 'abc';
  
      const event = new Event('input');
      input.dispatchEvent(event);
  
      expect(button.getAttribute('disabled')).toBe(null);
    });
  
    it(() => { //deve desabilitar o botão de login quando o valor do input tem menos de 3 caracteres//
      const input = document.querySelector('.login-input');
      input.value = 'ab';
  
      const event = new Event('input');
      input.dispatchEvent(event);
  
      expect(button.getAttribute('disabled')).toBe('');
    });
  });
  
  describe(handleSubmit, () => {
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
    });
  
    it( () => { //deve armazenar o nome do jogador no localStorage e redirecionar para a página do jogo//
      input.value = 'jogador';
      handleSubmit(event, input, windowLocation, localStorage);
  
      expect(localStorage.setItem).toHaveBeenCalledWith('player', 'jogador');
      expect(windowLocation.location.href).toBe('../pages/game.html');
    });
  
    it(() => { //deve impedir o envio do formulário se o input estiver vazio //
      input.value = '';
      handleSubmit(event, input, windowLocation, localStorage);
  
      expect(localStorage.setItem).not.toHaveBeenCalled();
      expect(windowLocation.location.href).toBe('');
    });
  });

  describe(handleSubmit, () => {
    let input;
    let windowLocation;
    let localStorage;
  
    beforeEach(() => {
      document.body.innerHTML = `
        <input class="login-input" value="jogador">
        <button class="login-button"></button>
        <form class="login-form"></form>
      `;
      input = document.querySelector('.login-input');
      windowLocation = {
        location: {
          href: '',
        },
      };
      localStorage = {
        setItem: jest.fn(),
      };
    });
  
    it ( () => { //deve armazenar o nome do jogador no localStorage e redirecionar para a página do jogo//
      const eventSubmit = new Event('submit');
      const form = document.querySelector('.login-form');
      form.dispatchEvent(eventSubmit);
  
      expect(localStorage.setItem).toHaveBeenCalledWith('player', 'jogador');
      expect(windowLocation.location.href).toBe('../pages/game.html');
    });
  
    it( () => { //deve impedir o envio do formulário se o input estiver vazio//
      input.value = '';
      const eventSubmit = new Event('submit');
      const form = document.querySelector('.login-form');
      form.dispatchEvent(eventSubmit);
  
      expect(localStorage.setItem).not.toHaveBeenCalled();
      expect(windowLocation.location.href).toBe('');
    });
  });