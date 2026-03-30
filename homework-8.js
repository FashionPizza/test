import { productCards } from "./product-cards.js";

// 1. Как и в прошлых заданиях - создаем отдельный файл для homework-8
// и подключаем его в HTML с атрибутом type = module (что бы работали импорты)

// 2. Создаем файл js, где будет хранится массив объектов, которые представляют собой 
// продуктовые карточки из вёрстки (имейте ввиду, UI-данные не относятся к данным продукта. Гуглите). 
// Вам нужно описать полностью объект и продублировать его для всех карточек 
// и после импортировать в homework-8 для дальнейшей работы с ним.

// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек. 
// (Посмотрите сразу задание 5)

// 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, 
// а значением - его описание

// 5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить?
// От 1 до 5" и в зависимости от результата - будет выводить введенное количество. 
// Должна быть защита от ввода других значений (проверка if). 
// То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, 
// другая - рендерить эти карточки (принимая массив аргументом)
const template = document.getElementById('product-card-template');
const container = document.querySelector('.product-card-wrapper');

const productsMap = productCards.reduce((acc, { title, description }) => {
  acc.push({ [title]: description });
  return acc;
}, []);

console.log(productsMap);

function getCardsCount() {
  const count = prompt("Сколько карточек отобразить? От 1 до 5?");
  if (count === null || isNaN(count) || count < 1 || count > 5) {
    alert("Введите число от 1 до 5!");
    return getCardsCount();
  }
  return Number(count);
}

function renderCards(cards) {
  container.innerHTML = "";
  cards.forEach(cardData => {
    const clone = template.content.cloneNode(true);
    
    const img = clone.querySelector('.product-card__img');
    img.src = `../images/${cardData.img}.png`;
    img.alt = cardData.title;

    clone.querySelector('.product-card__skin-type').textContent = cardData.skinType;
    clone.querySelector('.product-card__name').textContent = cardData.title;
    clone.querySelector('.product-card__descr').textContent = cardData.description;

    const list = clone.querySelector('.product-card__ingredients-list');
    cardData.composition.forEach(item => {
      const li = document.createElement('li');
      li.classList.add("product-card__ingredients-item");
      li.textContent = item;
      list.appendChild(li);
    });

    clone.querySelector('.product-card__price').textContent = `${cardData.price} ${cardData.currency}`;

    container.appendChild(clone);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const count = getCardsCount();
  const cardsToRender = productCards.slice(0, count);
  renderCards(cardsToRender);
});