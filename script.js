const numeric = '0123456789' ;
const upper = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const symbol = '#!@$%&)(*&%@?><~`+_-';
const passwordBox = document.querySelector('.input');
const length = 12;
const allChars = upper + numeric + lower + symbol ;



const button = document.querySelector('.generate');

function generatePassword(){
    let password = '';
    password += upper[Math.floor(Math.random()*upper.length)];
    password += lower[Math.floor(Math.random()*lower.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    password += numeric[Math.floor(Math.random()*numeric.length)];


    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];

    }

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
}