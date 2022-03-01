//Создать массив из 5 элементов, используя цикл for вывести каждый второй элемент массива в консоль
let first = [1,2,3,4,5];
for (let i = 0; i < first.length; i+=2) {
    console.log(first[i]);
}
// Вывести значения всех элементов массива и соответствующие им индексы
let mass = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
for (let i = 0; i < mass.length; i++) {
    console.log('число '+ first[i]+' Индекс '+i);
    
}
//Найти и вывести в консоль максимальное число массива
let max =mass[1];
for (let i = 0; i < mass.length; i++) {
    if ( max < mass[i] ) {
        max = mass[i]        
    }
}
console.log(mass);
//Определить индекс максимального числа массива (или индексы, если число встречается более одного раза)
for (let i = 0; i < mass.length; i++) {
    if ( max == mass[i] ) {
        console.log(i);        
    }
}
//Написать функцию pow(x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результа
console.log(pow(6,7));
function pow(x,n) {
    let final = x;
    for (let i = 1; i < n; i++) {
        final = final*x;
    }
    return(final)
}