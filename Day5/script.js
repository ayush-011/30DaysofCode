const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789";
const symbol = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/"
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = shufflePassword(password);
}

function shufflePassword(password){
    return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')
}

function copyPassword() {
    const password = passwordBox.value;

    if (password) {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy:", err);
            });
    } else {
        alert("Nothing to copy!");
    }
}