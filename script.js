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

showTemperature('Пхукете', 30);

// Создать переменную, которая хранит внутри себя скорость света (гуглим).
 // Создать функцию, которая принимает 1 аргумент - скорость, внутри функции происходит проверка: 
 // если переданная скорость выше скорости света — выводим лог "Сверхсветовая скорость", 
 // если ниже — "Субсветовая скорость"? если равна — "Скорость света"
 const SPEED_LIGHT = 300000;

 function checkSpeed(speed) {
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

 checkSpeed(300000);

// Создать переменную №1, которая содержит продукт и переменную №2, 
 // которая содержит его цену (на ваше усмотрение). Далее создаем функцию, 
 // которая принимает 1 параметр - текущий бюджет, внутри функции происходит проверка: 
 // если бюджет превышает цену товара - выводим лог "(ваше название товара) приобретён. Спасибо за покупку!", 
 // если нет - обсчитываем разницу и выводим лог "Вам не хватает X$, пополните баланс". 
 // То-есть с помощью функции мы пытаемся приобрести товар.
const product = 'Тортик';
const price = 55;

function buyProduct(currentBudget) {
  if (currentBudget > price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - currentBudget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

buyProduct(54);

// Создать 1 функцию и именовать её по своему усмотрению
function improveFile(pictures) {
  console.log(`${pictures} плохого качества можно улучшить на этом сайте`);
}

improveFile('изображения');

// Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению
const cat = 'Зёма';
let weight = 5;
let age = 6;

console.log(`Кота зовут ${cat}, он весит ${weight} килограмм и ему ${age} лет`);

// Создайте объект на основе ваших данных. 
// Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений и так далее. 
// Чем больше - тем лучше (но не увлекайтесь, до 10 максимум). 
// Подберите правильное название для переменной.
const user = {
  name: 'Ruslan',
  surname: 'Mamedov',
  mail: 'azer7stambul1030@gmail.com',
  favoriteSport: 'darts',
  favoriteDish: 'Джыз-быз',
  age: 33,
  country: 'Azerbaijan',
  city: 'Baku',
  continent: 'Eurasia',
  favoriteTeaBrand: 'Azercay'
}

console.log(user);

// Создайте объект, который будет хранить данные об автомобиле 
// (марка, модель, год выпуска, цвет, вид коробки). 
// Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, 
// описанный в пункте №3. Желательно добавлять отдельной строкой 
// (имеется ввиду не при создании объекта)
const carDetails = {
  make: 'cadillac',
  model: 'series 62 convertible',
  year: '1958',
  color: 'light blue',
  transmission: 'automatic' 
}

carDetails.owner = user;

console.log(carDetails);

// Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. 
// Она проверяет, есть ли в объекте свойство "максимальная скорость", 
// если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)
function addMaxSpeedValue(car) {
  if (!car.hasOwnProperty('maxSpeed')) {
    car.maxSpeed = 333;
  }
}
addMaxSpeedValue(carDetails);
console.log(carDetails);

// Написать функцию, которая получает первым аргументом — объект, 
// а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
function printPropertyValue(object, property) {
  console.log(property + ': ' + object[property]);
}

printPropertyValue(carDetails, 'model');

// Создать массив, который содержит названия продуктов (просто строки)
const food = ['плов', 'бургер', 'суп', 'салат', 'шаурма'];

// Создать массив, состоящий из объектов, где объект представляет собой книгу 
// (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). 
// После, используя известный нам метод массив, добавить еще одну книгу в конец списка. 
// Можете заменить книги на фильмы, или другую сущность, идею вы поняли.
const books = [
  { 
    title: 'Кто съел мой пирожок?',
    author: 'Джордж Игнасио',
    year: '1959',
    coverColor: 'синий',
    genre: 'детектив'
  },
  { 
    title: 'Большая пицца',
    author: 'Чак Ли',
    year: '2025',
    coverColor: 'зеленый',
    genre: 'кулинария'
  },
  { 
    title: 'Шоколадные рецепты',
    author: 'Джон Роулинг',
    year: '2009',
    coverColor: 'белый',
    genre: 'кулинария'
  }
];

books.push({ 
  title: 'Рецепт борща',
  author: 'Себастьян Лукас',
  year: '2015',
  coverColor: 'серый',
  genre: 'кулинария'
});
console.log(books);

// Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной 
// (Гарри Поттер, Марвел и так далее). (Если используете другую, свою сущность - импровизируйте). 
// С помощью известного нам метода массива или оператора (рекомендую использовать оператор), 
// объединить эти два массива в один
const kitchenBooks = [
  { 
    title: 'Салаты',
    author: 'Чак Ли',
    year: '2001',
    coverColor: 'красный',
    genre: 'кулинария'
  },
  { 
    title: 'Рецепты на утро',
    author: 'Чак Ли',
    year: '2006',
    coverColor: 'белый',
    genre: 'кулинария'
  },
  { 
    title: 'Как стать поваром',
    author: 'Чак Ли',
    year: '1998',
    coverColor: 'красный',
    genre: 'кулинария'
  }
];

const allBooks = [... books, ... kitchenBooks];
console.log(allBooks);

// Почитать про метод массива — map. 
// Написать функцию, которая принимает массив сущностей с задания №9. 
// Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги 
// (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false. 
// Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий),
// нет - false (значит это не редкий).
function markRareBooks(myBooks) {
  return myBooks.map(book => ({
    ...book,
    isRare: book.year > 2000
  }))
};

const updatedBooks = markRareBooks(kitchenBooks);
console.log(updatedBooks);