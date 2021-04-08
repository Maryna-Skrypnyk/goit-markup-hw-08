// Task №1 abstract
// создать объекты по шаблону и понять принцип работы контекста и функций-конструкторов
// пусть Hotel имеет методы для приветствия гостя и 
// добавления и удаления количества гостей в поле guestCount.
// Проверки на вместительность пропустим.

// const Hotel = function (name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//     this.guestCount = 0;

//     this.greet = function (guestName) {
//         console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//     };

//     this.addGuests = function (amount) {
//         this.guestCount += amount;
//     };

//     this.removeGuests = function (amount) {
//         this.guestCount -= amount;
//     };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(50);
// hotel.removeGuests(50);

// Task №2 abstract
// Представьте, что у нас есть магазин и два менеджера, по продаже товаров. 
// Необходимо написать логику для организации их работы.
// Для каждого менеджера создаётся отдельный объект.


// не самое удачное решение!!!
// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = {
//   name: 'Poly',
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12


// хорошее решение!!!
// const Manager = function (name = `manager`, sales = 0) {
//     this.name = name;
//     this.sales = sales;

//     this.sell = function (product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}.`;
//     };
// };

// const mango = new Manager(`Mango`, 5);

// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager(`Poly`, 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// Task №3 abstract (prototype)
// мы пишем игру в стиле RPG, и нам необходимо подготовить логику 
// для классовой системы персонажей где есть общий конструктор Hero 
// с дефолтными полями общими для всех классов, вроде имени, здоровья, 
// количества опыта и т.п.После чего нам необходимо сделать конструкторы 
// для Warrior и Wizard, экземпляры которых также должны иметь доступ к полям Hero, 
// но в тоже время иметь свои собственные.
// Давайте реализуем это используя прототипное наследование.


// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };
// /*
//  * Теперь у нас есть конструктор базового класса героя,
//  * добавим в prototype какой-то метод.
//  */
// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };
// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }

// // Далее необходимо создать класс Warrior, так как нет смысла добавлять 
// // в Hero абсолютно все поля всех классов.Поэтому нам необходимо создать 
// // еще функцию-конструктор, но при этом она должна быть как-то связана с Hero.
// // Для решения этой задачи мы можем использовать метод call(), 
// // вызвав функцию-конструктор Hero и передав ей объект, создающийся в Warrior как контекст.

// const Warrior = function (name, xp, weapon) {
//   /*
//    * Во время выполнения функции Warrior вызываем функцию Hero
//    * в контексте объекта создающегося в Warrior, а так же передаем
//    * аргументы для инициализации полей this.name и this.xp
//    *
//    * this это будущий экземпляр Warrior
//    */
//   Hero.call(this, name, xp);

//   // Тут добавляем новое свойство - оружие
//   this.weapon = weapon;
// };

/*
 * Используем Object.create() для того чтобы изначально записать
 * в Warrior.prototype пустой объект, в __proto__ которого будет
 * ссылка на Hero.prototype. Это необходимо сделать до того
 * как добавлять методы
 */
// Warrior.prototype = Object.create(Hero.prototype);

// // Не забываем добавить в Warrior.prototype свойство constructor
// Warrior.prototype.constructor = Warrior;

// // Добавим метод для атаки
// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');

// console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
// poly.attack(); // Poly attacks with sword
// poly.gainXp(300); // Poly gained 300 experience points


// Задача №1 с вебинара Репеты.
// const Car = function ({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// Car.prototype.sayHi = function () {
//     console.log(`Car.prototype.sayHi -> this`, this);
//     console.log(`Hello :) `);
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }


// console.log(Car.prototype);

// const myCar = new Car({ brand: `Audi`, model: `Q3`, price: 35000, });
// console.log(myCar);
// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({ brand: `BMW`, model: `X6`, price: 50000, });
// console.log(myCar2);
// myCar2.sayHi();

// const myCar3 = new Car({ brand: `Audi`, model: `A6`, price: 65000, });
// console.log(myCar3);
// myCar3.sayHi();

// Задача №2 с вебинара Репеты.

// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// };

// const mango = new User({ email: `mango.@mail.com`, password: 1111 });

// mango.changeEmail(`my-new-mail@mail.com`);

// console.log(mango);

// Модуль 5 Задача№1
// Измени код так, чтобы объект parent стал прототипом 
// для объекта в переменной сhild.

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.hasOwnProperty('surname'));
// console.log(parent.hasOwnProperty('heritage'));
// console.log(child.hasOwnProperty('name'));
// console.log(child.name);
// console.log(child.hasOwnProperty('age'));
// console.log(child.age);
// console.log(child.hasOwnProperty('surname'));
// console.log(child.surname);
// console.log(child.hasOwnProperty('heritage'));
// console.log(child.heritage);
// console.log(parent.isPrototypeOf(child));

// Модуль 5 Задача№2
// Измени код, построив цепочку прототипов так, 
// чтобы объект ancestor был прототипом для parent, 
// а тот в свою очередь был прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// console.log(parent.isPrototypeOf(child)); // true
// console.log(parent.surname); // `Moore`
// console.log(parent.heritage); // 'Irish'
// console.log(parent.hasOwnProperty('surname')); // true
// console.log(parent.hasOwnProperty('heritage')); // false
// console.log(ancestor.isPrototypeOf(parent)); // true
// console.log(child.hasOwnProperty('surname')); // false
// console.log(child.surname); // 'Moore'
// console.log(child.heritage); // 'Irish'
// console.log(child.hasOwnProperty('heritage')); // false
// console.log(ancestor.heritage); // 'Irish'
// console.log(ancestor.hasOwnProperty('surname')); // true
// console.log(ancestor.hasOwnProperty('heritage')); // true
// console.log(ancestor.surname); // 'Dawson'

// Модуль 5 Задача№3
// Объяви функцию-конструктор Car которая принимает три параметра:
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами 
// brand, model и price, значениями которых должны быть переданные 
// аргументы во время её вызова с оператором new.

// const Car = function (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };


// console.log(new Car(`Audi`, `Q3`, 36000));

// console.log(new Car(`BMW`, `X5`, 58900));

// console.log(new Car(`Nissan`, `Murano`, 31700));

// Модуль 5 Задача№4
// Выполни рефакторинг функции-конструктора Car так, 
// чтобы она принимала один параметр - объект со свойсвами 
// brand, model и price.
// Деструктуризируй объект в сигнатуре(подписи) функции.

// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }


// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));

// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));

// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));

// Модуль 5 Задача№5
// Добавь в свойство prototype функции-конструктора Car два метода:
// getPrice() - возвращает значение свойства price из объекта 
// который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта 
// который его будет вызывать на newPrice.

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };


// console.log(Car.prototype.hasOwnProperty('getPrice')); // true

// console.log(Car.prototype.hasOwnProperty('changePrice')); // true

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

// console.log(car1);

// console.log(car1.getPrice()); // 36000

// car1.changePrice(35000);

// console.log(car1.getPrice()); // 35000

// Модуль 5 Задача№6
// С помощью Function Declaration напиши функцию-конструктор Storage, 
// которая будет создавать объекты для управления складом товаров.
// Функция ожидает только один аргумент - начальный массив товаров, 
// который записывается на создаваемый объект в свойство items.
// Добавь методы на прототип:
// getItems() - возвращает массив текущих товаров в свойстве items 
// объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его 
// в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива 
// товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы 
// методов в той последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.

// function Storage (items) {
//   this.items = items;
// };

//   Storage.prototype.getItems = function () {
//     return this.items;
//   };
  
//   Storage.prototype.addItem = function (newItem) {
//     this.items.push(newItem);
//   };

// Storage.prototype.removeItem = function (item) {
//     for (let i = 0; i < this.items.length; i += 1) {
//         if (this.items[i] === item) {
//             this.items.splice(i, 1);
//         }; 
//     };
// };


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// console.log(Storage.prototype.hasOwnProperty('getItems')); // true
// console.log(Storage.prototype.hasOwnProperty('addItem')); // true
// console.log(Storage.prototype.hasOwnProperty('removeItem')); // true
// console.log(new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']));
// console.log(Storage.prototype.isPrototypeOf(storage)); // true
// console.log(storage);

// Модуль 5 Задача№7
// С помощью Function Declaration напиши функцию-конструктор StringBuilder, 
// которая принимает один параметр baseValue - произвольную строку, 
// которая записывается на создаваемый объект в свойство value.
// Добавь методы на прототип:
// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец 
// значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало 
// значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало 
// и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов 
// в той последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// };

// StringBuilder.prototype.getValue = function () {
//     return this.value;
// };

// StringBuilder.prototype.padStart = function (str) {
//     this.value = str + this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.padBoth = function (str) {
//     // this.value = str + this.value + str;
//     this.value = `${str}${this.value}${str}`;
// };


// // // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// console.log(StringBuilder.prototype.hasOwnProperty('getValue')); // true
// console.log(StringBuilder.prototype.hasOwnProperty('padEnd')); // true
// console.log(StringBuilder.prototype.hasOwnProperty('padStart')); // true
// console.log(StringBuilder.prototype.hasOwnProperty('padBoth')); // true

// console.log(builder); // StringBuilder {baseValue: "."}
// console.log(StringBuilder.prototype.isPrototypeOf(builder)); // true


// Модуль 5 Задача№8
// Используя ключевое слово class объяви класс Car с пустым телом.

// class Car {
// }

// console.log(new Car());

// Модуль 5 Задача№9
// Выполни рефакторинг кода, заменив функцию-конструктор Car 
// на класс с методом - конструктором, принимающим объект.

// class Car {
//     brand;
//     model;
//     price;

//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     };
// };

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));

// Модуль 5 Задача№10
// Добавь классу Car две метода.
// getPrice() - возвращает значение свойства price 
// из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price 
// у объекта который его будет вызывать на newPrice.

// class Car {
    
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     };
  
//     getPrice() {
//         return this.price;
//     };
  
//     changePrice(newPrice) {
//         this.price = newPrice;
//     };
// };

//   console.log(Car.prototype.hasOwnProperty('getPrice'));
// console.log(Car.prototype.hasOwnProperty('changePrice'));
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// Car.prototype.getPrice();
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// Car.prototype.changePrice(35000);
// console.log(Car.prototype.getPrice());

// Модуль 5 Задача№11
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным 
// и добавь два метода для публичного интерфейса, для чтения 
// и изменения этого свойства.
// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства 
// brand на newBrand.

// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   };
  
//   getBrand() {
//     return this.#brand;
//   };
  
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
// };
// };

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(audi);
// console.log(bmw);
// console.log(nissan);

// console.log(audi.getBrand());
// console.log(bmw.getBrand());
// console.log(nissan.getBrand());


// audi.changeBrand('Honda');
// console.log(audi.getBrand());


// Модуль 5 Задача№12
// Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. 
// Сделай так, чтобы свойство items было приватным.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов 
// в той последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.

// class Storage {
//   #items;
  
//   constructor (items) {
//   this.#items = items;
// };

// getItems () {
//   return this.#items;
// };

// addItem (newItem) {
//   this.#items.push(newItem);
// };

// removeItem (item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };
// };

// console.log(Storage.prototype.hasOwnProperty('getItems')); // true
// console.log(Storage.prototype.hasOwnProperty('addItem')); // true
// console.log(Storage.prototype.hasOwnProperty('removeItem')); // true

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// Модуль 5 Задача№13
// Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. 
// Сделай так, чтобы свойство value было приватным.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов 
// в той последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.

// class StringBuilder {
//   #value;
  
//   constructor (baseValue) {
//   this.#value = baseValue;
// };

// getValue () {
//   return this.#value;
// };

// padEnd (str) {
//   this.#value += str;
// };

// padStart (str) {
//   this.#value = str + this.#value;
// };

// padBoth (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// Модуль 5 Задача№14
// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, 
// также как #brand.Стандартизируй публичный интерфейс класса заменив уже объявленные методы 
// на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   };

//   get brand() {
//     return this.#brand;
//   };

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   };

//   get model() {
//     return this.#model;
//   };

//   set model(newModel) {
//     this.#model = newModel;
//   };

//   get price() {
//     return this.#price;
//   };

//   set price(newPrice) {
//     this.#price = newPrice;
//   };
// };

// Модуль 5 Задача№15
// Выполни рефакторинг класса Car. Добавь публичное статическое свойство 
// MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.
// Добавь сеттеру price проверку передаваемого значения параметра newPrice. 
// Если оно больше чем MAX_PRICE, сеттер ничего не делает, 
// а если меньше или равно, то перезаписывает цену автомобиля.


// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   };

//   get price() {
//     return this.#price;
//   };

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//     return this.#price = newPrice;
//   };
//   // Пиши код выше этой строки
// };
// };

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// Модуль 5 Задача№16
// Добавь классу Car публичный статический метод checkPrice(price), 
// принимающий цену автомобиля.Метод должен сравнить значения параметра price 
// и приватного статического свойства MAX_PRICE.
// Если цена автомобиля превышает максимальную, метод должен вернуть строку 
// 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, 
// чтобы показать как будет использоваться метод checkPrice(price).

// class Car {
//   static #MAX_PRICE = 50000;

//   // Пиши код ниже этой строки
// static checkPrice(price) {
//   if (price > Car.#MAX_PRICE) {
//   return 'Внимание! Цена превышает допустимую.';
// };
//   return 'Всё хорошо, цена в порядке.';
// };

// price;

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// Модуль 5 Задача№17
// В приложении нужен администратор с возможностью добавлять почты пользователей 
// в чёрный список.
// Объяви класс Admin, который наследует от класса User.
// Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), 
// значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     };
// };

// console.log(Admin.AccessLevel.BASIC); // basic
// console.log(Admin.AccessLevel.SUPERUSER); // superuser

// Модуль 5 Задача№18
// Добавь классу Admin метод constructor, который принимает один параметр - 
// объект настроек с двумя свойствами email и accessLevel.
// Добавь классу Admin публичное свойсво accessLevel, 
// значение которого будет передаваться при вызове конструктора.
// Чтобы показать как будет использоваться класс Admin, 
// мы добавили инициализацию экземпляра под объявлением класса.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//     accessLevel;
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//     };
  
//   constructor ({email, accessLevel}) {
//     super(email);
//     this.accessLevel = accessLevel;
//   };

//   // Пиши код выше этой строки
// };

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango);
// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser


// Модуль 5 Задача№19
// Добавь классу Admin следующие свойства и методы.
// Публичное свойство blacklistedEmails для хранения чёрного списка 
// почтовых адресов пользователей.Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. 
// Метод должен добавлять значение параметра email в массив хранящийся 
// в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. 
// Метод должен проверять наличие значения параметра email в массиве хранящемся 
// в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов 
// в той последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
// blacklistedEmails;
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
  
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
  
//   isBlacklisted(email) {
//       if (this.blacklistedEmails.includes(email)) {
//           return true;
//       }
//       return false;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });


// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

    
