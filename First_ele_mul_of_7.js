let firstMultipleOf7 = null;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 7 === 0) {
        firstMultipleOf7 = arr[i];
        break;
    }
}
console.log("First multiple of 7:", firstMultipleOf7);
