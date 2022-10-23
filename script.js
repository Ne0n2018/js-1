// 1)Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
// }
let i = 0;
 while (i < 3) {
     alert(`numbers${i}`);
     i++
 }



 let male = prompt("Введите свой пол");
 let masage = male == "male"?"man":"woman";
 alert(masage);


// 3) Задать массив логических значений (true/false). Например: const roles = [true, false, false, true, false]

// Каждое значение обозначает админ (true) или пользователь (false).

// Из этого массива сформировать массив объектов - roles, такой же длины, как и заданный массив.

// У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.

// Т.е. из

// [true, false, false]

// должно получиться

// [{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]
//  const trueOrFalse = [true, false, false, true, false];
 let roles = [];
 for (let i = 0; i < trueOrFalse.length; i++) {
     let inf = trueOrFalse[i] == true ? 'admin' : 'user';
     roles.push({'role': inf})
 }
 for (let i = 0; i < roles.length; i++) {
     alert(`статус пользователя: ${roles[i].role}`);
 }



// 4)Создайте функцию findPositiveNumbers()

// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .

// Функция должна вывести в консоль все положительные числа по одному.

// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.

// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.

// 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр
     let poz = prompt("Введие желаемую операцию");
     let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
     findPositiveNumbers(poz,arr);
     function findPositiveNumbers(pozihtion,arr) {
    
         if ( pozihtion == 1 ) {
             for (let i = 0; i < arr.length; i++) {
                 if ( arr[i] > 0 ) {
                     console.log(arr[i]);
                 }
             }
         } else if ( pozihtion == 2 ) {
             let newArr =[],min = arr[1],j = 0;
             for (let i = 0; i < arr.length; i++) {
                 if ( min > arr[i] ) {
                     min = arr[i];
                 }
             }
             do {
                 if (arr[j] > min) {
                     newArr.push(arr[j]);
                 }
                 j++
             } while ( newArr.length != arr.length );
             for (let i = 0; i < newArr.length; i++) {
                 alert(newArr[i]);
             }
         } else if ( pozihtion == 3 ) {
             let polArr = [];
             for (let i = 0; i < arr.length; i++) {
                 if (arr[i] > 0) {
                     polArr.push(arr[i]);
                 }
             }
             return polArr;
        } }



    // 5)Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.


    // Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']
     let number = prompt("Введите колличество эллементов в массиве"),element = prompt("введите элемент для массива") ;
     creatM(number,element);
     function creatM(number,element) {
    //     let mas = [];
    //     for (let i = 0; i < number; i++) {
    //         mas[i] = element;
    //     }
    //     return mas;
     }
    




    // 6)Определите массив, например let arr = [5, 4, 3, 8, 0].
    // Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
    
    
    // Например, запуск функции filterFor(arr, 5) дает результат [5,8]
    // а запуск функции filterFor(arr, 10) дает результат []
    // а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
     let arrr = [5, 4, 3, 8, 0],a = prompt("Введите минимальное число в массиве");
     corectionM(arrr,a);
     function corectionM(arr,a) {
    //     let corectArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] >= a) {
    //             corectArr[i] = arr[i]; 
    //         }
    //     }
    //     return corectArr;
     }


    // 7)Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"

    // Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
    // function getRandomInteger(min, max) {
    // return Math.floor(Math.random() * (max - min)) + min;
    // }
    // Подсказка: 
    
    // Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
    
    // Одна функция может вызывать другую функцию
 let min = prompt('Введите минимальный парметер цвета '), max = prompt("Введите максимальный параметр цвета");
 generethionColor(min,max);
     function getRandomInteger(min, max) {
         return Math.floor(Math.random() * (max - min)) + min;
         }
         function generethionColor(min,max) {
             console.log(`rgb(${getRandomInteger(min,max)},${getRandomInteger(min,max)},${getRandomInteger(min,max)})`);
         }




// 8)Написать функцию, которая выводит в консоль квадраты чисел из заданного диапазона (от min до max), где значения min и max передаются в функцию как параметры.

// Примеры вызова такой функции:

// getSquares(0, 100) - выведет квадраты чисел от 0 до 100

// getSquares(56, 87) - выведет квадраты чисел от 56 до 87
 let minA = prompt("Введите минимальное число"), maxA = prompt("Введиет максимальное число");
 pow(minA,maxA)
 function pow(min,max) {
//     for (let i = min; i <= max; i++) {
//         console.log(Math.pow(i,max));
//     }
 }




// 9)Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.

// Для проверки, целое ли число, вам понадобится опеатор % (подумайте, остаток от деления на какое число подойдет для вашей цели)
 let x = prompt("Введитен x");
 isInteger(x);
 function isInteger(x) {
//     if (x % 2 == 0) {
//         alert(true);
//     } else {
//         alert(false);
//     }
 }



// 10)Написать функцию, которая принимает целое число n.   

// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.


// Пример, при запуске функции с параметром 3:

// "1 integer"
// "1.5 decimal"
// "2 integer"

// "2.5 decimal"
let n = prompt("Введите n");
natural(n);
function natural(n) {
    for (let i = 0; i < n; i + 0,5) {
        if (Number.isInteger(i)) {
            alert(`${i} integer`);
        } else {
            alert(`${i} decimal`);
        }
    }
}
