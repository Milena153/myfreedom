//Задание 1
// function setCookie(name, value, expiresDays) {  
//     let date = new Date(); 
//     date.setTime(date.getTime() + (expiresDays * 24 * 60 * 60 * 1000)); 
//     let expires = "expires=" + date.toUTCString(); 
//     document.cookie = name + "=" + value + ";" + expires; 
//     } 
//     setCookie("username", "John Doe", 30); 
    
//Домашнее задание 

//1
function hasCookie(name) { 
    const cookies = document.cookie;
    const name = name.trim() + "=";
    return cookies.split(';');
 } 
    if (hasCookie("username")) { 
       console.log("Cookie 'username' существует"); 
    } else { 
        console.log("Cookie 'username' не существует"); 
    } 
   
//2
area.value = localStorage.getItem('area'); 
area.oninput = () => {
    localStorage.setItem('area', area.value)
  };

