// 4. Создать файл Modal.js и в нем создать класс для модального окна под названием Modal. 
// Он будет принимать 1 параметр через конструктор - айди модального окна. Внутри класса будут методы:
// I. Для открытия модального окна.
// II. Для закрытия модального окна.
// III. Для проверки, открыто ли сейчас модальное окно.
// IV. Метод, который слушает кнопку (крестик) для закрытия модалки
// и закрывает модалку (реализовать через eventListener) и вызывать в конструкторе
// Используя данный класс - переписать логику задания №9, связанной с модальными окнами. 
// Как? Используя внутренние методы - мы можем управлять через айди модалки ее закрытием, открытием.

export class Modal {
  constructor(id) {
    this.modalElement = document.getElementById(id);
    this.overlay = document.querySelector('.overlay');
    this.closeBtn = this.modalElement.querySelector('.modal__close');
    this.overlay.addEventListener('click', () => this.closeModal());
    
    this.handleCloseButton();
  }

  openModal() {
    this.modalElement.classList.add('modal-showed');
    this.overlay.classList.add('show');
    document.body.style.overflow = 'hidden'; 
  }

  closeModal() {
    this.modalElement.classList.remove('modal-showed');
    this.overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  isOpen() {
    return this.modalElement.classList.contains('modal-showed');
  }

  handleCloseButton() {
    this.closeBtn.addEventListener('click', () => {
    this.closeModal();
    });
  }
}