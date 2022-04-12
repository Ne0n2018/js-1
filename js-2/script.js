//  с помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
let n = prompt('введите число');
if ( n > 0 && n < 100 ) {
    alert("число в диапазоне от нуля до ста");
} else {
    alert("число не в диапазоне от нуля до ста ");
}
// с помощью логического ИЛИ в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
let num = prompt('введите число');
if (n > 0 || n < 100) {
    alert('число в диапозоне от нуля до ста') 
} else {
    alert('число не в диапозоне от нуля до ста')
}
// Создайте объект с именами и заработными платами
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх рублей.
const engineers = {Den: 1000,Matt: 5000,Steve: 2000};
for (let property  in engineers) {
    console.log(`Зарабтная плата ${property} состовляет ${engineers[property]}`)
}
// Создать массив из 5 элементов.

// Используя цикл for, вывести каждый второй элемент массива в консоль.
 array = [1, 2, 3, 4, 5];
 for (let i = 1; i < array.length; i = i + 2) {
         alert(array[i])
 }
//  Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Индекс ${i} соответсвует число ${numbers[i]}`)
}

// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
for (const item of numbers) {
    console.log(item[numbers])
}
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// Посчитать и вывести в консоль сумму элементов в массиве.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum);
// Посчитать и вывести в консоль сумму четных элементов в массиве
let sumchot = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        sumchot = sumchot + numbers[i];
    }
}
console.log(sumchot);
// Найти и вывести в консоль максимальное число массива.
let max = 0;
for (let i = 0; i < numbers.length; i++) {
    if (max > numbers[i]) {
        max = numbers[i];
    }
}
console.log(max);
// Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == max) {
        console.log(`максимальное число - ${max} имеет индекс - ${i}`)
    }
}
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        newArr.push(arr[i]);
    }
}
for (const iterator of newArr) {
    console.log(iterator[newArr]);
}
// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.
let nums = [5, 4, 3, 8, 0];
let limit = 5;
let numLimit = [];
for (let i = 0; i < nums.length; i++) {
 if (limit >= nums[i]) {
    numLimit.push(nums[i]);     
 }
}
for (const iterator of numLimit) {
    console.log(iterator[numLimit])
}
// Описать массив из объектов с двумя полями: строковым и числовым.
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}]
// Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.
const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}];
for (let i = 0; i < users.length; i++) {
    if (users.age[i] > 10) {
        console.log(users.age[i]);
    }
}
// Задать массив слов. Например:
// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова):
// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
// Вывести этот массив в консоль.
// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)
// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let newwords =[];
for (let i = 0; i < vegetables.length; i++) {
    newwords.push({'word':vegetables[i], 'length':vegetables[i].length})
}
for (let i = 0; i < newwords.length; i++) {
    console.log(`${newwords[i].word}-${newwords[i].length}`)
}
