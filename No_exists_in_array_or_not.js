let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        found = true;
        break;
    }
}
console.log(found ? "Number exists." : "Number does not exist.");
