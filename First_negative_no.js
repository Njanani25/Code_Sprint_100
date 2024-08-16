let arr = [3, 5, -1, 8, -4, 2];
let firstNegative = null;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        firstNegative = arr[i];
        break;
    }
}
if (firstNegative !== null) {
    console.log(firstNegative);
} else {
    console.log("No negative number found");
}
