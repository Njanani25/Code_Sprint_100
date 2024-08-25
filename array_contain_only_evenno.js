let array = [2, 4, 6, 8, 10];
let allEven = true;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        allEven = false;
        break;
    }
}
console.log(allEven);
