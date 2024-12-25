// console.log(document.body.firstElementChild);
// console.log(document.body.children[1].lastElementChild);

//домашнее задание
//задание 1
let elements = document.querySelectorAll('button');
elements.forEach(button => {
  elements.textContent = 'нажми меня';
});

//задание 2
const container = document.querySelector('.container');
if (container) {
    container.classList.add('active'); 
}

//задание 3
const parentElement = document.getElementById('parent');
if (parentElement) {
    console.log(descendants.length);
}
