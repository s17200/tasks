let email = localStorage.getItem("email");
let number = localStorage.getItem("number");
let code = localStorage.getItem("country");

console.log(email,number,code);

document.getElementsByTagName("h1").innerHTML=email;
document.getElementsByTagName("h2").innerHTML=number;
document.getElementsByTagName("h3").innerHTML=code;