let arr = [3, 1, 7, 2, 9, 5, 8, 4];
let evenCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("The number of even numbers in the array is:", evenCount);
