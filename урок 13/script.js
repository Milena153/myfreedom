//ЗАДАНИЯ НА УРОКЕ

//задача 1

// let name = "john";
// function sayHi() {
//     alert("Hi, " + name);
// }
// name = "pete";
// sayHi();
//ОТВЕТ - pete


//задача 2
//  
// let pharase = 'hi';
// if (true) {
//     let user = 'john';
//     function sayHi() {
//         alert (`${pharase}, ${user}`);
//     }
// }
// sayHi()
//ответ - john

//задача 3 
// function makeCounter() {
//     let count = 0;

//     return function(){
//         return count ++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();
// alert( counter() );
// alert( counter() );
// alert( counter2() );
// alert( counter2() );
//ответ -0 1 0 1


//ДОМАШНЕЕ ЗАДАНИЕ

//задание 1
// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth() + 1; 
// const day = currentDate.getDate();
// console.log(`Today: ${day}.${month}.${year}`);

//задание 2
// const currentDate = new Date();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();
// console.log(`Current time: ${hours}:${minutes}:${seconds}`);

//задание 3
// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const month = String(currentDate.getMonth() + 1).padStart(2, '0');
// const day = String(currentDate.getDate()).padStart(2, '0');
// const hours = String(currentDate.getHours()).padStart(2, '0');
// const minutes = String(currentDate.getMinutes()).padStart(2, '0');
// const seconds = String(currentDate.getSeconds()).padStart(2, '0');
// console.log(`Today: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);