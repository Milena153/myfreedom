//задание 1
// const person = {
//     name: 'Victoria',
//     age: 24,
//     greet: function() {
//         return `Привет, меня зовут ${this.name}!`;
//     },
//     haveBirthday: function() {
//         this.age += 1;
//     }
// };
// console.log(person.greet()); 
// person.haveBirthday();
// console.log(person.age);


//задание 2
// const counter = {
//     count: 1,
//     increment : function(){
//         this.count++
//     },
//     decrement : function (){
//         this.count--
//     },
//     reset : function (){
//         this.count = 0 
//     }
// };
// counter.increment();
// counter.decrement();
// counter.reset();
// console.log(counter.count);


//задание 3

// const Settings = {
//     property1: "example1",
//     property2: "example2",
//     setProperty: function(propName, example) {
//         if (this.hasOwnProperty(propName)) {
//             this[propName] = example;
//         }
//     }
// };
// Settings.setProperty();
// console.log(Settings.property1);