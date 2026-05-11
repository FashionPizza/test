/* 3. Реализовать абстрактный класс Drink (абстрактный он, потому что не должен иметь экземпляров. 
Он используется только для наследования). 
От него мы будем создавать наследников - лимонад, чай, кофе и прочие напитки, которые посчитаете нужным. 
Их должно быть от 3 до 5. 
==============================================================================================================
Наш абстрактный класс должен содержать общие свойства, связанные со всеми напитками
(это то, что есть у каждого напитка), а это: 
1) название
2) размер
3) цена
4) температура (приватный). Почему? Потому что мы не можем влиять на температуру вне класса.
==============================================================================================================
Также наш класс должен содержать общие методы, такие как:
1) получить информацию про напиток
2) получить температуру напитка
3) установить температуру напитка
4) приготовить напиток (приватный)
5) подать напиток
==============================================================================================================
После уже реализовываем наследников, например для кофе нам нужны дополнительные параметры, помимо тех 4, что названы выше. 
Это вид зёрен, вид молока и прочее. */
class Drink {
  #temp;
  constructor(name, size, price, temp) {
    if (new.target === Drink) {
    throw new Error("Класс Drink абстрактный — создавайте наследников");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temp = temp;
  };

  getDrinkInfo() {
    return `Название: ${this.name}, размер: ${this.size} мл, цена: ${this.price} евро, температура: ${this.#temp} °C`
  };

  getDrinkTemp() {
    return `: ${this.#temp} °C`;
  };

  setDrinkTemp(newTemp) {
    if (typeof newTemp !== 'number' || newTemp < 0 || newTemp > 100) {
    throw new Error(`Некорректная температура: ${newTemp}. Допустимо от 0 до 100.`);
    }
    console.log(`🌡 Температура "${this.name}" изменена с ${this.#temp}°C на ${newTemp}°C`);
    this.#temp = newTemp;
  };

  #prepareDrink() {
    console.log(`Готовим ${this.name}`);
  };

  serveDrink() {
    this.#prepareDrink();
    console.log(`${this.name} готов, можете забирать ваш заказ, не стесняйтесь!`)
  };
};

class Tea extends Drink {
  constructor(name, size, price, temp, teaType, teaAddons, teaStrength) {
    super(name, size, price, temp);
    this.teaType = teaType;
    this.teaAddons = teaAddons;
    this.teaStrength = teaStrength;
  }
  getDrinkInfo() {
    return `${super.getDrinkInfo()} | Тип: ${this.teaType}, Добавки: ${this.teaAddons}, Крепость: ${this.teaStrength}`;
  };
};

class Coffee extends Drink {
  constructor(name, size, price, temp, beanType, roastLevel, milkType) {
    super(name, size, price, temp);
    this.beanType = beanType;
    this.roastLevel = roastLevel;
    this.milkType = milkType;
  }
  getDrinkInfo() {
    return `${super.getDrinkInfo()} | Тип: ${this.beanType}, Степень обжарки: ${this.roastLevel}, Тип молока: ${this.milkType}`;
  };
};

class Lemonade extends Drink {
  constructor(name, size, price, temp, fruitBase, isSparkling, iceLevel) {
    super(name, size, price, temp);
    this.fruitBase = fruitBase;
    this.isSparkling = isSparkling;
    this.iceLevel = iceLevel;
  }
  getDrinkInfo() {
    const sparklingText = this.isSparkling ? "Газированный" : "Без газа";
    return `${super.getDrinkInfo()} | Вкус: ${this.fruitBase}, Лёд: ${this.iceLevel}`;
  };
};

const tea = new Tea('Азерчай', 300, 89, 50, 'травяной', 'имбирь', 'средний');
const coffee = new Coffee('Латте', 250, 80, 55, 'арабика', 'средняя', 'овсяное');
const lemonade = new Lemonade('Мохито', 400, 79, 1, 'Лайм и мята', true, 'много');

console.log(tea.getDrinkInfo());
console.log(coffee.getDrinkInfo());
console.log(lemonade.getDrinkInfo());

/* 4. После того, как реализовали класс "напиток" и его наследников, приступаем к классу "Кафе".
Он у нас будет принимать 2 параметра, например название кафе и его месторасположение. Реализуем 2 метода внутри него:
1) получить информацию про кафе
2) заказать напиток
==============================================================================================================
При заказе напитка мы будем передавать аргументом сам напиток и вызывать его внутренние методы, например - подать напиток,
А этот метод внутри себя вызывает метод для готовки напитка
и выполняет всякие побочные действия, по типу изменения температуры и прочее.
==============================================================================================================
Что итоговое должно получиться:
1. Можем получить информацию про кафе
2. Можем заказать напиток
3. Можем получить информацию про напиток
*/
class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getCafeInfo() {
    return `Кафе "${this.name}" находится по адресу ${this.location}`
  };

  orderDrink(drink) {
    console.log(`Заказ принят в кафе "${this.name}"`);

    drink.setDrinkTemp(45);
    drink.serveDrink();

    console.log(drink.getDrinkInfo());
  };
};

const cafe = new Cafe('Обаме здсь нельзя', 'ул. Шоколадная, 50');
console.log(cafe.getCafeInfo());
cafe.orderDrink(tea);
cafe.orderDrink(coffee);
cafe.orderDrink(lemonade);