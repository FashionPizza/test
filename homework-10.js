//  Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). 
// Придумайте свою структуру и реализуйте наследуемость классов
class Fastfood {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showFastfoodInfo() {
    console.log(`I like this ${this.name}, but it costs ${this.price} euros`)
  }
}

class Sauce extends Fastfood {
  constructor(name, price, taste) {
    super(name, price);
    this.taste = taste;
  }

  showSauseInfo() {
    console.log(`This ${this.name} for ${this.price} euro is so ${this.taste}`)
  }
}

const FastfoodInfo = new Fastfood('burger', 10);
FastfoodInfo.showFastfoodInfo();

const SauseInfo = new Sauce('garlic', 1, 'spicy');
SauseInfo.showSauseInfo();