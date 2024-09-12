let arr = [3, 2, 5, 1, 8, 7];
let firstGreater;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
        firstGreater = arr[i];
        break;
    }
}
console.log(firstGreater); 
