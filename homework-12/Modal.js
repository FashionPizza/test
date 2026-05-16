export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay = true) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this._overlayClickHandler = () => this.close();
    this.#initOpen(buttonId);
    this.#initClose();
  };

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this._overlayClickHandler);
    }
  };

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this._overlayClickHandler);
    }
  };

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  };

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);

    if (button) {
      button.addEventListener('click', () => {
        this.open();
      })
    }
  };

  #initClose() {
    const closeButton = this.modal.querySelector('.modal-close-button')

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.close();
      })
    }
  };
}