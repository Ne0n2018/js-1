// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.



// Выведите в консоль строку:

// С помощью браузера ... я открыл страничку ... 

// (необходимые значения добавьте с помощью BOM)
 console.log(`С помощью браузера ${navigator.userAgent} я открыд страничку ${location.href}`);

//  В файле html есть разметка:

//  <ul id="list">
//  <li>Джон</li>
//  <li>Пит</li>
//  <li>Джессика</li>
//  <li>Сара</li>
//  </ul>
 
//  Вывести в консоль каждое из имен (содержимое каждого li).
 for (let i = 0; i < document.querySelector('#list').children.length; i++) {
     console.log(document.querySelector('#list').children[i].innerText);
 }

//  Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
 for (let i = 0; i < document.querySelector('#list').children.length; i++) {
    console.log(document.querySelector('#list').children[i].innerText = i);
 }

//  Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
const p = document.createElement('p');
p.innerText = 'random information';
p.style.width = '36px';
p.style.fontWeight = 'bold';
document.body.appendChild(p);
// Написать в html тег заголовка с текстом "Сегодня:" 

// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.
let d = new Date();
document.querySelector('#data').innerText = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;



// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
function create(teg,color,text) {
    const element = document.createElement(`${teg}`);
    element.style.color = `${color}`;
    element.innerText = `${text}`;
    return element;
}
document.body.appendChild(create("h2","red","funny joke"))
document.body.appendChild(create("p","green","sad joke"))
document.body.appendChild(create("a","orange","bad joke"))


// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
let select = document.querySelector('#sel');
for (let i = 1960; i <= 2020; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option);
}



// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:


// const clients = [

// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}

// ]



// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом



// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
const clients = [

    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
    
    ]
    const sel = document.querySelector('#clients');
    for (let i = 0; i < clients.length; i++) {
        let result = (clients[i].order == true) ? 'оплатил' : 'не оплатил';
        const li = document.createElement('li');
        li.innerText = `Клиент ${clients[i].name} ${result} заказ`;
        sel.appendChild(li);    
    }
    // Есть массив ссылок:

    // let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
    
    // Вам нужно:
    
    // 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
    
    // 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
    
    // c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
    // При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
    
    // ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
    
    // element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
    
    // Вкладывать ссылки в див нужно с помощью метода appendChild или append.
    
    // 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
    const div = document.createElement('div');
    div.style.background = 'blue';
    div.style.padding = '10px';
    document.body.appendChild(div);
    let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
    for (let i = 0; i < linksArr.length; i++) {
        let a = document.createElement('a');
        a.href = `${linksArr[i]}`;
        a.target = 'blank';
        a.style.color = 'red'
        a.style.paddingRight = '25px'
        a.innerText = `${linksArr[i]}`;
        div.append(a);
    }
    // Создать массив объектов с полями name, age. Например:

    // const users = [
    // {name: 'Mark', age: 12},
    // {name: 'Olga', age: 30},
    // {name:'Tom', age: 25},
    
    // {name:'Den', age: 43}
    // ]
    
    // Создать в html таблицу (table).
    
    // C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
    
    
    
    // ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.
    const users = [
        {name: 'Mark', age: 12},
        {name: 'Olga', age: 30},
        {name:'Tom', age: 25},
        {name:'Den', age: 43}
        ];
        let s = document.querySelector('#table');
for (let i = 0; i < users.length; i++) {
    let tr = document.createElement('tr');
    let tdr = document.createElement('td');
    let tdb = document.createElement('td');
    tdr.style.backgroundColor = 'red';
    tdb.style.backgroundColor = 'blue';
    tdr.innerText = `${users[i].name}`;
    tdb.innerText = `${users[i].age}`;
    s.appendChild(tr);
    tr.append(tdr);
    tr.append(tdb);
}


     




