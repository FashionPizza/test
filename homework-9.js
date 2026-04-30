import { Modal } from './Modal.js';
import { Form } from './Form.js';

const registrationModal = new Modal('js-modal');
const registrationForm = new Form('reg-form');
const subscribeForm = new Form('subscribe-form');

const btn = document.getElementById('register-btn');
btn.addEventListener('click', () => {
  registrationModal.openModal();
});

// ===== Форма подписки =====
subscribeForm.form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!subscribeForm.isValid()) {
    alert('Введите корректный email');
    return;
  }

  const data = subscribeForm.getValues();

  console.log(data);

  subscribeForm.reset();
});

const form = document.getElementById('reg-form');

const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeatPassword');

let user = null;

// Отправка формы регистрации
registrationForm.form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!registrationForm.isValid()) {
    alert('Регистрация отклонена! Проверьте данные.');
    return;
  }

  const password = registrationForm.form.querySelector('#password');
  const repeatPassword = registrationForm.form.querySelector('#repeatPassword');

  if (password.value !== repeatPassword.value) {
    alert('Регистрация отклонена! Пароли не совпадают.');
    return;
  }

  const data = registrationForm.getValues();
  data.createdOn = new Date();

  let user = data;

  console.log('Регистрация успешна!', user);

  registrationModal.closeModal();
  registrationForm.reset();
});

