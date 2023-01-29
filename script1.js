// Задание 1

// Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:

// Math.round(x)

// Math.ceil(x)
// Math.floor(x)

// В комментариях к каждой строке напишите, как работают эти округления.
 console.log(Math.round(5.4));// округление в меньшую сторону если дробная часть меньше пяти , а если больше или равна пяти ,то в большую
 console.log(Math.round(5.5));
 console.log(Math.round(5.6));
 console.log(Math.ceil(5.4));// всегда в большую 
 console.log(Math.ceil(5.5));
 console.log(Math.ceil(5.6));
 console.log(Math.floor(5.4)); // всегда в  меньшую  
 console.log(Math.floor(5.5));
 console.log(Math.floor(5.6));


// Задание 2

// Выведите в консоль фразы в 2 строки:

// Сегодня 27.10.2022 (здесь будет ваша дата)

// 19 часов 20 минут (здесь будет ваше время)
var d = new Date();
console.log(`сегодня ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`);
console.log(`${d.getHours()} часов ${d.getMinutes()} минут`);

