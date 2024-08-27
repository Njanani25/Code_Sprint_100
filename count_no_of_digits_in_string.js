let str = "There are 123 digits in 4567";
let digitCount = 0; 
for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
        digitCount++;
    }
}
console.log("The number of digits in the string is: " + digitCount);
