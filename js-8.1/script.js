let ul = document.querySelector('ul');
ul.classList.add('list');
for (let i = 0; i < ul.children.length; i++) {
    if ((i + 1) % 2 != 0) {
        ul.children[i].classList.add('item');
    }
}
let a = document.querySelectorAll('a');
a.classList.add('custom-link');