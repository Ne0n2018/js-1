// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// Вам понадобятся методы строк. 
function ucFirst(str) {
     if (!str) return str;
  
     return str[0].toUpperCase() + str.slice(1);
   }
  
 console.log(ucFirst("привет"));


//  Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
//  Функция должна быть нечувствительна к регистру.
 function checkSpam(str) {
     let lowerStr = str.toLowerCase();
  
     if (lowerStr == "bad word" || lowerStr == "xxx") {
         return true
     } else {
         return false
     }
   }
   console.log(checkSpam("bad word"));
   console.log(checkSpam("XxX"));
   console.log(checkSpam("hello"));


//    Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

//    Обратите внимание: метод reverse существует только у массивов.
   
   
 function reversString(str) {
    return str.split("").reverse().join(""); 
 }
 console.log(reversString("hello"));

//  Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 



//  let stations = [
 
//  'MAN675847583748sjt567654;Manchester Piccadilly',
 
//  'GNF576746573fhdg4737dh4;Greenfield',
 
//  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
 
//  'SYB4f65hf75f736463;Stalybridge',
 
//  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
 
//  ];
 
 
 
//  Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
 
//  MAN: Manchester Piccadilly
 
//  Вывести эти строки в консоль
 
//  ПОДСКАЗКА:
 
//  1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
//  2. Найдите номер символьного номера точки с запятой.
//  3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
//  4. Объедините две новые переменные и строк
 
 

// let stations = ['MAN675847583748sjt567654;Manchester Piccadilly','GNF576746573fhdg4737dh4;Greenfield','LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
// 'SYB4f65hf75f736463;Stalybridge','HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
    

 function reading(stats) {
     let char = [];
     let lastChar = [];
     let point;
     for (let i = 0; i < stats.length; i++) {
         char[i] = stats[i].slice(0,3);
         point = stats[i].indexOf(";");
         lastChar[i] = stats[i].slice(point + 1);
         console.log(`${char[i]}:${lastChar[i]}`);
     }
 }
 reading(stations);  
//  Напишите функцию, которая проверяет, можержит ли массив элементы, равные нулю. Если да - возвращает true.

//  Проверить работу функции на примере массивов [12, 4, 50, 1, 0, 18, 40], [56, 24, -55, 2, 9, -345]
 
 
 function zero(mas) {
     for (let i = 0; i < mas.length; i++) { 
         if (mas[i] == 0) {
             return true
             break;
         } else{
             return false
         }
     }
 }
 let mas1 = [12, 4, 50, 1, 0, 18, 40];
 let mas2 = [56, 24, -55, 2, 9, -345];
 console.log(zero(mas1));
 console.log(zero(mas2));




//  Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.

//  Пример:
 
//  let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
 
//  console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
 function unique(arr) {
     let result = [];
  
     for (let str of arr) {
       if (!result.includes(str)) {
         result.push(str);
       }
     }
  
     return result;
   }
  
   let strings = ["кришна", "кришна", "харе", "харе",
     "харе", "харе", "кришна", "кришна", ":-O"
   ];
   console.log(unique(strings));




//    Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.

//    Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
   
//    Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
   
//    1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
   
//    2. Создайте общий массив с данными Жени (исправленными) и Юли.
   
//    3. Для каждой кошки этого общего массива выведите в консоль текст:
   
//    - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
   
//    - если котёнок - Кошка № 2 ещё котёнок
   
//    4. Вызовите функцию для двух наборов тестовых данных.
   
//    Тестовые данные:
   
//    1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
   
//    Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
   
//    2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
   
//    Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

 function verifyCat(mas1,mas2) {
     let newMas1 = mas1.slice(1,mas1.length - 1);
     allMas = newMas1.concat(mas2);
     allMas.forEach(function(item,i) {
         if(item >= 2){
             console.log(`Кошка № ${i} взрослая `)
         }else{
             console.log(`Кошка № ${i} маленькая `)
         }
     });
 }
 let jenia1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
 let julia1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
 let jenia2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
 let julia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];
 verifyCat(jenia1,julia1);
 verifyCat(jenia2,julia2);


// function filtre(arr,num) {
//     let filtred = arr.filtre(
//         function (item) {
//            return item >= num
//         }
//     )
//     return filtred
// }
// let arr = [5, 4, 3, 8, 0];
// console.log(filtre(arr,10));
// console.log(filtre(arr,3.11));


// function moreThan3(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > 3) {
//             newArr[i] = arr[i];
//         }
//     }
//     return newArr
// }
// let txt =  ['yes', 'hello', 'no', 'easycode', 'what'];
// console.log(moreThan3(txt));




// const massive = [ [14, 45], [1], ['a', 'c', 'd'] ];
// function sortive(arr) {
//     const sortMassive = arr.sort(
//         function (a,b ) {
//             if( a.length > b.length){
//                 return 1
//             }if(a.length < b.length){
//                 return -1 
//             }
//         }
//     )
// }
// console.log(sortive(massive));


function getAverageHumanAge(catAges) {
    return catAges.map(catAge => catAge <= 2 ? catAge * 10 : catAge * 7)
      .filter(humanAge => humanAge >= 18)
      .reduce((avg, age, i, a) => avg + age / a.length, 0)
  }
  let ages = [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2];
  let ages2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
  console.log(getAverageHumanAge(ages));
  console.log(getAverageHumanAge(ages2));