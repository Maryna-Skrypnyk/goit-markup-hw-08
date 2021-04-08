// Задача с конспекта №1.
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// /*
//  * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
//  * Первый элемент это ключ свойства, второй это значение.
//  */
// const entries = Object.entries(hotel);
// console.log(entries);

// Выводит:
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["name", "Resort Hotel"]
// 1: (2) ["stars", 5]
// 2: (2) ["capacity", 100]


// Задача с конспекта №2.
// Посчитать общее количество продуктов в объекте формата имя-продукта: количество
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);
// console.log(values);
// let total = 0;
// for (const value of values) {
//     total += value;  
// }
// console.log(total); // 20

// Задача с конспекта №3.
// const add = function (...args) {
//     console.log(args); // массив всех аргументов
//     // return args;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));


// Модуль 3. Задача№1.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// }

// console.log(apartment);

// Модуль 3. Задача№2.
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   owner: { 
//     name: 'Генри', 
//     phone: '982-126-1588', 
//     email: 'henry.carter@aptmail.com',
//          },
//   };

// console.log(apartment);

// Модуль 3. Задача№3.
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// Модуль 3. Задача№4.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Пиши код выше этой строки

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);


// Модуль 3. Задача№5.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// Модуль 3. Задача№6.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');

// console.log(apartment);

// Модуль 3. Задача№7.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Ямайка';
// apartment.location.city = 'Кингстон';

// console.log(apartment);

// Модуль 3. Задача№8.
// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
// name, 
// price,
// image,
// tags,
//   // Пиши код выше этой строки
// };

// Модуль 3. Задача№9.
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
  
  
//   // Пиши код выше этой строки
// };

// console.log(credentials);

// Модуль 3. Задача№10.
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//    keys.push(key);
//     values.push(apartment[key]);
   
// }
// console.log(keys);
// console.log(values);

// Модуль 3. Задача№11.
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Пиши код выше этой строки
// }
// console.log(keys);
// console.log(values);

// Модуль 3. Задача№12.
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//     const keys = Object.keys(object);
//     propCount = keys.length;
//     // propCount = Object.keys(object).length;
//   // Пиши код выше этой строки
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));


// Модуль 3. Задача№13.
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);


// Модуль 3. Задача№14.
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
// //   for (const key in object) {
// //     if (object.hasOwnProperty(key)) {
// //       propCount += 1;
// //     }
//     propCount = Object.keys(object).length;

//   return propCount;
//   // Пиши код выше этой строки
// }

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// Модуль 3. Задача№15.
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);


// Модуль 3. Задача№16.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
    
//     for (const value of Object.values(salaries)) {
//         totalSalary += value;
//     }
  
//   // Пиши код выше этой строки
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// Модуль 3. Задача№17.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// Модуль 3. Задача№18.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }
//      return null;
//   // Пиши код выше этой строки
// }

// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват'));
// console.log(getProductPrice('Сканер'));
// console.log(getProductPrice('Дроид'));
// console.log(getProductPrice('Двигатель'));








// Задача из лекции Модуль 3. Занятие 2.
/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//      },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//           }  
//         }
//         const newProduct = {
//             ...product,
//             guantity: 1,
//         };

//         this.items.push(newProduct);
//      },
//     remove(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             // const item = this.items[i];
//             const {name} = items[i];
//             if (productName === name) {
//                 console.log('знайшли такий продукт ', productName);
//                 console.log('індекс: ', i);

//                 items.splice(i, 1);
//             }
//         }
//      },
//     clear() {
//         this.items = [];
//      },
//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity;
//         }

//         return total;
//      },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
// };

// // console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });


// // console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍎');
// // console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());



// // cart.increaseQuantity('🍎');
// // console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());



// Модуль 3. Задача№19.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//     let value = [];
//     for (let i = 0; i < products.length; i += 1) {
//         let product = products[i];
//         // console.log(product);

//         for (const key in product) {
//             // console.log(key);
//             if (key === propName) {
//                 value.push(product[key]);
//             }
//         }     
//     }
//     return value;
  
//   // Пиши код выше этой строки
// }

//   console.log(getAllPropValues('name'));
//   console.log(getAllPropValues('quantity'));
//   console.log(getAllPropValues('price'));
//   console.log(getAllPropValues('category'));

// 2 Спосіб:
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//     let value = [];
//     for (const product of products) {
//            if (product[propName] !== undefined) {
//             value.push(product[propName]);
//         }
//     }
//     return value;
  
//   // Пиши код выше этой строки
// }

//   console.log(getAllPropValues('name'));
//   console.log(getAllPropValues('quantity'));
//   console.log(getAllPropValues('price'));
//   console.log(getAllPropValues('category'));


// Модуль 3. Задача№20.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     let totalPrice = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }
//     }
//     return totalPrice;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Бластер'));
// console.log(calculateTotalPrice('Радар'));
// console.log(calculateTotalPrice('Дроид'));
// console.log(calculateTotalPrice('Захват'));
// console.log(calculateTotalPrice('Сканер'));

// Модуль 3. Задача№21.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow} = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// Модуль 3. Задача№22.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);


// Модуль 3. Задача№23.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);


// Модуль 3. Задача№24.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// Модуль 3. Задача№25.
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const { today: { high: highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;

// console.log(highToday, lowToday, todayIcon);
// console.log(highTomorrow, lowTomorrow, tomorrowIcon);

// Модуль 3. Задача№26.
// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
 
//   const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));


// Модуль 3. Задача№27.
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore, worstScore);


// Модуль 3. Задача№28.
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore, worstScore);

// Модуль 3. Задача№29.
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings};


// Модуль 3. Задача№30.
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
    
//     const newData = {category: 'Общее', priority: 'Обычный', completed, ...data };
//     return newData;
//   // Пиши код выше этой строки
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));
// console.log(makeTask({ text: 'Купить хлеб' }));

// Модуль 3. Задача№31.
// function add(...args) {
//     let sum = 0;

//     for (const arg of args) {
//         sum += arg;
//         // Пиши код выше этой строки
//     }
//      return sum;
// }

//   console.log(add(15, 27));
//   console.log(add(12, 4, 11, 48));
//   console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));


// Модуль 3. Задача№32.
// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number) {
//     total += arg;
//     }
//   }

//   return total;
//   // Пиши код выше этой строки
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
  
// Модуль 3. Задача№33.
// function findMatches(array, ...args) {
//   const matches = []; // Не изменяй эту строку
// for (const arg of args) {
//   if (array.includes(arg)) {
//     matches.push(arg);
//   }
// }
//   // Пиши код выше этой строки
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// Модуль 3. Задача№34.
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
  
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
  
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook('Мгла'));
// console.log(bookShelf.removeBook('Красный закат') );
// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));


// Модуль 3. Задача№35.
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
// 	const bookIndex = this.books.indexOf(oldName);
//       this.books.splice(bookIndex, 1, newName);
//       return this.books;
//     // Пиши код выше этой строки
//     },
// };

// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));

// Модуль 3. Задача№36.
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.potions);


// Модуль 3. Задача№37.
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     getPotions() {
//           return this.potions;
//     }
//   // Пиши код выше этой строки
// };

// console.log(atTheOldToad.getPotions());

// Модуль 3. Задача№38.
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     return this.potions;
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.addPotion('Невидимка'));
// console.log(atTheOldToad.addPotion('Зелье силы'));

// Модуль 3. Задача№39.
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     return this.potions;
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));


// Модуль 3. Задача№40.
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     return this.potions;
 
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'));


// Модуль 3. Задача№41.
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// Тесты:
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.
// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// Значение свойства atTheOldToad.addPotion это метод объекта.

// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }), в массиве potions последним элементом будет этот объект.

// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }), в массиве potions последним элементом будет этот объект.
// Значение свойства atTheOldToad.removePotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
// Для исходного объекта после вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ].


// const atTheOldToad = {
//     potions: [
//         { name: 'Зелье скорости', price: 460 },
//         { name: 'Дыхание дракона', price: 780 },
//         { name: 'Каменная кожа', price: 520 },
//     ],
//     // Пиши код ниже этой строки
//     getPotions() {
//         return this.potions;
//     },
  
//     addPotion(potionName) {
//         if (this.potions.includes(potionName)) {
//             return `Зелье ${potionName} уже есть в инвентаре!`;
//         }

//         this.potions.push(potionName);
//     },
  
//     removePotion(potionName) {
    
//         for (let i = 0; i < this.potions.length; i += 1) {
//             const potion = this.potions[i];
//             if (potion.name === potionName) {
//                 this.potions.splice(i, 1);
//             };
//         };
//     },
  
//     updatePotionName(oldName, newName) {
    
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//             };
//         };
//         // Пиши код выше этой строки
//     },
// }


// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));
// console.log(atTheOldToad.potions);


// Сложная Задача с вебинара.
// Напишите функцию, которая будет копировать обьект, изменив в нем одно из свойств.
// Обьект - на первом уровне вложенности может включать в себя другие обьекты.
// Если нужно изменить поле на втором уровне вложенности, то имена полей нужно передать через точку.


// const copyObject = (obj, field, value) => {
//     if (field.includes('.')) {
//         const [firstField, secondField] = field.split('.');
//         return { ...obj, [firstField]: { ...obj[firstField] }, [secondField]: value };
//     } else {
//         return { ...obj, [field]: value};
//     };
// };

// const user = {
//     name: {
//         first: 'Александр',
//         last: 'Иванов',
//     },
//     age: 25,
// };



// console.log(copyObject(user, 'age', 32));
// console.log(copyObject(user, 'name.last', 'Петров'));