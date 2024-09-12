let str = "Hello@world!";
let hasSpecialChar = false;
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!char.match(/[a-zA-Z0-9]/)) {
        hasSpecialChar = true;
        break;
    }
}
console.log(hasSpecialChar); 
