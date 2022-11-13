// 1)Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:

// sum(2,4); // 6

// sum('d',4); // введенные данные не являются числами

// sum(1, [2]); // введенные данные не являются числами

// sum(1); // введите два параметра

// sum(); // введите два параметра

 let smartSum = function (a,b) {
     if (arguments.length == 2 ) {
         if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            return a * b;
         } else {
            console.error;
         }
     } else {
         console.log("введите два числа");
     }
 }
 console.log(smartSum(4,77));
 console.log(smartSum("4",77));
      



//  2)Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
//  "Функция "square" не может быть вызвана без аргумента"

//  let square = function (a) {
//     if (a != undefined) {
//         console.log(a * a);
//     } else {
//         console.log("error!");
//     }
//   }
//   square(10);
//   square();

//  function square(a) {
//    console.log(a * a)
//  }

//  square(10) // 100

//  square()
//  // ДО: NaN
//  // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

  let square = function (a) {
     if (a != undefined) {
         console.log(a * a);
     } else {
         console.log("error!");
     }
   }
   square(10);
   square();


// let game = (a) => {
//     let ran = Math.random () * 10;
//     if (a == ran) {
//         console.log("числа совпали");
//     } else {
//         console.log(`числа не совпалию Ваше число ${a}. загадагнное число ${ran}`);
//     }
// }
// game(7);




//   3) Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.

//    Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”

//    Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
   
//    Написать функцию в стрелочном синтаксисе.
   
   
 let game = (a) => {
     let ran = Math.random () * 10;
     if (a == ran) {
         console.log("числа совпали");
     } else {
         console.log(`числа не совпалию Ваше число ${a}. загадагнное число ${ran}`);
     }
 }
 game(7);





// 4) Определить массив, например let arr = [5, 4, 3, 8, 0];
//  Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
//  Например, запуск функции filterFor(arr, 5) дает результат [5,8]
//  запуск функции filterFor(arr, 10) дает результат []
//  запуск функции filterFor(arr, 3.11) дает результат [4,5,8]


 let filterFor = (arr, a) =>{
     let newArr = [];
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] >= a) {
             newArr.push(arr[i]); 
         }
     }
 }
 let arr = [5, 4, 3, 8, 0];
 filterFor(arr,6);





//  5)Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.


 let num =[1,2,3,4,5,6,78]
 let newNum = num.map((item) => { return item } );






// 6) Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
//  Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//     a: 10,
//     b: 20,
//     c: 'string',
//     d: 12,
//   }


let sum = (objectWithNumbers) =>{
    sum = 0;
    for (const key in objectWithNumbers) {
        if (typeof objectWithNumbers[key] == "number") {
            sum = sum + objectWithNumbers[key];
        }
    }
};
const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
  }
  sum(objectWithNumbers);
console.log(sum);
