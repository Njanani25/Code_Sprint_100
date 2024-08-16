let str = "Hello World";
let hasUppercase = false;
for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
        hasUppercase = true;
        break;
    }
}
if (hasUppercase) {
    console.log("The string contains uppercase letters.");
} 
else {
    console.log("The string does not contain uppercase letters.");
}
