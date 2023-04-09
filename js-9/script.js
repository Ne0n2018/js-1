let input = document.getElementById('#one');
let ul1 = document.querySelector('ul');
input.addEventListener('keyup', function (event) {
    let li = document.createElement('li');
    li.innerText = `${event.key}`;
    ul1.append(li);
})

// Вставить в html тег input (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value
let inp = document.getElementById('#inp');
inp.addEventListener('keyup', () => {

    console.log(inp.value);
})




//   Задание 3

//   Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value). 
const edit = document.querySelector('#edit');
const ul = document.querySelector('#ul');
const fm = document.forms.fm;
fm.addEventListener('submit', (e) => {
    e.preventDefault();
    let li = document.createElement('li');
    li.innerText = edit.value;
    edit.value = '';
    ul.appendChild(li);
})


// Калькулятор. 

// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.



// 1) решить с помощью if

// 2) решить с помощью evel (https://developer.mozilla.org/...)
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const select = document.querySelector("#znak")
const fm1 = document.forms.fm1;
const cont = document.querySelector("#container");
fm1.addEventListener('submit', () => {
    if (select.value == '+') {
        cont.innerText = first.value + second.value;
    }
    if (select.value == '-') {
        cont.innerText = first.value - second.value;
    }
    if (select.value == '*') {
        cont.innerText = first.value * second.value;
    }
    if (select.value == '/') {
        cont.innerText = first.value / second.value;
    }
})


// Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
const but = document.getElementById('#color');
but.addEventListener('mouseenter', () => {
    but.style.background = `rgb(${randomInteger(0,256)},${randomInteger(0,256)},${randomInteger(0,256)}` 
})
but.addEventListener('mouseleave', () => {
    but.style.transform = `rotate${randomInteger(-180,180)}deg`;
})
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
