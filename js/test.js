// Задача №1 (switch).

// Напиши скрипт выбора опции доставки товара
// Опция хранится в переменной option: 1 - самовывоз, 2- курьер, 3 - почта.console

// В переменную message записать сообщение в зависимости от опции. 
// - "Вы сможете забрать товар завтра с 12:00 в нашем офисе ";
// - "Курьер доставит заказ завтра с 9:00 до 18:00";
// - "Посылка будет отправлена сегодня";
// - "Вам перезвонит менеджер".

// Алгоритм:
// 1. Сделать переменные
// 2. Сделать switch 1,2,3
// 3. В каждом case записать строку в message
// 4. Сделать лог massage


// let option = 2;
// let message = "";
// switch(option) {
//     case 1:
//         message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
//         break;
//     case 2:
//         message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//         break;
//     case 3:
//         message = "Посылка будет отправлена сегодня";
//         break;
//     default:
//         message = "Вам перезвонит менеджер";
// }

// console.log(message); // Курьер доставит заказ завтра с 9:00 до 18:00


/* Задача №2 (if или switch)

 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

 // Способ с if

// const stars = 2;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log("Такого кол-ва звезд нет");
// }

// console.log(price); // 30


// Способ со switch

// const stars = 3;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log("Такого кол-ва звезд нет");
// }

// console.log(price); // 50

/* Задача №3 (if или switch)

 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// const stars = 1;
// let price;

// Способ с if

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//      price = 120;
// } else {
//     console.log("Такого кол-ва звезд нет");
// }

// console.log(price); // 20

// Способ со switch

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break; 
//     case 3:
//     case 4:
//         price = 30;
//         break; 
//     case 5:
//         price = 120;
//         break; 
//     default:
//         console.log("Такого кол-ва звезд нет");
// }

// console.log(price); // 20

// Task #4 (for)
/*
 * Цикл for
 */
 // for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log('qweqwe');

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

 // Алгоритм:
 // 1. Сделать вары
 // 2. Перебрать работников в цикле
 // 3. Прибавить к тоталу
 // 5. Лог

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Работник ${i} получает ${salary}`);

//     totalSalary += salary;
// }

// console.log("totalSalary: ", totalSalary);

// Task №5 (for)
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// Алгоритм:
// 1. Сделать вары
// 2. Перебрать числа от min до max
// 3. Создать условие четных чисел
// 4. Прибавить четные числа в total
// 5. Лог

// 1 способ (не лучший)

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
// console.log("четное число ", i);
// total += i; 
//     }; 
// }
// console.log("total: ", total); // 6


// 2 способ (лучший)

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
// console.log("нечетное число ", i);
//         continue;
//     }
//     total += i;
//     console.log("четное число ", i);
// }
// console.log("total четных чисел: ", total); // 6


// Task №6 (if)

// let balance = 700;
// const payment = 600;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);
// if (payment <= balance) {
//     balance -= payment;
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log("На счету недостаточно средств для проведения операции!");
// }
// console.log("Операция завершена");

// Общая стоимость заказа 600 кредитов. Проверяем кол-во доступных средств на счету
// На счету осталось 100 кредитов
// Операция завершена

// Task №6 (else if)

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     discount = 0.02;
//     console.log(`бронзовый партнёр, скидка ${discount * 100}%`);
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     discount = 0.05;
//     console.log(`серебрянный партнёр, скидка ${discount * 100}%`);
// } else if (totalSpent >= 5000) {
//     discount = 0.1;
//     console.log(`серебрянный партнёр, скидка ${discount * 100}%`);
// } else {
//     console.log(`не партнёр, скидка ${discount * 100}%`);
// }

// payment -= payment * discount;
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);

// серебрянный партнёр, скидка 5%
// Оформляем заказ на сумму 475 со скидкой 5%
// Общая сумма потраченого в магазине: 2475


// Task №7 ()

// let base = prompt("Напиши случайное число");
// base = Number(base);
// console.log(base);
// let power = prompt("Напиши степень");
// power = Number(power);
// console.log(power);
// const result = base ** power;
// console.log(result);



// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;


// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
// console.log(message);

// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//     result = message.toLowerCase();
//  result = result.includes('spam') || result.includes('sale') ? true : false;
//   // Пиши код выше этой строки
//   return result;
// }

//  console.log(checkForSpam('Latest technology news'));
//   console.log(checkForSpam('JavaScript weekly newsletter'));
//   console.log(checkForSpam('Get best sale offers now!'));
//   console.log(checkForSpam('Amazing SalE, only tonight!'));
//   console.log(checkForSpam('Trust me, this is not a spam message'));
//   console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
//   console.log(checkForSpam('[SPAM] How to earn fast money?'));


//   function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//     result = message.toLowerCase();
//  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ? true : false;
//   // Пиши код выше этой строки
//   return result;
// }

//  console.log(checkForSpam('Latest technology news'));
//   console.log(checkForSpam('JavaScript weekly newsletter'));
//   console.log(checkForSpam('Get best sale offers now!'));
//   console.log(checkForSpam('Amazing SalE, only tonight!'));
//   console.log(checkForSpam('Trust me, this is not a spam message'));
//   console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
//   console.log(checkForSpam('[SPAM] How to earn fast money?'));


//   function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки

//       message = available < ordered ? 'На складе недостаточно товаров' : 'Заказ оформлен, с вами свяжется менеджер';
// // if (available < ordered) { // Дополни эту строку
// //     message = 'На складе недостаточно товаров';
// //   } else {
// //     message = 'Заказ оформлен, с вами свяжется менеджер';
// //   }
//    // Пиши код выше этой строки
//   return message;
// };
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));


// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45


// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//     array = [array[0], array[array.length - 1]];
//   return array;  

//     // Пиши код выше этой строки
//   }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));
// console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));


// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
// return message.split(' ').length * pricePerWord;


//   // Пиши код выше этой строки
// }

// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20));

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
//  string = array.join(delimeter);


//   // Пиши код выше этой строки
//   return string;
// }

// console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));
// console.log(makeStringFromArray(['М', 'а', 'н', 'г', 'о'], ''));
// console.log(makeStringFromArray(['лучшее', 'за', 'неделю'], '_'));


// function slugify(title) {
//   // Пиши код ниже этой строки
//   title = title.toLowerCase().split(' ').join('-');
//  return title;


//   // Пиши код выше этой строки
// }

// console.log(slugify('Массивы для новичков'));
// console.log(slugify('Английский для разработчика'));
// console.log(slugify('Десять секретов JavaScript'));
// console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));


// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(fruits.length - 3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку

// console.log(allClients);

//Модуль 2 Задача 16.
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
// if (firstArray.concat(secondArray).length > maxLength) {
//   return firstArray.concat(secondArray).slice(0, maxLength);
// } 
//   return firstArray.concat(secondArray);


//     // Пиши код выше этой строки
//   }

// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
// console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
// console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0));

//Модуль 2 Задача 17.
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// }

//Модуль 2 Задача 18.
// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//     let sum = 0;
//     for (let i = 0; i <= number; i += 1) {
//         sum += i;
//     };

//     return sum;


//   // Пиши код выше этой строки
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal(9));

//Модуль 2 Задача 19.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//         // total = total + order[i];
//     }
//   // Пиши код выше этой строки
//   return total;
// }

//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//   console.log(calculateTotalPrice([55, 7, 66, 3, 99]));


// function findLongestWord(string) {
//     // Пиши код ниже этой строки
//     string = string.split(' ');
//     let maxElement = string[0];


//     for (const element of string) {
//         if (element.length > maxElement.length) {
//             maxElement = element;
//         }
//     }
//     console.log(maxElement);
//     // for (let i = 0; i < string.length; i += 1) {
//     //     // console.log(string[i].length);
//     //     if (string[i].length > string[i + 1].length) {
//     //         return string[i];
//     //     }
//     //     // return string[i + 1];

//     //     // Пиши код выше этой строки
//     // }
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));
// // console.log(findLongestWord());

// // let string = 'The quick brown fox jumped over the lazy dog';
// // string = string.split(' ');
// // console.log(string);
// // console.log(string[0].length);

// Модуль 2. Задача 21.
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   string = string.split(' ');
//   let longestWord = string[0];

//   for (const word of string) {
//   if (word.length > longestWord.length) {
//       longestWord = word;
//       }
//     }
//      return longestWord;
//   // Пиши код выше этой строки
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));
// console.log(findLongestWord('Если я решила эту задачку, то я молодец!'));

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   string = string.split(' ');
//   let longestWord = string[0];

//     for (let i = 0; i < string.length; i += 1) {
//   if (string[i].length > longestWord.length) {
//       longestWord = string[i];
//         }
//     }
//      return longestWord;
//   // Пиши код выше этой строки
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));
// console.log(findLongestWord('Если я решила эту задачку, то я молодец!'));

// Модуль 2. Задача 22.
// function createArrayOfNumbers(min, max) {
//     const numbers = [];

//   // Пиши код ниже этой строки
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);

//     }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(5, 40));

// Модуль 2. Задача 23.
// Спосіб 1.
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// const array = [];

//   for (const number of numbers) {
//     if (number > value) {
//       array.push(number);
//     }
//   }
// return array;

//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([40, 54, 10, 15, 55], 30));

// Спосіб 2.
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// const array = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }
// return array;

//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([40, 54, 10, 15, 55], 30));

// Модуль 2. Задача 24.
// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit) ? true : false; // Дополни эту строку
// }

// console.log(checkFruit('слива'));
// console.log(checkFruit('мандарин'));
// console.log(checkFruit('груша'));
// console.log(checkFruit('Груша'));
// console.log(checkFruit('яблоко'));
// console.log(checkFruit('вишня'));



// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
//     if (fruits.includes(fruit)) {
//         return true;
// }
//   return false; 
// }

// console.log(checkFruit('слива'));
// console.log(checkFruit('мандарин'));
// console.log(checkFruit('груша'));
// console.log(checkFruit('Груша'));
// console.log(checkFruit('яблоко'));
// console.log(checkFruit('вишня'));

// Модуль 2. Задача 25.
// Спосіб 1.
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let array = [];

//   for (const element of array1) {
//   if (array2.includes(element)) {
//     array.push(element);
//   } 
//   }
//   return array;

//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([1, 2, 3, 40, 20], [10, 20, 30, 20]));

// Спосіб 2.
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let array = [];

//     for (const element of array1) {
//        array2.includes(element) ? array.push(element) : array;  
//     }
//      return array;

//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []
// console.log(getCommonElements([1, 2, 3, 40, 20], [10, 20, 30, 20])); // [20]


// Модуль 2. Задача 26.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const element of order) {
//     total += element;
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));
// console.log(calculateTotalPrice([25, 40, 55, 90]));

// Модуль 2. Задача 27.
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([12, 24, 8, 41, 76], 50));

// Модуль 2. Задача 29.
// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//   let arrayEven = [];

//   for (let i = start; i <= end; i += 1) {
//   if (i % 2 === 0) {
//       arrayEven.push(i);
//   }
//   }
//   return arrayEven;

//     // Пиши код выше этой строки
//   }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers(45, 51));


// Модуль 2. Задача 30.
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//       break;
//   }
// }

// console.log(number);


// Модуль 2. Задача 31.
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }


//   // Пиши код выше этой строки
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));
// console.log(findNumber(50, 70, 4));


// Модуль 2. Задача 32.
// function includes(array, value) {
//   // Пиши код ниже этой строки
// for (let i = 0; i < array.length; i += 1) {
//     return array.includes(value) ? true : false;
// }

//   // Пиши код выше этой строки
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));
// console.log(includes(['бульдог', 'терьер', 'пудель', 'мопс'], 'пекинес'));


// function includes(array, value) {
//   // Пиши код ниже этой строки
//     for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//         return true;
//     }  
// }
// return false;
//   // Пиши код выше этой строки
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));
// console.log(includes(['бульдог', 'терьер', 'пудель', 'мопс'], 'пекинес'));


// function includes(array, value) {
//   // Пиши код ниже этой строки
//   for (number of array) {
//     if (number === value) {
//       return true;
//     }
//   }
//   return false;
//   // Пиши код выше этой строки
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
