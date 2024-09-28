// Задание 1 
// let company = prompt('Какое «официальное» название JavaScript?');

// if ('ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }

//Задание 2
// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';


// Задание 3 
let login = prompt("Введите логин:");

if (login === "Админ") {
  let password = prompt("Введите пароль: ");

  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === null || password === "") {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }

} else if (login === null || login === "") {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
