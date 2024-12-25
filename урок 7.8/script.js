// задания 1

// let obj = {};
// obj.name = 'john';
// obj.surname = 'smith';
// obj.name = 'pete'
// delete obj.name

// задание 2

//   function isEmpty(object){
//     let result;
//     for (let key in object) {        
//         result += key;
//     }

//     if (result){
//         return false;
//        } else {
//         return true;
//        }
//   }

//   console.log(isEmpty({
//     name: "misha"
//   }))

// задание 3

// let salaries = {John: 100, Ann:160, Pete: 130 }
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
//   }
//   alert(sum)

// задание 4

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] === 'number'){
//             menu[key] *=2
//         }
//     }
// };
// multiplyNumeric(menu);
// console.log(menu);