//ЗАДАНИЯ В КЛАССЕ 

//задания 1
// const number = [1,2,3,4,5];
// const doubledNumbers = number.map(num => num * 2,num => num - 2);
// console.log(doubledNumbers);

//задания 2
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
// numbers.sort((a, b) => a - b);
// console.log(numbers); 

//задания 3
// const strings = ['hello', 'world'];
// strings.reverse();
// console.log(strings); 

//задания 4
// const fruits = 'apple,banana,cherry';
// const fruitArray = fruits.split(',').join('!!!');
// console.log(fruitArray); 

//задания 5
// const numbers = [1,2,3,4,5,6,7]
// const sum = numbers.reduce((acc, current) => acc + current, 0);
// console.log(sum); 

//ДОМАШНЕЕ ЗАДАНИЕ
//задание 1
let map = new Map();
map.set("Ключ1", "знач1");  
map.set("Ключ2", "знач2");  
map.set("Ключ3", "знач3"); 
alert(map.get("Ключ1")); 
map.delete("ключ 2");
map.has("Ключ 3");
map.forEach((value,key) => {
    console.log(`${key}, ${value}`)
});

//задание 2
let set = new Set();
set.set("Ключ1", "знач1");  
set.set("Ключ2", "знач2");  
set.set("Ключ3", "знач3"); 
alert(set.get("Ключ1")); 
set.delete("ключ 2");
set.has("Ключ 3");
set.forEach((value,key) => {
    console.log(`${key}, ${value}`)
});