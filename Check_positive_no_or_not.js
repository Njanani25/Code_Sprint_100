let arr = [2, 5, -9, 7, -5, 1, 8];
let allPositive = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        allPositive = false;
        break;
    }
}
console.log(allPositive ? "All elements are positive" : "Not all elements are positive");
