# Memory Match Game

## Índice

- [1. Considerações gerais](#1-Considerações-gerais)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Definição do produto](#3-Definição-do-produto)
- [4.  Histórias de usuário](#4-Histórias-de-usuário)
- [5. Desenho da Interface de Usuário](#5-Desenho-da-Interface-de-Usuário)
- [6. Checklist](#6-checklist)
- [7. Meu Projeto](#7-meu-projeto)

---
## 1. Considerações gerais

- Este foi realizado atravéz do bootcamp da Laboratoria
- O projeto foi entregue subindo o meu código no GitHub (commit/push) e a
  interface será publicada usando [GitHub Pages].
- Tempo para completá-lo: realizado em 3 semanas.

## 2. Resumo do projeto

jogo da memória voltado aos amantes do mesmo e que queiram ver algumas figuras de linguagens de programação, aproveita ai galera e conheçam cada uma delas

## 3. Definição do produto
Jogo da memória contendo 20 simbolos de linhguens de programação, onde o jogador só pode abrir 1 carta por vez e no maximo 2 cartas, fechando-as caso não sejam identicas e se forem identicas ficam inativas para o clicke contando para finalizar o jogo, após as 20 eestarem inativas para click o botão de reiniciar o jogo é ativado assim o jogadpor poderá voltar ao inicio do jogo e tentar um novo tempo se assim desejar.


## 4. Histórias de usuário

Pensei em um jogo voltado aos amantes de linguagens de programação que queiram exercitar a memoria e localizar o parzinho de cada figurinha aberta, o jogo é dinamico e o jogador não consegue abrir mais de 2 cartas por vez e tem o tempo sendo cronometrado e também com um botão para reiniciar o jogo caso prefira jogar novamente porém o botão só pode ser clicado ao finalizar o atual jogo em curso, lembrando que não adianta só recarregar a página pois toda vez que recarrega ou reinicia o jogo todos ossimbolos são embaralhados novamente. Então vamos ao game e divirtam-se!!! 

## 5. Desenho da Interface de Usuário

#### Protótipo de baixa fidelidade
![memory](https://github.com/acarlamelo/SAP009-memory-match/assets/119886217/59067707-331f-4b45-9d6f-92679561176d)
![memory2](https://github.com/acarlamelo/SAP009-memory-match/assets/119886217/0fd483be-2d4d-44a3-9c3a-6cba3bbe0435)


#### Protótipo de alta fidelidade
![labmem](https://github.com/acarlamelo/SAP009-memory-match/assets/119886217/ba183d17-365c-4f86-93c7-27152214f865)

![labmem1](https://github.com/acarlamelo/SAP009-memory-match/assets/119886217/d80d25ae-417b-49b3-91ef-21fa6b86b77e)

![labmem2](https://github.com/acarlamelo/SAP009-memory-match/assets/119886217/f6e3817a-70a5-4043-ad20-3aa93d68dac3)

### Implantação de la Interface de Usuário (HTML/CSS/JS)

Assim que desenhar sua interface de usuário, deve trabalhar em sua implantação.
**Não** é necessário que construa a interface exatamente como foi desenhado.
O tempo de hacking é escasso, assim deverá priorizar

Como mínimo, sua implantação deve:

1. Dado um set de cartas, embaralhar as cartas e mostrá-las na interface.
2. Permitir al usuário _virar_ as cartas de 2 em 2.
3. Os pares encontrados devem permanecer viradas para cima.
4. Indicar ao usuário que ganhou quando conseguir virar todas as cartas.
5. Ser _responsiva_, ou seja, deve ser visualizada sem problemas a partir de
   diversos tamanhos de tela: celulares, tablets e desktops.
6. Que a interface siga os fundamentos de _visual design_.


#### Desenvolvimento Front-End

- Unidade de testes do curso de JavaScript do LMS.
- Unidade de arrays do curso de JavaScript do LMS.
- Unidade de objetos do curso de JavaScript do LMS.
- Unidade de funções do curso de JavaScript do LMS.
- Unidade de DOM do curso de JavaScript do LMS.
- [Array no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array.map no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.sort no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.filter no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro)
- [Array.reduce no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Array.forEach no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Object.keys no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.entries no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [Fetch API no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [json.org](https://json.org/json-pt.html)
- [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
- [Módulos: Export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
- [Módulos: Import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)

#### Ferramentas

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)

## 6. Checklist

- [X] Usar VanillaJS.
- [X] Passa pelo linter (`npm run pretest`)
- [X] Passa pelos testes (`npm test`)
- [X] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
- [X] Inclui uma _definição de produto_ clara e informativa no `README.md`.
- [X] Inclui histórias de usuário no `README.md`.
- [X] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
- [X] Inclui _Desenho da Interface de Usuário_ (protótipo de alta fidelidade)
      no `README.md`.
- [X] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
- [X] UI: Mostra cartas _embaralhadas_ corretamente.
- [X] UI: Permite o usuário _virar_ as cartas de 2 em 2.
- [X] UI: Deixa os pares que foram formados virados.
- [X] UI: Informar o usuário que ganhou quando for relevante.
- [X] UI: É _responsivo_.
- [X] UI: A interface segue os fundamentos de _visual design_.

  ## 7. Meu Projeto

Delicie-se com o jogo => https://acarlamelo.github.io/SAP009-memory-match/
