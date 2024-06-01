const passwordBox = document.getElementById("password");
const lenght = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const Symbol = "@#$%^&*()_+~}{[]></-=";

const allChars = upperCase + lowerCase + number + Symbol;


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += Symbol[Math.floor(Math.random() * Symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

}