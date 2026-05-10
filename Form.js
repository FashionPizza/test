// 5. Создать файл Form.js и реализовать класс для формы под названием Form. 
// Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
// I. Для получения всех значений формы.
// II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
// III. Для сброса значений формы.
// Используя данный класс - переписать логику задания №9, связанной с формами. 
// Как? Используя внутренние методы - мы можем управлять через айди формы получением значений
// и всем, что должна делать модалка.
export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    const inputs = this.form.querySelectorAll('input');
    const data = {};

    inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    
    return data;
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}