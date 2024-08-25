let arr = [10, 15, 20, 25, 30];
let specificNumber = 5;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % specificNumber === 0) {
        count++;
    }
}
console.log("The number of elements divisible by " + specificNumber + " is: " + count);
