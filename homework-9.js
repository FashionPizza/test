// К Форме, которая прикреплена в футере - добавить логику: email должен соответствовать стандартам 
// (добавить валидацию), если он не заполнен - форма не отправляется. 
// Кнопка "Подписаться" и есть "отправкой формы", при нажатии на которую мы будем выводить консоль лог в виде объекта:  
// { email: 'введенная почта' }
// ===== Форма подписки =====
const testEmailForm = document.querySelector('#subscribe-form');

testEmailForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const emailInput = form.querySelector('input[name="email"]');
  if (!emailInput.checkValidity()) {
    alert('Введите корректный email');
    return;
  }

  console.log(data);
  form.reset();
});

//  Создать кнопку "Регистрация". Создать модальное окно, используя классы "modal, modal-showed". 
// Логика такая: при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal. 
// Не забываем добавить кнопку для закрытия модалки (крестик в углу). Важные правила создания модалки:
// 1) Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который будет затемнять всю страницу)
// 2) Модальное окно находиться ровно по центру страницы, независимо от масштаба
// Элементы управления

//  Создать форму для регистрации внутри модального окна. Она должна содержать поля: 
// имя, фамилия, дата рождения, логин, пароль, повторение пароля. 
// Используйте <label> для того, что бы указать пользователю, какое поле за что отвечает. 
// Также важно использовать placeholder (обо всем этом можно будет почитать в документации в конце поста). 
// Разрешается добавить поля на ваше усмотрение. Все поля должны иметь валидацию. 
// Если пользователь ввел два разных пароля или форма невалидна (используем метод checkValidity()) - 
// мы должны предупредить его о том, что регистрация отклонена. 
// Если регистрация успешна - выводим значения формы в лог, как в задании №4. 
// Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date()). 
// Также создайте внешнюю переменную user и присвойте ей этот объект. После успешной регистрации - модалка должны закрыться. 
// ===== Модальное окно =====
const btn = document.getElementById('register-btn');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal__close');
const form = document.getElementById('reg-form');

const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeatPassword');

let user = null;

// Открытие модалки
btn.addEventListener('click', () => {
  modalWindow.classList.add('modal-showed');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden'; 
});

// Закрытие модалки
function closeModal() {
  modalWindow.classList.remove('modal-showed');
  overlay.classList.remove('show');
  document.body.style.overflow = ''; 
  form.reset(); 
}

// Закрытие по крестику
closeBtn.addEventListener('click', closeModal);

// Закрытие по клику на overlay
overlay.addEventListener('click', closeModal);

// Отправка формы регистрации
form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!form.checkValidity()) {
    alert('Регистрация отклонена! Проверьте данные.');
    return;
  }

  if (passwordInput.value !== repeatPasswordInput.value) {
    alert('Регистрация отклонена! Пароли не совпадают.');
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  data.createdOn = new Date();
  user = data;
  console.log('Регистрация успешна!', user);
  closeModal();
});

