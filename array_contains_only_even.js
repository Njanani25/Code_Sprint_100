let arr = [2, 4, 6, 8];
let allEven = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        allEven = false;
        break;
    }
}
if (allEven) {
    console.log("The array contains only even numbers.");
} else {
    console.log("The array contains some odd numbers.");
}
