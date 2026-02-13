const mainTitle = document.querySelector('.main-title');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

const colorBtn = document.querySelector('#color-btn');

colorBtn.addEventListener('click', () => {
  colorBtn.classList.toggle('purple');
});

// Задание 5.  
  // Создать функцию, которая принимает 2 параметра: 
  // город и температуру и выводит сообщение в консоль "Сейчас в Х температура - Y градусов по Цельсию"
function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}

showTemperature('Пхукете', 30)

// Создать переменную, которая хранит внутри себя скорость света (гуглим).
 // Создать функцию, которая принимает 1 аргумент - скорость, внутри функции происходит проверка: 
 // если переданная скорость выше скорости света — выводим лог "Сверхсветовая скорость", 
 // если ниже — "Субсветовая скорость"? если равна — "Скорость света"
 const speedLight = 300000

 function checkSpeed(speed) {
  if (speed > speedLight) {
    console.log('Сверхсветовая скорость');
  } else if (speed < speedLight) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

//  checkSpeed(2000000)
//  checkSpeed(1000)
 checkSpeed(300000)

// Создать переменную №1, которая содержит продукт и переменную №2, 
 // которая содержит его цену (на ваше усмотрение). Далее создаем функцию, 
 // которая принимает 1 параметр - текущий бюджет, внутри функции происходит проверка: 
 // если бюджет превышает цену товара - выводим лог "(ваше название товара) приобретён. Спасибо за покупку!", 
 // если нет - обсчитываем разницу и выводим лог "Вам не хватает X$, пополните баланс". 
 // То-есть с помощью функции мы пытаемся приобрести товар.
const product = 'Тортик'
const price = 55

function buyProduct(currentBudget) {
  if (currentBudget > price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - currentBudget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`)
  }
}

// buyProduct(5000)
buyProduct(54)

// Создать 1 функцию и именовать её по своему усмотрению
function deleteFile(pictures) {
  console.log(`На сайте ${pictures} плохого качества`)
}

deleteFile('изображения')

// Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению
const cat = 'Зёма'
let weight = 5
let age = 6

console.log(`Кота зовут ${cat}, он весит ${weight} килограмм и ему ${age} лет`)
