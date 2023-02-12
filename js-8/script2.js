// console.log(`С помощью браузера ${navigator.userAgent} я открыд страничку ${location.href}`);


// for (let i = 0; i < document.querySelector('#list').children.length; i++) {
//     console.log(document.querySelector('#list').children[i].innerText);
// }


// for (let i = 0; i < document.querySelector('#list').children.length; i++) {
//    console.log(document.querySelector('#list').children[i].innerText = i);
// }


const p = document.createElement('p');
p.innerText = 'random information';
p.style.width = '36px';
p.style.fontWeight = 'bold';
document.body.appendChild(p);
let d = new Date();
document.querySelector('#data').innerText = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;




function create(teg,color,text) {
    const element = document.createElement(`${teg}`);
    element.style.color = `${color}`;
    element.innerText = `${text}`;
    return element;
}
document.body.appendChild(create("h2","red","funny joke"))
document.body.appendChild(create("p","green","sad joke"))
document.body.appendChild(create("a","orange","bad joke"))



let select = document.querySelector('#sel');
for (let i = 1960; i <= 2020; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option);
}




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


     




