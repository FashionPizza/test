// localStorage.clear();
// это для сценария, если нужно увидеть ошибку

/* Домашнее задание:
1. Создать папку "async", в ней async.html, async.js. Дополнительно создать JSON файл
 и заполнить его данными: в нем будет массив с пользователями (users), состоящий из объектов с полями:
 id, name, surname, email, age (некий симулятор базы данных). Упомянутые поля — обязательны, остальные на ваш вкус.

2. Реализовать данную концепцию:
  При переходе на async.html мы отображаем по центру страницы строку: "Данные загружаются".
  Это в том случае, если локальное хранилище не заполнено данными и мы еще не сделали запрос.

  Что бы запросить данные - мы должны сделать запрос через fetch (используйте setTimeout для симуляции длительной загрузки)
  к нашему json файлу и получив их - сохранить в локальное хранилище (если их там не было при загрузке страницы.
  Если данные изначально были в локальном хранилище, то делать запрос — нет смысла).

  Отобразить пользователей в виде карточек, по центру страницы, убрав надпись: "данные загружаются".
  Реализовать кнопки для управления пользователями (Удалить все карточки, удалить определенную карточку, получить все карточки)

  Все данные должны быть синхронизированы с локальным хранилищем.
  Если вы удалили карточку — то после перезагрузки страницы их должно быть то же количество.

  Обработать различные сценарии (отображать ошибку через new Error, если данные не загрузились
  и отображать текст на странице "Ошибка при загрузке данных" и так далее, отображать информационное сообщение,
  если пользователь хочет получить всех пользователей, а у него отображены и так все пользователи и т.д.)

Ключевой результат:
Если данных нет — показываем пользователю сообщение про загрузку
Данные не загрузились — отображаем ошибку
Данные загрузились или меняются — отображаем и синхронизируем с локальным хранилищем
Кнопка для удаления всех карточек
Кнопка для удаления определенной карточки (это делается через метод массива .filter())
Кнопка для получения всех карточек
*/

// Получаем ссылки на DOM-элементы
const loader    = document.getElementById('loader');
const errorBox  = document.getElementById('error');
const content   = document.getElementById('content');
const usersList = document.getElementById('users-list');
const messageEl = document.getElementById('message');

// Кнопки управления
const btnGetAll    = document.getElementById('btn-get-all');
const btnDeleteAll = document.getElementById('btn-delete-all');

// Ключ, в котором хранятся пользователи в localStorage
const STORAGE_KEY = 'users';

// Путь к JSON-файлу с базой данных пользователей. 
// Чтобы увидеть ошибку, нужно изменить название 'users.json' и анкомментить первую строку в коде.
const DATA_URL = 'users.json';

// Вспомогательные функции для UI
function show(el) { el.classList.remove('hidden'); };

function hide(el) { el.classList.add('hidden'); };

// Показать информационное сообщение пользователю на 2.5 сек.
function showMessage(text) {
  messageEl.textContent = text;
  show(messageEl);
  setTimeout(() => hide(messageEl), 2500);
};

// Работа с localStorage
// Получаем массив пользователей из localStorage.
function getUsersFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error('Не удалось распарсить данные из localStorage', e);
    return null;
  };
};

// Сохранение массива пользователей в localStorage
function saveUsersToStorage(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

// Загрузка данных с json-файла
async function fetchUsers() {
  await new Promise(resolve => setTimeout(resolve, 3500));
  const response = await fetch(DATA_URL);
  if (!response.ok) {
    throw new Error(`Не удалось загрузить данные. Статус: ${response.status}`);
  };

  const data = await response.json();
  return data;
};

// Рендеринг карточек
function renderUsers(users) {
  usersList.innerHTML = '';
  if (users.length === 0) {
    usersList.innerHTML = '<p style="color:#777;">Пользователей нет</p>';
    return;
  };

  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `
      <h3>${user.name} ${user.surname}</h3>
      <p><b>ID:</b> ${user.id}</p>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Возраст:</b> ${user.age}</p>
      <button data-id="${user.id}">Удалить</button>
    `;

    card.querySelector('button').addEventListener('click', () => {
      deleteUser(user.id);
    });

    usersList.appendChild(card);
  });
};

// Удалить одного пользователя по id
function deleteUser(id) {
  const users = getUsersFromStorage() || [];
  const updated = users.filter(user => user.id !== id);

  saveUsersToStorage(updated);
  renderUsers(updated);
};

// Удалить всех пользователей.
function deleteAllUsers() {
  const users = getUsersFromStorage() || [];
  if (users.length === 0) {
    showMessage('Карточек нету');
    return;
  };

  saveUsersToStorage([]);
  renderUsers([]);
};

// Получить все карточки — если уже все отображены, сообщаем об этом, иначе подгружаем заново из JSON
async function getAllUsers() {
  const inStorage = getUsersFromStorage();
  let allUsers;
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error('Ошибка загрузки');
    allUsers = await response.json();
  } catch (err) {
    showMessage('Не удалось получить данные');
    return;
  };
  if (inStorage && inStorage.length === allUsers.length) {
    showMessage('Все пользователи уже отображены');
    return;
  };

  saveUsersToStorage(allUsers);
  renderUsers(allUsers);
};

async function init() {
  const cached = getUsersFromStorage();

  if (cached !== null) {
    hide(loader);
    show(content);
    renderUsers(cached);
    return;
  }
  try {
    const users = await fetchUsers();
    saveUsersToStorage(users);
    hide(loader);
    show(content);
    renderUsers(users);
  } catch (err) {
    console.error(err);
    hide(loader);

    // Еще один сценарий ошибки. Подставляем текст ошибки, которая сделана через new Error.
    // Для этого нужно изменить название 'users.json' и анкомментить первую строку в коде.
    errorBox.textContent = err.message;

    show(errorBox);
  };
};

// Вешаем обработчики на кнопки
btnGetAll.addEventListener('click', getAllUsers);
btnDeleteAll.addEventListener('click', deleteAllUsers);

init();