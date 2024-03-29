// for (let i = 0; i < 10; i = i + 1)  'i = i + 1' - длинная запись
// for (let i = 0; i < 10; i += 1)  'i = i + 1' - короче запись

for (let i = 0; i < 10; i++) {
  console.log(i); // 0,1,2,3,4,5,6,7,8,9,10
}

const arr2 = [12, 4, 32, 5, 32, 34];
console.log(arr2); // [ 12, 4, 32, 5, 32, 34 ]

// ----------------------------------------------
const arr1 = [12, 4, 32, 5, 32, 34];
for (let i = 0; i < arr1.length; i++) {
  // i < 7
  console.log(arr1[i]); // 12, 4, 32, 5, 32, 34
}
// ----------------------------------------------
//https://pythontutor.com/visualize.html#mode=edit
// ----------------------------------------------
// Задача 1.
// Вывести из массива arr только положительные числа

const array = [12, -4, 32, -34, 5, -32, 34];

for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    console.log(array[i]); // 12, 32, 5, 34
  }
}
// ----------------------------------------------
// Вывести из массива arr только отрицательные числа

const arr = [12, -4, 32, -34, 5, -32, 34];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 0) {
    console.log(arr[i]); // -4, -34, -32
  }
}
// ----------------------------------------------

const arr = [12, -4, 32, -34, 5, -32, 34];
arr[2] = -100; // заменили индекс в массиве
console.log(arr); // [12, -4, -100, -34, 5, -32, 34];
// ----------------------------------------------
// Задача 1.
// Напишите цикл, который позволяет преобразовать все отрицательные числа в положительные,
// после цикла выведите массив

const arr = [12, -4, 32, -34, 5, -32, 34];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr[i] = -arr[i]; // 4, 34, 32
    // console.log((arr[i] = -arr[i])); // 4, 34, 32
  }
}
console.log(arr); // [12, 4, 32, 34, 5, 32, 34]
// ----------------------------------------------

const arr = [12, -4, 32, -34, 5, -32, 34];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr[i] *= -1; // 4, 34, 32
    // arr[i] = arr[i] * -1;  ---- эквивалентная запись  ----- arr[i] *= -1;
    // console.log((arr[i] *= -1));
  }
}
console.log(arr); // [12, 4, 32, 34, 5, 32, 34]

// Math.abs() -  Возврощает модуль из чесла (положительное число  "-1  будет 1")

const arr = [12, -4, 32, -34, 5, -32, 34];
for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.abs(arr[i]);
}
console.log(arr); // [12, 4, 32, 34, 5, 32, 34]
// ----------------------------------------------
// Напишите цикл, который преобразует все нечетные числа в четные (прибавляет 1)
// в конце выведите массив
const arr = [12, 3, 32, 33, 5, 32, 34];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    arr[i] += 1;
  }
}
console.log(arr); // [12, 4, 32, 34, 6, 32, 34];
// ----------------------------------------------

// Напишите цикл, который выводит только число, квадрата которых меньше 1000

const arr = [12, 3, 32, 33, 5, 32, 34, 1000];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] ** 2 < 1000) {
    console.log(arr[i]); // 12, 3, 5
  }
}

// ----------------------------------------------
// Найти сумму чисел из массива и вывести ее

const arr = [12, 3, 32, 33, 5, 32, 34];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  // sum = sum + arr[i]; --  sum += arr[i];
}
console.log(sum); // 151
// ----------------------------------------------

// Доработать цикл таким образом, чтобы он расчитывал сумму четных чисел
//  прибовлял между собой только четные числа
const arr = [12, 3, 32, 33, 5, 32, 34];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum += arr[i];
  }
}
console.log(sum); // 110
// ----------------------------------------------

// Написать цикл (один), который находит сумму четных чисел и сумму нечетный
// после цикла вывести эти значения

const arr = [12, 3, 32, 33, 5, 32, 34];
let sum_even = 0;
let sum_odd = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum_even += arr[i];
  } else {
    sum_odd += arr[i];
  }
}
console.log("sum_even:", sum_even); // 110
console.log("sum_odd:", sum_odd); // 41
// ----------------------------------------------

// Найти сумму положительных чисел и отрицательных из массива
// используя только один цикл
// сумма отрицательных чисел нужно посчитать без минуса

const arr = [12, 3, -32, 33, -5, 32, -34];
let sum_positive = 0;
let sum_negative = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum_positive += arr[i];
  } else {
    sum_negative -= arr[i];
  }
}
console.log("sum_positive:", sum_positive); // 110
console.log("sum_negative:", sum_negative); // 41
// ----------------------------------------------

// Найти максимальное число из массива все числа в массиве положительные

const arr = [12, 3, 32, 33, 5, 32, 34];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > result) {
    result = arr[i];
  }
}
console.log(result); // 34

// ----------------------------------------------

// Найти максимальное число из массива
const arr = [-12, -3, -32, -33, -5, -32, -34];

let result = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > result) {
    result = arr[i];
  }
}
console.log(result); // -3
// ----------------------------------------------

/* Написать цикл, который находит индекс максимального числа 
если максимальных чисел несколько, то мы сохраним индекс 
первого максимального числа */

const arr = [-12, -3, -32, -33, -5, -32, -34];

let max_result = arr[0];
let max_index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max_result) {
    max_result = arr[i];
    max_index = i;
  }
}
console.log(max_index); // 1
// ----------------------------------------------

// Найти в массиве преднаибольшее число

const arr = [4, 7, 12, 11];
let max_result = arr[0];
let pred_max_result = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max_result) {
    pred_max_result = max_result;
    max_result = arr[i];
  } else if (arr[i] > pred_max_result) {
    pred_max_result = arr[i];
  }
}
console.log(pred_max_result); // 11
