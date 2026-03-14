import { comments } from "./comments.js";

// Создать массив чисел от 1 до 10. 
// Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = array.filter(num => num >= 5);

console.log(result);

// Создать массив строк, относящихся к любой сущности 
// (название фильмов/книг, кухонные приборы, мебель и т.д.), 
// проверить, есть ли в массиве какая-то определенная сущность.
const fruits = ["яблоко", "банан", "апельсин", "груша", "ананас"];
const check = "банан";

console.log(fruits.includes(check) ? `${check} есть в массиве` : `${check} нет в массиве`);

// Написать функцию, которая аргументом будет принимать массив 
// и изменять его порядок на противоположный ("переворачивать"). 
// Два вышеуказанных массива с помощью этой функции перевернуть.
const arrayReverse = array => array.reverse();

arrayReverse(result);
arrayReverse(fruits);

console.log(result);
console.log(fruits);

// Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const getComEmails = comments.filter(comment => comment.email.includes(".com"));
console.log("Комментарии с .com:", getComEmails);

// Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, 
// а те, у кого id больше 5, имели postId: 1
comments.forEach(comment => comment.postId = comment.id <= 5 ? 2 : 1);
console.log("Комментарии с обновленным postId:", comments);

// Перебрать массив, что бы объекты состояли только из айди и имени
const getIdAndName = comments.map(comment => ({ id: comment.id, name: comment.name }));
console.log("Только id и name:", getIdAndName);

// Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
// если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
comments.forEach(comment => comment.isInvalid = comment.body.length > 180);
console.log("Комментарии с isInvalid:", comments);

// Почитать про метод массива reduce. Используя его, вывести массив почт 
// и провернуть тоже самое с помощью метода map
// reduce
const getEmailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log("Emails через reduce:", getEmailsReduce);

const getEmailsMap = comments.map(comment => comment.email);

console.log("Emails через map:", getEmailsMap);

// Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.
// toString
const emailsString1 = getEmailsMap.toString();
console.log("toString:", emailsString1);

const emailsString2 = getEmailsMap.join(", ");
console.log("join:", emailsString2);